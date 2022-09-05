"use strict";

const cssStr = "rgb(123, 12, 1)";

/* converter(); */

//CSS to rgb values
function converter() {
  const redStr = cssStr.substring(cssStr.indexOf("(") + 1, cssStr.indexOf(","));
  const greenStr = cssStr.substring(cssStr.indexOf(" "), cssStr.lastIndexOf(" ") - 1);
  const blueStr = cssStr.substring(cssStr.lastIndexOf(" "), cssStr.lastIndexOf("") - 1);
  console.log(redStr);
  console.log(greenStr);
  console.log(blueStr);
  const redNr = parseInt(redStr);
  const greenNr = parseInt(greenStr);
  const blueNr = parseInt(blueStr);
  console.log({ redNr, greenNr, blueNr });
}

///hex to rgb values
const hexStr = "#c0ffee";
hexToRgb();
function hexToRgb() {
  const redPart = hexStr.substring(1, 3);
  const greenPart = hexStr.substring(3, 5);
  const bluePart = hexStr.substring(5, 7);
  // making strings into numbers
  const redNumber = parseInt(redPart, 16);
  const greenNumber = parseInt(greenPart, 16);
  const blueNumber = parseInt(bluePart, 16);
  console.log(redPart);
  console.log(greenPart);
  console.log(bluePart);
  console.log(redNumber);
  console.log(greenNumber);
  console.log(blueNumber);
}

// rgb to hex

const rgb = {
  r: 9,
  g: 0,
  b: 37,
};

/* let rgb;
let r;
let g;
let b; */

function rgbToHex(rgb) {
  const red = rgb.r;
  const r = red.toString(16).padStart(2, "0");
  console.log(red);
  console.log(r);
  const green = rgb.g;
  const g = green.toString(16).padStart(2, "0");
  console.log(g);
  const blue = rgb.b;
  const b = blue.toString(16).padStart(2, "0");
  console.log(b);
  const hex = r + g + b;
  console.log(`#${hex}`);
}
rgbToHex({ r: 1, g: 2, b: 3 });
