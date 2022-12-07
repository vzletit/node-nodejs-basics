import fs from 'fs';

const dirName = 'src/fs/files';
const copyDirName = 'src/fs/files_copy';
const errorMsg = 'FS operation failed';

const copy = async () => {

    fs.cp(dirName, copyDirName, { errorOnExist: true, force: false, recursive: true }, (err) => {
        if (err) { throw new Error(errorMsg) }
    });

};

await copy();
