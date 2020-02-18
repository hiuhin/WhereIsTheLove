import Round from "./round";
import { drawSpade, drawHeart, drawDiamond, drawClub } from "./drawshapes";
import InputHandler from "./input";

let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');
let roundNum;
let correct;
let heartSpots = [];
let numRounds = 10;
let round;
let on;
let speed = 500;
let points_div = document.getElementById('points');
let point = 0;

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
    on = false;
    roundNum = 0;
    heartSpots = [];
    for (let i = 0; i < numRounds; i++) {
        heartSpots.push(Math.floor(Math.random() * 4));
    }

    console.log(heartSpots);

    setTimeout(() => nextRound(), 1500);
}

export function nextRound() {

    roundNum += 1;
    
    if (roundNum > numRounds) {
        gameOver();
        on = false;
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
        on = true;

    document.addEventListener("keydown", event => {
        // debugger;
        switch (event.keyCode) {
            case 37:
                if (on) {
                    check(round, 3); }
                on = false;
                break;
            case 38:
                if (on) {
                    check(round, 0);
                }
                on = false;
                break;
            case 39:
                if (on) {
                    check(round, 1);
                }
                on = false;
                break;
            case 40:
                if (on) {
                    check(round, 2);
                }
                on = false;
                break;
        }
    });
    setTimeout(() => round.clearSpots(), speed);
    setTimeout(() => toggleOn(), speed);
    setTimeout(nextRound, speed + 1500);  
}

function toggleOn() {
    on = false;
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


