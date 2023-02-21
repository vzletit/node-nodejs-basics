import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const dirName = path.join(__dirname, 'files');
const copyDirName = path.join(__dirname, 'files_copy');
const errorMsg = 'FS operation failed';

const copy = async () => {

    fs.cp(dirName, copyDirName, { errorOnExist: true, force: false, recursive: true }, (err) => {
        if (err) { throw new Error(errorMsg) }
    });

};

await copy();
