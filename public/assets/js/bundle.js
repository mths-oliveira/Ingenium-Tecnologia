/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/index.js":
/*!*************************!*
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _moduleCreateHeader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moduleCreateHeader */ "./src/js/moduleCreateHeader.js");
/* harmony import */ var _moduleCreateSection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./moduleCreateSection */ "./src/js/moduleCreateSection.js");


var header = (0,_moduleCreateHeader__WEBPACK_IMPORTED_MODULE_0__.createHeader)();
var sectionInstitucional = (0,_moduleCreateSection__WEBPACK_IMPORTED_MODULE_1__.createSection)('institucional');
var sectionServicos = (0,_moduleCreateSection__WEBPACK_IMPORTED_MODULE_1__.createSection)('servicos');
var sectionProdutos = (0,_moduleCreateSection__WEBPACK_IMPORTED_MODULE_1__.createSection)('produtos');
var sectionCertificacoes = (0,_moduleCreateSection__WEBPACK_IMPORTED_MODULE_1__.createSection)('certificacoes');
var content = document.querySelector('.content');
content.addEventListener('scroll', parseSection);

function parseSection() {
  var heightSection = window.innerHeight;
  var topDistance = content.scrollTop;
  heightSection * 0.5 >= topDistance ? header.setAnchors(header.anchors[0]) : false;
  heightSection * 0.5 < topDistance && heightSection * 1.5 >= topDistance ? header.setAnchors(header.anchors[1]) : false;
  heightSection * 1.5 < topDistance && heightSection * 2.5 >= topDistance ? header.setAnchors(header.anchors[2]) : false;
  heightSection * 2.5 < topDistance && heightSection * 3.5 >= topDistance ? header.setAnchors(header.anchors[3]) : false;
  heightSection * 3.5 < topDistance && heightSection * 4.5 >= topDistance ? header.setAnchors(header.anchors[4]) : false;
  heightSection * 4.5 < topDistance ? header.setAnchors(header.anchors[5]) : false;
}

/***/ }),

/***/ "./src/js/moduleCreateHeader.js":
/*!**************************************!*
  !*** ./src/js/moduleCreateHeader.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createHeader": () => /* binding */ createHeader
/* harmony export */ });
/* harmony import */ var _moduleFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moduleFunctions */ "./src/js/moduleFunctions.js");


function createHeader() {
  var header = {};
  header["this"] = document.querySelector('.header');
  header.menu = document.querySelector('.header-menu');
  header.anchors = document.querySelectorAll('.header-anchor');

  header.setHeader = function (event) {
    header.setAnchors(event.currentTarget);
    header.setHeight();
    header.scrollTop();
  };

  header.setAnchors = function (currentTarget) {
    (0,_moduleFunctions__WEBPACK_IMPORTED_MODULE_0__.removeActiveClass)(header.anchors, 'header-anchor-active');
    (0,_moduleFunctions__WEBPACK_IMPORTED_MODULE_0__.addActiveClass)(currentTarget, 'header-anchor-active');
  };

  header.setHeight = function () {
    header["this"].classList.contains('header-active') ? header["this"].classList.remove('header-active') : header["this"].classList.add('header-active');
  };

  header.scrollTop = function () {
    return setTimeout(function () {
      window.innerWidth < 601 ? document.querySelector('.content').scrollTop -= 70 : false;
    }, 100);
  };

  (0,_moduleFunctions__WEBPACK_IMPORTED_MODULE_0__.addEventListenerToArray)(header.anchors, 'click', header.setHeader);
  header.menu.addEventListener('click', header.setHeight);
  return header;
}



/***/ }),

/***/ "./src/js/moduleCreateSection.js":
/*!***************************************!*
  !*** ./src/js/moduleCreateSection.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createSection": () => /* binding */ createSection
/* harmony export */ });
/* harmony import */ var _moduleFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moduleFunctions */ "./src/js/moduleFunctions.js");
/* harmony import */ var _moduleCreateTouchListener__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./moduleCreateTouchListener */ "./src/js/moduleCreateTouchListener.js");



