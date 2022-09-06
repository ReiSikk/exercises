"use strict";
function capitalize(str) {
  str = "pETEr";
  const name1 = str.substring(0, 1).toUpperCase() + str.substring(1, 5).toLowerCase();
  return name1;
}
const name = "pETer";
const cap = capitalize(name);
capitalize();
console.log(cap);
