import { FileSystemAdapter, Stats } from "@davidsouther/jiffies/lib/esm/fs.js";
import JSZip from "jszip";

export class ZipFileSystemAdapter implements FileSystemAdapter {
  constructor(private zip: JSZip) {}

  // Helper to normalize paths (remove leading ./ or /)
  private normalize(path: string): string {
    return path.replace(/^\.?\//, "");
  }

  async readFile(path: string): Promise<string> {
    const file = this.zip.file(this.normalize(path));
    if (!file) throw new Error(`File not found in zip: ${path}`);
    return await file.async("string");
  }

  async readdir(path: string): Promise<string[]> {
    const normalized = this.normalize(path);
    const prefix = normalized ? normalized + "/" : "";

    return Object.keys(this.zip.files)
      .filter((key) => key.startsWith(prefix))
      .map((key) => {
        const relative = key.substring(prefix.length);
        return relative.split("/")[0];
      })
      .filter((v, i, a) => a.indexOf(v) === i);
  }

  async stat(path: string): Promise<Stats> {
    const cleanPath = this.normalize(path);
    const file = this.zip.file(cleanPath);
    const isDir = Object.keys(this.zip.files).some(k => k.startsWith(cleanPath + "/"));

    if (!file && !isDir) throw new Error(`Path not found: ${path}`);

    return {
      name: cleanPath.split('/').pop() || "",
      isFile: () => !!file,
      isDirectory: () => isDir,
    } as Stats;
  }

  // Stubs for read-only interface
  async writeFile(path: string, contents: string): Promise<void> { throw new Error("Read Only"); }
  async mkdir(path: string): Promise<void> { throw new Error("Read Only"); }
  async rm(path: string): Promise<void> { throw new Error("Read Only"); }
  async copyFile(from: string, to: string): Promise<void> { throw new Error("Read Only"); }
  async scandir(path: string): Promise<Stats[]> { throw new Error("Not implemented"); }
}
