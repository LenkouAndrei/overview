const { Worker } = require('worker_threads');

const compute = (array) => {
    return new Promise((resolve, reject) => {
        const worker = new Worker('./worker.js', {
            workerData: { array }
        });

        worker.on('message', (msg) => {
            console.log(worker.threadId);
            resolve(msg)
        })

        worker.on('error', (err) => {
            reject(err)
        })

        worker.on('exit', () => {
            console.log('Exit')
        })
    })
}

const main = async() => {
    try {
        const start = Date.now();
        console.log('start: ', start);
        const result = await Promise.all([
            compute([25, 20, 19, 48, 30, 50]),
            compute([25, 20, 19, 48, 30, 50]),
            compute([25, 20, 19, 48, 30, 50]),
            compute([25, 20, 19, 48, 30, 50]),
        ]);
        console.log('result: ', result);
        console.log('end: ', Date.now() - start);
    } catch(err) {
        console.error(err);
    }
}

main();