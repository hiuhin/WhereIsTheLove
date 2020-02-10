import Round from "./round";
import { drawSpade, drawHeart, drawDiamond, drawClub } from "./drawshapes";
import InputHandler from "./input";

let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');
let roundNum;
let correct;
let gameOver;
let heartSpots = [];
let intervalId;
let numRounds = 3;

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

    roundNum = 1;
    gameOver = false;
    heartSpots = [];
    for (let i = 0; i <= numRounds; i++) {
        heartSpots.push(Math.floor(Math.random() * 4));
    }
    intervalId = setInterval(startRounds, 2000);
}

function startRounds() {
    
    if (roundNum === numRounds) {
        clearInterval(intervalId);
        gameOver = true;
    }
    
    let round = new Round(
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
        
    new InputHandler(round);

    round.flashHeart();
    round.flashShapes();
    
    setTimeout(() => round.clearSpots(), 2000);   
    roundNum++;
}


play();


