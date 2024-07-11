
function getComputerChoice() {
    let randomChoice = parseInt(Math.random() * 3);
    if (randomChoice === 0) {
        let computerChoice = "rock";
        return computerChoice;
    } else if (randomChoice == 1) {
        let computerChoice = "paper";
        return computerChoice;
    } else {
        let computerChoice = "scissors";
        return computerChoice;  
    }
}

function getHumanChoice() {
    let answer = prompt("Rock, Paper, or Scissors?");
    console.log(answer);
    let humanChoice = answer.toLowerCase();
    if (!(humanChoice == "rock" || humanChoice == "paper" || humanChoice == "scissors")) {
        alert("Answer is not Rock, Paper, or Scissors! Please try again...");
        return getHumanChoice();
    } else {
        return humanChoice;
    }
}


let humanScore, computerScore = 0;
console.log(humanScore)
console.log(computerScore)


function playRound(humanChoice, computerChoice) {
    console.log(humanChoice, computerChoice);
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);



function playGame(){
    for (i = 1; i <= 5; i++) {
        let x = 3;
    }
}

