"use strict";

/* getnameParts(); */
/* function getnameParts(nameStr) {
  nameStr = "REI JOHNSON";
  const firstName = nameStr.substring(nameStr.indexOf(""), nameStr.indexOf(" "));
  const middleName = nameStr.substring(nameStr.indexOf(" "), nameStr.lastIndexOf(" "));
  const lastName = nameStr.substring(nameStr.lastIndexOf(" ") + 1);
  firstName.trim();
  middleName.trim();
  lastName.trim();
  if (middleName === "") {
    middleName == null;
    console.log("hello");
  }
  console.log({ firstName, middleName, lastName });
} */

function fullName(lastName, firstName, middleName) {
  if (middleName) {
    return `${firstName} ${middleName} ${lastName}`;
  } else {
    return `${firstName} ${lastName}`;
  }
}
console.log("fullname test 1: ", fullName("Lind", "Peter"));
console.log("fullname test 2: ", fullName("Lind", "Peter", "Heronimus"));

//getNameParts(fullName)exercise

let nameStr = "REI William Reison JOHNSON";
getnameParts();
function getnameParts(fullName) {
  const firstName = nameStr.substring(nameStr.indexOf(""), nameStr.indexOf(" "));
  const middleName = nameStr.substring(nameStr.indexOf(" "), nameStr.lastIndexOf(" "));
  const lastName = nameStr.substring(nameStr.lastIndexOf(" ") + 1);
  firstName.trim();
  middleName.trim();
  lastName.trim();
  if (middleName === "") {
    middleName == null;
    console.log("hello");
  }
  console.log({ firstName, middleName, lastName });
}
/* const cap = capitalize(fullName); */
function capitalize(str) {
  str = nameStr;
  const firstName = nameStr.substring(nameStr.indexOf(""), nameStr.indexOf(" "));
  return name1;
}
