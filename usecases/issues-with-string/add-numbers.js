var button = document.querySelector("button");
// typecasting
// ! below is to tell typescript that below variable values will never be null
var input1 = document.getElementById("num1");
var input2 = document.getElementById("num2");
/**
 *
 * @param {number} num1
 * @param {number} num2
 * @returns {number}
 * adds two numbers and returns the sum
 * the below problem can be mitigated by placing checks in our business logic
 */
function add(num1, num2) {
    return num1 + num2;
}
/*
  we are sending values of the input fields to add them, which is a vialation as the input values extracted
  in this case are always strings, no matter what kind of input type of our input fields are!
*/
button.addEventListener("click", function () {
    console.log(add(+input1.value, +input2.value));
});
