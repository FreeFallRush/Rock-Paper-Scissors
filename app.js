let buttons = document.querySelectorAll('.btn');
let roundCount = 0;
let userPoints = 0;
let computerPoints = 0;

//computer choice
function computerPlay() {
    let choice = ['rock', 'paper', 'scissors'];
    let computerChoice = choice[Math.floor(Math.random() * choice.length)];
    return computerChoice;
}

//one RPS round 
function playRound(playerSelection) {
    let computerSelection = computerPlay();
    let result = "";

    if(playerSelection === computerSelection) {
        result = (`Your choice:  ${playerSelection}. <br/>
                   Computer's choice: ${computerSelection}. <br/>
                   It's a tie!`);
        roundCount++;
    } else if (
        playerSelection === "rock" && computerSelection === "scissors"
     || playerSelection === "scissors" && computerSelection === "paper"
     || playerSelection === "paper" && computerSelection === "rock"
     ) {
         result = (`Your choice:  ${playerSelection}. <br/>
                    Computer's choice: ${computerSelection}. <br/>
                    You win the round! ~ ${playerSelection} beats ${computerSelection} ~`);
        roundCount++;
        userPoints++;
     } else if (
        playerSelection === "scissors" && computerSelection === "rock"
     || playerSelection === "paper" && computerSelection === "scissors" 
     || playerSelection === "rock" && computerSelection === "paper"
     ) {
         result = (`Your choice:  ${playerSelection}. <br/> 
                    Computer's choice: ${computerSelection}. <br/>                   
                    You lost the round! ~ ${computerSelection} beats ${playerSelection} ~ `);
        roundCount++;
        computerPoints++;
     } else {
        let message = `My bad! I've messed the code`;
        message;
     }
     document.getElementById('result').innerHTML = result;
     return;
}


//hides the RPS buttons once the 5 round game is over
function hideButtons() {
    document.getElementById("options").style.display = 'none';
}

//shows the reset button once the 5 round game is over
function showResetButton() {
    document.getElementById("reset").style.display = 'block';
}

//shows the winner of the game after 5 rounds
function game() {
    document.getElementById('round').textContent = roundCount;
    document.getElementById('player-score').textContent = userPoints;
    document.getElementById('computer-score').textContent = computerPoints;
    let gameWinner = "";

    if(roundCount === 5 && userPoints > computerPoints) {
        gameWinner = (`You win the game! Congrats!`);
        hideButtons();
        showResetButton(); 
    } else if(roundCount === 5 && computerPoints > userPoints) {
        gameWinner = (`The computer wins the game!`);
        hideButtons();
        showResetButton();   
    } else if (roundCount === 5 && userPoints === computerPoints) {
        gameWinner = (`It's a tie, baby!`);
        hideButtons();
        showResetButton();
    }
    document.getElementById('game-winner').innerHTML = gameWinner;
}

//playerSelector === button.id
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(button.id);
        game();
    });
});
