"use strict";

const nameStr = "REI MYSTERIO JOHNSON";
const firstName = nameStr.substring(nameStr.indexOf(""), nameStr.indexOf(" "));
const middleName = nameStr.substring(nameStr.indexOf(" "), nameStr.lastIndexOf(" "));
const lastName = nameStr.substring(nameStr.lastIndexOf(" ") + 1);
console.log(firstName.trim());
console.log(middleName.trim());
console.log(lastName.trim());
