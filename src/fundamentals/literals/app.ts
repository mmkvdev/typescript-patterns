function addNumbersOrStringsLiterals(
  input1: number | string,
  input2: number | string,
  resultType: "as-number" | "as-text"
) {
  let result;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultType === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }

  /* if (resultType === 'as-number') {
        return +result;
    } else {
        return result.toString();
    }
    */
  return result;
}

const addNumbers = addNumbersOrStringsLiterals(30, 26, "as-number");
console.log(addNumbers);

const mixedNumbers = addNumbersOrStringsLiterals("30", "26", "as-number");
console.log(mixedNumbers);

const addStrings = addNumbersOrStringsLiterals(
  "leetcode",
  "contest",
  "as-text"
);
console.log(addStrings);

const addTwoNames = addNumbersOrStringsLiterals("Kengan", "Ashura", "as-text");
console.log(addTwoNames);
