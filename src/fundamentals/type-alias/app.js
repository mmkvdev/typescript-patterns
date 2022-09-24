"use strict";
// type aliases are really useful when we want to reuse types and abstract complex and lenghty type annotations
const person = {
    name: "calmdev",
    age: 30,
    city: "Hyderabad",
    role: 1,
};
const person1 = {
    name: "calmdev_sandbox",
    age: 31,
    city: "Bengaluru",
    role: "ADMIN",
};
console.log(person);
console.log(person1);
// example with functions
function validatePerson(person) {
    console.log("person name: ", person.name);
}
validatePerson(person);
