const possibleChoice = ["rock", "paper", "scissors"];
const output = document.querySelector(".output");
let playerScore = 0;
let compScore = 0;
const score = document.querySelector(".score");

function playRound() {
  if (playerScore === 5) {
    output.textContent = "Player Wins!";
    return;
  } else if (compScore === 5) {
    output.textContent = "Computer Wins!";
    return;
  }
  playerSelection = this.dataset.id;
  const computerSelection =
    possibleChoice[Math.floor(Math.random() * possibleChoice.length)];
  console.log(playerSelection);

  if (playerSelection === computerSelection) {
    output.textContent = `DRAW`;
  } else if (playerSelection === "rock") {
    if (computerSelection === "scissors") {
      playerScore++;
      score.textContent = `Score: ${playerScore} - ${compScore}`;
      output.textContent = `WIN`;
    } else {
      compScore++;
      score.textContent = `Score: ${playerScore} - ${compScore}`;
      output.textContent = `LOSE`;
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "rock") {
      playerScore++;
      score.textContent = `Score: ${playerScore} - ${compScore}`;
      output.textContent = `WIN`;
    } else {
      compScore++;
      score.textContent = `Score: ${playerScore} - ${compScore}`;
      output.textContent = `LOSE`;
    }
  } else if (playerSelection === "scissors") {
    if (computerSelection === "paper") {
      playerScore++;
      score.textContent = `Score: ${playerScore} - ${compScore}`;
      output.textContent = `WIN`;
    } else {
      compScore++;
      score.textContent = `Score: ${playerScore} - ${compScore}`;
      output.textContent = `LOSE`;
    }
  }
  if (playerScore === 5) {
    output.textContent = "Player Wins!";
  } else if (compScore === 5) {
    output.textContent = "Computer Wins!";
  }
}

function play() {
  btn = document.querySelectorAll(".btn");
  btn.forEach(btn => btn.addEventListener("click", playRound));
}
game = document.querySelector(".game");
game.addEventListener("click", () => location.reload());
play();
