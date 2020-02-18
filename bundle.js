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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: nextRound, check */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nextRound", function() { return nextRound; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "check", function() { return check; });
/* harmony import */ var _round__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./round */ "./src/round.js");
/* harmony import */ var _drawshapes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./drawshapes */ "./src/drawshapes.js");
/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./input */ "./src/input.js");



var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');
var roundNum;
var correct;
var heartSpots = [];
var numRounds = 10;
var round;
var on;
var speed = 500;
var points_div = document.getElementById('points');
var point = 0;
var GAME_WIDTH = 1000;
var GAME_HEIGHT = 1000;
var topSpot = {
  x: 161,
  y: 15
};
var rightSpot = {
  x: 246,
  y: 57
};
var bottomSpot = {
  x: 161,
  y: 99
};
var leftSpot = {
  x: 76,
  y: 57
};
var shapeSize = {
  w: 10,
  h: 15
};
var playerSpot = {
  w: 0,
  h: 0
}; // let right = document.getElementById("right");
// let blue = document.getElementById("blueheart");
// ctx.drawImage(right, 100, 105, 50, 50);
// ctx.drawImage(blue, 100, 105, 10, 10);

function play() {
  on = false;
  roundNum = 0;
  heartSpots = [];

  for (var i = 0; i < numRounds; i++) {
    heartSpots.push(Math.floor(Math.random() * 4));
  }

  console.log(heartSpots);
  setTimeout(function () {
    return nextRound();
  }, 1500);
}

function nextRound() {
  roundNum += 1;

  if (roundNum > numRounds) {
    gameOver();
    on = false;
    return;
  }

  round = new _round__WEBPACK_IMPORTED_MODULE_0__["default"](GAME_WIDTH, GAME_HEIGHT, ctx, heartSpots, shapeSize, topSpot, rightSpot, bottomSpot, leftSpot, _drawshapes__WEBPACK_IMPORTED_MODULE_1__["drawHeart"], _drawshapes__WEBPACK_IMPORTED_MODULE_1__["drawSpade"], _drawshapes__WEBPACK_IMPORTED_MODULE_1__["drawClub"], _drawshapes__WEBPACK_IMPORTED_MODULE_1__["drawDiamond"], roundNum, speed);
  round.flashHeart();
  round.flashShapes();
  on = true;
  document.addEventListener("keydown", function (event) {
    // debugger;
    switch (event.keyCode) {
      case 37:
        if (on) {
          check(round, 3);
        }

        on = false;
        break;

      case 38:
        if (on) {
          check(round, 0);
        }

        on = false;
        break;

      case 39:
        if (on) {
          check(round, 1);
        }

        on = false;
        break;

      case 40:
        if (on) {
          check(round, 2);
        }

        on = false;
        break;
    }
  });
  setTimeout(function () {
    return round.clearSpots();
  }, speed);
  setTimeout(function () {
    return toggleOn();
  }, speed);
  setTimeout(nextRound, speed + 1500);
}

function toggleOn() {
  on = false;
}

function check(round, userChoice) {
  if (userChoice === round.heartSpots[round.roundNum - 1]) {
    point += 5;
    points_div.innerText = point;
    console.log("".concat(roundNum, ": correct!"));
    round.clearSpots();
  } else {
    console.log("".concat(roundNum, ": incorrect!"));
    point -= 5;
    points_div.innerText = point;
    round.clearSpots();
  }
}

function gameOver(ctx) {
  // play();
  console.log("gameover!"); // ctx.rect(0,0, this.GAME_WIDTH, this.GAME_HEIGHT);
  // ctx.fillStyle = "rgba(0,0,0,0.5";
  // ctx.fill();
  // ctx.font = "30px Arial";
  // ctx.fillStyle = "white";
  // ctx.textAlign = "center";
  // ctx.fillText("Game Over", this.GAME_WIDTH/2, this.GAME_HEIGHT/2);
}

play();

/***/ }),

