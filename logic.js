let winScore = 0;
let loseScore = 0;
let drawScore = 0;

const choices = document.querySelectorAll(".choice"); 
const msg = document.querySelector("#msg");

const win = document.querySelector("#won");
const lose = document.querySelector("#lost");
const draw = document.querySelector("#draw");

const drawGame = () => {
    msg.innerText = "It's a draw. play Again!";
    msg.style.backgroundColor = "#1a2550";
    drawScore++;
    draw.innerText = drawScore;
}

const showWinner = (userWin,userChoice,computerChoice) => {
    if(userWin){
        msg.innerText=`You win !! Yours ${userChoice} beats ${computerChoice}`;
        msg.style.backgroundColor = "green";
        winScore++;
        win.innerText = winScore;
    }else{
        msg.innerText = `You Loose !! ${computerChoice} beats Yours ${userChoice}`;
        msg.style.backgroundColor = "red";
        loseScore++;
        lose.innerText = loseScore;
    }
}

const genComputerChoice = () => {
    const option = ["rock","paper","scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return option[randomIndex];
}

const playGame = (userChoice) => {
    const computerChoice = genComputerChoice();
    if(userChoice === computerChoice){
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = computerChoice === "paper" ? false : true;
        }else if(userChoice === "paper"){
            userWin = computerChoice === "scissors" ? false : true;
        }else{
            userWin = computerChoice === "rock" ? false : true;
        }
        showWinner(userWin,userChoice,computerChoice);
    }
}

choices.forEach((choice) =>{
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("Id");
        playGame(userChoice);
    })
})