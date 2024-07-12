
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


let humanScore = 0, computerScore = 0, rounds = 0;
console.log(humanScore, computerScore, rounds);


function playRound(humanChoice, computerChoice) {
    console.log("Human Choice: " + humanChoice, "Computer Choice: " + computerChoice);
    if (humanChoice == computerChoice) {
        console.log("There's no winner, it's a tie!");
    } else if (
        computerChoice === "rock" && humanChoice === "paper" ||
        computerChoice === "scissors" && humanChoice === "rock" ||
        computerChoice === "paper" && humanChoice === "scissors"
    ) {
        console.log("Human wins! Good game!");
        humanScore = humanScore + 1;
        humanScore++;
    } else {
        console.log("Computer Wins! Great job Robot!")
        computerScore++;
    }
    rounds ++
    console.log("Human Score: " + humanScore, "Computer Score: " + computerScore, "Rounds: " + rounds);
}


function playGame() {
    while (rounds < 5) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    if (humanScore > computerScore) {
        console.log("Human wins!! Congrats hooman.");
    } else if (computerScore > humanScore) {
        console.log("Computer wins!! Congrats to our Machine Overlords.");
    } else {
        console.log("It's a tie?!! How could this happen.");
    }

    humanScore = 0;
    computerScore = 0;
    rounds = 0;
}

playGame();