
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

function getHumanChoice(callback) {
let humanDecision = document.querySelector('#humanity');
humanDecision.addEventListener("click", (e) => {
    let target = e.target;
    let humanChoice = '';
    switch(target.id) {
        case 'rock':
            humanChoice = "rock";
            break;
        case 'paper':
            humanChoice = "paper";
            break;
        case 'scissors':
            humanChoice = "scissors";
            break;
        }
        if (humanChoice) {
            callback(humanChoice);
        }
    });
}


getHumanChoice();


/*

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
        humanScore++;
    } else {
        console.log("Computer Wins! Great job Robot!")
        computerScore++;
    }
    rounds ++
    console.log("Human Score: " + humanScore, "Computer Score: " + computerScore, "Rounds: " + rounds);
}

function playGame() {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        if (humanSelection !== '') {
        playRound(humanSelection, computerSelection);
    }
    }

    if (humanScore > computerScore) {
        alert("Human wins!! Congrats hooman.");
    } else if (computerScore > humanScore) {
        alert("Computer wins!! Congrats to our Machine Overlords.");
    } else {
        alert("It's a tie?!! How could this happen.");
    }

playGame();

*/