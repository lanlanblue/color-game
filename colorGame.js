/*
var colors = [
	"rgb(0, 255, 255)", /*spaces is important!
	"rgb(255, 0, 255)",
	"rgb(255, 255, 0)",
	"rgb(0, 0, 255)",
	"rgb(0, 255, 0)",
	"rgb(255, 0, 0)"
]
*/


var squaresNum = 6;
var colors = generateRandomColors(squaresNum);

var guessedColor = pickColor();
var colorTitle = document.querySelector("#guessedColor");
colorTitle.textContent = guessedColor;

var messageDisplay = document.querySelector("#message");
var h1Display = document.querySelector("h1");

var newGame = document.querySelector("#reset");
var buttons = document.querySelectorAll(".square");

var easyButton = document.querySelector("#easy");
var hardButton = document.querySelector("#hard");


easyButton.addEventListener("click", function() {
	squaresNum = 3;
	this.classList.add("selected");
	hardButton.classList.remove("selected");
	initiate();
});

hardButton.addEventListener("click", function() {
	squaresNum = 6;
	this.classList.add("selected");
	easyButton.classList.remove("selected");
	initiate();
});

newGame.addEventListener("click", initiate);




for (var i=0; i<buttons.length; i++) {
	buttons[i].style.backgroundColor = colors[i]; /*backgroundColor is more compatible than background*/
	console.log("button color: "+colors[i]);
	//add listeners
	buttons[i].addEventListener("click", function() {
			var clickedColor = this.style.backgroundColor; /* must use 'this'*/
			//alert(clickedColor);
			
			if(clickedColor === guessedColor) {
				messageDisplay.textContent = "Bingo";
				changeColors();
				newGame.textContent = "Play Again?";
				
			} else {
				//this.style.transition = "0.6s";
				this.style.backgroundColor = "#232323";
				//this.classList.add("body");
				console.log("clicked: "+clickedColor);
				messageDisplay.textContent = "Incorrect! Try again!";
			}
	});
}


function initiate() {
	colors = generateRandomColors(squaresNum);
	console.log(colors);
	guessedColor = pickColor();
	console.log("golden: "+guessedColor);
	colorTitle.textContent = guessedColor;
	messageDisplay.textContent = "";
	newGame.textContent = "NEW GAME";

	h1Display.style.backgroundColor = "grey";

	for (var i=0; i<buttons.length; i++) {
		//set colors
		if(i >= squaresNum) {
			buttons[i].style.display = "none"; //disappear, opposite is "block"
		} else {
			buttons[i].style.display = "block";
			buttons[i].style.backgroundColor = colors[i]; /*backgroundColor is more compatible than background*/
		}
	}
}

function changeColors() {
	for (var i=0; i<buttons.length; i++) {
		buttons[i].style.backgroundColor = guessedColor;
	}
	h1Display.style.backgroundColor = guessedColor;
}

function pickColor() {
	var index = Math.floor(Math.random() * colors.length);
	return colors[index];
}

function generateRandomColors(num) {
	var arr = [];
	for (var i = 0; i < num; i++) {
		//arr[i] = randomRGB();
		arr.push(randomRGB());
	}
	return arr;
}

function randomRGB() {
	var colorR = Math.floor(Math.random() * 256); /* 0-255*/
	var colorG = Math.floor(Math.random() * 256);
	var colorB = Math.floor(Math.random() * 256);
	var RGB = "rgb(" + colorR + ", " + colorG + ", " +colorB + ")";
	return RGB;
}



