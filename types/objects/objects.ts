export {};

const dog = {
  name: "Elton",
  breed: "Australian Shepherd",
  age: 0.5,
};

// regular JS object above
// note how we can specify what an object looks like

const printName = (name: { first: string; last: string }): string => {
  return `Name: ${name.first} ${name.last}`;
};

// note how the above accepts an object

console.log(printName({ first: "Josh", last: "Gumerove" }));

// more on objects

let coordinate: { x: number; y: number } = {
  x: 34,
  y: 2,
}; // this is not usually done but is valid

function makeRandomCoordinate(x: number, y: number): { x: number; y: number } {
  return { x: x, y: y };
}

console.log(makeRandomCoordinate(5, 9));

function randomCoordinate(): { x: number; y: number } {
  return { x: Math.random(), y: Math.random() };
}

// Excess properties

// printName({ first: "Mick", last: "Jagger", age: 55 }); // note how we added an age -- cannot do this
const singer = {
  first: "Mick",
  last: "Jagger",
  age: 55,
};

console.log(printName(singer)); // note how we do not get an error here -- decision made early on with typescript (typescript only checks to see if certain properties are there)
