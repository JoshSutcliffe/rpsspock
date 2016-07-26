// GLOBAL JS CODE
var playerScore = 0;
var computerScore = 0;
var playerScoreHTML = document.getElementById("player-score");
var computerScoreHTML = document.getElementById("computer-score");
var result = document.getElementById("result");
var newGameBtn = document.getElementById("new-game");
var random = Math.random();
var computerSelection;

// CODE FOR ROCK PAPER SCISSORS
var rockButton = document.getElementById("rock");
var scissorsBtn = document.getElementById('scissors');
var paperBtn = document.getElementById("paper");

var computerChoiceRPS = function() {
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
  computerChoiceRPS();
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
  computerChoiceRPS();
  endGame();
};

scissorsBtn.addEventListener("click", scissorsClick);

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
  computerChoiceRPS();
  endGame();
};

paperBtn.addEventListener("click", paperClick);

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

newGameBtn.addEventListener("click", reset);

// LIZARD SPOCK CODE
var rockBtnLS = document.getElementById("rock-ls");
var scissorsBtnLS = document.getElementById('scissors-ls');
var paperBtnLS = document.getElementById("paper-ls");
var lizardBtnLS = document.getElementById("lizard-ls");
var spockBtnLS = document.getElementById("spock-ls");

var computerChoiceLS = function() {
  // I had to generate another random here as it was only creating a random number once
  random = Math.random();
  if (random < 0.2) {
    computerSelection = "rock";
  } else if (random < 0.4) {
    computerSelection = "scissors";
  } else if (random < 0.6){
    computerSelection = "paper";
  } else if (random < 0.8) {
    computerSelection = "lizrd";
  } else {
    computerSelection = "spock";
  };
};

var rockClickLS = function() {
  if (computerSelection === "rock") {
    result.innerHTML = "It's a tie!";
  } else if (computerSelection === "scissors") {
    result.innerHTML = "What a result! Anarchist Android chose " + computerSelection;
    playerScore++
    playerScoreHTML.innerHTML = playerScore;
  } else if (computerSelection === "paper"){
    result.innerHTML = "Anarchist Android wins this time! He chose " + computerSelection;
    computerScore++;
    computerScoreHTML.innerHTML = computerScore;
  } else if (computerSelection === "lizard") {
    result.innerHTML = "What a result! Anarchist Android chose " + computerSelection;
    playerScore++
    playerScoreHTML.innerHTML = playerScore;
  } else {
    result.innerHTML = "Anarchist Android wins this time! He chose " + computerSelection;
    computerScore++;
    computerScoreHTML.innerHTML = computerScore;
  };
  computerChoiceLS();
  endGame();
};

rockBtnLS.addEventListener("click", rockClickLS);

var paperClickLS = function() {
  if (computerSelection === "rock") {
    result.innerHTML = "What a result! Anarchist Android chose " + computerSelection;
    playerScore++
    playerScoreHTML.innerHTML = playerScore;
  } else if (computerSelection === "scissors") {
    result.innerHTML = "Anarchist Android wins this time! He chose " + computerSelection;
    computerScore++;
    computerScoreHTML.innerHTML = computerScore;
  } else if (computerSelection === "paper"){
    result.innerHTML = "It's a tie!";
  } else if (computerSelection === "lizard") {
    result.innerHTML = "Anarchist Android wins this time! He chose " + computerSelection;
    computerScore++;
    computerScoreHTML.innerHTML = computerScore;
  } else {
    result.innerHTML = "What a result! Anarchist Android chose " + computerSelection;
    playerScore++
    playerScoreHTML.innerHTML = playerScore;
  };
  computerChoiceLS();
  endGame();
};

paperBtnLS.addEventListener("click", paperClickLS);

var paperClickLS = function() {
  if (computerSelection === "rock") {
    result.innerHTML = "What a result! Anarchist Android chose " + computerSelection;
    playerScore++;
    playerScoreHTML.innerHTML = playerScore;
  } else if (computerSelection === "scissors") {
    result.innerHTML = "Anarchist Android wins this time! He chose " + computerSelection;
    computerScore++;
    computerScoreHTML.innerHTML = computerScore;
  } else if(computerSelection === "paper") {
    result.innerHTML = "It's a tie!";
  } else if (computerSelection === "lizard") {
    result.innerHTML = "Anarchist Android wins this time! He chose " + computerSelection;
    computerScore++;
    computerScoreHTML.innerHTML = computerScore;
  } else {
    result.innerHTML = "What a result! Anarchist Android chose " + computerSelection;
    playerScore++;
    playerScoreHTML.innerHTML = playerScore;
  };
  computerChoiceLS();
  endGame();
};

paperBtnLS.addEventListener("click", paperClickLS);

var lizardClickLS = function() {
  if (computerSelection === "rock") {
    result.innerHTML = "Anarchist Android wins this time! He chose " + computerSelection;
    computerScore++;
    computerScoreHTML.innerHTML = computerScore;
  } else if (computerSelection === "scissors") {
    result.innerHTML = "Anarchist Android wins this time! He chose " + computerSelection;
    computerScore++;
    computerScoreHTML.innerHTML = computerScore;
  } else if(computerSelection === "paper") {
    result.innerHTML = "What a result! Anarchist Android chose " + computerSelection;
    playerScore++;
    playerScoreHTML.innerHTML = playerScore;
  } else if (computerSelection === "lizard") {
    result.innerHTML = "It's a tie!";
  } else {
    result.innerHTML = "What a result! Anarchist Android chose " + computerSelection;
    playerScore++;
    playerScoreHTML.innerHTML = playerScore;
  };
  computerChoiceLS();
  endGame();
};

lizardBtnLS.addEventListener("click", lizardClickLS);

var spockClickLS = function() {
  if (computerSelection === "rock") {
    result.innerHTML = "What a result! Anarchist Android chose " + computerSelection;
    playerScore++;
    playerScoreHTML.innerHTML = playerScore;
  } else if (computerSelection === "scissors") {
    result.innerHTML = "What a result! Anarchist Android chose " + computerSelection;
    playerScore++;
    playerScoreHTML.innerHTML = playerScore;
  } else if(computerSelection === "paper") {
    result.innerHTML = "Anarchist Android wins this time! He chose " + computerSelection;
    computerScore++;
    computerScoreHTML.innerHTML = computerScore;
  } else if (computerSelection === "lizard") {
    result.innerHTML = "Anarchist Android wins this time! He chose " + computerSelection;
    computerScore++;
    computerScoreHTML.innerHTML = computerScore;
  } else {
    result.innerHTML = "It's a tie!";
  };
  computerChoiceLS();
  endGame();
};

spockBtnLS.addEventListener("click", spockClickLS);
