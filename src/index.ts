import { FileSystem } from "@davidsouther/jiffies/lib/esm/fs.js";
import { Assignments } from "@nand2tetris/projects/full.js";
import * as Project04 from "@nand2tetris/projects/project_04/index.js";
import { runTests } from "@nand2tetris/simulator/projects/runner.js";
import { TST } from "@nand2tetris/simulator/languages/tst.js";
import { CPUTest } from "@nand2tetris/simulator/test/cputst.js";
import { loadAsm, loadHack } from "@nand2tetris/simulator/loader.js";
import { ROM } from "@nand2tetris/simulator/cpu/memory.js";
import * as fs from "fs";
import JSZip from "jszip";
import path from "path";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { ZipFileSystemAdapter } from "./zip_fs.js";

// Simple Levenshtein distance for fuzzy matching small names
function levenshtein(a: string, b: string) {
  const A = a.toLowerCase();
  const B = b.toLowerCase();
  const m = A.length, n = B.length;
  const dp: number[][] = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
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

function findClosestName(target: string, candidates: string[]) {
  if (candidates.length === 0) return undefined;
  const t = target.toLowerCase().replace(/hack$/i, "");
  let best: { name: string; dist: number } | undefined;
  for (const original of candidates) {
    const candBase = original.replace(/\.tst$|\.cmp$|\.asm$|\.hdl$|\.vm$/i, "");
    const cand = candBase.toLowerCase();
    const d = levenshtein(t, cand);
    if (!best || d < best.dist) best = { name: candBase, dist: d };
  }
  if (best && best.dist <= 2) return best.name; // threshold
  return undefined;
}

// Helper to determine the test file needed for a specific project file
const loadAssignment = (fsys: FileSystem) =>
  async function (file: { name: string; base: string; ext: string }) {
    const content = await fsys.readFile(file.base).catch(() => "");

    const tst = Assignments[`${file.name}.tst` as keyof typeof Assignments] as string;
    const cmp = Assignments[`${file.name}.cmp` as keyof typeof Assignments] as string;

    // Provide minimal root/dir fields to satisfy AssignmentFiles shape
    const dir = path.dirname(file.base) || ".";
    const root = dir.split(path.sep)[0] || ".";

    return { ...file, hdl: content, tst, cmp, root, dir } as any;
  };

async function main() {
  await yargs(hideBin(process.argv))
    .command(
      "* <zipfile>",
      "Grade a Nand2Tetris submission zip",
      (yargs) => yargs.positional("zipfile", { type: "string", demandOption: true }),
      async (argv) => {
        const zipPath = path.resolve(argv.zipfile as string);
        if (!fs.existsSync(zipPath)) {
          console.error(`Error: File not found at ${zipPath}`);
          process.exit(1);
        }

        console.log(`Loading ${path.basename(zipPath)}...`);

        const data = fs.readFileSync(zipPath);
        const zip = await JSZip.loadAsync(data);

        const vfs = new FileSystem(new ZipFileSystemAdapter(zip));
        const allFiles = Object.keys(zip.files);

        const relevantFiles = allFiles
          .filter((f) => !f.endsWith("/"))
          .map((f) => path.parse(f))
          .filter((p) => {
            // Include ASM/HACK files unconditionally (tests may be in project modules), otherwise require Assignments mapping
            if (['.asm', '.hack'].includes(p.ext)) return true;
            return Assignments[`${p.name}.tst` as keyof typeof Assignments] !== undefined;
          })
          .filter((p) => ['.hdl', '.asm', '.vm', '.hack'].includes(p.ext));

        // If both .asm and .hack exist for the same name, prefer .asm: remove .hack entries
        const asmNames = new Set(relevantFiles.filter((p) => p.ext === '.asm').map((p) => p.name));
        const filtered = relevantFiles.filter((p) => !(p.ext === '.hack' && asmNames.has(p.name)));

        // Deduplicate by base name so we don't run the same logical project twice
        const seen = new Map<string, path.ParsedPath>();
        for (const p of relevantFiles) {
          // prefer .asm over .hack when both exist for the same logical name
          if (!seen.has(p.name)) seen.set(p.name, p);
          else {
            const prev = seen.get(p.name)!;
            if (prev.ext === '.hack' && p.ext === '.asm') {
              seen.set(p.name, p);
            }
          }
        }
        const uniqueFiles = Array.from(seen.values());
        console.log('[DEBUG] uniqueFiles:', uniqueFiles.map((p) => p.base));

        if (relevantFiles.length === 0) {
          console.log("No recognizable Nand2Tetris project files found in zip.");
          process.exit(0);
        }

        console.log(`Found ${relevantFiles.length} project files. Running tests...\n`);

        // Use direct zip-based loader to ensure we get file contents from the archive
        const loadAssignmentZip = async (file: { name: string; base: string; ext: string }) => {
          const entry = zip.file(file.base) || zip.file(path.basename(file.base));
          const content = entry ? await entry.async('string') : "";

          const tst = Assignments[`${file.name}.tst` as keyof typeof Assignments] as string;
          const cmp = Assignments[`${file.name}.cmp` as keyof typeof Assignments] as string;

          const dir = path.dirname(file.base) || ".";
          const root = dir.split(path.sep)[0] || ".";

          return { ...file, hdl: content, tst, cmp, root, dir } as any;
        };

        // Separate HDL/VM from ASM/HACK files for different run flows
        const asmFiles = uniqueFiles.filter((p) => ['.asm', '.hack'].includes(p.ext));
        const hdlFiles = uniqueFiles.filter((p) => p.ext === '.hdl');
        console.log('[DEBUG] asmFiles:', asmFiles.map((p) => p.base));
        console.log('[DEBUG] hdlFiles:', hdlFiles.map((p) => p.base));

        const asmResults: Array<any> = [];

        // Run ASM / HACK tests
        for (const p of asmFiles) {
          try {
            let tst = Assignments[`${p.name}.tst` as keyof typeof Assignments] as string | undefined;
            let cmp = Assignments[`${p.name}.cmp` as keyof typeof Assignments] as string | undefined;
            let tstSource = tst ? 'Assignments' : undefined;
            let cmpSource = cmp ? 'Assignments' : undefined;
            // Fallback: some projects (eg project_04 tests) are exported under project_X modules
            if (!tst || !cmp) {
              try {
                const mapping = (Project04 as any).TESTS;
                if (mapping) {
                  // Try direct map under project mapping by name
                  const direct = mapping?.[p.name];
                  if (direct && direct[`${p.name}.tst`] && direct[`${p.name}.cmp`]) {
                    tst = direct[`${p.name}.tst`];
                    cmp = direct[`${p.name}.cmp`];
                    tstSource = `project_04:${p.name}`;
                    cmpSource = `project_04:${p.name}`;
                  } else {
                    // Try fuzzy match across mapping keys
                    const keys = Object.keys(mapping || {}).flatMap((k) => Object.keys(mapping[k] || {}));
                    const closest = findClosestName(p.name, keys);
                    if (closest) {
                      // find which project section contains closest
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
              } catch (_e) {
                // ignore
              }
            }

            if (!tst || !cmp) {
              // Special-case: prefer FillAutomatic.tst/cmp when available (project 04 Fill)
              if (p.name === 'Fill') {
                try {
                  const solTstPath = path.resolve('solutions', '04', 'fill', 'FillAutomatic.tst');
                  const solCmpPath = path.resolve('solutions', '04', 'fill', 'FillAutomatic.cmp');
                  if (fs.existsSync(solTstPath) && fs.existsSync(solCmpPath)) {
                    tst = fs.readFileSync(solTstPath, 'utf8');
                    cmp = fs.readFileSync(solCmpPath, 'utf8');
                    tstSource = solTstPath;
                    cmpSource = solCmpPath;
                  }
                } catch (_e) {
                  // ignore
                }
              }

              if (!tst || !cmp) {
                asmResults.push({ name: p.name, pass: false, out: `No test/cmp mapping found for ${p.name}` });
                continue;
              }
            }

            // Log where the tst/cmp were sourced from for debugging
            console.log(`[DEBUG] ${p.name}: tstSource=${tstSource || 'none'}, cmpSource=${cmpSource || 'none'}`);

            // Special-case interactive Fill: prefer running an interactive-style simulation
            if (p.name === 'Fill') {
              try {
                // find Fill.asm or Fill.hack inside zip
                const names = Object.keys(zip.files).filter((n) => !n.endsWith('/'));
                const candidateName = names.find((n) => /Fill\.(asm|hack)$/i.test(n));
                if (!candidateName) throw new Error('No Fill.asm/hack found in archive');

                const entry = zip.file(candidateName);
                const txt = entry ? await entry.async('string') : '';
                let program: number[];
                if (candidateName.toLowerCase().endsWith('.asm')) {
                  program = await loadAsm(txt);
                } else {
                  program = await loadHack(txt);
                }
                const rom = new ROM(Int16Array.from(program as number[]));

                // build a tiny test that loads the ROM and exposes ticktock/outputs
                const fakeTst = `load ${path.basename(candidateName)}, output-list RAM[16384]%D2.6.2 RAM[17648]%D2.6.2 RAM[18349]%D2.6.2 RAM[19444]%D2.6.2 RAM[20771]%D2.6.2 RAM[21031]%D2.6.2 RAM[22596]%D2.6.2 RAM[23754]%D2.6.2 RAM[24575]%D2.6.2;`;
                const maybeT = TST.parse(fakeTst);
                if ((maybeT as any).error) throw new Error('Failed to parse internal Fill TST');
                const maybeTest = CPUTest.from((maybeT as any).ok ? (maybeT as any).ok : (maybeT as any), {
                  dir: '.',
                  doLoad: (async () => rom) as any,
                  requireLoad: false,
                });
                const test = (maybeTest as any).ok ? (maybeTest as any).ok : maybeTest;

                if (test.init) await test.init();
                if (test.load) await test.load(path.basename(candidateName));

                // helper to run N ticktocks and capture log
                const runTicks = async (n: number) => {
                  for (let i = 0; i < n; i++) {
                    if (typeof test.ticktock === 'function') test.ticktock();
                    else if (typeof test.tick === 'function') await test.tick();
                    else await Promise.resolve();
                  }
                  return test.log();
                };

                // run three phases similar to FillAutomatic: 0 -> 1 -> 0
                try { if (test && test.cpu && test.cpu.RAM) test.cpu.RAM.set(24576, 0); } catch (_) {}
                await runTicks(1000);
                const out1 = test.log();

                try { if (test && test.cpu && test.cpu.RAM) test.cpu.RAM.set(24576, 1); } catch (_) {}
                await runTicks(1000);
                const out2 = test.log();

                try { if (test && test.cpu && test.cpu.RAM) test.cpu.RAM.set(24576, 0); } catch (_) {}
                await runTicks(1000);
                const out3 = test.log();

                // parse outputs into numeric rows
                function parseMatrix(txt: string) {
                  const lines = (txt || '').split(/\r?\n/).filter(Boolean);
                  const rows: number[][] = [];
                  for (const ln of lines.slice(1)) {
                    const nums = (ln.match(/-?\d+/g) || []).map((s) => Number(s));
                    if (nums.length) rows.push(nums);
                  }
                  return rows;
                }

                const m1 = parseMatrix(out1);
                const m2 = parseMatrix(out2);
                const m3 = parseMatrix(out3);

                const allZeros = (r: number[]) => r.every((v) => v === 0);
                const allOnes = (r: number[]) => r.every((v) => v === -1);

                const pass = m1.length >= 1 && m2.length >= 1 && m3.length >= 1 && allZeros(m1[0]) && allOnes(m2[0]) && allZeros(m3[0]);

                asmResults.push({ name: 'Fill', pass, out: out2, cmp: (Assignments as any)['Fill.cmp'] || '', diff: undefined });
                continue; // skip normal asm handling for Fill
              } catch (e) {
                asmResults.push({ name: 'Fill', pass: false, out: `Interactive Fill error: ${(e as Error).message}` });
                continue;
              }
            }

            // Parse test
            const maybeTst = TST.parse(tst);
            if ((maybeTst as any).ok === undefined && (maybeTst as any).error) {
              asmResults.push({ name: p.name, pass: false, out: `TST parse failed` });
              continue;
            }

            // create doLoad that reads asm/hack from zip and returns a ROM
            const doLoad = async (filename: string) => {
              const base = path.basename(filename);
              const entry = zip.file(filename) || zip.file(base);
              if (!entry) throw new Error(`File not found in zip: ${filename}`);
              const txt = await entry.async('string');
              if (base.endsWith('.asm')) {
                const program = await loadAsm(txt);
                return new ROM(Int16Array.from(program as number[]));
              }
              if (base.endsWith('.hack')) {
                const program = await loadHack(txt);
                return new ROM(Int16Array.from(program as number[]));
              }
              throw new Error(`Unsupported format for ${filename}`);
            };

            // Build and run the CPUTest
            // Wrap maybeTst into Ok-like shape if necessary; CPUTest.from accepts values from the compiled library
            const maybeTest = CPUTest.from((maybeTst as any).ok ? (maybeTst as any).ok : (maybeTst as any), {
              dir: '.',
              // CPUTest typings expect a slightly different doLoad signature; cast to any
              doLoad: doLoad as any,
              requireLoad: false,
            });

            // If CPUTest.from returned an Err-like object, try to detect and report error
            if ((maybeTest as any).error) {
              asmResults.push({ name: p.name, pass: false, out: `Failed to build CPUTest` });
              continue;
            }

            const test = (maybeTest as any).ok ? (maybeTest as any).ok : maybeTest;
            // If test is a Result wrapper, unwrap
            if ((test as any).with === undefined && (test as any).value) {
              // assume Ok wrapper
              // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
              // @ts-ignore
              test = test.value;
            }

            await test.run();
            const out = test.log();
            const expected = (cmp || '').toString();
            const actual = out || '';
            const pass = actual.trim() === expected.trim();

            // compute a small line-by-line diff for failures (if cmp present)
            let diff: string | undefined;
            if (!pass && expected) {
              const elines = expected.split(/\r?\n/);
              const alines = actual.split(/\r?\n/);
              const max = Math.max(elines.length, alines.length);
              const parts: string[] = [];
              for (let i = 0; i < max; i++) {
                const e = elines[i];
                const a = alines[i];
                if (e === a) {
                  parts.push('  ' + (e ?? ''));
                } else {
                  if (e !== undefined) parts.push('- ' + e);
                  if (a !== undefined) parts.push('+ ' + a);
                }
              }
              diff = parts.join('\n');
            }

            asmResults.push({ name: p.name, pass, out: actual, cmp: expected, diff });
          } catch (e) {
            asmResults.push({ name: p.name, pass: false, out: (e as Error).message });
          }
        }

        // Debug: print asmResults summary
        try {
          console.log('[DEBUG] asmResults:', asmResults.map((r: any) => ({ name: r.name, pass: r.pass, hasCmp: !!r.cmp, diffLines: r.diff ? r.diff.split('\n').length : 0 })));
        } catch (_e) {}

        // Run HDL tests via existing runner
        const hdlResults = hdlFiles.length > 0 ? await runTests(hdlFiles, loadAssignmentZip, vfs as any) : [];

        const results = [...hdlResults, ...asmResults];
        // Deduplicate results by test name: prefer a passing result if any
        const seenResults = new Map<string, any>();
        for (const t of results) {
          if (!seenResults.has(t.name)) seenResults.set(t.name, t);
          else {
            const prev = seenResults.get(t.name);
            if (!prev.pass && t.pass) seenResults.set(t.name, t);
          }
        }
        const dedupedResults = Array.from(seenResults.values());

        let failures = 0;
        for (const test of dedupedResults) {
          const status = test.pass ? "✅ PASSED" : "❌ FAILED";
          console.log(`${status} - ${test.name}`);
          if (!test.pass) {
            failures++;
            console.log(`   Error: ${test.out?.trim() || "Comparison failure"}`);
            if (test.cmp) {
              console.log('   Expected vs Actual (diff):');
              if (test.diff) {
                const diffLines = test.diff.split('\n').map((l: string) => '      ' + l).join('\n');
                console.log(diffLines);
              } else {
                // fall back to printing expected
                const expLines = (test.cmp as string).split(/\r?\n/).map((l: string) => '      - ' + l).join('\n');
                console.log(expLines);
              }
            }
          }
        }

        console.log(`\nSummary: ${results.length - failures}/${results.length} passed.`);
        process.exit(failures > 0 ? 1 : 0);
      }
    )
    .parse();
}

main();
