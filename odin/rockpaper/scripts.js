const playerScore = document.querySelector("#playerScore");
const computerScore = document.querySelector("#computerScore");
const roundsPlayed = document.querySelector("#rounds");

function getComputerChoice() {
    let result = Math.random();
    if (result < 0.33) {
        return "ROCK";
    }
    else if (result >= 0.33 && result < 0.66) {
        return "PAPER";
    }
    else {
        return "SCISSORS";
    }
}

function playRound(humanSelection, computerSelection) {
    if (humanSelection == computerSelection) {
        console.log(`It's a tie! Both have ${humanSelection}.`);
        return 0;
    }
    else if (humanSelection == "ROCK" && computerSelection == "SCISSORS") {
        console.log(`You win! Rock beats Scissors.`)
        return 1;
    }
    else if (humanSelection == "ROCK" && computerSelection == "PAPER") {
        console.log(`You Loose! Paper beats Rock.`)
        return -1;
    }
    else if (humanSelection == "PAPER" && computerSelection == "SCISSORS") {
        console.log(`You Loose! Scissors beats Paper.`)
        return -1;
    }
    else if (humanSelection == "PAPER" && computerSelection == "ROCK") {
        console.log(`You win! Paper beats Rock.`)
        return 1;
    }
    else if (humanSelection == "SCISSORS" && computerSelection == "ROCK") {
        console.log(`You Loose! Rock beats Scissors.`)
        return -1;
    }
    else {
        console.log(`You win! Scissors beats Paper.`)
        return 1;
    }
}

function endGame(){
    const winner = document.querySelector("#winner");
    const playerFinalScore = parseInt(playerScore.textContent);
    const computerFinalScore = parseInt(computerScore.textContent);
    if(playerFinalScore>computerFinalScore){
        winner.textContent = `You Win! ${playerFinalScore} x ${computerFinalScore}`;
    }   
    else if(playerFinalScore<computerFinalScore){
        winner.textContent = `You Loose! ${playerFinalScore} x ${computerFinalScore}`;
    }
    else{
        winner.textContent = `It's a draw! ${playerFinalScore} x ${computerFinalScore}`;
    }

}


const playsMenu = document.querySelector("#plays");
playsMenu.addEventListener("click", e => {

    let result = playRound(e.target.id.toUpperCase(),getComputerChoice());
    console.log(parseInt(playerScore.textContent));
    if(result>0){
        playerScore.textContent = parseInt(playerScore.textContent)+1;
    }
    else if(result<0){
        computerScore.textContent = parseInt(computerScore.textContent)+1;
    }

    let rounds = parseInt(roundsPlayed.textContent)+1;

    roundsPlayed.textContent = rounds;
    if(rounds===5){
        endGame();
    }

}
);
