"use strict";

const cssStr = "rgb(123, 12, 1)";

converter();
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
