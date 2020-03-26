import * as dom from "./dom-loader.js"
import Round from "./round.js";

export default class Game {
    constructor(ctx) {
        this.ctx = ctx;
        this.level = "medium";
        this.speed = 900;
        this.numRounds = 10;
        this.roundNum = 0;
        this.buffer = 1500;


    }

    play() {  
        // if (sound) startgame_sound.play();
        // arrowKeys = false;
        // roundNum = 0;
        setTimeout(() => this.nextRound(), this.buffer);
    }

    nextRound() {
        this.roundNum += 1;
        let round = new Round(this.ctx);
        round.start();

        // setTimeout(() => round.clearSpots(), this.speed);
        // setTimeout(() => toggleOff(), this.speed);
        // setTimeout(this.nextRound, this.speed + this.buffer); 
    }
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