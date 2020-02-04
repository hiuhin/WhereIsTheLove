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

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Game; });
/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./input */ "./src/input.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Game =
/*#__PURE__*/
function () {
  function Game(gameHeight, gameWidth, ctx, heartSpots, shapeSize, topSpot, rightSpot, bottomSpot, leftSpot, drawHeart, drawSpade, drawClub, drawDiamond) {
    _classCallCheck(this, Game);

    this.gameHeight = gameHeight;
    this.gameWidth = gameWidth;
    this.round = 0;
    this.ctx = ctx;
    this.heartSpots = heartSpots;
    this.shapeSize = shapeSize;
    this.spots = [topSpot, rightSpot, bottomSpot, leftSpot];
    this.colors = ["red", "lawngreen", "gold", "fuchsia", "tomato"];
    this.drawHeart = drawHeart;
    this.drawSpade = drawSpade;
    this.drawClub = drawClub;
    this.drawDiamond = drawDiamond;
    this.shuffle = this.shuffle.bind(this);
  }

  _createClass(Game, [{
    key: "flashHeart",
    value: function flashHeart() {
      this.drawHeart(this.ctx, this.spots[this.heartSpots[this.round]].x, this.spots[this.heartSpots[this.round]].y, this.shapeSize.w, this.shapeSize.h, this.colors[Math.floor(Math.random() * this.colors.length)]);
    }
  }, {
    key: "flashShapes",
    value: function flashShapes() {
      var _this = this;

      var noHeartSpots = this.spots.filter(function (spot, idx) {
        return idx !== _this.heartSpots[_this.round];
      });
      var shuffledSpots = this.shuffle(noHeartSpots);
      this.drawSpade(this.ctx, shuffledSpots[0].x, shuffledSpots[0].y, this.shapeSize.w, this.shapeSize.h, this.colors[Math.floor(Math.random() * this.colors.length)]);
      this.drawDiamond(this.ctx, shuffledSpots[1].x, shuffledSpots[1].y, this.shapeSize.w, this.shapeSize.h, this.colors[Math.floor(Math.random() * this.colors.length)]);
      this.drawClub(this.ctx, shuffledSpots[2].x, shuffledSpots[2].y, this.shapeSize.w, this.shapeSize.h, this.colors[Math.floor(Math.random() * this.colors.length)]);
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
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ "./src/game.js");
/* harmony import */ var _drawshapes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./drawshapes */ "./src/drawshapes.js");


var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');
var GAME_WIDTH = 1000;
var GAME_HEIGHT = 1000;
var heartSpots = [];

for (var i = 0; i < 10; i++) {
  heartSpots.push(Math.floor(Math.random() * 4));
}

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
var game = new _game__WEBPACK_IMPORTED_MODULE_0__["default"](GAME_WIDTH, GAME_HEIGHT, ctx, heartSpots, shapeSize, topSpot, rightSpot, bottomSpot, leftSpot, _drawshapes__WEBPACK_IMPORTED_MODULE_1__["drawHeart"], _drawshapes__WEBPACK_IMPORTED_MODULE_1__["drawSpade"], _drawshapes__WEBPACK_IMPORTED_MODULE_1__["drawClub"], _drawshapes__WEBPACK_IMPORTED_MODULE_1__["drawDiamond"]);
game.flashHeart();
game.flashShapes();

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
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var InputHandler = function InputHandler() {
  _classCallCheck(this, InputHandler);

  document.addEventListener("keydown", function (event) {
    switch (event.keyCode) {
      case 37:
        alert("move left");
        break;

      case 39:
        alert("move right");
        break;
      // case 27:
      //     togglePause();
      //     break;
    }
  });
};



/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map