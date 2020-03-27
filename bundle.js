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

/***/ "./src/audio.js":
/*!**********************!*\
  !*** ./src/audio.js ***!
  \**********************/
/*! exports provided: startgame_sound, correct_sound, wrong_sound, gameover_sound, reset_sound, music, select_sound, submit_sound, sound, toggleSound */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startgame_sound", function() { return startgame_sound; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "correct_sound", function() { return correct_sound; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrong_sound", function() { return wrong_sound; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gameover_sound", function() { return gameover_sound; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reset_sound", function() { return reset_sound; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "music", function() { return music; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "select_sound", function() { return select_sound; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "submit_sound", function() { return submit_sound; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sound", function() { return sound; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleSound", function() { return toggleSound; });
function _readOnlyError(name) { throw new Error("\"" + name + "\" is read-only"); }

var startgame_sound = new Audio('assets/sounds/startgame.mp3');
var correct_sound = new Audio('assets/sounds/correct.wav');
var wrong_sound = new Audio('assets/sounds/wrong2.wav');
var gameover_sound = new Audio('assets/sounds/gameover.wav');
var reset_sound = new Audio('assets/sounds/reset.wav');
var music = new Audio('assets/sounds/BEPmidi.mp3');
var select_sound = new Audio('assets/sounds/select.wav');
var submit_sound = new Audio('assets/sounds/submit.wav');
var sound = true;
function toggleSound() {
  sound = (_readOnlyError("sound"), !sound);
}
;

/***/ }),

/***/ "./src/board.js":
/*!**********************!*\
  !*** ./src/board.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Board; });
/* harmony import */ var _shapes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shapes */ "./src/shapes.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Board =
/*#__PURE__*/
function () {
  function Board(ctx, heartSpot, otherSpots) {
    _classCallCheck(this, Board);

    this.ctx = ctx;
    this.heartSpot = heartSpot;
    this.otherSpots = otherSpots;
  }

  _createClass(Board, [{
    key: "generate",
    value: function generate() {
      var heart = new _shapes__WEBPACK_IMPORTED_MODULE_0__["default"]("heart");
      var shuffledSpots = this.shuffle(this.otherSpots);
      var otherShapes = ["spade", "diamond", "club"];
      var otherShapesObj = otherShapes.map(function (shape) {
        return new _shapes__WEBPACK_IMPORTED_MODULE_0__["default"](shape);
      });
      heart.draw(this.ctx, this.heartSpot.coordinates.x, this.heartSpot.coordinates.y);

      for (var i = 0; i < shuffledSpots.length; i++) {
        var shape = otherShapesObj[i];
        shape.draw(this.ctx, shuffledSpots[i].coordinates.x, shuffledSpots[i].coordinates.y);
      }
    }
  }, {
    key: "shuffle",
    value: function shuffle(spots) {
      var newPos;
      var temp;

      for (var i = spots.length - 1; i > 0; i--) {
        newPos = Math.floor(Math.random() * (i + 1));
        temp = spots[i];
        spots[i] = spots[newPos];
        spots[newPos] = temp;
      }

      return spots;
    }
  }]);

  return Board;
}();



/***/ }),

/***/ "./src/dom-loader.js":
/*!***************************!*\
  !*** ./src/dom-loader.js ***!
  \***************************/
/*! exports provided: canvas, easy_span, medium_span, hard_span, impossible_span, plus_span, minus_span, round_div, reset_div, points_div, howtoplay_div, gameover_span, playbutton, sounds_div, scorelist_ul, name_input */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canvas", function() { return canvas; });
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
var canvas = document.getElementById('canvas');
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

/***/ "./src/drawshapes.js":
/*!***************************!*\
  !*** ./src/drawshapes.js ***!
  \***************************/
