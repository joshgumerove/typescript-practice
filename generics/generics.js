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
