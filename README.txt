1. Create a new function named getComputerChoice.
Write the code so that getComputerChoice will
randomly return one of the following string values:
 “rock”, “paper” or “scissors”.


2. Create a new function named getHumanChoice.
Write the code so that getHumanChoice will return 
one of the valid choices depending on what 
the user inputs.

3. Create two new variables named 
humanScore and computerScore in the global scope.
    - Initialize vars with the value of 0.


4. Create a new function named playRound.
Define two parameters for playRound:
 humanChoice and computerChoice. 
 Use these two parameters to take the human and 
 computer choices as arguments.
    - Make your function’s humanChoice 
    parameter case-insensitive so that 
    players can input “rock”, “ROCK”, “RocK”, 
    or other variations.

    - Write the code for your playRound 
    function to console.log a string value
     representing the round winner, 
     such as: “You lose! Paper beats Rock”.

     -Increment the humanScore or computerScore
      variable based on the round winner.



 5. Create a new function named playGame.
Move your playRound function and score variables 
so that they’re declared inside of 
the new playGame function Play 5 rounds by calling 
playRound 5 times.


----------------------------------------------------------------------------------------------------

Part 2 ! (Revisiting RPS)

In our UI, the player should be able to play the game by clicking on buttons rather than typing their answer in a prompt.

1. For now, remove the logic that plays exactly five rounds.

2. Create three buttons, one for each selection. Add an event listener to the buttons that call your playRound 
function with the correct playerSelection every time a button is clicked. (you can keep the console.logs for this step)

3.Add a div for displaying results and change all of your console.logs into DOM methods.


4. Display the running score, and announce a winner of the game once one player reaches 5 points.