/*! exports provided: drawSpade, drawHeart, drawClub, drawDiamond */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawSpade", function() { return drawSpade; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawHeart", function() { return drawHeart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawClub", function() { return drawClub; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawDiamond", function() { return drawDiamond; });
var drawSpade = function drawSpade(context, x, y, width, height, color) {
  context.save();
  var bottomWidth = width * 0.7;
  var topHeight = height * 0.7;
  var bottomHeight = height * 0.3;
  context.beginPath();
  context.moveTo(x, y); // top left of spade          

  context.bezierCurveTo(x, y + topHeight / 2, // control point 1
  x - width / 2, y + topHeight / 2, // control point 2
  x - width / 2, y + topHeight // end point
  ); // bottom left of spade

  context.bezierCurveTo(x - width / 2, y + topHeight * 1.3, // control point 1
  x, y + topHeight * 1.3, // control point 2
  x, y + topHeight // end point
  ); // bottom right of spade

  context.bezierCurveTo(x, y + topHeight * 1.3, // control point 1
  x + width / 2, y + topHeight * 1.3, // control point 2
  x + width / 2, y + topHeight // end point
  ); // top right of spade

  context.bezierCurveTo(x + width / 2, y + topHeight / 2, // control point 1
  x, y + topHeight / 2, // control point 2
  x, y // end point
  );
  context.closePath();
  context.fillStyle = color;
  context.fill(); // bottom of spade

  context.beginPath();
  context.moveTo(x, y + topHeight);
  context.quadraticCurveTo(x, y + topHeight + bottomHeight, // control point
  x - bottomWidth / 2, y + topHeight + bottomHeight // end point
  );
  context.lineTo(x + bottomWidth / 2, y + topHeight + bottomHeight);
  context.quadraticCurveTo(x, y + topHeight + bottomHeight, // control point
  x, y + topHeight // end point
  );
  context.closePath();
  context.fillStyle = color;
  context.fill();
  context.restore();
};
var drawHeart = function drawHeart(context, x, y, width, height, color) {
  context.save();
  context.beginPath();
  var topCurveHeight = height * 0.3;
  context.moveTo(x, y + topCurveHeight); // top left curve

  context.bezierCurveTo(x, y, x - width / 2, y, x - width / 2, y + topCurveHeight); // bottom left curve

  context.bezierCurveTo(x - width / 2, y + (height + topCurveHeight) / 2, x, y + (height + topCurveHeight) / 2, x, y + height); // bottom right curve

  context.bezierCurveTo(x, y + (height + topCurveHeight) / 2, x + width / 2, y + (height + topCurveHeight) / 2, x + width / 2, y + topCurveHeight); // top right curve

  context.bezierCurveTo(x + width / 2, y, x, y, x, y + topCurveHeight);
  context.closePath();
  context.fillStyle = color;
  context.fill();
  context.restore();
};
var drawClub = function drawClub(context, x, y, width, height, color) {
  context.save();
  var circleRadius = width * 0.3;
  var bottomWidth = width * 0.5;
  var bottomHeight = height * 0.35;
  context.fillStyle = color; // top circle

  context.beginPath();
  context.arc(x, y + circleRadius + height * 0.05, circleRadius, 0, 2 * Math.PI, false);
  context.fill(); // bottom right circle

  context.beginPath();
  context.arc(x + circleRadius, y + height * 0.6, circleRadius, 0, 2 * Math.PI, false);
  context.fillStyle = color;
  context.fill(); // bottom left circle

  context.beginPath();
  context.arc(x - circleRadius, y + height * 0.6, circleRadius, 0, 2 * Math.PI, false);
  context.fillStyle = color;
  context.fill(); // center filler circle

  context.beginPath();
  context.arc(x, y + height * 0.5, circleRadius / 2, 0, 2 * Math.PI, false);
  context.fill(); // bottom of club

  context.moveTo(x, y + height * 0.6);
  context.quadraticCurveTo(x, y + height, x - bottomWidth / 2, y + height);
  context.lineTo(x + bottomWidth / 2, y + height);
  context.quadraticCurveTo(x, y + height, x, y + height * 0.6);
  context.closePath();
  context.fill();
  context.restore();
};
var drawDiamond = function drawDiamond(context, x, y, width, height, color) {
  context.save();
  context.beginPath();
  context.moveTo(x, y); // top left edge

  context.lineTo(x - width / 2, y + height / 2); // bottom left edge

  context.lineTo(x, y + height); // bottom right edge

  context.lineTo(x + width / 2, y + height / 2); // closing the path automatically creates
  // the top right edge

  context.closePath();
  context.fillStyle = color;
  context.fill();
  context.restore();
};

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
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index */ "./src/index.js");
/* harmony import */ var _audio__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./audio */ "./src/audio.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }






