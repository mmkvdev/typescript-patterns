/**
 * never type is used in scenarios where we never return a value from a function that throws errors (since execution gets terminated here) 
 * / infinite loops inside a function for example
 */


function generateError (message: string, code: number): never {
    throw { 
        errorMessage: message,
        errorCode: code
    };
}

const result = generateError('error occurred !!!', 500);
console.log(result);