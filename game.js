let btnOne = document.getElementById("r-btn");
let btnTwo = document.getElementById("p-btn");
let btnThree = document.getElementById("s-btn");
let result = document.getElementById("output-el");
let endScore = document.getElementById("gameOver");
let endScoreTwo = document.getElementById("end");
let reset = document.getElementById("reset-el");

let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    const choice = choices[randomIndex];

    const computerDiv = document.getElementById('computerChoice');
    const textDiv = document.getElementById('text');

    // Clear previous content
    computerDiv.textContent = '';
    textDiv.textContent = '';

    // Create and append image
    const image = document.createElement('img');
    image.alt = 'Computer Choice';
    image.src = `${choice.toLowerCase()}.png`;
    image.style.width = "80px";
    image.style.height = "auto";
    computerDiv.appendChild(image);

    // Create and append text
    const text = document.createElement('p');
    text.textContent = "COMPUTER";
    text.style.fontFamily = "'Press Start 2P', cursive";
    text.style.fontSize = "16px";
    text.style.color = "#ffdd00";
    text.style.marginTop = "5px";
    textDiv.appendChild(text);

    return choice;
}

function player(playerSelection, computerSelection) {
    const playerChoice = playerSelection.toLowerCase();
    const computerChoice = computerSelection.toLowerCase();

    if (playerChoice === computerChoice) {
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
    result.textContent = output;

    if (output.includes("win")) {
        playerScore++;
    } else if (output.includes("lose")) {
        computerScore++;
    }

    endScoreTwo.textContent = `Player score: ${playerScore}, Computer score: ${computerScore}`;

    if (playerScore === 5 || computerScore === 5) {
        endScore.textContent = `Game Over! ${playerScore === 5 ? 'Player' : 'Computer'} wins!`;

        btnOne.disabled = true;
        btnTwo.disabled = true;
        btnThree.disabled = true;
    }
}

btnOne.addEventListener("click", () => playRound("rock"));
btnTwo.addEventListener("click", () => playRound("paper"));
btnThree.addEventListener("click", () => playRound("scissors"));

reset.addEventListener("click", () => {
    playerScore = 0;
    computerScore = 0;
    result.textContent = "";
    endScore.textContent = "";
    endScoreTwo.textContent = "";
    document.getElementById('computerChoice').textContent = '';
    document.getElementById('text').textContent = '';

    btnOne.disabled = false;
    btnTwo.disabled = false;
    btnThree.disabled = false;
});
