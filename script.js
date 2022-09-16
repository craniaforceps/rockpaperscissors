//testing console: it should appear on the console
console.log('Hi');

//creating an array with all the possible options
const options = ["rock", "paper", "scissors"];

//creating getComputerChoice function (mentioned in the exercise)
function getComputerChoice() {
    //randomize options with Math.random (which selects a random number
    //from 0 to 1) and multiply by 3 (number of options), then use 
    //Mathfloor() to round them below so we have 0, 1 and 2
    const choice = options[Math.floor(Math.random() * 3)];

    //return the choice based on the calculated integer
    return choice;

    //testing choices, a random choice should appear in every refresh
    console.log(choice);
}

//creating playRound function (mentioned in the exercise)
//for this we will need anoother function: checkWinner
function checkWinner(playerSelection, computerSelection) {

    if (playerSelection == computerSelection) {
        //if both options are the same we have a tie
        return "Tie";

    } else if (
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "scissors" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "rock")
        //if player selection wins
    ) {
        return "Player";
    } else {
        //if computer selection wins
        return "Computer";
    }
}

//now we can create the playRound function, creating conditionals 
//that give the various possible
function playRound(playerSelection, computerSelection) {
    const result = checkWinner(playerSelection, computerSelection);
    if (result == "Tie") {
        return "It's a Tie!"
    }
    else if (result == "Player") {
        return `You Win! ${playerSelection} beats ${computerSelection}`
    } else {
        return `You Lose! ${computerSelection} beats ${playerSelection}`
    }
}
//This part is removed because it was part of the exercise, to test
//the outcome

//const playerSelection = "rock";
//const computerSelection = getComputerChoice();
//console.log(playRound(playerSelection, computerSelection));
