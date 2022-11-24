const { parentPort, workerData } = require('worker_threads');
const factorial = require('./factorial')
// share memory with main process
// for calculations
// can communicate between Children
// good enough to pass files

// use when many communications
// & when send files

// use always
// NOTE: first of all - create worker pool!!

const compute = ({ array }) => {
    const arr = [];
    for (let i = 0; i < 100000000; i++) {
        arr.push(i + 1)
    }
    return array.map(el => factorial(el))
}

parentPort.postMessage(compute(workerData))