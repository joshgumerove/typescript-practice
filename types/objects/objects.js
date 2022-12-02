"use strict";
exports.__esModule = true;
var dog = {
    name: "Elton",
    breed: "Australian Shepherd",
    age: 0.5
};
// regular JS object above
// note how we can specify what an object looks like
var printName = function (name) {
    return "Name: ".concat(name.first, " ").concat(name.last);
};
// note how the above accepts an object
console.log(printName({ first: "Josh", last: "Gumerove" }));
