"use strict";
// serve similar purpose to type aliases
// describe shape of objects (and only objects)
exports.__esModule = true;
var pt = {
    x: 12,
    y: 30
};
var thomas = {
    id: 55555,
    firstName: "Thomas",
    lastName: "Hardy",
    nickName: "Tommy"
};
thomas.firstName = "Tommy John";
var josh = {
    id: 556234234,
    first: "Josh",
    last: "Gumerov",
    sayHi: function () { return "Hello ".concat(josh.first); }
};
console.log(josh.sayHi());
var shoes = {
    name: "blue suede shoes",
    price: 100,
    applyDiscount: function (discount) {
        return shoes.price - discount * shoes.price;
    }
};
console.log(shoes.applyDiscount(0.3));
