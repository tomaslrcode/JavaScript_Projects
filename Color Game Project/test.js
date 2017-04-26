
var numberOfSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var randomNumber = Math.floor(Math.random()* colors.length); // get a random # from from 0 - 10
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1"); // to change background to color of correct choice
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");


init(); // start program

function init (){
	// mode button listeners
	setupModeButtons();

	setupSquares();

	reset();
}


function setupModeButtons(){
	for(var i = 0; i < modeButtons.length; i++){
	modeButtons[i].addEventListener("click", function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");
		this.textContent === "Easy" ? numberOfSquares = 3 : numberOfSquares = 6; // ternary
		reset();
		// figure out how many squares to show
		// pick new colors
		// pick a new pickedColor
		// update page to reflect changes
	});
  }
}



function setupSquares(){
	for (var i = 0; i < squares.length; i++) {
	// add intial colors to squares

	// add click listeners to squares
	squares[i].addEventListener("click", function(){
		// grab coor of clicked square
		var clickedColor = this.style.background;
		
		// compare color to color picker
		if (clickedColor === pickedColor) {
			alert("Correct!");
			messageDisplay.textContent = "Correct!";
			resetButton.textContent = "Play Again?";
			changeColor(clickedColor);
			h1.style.background = clickedColor;
		} else {
			alert("Wrong!!");
			this.style.background = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	});
  }
}




function reset(){
	colors = generateRandomColors(numberOfSquares);
	// pick new random color from array
	pickedColor = pickColor();
	// change color display to match picked color
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";
	// change colors of squares
	for (var i = 0; i < squares.length; i++) {
		if (colors[i]) { // first 3 only is easy
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";  // hide 4-6 when on easy
		}
	}
	h1.style.background = "steelblue"; // reset the title color to steelblue
}



resetButton.addEventListener("click", function(){
	reset(); // reset everything when reset button clicked
});

colorDisplay.textContent = pickedColor; // color that we must figure out


function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}


function changeColor(color) {
	// loop through all squares
	// change each color to match given color
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.background = color;
	}
}

function generateRandomColors(num){ // add num random colors into color array
	// Make an array
	// add num random colors to array
	// return that array
	var arr = [];
	
	for (var i = 0; i < num; i++) {
		// get random color and push into array
		arr.push(randomColor());
	}
	return arr;
}


function randomColor() { // function to randomly create a rgb color
	// pick a "red" from 0 - 255
	var r = Math.floor(Math.random() * 256);
	// pick a "gree" from 0 - 255
	var g = Math.floor(Math.random() * 256);
	// pick a "blue" from 0 - 255
	var b = Math.floor(Math.random() * 256);

	return "rgb(" + r + ", " + g + ", " + b + ")"; // need spaces after commas else you get errors
}









