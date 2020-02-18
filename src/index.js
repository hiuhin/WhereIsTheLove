import Round from "./round";
import { drawSpade, drawHeart, drawDiamond, drawClub } from "./drawshapes";
import InputHandler from "./input";

let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');
let roundNum;
let heartSpots = [];
let numRounds = 4;
let round;
let arrowKeys = false;
let speed = 300;
let points_div = document.getElementById('points');
let point;
let howtoplay = document.getElementById("howtoplay");
let gameover_span = document.getElementById("gameover");
let gameInSession = false;

const GAME_WIDTH = 1000;
const GAME_HEIGHT = 1000;

const topSpot = {
    x: 152,
    y: 17
}

const rightSpot = {
    x: 239,
    y: 60
}

const bottomSpot = {
    x: 152,
    y: 103
}


const leftSpot = {
    x: 64,
    y: 60
}

const shapeSize = {
    w: 10,
    h: 15
}

const playerSpot = {
    w: 0,
    h: 0

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
        // debugger;
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
        point += 5;
        points_div.innerText = point;
        console.log(`${roundNum}: correct!`);
        round.clearSpots();
        
    } else {
        console.log(`${roundNum}: incorrect!`);
        point -= 5;
        points_div.innerText = point;
        round.clearSpots();
     
    }
}

function gameOver() {
    gameInSession = false;
    gameover_span.style.display = "inline-block";
}



