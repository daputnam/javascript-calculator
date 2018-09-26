const mainScreen = document.querySelector(".screen");
let lastValue = 0;
let justPressed;
let mutator;
let currentValue;
// console.log(document.querySelector(".number"));
let numberButtons = document.querySelectorAll(".number");

//add click listeners to all the ".number" buttons
for (var i = 0; i < numberButtons.length; i++) {
  numberButtons[i].addEventListener("click", function(event) {
    justPressed = parseInt(event.target.innerText);
    mainScreen.innerText = mainScreen.innerText + justPressed;
  });
}
document.querySelector(".add").addEventListener("click", function(event) {
  lastValue = parseInt(mainScreen.innerText);
  mainScreen.innerText = "";
  mutator = "+";
});
document.querySelector(".subtract").addEventListener("click", function(event) {
  console.log("subtract listener", mutator);
  lastValue = parseInt(mainScreen.innerText);
  mainScreen.innerText = "";
  mutator = "-";
  console.log("subtract listerner end", mutator);
});
document.querySelector(".multiply").addEventListener("click", function(event) {
  console.log("multiply");

  lastValue = parseInt(mainScreen.innerText);
  mainScreen.innerText = "";
  mutator = "*";
});
document.querySelector(".divide").addEventListener("click", function(event) {
  lastValue = parseInt(mainScreen.innerText);
  mainScreen.innerText = "";
  mutator = "/";
});

document.querySelector(".equals").addEventListener("click", function(event) {
  currentValue = parseInt(mainScreen.innerText);
  switch (mutator) {
    case "+":
      console.log("switch add: currentVal:", currentValue, " lastval-", lastValue);
      mainScreen.innerText = currentValue + lastValue;
      break;
    case "-":
      console.log("switch subtract: currentVal:", currentValue, " lastval-", lastValue);
      let result = lastValue - currentValue;
      console.log(result);
      mainScreen.innerText = result;
      console.log("changed innertext to ", result);
      break;
    case "*":
      mainScreen.innerText = lastValue * currentValue;
      break;
    case "/":
      mainScreen.innerText = lastValue / currentValue;
      break;
    default:
      console.log(mutator);
      break;
  }
});



document.querySelector(".clear").addEventListener("click", function(event) {
  mainScreen.innerText = "";
});

