console.log("connected");

var playerScore = 0;
var computerScore = 0;
var rockButton = document.getElementById("rock");
var scissorsButton = document.getElementById('scissors');
var paperButton = document.getElementById("paper");

var rockClick = function() {
  console.log("clicked on rock");
  // after a click, call function to find computer score and decide who won
}

rockButton.addEventListener("click", rockClick);

var scissorsClick = function() {
  console.log("clicked on scissors");
}

scissorsButton.addEventListener("click", scissorsClick);

var paperClick = function() {
  console.log("clicked on paper");
}

paperButton.addEventListener("click", paperClick);

var outcome = function() {
  // need to find out what the computer guessed here, and check if it wins or not
  // update scores on screen, show an alert to see who won

  // check end game function to see if someone has reached 2/3
}

var endGame = function() {
  // check if someone has reached 2/3, show an alert sating so
  // call clear game function
}

var reset = function() {

}
