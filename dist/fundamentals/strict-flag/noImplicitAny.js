"use strict";
let logged;
function dataLog(data) {
    console.log(data);
    logged = "true";
    logged = true;
    console.log(logged);
}
dataLog("any type");
