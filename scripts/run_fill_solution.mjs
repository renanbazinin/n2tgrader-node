import fs from 'fs';
import path from 'path';

const root = path.resolve('.');
const solAsm = path.join(root, 'solutions', '04', 'fill', 'Fill.asm');
const solHack = path.join(root, 'solutions', '04', 'fill', 'Fill.hack');
const simBase = path.join(root, 'simulator', 'build');

if (!fs.existsSync(simBase)) {
  console.error('Simulator build not found at', simBase);
  process.exit(1);
}

const simLoaderPath = 'file://' + path.join(simBase, 'loader.js').replace(/\\/g, '/');
const simCPUTestPath = 'file://' + path.join(simBase, 'test', 'cputst.js').replace(/\\/g, '/');
const simTstPath = 'file://' + path.join(simBase, 'languages', 'tst.js').replace(/\\/g, '/');
const simMemoryPath = 'file://' + path.join(simBase, 'cpu', 'memory.js').replace(/\\/g, '/');

(async () => {
  const { loadAsm, loadHack } = await import(simLoaderPath);
  const { CPUTest } = await import(simCPUTestPath);
  const { ROM } = await import(simMemoryPath);
  const { TST } = await import(simTstPath);

  let rom;
  if (fs.existsSync(solHack)) {
    const txt = fs.readFileSync(solHack, 'utf8');
    const program = await loadHack(txt);
    rom = new ROM(Int16Array.from(program));
    console.log('Loaded solution Fill.hack');
  } else if (fs.existsSync(solAsm)) {
    const txt = fs.readFileSync(solAsm, 'utf8');
    const program = await loadAsm(txt);
    rom = new ROM(Int16Array.from(program));
    console.log('Loaded solution Fill.asm');
  } else {
    console.error('No solution Fill.asm/.hack found');
    process.exit(1);
  }

  const fakeTst = `load Fill.asm, output-list RAM[16384]%D2.6.2 RAM[17648]%D2.6.2 RAM[18349]%D2.6.2 RAM[19444]%D2.6.2 RAM[20771]%D2.6.2 RAM[21031]%D2.6.2 RAM[22596]%D2.6.2 RAM[23754]%D2.6.2 RAM[24575]%D2.6.2;`;
  const maybe = TST.parse(fakeTst);
  if ((maybe).error) {
    console.error('Failed to parse fake TST');
    process.exit(1);
  }
  const tstObj = maybe.ok ? maybe.ok : maybe;

  const maybeTest = CPUTest.from(tstObj, { dir: '.', doLoad: async () => rom, requireLoad: false });
  const test = (maybeTest && maybeTest.ok) ? maybeTest.ok : maybeTest;

  if (test.init) await test.init();
  if (test.load) await test.load('Fill.asm');

  const runTicks = async (n) => {
    for (let i = 0; i < n; i++) {
      if (typeof test.ticktock === 'function') test.ticktock();
      else if (typeof test.tick === 'function') await test.tick();
    }
    return test.log();
  };

  // Phase 1: keyboard 0
  try { if (test && test.cpu && test.cpu.RAM) test.cpu.RAM.set(24576, 0); } catch (_) {}
  await runTicks(1000000);
  const readRow = () => {
    const addrs = [16384,17648,18349,19444,20771,21031,22596,23754,24575];
    try {
      return addrs.map(a => test.cpu.RAM.get(a));
    } catch (_e) { return [] }
  };
  const out1 = test.log();
  console.log('--- Solution Phase1 (keyboard=0) ---');
  console.log('raw rows:', JSON.stringify(readRow()));

  // Phase 2: keyboard 1
  try { if (test && test.cpu && test.cpu.RAM) test.cpu.RAM.set(24576, 1); } catch (_) {}
  await runTicks(1000000);
  const out2 = test.log();
  console.log('--- Solution Phase2 (keyboard=1) ---');
  console.log('raw rows:', JSON.stringify(readRow()));

  // Phase 3: keyboard 0
  try { if (test && test.cpu && test.cpu.RAM) test.cpu.RAM.set(24576, 0); } catch (_) {}
  await runTicks(1000000);
  const out3 = test.log();
  console.log('--- Solution Phase3 (keyboard=0) ---');
  console.log('raw rows:', JSON.stringify(readRow()));

})();
