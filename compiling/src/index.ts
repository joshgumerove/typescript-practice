interface Chicken {
  breed: string;
  eggsPerWeek: number;
  name: string;
  age: number;
}

const norma: Chicken = {
  breed: "Silkie",
  eggsPerWeek: 4,
  name: "Norma",
  age: 4,
};

// note tsc -w file_name command
// ntoe tsc --init command

const juniper: Chicken = {
  breed: "Silkie",
  eggsPerWeek: 5,
  name: "Juniper",
  age: 2,
};

const josh: Chicken = {
  breed: "Nuggets",
  eggsPerWeek: 0,
  name: "Josh",
  age: 31,
};
