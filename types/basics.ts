export {};

const myAwesomeVariable: string = "So Awesome";

let movieTitle: string = "Gladiator";

movieTitle = "Amadeus";

movieTitle.toUpperCase();

let myNumber: number = 31;
console.log(myNumber);

myNumber += 1;

let isLegal: boolean = true;
console.log(isLegal);

// note the tsc file_name syntax to compile to JS
// note -- we currently do not stop this from making another file with the compiled code
// note -- do not need the type annotations most of the time
// can rely on type inference

let x = 27;

// x = "twenty"; note how typescript catches this error

let gumerove: any = "josh gumerove"; // generally do not want to work with this type -- defeats the purpose of typescript
gumerove = 89;
console.log(gumerove);

let thing: any; // extra checks are gone when we use this type (not good)

const movies = ["arrival", "the thing", "aliens", "amadeus"];

let foundMovie: string;

for (let movie of movies) {
  if (movie === "amadeus") {
    foundMovie = "amadeus";
  }
}
