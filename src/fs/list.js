import fs from 'fs';

const dirname = 'src/fs/files';
const errorMsg = 'FS operation failed';

const list = async () => {

    fs.readdir(dirname, (err, filesArr) => {
        if (err) {throw new Error (errorMsg)}
        console.log(filesArr);
    })

};

await list();