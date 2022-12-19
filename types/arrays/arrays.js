"use strict";
// working with arrays in TypeScript
Object.defineProperty(exports, "__esModule", { value: true });
let family = ["josh", "jeremy", "brennan"];
// usually arrays will be of one type
family.forEach((member) => console.log(member));
const ageList = [];
// alternate syntax for array types below
let gumeroves = []; // this is a more general syntax however
const points = [];
points.push({ x: 23, y: 8 });
// multidimensional arrays
const board = [["josh"]];
const demo = [[[1]]];
