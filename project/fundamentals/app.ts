function add (a: number, b: number, checker: boolean, message: string): number {
    const result = a + b;
    if (checker) {
        console.log(`${message}${result}`);
    } else {
        return a + b;
    }
}

const n1 = 11; // 11.0
const n2 = 4.8;
const checkSum = true;
const customMessage = 'The sum of a and b is: ';

add(n1, n2, checkSum, customMessage);