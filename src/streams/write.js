import fs from 'fs';
import path from 'path';
import readline from 'readline';

const filePath = path.join('src/streams/files', 'fileToWrite.txt');

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