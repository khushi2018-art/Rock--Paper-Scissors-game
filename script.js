let userScore=0;
let comScore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#com-score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
  };
  
  const tieGame=()=>{
    console.log("game was tie");
    msg.innerText="Draw";
  }
  const showWinner=(userWin)=>{
   if(userWin){
    userScore++;
    userScorePara.innerText=userScore;
    console.log("you win!");
    msg.innerText="You Win!";
    msg.style.backgroundcolor="green";
   }
   else{
    comScore++;
    compScorePara.innerText=comScore;
    console.log("you lose!");
    msg.innerText="You lose!";
    msg.style.backgroundcolor="red";
   }
  }
const playGame=((userChoice)=>{
    console.log("user choice=",userChoice);
    const comChoice=genCompChoice();
    console.log("com choice=",comChoice);
    if(userChoice===comChoice){
        tieGame();
    }
    else{
        let userWin = true;
        if (userChoice === "rock") {
          
          userWin = comChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
         
          userWin = comChoice === "scissors" ? false : true;
        } else {
          
          userWin = comChoice === "rock" ? false : true;
        }
        showWinner(userWin);
    }

})
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
      const userChoice = choice.getAttribute("id");
      playGame(userChoice);
    });
  });