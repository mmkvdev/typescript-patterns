"use strict";
// strictNullCheck
// first way
const button_1 = document.querySelector("button");
button_1.addEventListener("click", () => {
    console.log("callback called");
});
// second way
const button_2 = document.querySelector("button");
button_2 === null || button_2 === void 0 ? void 0 : button_2.addEventListener("click", () => {
    console.log("callback called");
});
// third way
const button_3 = document.querySelector("button");
if (button_3) {
    button_3.addEventListener("click", () => {
        console.log("callback called");
    });
}
