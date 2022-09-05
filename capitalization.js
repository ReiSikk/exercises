"use strict";
function capitalize(str) {
  str = "pETEr";
  const name1 = str.substring(0, 1).toUpperCase() + str.substring(1, 5).toLowerCase();
  console.log(name1);
}

capitalize();
