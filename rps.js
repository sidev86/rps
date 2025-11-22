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
  let imgPlayerMove = document.querySelector("#img-player-move");
  imgPlayerMove.src = `./images/${choice}.png`;
}

function showComputerChoice(choice) {
  let imgCpuMove = document.querySelector("#img-cpu-move");
  imgCpuMove.src = `./images/${choice}.png`;
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
      let h1Result = document.querySelector("#h1-result");
      showComputerChoice(cpuChoice);
      let winner = getRoundWinner(playerChoice, cpuChoice);
      if (winner == "cpu") {
        cpuScore++;
        h1Result.textContent = `CPU WIN!`;
      } else if (winner == "player") {
        playerScore++;
        h1Result.textContent = `PLAYER WIN!`;
      } else {
        h1Result.textContent = `DRAW`;
      }
      const h1PlayerScore = document.querySelector("#h1-player-score");
      const h1CpuScore = document.querySelector("#h1-cpu-score");
      h1PlayerScore.textContent = `PLAYER SCORE: ${playerScore}`;
      h1CpuScore.textContent = `COMPUTER SCORE: ${cpuScore}`;
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
