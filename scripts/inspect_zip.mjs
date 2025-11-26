import fs from 'fs';
import JSZip from 'jszip';
import path from 'path';

async function main() {
  const [,, zipPath, fileName] = process.argv;
  if (!zipPath) {
    console.error('Usage: node inspect_zip.mjs <zip> [file]');
    process.exit(1);
  }

  const data = fs.readFileSync(zipPath);
  const zip = await JSZip.loadAsync(data);
  const files = Object.keys(zip.files).filter(f => !f.endsWith('/'));
  console.log(`Zip contains ${files.length} files:`);
  for (const f of files) console.log(' -', f);

  if (fileName) {
    const file = zip.file(fileName) || zip.file(path.basename(fileName));
    if (!file) {
      console.error('File not found in zip:', fileName);
      process.exit(2);
    }
    const text = await file.async('string');
    console.log('\n--- START FILE:', fileName, '---');
    console.log(text.split(/\r?\n/).slice(0,40).join('\n'));
    console.log('--- END ---');
  }
}

main().catch(err => { console.error(err); process.exit(3); });
