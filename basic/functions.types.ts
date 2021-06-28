// FUNCTIONS return types & void

function adds(n1: number, n2: number) {
    return n1 + n2;
}
// i IGNORE the result of this fun
function printResults(num: number): void {
    console.log(`Result: ${num}`);
}

function printResult3(num: number): void {
    console.log(`Result: ${num}`);
    return;
}

function printResult2(num: number): undefined {
    console.log(`Result: ${num}`);
    return;
}


printResults(adds(5, 12));

let combineValues: (a: number, b: number) => number;

combineValues = adds;
/* combineValues = printResult; */
console.log(combineValues(8, 8));



function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
    const res = n1 + n2;
    cb(res);
}
addAndHandle(10, 20, (result) => {
    console.log(result);
});
