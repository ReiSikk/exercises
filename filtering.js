const animal = [
  {
    name: "Klaus",
    type: "dog",
  },
  {
    name: "Peter",
    type: "dog",
  },
  {
    name: "Jonas",
    type: "cat",
  },
];

let viewArray;

function isJonasTheCat(animal) {
  if (animal.type !== "cat" && animal.name !== "Jonas") {
    return false;
  } else {
    return true;
  }
}
console.log("animals", animal);
viewArray = animal.filter(isJonasTheCat);
// it only gives you the value which returned true?????

console.log("Filtered view array(Jonas the cat objects): ", viewArray);

//what does this function exactly do?
function all(animal) {
  return true;
}

/// objects which result to true in this case are kept/ false are not
function isDog(animal) {
  if (animal.type !== "dog") {
    return false;
  } else {
    return true;
  }
}
viewArray = animal.filter(isDog);
console.log("Filtered view(Who let the dogs out?!?!): ", viewArray);
