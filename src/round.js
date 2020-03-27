import Spot from "./spots";
import Board from "./board";
import Game from "./game";
import * as dom from "./dom-loader";
import * as audio from "./audio";


export default class Round {
    constructor(options) {
        this.game = options.game;
        this.ctx = options.ctx;
        this.speed = options.speed;
        this.roundNum = options.roundNum;
        this.spots = ["top", "bottom", "left", "right"];
        this.heartSpot = new Spot(this.spots[Math.floor(Math.random() * this.spots.length)]);
        this.otherSpots = 
            this.spots.filter(spot => spot !== this.heartSpot.location)
            .map(spot => new Spot(spot));
        this.gameHeight = 1000;
        this.gameWidth = 1000;
        this.arrowKeysControl = false;
    }

    start() {
        let board = new Board(this.ctx, this.heartSpot, this.otherSpots);
        dom.round_div.style.display = "block";
        dom.round_div.innerText = "Round " + this.roundNum;
        dom.reset_div.style.display = "block";
        dom.plus_span.style.display = "none";
        dom.minus_span.style.display = "none";
        board.generate();
        this.arrowKeysControl = true;
        this.clearSpots(this.speed);

        document.addEventListener("keydown", event => {
            if (this.arrowKeysControl) {
                this.arrowKeysControl = false;
                this.check(event.code);
            }
        })

        dom.reset_div.addEventListener("click", () => { 
            this.reset(); 
            dom.reset_div.style.color = "red"; 
            if (audio.sound) audio.reset_sound.play(); });
        }

    check(code) {
        let keywords = {
            "top": "ArrowUp", 
            "bottom": "ArrowDown",
            "left": "ArrowLeft",
            "right": "ArrowRight"
        }
        console.log("check" + this.game.point);
        
        if (keywords[this.heartSpot.location] === code) {
            console.log("correctb" + this.point);
            this.point += 5;
            console.log("correcta" + this.point);

            // Game.changeScore(5);
            dom.plus_span.style.display = "block";
            // dom.plus_span.classList.add("popup");
            dom.points_div.innerText = Game.point;
            this.clearSpots();
            if (audio.sound) audio.correct_sound.play();
        } 


        // if (userChoice === round.heartSpots[round.roundNum - 1]) {
        //     dom.plus_span.style.display = "block";
        //     dom.plus_span.classList.add("popup");
        //     point += 5;
        //     dom.points_div.innerText = point;
        //     round.clearSpots();
        //     if (sound) correct_sound.play();

        // } else {
        //     dom.minus_span.style.display = "block";
        //     dom.minus_span.classList.add("popup");
        //     point -= 5;
        //     dom.points_div.innerText = point;
        //     round.clearSpots();
        //     if (sound) wrong_sound.play();
        // }
    }


    clearSpots(speed) {
        setTimeout(() =>
            this.ctx.clearRect(0, 0, this.gameWidth, this.gameHeight), speed
        )
    }

    reset() {
        console.log("reset " + this.game.point);
        this.game.round = 0;
        this.game.point = 100;
        dom.points_div.innerText = this.game.point;
        console.log("reset " + this.game.point);

        dom.round_div.style.display = "none";
        dom.reset_div.style.display = "none";
        // gameInSession = false;
        dom.howtoplay_div.style.display = "block";
        dom.reset_div.style.color = "rgb(246, 171, 73)";
    }

}

// import InputHandler from "./input";

// export default class Round {
//     constructor(
//         ctx,
//         heartSpots,
//         shapeSize,
//         topSpot,
//         rightSpot,
//         bottomSpot,
//         leftSpot,
//         roundNum,
//         speed
//     ) {
//         this.gameHeight = 1000;
//         this.gameWidth = 1000;
//         this.ctx = ctx;
//         this.heartSpots = heartSpots;
//         this.shapeSize = shapeSize;
//         this.spots = [topSpot, rightSpot, bottomSpot, leftSpot];
//         this.colors = [
//             "red",
//             "lawngreen",
//             "crimson",
//             "gold",
//             "orangered"
//         ];
//         this.roundNum = roundNum;
//         this.shuffle = this.shuffle.bind(this);
//         this.choice = null;
//         this.speed = speed;
//     }
        
//         // flashHeart() {
//         //     this.drawHeart(
//         //         this.ctx,
//         //         this.spots[this.heartSpots[this.roundNum-1]].x,
//         //         this.spots[this.heartSpots[this.roundNum-1]].y,
//         //         this.shapeSize.w,
//         //         this.shapeSize.h,
//         //         this.colors[Math.floor(Math.random() * this.colors.length)]
//         //     );
//         // }

//         // flashShapes() {
//         //     let noHeartSpots = this.spots.filter((spot, idx) => idx !== this.heartSpots[this.roundNum-1]);
//         //     let shuffledSpots = this.shuffle(noHeartSpots);

//         //     this.drawSpade(
//         //         this.ctx,
//         //         shuffledSpots[0].x,
//         //         shuffledSpots[0].y,
//         //         this.shapeSize.w,
//         //         this.shapeSize.h,
//         //         this.colors[Math.floor(Math.random() * this.colors.length)],
//         //         );

//         //     this.drawDiamond(
//         //         this.ctx,
//         //         shuffledSpots[1].x,
//         //         shuffledSpots[1].y,
//         //         this.shapeSize.w,
//         //         this.shapeSize.h,
//         //         this.colors[
//         //         Math.floor(Math.random() * this.colors.length)
//         //         ]
//         //     ); 

//         //     this.drawClub(
//         //         this.ctx,
//         //         shuffledSpots[2].x,
//         //         shuffledSpots[2].y,
//         //         this.shapeSize.w,
//         //         this.shapeSize.h,
//         //         this.colors[
//         //         Math.floor(Math.random() * this.colors.length)
//         //         ]
//         //     ); 
//         // }

//         // shuffle(spots) {
//         //     let newPos;
//         //     let temp;
//         //     for (let i = spots.length - 1; i > 0; i--) {
//         //         newPos = Math.floor(Math.random() * (i + 1));
//         //         temp = spots[i];
//         //         spots[i] = spots[newPos];
//         //         spots[newPos] = temp;
//         //     }
//         //     return spots;
//         //  }

//         //  clearSpots() {
//         //     this.ctx.clearRect(0, 0, this.gameWidth, this.gameHeight);
//         //  }

// }