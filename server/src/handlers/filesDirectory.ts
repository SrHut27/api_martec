import fs from "fs";
import path from "path";

export const dataDir: string = path.join(__dirname, "../data");

export default function createDataDir(): void {
    if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir);
    }
}