import fs from 'fs';
import path from 'path';

const create = async () => {

const filepath = path.join('files', 'fresh.txt');
const content = 'I am fresh and young';
const errorMsg = 'FS operation failed';

fs.open(filepath, (err, fd) => {
    if (err) {
        fs.writeFile(filepath, content, {flag: 'wx'}, err => {})
        return;
    }
    fs.close(fd, () => { throw new Error(errorMsg) });
})
}

await create();