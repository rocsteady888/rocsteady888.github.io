var hangman = {
	wrongGuesses: 10,
	wins: 0,
	words: [
		"strawberry", 
		"apple", 
		"orange", 
		"banana", 
		"peach", 
		"apricot", 
		"nectarine", 
		"blueberry"
	],
}

//the blank underscores shown to player at the start
var answerDisplay = [];


// when player guesses correctly, these will be displayed
var answerArray = [];

// shows player which letters they have guessed
var guessedLetters = [];

// Get a random word from the array when Start button is clicked.
function start() {

	//random number to get index of word in hangman object
	var randWord = hangman.words[Math.floor((Math.random() * hangman.words.length))];
	var correctGuesses = randWord.length;
	//reset game
	hangman.wrongGuesses = 10;
	document.getElementById("guessedLetters").innerHTML = ""; 
	document.getElementById("demo").innerHTML = ""; 
	document.getElementById("guesses").innerHTML = "Guesses: " + hangman.wrongGuesses; 
	document.getElementById("wins").innerHTML = "Wins: " + hangman.wins; 
	// append new value to the array
	// use random word from array and write each letter to id='demo'


	// let player know how many letters are in the word
	for (var i = 0; i < randWord.length; i++) {
    	answerDisplay[i] = "__ ";
    	document.getElementById("demo").innerHTML = document.getElementById("demo").innerHTML + answerDisplay[i];
	}

	//  hold value of correct letters in another array
	for (var i = 0; i < randWord.length; i++) {
    	randWord[i] = answerArray[i];
	}

	//user's guess
	document.onkeyup = function(event) {

		// Determines which key was pressed.
		// check each index in the array if it matches
		var userGuess = event.key;
		console.log(userGuess);
		document.getElementById("demo").innerHTML = "";
		for (var i = 0; i < randWord.length; i++) {
			if (randWord[i] === userGuess) {
				correctGuesses --;
		    	answerDisplay[i] = userGuess;
		    	document.getElementById("demo").innerHTML = document.getElementById("demo").innerHTML + answerDisplay[i] + " ";
		    } else if (randWord[i]) {
		    	document.getElementById("demo").innerHTML = document.getElementById("demo").innerHTML + answerDisplay[i] + " ";
		    }
		}

		// counts wrong guesses
		function indexChecker(userGuess) {

			var indexCheck = randWord.indexOf(userGuess);
			if ( indexCheck < 0 ) {
				hangman.wrongGuesses --;
				document.getElementById("guesses").innerHTML = "Guesses: " + hangman.wrongGuesses; 
			} 
		}

		indexChecker(userGuess);


		//shows player which letters have been guessed
		function guessedLet(userGuess) {
			var indexGuessLet = randWord.indexOf(userGuess);
			if ( indexGuessLet < 0 ) { 
			guessedLetters.push();
			document.getElementById("guessedLetters").innerHTML = document.getElementById("guessedLetters").innerHTML + " " + userGuess;
			}
		}

		guessedLet(userGuess);


		// draw hangman
		var wrongGuesses = hangman.wrongGuesses;
		function drawHangman (wrongGuesses) {
			if (wrongGuesses = 10 ) {
				document.getElementById("myImg").src = "assets/images/base.png";
			} else if (wrongGuesses = 9 ) {
				document.getElementById("myImg").src = "assets/images/shaft.png";
			} else if (wrongGuesses = 8 ) {
				document.getElementById("myImg").src = "assets/images/branch.png";
			} else if (wrongGuesses = 7 ) {
				document.getElementById("myImg").src = "assets/images/rope.png";
			} else if (wrongGuesses = 6  ) {
				document.getElementById("myImg").src = "assets/images/head.png";
			} else if (wrongGuesses = 5 ) {
				document.getElementById("myImg").src = "assets/images/body.png";
			} else if (wrongGuesses = 4 ) {
				document.getElementById("myImg").src = "assets/images/arm1.png.png";
			} else if (wrongGuesses = 3 ) {
				document.getElementById("myImg").src = "assets/images/arm2.png.png";
			} else if (wrongGuesses = 2 ) {
				document.getElementById("myImg").src = "assets/images/leg1.png.png";
			} else if (wrongGuesses = 1 ) {
				document.getElementById("myImg").src = "assets/images/leg2.png.png";
			} else if (wrongGuesses = 0 ) {
				alert("you lose :(");
			}
		}

		drawHangman(wrongGuesses);


		// lets player know when there are no more letters to guess
		function correctGuessesCount(correctGuesses) {
			if (correctGuesses === 0) {
		    	alert("You Win!!!");
		    	hangman.wins ++; 
			}
		}

		correctGuessesCount(correctGuesses);

	}

	// for testing only
	console.log(randWord);
	console.log("*-*-*-*-*-*");
}


