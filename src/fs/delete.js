import fs from 'fs';
import path from 'path';

const filepath = path.join('src/fs/files', 'fileToRemove.txt');
const errorMsg = 'FS operation failed';

const remove = async () => {
    fs.rm(filepath, (err) => { if (err) { throw new Error(errorMsg) } });
};

await remove();