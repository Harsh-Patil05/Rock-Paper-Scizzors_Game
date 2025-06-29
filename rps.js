let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const show=document.querySelector("#result-message");
const msgcolor=document.querySelector(".messagebox");
const usercount=document.querySelector("#user-score");
const computercount=document.querySelector("#computer-score");

const Compchoice=()=>{
    let options=["rock","paper","scizzor"];
    let idx=Math.floor(Math.random()*3);
    return options[idx];
}

const showWinner=(userWin)=>{
    if(userWin===true){
        console.log("you win");
        show.innerText="You won!";
        show.style.backgroundColor="green";
        userScore++;
        usercount.innerText=userScore;
    }
    else{
        console.log("Computer Wins");
        show.innerText="You loose!";
        show.style.backgroundColor="red"; 
        compScore++;
        computercount.innerText=compScore;
    }
}


const playGame=(userChoice)=>{
    console.log(userChoice+"clicked");
    const compchoice=Compchoice();
    console.log(compchoice+"choosed by computer");
    if(compchoice==userChoice)
    {
        draw();
    }
    else{
        let userWin=true;
        if(userChoice==="rock")
        {
            userWin=compchoice ==="paper"? false : true;
        }
        else if(userChoice==="paper")
        {
            userWin=compchoice ==="scizzor"? false : true;
        }
        else{
            userWin=compchoice==="rock"? false: true;
        }
        showWinner(userWin);
    }
}


const draw=()=>{
    console.log("Match is draw");
    show.innerText="Game draw , play again!"
}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice)
    })
})