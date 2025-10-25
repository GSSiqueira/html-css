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

function getHumanChoice() {
    const answer = prompt(`Type Rock, Paper or Scissors. Your choice:`);
    return answer.toUpperCase();
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

function playGame() {
    let humanSelection;
    let computerSelection;
    let humanScore =0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {

        humanSelection = getHumanChoice()
        computerSelection = getComputerChoice()
        let result = playRound(humanSelection, computerSelection)
        if(result===1){
            humanScore++;
        }
        else if(result===-1){
            computerScore++;
        }
    }

    if(humanScore>computerScore){
        console.log(`You win! ${humanScore}x${computerScore}.`);
    }
    else if(computerScore>humanScore){
        console.log(`You lost! ${humanScore}x${computerScore}.`);
    }
    else{
        console.log(`It's a tie! ${humanScore}x${computerScore}.`)
    }
}
