import crypto from 'crypto';
import  fs from "fs/promises";
import path from 'path';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const filePath = path.join(__dirname, 'files', 'fileToCalculateHashFor.txt');
const salt = '123';

const calculateHash = async () => {
    const hasher = crypto.createHmac('sha256', salt);    
    const data = await fs.readFile(filePath, { encoding: 'utf-8' }, (err) => console.log(err || null));
        
    const hash = hasher.update(data).digest("hex");
    console.log(hash)
};

await calculateHash();