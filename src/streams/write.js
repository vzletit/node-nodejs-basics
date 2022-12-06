import fs from 'fs';
import path from 'path';
import readline from 'readline';

const write = async () => {

    const filePath = path.join('files', 'fileToWrite.txt');
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