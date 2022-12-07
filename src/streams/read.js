import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const filePath = path.join(__dirname, 'files', 'fileToRead.txt');

const read = async () => {   
    
    const readFile = fs.createReadStream(filePath);
    readFile.on('data', (chunk) => { process.stdout.write(chunk) })
    readFile.on('error', (error) => { if (error) {throw new Error(error)} });

};

await read();