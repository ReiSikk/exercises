"use strict";

let year = Math.floor(Math.random() * 2023);
let userInput = year;

console.log(year);
console.log(userInput);

isLeapYear();

function isLeapYear(year) {
  function check100(year) {
    if (userInput % 100 === 0) {
      return true;
    } else {
      return false;
    }
  }
  if (check100() === false) {
    check400(userInput);
  }
  if (check100() === true) {
    check4(userInput);
  }
  function check400(userInput) {
    /*  console.log("check 400 called"); */
    if (userInput % 400 === 0) {
      console.log(`${userInput} is a leapyear!!!`);
    } else {
      console.log(`${userInput} is not a leapyear`);
    }
  }
  function check4(userInput) {
    console.log("check 4 called");
    if (userInput % 4 === 0) {
      console.log(`${userInput} is a leapyear!!!`);
    } else {
      console.log(`${userInput} is not a leapyear`);
    }
  }
}
