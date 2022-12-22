"use strict";
function triple(value) {
    if (typeof value === "number") {
        return value * 3;
    }
    value = (value + " ");
    return value.repeat(3);
}
console.log(triple("Josh"));
console.log(triple(100));
console.log("***new section***");
const printLetters = (word) => {
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
