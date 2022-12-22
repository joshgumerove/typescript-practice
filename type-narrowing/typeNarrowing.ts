function triple(value: number | string) {
  if (typeof value === "number") {
    return value * 3;
  }
  value = (value + " ") as string;
  return value.repeat(3);
}

console.log(triple("Josh"));
console.log(triple(100));
