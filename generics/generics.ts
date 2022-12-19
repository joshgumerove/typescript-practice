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
