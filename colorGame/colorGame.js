var numSquares = 6;
var colors = [];
var pickedColor;

var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeBtns = document.querySelectorAll(".mode");

init();

resetButton.addEventListener("click", function() {
	reset();
});

function init() {
	// set up modeBtn listeners
	setUpModeBtns();
	// set up squares listeners
	setUpSquares();
	reset();
}

function setUpModeBtns() {
	for (var i=0; i<modeBtns.length; i++) {
			modeBtns[i].addEventListener("click", function() {
			modeBtns[0].classList.remove("selected");
			modeBtns[1].classList.remove("selected");
			this.classList.add("selected");
			// figure out how many squares to show
			this.textContent==="Easy"? numSquares  = 3: numSquares  = 6;  // ternary operation
			reset();
		});
	}
}

function setUpSquares() {
	for (var i=0; i<squares.length; i++) {
	// style.backgroundColor works in more environments than style.background
	// 2. add click listeners to squares
		squares[i].addEventListener("click", function() {
		// grab color of clicked square
			var clickedColor = this.style.backgroundColor;
			// compare color to pickedColor
			if (clickedColor === pickedColor) {
				// alert("Correct!");
				messageDisplay.textContent = "correct";
				resetButton.textContent = "Play Again?";
				changeColors(clickedColor);
				h1.style.backgroundColor = clickedColor;  // change title's background color to the clicked color
			} else {
				// alert("Wrong!");
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again";
			}
		});
	}
}

function reset() {
	colors = generateRandomColors(numSquares);
	// pick a random color from array
	pickedColor = pickColor();
	// change colorDisplay to match pickedColor
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "new colors";
	messageDisplay.textContent = "";
	// change all colors of squares
	for (var i=0; i<squares.length; i++) {
		if (colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = "steelblue";
	
}

function generateRandomColors(num) {
	// make an array
	var arr = [];
	// add num random colors to array
	for (var i=0; i<num; i++) {
		// get random color and push into arr
		arr.push(randomColor());
	}
	// return the array
	return arr;
}

function randomColor() {
	// pick a red from 0-255
	var r = Math.floor(Math.random() * 256);
	// pick a green from 0-255
	var g = Math.floor(Math.random() * 256);
	// pick a yellow from 0-255
	var b = Math.floor(Math.random() * 256);
	// space after the comma matters! for comparing pickedColor and clickedColor
	return "rgb(" + r +", "+ g + ", "+b+")";
}

function changeColors(color) {
	// loop through all squares
	for (var i=0; i<squares.length; i++) {
		// change each color to match given color
		squares[i].style.backgroundColor = color;
	}
}

function pickColor() {
	// pick a random color from colors
	var random = Math.floor(Math.random() * colors.length);  // index of colors
	return colors[random];
}