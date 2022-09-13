"use strict";

const animals = [
  {
    name: "Mandu",
    type: "cat",
  },
  {
    name: "Mia",
    type: "cat",
  },
  {
    name: "Leeloo",
    type: "dog",
  },
  {
    name: "ScoobyDoo",
    type: "dog",
  },
];
function compareName(a, b) {
  if (a.name > b.name) {
    return -1;
  } else {
    return 1;
  }
}
animals.sort(compareName);
console.log(animals);
