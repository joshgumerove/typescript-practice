"use strict";
// working with arrays in TypeScript
exports.__esModule = true;
var family = ["josh", "jeremy", "brennan"];
// usually arrays will be of one type
family.forEach(function (member) { return console.log(member); });
var ageList = [];
// alternate syntax for array types below
var gumeroves = []; // this is a more general syntax however
var points = [];
points.push({ x: 23, y: 8 });
// multidimensional arrays
var board = [["josh"]];
var demo = [[[1]]];
