import fs from 'fs';
import path from 'path';

const rename = async () => {

    const oldFilepath = path.join('files', 'wrongFilename.txt');
    const newFilepath = path.join('files', 'properFilename.md');
    const errorMsg = 'FS operation failed';

    fs.open(newFilepath, (err, fd) => {
        if (err) {
            fs.rename(oldFilepath, newFilepath, (err) => { if (err) { throw new Error(errorMsg) } });
            return;
        }
        fs.close(fd, () => { throw new Error(errorMsg) });
    })
    }

await rename();