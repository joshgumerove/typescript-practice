"use strict";
// allow us to define reusable functions and classes that work with multiple types
function wrapInArry(element) {
    return [element];
}
const nums = [];
const alternative = []; //this is an example of built-in generic that we provided a type to (array is the name of the interface)
function identity(item) {
    return item;
}
const identify = (item) => {
    return item;
};
identity("Josh"); // can now provide what the type when calling the function
identity(false); // establish that input put should be the return type
function getRandomElement(randomArr) {
    return randomArr[Math.floor(Math.random() * randomArr.length)];
} // only use this syntax <T> before the argument parameters
console.log(getRandomElement([1, 5, 7, 8]));
console.log(getRandomElement(["Josh", "Jeremy", "Brennan"])); // note how we can provide the type at function call (but do not have to)
// note: in many cases TypeScript can infer a type:
let x = 23; // note -- if used const would have to be 23
getRandomElement([true, false, true]); // do not need to provide the boolean type because of inference
getRandomElement([true, false, true]); // this is not the case with every generic so at times will have to provide
// generics with multiple types
console.log("********");
// the extends keyword makes sure that the arguments are objects
function merge(object1, object2) {
    // note that this intersection is already inferred
    return Object.assign(Object.assign({}, object1), object2);
} // note: multiple arguments
console.log(merge({ firstName: "Josh", lastName: "Gumerove" }, { occupation: "Engineer", age: 31 }));
const mergedObject = merge({ firstName: "Josh", lastName: "Gumerove" }, { occupation: "Engineer", age: 31 });
// const mergeFailure = merge(
//   { firstName: "Josh", lastName: "Gumerove" },
//   9
// ); // will now get a complaint because added in extends
// note what happens when we try to spread a non-object type (just get an empty keyword)
// type constraints with interface
console.log("****");
function printDoubleLength(thing) {
    return thing.length * 2;
}
console.log(printDoubleLength("adsf")); // note: when using interace does not have to be an object
// console.log(printDoubleLength(123)); will know throw an error
