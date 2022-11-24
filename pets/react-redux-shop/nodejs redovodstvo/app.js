const { exec, spawn } = require('child_process');
// can pass any process
const { fork } = require('child_process');
const { appendFile } = require('fs');
// can pass only process with given file

// to communicate with other utilits of our system
// if util on nodejs ask for build of .Net, for example
const childProcess = exec('ls', (err, stdout, stdin) => {
    if (err) {
        console.error(err);
    }
    console.log(`stdout: ${stdout}`);
    console.log(`stdin: ${stdin}`);
});

childProcess.on('exit', (code) => {
    console.log('Exit code: ', code);
});



// ex: some util pass smth to console step by step
// you want to get it in node and handle
const childProcess1 = spawn('ls');

childProcess1.stdout.on('data', (data) => {
    console.log('Exit code: ', data);
});

childProcess1.stdin.on('data', (data) => {
    console.log('Exit code: ', data);
});

childProcess.on('exit', (code) => {
    console.log('Exit code: ', code);
});

const forkProcess = fork('fork.js');

forkProcess.on('message', (msg) => {
    console.log(`The message have been gotten: ${msg}`)
});

forkProcess.on('close', (code) => {
    console.log(`Exited with code: ${code}`)
});

forkProcess.send('Ping');

// routing
app.all // use as middleware
// instead of url we can pass regEx

// can combine methods
app.route(/** routeName */)
    .get() // handle request with corresponding method
    .post()


//TypeScript
// keyof (A&B) = keyof A | keyof B;
// keyof (A|B) = keyof A & keyof B; - common between both


// TypeScript Decorators:
// class
function Logger() {
    console.log('Init Logger');
    return (target: Function) => {
        console.log('run Logger');
    }
}

// method
function Method(
    target: Object,
    propertyKey: String,
    preopertyDescriptor: PropertyDescriptor
) {
    console.log(propertyKey);
    const oldValue = preopertyDescriptor.value;
    preopertyDescriptor.value = function (...args: any[]) {
        return args * 10;
    }
}

// property
function Prop(
    target: Object,
    propertyKey: String
) {
    let value: Number;
    const getter = () => {
        console.log('Get!');
        return value;
    }

    const setter = (newValue: number) => {
        console.log('Set!');
        value = newValue
    }

    Object.defineProperty(target, propertyKey, {
        get: getter,
        set: setter
    })
}

// argument
function Param(
    target: Object,
    propertyKey: String,
    index: number
) {
    console.log(propertyKey, index);
}

// for beautiful DI we need reflect-metadata & inversify libraries

// we can test memory leak and performance in devtools with use of nodemon
// clinic.js also helpful for debug such an issues
// 1. find issue with use of devtools
// 2. investigate details of issue with use of clinic (pay attention to event loop & memory)


// devide controllers from services to encapsulate buisness logic.
// All the buisness object should be encapsulated in entities
// All buisness logic should be in services
// controllers convert buisness result to API result, depending on buisness result

// npm class-validate - validation
// npm class-transformer - transform class to plane object and vice versa
// npm dotenv - to work with .env file

// repositories - concept, when for each entity, we have separate repository, that communicate with BD
// repository communicate with BD and gives API for communication with self repository

// jwt token - has limited period of live, but it has refresh token, also. when jwt is expires, we use refresh token,
// to rencreate jwt and in this time, we also create new refresh token.
// jwt in compare with cookies solves problem of cross domain
// jwt.io to encode tokens

//.dts we can use to add smth to common interface from some library, example of add user to Request interface
declare namespace Express { // find the namespace in library, where type announced and declare that namespace
    export interface Request { // add info to type in that namespace
        user: string
    }
}
// to use that dts we should add flag: --files in ower nodemon file in exec field