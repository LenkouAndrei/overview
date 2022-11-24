process.on('message', (msg) => {
    console.log(msg);
    process.send('Pong');
})
// communicate through ipc channel
// no communication between Children
// bad perfomance when files passed

// use when not much communications
// & when do not send files

// try not to use