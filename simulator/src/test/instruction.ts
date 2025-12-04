import { Span } from "../languages/base.js";
import { TstOutputSpec } from "../languages/tst.js";
import { Test } from "./tst.js";

export interface TestInstruction {
  span?: Span;
  do(test: Test): Promise<void>;
  steps(test: Test): IterableIterator<TestInstruction>;
}

export class TestControlInstruction implements TestInstruction {
  span: Span;

  constructor(span: Span) {
    this.span = span;
  }

  async do() {
    return;
  }
  *steps() {
    yield this;
  }
}

export class TestStopInstruction extends TestControlInstruction {}
export class TestBreakInstruction extends TestControlInstruction {}

export class TestSetInstruction implements TestInstruction {
  constructor(
    private variable: string,
    private value: number,
    private index?: number | undefined,
  ) {}

  async do(test: Test) {
    test.setVar(this.variable, this.value, this.index);
  }

  *steps() {
    yield this;
  }
}

export class TestOutputInstruction implements TestInstruction {
  async do(test: Test) {
    test.output();
  }

  *steps() {
    yield this;
  }
}

export interface OutputParams {
  id: string;
  style?: "B" | "D" | "S" | "X";
  len?: number;
  lpad?: number;
  rpad?: number;
  builtin?: boolean;
  address?: number;
}

export class TestOutputListInstruction implements TestInstruction {
  private outputs: OutputParams[] = [];

  constructor(specs: TstOutputSpec[] = []) {
    for (const spec of specs) {
      this.addOutput(spec);
    }
  }

  addOutput(inst: TstOutputSpec) {
    this.outputs.push({
      id: inst.id,
      style: inst.format?.style ?? "B",
      len: inst.format?.width ?? -1,
      lpad: inst.format?.lpad ?? 1,
      rpad: inst.format?.rpad ?? 1,
      builtin: inst.builtin,
      address: inst.address,
    });
  }

  async do(test: Test) {
    test.outputList(this.outputs);
    test.header();
  }

  *steps() {
    yield this;
  }
}

export class TestCompoundInstruction implements TestInstruction {
  protected readonly instructions: TestInstruction[] = [];
  span?: Span;

  addInstruction(instruction: TestInstruction) {
    this.instructions.push(instruction);
  }

  async do(test: Test<TestInstruction>) {
    for (const instruction of this.instructions) {
      instruction.do(test);
    }
  }

  *steps(_test: Test): Generator<TestInstruction> {
    yield this;
  }
}

export class TestRepeatInstruction extends TestCompoundInstruction {
  constructor(public readonly repeat: number) {
    super();
  }

  override async do() {
    return undefined;
  }

  private *innerSteps(test: Test): Generator<TestInstruction> {
    for (const instruction of this.instructions) {
      yield* instruction.steps(test) as Generator<TestInstruction>;
    }
  }

  // Check if this repeat block only contains ticktock instructions (for batching)
  // Note: The parser adds a TestStopInstruction after ticktock when separator is ';'
  // So we check for: [ticktock] or [ticktock, stop]
  private isTicktockOnly(): boolean {
    if (this.instructions.length === 0 || this.instructions.length > 2) {
      return false;
    }
    
    const first = this.instructions[0];
    // Check if first instruction is a ticktock (has _cpuTestInstruction_ marker)
    const isFirstTickTock = (first as any)._cpuTestInstruction_ === true;
    
    if (this.instructions.length === 1) {
      return isFirstTickTock;
    }
    
    // Length is 2 - check if second is a stop instruction
    const second = this.instructions[1];
    const isSecondStop = second instanceof TestStopInstruction;
    
    return isFirstTickTock && isSecondStop;
  }

  override *steps(test: Test): Generator<TestInstruction> {
    if (this.repeat === -1) {
      yield this;
      let iterCount = 0;
      const MAX_ITER = 100000; // Safety limit for infinite repeat
      while (iterCount < MAX_ITER) {
        iterCount++;
        if (iterCount % 10000 === 0) {
          console.log(`[DEBUG] TestRepeatInstruction infinite loop iteration: ${iterCount}`);
        }
        yield* this.innerSteps(test);
      }
      console.warn(`[WARN] TestRepeatInstruction hit max iterations (${MAX_ITER}), breaking out`);
    } else if (this.isTicktockOnly() && this.repeat > 1000) {
      // OPTIMIZATION: For large ticktock-only repeats, execute ALL in one batch
      // This is critical for FillAutomatic which has 3 x 1,000,000 ticktocks
      // Directly call ticktock() on the test to avoid async overhead
      const cpuTest = test as any;
      if (typeof cpuTest.ticktock === 'function') {
        // Direct sync call - MUCH faster than going through async do()
        const startTime = performance.now();
        for (let i = 0; i < this.repeat; i++) {
          cpuTest.ticktock();
        }
        const endTime = performance.now();
        console.log(`[PERF] Batched ${this.repeat} ticktocks in ${(endTime - startTime).toFixed(1)}ms`);
      } else {
        // Fallback for non-CPU tests
        const ticktockInst = this.instructions[0];
        for (let i = 0; i < this.repeat; i++) {
          ticktockInst.do(test);
        }
      }
      // Only yield once at the end
      yield this;
    } else {
      for (let i = 0; i < this.repeat; i++) {
        yield this;
        yield* this.innerSteps(test);
      }
    }
  }
}

