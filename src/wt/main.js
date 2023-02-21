import os from 'os';
import { Worker } from 'worker_threads';
import path, { resolve } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const coresNum = os.cpus().length;
const workerFile = path.join(__dirname, './worker.js');

const performCalculations = async () => {

    const compute = (workerNum) => new Promise((resolve) => {
        const worker = new Worker(workerFile, { workerData: workerNum + 10 });
        worker.on('message', (result) => resolve({ status: 'resolved', data: result }));
        worker.on('error', () => resolve({ status: 'error', data: null }));
    });

    const computeArray = new Array(coresNum)
        .fill(null)
        .map((_, index) => compute(index));

    console.log(await Promise.all(computeArray));

};

await performCalculations();