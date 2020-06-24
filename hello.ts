// Functions as First-Class Citizens
var funcAdd = (a: number, b: number): number => {
    return a + b;
}
console.log(funcAdd(5, 4));

// Higher order functions
type paramFunc = (k: string) => number;
function higherFunc(fn: paramFunc, arr: string[]): number[] {
    let returnArray: number[] = []
    arr.forEach(elem => {
        returnArray.push(fn(elem));
    });
    return returnArray;
}
let lengthFunc = function (param: string): number {
    return param.length;
}
console.log(higherFunc(lengthFunc, ["hello", "bye"]));

// Impure Functions
var impureFunc = (): number => {
    return new Date().getMonth();
}
console.log(impureFunc());


// Closures
var timerFunc = (name: string) => {
    let functionVar = `Hello ${name}`;
    setTimeout(() => {
        console.log(`after 1000 ms - ${functionVar}`);
    }, 1000);
    console.log("exiting timerFunc");
}
timerFunc("chinmoy");


// Currying
function curryAdd(a: number): (b: number) => number {
    return (b: number): number => a + b;
}

let moreAdd10 = curryAdd(10);

console.log(moreAdd10(3));
console.log(curryAdd(3)(10));


// Recursion
const factFunc = (param: number): number =>
    param== 0 ? 1 : param* factFunc (param- 1);

console.log(factFunc (10)); // 3628800

// Tail Recursion
const factFuncTail = (param: number): number => fact(1, param);

const fact = (accum: number, val: number): number =>
    val == 1 ? accum : fact(accum * val, val - 1);

console.log(factFuncTail(10)); // 3628800