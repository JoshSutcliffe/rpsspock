console.log("connected");

var playerScore = 0;
var computerScore = 0;
var rockButton = document.getElementById("rock");
var scissorsButton = document.getElementById('scissors');
var paperButton = document.getElementById("paper");
var playerScoreHTML = document.getElementById("player-score");
var computerScoreHTML = document.getElementById("computer-score");
var result = document.getElementById("result");
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
    result.innerHTML = "It's a tie!";
  } else if (computerSelection === "scissors") {
    result.innerHTML = "What a result! Anarchist Android chose " + computerSelection;
    playerScore++
    playerScoreHTML.innerHTML = playerScore;
  } else {
    result.innerHTML = "Anarchist Android wins this time! He chose " + computerSelection;
    computerScore++;
    computerScoreHTML.innerHTML = computerScore;
  };
  computerChoice();
  endGame();
  // after a click, call function to find computer score and decide who won
};

rockButton.addEventListener("click", rockClick);

var scissorsClick = function() {
  if (computerSelection === "rock") {
    result.innerHTML = "Anarchist Android wins this time! He chose " + computerSelection;
    computerScore++;
    computerScoreHTML.innerHTML = computerScore;
  } else if (computerSelection === "scissors") {
    result.innerHTML = "It's a tie!";
  } else {
    result.innerHTML = "What a result! Anarchist Android chose " + computerSelection;
    playerScore++;
    playerScoreHTML.innerHTML = playerScore;
  };
  computerChoice();
  endGame();
};

scissorsButton.addEventListener("click", scissorsClick);

var paperClick = function() {
  if (computerSelection === "rock") {
    result.innerHTML = "What a result! Anarchist Android chose " + computerSelection;
    playerScore++;
    playerScoreHTML.innerHTML = playerScore;
  } else if (computerSelection === "scissors") {
    result.innerHTML = "Anarchist Android wins this time! He chose " + computerSelection;
    computerScore++;
    computerScoreHTML.innerHTML = computerScore;
  } else {
    result.innerHTML = "It's a tie!";
  };
  computerChoice();
  endGame();
};

paperButton.addEventListener("click", paperClick);

var endGame = function() {
  if (playerScore === 2) {
    alert("Congrats! You have won the game! Play again?");
    reset();
  } else if (computerScore == 2) {
    alert("Drats, Anarchist Android has won the game! Play again?");
    reset();
  };
};

var reset = function() {
  playerScore = 0;
  playerScoreHTML.innerHTML = playerScore;
  computerScore = 0;
  computerScoreHTML.innerHTML = computerScore;
  result.innerHTML = "";
};
