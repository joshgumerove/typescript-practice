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
