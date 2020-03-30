import * as dom from "./dom-loader.js"
import Game from "./game.js";
import * as audio from "./audio";


let gameInSession = false;
let speed = 900;
let level = "medium";
let game;
let name = "Player1";

document.addEventListener("keyup", event => {
    if (!gameInSession && event.code === "Space") {
        game = new Game({
            speed: speed,
            level: level,
            name: name,
            toggleGameInSession: toggleGameInSession
        });
        dom.howtoplay_div.style.display = "none";
        dom.gameover_span.style.display = "none";
        game.play();
    }
})

dom.reset_div.addEventListener("click", () => {
            game.restart();
            if (audio.sound) audio.reset_sound.play();
        })

function toggleGameInSession() {
    gameInSession = !gameInSession;

    if (!gameInSession) {
        dom.name_input.style.display = "block";
        dom.name_output_div.style.display = "none";
    } else {
        dom.name_input.style.display = "none";
        dom.name_output_div.style.display = "block";
        dom.name_output_div.innerText = name;
    }
}

dom.easy_span.addEventListener("click", () => changeLevel("easy"));
dom.medium_span.addEventListener("click", () => changeLevel("medium"));
dom.hard_span.addEventListener("click", () => changeLevel("hard"));
dom.impossible_span.addEventListener("click", () => changeLevel("impossible"));


function changeLevel(lev) {
    if (!gameInSession) {
        if (audio.sound) audio.select_sound.play();
        resetLevelColors();
        switch (lev) {
            case "easy":
                speed = 2000;
                level = "easy";             
                dom.easy_span.style.color = "tomato";
                break;
            case "medium":
                speed = 1000;
                level = "medium";
                dom.medium_span.style.color = "tomato";
                break;
            case "hard":
                speed = 700;
                level = "hard";
                dom.hard_span.style.color = "tomato";
                break;
            case "impossible":
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

dom.playbutton.addEventListener("click", toggleMusic);

function toggleMusic() {
    if (dom.playbutton.classList.value === "play") {
        dom.playbutton.classList = "pause";
        audio.music.play();
    } else {
        dom.playbutton.classList = "play";
        audio.music.pause();
    }
}

dom.sounds_div.addEventListener("click", toggleSounds);

function toggleSounds() {
    if (dom.sounds_div.classList.value === "sounds") {
        dom.sounds_div.classList = "mute";
        audio.toggleSound();
    } else {
        dom.sounds_div.classList = "sounds";
        audio.toggleSound();
    }
}

dom.name_input.onchange = updateName;

function updateName() {
    if (audio.sound) audio.submit_sound.play();
    name = dom.name_input.value;
    if (name === "") name = "Player1";
    dom.name_input.style.color = "rgb(240, 102, 38)";
    dom.name_input.blur();
}