export {};

function square(num: number) {
  return num * num;
} // by default the type will be any in this case -- which is not good

function squared(num: number) {
  return num * num;
}

squared(4);

function greet(person: string) {
  //   person * person; will catch this error
  return `Hi there ${person}`;
}

greet("Josh Gumerove");

// can have as many parameters as we want

const doSomething = (person: string, age: number, isFunny: boolean) => {
  return isFunny ? `${person} is ${age} but still got it` : "he is not funny";
};

console.log(doSomething("Josh", 31, true));

// adding default values in typescript

function greetings(person: string = "stranger") {
  return person;
}

// return type annotations

function basicFunction(x: number, y: number): number {
  return x * y;
}
// do not have to put the return type -- but at times is a good practice
// note when void is inferred as the return value

function rando(num: number): string | number {
  if (Math.random() < 0.5) {
    return num.toString();
  }
  return num;
}

// note how can specify multiple return values as above
// the above is called a union type -- :string | number

const add = (x: number, y: number): number => {
  return x + y;
};

// anonymous function contextaul typing

const colors = ["red", "orange", "yellow"];

colors.map((color) => color.toUpperCase()); // note we do not need to annotate in this case --> although we could if we want color: string (typescript can infer the type)

// void type -- usually only used with functions that do not return anything

const annoyUser = (num: number): void => {
  for (let i = 0; i < num; i++) {
    console.log("hello world");
  }
};

// specify that function is not suppose to return anything

// the Never type:
// represents values that NEVER occur
// with never --> function does not actually finish executing (should not be confused with void)

function makeError(msg: string): never {
  throw new Error(msg);
}

function gameLoop(): never {
  while (true) {
    console.log("game loop running");
  }
}
