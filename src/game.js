import * as dom from "./dom-loader.js"; 
import Round from "./round.js";
import * as audio from "./audio";

export default class Game {
    constructor(options) {
        this.ctx = dom.canvas.getContext('2d');
        this.level = options.level;
        this.speed = options.speed;
        this.name = options.name;
        this.toggleGameInSession = options.toggleGameInSession;
        this.numRounds = 10;
        this.roundNum = null;
        this.buffer = 1500;
        this.play = this.play.bind(this);
        this.nextRound = this.nextRound.bind(this);
        this.changeScore = this.changeScore.bind(this);
        this.reset = false;
        this.restart = this.restart.bind(this);
        this.point = 0;
        this.scoreBoardNum = 0;
    }

    play() {  
        this.toggleGameInSession();
        dom.points_div.innerText = this.point;
        if (audio.sound) audio.startgame_sound.play();
        this.roundNum = 0;
        setTimeout(this.nextRound, this.speed + this.buffer);
    }

    nextRound() {
        if (this.reset) {return;}
        if (this.roundNum === this.numRounds) {
            this.gameOver();
            return;
        }
        this.roundNum += 1;
        let round = new Round({
            game: this,
            ctx: this.ctx,
            speed: this.speed,
            roundNum: this.roundNum,
            changeScore: this.changeScore
        })
        round.start();
        setTimeout(this.nextRound, this.speed + this.buffer);
    }


    gameOver() {
        this.toggleGameInSession();
        dom.gameover_span.style.display = "block";
        dom.round_div.style.display = "none"
        dom.minus_span.style.display = "none";
        dom.plus_span.style.display = "none";
        if (audio.sound) audio.gameover_sound.play();
        dom.reset_div.style.display = "none";
        this.appendScoreBoard();
    }

    changeScore(points) {
        return this.point += points;
    }

    appendScoreBoard() {
        this.scoreBoardNum += 1;

        if (this.scoreBoardNum === 9) {
            dom.scorelist_ul.removeChild(scorelist_ul.firstChild);
            this.scoreBoardNum -= 1;
        }

        let div = document.createElement("div");
        div.innerText = this.name + "  |  " + this.point + "pts" + "  |  " + this.level;
        dom.scorelist_ul.appendChild(div);
    }

    restart() {
        this.reset = true;
        this.toggleGameInSession();
        this.round = 0;
        this.point = 0;
        dom.points_div.innerText = this.point;
        dom.round_div.style.display = "none";
        dom.reset_div.style.display = "none";
        dom.howtoplay_div.style.display = "block";
    }
}