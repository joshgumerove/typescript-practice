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
// more on objects
var coordinate = {
    x: 34,
    y: 2
}; // this is not usually done but is valid
function makeRandomCoordinate(x, y) {
    return { x: x, y: y };
}
console.log(makeRandomCoordinate(5, 9));
function randomCoordinate() {
    return { x: Math.random(), y: Math.random() };
}
// Excess properties
// printName({ first: "Mick", last: "Jagger", age: 55 }); // note how we added an age -- cannot do this
var singer = {
    first: "Mick",
    last: "Jagger",
    age: 55
};
console.log(printName(singer));
