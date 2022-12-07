import fs from 'fs';
import path from 'path';

const filePath = path.join('src/streams/files', 'fileToRead.txt');

const read = async () => {   
    
    const readFile = fs.createReadStream(filePath);
    readFile.on('data', (chunk) => { process.stdout.write(chunk) })
    readFile.on('error', (error) => { throw new Error('error') });

};

await read();