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

function merge<T, U>(object1: T, object2: U): T & U {
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
