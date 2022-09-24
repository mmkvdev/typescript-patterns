// we can assign types to functions depending on what the return value is

function add(n1: number, n2: number): number {
  return n1 + n2;
}

console.log(add(1, 2));

// void type -> special type which can be used with functions that don't have a return statement ( return value )

/**
 *
 * @param num
 * @returns void
 * undefined is a valid type in typescript, but can only be used with functions that don't explicitly return anything
 * or functions that don't have a return statement
 * in above cases `void` is used as javascript inherently returns `undefined`
 */

function printResult(num: number): void {
  console.log("outputting the number: ", num);
}

console.log(printResult(add(1, 2)));

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

// Function as types
let functionExperimentation: (a: number, b: number) => number;

functionExperimentation = add;
// functionExperimentation = printResult;

console.log("experimenting function as a type", functionExperimentation(1, 2));

addAndHandle(25, 50, (result) => {
  console.log(result);
});
