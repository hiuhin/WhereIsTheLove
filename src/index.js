import Game from "./game";
import { drawSpade, drawHeart, drawDiamond, drawClub } from "./drawshapes";


let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');

const GAME_WIDTH = 1000;
const GAME_HEIGHT = 1000;

let heartSpots = [];
for (let i = 0; i < 10; i++) {
    heartSpots.push(Math.floor(Math.random() * 4))
}

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


let game = new Game(GAME_WIDTH, GAME_HEIGHT, ctx, heartSpots, shapeSize, topSpot, rightSpot, bottomSpot, leftSpot, drawHeart);

game.draw();
console.log(game.draw);


