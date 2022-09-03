// union types help us to be flexible in terms of the amount of types we accept for a single parameter / variable

function addNumbersOrStrings(
  input1: number | string,
  input2: number | string
): number | void | string {
  let addSum: number | string;
  if (typeof input1 === "number" && typeof input2 === "number") {
    addSum = input1 + input2;
  } else {
    console.log("consoling inputs: ", input1, input2);
  }
  return "addSum";
}

const numbers = addNumbersOrStrings(1, 2);
console.log(numbers);

const strings = addNumbersOrStrings("leetcode", "coding");
console.log(strings);
