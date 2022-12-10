"use strict";
// allows us to give a value multiple possible types
// would not usually define a union type at
exports.__esModule = true;
var age = 21; // would not usually want to do this - want to be as strict as possible
age = 24;
age = "24";
var coordinates = { x: 1, y: 34 };
coordinates = { lat: 321.3234, long: 334234 };
// union types with functions
function printAge(age) {
    console.log("your are ".concat(age, " years old"));
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
