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
// let coordinate: { x: number; y: number } = {
//   x: 34,
//   y: 2,
// }; // this is not usually done but is valid
function makeRandomCoordinate(x, y) {
    return { x: x, y: y };
}
console.log(makeRandomCoordinate(5, 9));
// function randomCoordinate(): { x: number; y: number } {
//   return { x: Math.random(), y: Math.random() };
// }
// Excess properties
// printName({ first: "Mick", last: "Jagger", age: 55 }); // note how we added an age -- cannot do this
var singer = {
    first: "Mick",
    last: "Jagger",
    age: 55
};
console.log(printName(singer)); // note how we do not get an error here -- decision made early on with typescript (typescript only checks to see if certain properties are there)
// type aliases
var coordinate = {
    x: 34,
    y: 2
};
function randomCoordinate() {
    return { x: Math.random(), y: Math.random() };
}
function doublePoint(point) {
    return {
        x: point.x * 2,
        y: point.y * 2
    };
}
var sayHappyBirthday = function (person) {
    return "Hey ".concat(person.name, " congrats on turning ").concat(person.age);
};
console.log(sayHappyBirthday({ name: "Josh Gumerove", age: 32 }));
function calculatePayout(song) {
    return song.numbStreams * 0.0033;
}
function printSongDetails(song) {
    console.log(song.title, song.artist);
}
var test = {
    title: "unclaimed",
    artist: "stuff",
    numbStreams: 1232,
    credits: {
        producer: "phiilll something",
        writer: "bill jean"
    }
};
console.log(calculatePayout(test));
printSongDetails(test);
var user = {
    id: 43234234,
    username: "jgumerove@gmail.com"
};
console.log(user.id);
// user.id = 34523523412; will complain because cannot write to this
