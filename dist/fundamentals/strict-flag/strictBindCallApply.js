"use strict";
const button_4 = document.querySelector("button");
const clickHandler = (message) => {
    console.log("clicked !" + message);
};
button_4.addEventListener("click", clickHandler.bind(null, "strict bind check"));
