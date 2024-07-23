userScore = 0
compScore = 0

user = document.querySelector("#user")
comp = document.querySelector("#comp")
output = document.querySelector("#mssg")

compChoice = ()=>{
    arr = ["rock","paper","scissors"]
    ranIdx = Math.floor(Math.random()*3) // will produce 0, 1 & 2
    compGot = arr[ranIdx]
    return compGot
}

result = ( userChoice ,  compChoice)=>{
    let winner;
    if((userChoice == "rock" && compChoice=="paper") || (userChoice=="paper" && compChoice=="scissors") || (userChoice=="scissors" && compChoice=="rock"))
        winner = "comp";
    else if((userChoice=="rock" && compChoice=="scissors") || (userChoice=="paper" && compChoice=="rock")|| (userChoice=="scissors" && compChoice=="paper") )
        winner = "user"
    else
        winner = "none"
    return winner;

}

const opts = document.querySelectorAll(".choice")
// rock ppr scissors
opts.forEach((opt) => {
    opt.addEventListener("click",()=>{
        let userChoosed = opt.getAttribute("id")
        // generate comp's choice  
        let compChoosed = compChoice();
        //generate result
        winner = result(userChoosed,compChoosed)
        console.log("User:",userChoosed,"  comp: ",compChoosed,"  results are :",winner)
        if(winner=="user"){
            userScore++;
        }
        if(winner=="comp"){
            compScore++;
        }
        comp.innerText = compScore
        user.innerText = userScore
        if(winner == "user"){
            output.innerText = `Comp choosed ${compChoosed}, you won!🥳`
        }
        else if(winner == "comp"){
            output.innerText = `Comp choosed ${compChoosed}, you lost!😓`
        }
        else{
            output.innerText = `Comp also choosed ${compChoosed}. It's a tie. 😃`
        }
    })
});


