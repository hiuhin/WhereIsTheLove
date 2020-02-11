import Round from "./round";
import { drawSpade, drawHeart, drawDiamond, drawClub } from "./drawshapes";
import InputHandler from "./input";

let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');
let roundNum;
let correct;
let heartSpots = [];
let intervalId;
let clearIntervalId;
let numRounds = 4;
let round;

const GAME_WIDTH = 1000;
const GAME_HEIGHT = 1000;



const topSpot = {
    x: 161,
    y: 15
}

const rightSpot = {
    x: 246,
    y: 57
}

const bottomSpot = {
    x: 161,
    y: 99
}


const leftSpot = {
    x: 76,
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


// let right = document.getElementById("right");
// let blue = document.getElementById("blueheart");
// ctx.drawImage(right, 100, 105, 50, 50);
// ctx.drawImage(blue, 100, 105, 10, 10);
function play() {

    roundNum = 0;
    heartSpots = [];
    for (let i = 0; i < numRounds; i++) {
        heartSpots.push(Math.floor(Math.random() * 4));
    }

    console.log(heartSpots);
    // setTimeout(() => nextRound(), 2000)
    intervalId = setInterval(nextRound, 3500);
}

export function nextRound() {
    // debugger;
    roundNum += 1;
    
    if (roundNum > numRounds) {
        gameOver();
        clearInterval(intervalId);
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
        roundNum
        );

  
    round.flashHeart();
    round.flashShapes();

    document.addEventListener("keydown", event => {
        // debugger;
        switch (event.keyCode) {
            case 37:
                // round.choice = 3;
                check(round, 3);
                break;
            case 38:
                // round.choice = 0;
                check(round, 0);
                break;
            case 39:
                // round.choice = 1;
                check(round, 1);
                break;
            case 40:
                // round.choice = 2;
                check(round, 2);
                break;
        }
    });
    // console.log(round.ctx);
    // round.clearSpots();
    // setTimeout(round.clearSpots, 3000);
}


export function check(round, userChoice) {
    if (userChoice === round.heartSpots[round.roundNum - 1]) {
        console.log(`${round.roundNum}${roundNum}: correct!`);
        round.clearSpots();
        // nextRound();
        // console.log("next" + roundNum);
    } else {
        console.log(`${round.roundNum}${roundNum}: incorrect!`);
        round.clearSpots();
        // nextRound();
        // console.log("next" + roundNum);
    }
}

function gameOver(ctx) {
    // play();
    console.log("gameover!")
    // ctx.rect(0,0, this.GAME_WIDTH, this.GAME_HEIGHT);
    // ctx.fillStyle = "rgba(0,0,0,0.5";
    // ctx.fill();

    // ctx.font = "30px Arial";
    // ctx.fillStyle = "white";
    // ctx.textAlign = "center";
    // ctx.fillText("Game Over", this.GAME_WIDTH/2, this.GAME_HEIGHT/2);
}

play();


