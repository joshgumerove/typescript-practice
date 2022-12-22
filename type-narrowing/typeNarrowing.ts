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

printLetters("");
printLetters(null);
printLetters("Gumerove");
