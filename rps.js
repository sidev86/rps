function getComputerChoice() {
  const moves = ["rock", "paper", "scissor"];
  // Get a random index from moves array
  let choice = moves[Math.floor(Math.random() * 3)];
  return choice;
}

function getHumanChoice() {
  let move = prompt("Choose your move - Rock/Paper/Scissor");
  return move.toLowerCase();
}

function humanWins(human, cpu) {
  return (
    (human == "rock" && cpu == "scissor") ||
    (human == "paper" && cpu == "rock") ||
    (human == "scissor" && cpu == "paper")
  );
}

function cpuWins(human, cpu) {
  return (
    (cpu == "rock" && human == "scissor") ||
    (cpu == "paper" && human == "rock") ||
    (cpu == "scissor" && human == "paper")
  );
}

function getRoundWinner(humanChoice, cpuChoice) {
  if (humanWins(humanChoice, cpuChoice)) {
    return "player";
  } else if (cpuWins(humanChoice, cpuChoice)) {
    return "cpu";
  } else {
    return "nowinner";
  }
}

function checkGameWinner(playerScore, cpuScore) {
  const h1Winner = document.querySelector("#h1-winner");
  if (playerScore > cpuScore) {
    h1Winner.textContent = "PLAYER WIN THE GAME! :)";
  } else {
    h1Winner.textContent = "CPU WIN THE GAME! :(";
  }
}

function inputIsValid(text) {
  return text == "rock" || text == "paper" || text == "scissor";
}

function showPlayerChoice(choice) {
  let h1PlayerMove = document.querySelector("#h1-player-choice");
  h1PlayerMove.textContent = `Player chose ${choice}`;
}

function game() {
  let playerScore = 0;
  let cpuScore = 0;

  let playerChoice;
  let cpuChoice;
  //const humanSelection = getHumanChoice();
  const btnRock = document.querySelector("#btn-rock");
  const btnPaper = document.querySelector("#btn-paper");
  const btnScissor = document.querySelector("#btn-scissor");

  btnRock.addEventListener("click", () => {
    playerChoice = "rock";
    showPlayerChoice("rock");
    playRound();
  });
  btnPaper.addEventListener("click", () => {
    playerChoice = "paper";
    showPlayerChoice("paper");
    playRound();
  });
  btnScissor.addEventListener("click", () => {
    playerChoice = "scissor";
    showPlayerChoice("scissor");
    playRound();
  });

  function playRound() {
    cpuChoice = getComputerChoice();
    if (inputIsValid(playerChoice)) {
      let h1CpuMove = document.querySelector("#h1-cpu-choice");
      let h1Result = document.querySelector("#h1-result");
      h1CpuMove.textContent = `Computer chose ${cpuChoice}`;
      let winner = getRoundWinner(playerChoice, cpuChoice);
      if (winner == "cpu") {
        cpuScore++;
        h1Result.textContent = `${cpuChoice.toUpperCase()} beats ${playerChoice.toUpperCase()}. CPU wins!`;
      } else if (winner == "player") {
        playerScore++;
        h1Result.textContent = `${playerChoice.toUpperCase()} beats ${cpuChoice.toUpperCase()}. Player wins!`;
      } else {
        h1Result.textContent = `Draw!`;
      }
      const h1PlayerScore = document.querySelector("#h1-player-score");
      const h1CpuScore = document.querySelector("#h1-cpu-score");
      h1PlayerScore.textContent = `Player Score: ${playerScore}`;
      h1CpuScore.textContent = `Computer Score: ${cpuScore}`;
    }
    if (playerScore + cpuScore == 5) {
      checkGameWinner(playerScore, cpuScore);
      btnRock.disabled = true;
      btnPaper.disabled = true;
      btnScissor.disabled = true;
    }
  }
}

game();
