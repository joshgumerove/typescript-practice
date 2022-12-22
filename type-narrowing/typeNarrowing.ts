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