var Game =
/*#__PURE__*/
function () {
  function Game() {
    _classCallCheck(this, Game);

    this.ctx = _dom_loader_js__WEBPACK_IMPORTED_MODULE_0__["canvas"].getContext('2d');
    this.level = "medium";
    this.speed = 900;
    this.numRounds = 2;
    this.roundNum = null;
    this.buffer = 1500;
    this.play = this.play.bind(this);
    this.nextRound = this.nextRound.bind(this);
    this.point = 0;
  }

  _createClass(Game, [{
    key: "play",
    value: function play() {
      if (_audio__WEBPACK_IMPORTED_MODULE_3__["sound"]) _audio__WEBPACK_IMPORTED_MODULE_3__["startgame_sound"].play(); // arrowKeys = false;

      this.roundNum = 0;
      setTimeout(this.nextRound, this.speed + this.buffer);
    }
  }, {
    key: "nextRound",
    value: function nextRound() {
      if (this.roundNum === this.numRounds) {
        this.gameOver(); // arrowKeys = false;

        return;
      }

      this.roundNum += 1;
      var round = new _round_js__WEBPACK_IMPORTED_MODULE_1__["default"](this.ctx, this.speed);
      round.start();
      setTimeout(this.nextRound, this.speed + this.buffer); // setTimeout(() => round.clearSpots(), this.speed);
      // setTimeout(() => toggleOff(), this.speed);
    }
  }, {
    key: "gameOver",
    value: function gameOver() {
      Object(_index__WEBPACK_IMPORTED_MODULE_2__["toggleGameInSession"])();
      _dom_loader_js__WEBPACK_IMPORTED_MODULE_0__["gameover_span"].style.display = "block";
      _dom_loader_js__WEBPACK_IMPORTED_MODULE_0__["round_div"].style.display = "none";
      if (_audio__WEBPACK_IMPORTED_MODULE_3__["sound"]) _audio__WEBPACK_IMPORTED_MODULE_3__["gameover_sound"].play();
      _dom_loader_js__WEBPACK_IMPORTED_MODULE_0__["reset_div"].style.display = "none";
      addScore();
    }
  }, {
    key: "changeScore",
    value: function changeScore(points) {
      this.point += points;
    } // }
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

  }]);

  return Game;
}();



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: toggleGameInSession */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleGameInSession", function() { return toggleGameInSession; });
/* harmony import */ var _dom_loader_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-loader.js */ "./src/dom-loader.js");
/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game.js */ "./src/game.js");
/* harmony import */ var _audio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./audio */ "./src/audio.js");
// import Round from "./round";
// // import InputHandler from "./input";



var gameInSession = false;
var speed = 900;
var level = "medium";
function toggleGameInSession() {
  // debugger;
  gameInSession = !gameInSession;
  console.log(gameInSession);
}
document.addEventListener("keyup", function (event) {
  if (!gameInSession && event.code === "Space") {
    var game = new _game_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
    toggleGameInSession();
    _dom_loader_js__WEBPACK_IMPORTED_MODULE_0__["howtoplay_div"].style.display = "none"; // dom.gameover_span.style.display = "none";

    game.play();
  } // debugger;

}); // let roundNum;
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

_dom_loader_js__WEBPACK_IMPORTED_MODULE_0__["easy_span"].addEventListener("click", function () {
  return changeLevel("easy");
});
_dom_loader_js__WEBPACK_IMPORTED_MODULE_0__["medium_span"].addEventListener("click", function () {
  return changeLevel("medium");
});
_dom_loader_js__WEBPACK_IMPORTED_MODULE_0__["hard_span"].addEventListener("click", function () {
  return changeLevel("hard");
});
_dom_loader_js__WEBPACK_IMPORTED_MODULE_0__["impossible_span"].addEventListener("click", function () {
  return changeLevel("impossible");
});

function changeLevel(lev) {
  if (gameInSession === false) {
    if (_audio__WEBPACK_IMPORTED_MODULE_2__["sound"]) _audio__WEBPACK_IMPORTED_MODULE_2__["select_sound"].play();

    switch (lev) {
      case "easy":
        speed = 2000;
        level = "easy";
        resetLevelColors();
        _dom_loader_js__WEBPACK_IMPORTED_MODULE_0__["easy_span"].style.color = "tomato";
        break;

      case "medium":
        speed = 1000;
        level = "medium";
        resetLevelColors();
        _dom_loader_js__WEBPACK_IMPORTED_MODULE_0__["medium_span"].style.color = "tomato";
        break;

      case "hard":
        speed = 700;
        level = "hard";
        resetLevelColors();
        _dom_loader_js__WEBPACK_IMPORTED_MODULE_0__["hard_span"].style.color = "tomato";
        break;

      case "impossible":
        resetLevelColors();
        _dom_loader_js__WEBPACK_IMPORTED_MODULE_0__["impossible_span"].style.color = "tomato";
        speed = 400;
        level = "impossible";
        break;
    }
  }
}

