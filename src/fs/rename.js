import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const oldFilepath = path.join(__dirname, 'files', 'wrongFilename.txt');
const newFilepath = path.join(__dirname, 'files', 'properFilename.md');
const errorMsg = 'FS operation failed';

const rename = async () => {    

    fs.open(newFilepath, (err, fd) => {
        if (err) {
            fs.rename(oldFilepath, newFilepath, (err) => { if (err) { throw new Error(errorMsg) } });
            return;
        }
        fs.close(fd, () => { throw new Error(errorMsg) });
    })
    }

await rename();