import fs from 'fs';

const list = async () => {
  
    const dirname = 'files';
    const errorMsg = 'FS operation failed';

    fs.readdir(dirname, (err, filesArr) => {
        if (err) {throw new Error (errorMsg)}
        console.log(filesArr);
    })

};

await list();