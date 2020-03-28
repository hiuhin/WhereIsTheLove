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
        this.changeScore = options.changeScore;
        this.spots = ["top", "bottom", "left", "right"];
        this.heartSpot = this.generateRandomSpot();
        this.otherSpots = 
            this.spots.filter(spot => spot !== this.heartSpot.location)
            .map(spot => new Spot(spot));
        this.gameHeight = 1000;
        this.gameWidth = 1000;
        this.arrowKeysControl = false;
        this.clearSpots = this.clearSpots.bind(this);
    }

    start() {
        console.log("top of start round")
        let board = new Board(this.ctx, this.heartSpot, this.otherSpots);
        board.generate();
        this.arrowKeysControl = true;
        this.playingDisplay();

        setTimeout(this.clearSpots, this.speed);

        document.addEventListener("keydown", event => {
            if (this.arrowKeysControl) {
                this.arrowKeysControl = false;
                this.check(event.code);
            }
        })

        // dom.reset_div.addEventListener("click", () => {
        //     console.log("top of click event")
        //     this.game.restart();
        //     this.clearSpots();
        //     this.arrowKeysControl = false;
        //     dom.reset_div.style.color = "red";
        //     if (audio.sound) audio.reset_sound.play();
        // })
    }

    generateRandomSpot() {
        return new Spot(this.spots[Math.floor(Math.random() * this.spots.length)]);
    }

    clearSpots() {
        this.ctx.clearRect(0, 0, this.gameWidth, this.gameHeight);
        this.arrowKeysControl = false;
    }

    playingDisplay() {
        dom.round_div.style.display = "block";
        dom.round_div.innerText = "Round " + this.roundNum;
        dom.reset_div.style.display = "block";
        dom.plus_span.style.display = "none";
        dom.minus_span.style.display = "none";
        this.arrowKeysControl = true;
    }

    check(code) {
        let keywords = {
            "top": "ArrowUp",
            "bottom": "ArrowDown",
            "left": "ArrowLeft",
            "right": "ArrowRight"
        }

        if (keywords[this.heartSpot.location] === code) {
            this.changeScore(5);
            dom.plus_span.style.display = "block";
            dom.plus_span.classList.add("popup");
            dom.points_div.innerText = this.game.point;
            this.clearSpots();
            if (audio.sound) audio.correct_sound.play();
        } else {
            this.changeScore(-5);
            dom.minus_span.style.display = "block";
            dom.minus_span.classList.add("popup");
            dom.points_div.innerText = this.game.point;
            this.clearSpots();
            if (audio.sound) audio.wrong_sound.play();
        }
    }

}