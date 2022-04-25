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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/canvas.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/img/background.png":
/*!********************************!*\
  !*** ./src/img/background.png ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "1dc18fa702c7fba48e753a595fd49d67.png");

/***/ }),

/***/ "./src/img/hills.png":
/*!***************************!*\
  !*** ./src/img/hills.png ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "cfffe4c371f5e11d372b398a87c51dd0.png");

/***/ }),

/***/ "./src/img/platform.png":
/*!******************************!*\
  !*** ./src/img/platform.png ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "ffab39d3487de561be1a081fcfb3806d.png");

/***/ }),

/***/ "./src/img/platformSmallTall.png":
/*!***************************************!*\
  !*** ./src/img/platformSmallTall.png ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "0587f9be8e442eb74b2fe283bbf1a947.png");

/***/ }),

/***/ "./src/img/spriteRunLeft.png":
/*!***********************************!*\
  !*** ./src/img/spriteRunLeft.png ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "c67ea51444aafa9bdcd5bdfd4f4a55bb.png");

/***/ }),

/***/ "./src/img/spriteRunRight.png":
/*!************************************!*\
  !*** ./src/img/spriteRunRight.png ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "a2f75989924952a7e49ce0405d487c93.png");

/***/ }),

/***/ "./src/img/spriteStandLeft.png":
/*!*************************************!*\
  !*** ./src/img/spriteStandLeft.png ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "11514f48f22f6d8e3cf748e45e3e1ffb.png");

/***/ }),

/***/ "./src/img/spriteStandRight.png":
/*!**************************************!*\
  !*** ./src/img/spriteStandRight.png ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "01e8f15e899155c68950c40e0a6b8df0.png");

/***/ }),

/***/ "./src/js/canvas.js":
/*!**************************!*\
  !*** ./src/js/canvas.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _img_platformSmallTall_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/platformSmallTall.png */ "./src/img/platformSmallTall.png");
/* harmony import */ var _img_platform_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/platform.png */ "./src/img/platform.png");
/* harmony import */ var _img_background_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/background.png */ "./src/img/background.png");
/* harmony import */ var _img_hills_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/hills.png */ "./src/img/hills.png");
/* harmony import */ var _img_spriteRunLeft_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/spriteRunLeft.png */ "./src/img/spriteRunLeft.png");
/* harmony import */ var _img_spriteRunRight_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../img/spriteRunRight.png */ "./src/img/spriteRunRight.png");
/* harmony import */ var _img_spriteStandLeft_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../img/spriteStandLeft.png */ "./src/img/spriteStandLeft.png");
/* harmony import */ var _img_spriteStandRight_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../img/spriteStandRight.png */ "./src/img/spriteStandRight.png");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var canvas = document.querySelector("canvas");
var c = canvas.getContext("2d");
canvas.height = window.innerHeight - 5;
canvas.width = window.innerWidth;








