import fs from 'fs';
import path from 'path';
import JSZip from 'jszip';

const root = path.resolve('.');
const zipPath = path.join(root, 'test', '04.zip');
if (!fs.existsSync(zipPath)) { console.error('Zip not found'); process.exit(1); }
const data = fs.readFileSync(zipPath);
const zip = await JSZip.loadAsync(data);
const names = Object.keys(zip.files).filter(n => !n.endsWith('/'));
const candidate = names.find(n => /Fill\.(asm|hack)$/i.test(n));
if (!candidate) { console.error('No Fill found in zip'); process.exit(1); }
const txt = await zip.file(candidate).async('string');

const simBase = path.join(root, 'simulator', 'build');
const simLoaderPath = 'file://' + path.join(simBase, 'loader.js').replace(/\\/g, '/');
const simCPUTestPath = 'file://' + path.join(simBase, 'test', 'cputst.js').replace(/\\/g, '/');
const simTstPath = 'file://' + path.join(simBase, 'languages', 'tst.js').replace(/\\/g, '/');
const simMemoryPath = 'file://' + path.join(simBase, 'cpu', 'memory.js').replace(/\\/g, '/');

const { loadAsm, loadHack } = await import(simLoaderPath);
const { CPUTest } = await import(simCPUTestPath);
const { ROM } = await import(simMemoryPath);
const { TST } = await import(simTstPath);

let program;
if (candidate.toLowerCase().endsWith('.asm')) program = await loadAsm(txt);
else program = await loadHack(txt);
const rom = new ROM(Int16Array.from(program));

const fakeTst = `load ${path.basename(candidate)}, output-list RAM[16384]%D2.6.2 RAM[17648]%D2.6.2 RAM[18349]%D2.6.2 RAM[19444]%D2.6.2 RAM[20771]%D2.6.2 RAM[21031]%D2.6.2 RAM[22596]%D2.6.2 RAM[23754]%D2.6.2 RAM[24575]%D2.6.2;`;
const maybe = TST.parse(fakeTst);
const tstObj = maybe.ok ? maybe.ok : maybe;
const maybeTest = CPUTest.from(tstObj, { dir: '.', doLoad: async () => rom, requireLoad: false });
const test = (maybeTest && maybeTest.ok) ? maybeTest.ok : maybeTest;
if (test.init) await test.init();
if (test.load) await test.load(path.basename(candidate));

const runTicks = async (n) => { for (let i=0;i<n;i++){ if (typeof test.ticktock === 'function') test.ticktock(); else if (typeof test.tick === 'function') await test.tick(); } };
const readRow = () => { const addrs = [16384,17648,18349,19444,20771,21031,22596,23754,24575]; try { return addrs.map(a=>test.cpu.RAM.get(a)); } catch(_e){return [];} };

console.log('Running student Fill from', candidate);
try { if (test && test.cpu && test.cpu.RAM) test.cpu.RAM.set(24576, 0); } catch(_){}
await runTicks(1000000);
console.log('Phase1 raw:', JSON.stringify(readRow()));
try { if (test && test.cpu && test.cpu.RAM) test.cpu.RAM.set(24576, 1); } catch(_){}
await runTicks(1000000);
console.log('Phase2 raw:', JSON.stringify(readRow()));
try { if (test && test.cpu && test.cpu.RAM) test.cpu.RAM.set(24576, 0); } catch(_){}
await runTicks(1000000);
console.log('Phase3 raw:', JSON.stringify(readRow()));
