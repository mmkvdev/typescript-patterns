// union types help us to be flexible in terms of the amount of types we accept for a single parameter / variable

function addNumbersOrStrings (input1: number | string, input2: number | string) {
    let sum: ( number | string );
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        sum = input1 + input2;
    } else {
        console.log('consoling inputs: ', input1, input2);
    }
    return sum;
}

const numbers = addNumbersOrStrings(1,2);
console.log(numbers);

const strings = addNumbersOrStrings('leetcode', 'coding');
console.log(strings);