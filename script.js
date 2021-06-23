var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2  = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector(".button");

function firstInputsColor(){
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    css.textContent = body.style.background + ";";
    button.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
} 

function  randomColor(){
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    } return color
}
console.log(randomColor());

function generateBoth(){
color1.value = randomColor();
color2.value = randomColor();
button.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
firstInputsColor();
}

firstInputsColor();

function setGradient(){
   firstInputsColor();
}

color1.addEventListener("input", setGradient)
color2.addEventListener("input", setGradient)
button.addEventListener("click", generateBoth)