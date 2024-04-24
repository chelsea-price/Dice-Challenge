// Math.random: Generates a number between 0 - .99
// Math.floor: Rounds down a number to the nearest whole number 
// +1: Current numbers are between 0-5, +1 updates to 1-6
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

// Targeting this line of code <img class="img1" src="./images/dice6.png" /> to change image source based on randomized number
var randomImageSource = "images/dice" + randomNumber1 + ".png";

// querySelectorAll: Selects all targeted items and list them in an array
// [0] targets the 1st img element and change its src attribute to randomImageSource
// Which generates a string path to a new file
var image1 = document.querySelectorAll("img")[0];
// targets variable and performs action 
image1.setAttribute("src", randomImageSource);

//Repeats steps for second dice 
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

// For conditional statements, ensure you are comparing numbers
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
}
else {
    document.querySelector("h1").innerHTML = "Draw!";
}