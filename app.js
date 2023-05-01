const possibleChoice = ["rock", "paper", "scissors"];

function getComputerChoice() {
  return possibleChoice[Math.floor(Math.random() * possibleChoice.length)];
}

function playRound(playerSelection, computerSelection) {
  if (!possibleChoice.includes(playerSelection)) {
    return "Wrong choice";
  }
  if (playerSelection === computerSelection) {
    return "Draw!";
  } else if (playerSelection === "rock") {
    if (computerSelection === "scissors") {
      return "You win!";
    } else {
      return "You lost";
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "rock") {
      return "You win!";
    } else {
      return "You lost";
    }
  } else if (playerSelection === "scissors") {
    if (computerSelection === "paper") {
      return "You win!";
    } else {
      return "You lost";
    }
  }
}

function game() {
  let playerScore = 0;
  let computerScore = 0;
  for (let i = 0; i < 5; i++) {
    playerSelection = prompt("Choose your weapon").toLowerCase();
    computerSelection = getComputerChoice();
    let result = playRound(playerSelection, computerSelection);
    console.log(result);
    if (result === "You win!") {
      playerScore++;
    } else {
      computerScore++;
    }
  }
  if (playerScore > computerScore) {
    console.log(`User win! ${playerScore} - ${computerScore}`);
  } else {
    console.log(`Computer win! ${playerScore} - ${computerScore}`);
  }
}
game();
