
export class ZipFileSystemAdapter {
    constructor(zip) {
        this.zip = zip;
    }

    // Helper to normalize paths (remove leading ./ or /)
    normalize(path) {
        return path.replace(/^\.?\//, "");
    }

    async readFile(path) {
        const file = this.zip.file(this.normalize(path));
        if (!file) throw new Error(`File not found in zip: ${path}`);
        return await file.async("string");
    }

    async readdir(path) {
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

    async stat(path) {
        const cleanPath = this.normalize(path);
        const file = this.zip.file(cleanPath);
        const isDir = Object.keys(this.zip.files).some(k => k.startsWith(cleanPath + "/"));

        if (!file && !isDir) throw new Error(`Path not found: ${path}`);

        return {
            name: cleanPath.split('/').pop() || "",
            isFile: () => !!file,
            isDirectory: () => isDir,
        };
    }

    // Stubs for read-only interface
    async writeFile(path, contents) { throw new Error("Read Only"); }
    async mkdir(path) { throw new Error("Read Only"); }
    async rm(path) { throw new Error("Read Only"); }
    async copyFile(from, to) { throw new Error("Read Only"); }
    async scandir(path) { throw new Error("Not implemented"); }
}
