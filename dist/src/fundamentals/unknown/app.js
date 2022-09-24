"use strict";
/**
 * `unknown` is a type that allows a developer to be picky when we validate the type later by implementing extra validation
 * during assignment / or any other usage.
 */
let a;
let b;
a = 5;
a = "application";
// with unknown, we have to have introduce an extra check before assigning a variable with unknown type to a variable that has a fixed type.
if (typeof a === "string") {
    b = a;
}
