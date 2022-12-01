"use strict";
exports.__esModule = true;
var myAwesomeVariable = "So Awesome";
var movieTitle = "Gladiator";
movieTitle = "Amadeus";
movieTitle.toUpperCase();
var myNumber = 31;
console.log(myNumber);
myNumber += 1;
var isLegal = true;
console.log(isLegal);
// note the tsc file_name syntax to compile to JS
// note -- we currently do not stop this from making another file with the compiled code
// note -- do not need the type annotations most of the time
// can rely on type inference
var x = 27;
// x = "twenty"; note how typescript catches this error
var gumerove = "josh gumerove"; // generally do not want to work with this type -- defeats the purpose of typescript
gumerove = 89;
console.log(gumerove);
var thing; // extra checks are gone when we use this type (not good)
var movies = ["arrival", "the thing", "aliens", "amadeus"];
var foundMovie;
for (var _i = 0, movies_1 = movies; _i < movies_1.length; _i++) {
    var movie = movies_1[_i];
    if (movie === "amadeus") {
        foundMovie = "amadeus";
    }
}
console.log(foundMovie);
