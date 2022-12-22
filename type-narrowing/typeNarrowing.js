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
