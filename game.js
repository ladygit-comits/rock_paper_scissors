let btnOne = document.getElementById("r-btn");
let btnTwo = document.getElementById("p-btn");
let btnThree = document.getElementById("s-btn");
let result = document.getElementById("output-el");
let endScore = document.getElementById("gameOver")
let endScoreTwo = document.getElementById("end");
let reset = document.getElementById("reset-el");

let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  const text = document.createElement("p")
  const image = document.createElement('img');
  image.alt = 'Computer Choice';
  image.width = 100;
  image.height = 100;

  switch (randomNumber) {
    case 0:
     
      image.src = 'rock.png';
     image.style.position = 'absolute';
     
      image.style.left= '500px'; 
      text.textContent="COMPUTER"
      text.style.fontFamily = "'Press Start 2P', cursive";

 text.style.position = 'absolute';
 text.style.top="40px"
  text.style.left= '610px';
  text.style.fontSize="20px"
      document.getElementById('text').textContent= '' ;
      document.getElementById('text').appendChild(text)
      document.getElementById('computerChoice').textContent = ''; 
      document.getElementById('computerChoice').appendChild(image);
      return "Rock";
    case 1:
      image.src = 'paper.png';
      image.style.position = 'absolute';
     
      image.style.left= '500px'; text.textContent="COMPUTER"
      text.style.fontFamily = "'Press Start 2P', cursive";
      text.style.fontSize="20px"
      text.style.position = 'absolute';
      text.style.top="40px"
       text.style.left= '610px';
           document.getElementById('text').textContent= '' ;
           document.getElementById('text').appendChild(text)

      document.getElementById('computerChoice').textContent = ''; 
      document.getElementById('computerChoice').appendChild(image);
      return "Paper";
    case 2:
      image.src = 'scissors.png';
     image.style.position = 'absolute';
     
      image.style.left= '500px'; 
      text.textContent="COMPUTER"
      text.style.fontFamily = "'Press Start 2P', cursive";
      text.style.fontSize="20px"
 text.style.position = 'absolute';
 text.style.top="40px"
  text.style.left= '610px';
      document.getElementById('text').textContent= '' ;
      document.getElementById('text').appendChild(text)
      document.getElementById('computerChoice').textContent = '';
      document.getElementById('computerChoice').appendChild(image);
      return "Scissors";
    default:
      return "Error";
  }
}

function player(playerSelection, computerSelection) {
  const playerChoice = playerSelection.toLowerCase();
  const computerChoice = computerSelection.toLowerCase();

  if (playerChoice == computerChoice) {
    return "It's a tie! Let's play again.";
  }

  if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
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
    endScore.textContent = `Game Over! ${
      playerScore === 5 ? 'Player' : 'Computer'
    } wins!`;

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

reset.addEventListener("click", function resetGame() {
  playerScore = 0;
  computerScore = 0;
  result.textContent = "";
  endScore.textContent = "";
  endScoreTwo.textContent = "";
  document.getElementById('computerChoice').textContent = ''; 

  btnOne.disabled = false;
  btnTwo.disabled = false;
  btnThree.disabled = false;
  document.getElementById('text').textContent= '' ;
});
