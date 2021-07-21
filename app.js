//Rock Paper Scissors 

let tieScore = 0;
let userPoints = 0;
let computerPoints = 0;


//show user choice
function userPlay() {
  let answer = prompt("Rock? Paper? Scissors?", "");
  //makes user choice case insensitive
  let userChoice = answer.toLowerCase();
  
  if (userChoice === "rock" || userChoice === "paper" || userChoice === "scissors"){
      alert(`You choose ${userChoice}`);
      return userChoice;
      
  }else{
      let alertMessage = prompt(`Dude, there are only three options: rock, paper, scissors. Just pick one of them if you want to play`, "");    
      return alertMessage;
  } 
    
}

//show computer choice
function computerPlay() {
  let choice = ["rock", "paper", "scissors"];
  let computerChoice = choice[Math.floor(Math.random() * choice.length)];
  alert(`The computer choose ${computerChoice}`);
  return computerChoice;   
   
}

//Single round
function playRound() {
  const playerSelection = userPlay();
  const computerSelection = computerPlay();
  if(playerSelection === computerSelection) {
      alert (`It's a tie!`);
      return tieScore;
  }else if (
      playerSelection === "rock" && computerSelection === "scissors"
   || playerSelection === "scissors" && computerSelection === "paper"
   || playerSelection === "paper" && computerSelection === "rock"
  ){
      alert(`You win the round! ${playerSelection} beats ${computerSelection}`);
      return userPoints++;
  }else if(
      playerSelection === "scissors" && computerSelection === "rock"
   || playerSelection === "paper" && computerSelection === "scissors" 
   || playerSelection === "rock" && computerSelection === "paper"
  ){
      alert(`You lost the round! ${computerSelection} beats ${playerSelection}`);
      return computerPoints++;
  }else{
      let message = `My bad! I've messed the code`;
      return message; 
  }
}

//Game with 5 rounds using the single round

function game() {
    let roundCount = 5;

    //loop through 5 rounds and alert points after each round
    for(let i = 0; i<= roundCount; i++) {
        let roundResult = playRound();
        alert(`For round ${i} - Human: ${userPoints} points ~ Computer: ${computerPoints} points`);
    }

    //announce game winner at the end of the game
    if(userPoints > computerPoints) {
        return `You win the game! Congrats! Refresh the browser for another game`;
    }else if(computerPoints > userPoints) {
        return `The computer wins the game! Refresh the browser for another game`;
    }else if(userPoints === computerPoints){
        return `It's a tie, baby! Refresh the browser for another game`
    }
}

alert(game());




