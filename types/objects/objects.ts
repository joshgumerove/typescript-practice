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

// let coordinate: { x: number; y: number } = {
//   x: 34,
//   y: 2,
// }; // this is not usually done but is valid

function makeRandomCoordinate(x: number, y: number): { x: number; y: number } {
  return { x: x, y: y };
}

console.log(makeRandomCoordinate(5, 9));

// function randomCoordinate(): { x: number; y: number } {
//   return { x: Math.random(), y: Math.random() };
// }

// Excess properties

// printName({ first: "Mick", last: "Jagger", age: 55 }); // note how we added an age -- cannot do this
const singer = {
  first: "Mick",
  last: "Jagger",
  age: 55,
};

console.log(printName(singer)); // note how we do not get an error here -- decision made early on with typescript (typescript only checks to see if certain properties are there)

// type aliases

let coordinate: { x: number; y: number } = {
  x: 34,
  y: 2,
};

type Point = {
  x: number;
  y: number;
  z?: number; // makes it optional
}; // not creating a new type just creating a reference to a type

function randomCoordinate(): Point {
  return { x: Math.random(), y: Math.random() };
}

function doublePoint(point: Point): Point {
  return {
    x: point.x * 2,
    y: point.y * 2,
  };
}

// instead of writing out object typs in an annotation - can declare them separaretly in a type alias

type Person = {
  name: string;
  age: number;
}; // convention to be capital but does not have to be

const sayHappyBirthday = (person: Person): string => {
  return `Hey ${person.name} congrats on turning ${person.age}`;
};

console.log(sayHappyBirthday({ name: "Josh Gumerove", age: 32 }));

// does not have to be an object type but usually is

// nested object types

type Song = {
  title: string;
  artist: string;
  numbStreams: number;
  credits: {
    producer: string;
    writer: string;
  };
};

function calculatePayout(song: Song): number {
  return song.numbStreams * 0.0033;
}

function printSongDetails(song: Song): void {
  console.log(song.title, song.artist);
}

const test = {
  title: "unclaimed",
  artist: "stuff",
  numbStreams: 1232,
  credits: {
    producer: "phiilll something",
    writer: "bill jean",
  },
};

console.log(calculatePayout(test));
printSongDetails(test);

// the readonly modifier

type User = {
  readonly id: number;
  username: string;
};

const user: User = {
  id: 43234234,
  username: "jgumerove@gmail.com",
};

console.log(user.id);
// user.id = 34523523412; will complain because cannot write to this

type Circle = {
  radius: number;
};

type Colorful = {
  color: string;
};

type ColorfulCircle = Circle & Colorful;

const happyFace: ColorfulCircle = {
  radius: 4,
  color: "yellow",
};
