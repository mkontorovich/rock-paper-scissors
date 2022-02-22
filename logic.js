let computerScore = 0;
let playerScore = 0;

function game() {
    function playRound() {
        for (let i = 0; i < 5; i++) {
            singleGame(playerChoice(), computerChoice());
        }
    
        console.log("Final Score:");
        console.log("Player: " + playerScore);
        console.log("Computer: " + computerScore);
    
        if (playerScore === computerScore) {
            console.log("TIE!");
        } else if (playerScore > computerScore) {
            console.log("You Win!");
        } else {
            console.log("You Lose!");
        }
    }

    playRound();
}

game();

function computerChoice() {
    // randomly return 'Rock', 'Paper', or 'Scissors'
    let computerPick = '';
    let rand = Math.random();
    if (rand >= 0 && rand < (1/3)) {
        computerPick = 'Rock';
    } else if (rand >= (1/3) && rand < (2/3)) {
        computerPick = 'Paper';
    } else {
        computerPick = 'Scissors';
    }

    return computerPick;
}

function playerChoice() {
    let choice = window.prompt("Enter 'Rock', 'Paper', or 'Scissors': ");
    choice = choice.toLowerCase();
    choice = choice.charAt(0).toUpperCase() + choice.slice(1);

    if (choice == 'Rock' || choice == 'Paper' || choice == 'Scissors') {
        return choice;
    } else {
        return 'Error';
    }
}

function singleGame(playerSelection, computerSelection) {
    if (playerSelection == 'Rock') {
        if (computerSelection == 'Rock') {
            playerScore += 1;
            computerScore += 1;
            return "Tie!";
        } else if (computerSelection == 'Paper') {
            computerScore += 1;
            return "You Lose! Paper beats Rock";
        } else {
            playerScore += 1;
            return "You Win! Rock beats Scissors";
        }
    }
    if (playerSelection == 'Paper') {
        if (computerSelection == 'Rock') {
            playerScore += 1;
            return "You Win! Paper beats Rock";
        } else if (computerSelection == 'Paper') {
            playerScore += 1;
            computerScore += 1;
            return "Tie!";
        } else {
            computerScore += 1;
            return "You Lose! Scissors beats Paper";
        }
    }
    if (playerSelection == 'Scissors') {
        if (computerSelection == 'Rock') {
            computerScore += 1;
            return "You Lose! Rock beats Scissors";
        } else if (computerSelection == 'Paper') {
            playerScore += 1;
            return "You Win! Scissors beats Paper";
        } else {
            playerScore += 1;
            computerScore += 1;
            return "Tie!";
        }
    }
}
