//object prototype
const Teacher = {
  firstName: "",
  lastName: "",
  department: "",
  age: 20,
};

const peter = Object.create(Teacher);

peter.firstName = "Peter";
peter.lastName = "Lastname";

console.log("peter: ", peter);