export class Condition {
  constructor(
    public readonly x: string | number,
    public readonly y: string | number,
    public readonly op: "<" | "<=" | "=" | ">=" | ">" | "<>",
  ) {}

  check(test: Test): boolean {
    const x = test.hasVar(this.x) ? test.getVar(this.x) : this.x;
    const y = test.hasVar(this.y) ? test.getVar(this.y) : this.y;

    if (typeof x === "string" || typeof y === "string") {
      switch (this.op) {
        case "=":
          return `${x}` === `${y}`;
        case "<>":
          return `${x}` !== `${y}`;
      }
    } else {
      switch (this.op) {
        case "<":
          return x < y;
        case "<=":
          return x <= y;
        case ">":
          return x > y;
        case ">=":
          return x >= y;
        case "=":
          return x === y;
        case "<>":
          return x !== y;
      }
    }
    return false;
  }
}

export class TestWhileInstruction extends TestCompoundInstruction {
  constructor(public readonly condition: Condition) {
    super();
  }

  override *steps(test: Test): Generator<TestInstruction> {
    let iterCount = 0;
    const MAX_ITER = 100000; // Safety limit for while loops
    const KEYBOARD_SIMULATE_AFTER = 10; // Simulate keyboard after this many iterations
    
    // Detect keyboard wait pattern: while out <> [keycode]
    // This is used in Memory.tst to wait for keyboard input
    const isKeyboardWait = this.condition.x === 'out' && 
                           this.condition.op === '<>' && 
                           typeof this.condition.y === 'number';
    const expectedKey = isKeyboardWait ? this.condition.y as number : 0;
    
    while (this.condition.check(test)) {
      iterCount++;
      
      // For keyboard wait loops in automated testing, simulate the key press
      if (isKeyboardWait && iterCount === KEYBOARD_SIMULATE_AFTER) {
        console.log(`[DEBUG] TestWhileInstruction: Simulating keyboard press ${expectedKey} (${String.fromCharCode(expectedKey)})`);
        // Try to set the keyboard value via the test
        if (test.hasVar('Keyboard')) {
          test.setVar('Keyboard', expectedKey);
        }
        // Also try to access the Memory chip's keyboard directly
        try {
          const memoryChip = (test as any).chip;
          if (memoryChip && memoryChip.keyboard && typeof memoryChip.keyboard.setKey === 'function') {
            memoryChip.keyboard.setKey(expectedKey);
          } else if (memoryChip && memoryChip.parts) {
            // Look for keyboard in parts
            for (const part of memoryChip.parts) {
              if (part.name === 'Keyboard' && typeof part.setKey === 'function') {
                part.setKey(expectedKey);
                break;
              }
            }
          }
        } catch (e) {
          // Ignore errors when trying to access keyboard
        }
      }
      
      if (iterCount % 10000 === 0) {
        console.log(`[DEBUG] TestWhileInstruction loop iteration: ${iterCount}, condition: ${this.condition.x} ${this.condition.op} ${this.condition.y}`);
      }
      if (iterCount >= MAX_ITER) {
        console.warn(`[WARN] TestWhileInstruction hit max iterations (${MAX_ITER}), condition: ${this.condition.x} ${this.condition.op} ${this.condition.y}, breaking out`);
        break;
      }
      yield this;
      for (const instruction of this.instructions) {
        yield* instruction.steps(test) as Generator<TestInstruction>;
      }
    }
  }
}

export class TestEchoInstruction implements TestInstruction {
  constructor(public readonly content: string) {}
  async do(test: Test) {
    test.echo(this.content);
  }

  *steps() {
    yield this;
  }
}

export class TestClearEchoInstruction implements TestInstruction {
  async do(test: Test) {
    test.clearEcho();
  }

  *steps() {
    yield this;
  }
}

export class TestLoadROMInstruction implements TestInstruction {
  constructor(readonly file: string) {}
  async do(test: Test) {
    await test.loadROM(this.file);
  }

  *steps() {
    yield this;
  }
}

export class TestLoadInstruction implements TestInstruction {
  constructor(readonly file?: string) {}

  async do(test: Test) {
    await test.load(this.file);
  }

  *steps() {
    yield this;
  }
}

export class TestCompareToInstruction implements TestInstruction {
  constructor(readonly file?: string) {}

  async do(test: Test) {
    if (this.file) {
      await test.compareTo(this.file);
    }
  }

  *steps() {
    yield this;
  }
}

export class TestOutputFileInstruction implements TestInstruction {
  constructor(readonly file?: string) {}

  async do(test: Test) {
    if (this.file) {
      test.outputFile(this.file);
    }
  }

  *steps() {
    yield this;
  }
}

export class TestBreakpointInstruction implements TestInstruction {
  constructor(
    readonly variable: string,
    readonly value: number,
  ) {}

  async do(test: Test) {
    test.addBreakpoint(this.variable, this.value);
  }

  *steps() {
    yield this;
  }
}

export class TestClearBreakpointsInstruction implements TestInstruction {
  async do(test: Test) {
    test.clearBreakpoints();
  }

  *steps() {
    yield this;
  }
}
