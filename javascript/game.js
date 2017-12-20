$( document ).ready(function() {
    console.log( "ready!" );

    // crystal collector
var crystalCollector = new Object();
crystalCollector.goalNumber = 1;
crystalCollector.wins = 0;
crystalCollector.loses = 0;
crystalCollector.guessedSum = 0;
crystalCollector.crystals = [];
crystalCollector.gameOver;
crystalCollector.img = [
  "assets/images/purplegem.jpeg",
  "assets/images/yellowgem.jpeg",
  "assets/images/redgem.jpeg",
  "assets/images/bluegem.jpeg"
]

  // press start button to begin
  $("#start").on("click", function() {

    // start random number
    crystalCollector.goalNumber = Math.floor(Math.random() * 90) + 30;
    console.log(crystalCollector.goalNumber);

    $("#wins").text("Wins: " + crystalCollector.wins);
    $("#loses").text("Loses: " + crystalCollector.loses);
    $("#goal-number").text("Goal: " + crystalCollector.goalNumber);
    $("#guessed-number").text("Guessed Total: " + crystalCollector.guessedSum);

    // 4 crystals each represents hidden number
    for (let i = 0; i < 4; i++) {
        crystalCollector.crystals[i] = Math.floor(Math.random() * 12) + 1;
        console.log(crystalCollector.crystals[i]);
        var crystalImage = $();
        var crystalButton = $('<button> <img src="' + crystalCollector.img[i] + '"/></button>').on('click', function() {
          // each click on a crystal adds points to guessedSum
          crystalCollector.guessedSum += crystalCollector.crystals[i];
          console.log(crystalCollector.guessedSum);
          $("#guessed-number").text("Guessed Total: " + crystalCollector.guessedSum);
          if ( crystalCollector.guessedSum === crystalCollector.goalNumber ) {
            alert("you win!!");
            crystalCollector.wins++;
            $("#crystals").empty();
            crystalCollector.guessedSum = 0;
          } else if ( crystalCollector.guessedSum > crystalCollector.goalNumber ) {
            alert("you lose!!");
            crystalCollector.loses++;
            $("#crystals").empty();
            crystalCollector.guessedSum = 0;
          }
          $("#wins").text("Wins: " + crystalCollector.wins);
          $("#loses").text("Loses: " + crystalCollector.loses);
        });
      $("#crystals").append(crystalButton);
      }
  });


// try to match the random number exactly
// when guessed sum equals random number the game ends and player gets a win
// if player guesses sum over random number the game ends and player loses.
// new game has a new random number and the four crystals have 4 new random values


});
