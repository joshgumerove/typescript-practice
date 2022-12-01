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
// adding default values in typescript
function greetings(person) {
    if (person === void 0) { person = "stranger"; }
    return person;
}
// return type annotations
function basicFunction(x, y) {
    return x * y;
}
// do not have to put the return type -- but at times is a good practice
// note when void is inferred as the return value
function rando(num) {
    if (Math.random() < 0.5) {
        return num.toString();
    }
    return num;
}
// note how can specify multiple return values as above
// the above is called a union type -- :string | number
var add = function (x, y) {
    return x + y;
};
// anonymous function contextaul typing
var colors = ["red", "orange", "yellow"];
colors.map(function (color) { return color.toUpperCase(); }); // note we do not need to annotate in this case --> although we could if we want color: string (typescript can infer the type)
// void type -- usually only used with functions that do not return anything
var annoyUser = function (num) {
    for (var i = 0; i < num; i++) {
        console.log("hello world");
    }
};
