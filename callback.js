/* function congrats(name) {
  console.log("Congrats" + name);
}
console.log("Wait for it....");

setTimeout(congrats, 3000, "Peter");
 */

function hire(person) {
  person.hired = true;
}
function fire(person) {
  person.hired = false;
}

//we pass a function as a first argument and an object as a second argument
//action could be named anything as long as we keep using it

function hireOrFire(action, person) {
  action(person);
}
const person3 = {
  firstName: "Harry",
  lastName: "Potter",
  hired: false,
};
const person4 = {
  firstName: "Ron",
  lastName: "Weasly",
  hired: false,
};
console.log("Person3", person3.hired);
hireOrFire(hire, person3);
console.log("Person 3 hired?", person3.hired);
hireOrFire(fire, person3);
console.log("Person 3 hired?", person3.hired);

//////EXERCISE: loadJSON
const url = "actors.json";

document.addEventListener("DOMContentLoaded", () => {
  loadJSON("actors.json", prepareData);
});

function loadJSON(url, prepareData) {
  fetch(url)
    .then((response) => response.json())
    .then((jsonData) => prepareData(jsonData));
  console.log("loadJSON called");
}
function prepareData(jsonData) {
  console.log("Jif");
}
