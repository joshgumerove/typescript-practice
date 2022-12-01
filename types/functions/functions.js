"use strict";
exports.__esModule = true;
function square(num) {
    return num * num;
} // by default the type will be any in this case -- which is not good
function squared(num) {
    return num * num;
}
squared(4);
function greet(person) {
    //   person * person; will catch this error
    return "Hi there ".concat(person);
}
greet("Josh Gumerove");
// can have as many parameters as we want
var doSomething = function (person, age, isFunny) {
    return isFunny ? "".concat(person, " is ").concat(age, " but still got it") : "he is not funny";
};
console.log(doSomething("Josh", 31, true));