//
// blank letter array



// user inputs a letter
// check to see if input is in string



// if correct, fill into area, if incorrect add to hangman
// document.getElementById("guessedLetters").innerHTML = keypressed()

// array of wrong guess

// maximum number of tries
// if ( guesses > 6 ) {
// 	alert("Game Over");
// }
// player can guess full word
	//string to lowercase === random word
// var guessWord = prompt("Guess the word!");
// disable guessed letters

// replace array with imported dictionary of words?
// optional hint





// 2. Choose a theme for your game! In the demo, we picked an 80s theme: 80s questions, 80s sound and an 80s aesthetic. You can choose any subject for your theme, though, so be creative!

// 3. Use key events to listen for the letters that your players will type.

// 4. Display the following on the page:

// 5. Press any key to get started!

// 6. Wins: (# of times user guessed the word correctly).

//    * If the word is `madonna`, display it like this when the game starts: `_ _ _ _ _ _ _`.

//    * As the user guesses the correct letters, reveal them: `m a d o _  _ a`.

// 7. Number of Guesses Remaining: (# of guesses remaining for the user).

// 8. Letters Already Guessed: (Letters the user has guessed, displayed like `L Z Y H`).

// 9. After the user wins/loses the game should automatically choose another word and make the user play it.

// ##### Hangman Game Bonuses

// 1. Play a sound or song when the user guesses their word correctly, like in our demo.
// 2. Write some stylish CSS rules to make a design that fits your game's theme.
// 3. **HARD MODE:** Organize your game code as an object, except for the key events to get the letter guessed. This will be a challenge if you haven't coded with JavaScript before, but we encourage anyone already familiar with the language to try this out.
// 4. Save your whole game and its properties in an object.
// 5. Save any of your game's functions as methods, and call them underneath your object declaration using event listeners.
// 6. Don't forget to place your global variables and functions above your object.
//    * Remember: global variables, then objects, then calls.
// 7. Definitely talk with a TA or your instructor if you get tripped up during this challenge.

// - - -

// #### A Few Tips

// 1. **IMPORTANT:** Whichever assignment you choose, code your game one piece at a time! Code all of your apps one piece at a time. _Always code one piece at a time!_
// 2. Pseudocode your program and break the app down into tiny, manageable fragments. This will make the coding process much less frustrating and a veritable Mach number faster. Otherwise, you'll be chipping away at a giant chunk of abstraction for way too many hours.

//    * The ability to solve a large problem by treating it as a set of smaller ones is the hallmark of a strong programmer. Best start adapting this into your development routine now, to better prepare for your more complex future projects.
//    * Remember:
//      1. Split the whole program into many distinct, pseudocoded problems.
//      2. Focus on one of the smaller problems and solve it.
//      3. Only when you solve one problem should you then move onto your next problem.

// 3. When you encounter bugs (and we all do), `console.log` will become your best friend. Regularly check your console to make sure your app is spitting out the right values.

//    * As a more advanced—but more powerful—alternative, feel free to experiment with the [Chrome DevTools Debugger](https://developers.google.com/web/tools/chrome-devtools/).

// 4. Try your best to deliver a 'working/playable game' by the end of the deadline. If you're not making progress with Hangman, switch gears to the Psychic game. Contact your TA/Instructor if you're not making progress after 2 hours. We're here to help!

// 5. Substance over style! Submitting a working game matters more that making a broken app that at least looks pretty. We're focusing on game mechanics, not just on the look and feel of your app.
// 6. That said, coding a functional app that also looks pretty would be impressive.

// 7. Always commit your work and back it up with GitHub pushes. You don't want to lose hours of your work because you didn't push it to GitHub every half hour or so.

//    * **Commit often**.

// 8. Turn in anything you have! Even if you don't finish, we still want to see what you were able to accomplish in the time we gave you. This will help us know what concepts we could help you with, as well as what topics we should focus on in the coming lectures.






