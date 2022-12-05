import fs from 'fs';
import path from 'path';

const remove = async () => {

    const filepath = path.join('files', 'fileToRemove.txt');
    const errorMsg = 'FS operation failed';

    fs.rm(filepath, (err) => { if (err) { throw new Error(errorMsg) } });
};

await remove();