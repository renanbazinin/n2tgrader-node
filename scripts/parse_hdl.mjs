import fs from 'fs';
import JSZip from 'jszip';
import path from 'path';
import { HDL } from '../simulator/build/languages/hdl.js';

async function main() {
  const [,, zipPath, fileName] = process.argv;
  if (!zipPath) {
    console.error('Usage: node parse_hdl.mjs <zip> [file]');
    process.exit(1);
  }
  const data = fs.readFileSync(zipPath);
  const zip = await JSZip.loadAsync(data);
  const files = Object.keys(zip.files).filter(f => !f.endsWith('/'));
  const target = fileName || files.find(f => f.endsWith('.hdl'));
  if (!target) { console.error('No .hdl file found'); process.exit(2); }
  const content = await zip.file(target).async('string');
  console.log('Parsing', target, 'size', content.length);
  const parsed = HDL.parse(content);
  console.log('Parsed:', parsed);
  if (parsed && parsed.ok) console.log('OK result');
}

main().catch(err => { console.error(err); process.exit(3); });
