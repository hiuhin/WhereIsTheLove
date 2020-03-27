import * as dom from "./dom-loader.js"; 
import Round from "./round.js";
import {toggleGameInSession} from "./index";
import * as audio from "./audio";


export default class Game {
    constructor() {
        this.ctx = dom.canvas.getContext('2d');
        this.level = "medium";
        this.speed = 900;
        this.numRounds = 3;
        this.roundNum = null;
        this.buffer = 1500;
        this.play = this.play.bind(this);
        this.nextRound = this.nextRound.bind(this);
        this.point = 0;
        console.log(this.point);
    }

    play() {  
        if (audio.sound) audio.startgame_sound.play();
        // arrowKeys = false;
        this.roundNum = 0;
        setTimeout(this.nextRound, this.speed + this.buffer);
    }

    nextRound() {

        if (this.roundNum === this.numRounds) {
            this.gameOver();
            // arrowKeys = false;
            return;
        }

        this.roundNum += 1;
        // let round = new Round(this, this.ctx, this.speed, this.roundNum);
        round = new Round({
            game: this,
            ctx: this.ctx,
            speed: this.speed,
            roundNum: this.roundNum
        })
        round.start();
        setTimeout(this.nextRound, this.speed + this.buffer);

        // setTimeout(() => round.clearSpots(), this.speed);
        // setTimeout(() => toggleOff(), this.speed);
    }


    gameOver() {
        toggleGameInSession();
        dom.gameover_span.style.display = "block";
        dom.round_div.style.display = "none"
        if (audio.sound) audio.gameover_sound.play();
        dom.reset_div.style.display = "none";
        addScore();
    }

    changeScore(points) {
        console.log("hiiii" + this.points);
    }


// }
        // dom.round_div.style.display = "block";
        // dom.round_div.innerText = "Round " + roundNum;
        // dom.reset_div.style.display = "block";
        // dom.plus_span.style.display = "none";
        // dom.minus_span.style.display = "none";

        // dom.reset_div.addEventListener("click", () => { 
        //     reset = true; dom.reset_div.style.color = "red"; 
        //     if (sound) dom.reset_sound.play();});

        //     if (reset === true) {
        //         startOver();
        //         return;
        //     }

        //     if (roundNum > numRounds) {
        //         gameOver();
        //         arrowKeys = false;
        //         return;
        //     }

    //         round = new Round(
    //             ctx,
    //             heartSpots, 
    //             shapeSize, 
    //             topSpot, 
    //             rightSpot, 
    //             bottomSpot, 
    //             leftSpot, 
    //             drawHeart,
    //             drawSpade,
    //             drawClub,
    //             drawDiamond,
    //             roundNum,
    //             speed
    //             );


    //             round.flashHeart();
    //             round.flashShapes();
    //             arrowKeys = true;

    //         document.addEventListener("keydown", event => {
    //             switch (event.keyCode) {
    //                 case 37:
    //                     if (arrowKeys) {
    //                         check(round, 3); }
    //                     arrowKeys = false;
    //                     break;
    //                 case 38:
    //                     if (arrowKeys) {
    //                         check(round, 0);
    //                     }
    //                     arrowKeys = false;
    //                     break;
    //                 case 39:
    //                     if (arrowKeys) {
    //                         check(round, 1);
    //                     }
    //                     arrowKeys = false;
    //                     break;
    //                 case 40:
    //                     if (arrowKeys) {
    //                         check(round, 2);
    //                     }
    //                     arrowKeys = false;
    //                     break;
    //             }
    //     });

    //     setTimeout(() => round.clearSpots(), speed);
    //     setTimeout(() => toggleOff(), speed);
    //     setTimeout(nextRound, speed + 1500);  
    // }
    
}