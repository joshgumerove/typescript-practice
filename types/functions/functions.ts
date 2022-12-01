export {};

function square(num) {
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
