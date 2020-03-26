/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/dom-loader.js":
/*!***************************!*\
  !*** ./src/dom-loader.js ***!
  \***************************/
/*! exports provided: easy_span, medium_span, hard_span, impossible_span, plus_span, minus_span, round_div, reset_div, points_div, howtoplay_div, gameover_span, playbutton, sounds_div, scorelist_ul, name_input */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easy_span", function() { return easy_span; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "medium_span", function() { return medium_span; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hard_span", function() { return hard_span; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "impossible_span", function() { return impossible_span; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "plus_span", function() { return plus_span; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "minus_span", function() { return minus_span; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "round_div", function() { return round_div; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reset_div", function() { return reset_div; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "points_div", function() { return points_div; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "howtoplay_div", function() { return howtoplay_div; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gameover_span", function() { return gameover_span; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "playbutton", function() { return playbutton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sounds_div", function() { return sounds_div; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scorelist_ul", function() { return scorelist_ul; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name_input", function() { return name_input; });
var easy_span = document.getElementById('easy');
var medium_span = document.getElementById('medium');
var hard_span = document.getElementById('hard');
var impossible_span = document.getElementById('impossible');
var plus_span = document.getElementById('plus');
var minus_span = document.getElementById('minus');
var round_div = document.getElementById('round');
var reset_div = document.getElementById('reset');
var points_div = document.getElementById('points');
var howtoplay_div = document.getElementById("howtoplay");
var gameover_span = document.getElementById("gameover");
var playbutton = document.getElementById("playbutton");
var sounds_div = document.getElementById("sounds");
var scorelist_ul = document.getElementById("scorelist");
var name_input = document.getElementById("name");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Game; });
/* harmony import */ var _dom_loader_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-loader.js */ "./src/dom-loader.js");
/* harmony import */ var _round_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./round.js */ "./src/round.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var Game =
/*#__PURE__*/
function () {
  function Game() {
    _classCallCheck(this, Game);

    this.heartSpots = [];
    this.level = "medium";
    this.speed = 900;
    this.numRounds = 10;
    this.roundNum = 0;
  }

  _createClass(Game, [{
    key: "play",
    value: function play() {
      var _this = this;

      // if (sound) startgame_sound.play();
      // arrowKeys = false;
      // roundNum = 0;
      this.generateHeartSpots();
      setTimeout(function () {
        return _this.nextRound();
      }, 1500);
    }
  }, {
    key: "generateHeartSpots",
    value: function generateHeartSpots() {
      for (var i = 0; i < this.numRounds; i++) {
        this.heartSpots.push(Math.floor(Math.random() * 4));
      }
    }
  }, {
    key: "nextRound",
    value: function nextRound() {
      roundNum += 1;
      round = new _round_js__WEBPACK_IMPORTED_MODULE_1__["default"](this.heartSpots);
    } // dom.round_div.style.display = "block";
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

  }]);

  return Game;
}();



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game.js */ "./src/game.js");
// import Round from "./round";
// // import InputHandler from "./input";
// import * as dom from "./dom-loader.js"
 // let roundNum;
// let heartSpots = [];
// let numRounds = 10;
// let round;
// let arrowKeys = false;
// // let speed = 900;
// // let level = "medium";
// let point;
// let gameInSession = false;
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
// const topSpot = {
//     x: 159,
//     y: 16
// }
// const rightSpot = {
//     x: 251,
//     y: 57
// }
// const bottomSpot = {
//     x: 159,
//     y: 99
// }
// const leftSpot = {
//     x: 67,
//     y: 57
// }
// const shapeSize = {
//     w: 10,
//     h: 15
// }
// dom.easy_span.addEventListener("click", () => changeLevel("easy"));
// dom.medium_span.addEventListener("click", () => changeLevel("medium"));
// dom.hard_span.addEventListener("click", () => changeLevel("hard"));
// dom.impossible_span.addEventListener("click", () => changeLevel("impossible"));
// function changeLevel(lev) {
//     if (gameInSession === false) {
//         if (sound) select_sound.play();
//         switch (lev) {
//             case "easy":
//                 speed = 2000;
//                 level = "easy";
//                 resetLevelColors();
//                 dom.easy_span.style.color = "tomato";
//                 break;
//             case "medium":
//                 speed = 1000;
//                 level = "medium";
//                 resetLevelColors();
//                 dom.medium_span.style.color = "tomato";
//                 break;
//             case "hard":
//                 speed = 700;
//                 level = "hard";
//                 resetLevelColors();
//                 dom.hard_span.style.color = "tomato";
//                 break;
//             case "impossible":
//                 resetLevelColors();
//                 dom.impossible_span.style.color = "tomato";
//                 speed = 400;
//                 level = "impossible";
//                 break;
//         }
//     }
// }
// function resetLevelColors() {
//     dom.easy_span.style.color = "black";
//     dom.medium_span.style.color = "black";
//     dom.hard_span.style.color = "black";
//     dom.impossible_span.style.color = "black";
// }
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

document.addEventListener("keyup", function (event) {
  if (event.code === "Space") {
    var game = new _game_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
    game.play();
  }
}); // // function play() {
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

/***/ }),

/***/ "./src/round.js":
/*!**********************!*\
  !*** ./src/round.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Round; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Round = function Round() {
  _classCallCheck(this, Round);
}; // import InputHandler from "./input";
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




/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map