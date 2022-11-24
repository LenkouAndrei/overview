const a = 5;

function double(a) {
    return a*a;
}

function logDouble(a) {
    console.log(double(a))
};

console.log(`Old value ${a}`);
logDouble(a);