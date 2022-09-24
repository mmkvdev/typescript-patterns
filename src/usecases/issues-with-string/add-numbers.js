"use strict";
const buttonElement = document.querySelector("button");
// typecasting
// ! below is to tell typescript that below variable values will never be null
const input_1 = document.getElementById("num1");
const input_2 = document.getElementById("num2");
/**
 *
 * @param {number} num1
 * @param {number} num2
 * @returns {number}
 * adds two numbers and returns the sum
 * the below problem can be mitigated by placing checks in our business logic
 */
function addNumbersActionUseCase(num1, num2) {
    return num1 + num2;
}
/*
    we are sending values of the input fields to add them, which is a violation as the input values extracted
    in this case are always strings, no matter what kind of input type of our input fields are!
  */
buttonElement === null || buttonElement === void 0 ? void 0 : buttonElement.addEventListener("click", function () {
    console.log(addNumbersActionUseCase(+input_1.value, +input_2.value));
});
