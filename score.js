let Uscore=0;
let Cscore = 0;

const choices = document.querySelectorAll(".choice"); 
const msg = document.querySelector("#msg");
const Userscore = document.querySelector("#uscore");
const Compscore = document.querySelector("#cscore");

const compchoice = ()=>{
    const options = ["rock","paper","scissors"];
    const randomIndex = Math.floor(Math.random() *3);
    return options[randomIndex];
};
const gamedraw = () =>{
    msg.innerText = "Draw!";
    msg.style.backgroundColor = "#11111";
};
const ShowWinner = (userWin,userchoice,compchoices)=>{
    if(userWin === true){
        Uscore ++;
        Userscore.innerText = Uscore;
        msg.innerText = `You Win! Your ${userchoice} beats ${compchoices}`;
        msg.style.backgroundColor = "#134352";
    }else{
        Cscore ++;
        Compscore.innerText = Cscore;
        msg.innerText = `You Lose! ${compchoices} beats ${userchoice}`;
        msg.style.backgroundColor = "rgba(33, 155, 139, 0.63)";
    }
};
const playgame =(userchoice)=> {
    const compchoices = compchoice();
    if(userchoice === compchoices){
        gamedraw();
    }
    else{
        let userWin = true;
        if(userchoice ==="rock"){
            userWin = compchoices === "paper" ? false : true ;
        }else if(userchoice ==="paper"){
            userWin = compchoices === "scissor" ? false : true ;
        }else(userchoice ==="scissor")
        {
            userWin = compchoices === "rock" ? false : true ;
        }
        
        ShowWinner(userWin,userchoice,compchoices);
    }
}


choices.forEach( (choice) => {
    choice.addEventListener("click", ()=>{
        const userchoice = choice.getAttribute("Id");
        playgame(userchoice)
    });
});