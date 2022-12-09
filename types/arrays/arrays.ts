// working with arrays in TypeScript

export {};

let family: string[] = ["josh", "jeremy", "brennan"];

// usually arrays will be of one type

family.forEach((member) => console.log(member));

const ageList: number[] = [];

// alternate syntax for array types below

let gumeroves: Array<string> = []; // this is a more general syntax however

type Point = {
  x: number;
  y: number;
};

const points: Point[] = [];

points.push({ x: 23, y: 8 });

// multidimensional arrays

const board: string[][] = [["josh"]];

const demo: number[][][] = [[[1]]];
