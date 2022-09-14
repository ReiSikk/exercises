"use strict";

/* let year = Math.floor(Math.random() * 2023); */
let year = 1900;
/* let userInput = year; */
console.log(year);

isLeapYear(year);
function isLeapYear(year) {
  if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    return true;
  } else {
    return false;
  }
}
console.log(isLeapYear(year));
/* 
function isLeapYear() {
  function check100(userInput) {
    console.log("check100 called");
    if (userInput % 100 == 0) {
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
    console.log("check 400 called");
    if (userInput % 400 == 0) {
      return true;
    } else {
      return false;
    }
  }
  function check4(userInput) {
    console.log("check 4 called");
    if (userInput % 4 == 0) {
      return true;
    } else {
      return false;
    }
  }
  if (check100() === true && check4() === true) {
    return true;
  }
  if (check100() === true && check4() === false) {
    return false;
  }
  if (check100() === false && check400() === false) {
    return false;
  }
}

console.log(isLeapYear()); */
