//dom outfile
let username = document.getElementById("title");
username.innerText = "Ahsan Nasrulloh";

//counter passenger
let countEl = document.getElementById("count");
let increaseEl = document.getElementById("increase");
let decreaseEl = document.getElementById("decrease");
let saveEL = document.getElementById("save-el");
let previousEl = document.getElementById("previous");

let count = 0

function increase(){
    count += 1;
    countEl.innerText = count;
}

function decrease(){
    if(count > 0){
        count -= 1;
        countEl.innerText = count;
    }
}

function save(){
    let save = " " + count + " - ";
    previousEl.innerText += save;
    countEl.innerText = 0;
    count = 0;
}