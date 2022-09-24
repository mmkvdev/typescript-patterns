"use strict";
// union types help us to be flexible in terms of the amount of types we accept for a single parameter / variable
function addNumbersOrStrings(input1, input2) {
    let addSum;
    if (typeof input1 === "number" && typeof input2 === "number") {
        addSum = input1 + input2;
    }
    else {
        console.log("consoling inputs: ", input1, input2);
        addSum = input1.toString() + input2.toString();
    }
    return addSum;
}
const numbers = addNumbersOrStrings(1, 2);
console.log(numbers);
const strings = addNumbersOrStrings("leetcode", "coding");
console.log(strings);