var image_background = new Image();
image_background.src = _img_background_png__WEBPACK_IMPORTED_MODULE_2__["default"];
console.log(_img_platform_png__WEBPACK_IMPORTED_MODULE_1__["default"]);
window.addEventListener('resize', function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
var gravity = 0.5;

var Player = /*#__PURE__*/function () {
  function Player() {
    _classCallCheck(this, Player);

    this.position = {
      x: 150,
      y: 100
    };
    this.velocity = {
      x: 0,
      y: 10 // As y value increases in canvas, player goes down

    };
    this.width = 66;
    this.height = 150;
    this.image = createImage(_img_spriteStandRight_png__WEBPACK_IMPORTED_MODULE_7__["default"]);
    this.frames = 0;
    this.sprites = {
      stand: {
        right: createImage(_img_spriteStandRight_png__WEBPACK_IMPORTED_MODULE_7__["default"]),
        left: createImage(_img_spriteStandLeft_png__WEBPACK_IMPORTED_MODULE_6__["default"]),
        cropwidth: 177,
        width: 66
      },
      run: {
        right: createImage(_img_spriteRunRight_png__WEBPACK_IMPORTED_MODULE_5__["default"]),
        left: createImage(_img_spriteRunLeft_png__WEBPACK_IMPORTED_MODULE_4__["default"]),
        cropwidth: 341,
        width: 127.875
      }
    };
    this.currentSprite = this.sprites.stand.right;
    this.currentcropWidth = 177;
  }

  _createClass(Player, [{
    key: "draw",
    value: function draw() {
      // c.fillStyle="red"
      // c.fillRect(this.position.x,this.position.y,this.width,this.height)
      c.drawImage(this.currentSprite, this.currentcropWidth * this.frames, 0, this.currentcropWidth, 400, this.position.x, this.position.y, this.width, this.height);
    }
  }, {
    key: "update",
    value: function update() {
      this.frames++;

      if (this.frames > 59 && (this.currentSprite === this.sprites.stand.right || this.currentSprite === this.sprites.stand.left)) {
        this.frames = 0;
      } else if (this.frames > 29 && (this.currentSprite === this.sprites.run.right || this.currentSprite === this.sprites.run.left)) {
        this.frames = 0;
      }

      this.draw();
      this.position.y += this.velocity.y;
      this.position.x += this.velocity.x;

      if (this.position.y + this.height + this.velocity.y <= canvas.height) {
        this.velocity.y += gravity;
      } // else
      // {
      //     this.velocity.y=0
      // }

    }
  }]);

  return Player;
}();

var Platform = /*#__PURE__*/function () {
  function Platform(x_val, y_val, image) {
    _classCallCheck(this, Platform);

    this.position = {
      x: x_val,
      y: y_val
    };
    this.image = image;
    this.width = image.width;
    this.height = image.height;
  }

  _createClass(Platform, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.image, this.position.x, this.position.y); // c.fillStyle="green"
      // c.fillRect(this.position.x,this.position.y,this.width,this.height)
    }
  }]);

  return Platform;
}();

var GenericObject = /*#__PURE__*/function () {
  function GenericObject(x_val, y_val, image) {
    _classCallCheck(this, GenericObject);

    this.position = {
      x: x_val,
      y: y_val
    };
    this.image = image;
    this.width = image.width;
    this.height = image.height;
  }

  _createClass(GenericObject, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.image, this.position.x, this.position.y);
    }
  }]);

  return GenericObject;
}();

var scrolloffset = 0;

function createImage(ImgSrc) {
  var image = new Image();
  image.src = ImgSrc;
  return image;
}

var platformSmallTall = new createImage(_img_platformSmallTall_png__WEBPACK_IMPORTED_MODULE_0__["default"]);
var platformImage = new createImage(_img_platform_png__WEBPACK_IMPORTED_MODULE_1__["default"]);
var player = new Player();
var platforms = [];
var GenericObjects = [];
var currentKey;
var keys = {
  right_pressed: false,
  left_pressed: false
};

function start() {
  platformImage = new createImage(_img_platform_png__WEBPACK_IMPORTED_MODULE_1__["default"]);
  platformSmallTall = new createImage(_img_platformSmallTall_png__WEBPACK_IMPORTED_MODULE_0__["default"]);
  player = new Player();
  platforms = [new Platform(-1, 580, platformImage), new Platform(platformImage.width - 3, 580, platformImage), new Platform(platformImage.width * 2 + 100, 580, platformImage), new Platform(platformImage.width * 3 + 300, 580, platformImage), new Platform(platformImage.width * 4 + 300, 580, platformImage), new Platform(platformImage.width * 5 + 300, 300, platformSmallTall)];
  GenericObjects = [new GenericObject(0, 0, createImage(_img_background_png__WEBPACK_IMPORTED_MODULE_2__["default"])), new GenericObject(0, 0, createImage(_img_hills_png__WEBPACK_IMPORTED_MODULE_3__["default"]))];
}

