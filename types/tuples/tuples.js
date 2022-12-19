"use strict";
// like a stringent array
let myTuple;
myTuple = [10, "josh"]; // must have exact structure
// fixed in length and types (tuples)
// myTuple = ["josh", 10] would be invalid
let color;
color = [255, 0, 255]; // tuples are just arrays behind the scenes
const goodResponse = [200, "OK"];
// note that order matters
// note can push on to tuple after creation -- which is not good
const responses = [
    [200, "OK"],
    [201, "OK"],
];
