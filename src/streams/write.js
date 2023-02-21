import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';
import { pipeline } from 'stream/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const filePath = path.join(__dirname, 'files', 'fileToWrite.txt');

const write = async () => {

    const writeFile = fs.createWriteStream(filePath, {flags: 'a'});
    writeFile.on('error', (error) => { if (error) {throw new Error(error)} });
    await pipeline(process.stdin, writeFile);
}

await write();