function addNumbersAtRoot(
  a: number,
  b: number,
  checker: boolean,
  message: string
): number {
  const result = a + b;
  if (checker) {
    console.log(`${message}${result}`);
    return 0;
  } else {
    return a + b;
  }
}

const n1 = 11; // we don't need to assign a type to an initialized variable - type inference
const n2 = 4.8;
const checkSum = true;
const customMessage = "The sum of a and b is: ";

let n3: string; // best practise - always assign types to uninitialised variables
n3 = "this is a string";

addNumbersAtRoot(n1, n2, checkSum, customMessage);

// compiler options example
const button = document.querySelector("button");

button?.addEventListener("click", () => {
  console.log("click me");
});
