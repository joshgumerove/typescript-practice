function triple(value: number | string) {
  if (typeof value === "number") {
    return value * 3;
  }
  value = (value + " ") as string;
  return value.repeat(3);
}

console.log(triple("Josh"));
console.log(triple(100));

// truthiness guards
console.log("***new section***");

const printLetters = (word: string | null): void => {
  if (!word || word.trim() === "") {
    console.log("No word provided");
    return;
  }
  for (const letter of word) {
    console.log(letter);
  }
};

// note that "" is a falsy string

printLetters("");
printLetters(null);
printLetters("Gumerove");

// equality narrowing: involves comparing types to eacho other before doing certain opertaions with values
console.log("***new section***");

const someFunc = (x: string | boolean, y: string | number) => {
  if (x === y) {
    x.toUpperCase();
    y.toUpperCase();
  } else {
    console.log(x);
    console.log(y);
  }
};

function someDemo(x: string | number, y: string | boolean) {
  if (x === y) {
    x.toUpperCase();
  }
}

someFunc(true, 7);

// narrowing with the in operator
console.log("***new section***");

interface Movie2 {
  title: string;
  duration: number;
}

interface TVShow {
  title: string;
  episodes: number;
  episodeDuration: number;
}

function getRuntime(media: TVShow | Movie2) {
  if ("episodes" in media) {
    return media.episodes;
  }

  return media.title;
}

console.log(getRuntime({ title: "Gladiator", duration: 3.5 }));
console.log(
  getRuntime({ title: "Friends", episodes: 10, episodeDuration: 35 })
);

// instance of narrowing

function printFullDate(date: string | Date) {
  if (date instanceof Date) {
    console.log(date.toUTCString());
  } else {
    console.log(new Date(date).toUTCString());
  }
}

// type predicates: specific to TypeScript (not a JS feature)

interface Cat {
  name: string;
  numLives: number;
}

interface Dog {
  name: string;
  breed: string;
}

function isCat(animal: Cat | Dog): animal is Cat {
  return (animal as Cat).numLives !== undefined;
}

const jerry = {
  name: "Jerry",
  numLives: 10,
};

console.log(isCat(jerry));

function makeNoise(animal: Cat | Dog): string {
  if (isCat(animal)) {
    animal; // now know inside here it is of type cat
    return "Meow";
  }
  animal; // now ts knows here that it is of type dog
  return "woof";
}
