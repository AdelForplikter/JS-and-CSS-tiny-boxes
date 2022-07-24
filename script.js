import quotes from "./shakespeare_quotes.js";

window.onload = function () {
  //boxes40krandom();
  boxesShakespearQuotes();
};

function boxes40krandom() {
  for (var i = 0; i < 40000; i++) {
    const randomColor = Math.floor(Math.random() * 3); //random number 0,1 or 2
    addDiv("box" + randomColor);
  }
}

function boxesShakespearQuotes() {
  for (var i = 0; i < quotes.length; i++) { // iterating every quote
    for (var j = 0; j < quotes[i].length; j++) { //iterating letters of quote
      var varBin = quotes[i][j].charCodeAt(0).toString(2); //converting to 8 bits "A" = 01000001
      for (var k = 0; 8 - varBin.length; k++) {
        varBin = "0" + varBin; //   pad left side with 0's
      }
      for (var l = 0; l < varBin.length; l++) {
        addDiv("box" + varBin[l]); // CSS box-classname for color is .box0 and .box1
      }
    }
    addDiv("box2");
  }
}

function addDiv(divClassName) {
    const node = document.createElement("div");
    node.classList.add("box");
    node.classList.add(divClassName);
    document.getElementById("container").appendChild(node);
}