import fs from 'fs';
import JSZip from 'jszip';
import { ZipFileSystemAdapter } from '../src/zip_fs.js';

async function main() {
  const [,, zipPath, filename] = process.argv;
  const data = fs.readFileSync(zipPath);
  const zip = await JSZip.loadAsync(data);
  const adapter = new ZipFileSystemAdapter(zip);
  console.log('zip keys sample:', Object.keys(zip.files).slice(0,10));
  const file = filename || 'And.hdl';
  try {
    const content = await adapter.readFile(file);
    console.log('Read size for', file, content.length);
    console.log(content.split(/\r?\n/).slice(0,20).join('\n'));
  } catch (e) {
    console.error('Adapter readFile error:', e.message || e);
  }
}

main();