function createSection(sectionName) {
  var section = {};
  section["this"] = document.getElementById("".concat(sectionName));
  section.previews = document.querySelectorAll(".preview-".concat(sectionName));
  section.images = document.querySelectorAll(".image-".concat(sectionName));
  section.texts = document.querySelectorAll(".text-".concat(sectionName));
  section.bull = document.querySelectorAll(".bull-".concat(sectionName));
  section.button = document.querySelector(".button-".concat(sectionName));
  section.state = {
    index: {
      currentIndex: 0,
      lastIndex: section.previews.length
    },
    observers: [setContainer, setPreviews, setImages, setTexts, setBull]
  };

  section.notify = function (index) {
    section.state.observers.forEach(function (callBackFunction) {
      return callBackFunction(index);
    });
  };

  function setContainer() {
    setTimeout(function () {
      section["this"].classList.contains('container-reverse') ? section["this"].classList.remove('container-reverse') : section["this"].classList.add('container-reverse');
    }, 750);
  }

  function setPreviews(index) {
    (0,_moduleFunctions__WEBPACK_IMPORTED_MODULE_0__.removeActiveClass)(section.previews, 'item-active');
    (0,_moduleFunctions__WEBPACK_IMPORTED_MODULE_0__.addActiveClass)(section.previews[index], 'item-active');
  }

  function setImages(index) {
    section.images.forEach(function (image) {
      return image.style.transform = "translateX(-".concat(index, "00%)");
    });
    window.innerWidth > 600 ? transition(section.images) : false;
  }

  function setTexts(index) {
    section.texts.forEach(function (text) {
      return text.style.transform = "translateX(-".concat(index, "00%)");
    });
    window.innerWidth > 600 ? transition(section.texts) : false;
  }

  function setBull(index) {
    setTimeout(function () {
      (0,_moduleFunctions__WEBPACK_IMPORTED_MODULE_0__.removeActiveClass)(section.bull, 'bull-active');
      (0,_moduleFunctions__WEBPACK_IMPORTED_MODULE_0__.addActiveClass)(section.bull[index], 'bull-active');
    }, 500);
  }

  function transition(array) {
    array[0].parentElement.style.opacity = '0';
    setTimeout(function () {
      return array[0].parentElement.style.opacity = '1';
    }, 1500);
  }

  section.eventListener = function (event) {
    section.state.index.currentIndex = Array.prototype.indexOf.call(section.previews, event.currentTarget);
    section.notify(section.state.index.currentIndex);
    clearInterval(section.timeListener);
  };

  section.setButton = function () {
    section.button.classList.contains('button-active') ? section.button.classList.remove('button-active') : section.button.classList.add('button-active');
    section.button.classList.contains('button-active') ? (0,_moduleFunctions__WEBPACK_IMPORTED_MODULE_0__.addActiveClass)(section.texts[section.state.index.currentIndex], 'text-active') : (0,_moduleFunctions__WEBPACK_IMPORTED_MODULE_0__.removeActiveClass)(section.texts, 'text-active');
    clearInterval(section.timeListener);
  };

  section.timeListener = setInterval(function () {
    section.state.index.currentIndex + 1 < section.state.index.lastIndex ? section.state.index.currentIndex++ : section.state.index.currentIndex = 0;
    section.notify(section.state.index.currentIndex);
  }, 14000);
  section.button.addEventListener('click', section.setButton);
  (0,_moduleFunctions__WEBPACK_IMPORTED_MODULE_0__.addEventListenerToArray)(section.previews, 'click', section.eventListener);

  function callbacktoTouch(swiped) {
    normalize();
    swiped === 'left' ? increment() : decrement();
    section.notify(section.state.index.currentIndex);
  }

  function increment() {
    section.state.index.currentIndex + 1 < section.state.index.lastIndex ? section.state.index.currentIndex++ : section.state.index.currentIndex = 0;
  }

  function decrement() {
    section.state.index.currentIndex - 1 < 0 ? section.state.index.currentIndex = section.state.index.lastIndex - 1 : --section.state.index.currentIndex;
  }

  function normalize() {
    section.button.classList.remove('button-active');
    (0,_moduleFunctions__WEBPACK_IMPORTED_MODULE_0__.removeActiveClass)(section.texts, 'text-active');
    clearInterval(section.timeListener);
  }

  var touchListener = (0,_moduleCreateTouchListener__WEBPACK_IMPORTED_MODULE_1__.createTouchListener)(callbacktoTouch);
  section["this"].addEventListener('touchstart', touchListener.startTouch);
  section["this"].addEventListener('touchmove', touchListener.moveTouch);
  return section;
}



/***/ }),

/***/ "./src/js/moduleCreateTouchListener.js":
/*!*********************************************!*
  !*** ./src/js/moduleCreateTouchListener.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTouchListener": () => /* binding */ createTouchListener
/* harmony export */ });
function createTouchListener(callBackFunction) {
  var touchListener = {};
  touchListener.state = {
    observers: [diffTouchs, swipedTo, parseNegative, parseDirection, restart]
  };

  touchListener.startTouch = function (event) {
    touchListener.state.initialX = event.touches[0].clientX;
    touchListener.state.initialY = event.touches[0].clientY;
  };

  touchListener.moveTouch = function (event) {
    moveTouch(event);
    notifyAll(event);
  };

  function moveTouch(event) {
    touchListener.state.currentX = event.touches[0].clientX;
    touchListener.state.currentY = event.touches[0].clientY;
  }

  function notifyAll(event) {
    touchListener.state.observers.forEach(function (callbackFunction) {
      return callbackFunction(event);
    });
  }

  function diffTouchs() {
    touchListener.state.diffX = touchListener.state.initialX - touchListener.state.currentX;
    touchListener.state.diffY = touchListener.state.initialY - touchListener.state.currentY;
  }

  function swipedTo() {
    touchListener.state.swipedX = touchListener.state.diffX > 0 ? 'left' : 'right';
    touchListener.state.swipedY = touchListener.state.diffY > 0 ? 'top' : 'bottom';
  }

  function parseNegative() {
    touchListener.state.diffX = touchListener.state.diffX < 0 ? touchListener.state.diffX * -1 : touchListener.state.diffX;
    touchListener.state.diffY = touchListener.state.diffY < 0 ? touchListener.state.diffY * -1 : touchListener.state.diffY;
  }

  function parseDirection(event) {
    if (touchListener.state.diffX > touchListener.state.diffY) {
      touchListener.state.swipedX === 'left' ? callBackFunction('left') : callBackFunction('right');
    }
  }

  function restart() {
    touchListener.state.initialX = undefined;
    touchListener.state.initialY = undefined;
  }

  return touchListener;
}



/***/ }),

/***/ "./src/js/moduleFunctions.js":
/*!***********************************!*
  !*** ./src/js/moduleFunctions.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addEventListenerToArray": () => /* binding */ addEventListenerToArray,
/* harmony export */   "removeActiveClass": () => /* binding */ removeActiveClass,
/* harmony export */   "addActiveClass": () => /* binding */ addActiveClass
/* harmony export */ });
function removeActiveClass(array, className) {
  array.forEach(function (element) {
    return element.classList.remove(className);
  });
}

function addActiveClass(element, className) {
  element.classList.add(className);
}

function addEventListenerToArray(array, event, callBackFunction) {
  array.forEach(function (element) {
    return element.addEventListener(event, callBackFunction);
  });
}



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/js/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=bundle.js.map