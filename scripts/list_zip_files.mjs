import fs from 'fs';
import path from 'path';
import JSZip from 'jszip';

const zipPath = path.resolve('test', '04.zip');
const data = fs.readFileSync(zipPath);
(async ()=>{
  const zip = await JSZip.loadAsync(data);
  const names = Object.keys(zip.files).filter(n => !n.endsWith('/'));
  console.log('Total file count:', names.length);
  for (const n of names) console.log(' -', n);
  const parsed = names.map(n => path.parse(n));
  console.log('Parsed names:', parsed.map(p=>p.base));
})();
