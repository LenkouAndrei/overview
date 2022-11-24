const fs = require('fs');

console.log('Init');

setTimeout(() => {
    console.log('Timer 100')
}, 100);

setImmediate(() => {
    console.log('Immediate')
});

fs.readFile(__filename, () => {
    console.log('File readed');
});

setTimeout(() => {
    for (let i = 0; i < 100000000; i++) {

    }
    console.log('Done');
    Promise.resolve().then(() => {
        console.log('Promise Inside Timeout');
    });
    process.nextTick(() => console.log('tick inside Timeout'));
}, 0);

Promise.resolve().then(() => console.log('Promise'));

process.nextTick(() => console.log('tick'));

console.log('Finish');