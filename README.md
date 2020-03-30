# Where is the Love? <3

A quick-reaction game based on Super Mario Party minigame "Looking for Love". Upon starting the game, the four shapes representing the suits of playing card appears randomly on the top, bottom, left, and right spots. Player uses the arrow keys to select the location of the heart before the shapes disappear. Each game has 10 rounds.

[Click Here to Play!](https://hiuhin.github.io/WhereIsTheLove/)

![game](assets/gifs/game.gif)

### Technologies
* Javascript
* Canvas
* HTML5
* CSS3

### Features

![level](assets/gifs/levels.gif)

#### Levels
Player can choose from 4 levels. Each level differs in the amount of time the shapes appear on screen, ranging from 2 seconds (easy) to 400 milliseconds (impossible). SetTimeout is used to control how long the shapes are displayed and how long the event listeners for arrowkeys are active.

```
    start() {
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
    }

    clearSpots() {
        this.ctx.clearRect(0, 0, this.gameWidth, this.gameHeight);
        this.arrowKeysControl = false;
    }

```


#### Scoring
Answering correctly and quick enough earns the player 5 points. Incorrect answers results in negative 5 points. Not answering or delayed responses do not affect score.

#### Score Board 
After each game, player's name (optional), score, and level is recorded under the score board. A maximum of 9 records are displayed. If there are any more than 9 records, the oldest one is removed using Node.removeChild().

``` 
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
```

#### Sound Effects and Music

Player can toggle on and off sound effects and background music. By default, sound effects are on and background music off.

### Future Plans

* Include AI players.