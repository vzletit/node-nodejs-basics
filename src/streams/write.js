import fs from 'fs';
import readline from 'readline';
import path from 'path';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const filePath = path.join(__dirname, 'files', 'fileToWrite.txt');

const write = async () => {

    const writeFile = fs.createWriteStream(filePath);
    writeFile.on('error', (error) => { throw new Error('error') });

    const read = readline.createInterface({ input: process.stdin });

    read
        .on('line', (line) => {
            writeFile.write(line + '\n');
            read.prompt();
        })
        .on('close', () => writeFile.end());

}

await write();