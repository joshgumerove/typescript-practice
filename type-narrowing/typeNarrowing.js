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
// truthiness guards
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
// note that "" is a falsy string
printLetters("");
printLetters(null);
printLetters("Gumerove");
// equality narrowing: involves comparing types to eacho other before doing certain opertaions with values
console.log("***new section***");
const someFunc = (x, y) => {
    if (x === y) {
        x.toUpperCase();
        y.toUpperCase();
    }
    else {
        console.log(x);
        console.log(y);
    }
};
function someDemo(x, y) {
    if (x === y) {
        x.toUpperCase();
    }
}
someFunc(true, 7);
// narrowing with the in operator
console.log("***new section***");
function getRuntime(media) {
    if ("episodes" in media) {
        return media.episodes;
    }
    return media.title;
}
console.log(getRuntime({ title: "Gladiator", duration: 3.5 }));
console.log(getRuntime({ title: "Friends", episodes: 10, episodeDuration: 35 }));
