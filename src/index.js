import Round from "./round";
import { drawSpade, drawHeart, drawDiamond, drawClub } from "./drawshapes";
import InputHandler from "./input";

let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');
let roundNum;
let heartSpots = [];
let numRounds = 10;
let round;
let arrowKeys = false;
let speed = 900;
let points_div = document.getElementById('points');
let point;
let howtoplay = document.getElementById("howtoplay");
let gameover_span = document.getElementById("gameover");
let gameInSession = false;
let level = "medium";
let easy_span = document.getElementById('easy');
let medium_span = document.getElementById('medium');
let hard_span = document.getElementById('hard');
let impossible_span = document.getElementById('impossible');
let plus_span = document.getElementById('plus');
let minus_span = document.getElementById('minus');
let round_div = document.getElementById('round');

const GAME_WIDTH = 1000;
const GAME_HEIGHT = 1000;

const topSpot = {
    x: 159,
    y: 16
}

const rightSpot = {
    x: 251,
    y: 57
}

const bottomSpot = {
    x: 159,
    y: 99
}


const leftSpot = {
    x: 67,
    y: 57
}

const shapeSize = {
    w: 10,
    h: 15
}

const playerSpot = {
    w: 0,
    h: 0
}


easy_span.addEventListener("click", () => changeLevel("easy"));
medium_span.addEventListener("click", () => changeLevel("medium"));
hard_span.addEventListener("click", () => changeLevel("hard"));
impossible_span.addEventListener("click", () => changeLevel("impossible"));


function changeLevel(level) {
    if (gameInSession === false) {
        switch (level) {
            case "easy":
                speed = 2000;
                resetLevelColors();
                easy_span.style.color = "tomato";
                break;
            case "medium":
                speed = 1000;
                resetLevelColors();
                medium_span.style.color = "tomato";
                break;
            case "hard":
                speed = 700;
                resetLevelColors();
                hard_span.style.color = "tomato";
                break;
            case "impossible":
                speed = 400;
                resetLevelColors();
                impossible_span.style.color = "tomato";
        }
    }
}

function resetLevelColors() {
    easy_span.style.color = "black";
    medium_span.style.color = "black";
    hard_span.style.color = "black";
    impossible_span.style.color = "black";
}

document.addEventListener("keyup", event => {
    if (event.code === "Space") {
        if (gameInSession === false) {
            play();
            point = 0;
            points_div.innerText = point;
            gameInSession = true;
            howtoplay.style.display = "none";
        }

        gameover_span.style.display = "none";
    }
})


function play() {
    arrowKeys = false;
    roundNum = 0;
    heartSpots = [];
    for (let i = 0; i < numRounds; i++) {
        heartSpots.push(Math.floor(Math.random() * 4));
    }
    setTimeout(() => nextRound(), 1500);
}

export function nextRound() {
    roundNum += 1;
    round_div.style.display = "block";
    round_div.innerText = "Round " + roundNum;
    plus_span.style.display = "none";
    minus_span.style.display = "none";
    
    if (roundNum > numRounds) {
        gameOver();
        arrowKeys = false;
        return;
    }

    round = new Round(
        GAME_WIDTH,
        GAME_HEIGHT, 
        ctx,
        heartSpots, 
        shapeSize, 
        topSpot, 
        rightSpot, 
        bottomSpot, 
        leftSpot, 
        drawHeart,
        drawSpade,
        drawClub,
        drawDiamond,
        roundNum,
        speed
        );

  
        round.flashHeart();
        round.flashShapes();
        arrowKeys = true;

    document.addEventListener("keydown", event => {
        switch (event.keyCode) {
            case 37:
                if (arrowKeys) {
                    check(round, 3); }
                arrowKeys = false;
                break;
            case 38:
                if (arrowKeys) {
                    check(round, 0);
                }
                arrowKeys = false;
                break;
            case 39:
                if (arrowKeys) {
                    check(round, 1);
                }
                arrowKeys = false;
                break;
            case 40:
                if (arrowKeys) {
                    check(round, 2);
                }
                arrowKeys = false;
                break;
        }
    });
    setTimeout(() => round.clearSpots(), speed);
    setTimeout(() => toggleOn(), speed);
    setTimeout(nextRound, speed + 1500);  
}

function toggleOn() {
    arrowKeys = false;
}

export function check(round, userChoice) {
    if (userChoice === round.heartSpots[round.roundNum - 1]) {
        plus_span.style.display = "block";
        plus_span.classList.add("popup");
        point += 5;
        points_div.innerText = point;
        round.clearSpots();
        
    } else {
        minus_span.style.display = "block";
        minus_span.classList.add("popup");
        point -= 5;
        points_div.innerText = point;
        round.clearSpots();
    }
}

function gameOver() {
    gameInSession = false;
    gameover_span.style.display = "block";
    round_div.style.display = "none"
}


