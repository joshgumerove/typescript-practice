// serve similar purpose to type aliases
// describe shape of objects (and only objects)

// type Point = {
//   x: number;
//   y: number;
// };

interface Point {
  x: number;
  y: number;
}
const pt: Point = {
  x: 12,
  y: 30,
};

interface Person {
  name: string;
  age: number;
}