function animate() {
  requestAnimationFrame(animate);
  c.fillStyle = "white";
  c.fillRect(0, 0, canvas.width, canvas.height);
  GenericObjects.forEach(function (genericObject) {
    genericObject.draw();
  }); // c.clearRect(0,0,canvas.width,canvas.height)

  platforms.forEach(function (platform) {
    platform.draw();
  });
  player.update();

  if (keys.right_pressed && player.position.x < 800) {
    player.position.x += 10;
  } else if (keys.left_pressed && player.position.x > 100 || keys.left_pressed && scrolloffset === 0 && player.position.x > 0) {
    player.position.x -= 10;
  } else {
    player.velocity.x = 0;

    if (keys.right_pressed) {
      scrolloffset += 10;
      platforms.forEach(function (platform) {
        platform.position.x -= 10;
      });
      GenericObjects.forEach(function (genericObject) {
        genericObject.position.x -= 3;
      });
    } else if (keys.left_pressed && scrolloffset > 0) {
      scrolloffset -= 10;
      platforms.forEach(function (platform) {
        platform.position.x += 10;
      });
      GenericObjects.forEach(function (genericObject) {
        genericObject.position.x += 3;
      });
    }
  }

  platforms.forEach(function (platform) {
    if (player.position.y + player.height <= platform.position.y && player.position.y + player.height + player.velocity.y >= platform.position.y && player.position.x + player.width >= platform.position.x && player.position.x <= platform.position.x + platform.width) {
      player.velocity.y = 0;
    }
  });

  if (keys.right_pressed && currentKey === 'right' && player.currentSprite !== player.sprites.run.right) {
    player.frames = 1;
    player.currentSprite = player.sprites.run.right;
    player.currentcropWidth = player.sprites.run.cropwidth;
    player.width = player.sprites.run.width;
  } else if (keys.left_pressed && currentKey === "left" && player.currentSprite !== player.sprites.run.left) {
    player.currentSprite = player.sprites.run.left;
    player.currentcropWidth = player.sprites.run.cropwidth;
    player.width = player.sprites.run.width;
  } else if (!keys.left_pressed && currentKey === "left" && player.currentSprite !== player.sprites.stand.left) {
    player.currentSprite = player.sprites.stand.left;
    player.currentcropWidth = player.sprites.stand.cropwidth;
    player.width = player.sprites.stand.width;
  } else if (!keys.right_pressed && currentKey === "right" && player.currentSprite !== player.sprites.stand.right) {
    player.currentSprite = player.sprites.stand.right;
    player.currentcropWidth = player.sprites.stand.cropwidth;
    player.width = player.sprites.stand.width;
  }

  if (scrolloffset > platformImage * 5 + 300) {
    console.log("I won!!!");
  }

  if (player.position.y > canvas.height) {
    console.log("you loose!");
    start();
  } // else
  // {
  //     // console.log(scrolloffset)
  // }

}

start();
animate();
addEventListener("keydown", function (_ref) {
  var keyCode = _ref.keyCode;

  switch (keyCode) {
    case 37:
      console.log("left");
      keys.left_pressed = true;
      currentKey = "left"; // player.currentSprite=player.sprites.run.left
      // player.currentcropWidth=player.sprites.run.cropwidth
      // player.width=player.sprites.run.width

      break;

    case 38:
      console.log("up"); // console.log(player.velocity.y)

      player.velocity.y -= 10; // console.log(player.velocity.y)

      break;

    case 39:
      console.log("right");
      keys.right_pressed = true;
      currentKey = "right"; // player.position.x-=player.velocity.x
      // player.currentSprite=player.sprites.run.right
      // player.currentcropWidth=player.sprites.run.cropwidth
      // player.width=player.sprites.run.width

      break;

    case 40:
      console.log("down");
      player.velocity.y += 10;
      break;
  }
});
addEventListener("keyup", function (_ref2) {
  var keyCode = _ref2.keyCode;

  switch (keyCode) {
    case 37:
      console.log("left");
      keys.left_pressed = false; // player.position.x-=player.velocity.x
      // player.currentSprite=player.sprites.stand.left
      // player.currentcropWidth=player.sprites.stand.cropwidth
      // player.width=player.sprites.stand.width
      // player.velocity.x=0

      break;

    case 39:
      console.log("right");
      keys.right_pressed = false; // player.position.x-=player.velocity.x
      // player.currentSprite=player.sprites.stand.right
      // player.currentcropWidth=player.sprites.stand.cropwidth
      // player.width=player.sprites.stand.width
      // player.velocity.x=0

      break;
  }
});

/***/ })

/******/ });
//# sourceMappingURL=canvas.bundle.js.map