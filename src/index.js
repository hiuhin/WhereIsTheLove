// import Round from "./round";
// // import InputHandler from "./input";

import * as dom from "./dom-loader.js"
import Game from "./game.js";
import * as audio from "./audio";


let gameInSession = false;
let speed = 900;
let level = "medium";

export function toggleGameInSession() {
    // debugger;
    gameInSession = !gameInSession
    console.log(gameInSession);
}


document.addEventListener("keyup", event => {
    if (!gameInSession && event.code === "Space") {
        let game = new Game();
        toggleGameInSession();
        dom.howtoplay_div.style.display = "none";
        // dom.gameover_span.style.display = "none";
        game.play();
    }
    // debugger;
})

// let roundNum;
// let heartSpots = [];
// let numRounds = 10;
// let round;
// let arrowKeys = false;
// // let speed = 900;
// // let level = "medium";
// let point;
// let reset = false;
// let startgame_sound = new Audio('assets/sounds/startgame.mp3');
// let correct_sound = new Audio('assets/sounds/correct.wav');
// let wrong_sound = new Audio('assets/sounds/wrong2.wav');
// let gameover_sound = new Audio('assets/sounds/gameover.wav');
// let reset_sound = new Audio('assets/sounds/reset.wav');
// let music = new Audio('assets/sounds/BEPmidi.mp3');
// let select_sound = new Audio('assets/sounds/select.wav');
// let submit_sound = new Audio('assets/sounds/submit.wav');
// music.currentTime = 2;
// music.volume = 0.6;
// music.loop = true; 
// let sound = true;
// let name = "Player";
// let scoreNum = 0;


dom.easy_span.addEventListener("click", () => changeLevel("easy"));
dom.medium_span.addEventListener("click", () => changeLevel("medium"));
dom.hard_span.addEventListener("click", () => changeLevel("hard"));
dom.impossible_span.addEventListener("click", () => changeLevel("impossible"));


function changeLevel(lev) {
    if (gameInSession === false) {
        if (audio.sound) audio.select_sound.play();
        switch (lev) {
            case "easy":
                speed = 2000;
                level = "easy";
                resetLevelColors();
                dom.easy_span.style.color = "tomato";
                break;
            case "medium":
                speed = 1000;
                level = "medium";
                resetLevelColors();
                dom.medium_span.style.color = "tomato";
                break;
            case "hard":
                speed = 700;
                level = "hard";
                resetLevelColors();
                dom.hard_span.style.color = "tomato";
                break;
            case "impossible":
                resetLevelColors();
                dom.impossible_span.style.color = "tomato";
                speed = 400;
                level = "impossible";
                break;
        }
    }
}

function resetLevelColors() {
    dom.easy_span.style.color = "black";
    dom.medium_span.style.color = "black";
    dom.hard_span.style.color = "black";
    dom.impossible_span.style.color = "black";
}

// document.addEventListener("keyup", event => {
//     if (event.code === "Space") {
//         if (gameInSession === false) {
//             play();
//             point = 0;
//             dom.points_div.innerText = point;
//             gameInSession = true;
//             dom.howtoplay_div.style.display = "none";
//         }

//         dom.gameover_span.style.display = "none";
//     }
// })


// // function play() {
// //     if (sound) startgame_sound.play();
// //     arrowKeys = false;
// //     roundNum = 0;
// //     heartSpots = [];
// //     for (let i = 0; i < numRounds; i++) {
// //         heartSpots.push(Math.floor(Math.random() * 4));
// //     }
// //     setTimeout(() => nextRound(), 1500);
// // }

// export function nextRound() {
//     roundNum += 1;
//     dom.round_div.style.display = "block";
//     dom.round_div.innerText = "Round " + roundNum;
//     dom.reset_div.style.display = "block";
//     dom.plus_span.style.display = "none";
//     dom.minus_span.style.display = "none";
    
//     dom.reset_div.addEventListener("click", () => { reset = true; dom.reset_div.style.color = "red"; if (sound) dom.reset_sound.play();});

