// allow us to define reusable functions and classes that work with multiple types

function wrapInArry<T>(element: T): T[] {
  return [element];
}

const nums: number[] = [];

const alternative: Array<number> = []; //this is an example of built-in generic that we provided a type to (array is the name of the interface)

function identity<T>(item: T): T {
  return item;
}

const identify = <T>(item: T): T => {
  return item;
};

identity<string>("Josh"); // can now provide what the type when calling the function
identity<boolean>(false); // establish that input put should be the return type

function getRandomElement<T>(randomArr: T[]): T {
  return randomArr[Math.floor(Math.random() * randomArr.length)];
} // only use this syntax <T> before the argument parameters

console.log(getRandomElement<number>([1, 5, 7, 8]));
console.log(getRandomElement<string>(["Josh", "Jeremy", "Brennan"])); // note how we can provide the type at function call (but do not have to)

// note: in many cases TypeScript can infer a type:

let x = 23; // note -- if used const would have to be 23
getRandomElement<boolean>([true, false, true]); // do not need to provide the boolean type because of inference
getRandomElement([true, false, true]); // this is not the case with every generic so at times will have to provide

// generics with multiple types
console.log("********");

// the extends keyword makes sure that the arguments are objects
function merge<T extends object, U extends object>(
  object1: T,
  object2: U
): T & U {
  // note that this intersection is already inferred
  return {
    ...object1,
    ...object2,
  };
} // note: multiple arguments

console.log(
  merge(
    { firstName: "Josh", lastName: "Gumerove" },
    { occupation: "Engineer", age: 31 }
  )
);

const mergedObject = merge(
  { firstName: "Josh", lastName: "Gumerove" },
  { occupation: "Engineer", age: 31 }
);

// const mergeFailure = merge(
//   { firstName: "Josh", lastName: "Gumerove" },
//   9
// ); // will now get a complaint because added in extends

// note what happens when we try to spread a non-object type (just get an empty keyword)

// type constraints with interface
console.log("****");

interface Lengthy {
  length: number;
}

function printDoubleLength<T extends Lengthy>(thing: T): number {
  return thing.length * 2;
}

console.log(printDoubleLength("adsf")); // note: when using interace does not have to be an object
// console.log(printDoubleLength(123)); will know throw an error

// default type parameters with generics

function makeEmptyList<T = number>(): T[] {
  // will now default to type number
  return [];
}

const strings = makeEmptyList<string>(); // this makes an empty string array (if do not call it with string would get array of uknown type)
strings.push("abc");
// strings.push(1) would get an error at compilation

const defaultArray = makeEmptyList(); // will now be an array of type number

// writing generic classes

interface Song {
  title: string;
  artist: string;
}

interface Video {
  title: string;
  creator: string;
  resolution: string;
}

class VideoPlaylist {
  public videos: Video[] = [];
}

class SongPlaylist {
  public songs: Song[] = [];
}

// refactor to single playlist class using generics

class Playlist<T> {
  public queue: T[] = [];

  add(el: T) {
    this.queue.push(el);
  }
}

const songs = new Playlist<Song>();
songs.add({ title: "ooh la la", artist: "Rod Stewart" }); // will complain if not of type song
console.log(songs);
