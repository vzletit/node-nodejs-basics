import fs from 'fs';
import path from 'path';

const read = async () => {

    const filePath = path.join('files', 'fileToRead.txt');
    const readFile = fs.createReadStream(filePath);

    readFile.on('data', (chunk) => { process.stdout.write(chunk) })
    readFile.on('error', (error) => { throw new Error('error') });

};

await read();