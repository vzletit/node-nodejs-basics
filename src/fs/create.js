import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const filepath = path.join(__dirname, 'files', 'fresh.txt');
const content = 'I am fresh and young';
const errorMsg = 'FS operation failed';

const create = async () => {

fs.open(filepath, (err, fd) => {
    if (err) {
        fs.writeFile(filepath, content, {flag: 'wx'}, err => {})
        return;
    }
    fs.close(fd, () => { throw new Error(errorMsg) });
})
}

await create();