
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

        default:
            humanChoice = "ERROR";
        }
        if (humanChoice) {
            callback(humanChoice);
        }
    });
}


let humanScore = 0, computerScore = 0, rounds = 0;
console.log(humanScore, computerScore, rounds);

const scoreHeaderHuman = document.querySelector('#hooman-score');
const scoreHeaderRobot = document.querySelector('#robot-score');
const roundsHeader = document.querySelector('#round');

function playRound(humanChoice, computerChoice) {
    console.log("Human Choice: " + humanChoice, "Computer Choice: " + computerChoice);
    if (humanChoice == computerChoice) {
        alert("There's no winner for this round, it's a tie...");
    } else if (
        computerChoice === "rock" && humanChoice === "paper" ||
        computerChoice === "scissors" && humanChoice === "rock" ||
        computerChoice === "paper" && humanChoice === "scissors"
    ) {
        humanScore++
        scoreHeaderHuman.textContent = `Humanity Score: ${humanScore}`;
    } else {
        computerScore++;
        scoreHeaderRobot.textContent = `Machines Score: ${computerScore}`;
    }
    rounds ++
    roundsHeader.textContent = `Rounds: ${rounds}`;
}


function playNewGame(choice) {
    const computerSelection = getComputerChoice();
    const humanSelection = choice;
    playRound(humanSelection, computerSelection);
    if (rounds >= 5) {
        if (humanScore > computerScore) {
            alert("Human wins!! Congrats hooman.");
        } else if (computerScore > humanScore) {
            alert("Computer wins!! Congrats to our Machine Overlords.");
        } else {
            alert("It's a tie?!! How could this happen.");
        }
    humanScore = 0;
    scoreHeaderHuman.textContent = `Humanity Score: ${humanScore}`;
    computerScore = 0;
    scoreHeaderRobot.textContent = `Machines Score: ${computerScore}`;
    rounds = 0;
    roundsHeader.textContent = `Rounds: ${rounds}`;
    }

}

getHumanChoice(playNewGame);
