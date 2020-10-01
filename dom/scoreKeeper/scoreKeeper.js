var p1 = document.querySelector("#p1");
var p2 = document.querySelector("#p2");
var resetButton = document.querySelector("#reset");
// var h1 = document.querySelector("h1");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var numInput = document.querySelector("input");
var winningScoreDisplay = document.querySelector("p span");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;

p1.addEventListener("click", function() {
	if (!gameOver) {
		p1Score++;
		if (p1Score === winningScore) {
			p1Display.classList.add("winner");
			gameOver = true;
		}
		p1Display.textContent = p1Score;
	}
	
});

p2.addEventListener("click", function() {
	if (!gameOver) {
		p2Score++;
		if (p2Score === winningScore) {
			p2Display.classList.add("winner");
			gameOver = true;
		}
		p2Display.textContent = p12core;
	}
});

resetButton.addEventListener("click", function() {
	reset();
});

function reset() {
	p1Score = 0;
	p2Score = 0;
	// winningScore = 5;
	p1Display.textContent = 0;
	p2Display.textContent = 0;
	// winningScoreDisplay.textContent = 5;
	p1Display.classList.remove("winner");
	p2Display.classList.remove("winner");
	gameOver = false;
}

numInput.addEventListener("change", function() {
	// change string: numInput.value to a number
	winningScoreDisplay.textContent = Number(numInput.value);
	winningScore = Number(numInput.value);
	reset();
});