function resetLevelColors() {
  _dom_loader_js__WEBPACK_IMPORTED_MODULE_0__["easy_span"].style.color = "black";
  _dom_loader_js__WEBPACK_IMPORTED_MODULE_0__["medium_span"].style.color = "black";
  _dom_loader_js__WEBPACK_IMPORTED_MODULE_0__["hard_span"].style.color = "black";
  _dom_loader_js__WEBPACK_IMPORTED_MODULE_0__["impossible_span"].style.color = "black";
} // document.addEventListener("keyup", event => {
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
/* harmony import */ var _spots__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./spots */ "./src/spots.js");
/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./board */ "./src/board.js");
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game */ "./src/game.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var Round =
/*#__PURE__*/
function () {
  function Round(ctx, speed) {
    var _this = this;

    _classCallCheck(this, Round);

    this.ctx = ctx;
    this.speed = speed;
    this.spots = ["top", "bottom", "left", "right"];
    this.heartSpot = new _spots__WEBPACK_IMPORTED_MODULE_0__["default"](this.spots[Math.floor(Math.random() * this.spots.length)]);
    this.otherSpots = this.spots.filter(function (spot) {
      return spot !== _this.heartSpot.location;
    }).map(function (spot) {
      return new _spots__WEBPACK_IMPORTED_MODULE_0__["default"](spot);
    });
    this.gameHeight = 1000;
    this.gameWidth = 1000;
  }

  _createClass(Round, [{
    key: "start",
    value: function start() {
      var board = new _board__WEBPACK_IMPORTED_MODULE_1__["default"](this.ctx, this.heartSpot, this.otherSpots);
      board.generate();
      this.clearSpots(this.speed);
    }
  }, {
    key: "clearSpots",
    value: function clearSpots(speed) {
      var _this2 = this;

      setTimeout(function () {
        return _this2.ctx.clearRect(0, 0, _this2.gameWidth, _this2.gameHeight);
      }, speed);
    }
  }]);

  return Round;
}(); // import InputHandler from "./input";
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




/***/ }),

