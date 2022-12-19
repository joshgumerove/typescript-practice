"use strict";
// serve similar purpose to type aliases
// describe shape of objects (and only objects)
Object.defineProperty(exports, "__esModule", { value: true });
const pt = {
    x: 12,
    y: 30,
};
const thomas = {
    id: 55555,
    firstName: "Thomas",
    lastName: "Hardy",
    nickName: "Tommy",
};
thomas.firstName = "Tommy John";
const josh = {
    id: 556234234,
    first: "Josh",
    last: "Gumerov",
    sayHi: () => `Hello ${josh.first}`,
};
console.log(josh.sayHi());
const shoes = {
    name: "blue suede shoes",
    price: 100,
    applyDiscount(discount) {
        return shoes.price - discount * shoes.price;
    },
};
console.log(shoes.applyDiscount(0.3));
const Gumerov = {
    familyMembers: 5,
    names: ["Josh", "Jeremy", "Brennan"],
}; // note: we are not redeclaring the interface here -- we added onto it by reopening it
const buster = {
    name: "Buster",
    age: 5,
    breed: "Bouvier",
    bark() {
        return "wooof";
    },
    job: "drug sniffer",
};
console.log(buster.job);
const joshua = {
    name: "Josh Gumerove",
    id: 55555,
    email: "jgumerove@something.com",
    level: "Junior",
    languages: ["JavaScript", "Python", "Ruby", "TypeScript"],
};
console.log(joshua);
