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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.scss */ \"./src/main.scss\");\n/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_main_scss__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst EVENTS = [\n  {\n    date: \"30\",\n    month: \"мая\",\n    place: \"Стадион\",\n    time: \"19:00\",\n    team1: \"Рубин\",\n    team2: \"Спартак\"\n  },\n  {\n    date: \"17\",\n    month: \"июня\",\n    place: \"Стадион\",\n    time: \"19:00\",\n    team1: \"ЦСКА\",\n    team2: \"Динамо\"\n  },\n  {\n    date: \"26\",\n    month: \"июня\",\n    place: \"Стадион\",\n    time: \"19:00\",\n    team1: \"Рубин\",\n    team2: \"Уфа\"\n  },\n  {\n    date: \"16\",\n    month: \"июля\",\n    place: \"Стадион\",\n    time: \"19:00\",\n    team1: \"Динамо\",\n    team2: \"Локомотив\"\n  },\n  {\n    date: \"30\",\n    month: \"сентября\",\n    place: \"Стадион\",\n    time: \"19:00\",\n    team1: \"Уфа\",\n    team2: \"Рубин\"\n  },\n];\n\nconst RATIO = document.documentElement.clientWidth/1266;\n\nconst POSITIONS = [\n  'transform: scale(0) translate(-50%, -50%); top: 100%; left: 0%;',\n  'transform: scale(0) translate(-50%, -50%); top: 88%; left: 10%;',\n  `transform: scale(${1*RATIO}) translate(-50%, -50%); top: 79%; left: 21%;`,\n  `transform: scale(${1.5*RATIO}) translate(-50%, -50%); top: 67%; left: 33%;`,\n  `transform: scale(${2.3*RATIO}) translate(-50%, -50%); top: 50%; left: 50%;`,\n  `transform: scale(${1.5*RATIO}) translate(-50%, -50%); top: 33%; left: 67%;`,\n  `transform: scale(${1*RATIO}) translate(-50%, -50%); top: 21%; left: 79%;`,\n  'transform: scale(0) translate(-50%, -50%); top: 10%; left: 88%;',\n  'transform: scale(0) translate(-50%, -50%); top: 0%; left: 100%;',\n]\n\nconst hexagons = document.querySelectorAll('.hexagon');\nconst hexagonsContent = document.querySelectorAll('.hexagon-content');\nconst teamFirstPanel = document.querySelector('.team-first');\nconst teamSecondPanel = document.querySelector('.team-second');\n\n//Функция отрисовки данных на центральном гексагоне\n\nfunction fillMiddleHex(i) {\n  hexagonsContent[i].innerHTML = `\n    <p class=\"content-place\">${EVENTS[i].place}<p>\n    <h4 class=\"content-title\">${EVENTS[i].date} ${EVENTS[i].month}</h4>\n    <p class=\"content-time\">${EVENTS[i].time}</p>\n    <button class=\"content-button\">Купить билет</button>\n  `;\n  teamFirstPanel.innerHTML = `<span>${EVENTS[i].team1}</span>`;\n  teamSecondPanel.innerHTML = `<span>${EVENTS[i].team2}</span>`;\n}\n\n//Отрисовка дат на всех гексагонах\n\nfunction fillOuterHex(i) {\n  hexagonsContent[i].innerHTML = `<div class=\"content-title\">${EVENTS[i].date}<br>${EVENTS[i].month}</div>`;\n}\n\nfor (let i = 0; i < hexagonsContent.length; i++) {\n  fillOuterHex(i);\n}\nfillMiddleHex(2);\n\n//Задание ширины окна пользователя\n\nconst wrapper = document.querySelector('.wrapper');\n\nwrapper.setAttribute('style', `height: ${document.documentElement.clientHeight}px`);\n\n//Обработка кликов по гексагонам\n\nlet step = 0;\n\nhexagons[0].addEventListener('click', () => {\n  scrollOnce(2);\n  step = 2;\n});\nhexagons[1].addEventListener('click', () => {\n  scrollOnce(1);\n  step = 1;\n});\nhexagons[2].addEventListener('click', () => {\n  scrollOnce(0);\n  step = 0;\n});\nhexagons[3].addEventListener('click', () => {\n  scrollOnce(-1);\n  step = -1;\n});\nhexagons[4].addEventListener('click', () => {\n  scrollOnce(-2);\n  step = -2\n});\n\n//Функция одиночного шага прокрутки\n\nfunction scrollOnce(n) {\n  for (let i = 0; i < hexagons.length; i++) {\n    hexagons[i].setAttribute('style', POSITIONS[i+2+n]);\n  }\n  for (let i = 0; i < hexagonsContent.length; i++) {\n    fillOuterHex(i);\n  }\n  fillMiddleHex(hexagons.length-1-(n+2));\n}\n\n//Обработка прокрутки\n\nlet debounce_timer;\n\nwindow.onwheel = function(e){\n  if (debounce_timer) {\n    window.clearTimeout(debounce_timer);\n  }\n  console.log(e.deltaY);\n  debounce_timer = window.setTimeout(function() {\n    if (e.deltaY > 0) {\n      if (step < 2) {\n        step++;\n        scrollOnce(step);\n      }\n    } else {\n      if (step > -2) {\n        step--;\n        scrollOnce(step);\n      }\n    }\n  }, 300);\n};\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/main.scss":
/*!***********************!*\
  !*** ./src/main.scss ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/main.scss?");

/***/ })

/******/ });