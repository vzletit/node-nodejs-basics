import fs from 'fs';
import path from 'path';

const filepath = path.join('src/fs/files', 'fileToRead.txt');
const errorMsg = 'FS operation failed';


const read = async () => {

fs.readFile(filepath, { encoding: 'utf-8' }, 
(err, fileData) => { 
    if (err) { throw new Error(errorMsg) } 
    else {console.log(fileData)}
});
};

await read();