function addNumbersOrStrings (input1: number | string, input2: number | string, resultType: 'as-number' | 'as-text') {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultType === 'as-number') {
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

const addNumbers = addNumbersOrStrings(30, 26, 'as-number');
console.log(addNumbers);

const mixedNumbers = addNumbersOrStrings('30', '26', 'as-number');
console.log(mixedNumbers);

const addStrings = addNumbersOrStrings('leetcode', 'contest', 'as-text');
console.log(addStrings);