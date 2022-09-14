"use strict";

let isSynthBrokenFlag = true;
/* let isSynthPartAvailableFlag = false;
let isteacherHappyFlag = true; */

document.addEventListener("DOMContentLoaded", (event) => {
  document.addEventListener("keydown", (event) => {
    console.log("Is synth broken", isSynthBrokenFlag);
    //it sets the boolean value to the opposite value on each keydown event
    isSynthBrokenFlag = !isSynthBrokenFlag;
  });
});
