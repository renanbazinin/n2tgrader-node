import fs from 'fs';
import path from 'path';
import JSZip from 'jszip';

const root = path.resolve('.');
const zipPath = path.join(root, 'test', '04.zip');
if (!fs.existsSync(zipPath)) {
  console.error('Zip not found:', zipPath);
  process.exit(1);
}

const simBase = path.join(root, 'simulator', 'build');
const simLoaderPath = 'file://' + path.join(simBase, 'loader.js').replace(/\\/g, '/');
const simTstPath = 'file://' + path.join(simBase, 'languages', 'tst.js').replace(/\\/g, '/');
const simCPUTestPath = 'file://' + path.join(simBase, 'test', 'cputst.js').replace(/\\/g, '/');
const simMemoryPath = 'file://' + path.join(simBase, 'cpu', 'memory.js').replace(/\\/g, '/');

(async () => {
  const data = fs.readFileSync(zipPath);
  const zip = await JSZip.loadAsync(data);

  // find Fill.asm or Fill.hack
  const names = Object.keys(zip.files).filter(n => !n.endsWith('/'));
  const candidate = names.find(n => /Fill\.(asm|hack)$/i.test(n));
  if (!candidate) {
    console.error('No Fill.asm/hack found in zip');
    process.exit(1);
  }

  const asmText = await zip.file(candidate).async('string');

  // We'll simulate the interactive behavior by running 3 phases:
  // 1) keyboard untouched (RAM[24576]=0) -> run ticks -> output
  // 2) keyboard pressed (RAM[24576]=1) -> run ticks -> output
  // 3) keyboard untouched again -> run ticks -> output

  const { loadAsm, loadHack } = await import(simLoaderPath);
  const { CPUTest } = await import(simCPUTestPath);
  const { ROM } = await import(simMemoryPath);

  // assemble program
  let rom;
  if (candidate.toLowerCase().endsWith('.asm')) {
    const program = await loadAsm(asmText);
    rom = new ROM(Int16Array.from(program));
  } else {
    const program = await loadHack(asmText);
    rom = new ROM(Int16Array.from(program));
  }

  // Build a minimal CPUTest runner that loads our ROM and allows direct memory sets
  // We'll construct a small harness: run for N ticks, allow writing to RAM via memory map
  const { TestRunner } = await import('file://' + path.join(simBase, 'test', 'testing', 'runner.js').replace(/\\/g, '/')).catch(()=>({TestRunner: undefined}));

  // fallback: use the existing CPUTest.from flow by synthesizing a small TST script that loads a ROM
  const tstScript = [`load ${path.basename(candidate)};`, 'repeat 1000 { ticktock; }'];

  // Instead, we'll create a tiny harness using CPUTest directly if possible
  const { default: _ } = await import(simCPUTestPath).catch(()=>({}));

  // Simpler approach: reuse debug_fill style: create a CPUTest from a small TST that does nothing, then manually run phases
  // Create a TST that loads the file then outputs the memory list
  const fakeTst = `load ${path.basename(candidate)}, output-list RAM[16384]%D2.6.2 RAM[17648]%D2.6.2 RAM[18349]%D2.6.2 RAM[19444]%D2.6.2 RAM[20771]%D2.6.2 RAM[21031]%D2.6.2 RAM[22596]%D2.6.2 RAM[23754]%D2.6.2 RAM[24575]%D2.6.2;`;

  const { TST } = await import(simTstPath);
  const maybe = TST.parse(fakeTst);
  if ((maybe).error) {
    console.error('Failed to parse fake TST');
    process.exit(1);
  }
  const tstObj = maybe.ok ? maybe.ok : maybe;

  // create doLoad that returns our rom
  const doLoad = async (fn) => rom;

  const maybeTest = CPUTest.from(tstObj, { dir: '.', doLoad: doLoad, requireLoad: false });
  const test = maybeTest.ok ? maybeTest.ok : maybeTest;

  // helper to set RAM via test.env/fs? The CPUTest exposes memory access via test.machine.mem? We'll attempt to access test.machine.ram
  // Run phase helper
  async function runPhase(setValue, ticks=5000) {
    // set keyboard RAM[24576]
    try {
      if (test && test.cpu && test.cpu.RAM) {
        // RAM.set expects index, value
        test.cpu.RAM.set(24576, setValue ? 1 : 0);
      }
    } catch (e) {
      // ignore
    }
    // run ticks
    for (let i=0;i<ticks;i++) {
      if (typeof test.ticktock === 'function') test.ticktock();
      else if (typeof test.tick === 'function') await test.tick();
      else await Promise.resolve();
    }
    // capture output
    return test.log();
  }

  // initialize and run
  if (test.init) await test.init();
  // ensure ROM is loaded via test.load
  if (test.load) await test.load(path.basename(candidate));

  console.log('--- Phase 1: keyboard untouched (0) ---');
  const out1 = await runPhase(0, 1000000);
  console.log(out1);

  console.log('--- Phase 2: keyboard pressed (1) ---');
  const out2 = await runPhase(1, 1000000);
  console.log(out2);

  console.log('--- Phase 3: keyboard released (0) ---');
  const out3 = await runPhase(0, 1000000);
  console.log(out3);

})();
