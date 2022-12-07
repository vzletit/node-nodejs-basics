import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const filepath = path.join(__dirname, 'files', 'fileToRead.txt');
const errorMsg = 'FS operation failed';


const read = async () => {

fs.readFile(filepath, { encoding: 'utf-8' }, 
(err, fileData) => { 
    if (err) { throw new Error(errorMsg) } 
    else {console.log(fileData)}
});
};

await read();