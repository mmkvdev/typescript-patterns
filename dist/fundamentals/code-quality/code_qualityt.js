"use strict";
let globalUser = "true";
function codeQuality(i) {
    let user = "max";
    console.log("code", user, i);
}
function addNumbersForCodeQuality(n1, n2) {
    if (n1 + n2 > 0) {
        return n1 + n2;
    }
    return;
}
addNumbersForCodeQuality(2, 3);
