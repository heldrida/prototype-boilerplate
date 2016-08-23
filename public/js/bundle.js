/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var LogoModule = __webpack_require__(1);
	var LogoCanvasModule = __webpack_require__(2);

	window.logoModule = new LogoModule();
	window.LogoCanvasModule = new LogoCanvasModule();

/***/ },
/* 1 */
/***/ function(module, exports) {

	function LogoModule () {

		this.init();

	}

	LogoModule.prototype = {

		init: function () {

			var delay = 0;
			var containers = document.querySelectorAll('.logo-frmwrks-module > div');
			var i = 0;

			['logo-frmwrks0', 'logo-frmwrks1', 'logo-frmwrks2', 'logo-frmwrks3', 'logo-frmwrks4', 'logo-frmwrks5', 'logo-frmwrks6'].forEach(function (v) {

				(function (delay, i) {

					// delay the calls to see the different animations
					setTimeout(function () {

						containers[i].style.opacity = 1;

						new Vivus(v, {
							type: 'scenario',
							duration: 300,
							pathTimingFunction: Vivus.EASE
						});

					}, delay);

				}(delay, i));

				delay += 2000;
				i += 1;

			});

		}


	};

	module.exports = LogoModule;

/***/ },
/* 2 */
/***/ function(module, exports) {

	function LogoCanvasModule () {

		this.init();

	}

	LogoCanvasModule.prototype = {

		init: function () {

			var frmwrksLogoCanvas1 = document.querySelector('.frmwrks-logo-canvas-1');
			var ctx1 = frmwrksLogoCanvas1.getContext("2d");
			var width = frmwrksLogoCanvas1.width / 2;
			var lineWidth = 3;

			//draw a circle
			ctx1.beginPath();
			ctx1.arc(width, width, width - lineWidth, 0, Math.PI * 2, false);
			ctx1.lineWidth = lineWidth;

			// line color
			ctx1.strokeStyle = 'black';
			ctx1.stroke();

			// line A
			ctx1.beginPath();
			ctx1.lineWidth = 2;

			ctx1.moveTo(22, 83);
			ctx1.lineTo(63, 27);

			// line B
			ctx1.lineTo(63, 7);

			// line C
			ctx1.lineTo(50, 27);

			// line d
			ctx1.lineTo(50, 74);

			// line e
			ctx1.lineTo(37, 93);

			// line f
			ctx1.lineTo(37, 74);

			// line g
			ctx1.lineTo(78, 18);

			// finish path
			ctx1.stroke();

		}

	};

	module.exports = LogoCanvasModule;

/***/ }
/******/ ]);