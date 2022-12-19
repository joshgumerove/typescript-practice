"use strict";
// allows us to give a value multiple possible types
// would not usually define a union type at
Object.defineProperty(exports, "__esModule", { value: true });
let age = 21; // would not usually want to do this - want to be as strict as possible
age = 24;
age = "24";
let coordinates = { x: 1, y: 34 };
coordinates = { lat: 321.3234, long: 334234 };
// union types with functions
function printAge(age) {
    console.log(`your are ${age} years old`);
}
printAge(23);
printAge("90");
function calculateTax(price, tax) {
    //   return price * tax; type narrowing
    if (typeof price === "string") {
        price = parseFloat(price.replace("$", "")); // will replace the dollar symbol
    }
    return price * tax;
}
console.log(calculateTax(5000, 0.34));
console.log(calculateTax("6000", 0.34));
// type narrowing example above -- conditional logic used
// remember array syntax
const nums = [1, 2, 3, 4];
// const stuff: any[] = [1, 3, "Josh", true];
const stuff = ["josh", 1]; // note that we need the parenthesis
const locations = [];
locations.push(coordinates);
console.log(locations);
// literal types -- not union on own but usually used with union
let zero = 0; // has to be zero
// zero = 2; will give an error
const giveAnswer = (answer) => {
    return `The answer is ${answer}`;
};
console.log(giveAnswer("maybe"));
let mood = "happy";
mood = "sad";
let today = "Monday";
