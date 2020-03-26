import * as dom from "./dom-loader.js"
import Round from "./round.js";

export default class Game {
    constructor() {
        this.heartSpots = [];
        this.level = "medium";
        this.speed = 900;
        this.numRounds = 10;
        this.roundNum = 0;


    }

    play() {  
        // if (sound) startgame_sound.play();
        // arrowKeys = false;
        // roundNum = 0;
        this.generateHeartSpots();
        setTimeout(() => this.nextRound(), 1500);
    }

    generateHeartSpots() {
        for (let i = 0; i < this.numRounds; i++) {
            this.heartSpots.push(Math.floor(Math.random() * 4));
        }
    }

    nextRound() {
        roundNum += 1;
        round = new Round(this.heartSpots);
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