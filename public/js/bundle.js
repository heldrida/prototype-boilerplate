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

			var canvas = document.querySelector('.frmwrks-logo-canvas-1');
			var ctx = canvas.getContext("2d");
			var width = canvas.width / 2;
			var lineWidth = 3;
			var points = {
				a: {
					x: -50,
					y: 100
				},
				b: {
					x: 10,
					y: 50
				},
				c: {
					x: 0,
					y: -110
				},
				d: {
					x: 50,
					y: 150
				},
				e: {
					x: -50,
					y: 50
				},
				f: {
					x: -100,
					y: 100
				},
				g: {
					x: -50,
					y: -10
				}
			};


			var render = function () {
				ctx.clearRect(0, 0, 100, 100);

				//draw a circle
				ctx.beginPath();
				ctx.arc(width, width, width - lineWidth, 0, Math.PI * 2, false);
				ctx.lineWidth = lineWidth;

				// line color
				ctx.strokeStyle = 'black';
				ctx.stroke();

				// line a
				ctx.beginPath();
				ctx.lineWidth = lineWidth;

				ctx.moveTo(22, 82);
				// 62, 26
				ctx.lineTo(Math.min(points.a.x++, 62), Math.min(points.a.y++, 26));

				// line b
				// 62, 10;
				ctx.lineTo(Math.min(points.b.x++, 62), Math.min(points.b.y++, 10));

				// line c
				// 50, 26
				ctx.lineTo(Math.min(points.c.x++, 50), Math.min(points.c.y++, 26));

				// line d
				// 50, 74
				ctx.lineTo(Math.min(points.d.x++, 50), Math.min(points.d.y++, 74));

				// line e
				// 36, 89
				ctx.lineTo(Math.min(points.e.x++, 36), Math.min(points.e.y++, 89));

				// line f
				// 36, 74
				ctx.lineTo(Math.min(points.f.x++, 36), Math.min(points.f.y++, 74));

				// line g
				// 78, 18
				ctx.lineTo(Math.min(points.g.x++, 78), Math.min(points.g.y++, 18));

				// finish path
				ctx.stroke();

				requestAnimationFrame(render);

			}

			// start
			render();

		}
	};

	module.exports = LogoCanvasModule;

/***/ }
/******/ ]);