/***/ "./src/input.js":
/*!**********************!*\
  !*** ./src/input.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return InputHandler; });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var InputHandler = function InputHandler(round, roundNum) {
  _classCallCheck(this, InputHandler);

  document.addEventListener("keydown", function (event) {
    switch (event.keyCode) {
      case 37:
        // round.choice = 3;
        debugger;
        Object(_index__WEBPACK_IMPORTED_MODULE_0__["check"])(round, 3);
        break;

      case 38:
        // round.choice = 0;
        debugger;
        Object(_index__WEBPACK_IMPORTED_MODULE_0__["check"])(round, 0);
        break;

      case 39:
        // round.choice = 1;
        debugger;
        Object(_index__WEBPACK_IMPORTED_MODULE_0__["check"])(round, 1);
        break;

      case 40:
        // round.choice = 2;
        debugger;
        Object(_index__WEBPACK_IMPORTED_MODULE_0__["check"])(round, 2);
        break;
      // case 27:
      //     togglePause();
      //     break;
    } // if (round.choice === round.heartSpots[round.roundNum - 1]) {
    //     console.log(`${round.roundNum}: correct!`);
    //     round.clearSpots();
    //     nextRound();
    // } else {
    //     console.log(`${round.roundNum}: incorrect!`);
    // }

  });
};



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
/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./input */ "./src/input.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Round =
/*#__PURE__*/
function () {
  function Round(gameHeight, gameWidth, ctx, heartSpots, shapeSize, topSpot, rightSpot, bottomSpot, leftSpot, drawHeart, drawSpade, drawClub, drawDiamond, roundNum, speed) {
    _classCallCheck(this, Round);

    this.gameHeight = gameHeight;
    this.gameWidth = gameWidth;
    this.ctx = ctx;
    this.heartSpots = heartSpots;
    this.shapeSize = shapeSize;
    this.spots = [topSpot, rightSpot, bottomSpot, leftSpot];
    this.colors = ["red", "lawngreen", "gold", "fuchsia", "tomato"];
    this.drawHeart = drawHeart;
    this.drawSpade = drawSpade;
    this.drawClub = drawClub;
    this.drawDiamond = drawDiamond;
    this.roundNum = roundNum;
    this.shuffle = this.shuffle.bind(this);
    this.choice = null;
    this.speed = speed;
  }

  _createClass(Round, [{
    key: "flashHeart",
    value: function flashHeart() {
      this.drawHeart(this.ctx, this.spots[this.heartSpots[this.roundNum - 1]].x, this.spots[this.heartSpots[this.roundNum - 1]].y, this.shapeSize.w, this.shapeSize.h, this.colors[Math.floor(Math.random() * this.colors.length)]);
    }
  }, {
    key: "flashShapes",
    value: function flashShapes() {
      var _this = this;

      var noHeartSpots = this.spots.filter(function (spot, idx) {
        return idx !== _this.heartSpots[_this.roundNum - 1];
      });
      var shuffledSpots = this.shuffle(noHeartSpots);
      this.drawSpade(this.ctx, shuffledSpots[0].x, shuffledSpots[0].y, this.shapeSize.w, this.shapeSize.h, this.colors[Math.floor(Math.random() * this.colors.length)]);
      this.drawDiamond(this.ctx, shuffledSpots[1].x, shuffledSpots[1].y, this.shapeSize.w, this.shapeSize.h, this.colors[Math.floor(Math.random() * this.colors.length)]);
      this.drawClub(this.ctx, shuffledSpots[2].x, shuffledSpots[2].y, this.shapeSize.w, this.shapeSize.h, this.colors[Math.floor(Math.random() * this.colors.length)]); //clear left spot only:
      // setTimeout(() => {
      //     this.ctx.clearRect(70,
      //         50,
      //         30,
      //         30)
      // }, 2000)
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
  }, {
    key: "clearSpots",
    value: function clearSpots() {
      this.ctx.clearRect(0, 0, this.gameWidth, this.gameHeight);
    }
  }]);

  return Round;
}();



/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map