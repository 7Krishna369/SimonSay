let gameSeq = [];
let userSeq = [];

let btns = ["blue", "green", "orange", "red"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function(){
    if(started == false) {
        console.log("Game Started");
        started = true;

        levelUp();
    }
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    },250);
}

function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function () {
        btn.classList.remove("userFlash");
    },250);
}

function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() * 4);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor)
    console.log(gameSeq);
    //random btn choose
    gameFlash(randBtn);
}

function check(idx){
    // console.log("current level ", level);

if(userSeq[idx] === gameSeq[idx]){
    if(userSeq.length == gameSeq.length){
        setTimeout(levelUp,1000);
    }
}else{
    h2.innerHTML = `Game Over! Your score is <b>${level}</b> <br> Press any key to Restart`;
    reset();
}


}

function btnPress(){
    // console.log(this);
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    // console.log(userColor);
    userSeq.push(userColor);

    check(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}

