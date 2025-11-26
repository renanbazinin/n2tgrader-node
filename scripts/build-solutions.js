
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const solutionsRoot = path.resolve(__dirname, '../solutions');
const webPublicRoot = path.resolve(__dirname, '../web/public');
const destRoot = path.join(webPublicRoot, 'solutions');

if (!fs.existsSync(destRoot)) {
    fs.mkdirSync(destRoot, { recursive: true });
}

const solutionFiles = [];

function walkSolutions(dir) {
    if (!fs.existsSync(dir)) return;
    const items = fs.readdirSync(dir, { withFileTypes: true });
    for (const it of items) {
        const full = path.join(dir, it.name);
        if (it.isDirectory()) {
            walkSolutions(full);
        } else {
            const ext = path.extname(it.name).toLowerCase();
            if (['.tst', '.cmp', '.hdl', '.asm', '.hack'].includes(ext)) {
                const rel = path.relative(solutionsRoot, full).replace(/\\/g, '/');
                solutionFiles.push(rel);

                // Copy file to web/public/solutions
                const destPath = path.join(destRoot, rel);
                const destDir = path.dirname(destPath);
                if (!fs.existsSync(destDir)) {
                    fs.mkdirSync(destDir, { recursive: true });
                }
                fs.copyFileSync(full, destPath);
            }
        }
    }
}

console.log('Scanning and copying solutions...');
walkSolutions(solutionsRoot);

const manifestPath = path.join(webPublicRoot, 'solutions.json');
fs.writeFileSync(manifestPath, JSON.stringify(solutionFiles, null, 2));
console.log(`Generated manifest with ${solutionFiles.length} files at ${manifestPath}`);
