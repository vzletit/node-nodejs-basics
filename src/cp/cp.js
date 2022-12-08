import cp from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const childProcessFile = path.join(__dirname, 'files', 'script.js')

const spawnChildProcess = async (args) => {
// {silent: false} pipes automatically
    const childProc = cp.fork(childProcessFile, args, {silent: true});    

    process.stdin.pipe(childProc.stdin);
    childProc.stdout.pipe(process.stdout);
    
};

// Put your arguments in function call to test this functionality
spawnChildProcess( ['someArgument1', 'someArgument2'] );
