//Setup Vars
var score = 0
const maxBalloonSize = 2;
var balloon_size = maxBalloonSize;
const secretNum = randNum(250,375);
var sprites = ["🎈", "💥"];

//DOM Selectors
const sDOM = document.getElementById("6WFmdZ");
const bDOM = document.getElementById("D743El");

function fn() {
    score++;
    updateDOM(score);

    let n = balloon_size >= maxBalloonSize ? balloon_size * 0.75 : maxBalloonSize;
    setTimeout(() => {bDOM.style.transform = `scale(${n})`}, 50);
}

function multiClick(amt) {
    for (let i = 0; i < amt; i++) {
        fn();
    }
}

function randNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function updateDOM(score) {
    sDOM.innerHTML = score;
    bDOM.innerHTML = sprites[0];
    balloon_size += 0.1;
    bDOM.style.transform = `scale(${balloon_size})`;

    if (score >= secretNum) {
        bDOM.innerHTML = sprites[1];
        disableAll();
        document.getElementById("52e0383e").outerHTML = `<button class="playAgain" onclick="window.location.reload()">Play Again?</button>`;
        console.log("you lost!");
    }
}

function setup() {
    console.log(`the secret number is ${secretNum}`);
    score = randNum(150, 300);
    updateDOM(score);

    bDOM.addEventListener("click", fn);
}
setup();

function autoClick(event) {
    //Prevent Refresh
    event.preventDefault();

    let n = document.getElementById("52e0383e").value;
    for (let i = 0; i < n; i++) {
        fn();
    }
    console.log(score);
}

function disableAll() {
    let arr = document.getElementsByClassName("btn");
    for (let i = 0; i < arr.length; i++) {
        arr[i].disabled = true;
    }
}


//Debugging
/*var count = 99;
s();
function s() {
  setTimeout(function() {
    setup();

    count--;

    if (0 < count) {
      s();
    };
  }, 1000);
};*/