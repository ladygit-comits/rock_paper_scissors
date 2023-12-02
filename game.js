let btnOne = document.getElementById("r-btn")
let btnTwo = document.getElementById("p-btn")
let btnThree = document.getElementById("s-btn")
let result = document.querySelector("div")
let endScore = document.querySelector("p")
let endScoreTwo = document.getElementById("end")


let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {

const randomNumber = Math.floor(Math.random() *3);

  switch (randomNumber) {
      case 0:
       return "Rock";
       break;
      case 1:
       return "Paper";
       break;
      case 2:
       return "Scissors";
       break;
    default:
      return "Error"
  }
}


function player(playerSelection , computerSelection ) {

  const playerChoice = playerSelection.toLowerCase();
  const computerChoice = computerSelection.toLowerCase();


  if (playerChoice== computerChoice) {
    return "It's a tie! Let's play again.";
  }

  if ((playerChoice === "rock" && computerChoice === "scissors") || 
     (playerChoice === "paper" && computerChoice === "rock") ||
     (playerChoice === "scissors" && computerChoice === "paper")

  ) {

    return `You win! ${playerChoice} beats ${computerChoice}`;
    
  } else {
    return `You lose! ${computerChoice} beats ${playerChoice}`;
  }
  
}
 
  
   
function playRound(playerChoice) {
  const computerChoice = getComputerChoice();
  const output = player(playerChoice, computerChoice);
  result.textContent = `${output}`;



  if (output.includes("win")) {
    playerScore++;
  } else if (output.includes("lose")) {
    computerScore++;
  }

  endScoreTwo.textContent = `Player score: ${playerScore}, Computer score: ${computerScore}`;

  if (playerScore === 5 || computerScore === 5) {
    endScore.textContent=`Game Over! ${playerScore === 5 ? 'Player' : 'Computer'} wins!`;
  
    
    
    btnOne.disabled = true;
    btnTwo.disabled = true;
    btnThree.disabled = true;
  }
}

btnOne.addEventListener("click", function () {
  playRound("rock");
});

btnTwo.addEventListener("click", function () {
  playRound("paper");
});

btnThree.addEventListener("click", function () {
  playRound("scissors");
});