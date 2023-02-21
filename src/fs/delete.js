import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const filepath = path.join(__dirname, 'files', 'fileToRemove.txt');
const errorMsg = 'FS operation failed';

const remove = async () => {
    fs.rm(filepath, (err) => { if (err) { throw new Error(errorMsg) } });
};

await remove();