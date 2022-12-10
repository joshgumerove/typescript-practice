// like a stringent array

let myTuple: [number, string];

myTuple = [10, "josh"]; // must have exact structure

// fixed in length and types (tuples)
// myTuple = ["josh", 10] would be invalid

let color: [number, number, number];
color = [255, 0, 255]; // tuples are just arrays behind the scenes

type HTTPResponse = [number, string];

const goodResponse: HTTPResponse = [200, "OK"];
// note that order matters
// note can push on to tuple after creation -- which is not good

const responses: HTTPResponse[] = [
  [200, "OK"],
  [201, "OK"],
];
