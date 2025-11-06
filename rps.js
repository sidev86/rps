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

function playRound(humanChoice, cpuChoice) {
  if (humanWins(humanChoice, cpuChoice)) {
    alert(
      `You chose: ${humanChoice.toUpperCase()}\nComputer chose: ${cpuChoice.toUpperCase()}\nYou win!`
    );
    return "player";
  } else if (cpuWins(humanChoice, cpuChoice)) {
    alert(
      `You chose: ${humanChoice.toUpperCase()}\nComputer chose: ${cpuChoice.toUpperCase()}\nYou lose!`
    );
    return "cpu";
  } else {
    alert(
      `You chose: ${humanChoice.toUpperCase()}\nComputer chose: ${cpuChoice.toUpperCase()}\nDraw!`
    );
    return "nowinner";
  }
}

function checkGameWinner(playerScore, cpuScore) {
  if (playerScore > cpuScore) {
    console.log("PLAYER WIN THE GAME! :)");
  } else {
    console.log("COMPUTER WIN THE GAME! :(");
  }
}

function inputIsValid(text) {
  return text == "rock" || text == "paper" || text == "scissor";
}

function game() {
  let round = 1;
  let playerScore = 0;
  let cpuScore = 0;

  while (round <= 5) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    if (inputIsValid(humanSelection)) {
      console.clear();
      let winner = playRound(humanSelection, computerSelection);
      if (winner == "cpu") {
        cpuScore++;
        round++;
      } else if (winner == "player") {
        playerScore++;
        round++;
      }
      console.log(`Player Score: ${playerScore}`);
      console.log(`Computer Score: ${cpuScore}`);
    } else {
      alert("Invalid input!");
    }
  }

  checkGameWinner(playerScore, cpuScore);
}

game();
