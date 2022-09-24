"use strict";
const fullstack = {
    name: "Fullstack Web Development",
    stack: ["Mongo", "Express", "React", "Node", "Typescript"],
};
let example;
example = ["javascript", "typescript", "react", 1, { a: 1, b: 2 }];
let demo = [1, 2, "typescript"];
console.log(fullstack.name);
for (let technology of fullstack.stack) {
    console.log(technology.toUpperCase());
}
