
var computer = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

var win = 0;
var losses = 0;
var guessesLeft = 5;
var letterUser = [];
var eachofLetters = null;

var computerGuess = computer[Math.floor(Math.random() * computer.length)];

function countGuessesLeft() {
	document.querySelector("#guessesLeft").innerHTML = "Guesses Left: " + guessesLeft;
}

function farUserGuesses() {
	document.querySelector("#letter").innerHTML = "Your Guesses so far: " + letterUser.join(' ');
}

var restart = function () {
	guessesLeft = 5;
	letterUser = [];
	computerGuess = computer[Math.floor(Math.random() * computer.length)];
}

document.onkeyup = function (event) {
	guessesLeft--;

	var userGuess = String.fromCharCode(event.keyCode);

	letterUser.push(userGuess);
	countGuessesLeft();
	farUserGuesses();

	if (userGuess === computerGuess) {
		win++;
		document.querySelector("#win").innerHTML = "Wins: " + win;
		alert("You Win")
		restart();
	}
	else if (guessesLeft === 0) {
		losses++;
		document.querySelector("#lose").innerHTML = "Loses: " + losses;
		alert("You Lose")
		restart();
	}
};

//Backgroud

var c = document.getElementById("c");
var ctx = c.getContext("2d");


c.height = window.innerHeight;
c.width = window.innerWidth;


var numbers = "012345678910";

numbers = numbers.split("");

var font_size = 18;
var columns = c.width / font_size;

var drops = [];


for (var x = 0; x < columns; x++)
	drops[x] = 1;


function draw() {


	ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
	ctx.fillRect(0, 0, c.width, c.height);

	ctx.fillStyle = "#0F0";
	ctx.font = font_size + "px arial";

	for (var i = 0; i < drops.length; i++) {

		var text = numbers[Math.floor(Math.random() * numbers.length)];

		ctx.fillText(text, i * font_size, drops[i] * font_size);


		if (drops[i] * font_size > c.height && Math.random() > 0.975)
			drops[i] = 0;


		drops[i]++;
	}
}

setInterval(draw, 50);




