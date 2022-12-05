import fs from 'fs';
import path from 'path';

const read = async () => {

const filepath = path.join('files', 'fileToRead.txt');
const errorMsg = 'FS operation failed';

fs.readFile(filepath, { encoding: 'utf-8' }, 
(err, fileData) => { 
    if (err) { throw new Error(errorMsg) } 
    else {console.log(fileData)}
});
};

await read();