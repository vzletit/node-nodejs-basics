import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';
import zlib from 'zlib';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const inputFilePath = path.join(__dirname, 'files', 'fileToCompress.txt');
const outputFilePath = path.join(__dirname, 'files', 'archive.gz');


const compress = async () => {

const readStream = fs.createReadStream(inputFilePath);
const writeStream = fs.createWriteStream(outputFilePath);
const compressStream = zlib.createGzip();

readStream
.pipe(compressStream)
.pipe(writeStream)

};

await compress();