// serve similar purpose to type aliases
// describe shape of objects (and only objects)

// type Point = {
//   x: number;
//   y: number;
// };

export {};

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

// can also create option properties

interface Person1 {
  readonly id: number;
  firstName: string;
  lastName: string;
  nickName?: string;
}

const thomas: Person1 = {
  id: 55555,
  firstName: "Thomas",
  lastName: "Hardy",
  nickName: "Tommy",
};

thomas.firstName = "Tommy John";
// thomas.id = 55555555; cannot change because is readonly

// interface methods -- can describe the shape of an object in terms of methods should include and what should return

interface Individual {
  readonly id: number;
  first: string;
  last: string;
  nickname?: string;
  sayHi: () => string; // one way of writing this -- saying must be a method that returns string
  // sayHi(): string -- another way to define
}

const josh: Individual = {
  id: 556234234,
  first: "Josh",
  last: "Gumerov",
  sayHi: () => `Hello ${josh.first}`,
};

console.log(josh.sayHi());

interface Product {
  name: string;
  price: number;
  applyDiscount(discount: number): number;
}

const shoes: Product = {
  name: "blue suede shoes",
  price: 100,
  applyDiscount(discount: number): number {
    return shoes.price - discount * shoes.price;
  },
};

console.log(shoes.applyDiscount(0.3));

// reopening interfaces -- can add on after defining

interface Gumerove {
  familyMembers: number;
}

interface Gumerove {
  names: string[];
}

const Gumerov: Gumerove = {
  familyMembers: 5,
  names: ["Josh", "Jeremy", "Brennan"],
}; // note: we are not redeclaring the interface here -- we added onto it by reopening it

// extending an interface (inheriting from another interface like inheritance with class)

interface Dog {
  name: string;
  age: number;
  breed: string;
  bark(): string;
}

interface ServiceDog extends Dog {
  job: "drug sniffer" | "bomb" | "guide dog";
}

const buster: ServiceDog = {
  name: "Buster",
  age: 5,
  breed: "Bouvier",
  bark() {
    return "wooof";
  },
  job: "drug sniffer",
};

console.log(buster.job);
