var img_player = document.getElementById("user");
var img_computer = document.getElementById("computer");
const SCORE = 5;

const game = document.querySelector('.game');
let playerScore = 0;
let compScore = 0;

// a function to assign a computer choice 
// depending on a random number generator
function getComputerChoice() {
  let random_number = Math.random();
  let computer_choice = '';
  if (random_number < 0.33) {
    computer_choice = "rock";
    img_computer.src="resources/rock.png"
  }
  else if (random_number < 0.66) {
    computer_choice = "paper";
    img_computer.src="resources/paper.png"
  }
  else {
    computer_choice = "scissor";
    img_computer.src="resources/scissors.png"
  }
  
  return computer_choice;
}

function calcWinner(playerSelection, computerSelection) {
  let player = playerSelection.toUpperCase();
  let comp   = computerSelection.toUpperCase();
  let winFlag = false;
  let repFlag = false;
  let message = '';

  if(player==='ROCK'){
    img_player.src = 'resources/rock.png'
  }
  else if (player === 'SCISSOR') {
    img_player.src = 'resources/scissors.png'
  }
  else {
    img_player.src = 'resources/paper.png'
  }

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
    message = " Winner!!";
    playerScore++;
  }
  else if (!repFlag && !winFlag){
    message = " Oh ho! You lost!";
    compScore++;
  }
  else {
    console.log("ROCK....PAPER....SCISSOR.....")
    message += " playing again, make a selection";
  }

  addToHTML(player, comp, message, playerScore, compScore);
  declareResult(playerScore, compScore);
}

function addToHTML(player, comp, message) {
  const tempEle = document.createElement('p');
  let content = '';
  content += "Player's choice : " +  player ;
  content += "</br>";
  content += "Computer's choice :" +  comp;
  content += "</br>";
  content += message;
  content += "</br>";
  content += "Player's score : " + playerScore;
  content += "</br>";
  content += "Computer's score : " + compScore;
  content += "</br>";

  tempEle.innerHTML = content;
  game.appendChild(tempEle);
}

const options = document.querySelector(".options");

options.addEventListener('click', function(event) {
  calcWinner(event.target.id, getComputerChoice());
});

function declareResult(playerScore, compScore) {
  if(playerScore === SCORE || compScore === SCORE) {
    const decision = document.createElement('p');
    let result = '';
    (playerScore === 5) ?
    result = 'Congratulations! You won the game' :
    result = 'Better Luck Next Time';

    decision.innerHTML = result;
    game.appendChild(decision);
    const btns = document.querySelectorAll('button')
    btns.forEach((btn)=> btn.disabled = true);
  }
}