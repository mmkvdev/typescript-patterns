function addNumbersAtRoot(a, b, checker, message) {
    var result = a + b;
    if (checker) {
        console.log("".concat(message).concat(result));
        return 0;
    }
    else {
        return a + b;
    }
}
var n1 = 11; // we don't need to assign a type to an initialized variable - type inference
var n2 = 4.8;
var checkSum = true;
var customMessage = "The sum of a and b is: ";
var n3; // best practise - always assign types to uninitialised variables
n3 = "this is a string";
addNumbersAtRoot(n1, n2, checkSum, customMessage);
// compiler options example
var button = document.querySelector("button");
button === null || button === void 0 ? void 0 : button.addEventListener("click", function () {
    console.log("click me");
});
