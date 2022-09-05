const student1 = {
  firstname: "Peter",
  age: 29,
  student: false,
};
const student2 = {
  firstname: "Peter",
  age: 29,
  student: false,
};

/* let person2 = {
  firstname: "Peter",
  age: 29,
  student: false,
}; */

student1.firstname = student2.firstname;
student1.age = student2.age;
student1 = student2;

if (student1 === student2) {
  console.log("They are the same ");
} else {
  console.log("they are not the same");
}

/* person1.lastName = "Lind";

let person3 = person1;

person3.firstname = "Changed";
person3 = person2;
person2.firstname = "Also changed";
person1 = person3;
console.log("Person1");
console.log(person1);
console.log("Person2");

console.log(person2);
console.log("Person3");

console.log(person3);
 */
