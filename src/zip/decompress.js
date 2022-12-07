import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';
import zlib from 'zlib';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const inputFilePath = path.join(__dirname, 'files', 'archive.gz');
const outputFilePath = path.join(__dirname, 'files', 'fileToCompress.txt');


const decompress = async () => {
    const readStream = fs.createReadStream(inputFilePath);
    const writeStream = fs.createWriteStream(outputFilePath);
    const deCompressStream = zlib.createGunzip();

    readStream
        .pipe(deCompressStream)
        .pipe(writeStream)
};

await decompress();