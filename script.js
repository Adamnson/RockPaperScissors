// a function to assign a computer choice 
// depending on a random number generator
function getComputerChoice() {
  let random_number = Math.random();
  let computer_choice = '';
  if (random_number < 0.33) {
    computer_choice = "rock";
  }
  else if (random_number < 0.66) {
    computer_choice = "paper";
  }
  else {
    computer_choice = "scissor";
  }
  
  return computer_choice;
}

// #debug
// console.log(getComputerChoice());

function calcWinner(playerSelection, computerSelection) {
  let player = playerSelection.toUpperCase();
  let comp   = computerSelection.toUpperCase();
  let winFlag = false;
  let repFlag = false;

  console.log("player:", player);
  console.log("computer:", comp);

  if (player === comp) {
    repFlag = true;
  }

  if (!repFlag) {
    if (player === "ROCK") {
      if (comp === "SCISSOR") {
        winFlag = true;
      }
    }
    if (player === "PAPER") {
      if (comp === "ROCK") {
        winFlag = true;
      }
    }
    if (player === "SCISSOR") {
      if (comp === "PAPER") {
        winFlag = true;
      }
    }
  }

  if (!repFlag && winFlag) {
    console.log("Winner!!");
  }
  else if (!repFlag && !winFlag){
    console.log("Oh ho! You lost!");
  }
  else {
    console.log("ROCK....PAPER....SCISSOR.....")
    calcWinner(playerSelection, getComputerChoice());
  }
}

calcWinner('rock', getComputerChoice());