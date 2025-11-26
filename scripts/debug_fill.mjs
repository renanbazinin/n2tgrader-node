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
const proj04Base = path.join(root, 'projects', 'build', 'project_04');

const simLoaderPath = pathToFileUrl(path.join(simBase, 'loader.js'));
const simTstPath = pathToFileUrl(path.join(simBase, 'languages', 'tst.js'));
const simCPUTestPath = pathToFileUrl(path.join(simBase, 'test', 'cputst.js'));
const simMemoryPath = pathToFileUrl(path.join(simBase, 'cpu', 'memory.js'));

function pathToFileUrl(p) {
  return 'file://' + p.replace(/\\/g, '/');
}

(async () => {
  const zipData = fs.readFileSync(zipPath);
  const zip = await JSZip.loadAsync(zipData);

  // find Fill.asm or Fill.hack in archive
  const names = Object.keys(zip.files);
  const candidate = names.find((n) => /Fill\.(asm|hack)$/i.test(n));
  let asmText = '';
  if (candidate) asmText = await zip.file(candidate).async('string');
  if (!asmText) {
    console.error('No Fill.asm/hack found in zip');
    process.exit(1);
  }

  const solTstPath = path.join(root, 'solutions', '04', 'fill', 'FillAutomatic.tst');
  const solCmpPath = path.join(root, 'solutions', '04', 'fill', 'FillAutomatic.cmp');
  if (!fs.existsSync(solTstPath) || !fs.existsSync(solCmpPath)) {
    console.error('Solution tst/cmp not found');
    process.exit(1);
  }
  const tstText = fs.readFileSync(solTstPath, 'utf8');
  const cmpText = fs.readFileSync(solCmpPath, 'utf8');

  const { TST } = await import(simTstPath);
  const { CPUTest } = await import(simCPUTestPath);
  const { loadAsm, loadHack } = await import(simLoaderPath);
  const { ROM } = await import(simMemoryPath);

  const maybeTst = TST.parse(tstText);
  if ((maybeTst).error) {
    console.error('TST parse failed');
    process.exit(1);
  }
  const tstObj = (maybeTst.ok ? maybeTst.ok : maybeTst);

  const doLoad = async (filename) => {
    // prefer asm in zip
    const base = path.basename(filename);
    const entry = zip.file(filename) || zip.file(base) || zip.file('Fill.asm');
    if (!entry) throw new Error('Missing asm/hack in zip: ' + filename);
    const txt = await entry.async('string');
    if (base.endsWith('.asm')) {
      const program = await loadAsm(txt);
      return new ROM(Int16Array.from(program));
    }
    if (base.endsWith('.hack')) {
      const program = await loadHack(txt);
      return new ROM(Int16Array.from(program));
    }
    throw new Error('Unsupported load file: ' + base);
  };

  const maybeTest = CPUTest.from(tstObj, { dir: '.', doLoad: doLoad, requireLoad: false });
  const test = maybeTest.ok ? maybeTest.ok : maybeTest;
  await test.run();
  const out = test.log();

  console.log('---- Expected (cmp) ----');
  console.log(cmpText);
  console.log('---- Actual (test.log) ----');
  console.log(out);

  // simple diff
  const el = cmpText.split(/\r?\n/);
  const al = out.split(/\r?\n/);
  const max = Math.max(el.length, al.length);
  console.log('---- DIFF ----');
  for (let i = 0; i < max; i++) {
    const e = el[i];
    const a = al[i];
    if (e === a) console.log('  ' + (e ?? ''));
    else {
      if (e !== undefined) console.log('- ' + e);
      if (a !== undefined) console.log('+ ' + a);
    }
  }
})();
