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
    //console.log(choice);
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

//This part is regarding playerChoice and the input by the player
function getPlayerChoice() {
   //valideInput creates a loop
    let validateInput = false;//we define it as "false"
    
    //applying a loop 
    while (validateInput == false){
        //while it is false keep prompting the question
        const choice = prompt("Rock Paper Scissors");
    
        if(choice==null){
            //if null (blank or "cancel" button, I think) keeps
            //the loop going as above
            continue;
        }
        //changes "choice" to lowercase to allow case insensitivity
        const choiceInLower = choice.toLowerCase(); 
        
        if (options.includes(choiceInLower)){
            //here we use "includes" to check if the "choice" (input
            //by the player - converted to lowercase) matches our
            //initial options
            validatedInput = true;
            //if true we end the loop and return the matched choice/option;
            return choiceInLower;
        }
    }
}

//This part is removed because it was part of the exercise, to test
//the outcome

//const playerSelection = "rock";
//const computerSelection = getComputerChoice();
//console.log(playRound(playerSelection, computerSelection));

//The function game is the loop that initiates the various rounds
function game(){
let scorePlayer = 0;
let scoreComputer = 0;


    console.log("Welcome"); //to test the console
    for (let i=0; i<5;i++){
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        if(checkWinner(playerSelection, computerSelection) == Player){
            scorePlayer++
        }
        else if(checkWinner(playerSelection, computerSelection) == Computer){
            scoreComputer++;
    }
    console.log("Game Over")

    if(scorePlayer > scoreComputer){
        console.log("Player was the winner");
    }
    else if (scorePlayer < scoreComputer){
        console.log("Computer was the winner");
    }
    else{
        console.log('It is a tie')
    }
}

game();
