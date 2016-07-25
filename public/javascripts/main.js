console.log("connected");

var playerScore = 0;
var computerScore = 0;
var rockButton = document.getElementById("rock");
var scissorsButton = document.getElementById('scissors');
var paperButton = document.getElementById("paper");
var random = Math.random();
var computerSelection;

// Winning conditions
// < 0.33 = rock
// < 0.67 = scissors
// > 0.67 = paper

var computerChoice = function() {
  // I had to generate another random here as it was only creating a random number once
  random = Math.random();
  if (random < 0.33) {
    computerSelection = "rock";
  } else if (random < 0.67) {
    computerSelection = "scissors";
  } else {
    computerSelection = "paper";
  }
};

computerChoice();

var rockClick = function() {
  if (computerSelection === "rock") {
    alert("It's a tie!");
  } else if (computerSelection === "scissors") {
    alert("What a result! Anarchist Android chose " + computerSelection);
  } else {
    alert("Anarchist Android wins this time! He chose " + computerSelection);
  };
  console.log(random);
  console.log(computerSelection);
  computerChoice();
  // after a click, call function to find computer score and decide who won
};

rockButton.addEventListener("click", rockClick);

var scissorsClick = function() {
  if (computerSelection === "rock") {
    alert("Anarchist Android wins this time! He chose " + computerSelection);
  } else if (computerSelection === "scissors") {
    alert("It's a tie!");
  } else {
    alert("What a result! Anarchist Android chose " + computerSelection);
  };
  console.log(random);
  console.log(computerSelection);
  computerChoice();
};

scissorsButton.addEventListener("click", scissorsClick);

var paperClick = function() {
  if (computerSelection === "rock") {
    alert("What a result! Anarchist Android chose " + computerSelection);
  } else if (computerSelection === "scissors") {
    alert("Anarchist Android wins this time! He chose " + computerSelection);
  } else {
    alert("It's a tie!");
  };
  console.log(random);
  console.log(computerSelection);
  computerChoice();
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
