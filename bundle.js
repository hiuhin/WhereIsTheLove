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
var startgame_sound = new Audio('assets/sounds/startgame.mp3');
var correct_sound = new Audio('assets/sounds/correct.wav');
var wrong_sound = new Audio('assets/sounds/wrong2.wav');
var gameover_sound = new Audio('assets/sounds/gameover.wav');
var reset_sound = new Audio('assets/sounds/reset.wav');
var music = new Audio('assets/sounds/BEPmidi.mp3');
music.currentTime = 2;
music.volume = 0.6;
music.loop = true;
var select_sound = new Audio('assets/sounds/select.wav');
var submit_sound = new Audio('assets/sounds/submit.wav');
var sound = true;
function toggleSound() {
  sound = !sound;
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



var Board = /*#__PURE__*/function () {
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
/*! exports provided: canvas, easy_span, medium_span, hard_span, impossible_span, plus_span, minus_span, round_div, reset_div, points_div, howtoplay_div, gameover_span, playbutton, sounds_div, scorelist_ul, name_input, name_output_div */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name_output_div", function() { return name_output_div; });
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
var name_output_div = document.getElementById("name_output");

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
/* harmony import */ var _audio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./audio */ "./src/audio.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var Game = /*#__PURE__*/function () {
  function Game(options) {
    _classCallCheck(this, Game);

    this.ctx = _dom_loader_js__WEBPACK_IMPORTED_MODULE_0__["canvas"].getContext('2d');
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

  _createClass(Game, [{
    key: "play",
    value: function play() {
      this.toggleGameInSession();
      _dom_loader_js__WEBPACK_IMPORTED_MODULE_0__["points_div"].innerText = this.point;
      if (_audio__WEBPACK_IMPORTED_MODULE_2__["sound"]) _audio__WEBPACK_IMPORTED_MODULE_2__["startgame_sound"].play();
      this.roundNum = 0;
      setTimeout(this.nextRound, this.speed + this.buffer);
    }
  }, {
    key: "nextRound",
    value: function nextRound() {
      if (this.reset) {
        return;
      }

      if (this.roundNum === this.numRounds) {
        this.gameOver();
        return;
      }

      this.roundNum += 1;
      var round = new _round_js__WEBPACK_IMPORTED_MODULE_1__["default"]({
        game: this,
        ctx: this.ctx,
        speed: this.speed,
        roundNum: this.roundNum,
        changeScore: this.changeScore
      });
      round.start();
      setTimeout(this.nextRound, this.speed + this.buffer);
    }
  }, {
    key: "gameOver",
    value: function gameOver() {
      this.toggleGameInSession();
      _dom_loader_js__WEBPACK_IMPORTED_MODULE_0__["gameover_span"].style.display = "block";
      _dom_loader_js__WEBPACK_IMPORTED_MODULE_0__["round_div"].style.display = "none";
      _dom_loader_js__WEBPACK_IMPORTED_MODULE_0__["minus_span"].style.display = "none";
      _dom_loader_js__WEBPACK_IMPORTED_MODULE_0__["plus_span"].style.display = "none";
      if (_audio__WEBPACK_IMPORTED_MODULE_2__["sound"]) _audio__WEBPACK_IMPORTED_MODULE_2__["gameover_sound"].play();
      _dom_loader_js__WEBPACK_IMPORTED_MODULE_0__["reset_div"].style.display = "none";
      this.appendScoreBoard();
    }
  }, {
    key: "changeScore",
    value: function changeScore(points) {
      return this.point += points;
    }
  }, {
    key: "appendScoreBoard",
    value: function appendScoreBoard() {
      this.scoreBoardNum += 1;

      if (this.scoreBoardNum === 9) {
        _dom_loader_js__WEBPACK_IMPORTED_MODULE_0__["scorelist_ul"].removeChild(scorelist_ul.firstChild);
        this.scoreBoardNum -= 1;
      }

      var div = document.createElement("div");
      div.innerText = this.name + "  |  " + this.point + "pts" + "  |  " + this.level;
      _dom_loader_js__WEBPACK_IMPORTED_MODULE_0__["scorelist_ul"].appendChild(div);
    }
  }, {
    key: "restart",
    value: function restart() {
      this.reset = true;
      this.toggleGameInSession();
      this.round = 0;
      this.point = 0;
      _dom_loader_js__WEBPACK_IMPORTED_MODULE_0__["points_div"].innerText = this.point;
      _dom_loader_js__WEBPACK_IMPORTED_MODULE_0__["round_div"].style.display = "none";
      _dom_loader_js__WEBPACK_IMPORTED_MODULE_0__["reset_div"].style.display = "none";
      _dom_loader_js__WEBPACK_IMPORTED_MODULE_0__["howtoplay_div"].style.display = "block";
    }
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
/* harmony import */ var _dom_loader_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-loader.js */ "./src/dom-loader.js");
/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game.js */ "./src/game.js");
/* harmony import */ var _audio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./audio */ "./src/audio.js");



var gameInSession = false;
var speed = 900;
var level = "medium";
var game;
var name = "Player1";
document.addEventListener("keyup", function (event) {
  if (!gameInSession && event.code === "Space") {
    game = new _game_js__WEBPACK_IMPORTED_MODULE_1__["default"]({
      speed: speed,
      level: level,
      name: name,
      toggleGameInSession: toggleGameInSession
    });
    _dom_loader_js__WEBPACK_IMPORTED_MODULE_0__["howtoplay_div"].style.display = "none";
    _dom_loader_js__WEBPACK_IMPORTED_MODULE_0__["gameover_span"].style.display = "none";
    game.play();
  }
});
_dom_loader_js__WEBPACK_IMPORTED_MODULE_0__["reset_div"].addEventListener("click", function () {
  game.restart();
  if (_audio__WEBPACK_IMPORTED_MODULE_2__["sound"]) _audio__WEBPACK_IMPORTED_MODULE_2__["reset_sound"].play();
});

function toggleGameInSession() {
  gameInSession = !gameInSession;

  if (!gameInSession) {
    _dom_loader_js__WEBPACK_IMPORTED_MODULE_0__["name_input"].style.display = "block";
    _dom_loader_js__WEBPACK_IMPORTED_MODULE_0__["name_output_div"].style.display = "none";
  } else {
    _dom_loader_js__WEBPACK_IMPORTED_MODULE_0__["name_input"].style.display = "none";
    _dom_loader_js__WEBPACK_IMPORTED_MODULE_0__["name_output_div"].style.display = "block";
    _dom_loader_js__WEBPACK_IMPORTED_MODULE_0__["name_output_div"].innerText = name;
  }
}

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
  if (!gameInSession) {
    if (_audio__WEBPACK_IMPORTED_MODULE_2__["sound"]) _audio__WEBPACK_IMPORTED_MODULE_2__["select_sound"].play();
    resetLevelColors();

    switch (lev) {
      case "easy":
        speed = 2000;
        level = "easy";
        _dom_loader_js__WEBPACK_IMPORTED_MODULE_0__["easy_span"].style.color = "tomato";
        break;

      case "medium":
        speed = 1000;
        level = "medium";
        _dom_loader_js__WEBPACK_IMPORTED_MODULE_0__["medium_span"].style.color = "tomato";
        break;

      case "hard":
        speed = 700;
        level = "hard";
        _dom_loader_js__WEBPACK_IMPORTED_MODULE_0__["hard_span"].style.color = "tomato";
        break;

      case "impossible":
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
}

_dom_loader_js__WEBPACK_IMPORTED_MODULE_0__["playbutton"].addEventListener("click", toggleMusic);

function toggleMusic() {
  if (_dom_loader_js__WEBPACK_IMPORTED_MODULE_0__["playbutton"].classList.value === "play") {
    _dom_loader_js__WEBPACK_IMPORTED_MODULE_0__["playbutton"].classList = "pause";
    _audio__WEBPACK_IMPORTED_MODULE_2__["music"].play();
  } else {
    _dom_loader_js__WEBPACK_IMPORTED_MODULE_0__["playbutton"].classList = "play";
    _audio__WEBPACK_IMPORTED_MODULE_2__["music"].pause();
  }
}

_dom_loader_js__WEBPACK_IMPORTED_MODULE_0__["sounds_div"].addEventListener("click", toggleSounds);

function toggleSounds() {
  if (_dom_loader_js__WEBPACK_IMPORTED_MODULE_0__["sounds_div"].classList.value === "sounds") {
    _dom_loader_js__WEBPACK_IMPORTED_MODULE_0__["sounds_div"].classList = "mute";
    _audio__WEBPACK_IMPORTED_MODULE_2__["toggleSound"]();
  } else {
    _dom_loader_js__WEBPACK_IMPORTED_MODULE_0__["sounds_div"].classList = "sounds";
    _audio__WEBPACK_IMPORTED_MODULE_2__["toggleSound"]();
  }
}

_dom_loader_js__WEBPACK_IMPORTED_MODULE_0__["name_input"].onchange = updateName;

function updateName() {
  if (_audio__WEBPACK_IMPORTED_MODULE_2__["sound"]) _audio__WEBPACK_IMPORTED_MODULE_2__["submit_sound"].play();
  name = _dom_loader_js__WEBPACK_IMPORTED_MODULE_0__["name_input"].value;
  if (name === "") name = "Player1";
  _dom_loader_js__WEBPACK_IMPORTED_MODULE_0__["name_input"].style.color = "rgb(240, 102, 38)";
  _dom_loader_js__WEBPACK_IMPORTED_MODULE_0__["name_input"].blur();
}

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
/* harmony import */ var _dom_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dom-loader */ "./src/dom-loader.js");
/* harmony import */ var _audio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./audio */ "./src/audio.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }







var Round = /*#__PURE__*/function () {
  function Round(options) {
    var _this = this;

    _classCallCheck(this, Round);

    this.game = options.game;
    this.ctx = options.ctx;
    this.speed = options.speed;
    this.roundNum = options.roundNum;
    this.changeScore = options.changeScore;
    this.spots = ["top", "bottom", "left", "right"];
    this.heartSpot = this.generateRandomSpot();
    this.otherSpots = this.spots.filter(function (spot) {
      return spot !== _this.heartSpot.location;
    }).map(function (spot) {
      return new _spots__WEBPACK_IMPORTED_MODULE_0__["default"](spot);
    });
    this.gameHeight = 1000;
    this.gameWidth = 1000;
    this.arrowKeysControl = false;
    this.clearSpots = this.clearSpots.bind(this);
  }

  _createClass(Round, [{
    key: "start",
    value: function start() {
      var _this2 = this;

      var board = new _board__WEBPACK_IMPORTED_MODULE_1__["default"](this.ctx, this.heartSpot, this.otherSpots);
      board.generate();
      this.arrowKeysControl = true;
      this.playingDisplay();
      setTimeout(this.clearSpots, this.speed);
      document.addEventListener("keydown", function (event) {
        if (_this2.arrowKeysControl) {
          _this2.arrowKeysControl = false;

          _this2.check(event.code);
        }
      });
    }
  }, {
    key: "generateRandomSpot",
    value: function generateRandomSpot() {
      return new _spots__WEBPACK_IMPORTED_MODULE_0__["default"](this.spots[Math.floor(Math.random() * this.spots.length)]);
    }
  }, {
    key: "clearSpots",
    value: function clearSpots() {
      this.ctx.clearRect(0, 0, this.gameWidth, this.gameHeight);
      this.arrowKeysControl = false;
    }
  }, {
    key: "playingDisplay",
    value: function playingDisplay() {
      _dom_loader__WEBPACK_IMPORTED_MODULE_3__["round_div"].style.display = "block";
      _dom_loader__WEBPACK_IMPORTED_MODULE_3__["round_div"].innerText = "Round " + this.roundNum;
      _dom_loader__WEBPACK_IMPORTED_MODULE_3__["reset_div"].style.display = "block";
      _dom_loader__WEBPACK_IMPORTED_MODULE_3__["plus_span"].style.display = "none";
      _dom_loader__WEBPACK_IMPORTED_MODULE_3__["minus_span"].style.display = "none";
      this.arrowKeysControl = true;
    }
  }, {
    key: "check",
    value: function check(code) {
      var keywords = {
        "top": "ArrowUp",
        "bottom": "ArrowDown",
        "left": "ArrowLeft",
        "right": "ArrowRight"
      };

      if (keywords[this.heartSpot.location] === code) {
        this.changeScore(5);
        _dom_loader__WEBPACK_IMPORTED_MODULE_3__["plus_span"].style.display = "block";
        _dom_loader__WEBPACK_IMPORTED_MODULE_3__["plus_span"].classList.add("popup");
        _dom_loader__WEBPACK_IMPORTED_MODULE_3__["points_div"].innerText = this.game.point;
        this.clearSpots();
        if (_audio__WEBPACK_IMPORTED_MODULE_4__["sound"]) _audio__WEBPACK_IMPORTED_MODULE_4__["correct_sound"].play();
      } else {
        this.changeScore(-5);
        _dom_loader__WEBPACK_IMPORTED_MODULE_3__["minus_span"].style.display = "block";
        _dom_loader__WEBPACK_IMPORTED_MODULE_3__["minus_span"].classList.add("popup");
        _dom_loader__WEBPACK_IMPORTED_MODULE_3__["points_div"].innerText = this.game.point;
        this.clearSpots();
        if (_audio__WEBPACK_IMPORTED_MODULE_4__["sound"]) _audio__WEBPACK_IMPORTED_MODULE_4__["wrong_sound"].play();
      }
    }
  }]);

  return Round;
}();



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



var Shape = /*#__PURE__*/function () {
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

var Spot = /*#__PURE__*/function () {
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