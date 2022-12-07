import fs from 'fs';
import path from 'path';

const filepath = path.join('src/fs/files', 'fresh.txt');
const content = 'I am fresh and young';
const errorMsg = 'FS operation failed';

const create = async () => {

fs.open(filepath, (err, fd) => {
    if (err) {
        fs.writeFile(filepath, content, {flag: 'wx'}, err => {})
        return;
    }
    fs.close(fd, () => { throw new Error(errorMsg) });
})
}

await create();