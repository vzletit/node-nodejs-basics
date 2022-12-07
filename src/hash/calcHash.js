import crypto from 'crypto';
import { promises as fs } from "fs";
import path from 'path';

const filePath = path.join('src/hash/files', 'fileToCalculateHashFor.txt');
const salt = '123';

const calculateHash = async () => {
    const hasher = crypto.createHmac('sha256', salt);    
    const data = await fs.readFile(filePath, { encoding: 'utf-8' }, (err) => console.log(err || null));
        
    const hash = hasher.update(data).digest("hex");
    console.log(hash)
};

await calculateHash();