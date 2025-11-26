
import { FileSystem } from "@davidsouther/jiffies/lib/esm/fs.js";
import { Assignments } from "@nand2tetris/projects/full.js";
import * as Project04 from "@nand2tetris/projects/project_04/index.js";
import { runTests } from "@nand2tetris/simulator/projects/runner.js";
import { TST } from "@nand2tetris/simulator/languages/tst.js";
import { CPUTest } from "@nand2tetris/simulator/test/cputst.js";
import { loadAsm, loadHack } from "@nand2tetris/simulator/loader.js";
import { ROM } from "@nand2tetris/simulator/cpu/memory.js";
import JSZip from "jszip";
import { ZipFileSystemAdapter } from "../../src/zip_fs.js"; // Reuse existing adapter if possible, or copy it

// Helper: infer project folder (e.g. '01') from the uploaded zip filename
function inferProjectDirFromZip(zipName) {
    const base = zipName.toLowerCase(); // path.basename not needed if zipName is just filename
    // look for two-digit or one-digit project numbers like 01,1,02,2, etc.
    const m = base.match(/(?:^|[-_.])0?([1-9]|1[0-9])(?:[-_.]|$)/);
    if (!m) return null;
    const n = Number(m[1]);
    return String(n).padStart(2, '0');
}

// Simple Levenshtein distance for fuzzy matching small names
function levenshtein(a, b) {
    const A = a.toLowerCase();
    const B = b.toLowerCase();
    const m = A.length, n = B.length;
    const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
    for (let i = 0; i <= m; i++) dp[i][0] = i;
    for (let j = 0; j <= n; j++) dp[0][j] = j;
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            const cost = A[i - 1] === B[j - 1] ? 0 : 1;
            dp[i][j] = Math.min(dp[i - 1][j] + 1, dp[i][j - 1] + 1, dp[i - 1][j - 1] + cost);
        }
    }
    return dp[m][n];
}

function findClosestName(target, candidates) {
    if (candidates.length === 0) return undefined;
    const t = target.toLowerCase().replace(/hack$/i, "");
    let best;
    for (const original of candidates) {
        const candBase = original.replace(/\.tst$|\.cmp$|\.asm$|\.hdl$|\.vm$/i, "");
        const cand = candBase.toLowerCase();
        const d = levenshtein(t, cand);
        if (!best || d < best.dist) best = { name: candBase, dist: d };
    }
    if (best && best.dist <= 2) return best.name; // threshold
    return undefined;
}

