console.log("connected");

var playerScore = 0;
var computerScore = 0;
var rockButton = document.getElementById("rock");
var scissorsButton = document.getElementById('scissors');
var paperButton = document.getElementById("paper");
var playerScoreHTML = document.getElementById("player-score");
var computerScoreHTML = document.getElementById("computer-score");
var random = Math.random();
var computerSelection;

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
    playerScore++
    playerScoreHTML.innerHTML = playerScore;
  } else {
    alert("Anarchist Android wins this time! He chose " + computerSelection);
    computerScore++;
    computerScoreHTML.innerHTML = computerScore;
  };
  computerChoice();
  // after a click, call function to find computer score and decide who won
};

rockButton.addEventListener("click", rockClick);

var scissorsClick = function() {
  if (computerSelection === "rock") {
    alert("Anarchist Android wins this time! He chose " + computerSelection);
    computerScore++;
    computerScoreHTML.innerHTML = computerScore;
  } else if (computerSelection === "scissors") {
    alert("It's a tie!");
  } else {
    alert("What a result! Anarchist Android chose " + computerSelection);
    playerScore++;
    playerScoreHTML.innerHTML = playerScore;
  };
  computerChoice();
};

scissorsButton.addEventListener("click", scissorsClick);

var paperClick = function() {
  if (computerSelection === "rock") {
    alert("What a result! Anarchist Android chose " + computerSelection);
    playerScore++;
    playerScoreHTML.innerHTML = playerScore;
  } else if (computerSelection === "scissors") {
    alert("Anarchist Android wins this time! He chose " + computerSelection);
    computerScore++;
    computerScoreHTML.innerHTML = computerScore;
  } else {
    alert("It's a tie!");
  };
  computerChoice();
}

paperButton.addEventListener("click", paperClick);

var endGame = function() {
  if (playerScore === 2) {
    alert("Congrats! You have won the game! Play again?");
  } else if (computerScore == 2) {
    alert("Drats, Anarchist Android has won this time! Play again?");
  };
};

var reset = function() {

}
