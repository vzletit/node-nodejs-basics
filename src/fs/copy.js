import fs from 'fs';

const copy = async () => {

    const dirName = 'files';
    const copyDirName = 'files_copy';
    const errorMsg = 'FS operation failed';

    fs.cp(dirName, copyDirName, { errorOnExist: true, force: false, recursive: true }, (err) => {
        if (err) { throw new Error(errorMsg) }
    });

};

await copy();