//     if (reset === true) {
//         startOver();
//         return;
//     }

//     if (roundNum > numRounds) {
//         gameOver();
//         arrowKeys = false;
//         return;
//     }

//     round = new Round(
//         ctx,
//         heartSpots, 
//         shapeSize, 
//         topSpot, 
//         rightSpot, 
//         bottomSpot, 
//         leftSpot, 
//         drawHeart,
//         drawSpade,
//         drawClub,
//         drawDiamond,
//         roundNum,
//         speed
//         );

  
//         round.flashHeart();
//         round.flashShapes();
//         arrowKeys = true;

//     document.addEventListener("keydown", event => {
//         switch (event.keyCode) {
//             case 37:
//                 if (arrowKeys) {
//                     check(round, 3); }
//                 arrowKeys = false;
//                 break;
//             case 38:
//                 if (arrowKeys) {
//                     check(round, 0);
//                 }
//                 arrowKeys = false;
//                 break;
//             case 39:
//                 if (arrowKeys) {
//                     check(round, 1);
//                 }
//                 arrowKeys = false;
//                 break;
//             case 40:
//                 if (arrowKeys) {
//                     check(round, 2);
//                 }
//                 arrowKeys = false;
//                 break;
//         }
//     });
//     setTimeout(() => round.clearSpots(), speed);
//     setTimeout(() => toggleOff(), speed);
//     setTimeout(nextRound, speed + 1500);  
// }

// function startOver() {
//     reset = false;
//     round = 0;
//     point = 0;
//     dom.points_div.innerText = point;
//     dom.round_div.style.display = "none";
//     dom.reset_div.style.display = "none";
//     gameInSession = false;
//     dom.howtoplay_div.style.display = "block";
//     dom.reset_div.style.color = "rgb(246, 171, 73)";
// }

// function toggleOff() {
//     arrowKeys = false;
// }

// export function check(round, userChoice) {
//     if (userChoice === round.heartSpots[round.roundNum - 1]) {
//         dom.plus_span.style.display = "block";
//         dom.plus_span.classList.add("popup");
//         point += 5;
//         dom.points_div.innerText = point;
//         round.clearSpots();
//         if (sound) correct_sound.play();
        
//     } else {
//         dom.minus_span.style.display = "block";
//         dom.minus_span.classList.add("popup");
//         point -= 5;
//         dom.points_div.innerText = point;
//         round.clearSpots();
//         if (sound) wrong_sound.play();
//     }
// }

// function gameOver() {
//     gameInSession = false;
//     dom.gameover_span.style.display = "block";
//     dom.round_div.style.display = "none"
//     if (sound) gameover_sound.play();
//     dom.reset_div.style.display = "none";
//     addScore();


    
// }

// function addScore() {
//     scoreNum += 1;

//     if (scoreNum === 9) {
//         dom.scorelist_ul.removeChild(scorelist_ul.firstChild);
//         scoreNum -= 1;
//     }

//     let div = document.createElement("div");
//     div.innerText = name + "  |  " + point + "pts" + "  |  " + level;
//     dom.scorelist_ul.appendChild(div);
// }

// playbutton.addEventListener("click", toggleMusic);

// function toggleMusic() {
//     if (playbutton.classList.value === "play") {
//         playbutton.classList = "pause";
//         music.play();
//     } else {
//         playbutton.classList = "play";
//         music.pause();
//     }
// }

// dom.sounds_div.addEventListener("click", toggleSounds);

// function toggleSounds() {
//     if (dom.sounds_div.classList.value === "sounds") {
//         dom.sounds_div.classList = "mute";
//         sound = false;
//     } else {
//         dom.sounds_div.classList = "sounds";
//         sound = true;
//     }
// }

// dom.name_input.onchange = updateName;

// function updateName() {
//     if (sound) submit_sound.play();
//     name = dom.name_input.value;
//     dom.name_input.style.color = "rgb(240, 102, 38)";
//     dom.name_input.blur();
// }