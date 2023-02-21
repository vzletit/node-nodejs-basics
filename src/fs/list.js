import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const dir = path.join(__dirname, 'files');
const errorMsg = 'FS operation failed';

const list = async () => {

    fs.readdir(dir, (err, filesArr) => {
        if (err) {throw new Error (errorMsg)}
        console.log(filesArr);
    })

};

await list();