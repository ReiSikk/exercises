"use strict";

getnameParts();
function getnameParts(nameStr) {
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
  /*  console.log(firstName.trim());
  console.log(middleName.trim());
  console.log(lastName.trim()); */
  console.log({ firstName, middleName, lastName });
}
