let box = document.querySelectorAll(".btn")
let reset = document.querySelector(".reset-btn")
let msgContainer = document.querySelector(".msg-container")
let msg = document.querySelector(".winner")
let newGame = document.querySelector(".new-game")

let turnX = true;
let X = turnX


const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

box.forEach((btn) => {
    btn.addEventListener("click", () => {
        console.log("Button was clicked");
        if(turnX){
            btn.innerText = "X";
            btn.style.color = "red"
            turnX = false;
        }
        else{
            btn.innerText = "O";
            turnX = true;
        }
        btn.disabled = true;
        checkWinner();
    });
})

const checkWinner = () => {
    for(pattern of winPatterns){
            let pos1 = box[pattern[0]].innerText;
            let pos2 = box[pattern[1]].innerText;
            let pos3 = box[pattern[2]].innerText;

            if(pos1 != "" && pos2 != "" && pos3 != ""){
                if(pos1 === pos2 && pos2 === pos3){
                    console.log(pos1,"is winner")
                    winner(pos1);
                }
            }
    }
}

const disable = () => {
    for(button of box){
        button.disabled = true;
    }
}

const winner = (winner) => {
    msg.innerText = `Congratulations! winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disable();
}

const enable = () => {
    for(button of box){
        button.disabled = false;
        button.innerText = ""
    }
}

const resetGame = () => {
    turnX = true;
    msgContainer.classList.add("hide")
    enable();
}
newGame.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame);