var button_1 = document.querySelector("button");
// typecasting
// ! below is to tell typescript that below variable values will never be null
var input_1 = document.getElementById("num1");
var input_2 = document.getElementById("num2");
/**
 *
 * @param {number} num1
 * @param {number} num2
 * @returns {number}
 * adds two numbers and returns the sum
 * the below problem can be mitigated by placing checks in our business logic
 */
function addNumbers(num1, num2) {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 + num2;
    }
    else {
        // applying unary conversions
        return +num1 + +num2;
    }
}
/*
  we are sending values of the input fields to add them, which is a vialation as the input values extracted
  in this case are always strings, no matter what kind of input type of our input fields are!
*/
button_1.addEventListener("click", function () {
    console.log(addNumbers(input_1.value, input_2.value));
});