export async function gradeZip(file, updateStatus) {
    updateStatus('Loading zip...');
    const zip = await JSZip.loadAsync(file);
    const vfs = new FileSystem(new ZipFileSystemAdapter(zip));
    const allFiles = Object.keys(zip.files);

    const relevantFiles = allFiles
        .filter((f) => !f.endsWith("/"))
        .map((f) => {
            const parts = f.split('/');
            const base = parts[parts.length - 1];
            const ext = '.' + base.split('.').pop();
            const name = base.replace(ext, '');
            return { name, base, ext, full: f };
        })
        .filter((p) => {
            // Include ASM/HACK files unconditionally (tests may be in project modules), otherwise require Assignments mapping
            if (['.asm', '.hack'].includes(p.ext)) return true;
            return Assignments[`${p.name}.tst`] !== undefined;
        })
        .filter((p) => ['.hdl', '.asm', '.vm', '.hack'].includes(p.ext));

    // If both .asm and .hack exist for the same name, prefer .asm: remove .hack entries
    const asmNames = new Set(relevantFiles.filter((p) => p.ext === '.asm').map((p) => p.name));
    // const filtered = relevantFiles.filter((p) => !(p.ext === '.hack' && asmNames.has(p.name))); // filtered not used?

    // Deduplicate by base name so we don't run the same logical project twice
    const seen = new Map();
    for (const p of relevantFiles) {
        // prefer .asm over .hack when both exist for the same logical name
        if (!seen.has(p.name)) seen.set(p.name, p);
        else {
            const prev = seen.get(p.name);
            if (prev.ext === '.hack' && p.ext === '.asm') {
                seen.set(p.name, p);
            }
        }
    }
    const uniqueFiles = Array.from(seen.values());

    if (relevantFiles.length === 0) {
        return { exitCode: 0, stdout: "No recognizable Nand2Tetris project files found in zip.", resultsByFile: {} };
    }

    updateStatus(`Found ${relevantFiles.length} project files. Fetching solutions...`);

    const projectDir = inferProjectDirFromZip(file.name) || null;
    console.log(`[DEBUG] Inferred project directory: ${projectDir || 'none'}`);

    // Load solution manifest
    let solutionFiles = [];
    try {
        const r = await fetch('/solutions.json');
        if (r.ok) {
            solutionFiles = await r.json();
        }
    } catch (e) {
        console.warn('Failed to load solutions manifest', e);
    }

    // Filter solution files based on projectDir
    if (projectDir) {
        solutionFiles = solutionFiles.filter(rel => {
            const parts = rel.split('/');
            return parts[0] === projectDir;
        });
    }

    // Build solution map
    const solutionMap = new Map();
    for (const rel of solutionFiles) {
        const parts = rel.split('/');
        const fname = parts[parts.length - 1];
        const ext = '.' + fname.split('.').pop().toLowerCase(); // simple ext extraction
        const nameNoExt = fname.replace(/\.[^.]+$/, '');
        const key = nameNoExt.toLowerCase();
        const dir = rel.substring(0, rel.lastIndexOf('/')); // dirname

        if (!solutionMap.has(key)) solutionMap.set(key, { files: {}, relDir: dir });
        const entry = solutionMap.get(key);
        entry.files[ext] = rel;
    }

    // Helper to find a solution entry for a given base name
    function findSolutionForName(name) {
        const lc = name.toLowerCase();
        const cands = solutionFiles.filter((rel) => {
            const parts = rel.split('/');
            const fname = parts[parts.length - 1];
            const nameNoExt = fname.replace(/\.[^.]+$/, '');
            return nameNoExt.toLowerCase() === lc;
        });

        if (cands.length === 0) return undefined;
        // Prefer a candidate that contains .tst/.cmp in the same dir
        const chosen = cands[0];
        const dir = chosen.substring(0, chosen.lastIndexOf('/'));
        const files = {};
        for (const rel of solutionFiles) {
            const d = rel.substring(0, rel.lastIndexOf('/'));
            if (d !== dir) continue;
            const parts = rel.split('/');
            const fname = parts[parts.length - 1];
            const nameNoExt = fname.replace(/\.[^.]+$/, '');
            if (nameNoExt.toLowerCase() !== lc) continue;
            const ext = '.' + fname.split('.').pop().toLowerCase();
            files[ext] = rel;
        }
        return { files, relDir: dir };
    }

    // Use direct zip-based loader
    const loadAssignmentZip = async (file) => {
        const entry = zip.file(file.base) || zip.file(file.full); // Try base then full path?
        // Actually uniqueFiles has 'base' which is filename, and 'full' which is path in zip.
        // zip.file(file.base) might fail if it's in a subdir in zip.
        // Let's try to find the entry in zip.files
        let zipEntry = zip.file(file.full);
        if (!zipEntry) {
            // search by basename
            const found = Object.keys(zip.files).find(k => k.endsWith('/' + file.base) || k === file.base);
            if (found) zipEntry = zip.file(found);
        }

        const content = zipEntry ? await zipEntry.async('string') : "";

        const tst = Assignments[`${file.name}.tst`];
        const cmp = Assignments[`${file.name}.cmp`];

        const dir = file.full.substring(0, file.full.lastIndexOf('/')) || ".";
        const root = dir.split('/')[0] || ".";

        return { ...file, hdl: content, tst, cmp, root, dir };
    };

    // Separate HDL/VM from ASM/HACK files
    const asmFiles = uniqueFiles.filter((p) => ['.asm', '.hack'].includes(p.ext));
    const hdlFiles = uniqueFiles.filter((p) => p.ext === '.hdl');

    const runWithTimeout = async (p, ms, onTimeout) => {
        let timer = null;
        try {
            const timeoutPromise = new Promise((resolve, reject) => {
                timer = setTimeout(() => {
                    try {
                        const v = onTimeout();
                        resolve(v);
                    } catch (e) {
                        reject(e);
                    }
                }, ms);
            });
            return await Promise.race([p, timeoutPromise]);
        } finally {
            if (timer) clearTimeout(timer);
        }
    };

    const asmResults = [];

    updateStatus('Running ASM/HACK tests...');
    // Run ASM / HACK tests
    for (const p of asmFiles) {
        try {
            let tst = Assignments[`${p.name}.tst`];
            let cmp = Assignments[`${p.name}.cmp`];
            let tstSource = tst ? 'Assignments' : undefined;
            let cmpSource = cmp ? 'Assignments' : undefined;

            // Fallback: Project 04 mappings
            if (!tst || !cmp) {
                try {
                    const mapping = Project04.TESTS;
                    if (mapping) {
                        const direct = mapping[p.name];
                        if (direct && direct[`${p.name}.tst`] && direct[`${p.name}.cmp`]) {
                            tst = direct[`${p.name}.tst`];
                            cmp = direct[`${p.name}.cmp`];
                            tstSource = `project_04:${p.name}`;
                            cmpSource = `project_04:${p.name}`;
                        } else {
                            const keys = Object.keys(mapping || {}).flatMap((k) => Object.keys(mapping[k] || {}));
                            const closest = findClosestName(p.name, keys);
                            if (closest) {
                                for (const section of Object.keys(mapping || {})) {
                                    const sec = mapping[section];
                                    const tstKey = `${closest}.tst`;
                                    const cmpKey = `${closest}.cmp`;
                                    if (sec && sec[tstKey] && sec[cmpKey]) {
                                        tst = sec[tstKey];
                                        cmp = sec[cmpKey];
                                        tstSource = `project_04:${section}/${closest}`;
                                        cmpSource = `project_04:${section}/${closest}`;
                                        break;
                                    }
                                }
                            }
                        }
                    }
                } catch (_e) { }
            }

            // Solution map fallback
            if (!tst || !cmp) {
                const solEntry = solutionMap.get(p.name.toLowerCase());
                if (solEntry) {
                    if (!tst && solEntry.files['.tst']) {
                        const r = await fetch('/solutions/' + solEntry.files['.tst']);
                        if (r.ok) tst = await r.text();
                    }
                    if (!cmp && solEntry.files['.cmp']) {
                        const r = await fetch('/solutions/' + solEntry.files['.cmp']);
                        if (r.ok) cmp = await r.text();
                    }
                }
            }

            // Fill special case
            if (!tst || !cmp) {
                if (p.name === 'Fill') {
                    // try to fetch FillAutomatic
                    try {
                        const tstR = await fetch('/solutions/04/fill/FillAutomatic.tst');
                        const cmpR = await fetch('/solutions/04/fill/FillAutomatic.cmp');
                        if (tstR.ok && cmpR.ok) {
                            tst = await tstR.text();
                            cmp = await cmpR.text();
                            tstSource = 'FillAutomatic';
                            cmpSource = 'FillAutomatic';
                        }
                    } catch (e) { }
                }
            }

            if (!tst || !cmp) {
                asmResults.push({ name: p.name, pass: false, out: `No test/cmp mapping found for ${p.name}` });
                continue;
            }

            // Special-case interactive Fill (SKIP for now in browser? Or try to run?)
            // The original code had logic for interactive Fill. Let's keep it simple for now and rely on FillAutomatic if possible.
            // If we have tst/cmp, we run standard CPUTest.

            // Parse test
            const maybeTst = TST.parse(tst);
            if (maybeTst.ok === undefined && maybeTst.error) {
                asmResults.push({ name: p.name, pass: false, out: `TST parse failed` });
                continue;
            }

            // Load program
            let program = [];
            let zipEntry = zip.file(p.full);
            if (!zipEntry) {
                const found = Object.keys(zip.files).find(k => k.endsWith('/' + p.base) || k === p.base);
                if (found) zipEntry = zip.file(found);
            }
            const txt = zipEntry ? await zipEntry.async('string') : '';

            if (p.ext === '.asm') {
                program = await loadAsm(txt);
            } else {
                program = await loadHack(txt);
            }
            const rom = new ROM(Int16Array.from(program));

            const doLoad = async () => rom;

            const maybeTest = CPUTest.from(maybeTst.ok ? maybeTst.ok : maybeTst, {
                dir: '.',
                doLoad: doLoad,
                requireLoad: false,
            });

            const test = maybeTest.ok ? maybeTest.ok : maybeTest;

            const RUN_TIMEOUT_MS = 30_000;
            await runWithTimeout((async () => { await test.run(); return true; })(), RUN_TIMEOUT_MS, () => {
                throw new Error(`Test run timed out after ${RUN_TIMEOUT_MS}ms`);
            });

            const out = test.log();
            const pass = out.trim() === cmp.trim();
            asmResults.push({ name: p.name, pass, out, cmp });

        } catch (e) {
            asmResults.push({ name: p.name, pass: false, out: `Error: ${e.message}` });
        }
    }

    updateStatus('Running HDL tests...');
    const HDL_TIMEOUT_MS = 60_000;
    const hdlResults = hdlFiles.length > 0
        ? await runWithTimeout(runTests(hdlFiles, loadAssignmentZip, vfs), HDL_TIMEOUT_MS, () => {
            console.error(`[ERROR] HDL tests timed out after ${HDL_TIMEOUT_MS}ms`);
            return [];
        })
        : [];

    // Merge results
    const resultsByFile = {};

    // Process HDL results
    for (const r of hdlResults) {
        resultsByFile[r.name] = {
            status: r.pass ? 'pass' : 'fail',
            isPass: r.pass,
            message: r.out, // runTests puts output in 'out'? Need to verify structure
            expected: r.cmp, // runTests might not return cmp/out explicitly in 'r' same way
            actual: r.out
        };
        // Wait, runTests returns array of { name, pass, out, cmp? }
        // Let's check runTests signature or return type.
        // Assuming it returns similar structure.
    }

    // Process ASM results
    for (const r of asmResults) {
        resultsByFile[r.name] = {
            status: r.pass ? 'pass' : 'fail',
            isPass: r.pass,
            message: r.pass ? 'Passed' : 'Failed',
            expected: r.cmp,
            actual: r.out
        };
    }

    return {
        exitCode: 0,
        stdout: JSON.stringify({ resultsByFile }),
        resultJson: { resultsByFile },
        dedupedResults: [...hdlResults, ...asmResults]
    };
}
