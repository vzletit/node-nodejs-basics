import fs from 'fs';
import path from 'path';

const oldFilepath = path.join('src/fs/files', 'wrongFilename.txt');
const newFilepath = path.join('src/fs/files', 'properFilename.md');
const errorMsg = 'FS operation failed';

const rename = async () => {    

    fs.open(newFilepath, (err, fd) => {
        if (err) {
            fs.rename(oldFilepath, newFilepath, (err) => { if (err) { throw new Error(errorMsg) } });
            return;
        }
        fs.close(fd, () => { throw new Error(errorMsg) });
    })
    }

await rename();