/***/ "./src/shapes.js":
/*!***********************!*\
  !*** ./src/shapes.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Shape; });
/* harmony import */ var _drawshapes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./drawshapes */ "./src/drawshapes.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Shape =
/*#__PURE__*/
function () {
  function Shape(type) {
    _classCallCheck(this, Shape);

    this.type = type;
    this.height = 15;
    this.width = 10;
    this.colors = ["red", "lawngreen", "crimson", "gold", "orangered"];
    this.color = this.colors[Math.floor(Math.random() * this.colors.length)];
  }

  _createClass(Shape, [{
    key: "draw",
    value: function draw(ctx, x, y) {
      switch (this.type) {
        case "heart":
          return this.drawHeart(ctx, x, y);

        case "spade":
          return this.drawSpade(ctx, x, y);

        case "club":
          return this.drawClub(ctx, x, y);

        case "diamond":
          return this.drawDiamond(ctx, x, y);
      }
    }
  }, {
    key: "drawSpade",
    value: function drawSpade(context, x, y) {
      context.save();
      var bottomWidth = this.width * 0.7;
      var topHeight = this.height * 0.7;
      var bottomHeight = this.height * 0.3;
      context.beginPath();
      context.moveTo(x, y); // top left of spade          

      context.bezierCurveTo(x, y + topHeight / 2, // control point 1
      x - this.width / 2, y + topHeight / 2, // control point 2
      x - this.width / 2, y + topHeight // end point
      ); // bottom left of spade

      context.bezierCurveTo(x - this.width / 2, y + topHeight * 1.3, // control point 1
      x, y + topHeight * 1.3, // control point 2
      x, y + topHeight // end point
      ); // bottom right of spade

      context.bezierCurveTo(x, y + topHeight * 1.3, // control point 1
      x + this.width / 2, y + topHeight * 1.3, // control point 2
      x + this.width / 2, y + topHeight // end point
      ); // top right of spade

      context.bezierCurveTo(x + this.width / 2, y + topHeight / 2, // control point 1
      x, y + topHeight / 2, // control point 2
      x, y // end point
      );
      context.closePath();
      context.fillStyle = this.color;
      context.fill(); // bottom of spade

      context.beginPath();
      context.moveTo(x, y + topHeight);
      context.quadraticCurveTo(x, y + topHeight + bottomHeight, // control point
      x - bottomWidth / 2, y + topHeight + bottomHeight // end point
      );
      context.lineTo(x + bottomWidth / 2, y + topHeight + bottomHeight);
      context.quadraticCurveTo(x, y + topHeight + bottomHeight, // control point
      x, y + topHeight // end point
      );
      context.closePath();
      context.fillStyle = this.color;
      context.fill();
      context.restore();
    }
  }, {
    key: "drawHeart",
    value: function drawHeart(context, x, y) {
      context.save();
      context.beginPath();
      var topCurveHeight = this.height * 0.3;
      context.moveTo(x, y + topCurveHeight); // top left curve

      context.bezierCurveTo(x, y, x - this.width / 2, y, x - this.width / 2, y + topCurveHeight); // bottom left curve

      context.bezierCurveTo(x - this.width / 2, y + (this.height + topCurveHeight) / 2, x, y + (this.height + topCurveHeight) / 2, x, y + this.height); // bottom right curve

      context.bezierCurveTo(x, y + (this.height + topCurveHeight) / 2, x + this.width / 2, y + (this.height + topCurveHeight) / 2, x + this.width / 2, y + topCurveHeight); // top right curve

      context.bezierCurveTo(x + this.width / 2, y, x, y, x, y + topCurveHeight);
      context.closePath();
      context.fillStyle = this.color;
      context.fill();
      context.restore();
    }
  }, {
    key: "drawClub",
    value: function drawClub(context, x, y) {
      context.save();
      var circleRadius = this.width * 0.3;
      var bottomWidth = this.width * 0.5;
      var bottomHeight = this.height * 0.35;
      context.fillStyle = this.color; // top circle

      context.beginPath();
      context.arc(x, y + circleRadius + this.height * 0.05, circleRadius, 0, 2 * Math.PI, false);
      context.fill(); // bottom right circle

      context.beginPath();
      context.arc(x + circleRadius, y + this.height * 0.6, circleRadius, 0, 2 * Math.PI, false);
      context.fillStyle = this.color;
      context.fill(); // bottom left circle

      context.beginPath();
      context.arc(x - circleRadius, y + this.height * 0.6, circleRadius, 0, 2 * Math.PI, false);
      context.fillStyle = this.color;
      context.fill(); // center filler circle

      context.beginPath();
      context.arc(x, y + this.height * 0.5, circleRadius / 2, 0, 2 * Math.PI, false);
      context.fill(); // bottom of club

      context.moveTo(x, y + this.height * 0.6);
      context.quadraticCurveTo(x, y + this.height, x - bottomWidth / 2, y + this.height);
      context.lineTo(x + bottomWidth / 2, y + this.height);
      context.quadraticCurveTo(x, y + this.height, x, y + this.height * 0.6);
      context.closePath();
      context.fill();
      context.restore();
    }
  }, {
    key: "drawDiamond",
    value: function drawDiamond(context, x, y) {
      context.save();
      context.beginPath();
      context.moveTo(x, y); // top left edge

      context.lineTo(x - this.width / 2, y + this.height / 2); // bottom left edge

      context.lineTo(x, y + this.height); // bottom right edge

      context.lineTo(x + this.width / 2, y + this.height / 2); // closing the path automatically creates
      // the top right edge

      context.closePath();
      context.fillStyle = this.color;
      context.fill();
      context.restore();
    }
  }]);

  return Shape;
}();



/***/ }),

/***/ "./src/spots.js":
/*!**********************!*\
  !*** ./src/spots.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Spot; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Spot =
/*#__PURE__*/
function () {
  function Spot(location) {
    _classCallCheck(this, Spot);

    this.location = location;
    this.coordinates = this.getCoordinates();
  }

  _createClass(Spot, [{
    key: "getCoordinates",
    value: function getCoordinates() {
      switch (this.location) {
        case "top":
          return {
            x: 159,
            y: 16
          };
          break;

        case "right":
          return {
            x: 251,
            y: 57
          };
          break;

        case "bottom":
          return {
            x: 159,
            y: 99
          };
          break;

        case "left":
          return {
            x: 67,
            y: 57
          };
          break;
      }
    }
  }]);

  return Spot;
}();



/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map