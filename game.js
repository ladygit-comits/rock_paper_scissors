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
console.log(getComputerChoice)


console.log(getComputerChoice())