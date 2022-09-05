/* const person1 = {
  firstname: "Peter",
  age: 29,
  student: false,
};

console.log(person1.lastName);
person1.lastName = "Lind";
console.log(person1.lastName);

console.log(person1);

delete person1.lastName;
console.log(person1.lastName);

const person2 = {
  firstname: "Rei",
  age: 20,
  student: true,
};

person1.firstname = person2.firstname;

console.log(person1.firstname);
 */

/* const teacher1 = {
  hasHair: false,
  isTeacher: true,
  name: "Peter",
};
const teacher2 = {
  hasHair: true,
  isTeacher: true,
  name: "Klaus",
};
if (teacher1.isTeacher) {
  console.log(teacher1.name + " is a teacher");
}
if (!teacher1.isTeacher) {
  console.log(teacher1.name + " is not a teacher");
} */

//// CONFIGURATION OBJECTS
"use strict";

document.addEventListener("DOMContentLoaded", start);

const HTML = {};

function start() {
  HTML.list = document.querySelector("#list");
  HTML.dest = document.querySelector("#list body");
  HTML.template = document.querySelector("template#animal");
}
