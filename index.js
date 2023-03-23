const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const choiceBtns = document.querySelectorAll(".choiceBtn");
let player;
let computer;
let result;

choiceBtns.forEach(button => button.addEventListener('click', () => {

    player = button.textContent;
    computerTurn();
    playerText.textContent = `player: ${player}`;
    computerText.textContent = `computer: ${computer}`;
    resultText.textContent = checkWinner();
}))

function computerTurn(){
    const randNum = Math.floor(math.random() * 3) + 1;

    switch(randNum){
        case 1:
            computer = "ROCK";
            break;
        case 2:
            computer = "PAPER";
            break;
         case 3:
            computer = "SCISSORS";
            break;
    }
}
function checkWinner(){
    if(player == computer){
        return "Draw!"
    }
    else if(computer == "ROCK"){
        return (player == "PAPER") ? " YOU Win!" : "YOU Lose!"
    }
    else if(computer == "PAPER"){
        return (player == "SCISSORS") ? " YOU Win!" : "YOU Lose!"
    }
    else if(computer == "SCISSORS"){
        return (player == "ROCK") ? " YOU Win!" : "YOU Lose!"
    }
}