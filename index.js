
let you = 0;
let comp = 0;
let choices = document.querySelectorAll(".game1");

choices.forEach((game1) => {
    game1.addEventListener("click", () => {
        let userchoice = game1.getAttribute("id");
        playgame(userchoice);
    })
})

let playgame = (userchoice) => {
    let compchoice = compselect();
    if (userchoice === compchoice) {
        document.getElementById("msg").innerText = "draw!!";
    }
    else if (userchoice === "paper" && compchoice === "rock") {
        document.getElementById("msg").innerText = "You Win!!";
        you++;
        document.getElementById("you").innerText = you;

    }
    else if (userchoice === "paper" && compchoice === "scissors") {
        document.getElementById("msg").innerText = "You Lose!!";
        comp++;
        document.getElementById("comp").innerText = comp;
    }
    else if (userchoice === "rock" && compchoice === "paper") {
        document.getElementById("msg").innerText = "You Lose!!";
        comp++;
        document.getElementById("comp").innerText = comp;
    }
    else if (userchoice === "rock" && compchoice === "scissors") {
        document.getElementById("msg").innerText = "You Win!!";
        you++;
        document.getElementById("you").innerText = you;
    }
    else if (userchoice === "scissors" && compchoice === "paper") {
        document.getElementById("msg").innerText = "You Win!!";
        you++;
        document.getElementById("you").innerText = you;
    }
    else if (userchoice === "scissors" && compchoice === "rock") {
        document.getElementById("msg").innerText = "You Lose!!";
        comp++;
        document.getElementById("comp").innerText = comp;
    }
}

let compselect = () => {
    let options = ["rock", "paper", "scissors"];
    let random = Math.floor(Math.random() * 3);
    return options[random];
}
 function reset(){
    you=0;
    comp=0;
    document.getElementById("msg").innerText="Choose your move!!";
    document.getElementById("you").innerText ="0";
    document.getElementById("comp").innerText ="0";

 }