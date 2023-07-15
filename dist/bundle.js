/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./styles.css":
/*!**********************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./styles.css ***!
  \**********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/stratosskyengweb-regular.woff */ "./fonts/stratosskyengweb-regular.woff"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
    padding: 0;
    margin: 0;
    border: 0;
    box-sizing: border-box;
}

h1,
h2,
h3,
h4,
h5,
h6 {
    font-size: inherit;
    font-weight: inherit;
}

a {
    color: inherit;
    text-decoration: none;
    font-size: inherit;
    font-weight: inherit;
}

*::before,
*::after {
    box-sizing: border-box;
}

body {
    min-height: 100vh;
    scroll-behavior: smooth;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
    font-family: 'Poppins', sans-serif;
}

* ul,
* ol {
    list-style: none;
}

img {
    max-width: 100%;
    display: block;
}

input,
button,
textarea,
select {
    font: inherit;
    color: inherit;
}

@font-face {
    font-family: StratosSkyeng;
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}

body {
    font-family: 'StratosSkyeng';
    background-color: #004980;
    padding: 22px;
}

h1 {
    color: #004980;
    font-size: 40px;
    line-height: 48px;
}

.button {
    color: #fff;
    display: flex;
    width: 246px;
    height: 48px;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
    background: #7ac100;
    transition: all 0.2s;
    cursor: pointer;
}
.button:hover {
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
}

.button:active {
    opacity: 0.7;
}

.start-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 90vh;
}
.start-box {
    width: 480px;
    height: 459px;
    border-radius: 12px;
    background: #c2f5ff;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.start-box-text {
    text-align: center;
    width: 208px;
    margin: 52px 48px;
}
.start-box-flex {
    display: flex;
    gap: 24px;
    position: relative;
}

.start-box-number {
    display: flex;
    background-color: #fff;
    width: 98px;
    height: 98px;
    border-radius: 12px;
    font-size: 64px;
    line-height: 72px;
    color: #0080c1;
    transition: transform 0.3s;
    justify-content: center;
    align-items: center;
}

.start-box-number:hover {
    transform: scale(1.15);
}
.start-box-radio:checked + .start-box-number {
    background-color: #004980;
    color: #fff;
}

.start-box-radio {
    width: 0;
    height: 0;
    position: absolute;
    opacity: 0;
    z-index: -1;
}

.start-box-button {
    margin: auto;
}
.game {
    max-width: 1024px;
    margin: auto;
    display: none;
}
.game-flex {
    display: flex;
    justify-content: space-between;
    height: 148px;
    width: 100%;
    margin-top: 20px;
}

.game-time {
    color: #fff;
    font-size: 64px;
    line-height: 72px;
    position: relative;
}

.game-time-min,
.game-time-sek {
    font-size: 16px;
    line-height: 32px;
    position: absolute;
    top: -23px;
}

.game-time-sek {
    right: 2%;
}
.game-time-min {
    left: 25%;
}

.game-container {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 15px;
}

.card-container {
    position: relative;
    width: 95px;
    height: 133px;
}
.card-back {
    width: 95px;
    height: 133px;
    border-radius: 4px;
    position: absolute;
    transition: transform 0.7s ease-out;
    backface-visibility: hidden;
}
.card-back img {
    border-radius: 4px;
}

.card-front {
    width: 95px;
    height: 133px;
    border-radius: 4px;
    transition: transform 0.7s ease-out;
    backface-visibility: hidden;
    border-radius: 4px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    position: relative;
    justify-content: center;
    align-items: center;
    transform: rotateY(180deg);
}
.card-container.flipped .card-back {
    transform: rotateY(180deg);
}
.card-container.flipped .card-front {
    transform: rotateY(0deg);
}

.card-value-top {
    position: absolute;
    display: flex;
    flex-direction: column;
    top: 0;
    left: 5%;
    align-items: center;
    justify-content: center;
}
.card-value-top svg {
    margin-top: -2px;
}

.card-value-bottom {
    display: flex;
    flex-direction: column;
    transform: rotate(180deg);
    position: absolute;
    bottom: 0;
    right: 5%;
    align-items: center;
    justify-content: center;
}
.card-value-bottom svg {
    margin-top: -2px;
}

.result {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 2;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.3);
    visibility: hidden;
    opacity: 0;
    transition: all 0.4s ease;
    display: flex;
    align-items: center;
    justify-content: center;
}
.result_modal {
    width: 480px;
    height: 460px;
    background-color: #c2f5ff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
    margin: 0 auto;
}
.result_modal h1 {
    margin: 9px 0 28px 0;
}
.result_modal button {
    margin-bottom: 48px;
}

.result-text {
    font-size: 24px;
    line-height: 32px;
}
.result-time {
    font-size: 64px;
    line-height: 72px;
    margin-top: 10px;
    margin-bottom: 40px;
}
`, "",{"version":3,"sources":["webpack://./styles.css"],"names":[],"mappings":"AAAA;IACI,UAAU;IACV,SAAS;IACT,SAAS;IACT,sBAAsB;AAC1B;;AAEA;;;;;;IAMI,kBAAkB;IAClB,oBAAoB;AACxB;;AAEA;IACI,cAAc;IACd,qBAAqB;IACrB,kBAAkB;IAClB,oBAAoB;AACxB;;AAEA;;IAEI,sBAAsB;AAC1B;;AAEA;IACI,iBAAiB;IACjB,uBAAuB;IACvB,6BAA6B;IAC7B,gBAAgB;IAChB,kCAAkC;AACtC;;AAEA;;IAEI,gBAAgB;AACpB;;AAEA;IACI,eAAe;IACf,cAAc;AAClB;;AAEA;;;;IAII,aAAa;IACb,cAAc;AAClB;;AAEA;IACI,0BAA0B;IAC1B,4CAA+C;AACnD;;AAEA;IACI,4BAA4B;IAC5B,yBAAyB;IACzB,aAAa;AACjB;;AAEA;IACI,cAAc;IACd,eAAe;IACf,iBAAiB;AACrB;;AAEA;IACI,WAAW;IACX,aAAa;IACb,YAAY;IACZ,YAAY;IACZ,uBAAuB;IACvB,mBAAmB;IACnB,mBAAmB;IACnB,mBAAmB;IACnB,oBAAoB;IACpB,eAAe;AACnB;AACA;IACI,yCAAyC;AAC7C;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,YAAY;AAChB;AACA;IACI,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,mBAAmB;IACnB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,iBAAiB;AACrB;AACA;IACI,aAAa;IACb,SAAS;IACT,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,WAAW;IACX,YAAY;IACZ,mBAAmB;IACnB,eAAe;IACf,iBAAiB;IACjB,cAAc;IACd,0BAA0B;IAC1B,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,sBAAsB;AAC1B;AACA;IACI,yBAAyB;IACzB,WAAW;AACf;;AAEA;IACI,QAAQ;IACR,SAAS;IACT,kBAAkB;IAClB,UAAU;IACV,WAAW;AACf;;AAEA;IACI,YAAY;AAChB;AACA;IACI,iBAAiB;IACjB,YAAY;IACZ,aAAa;AACjB;AACA;IACI,aAAa;IACb,8BAA8B;IAC9B,aAAa;IACb,WAAW;IACX,gBAAgB;AACpB;;AAEA;IACI,WAAW;IACX,eAAe;IACf,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;;IAEI,eAAe;IACf,iBAAiB;IACjB,kBAAkB;IAClB,UAAU;AACd;;AAEA;IACI,SAAS;AACb;AACA;IACI,SAAS;AACb;;AAEA;IACI,aAAa;IACb,qCAAqC;IACrC,SAAS;AACb;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,aAAa;AACjB;AACA;IACI,WAAW;IACX,aAAa;IACb,kBAAkB;IAClB,kBAAkB;IAClB,mCAAmC;IACnC,2BAA2B;AAC/B;AACA;IACI,kBAAkB;AACtB;;AAEA;IACI,WAAW;IACX,aAAa;IACb,kBAAkB;IAClB,mCAAmC;IACnC,2BAA2B;IAC3B,kBAAkB;IAClB,sBAAsB;IACtB,aAAa;IACb,sBAAsB;IACtB,kBAAkB;IAClB,uBAAuB;IACvB,mBAAmB;IACnB,0BAA0B;AAC9B;AACA;IACI,0BAA0B;AAC9B;AACA;IACI,wBAAwB;AAC5B;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,sBAAsB;IACtB,MAAM;IACN,QAAQ;IACR,mBAAmB;IACnB,uBAAuB;AAC3B;AACA;IACI,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,yBAAyB;IACzB,kBAAkB;IAClB,SAAS;IACT,SAAS;IACT,mBAAmB;IACnB,uBAAuB;AAC3B;AACA;IACI,gBAAgB;AACpB;;AAEA;IACI,eAAe;IACf,OAAO;IACP,MAAM;IACN,UAAU;IACV,WAAW;IACX,aAAa;IACb,oCAAoC;IACpC,kBAAkB;IAClB,UAAU;IACV,yBAAyB;IACzB,aAAa;IACb,mBAAmB;IACnB,uBAAuB;AAC3B;AACA;IACI,YAAY;IACZ,aAAa;IACb,yBAAyB;IACzB,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,mBAAmB;IACnB,cAAc;AAClB;AACA;IACI,oBAAoB;AACxB;AACA;IACI,mBAAmB;AACvB;;AAEA;IACI,eAAe;IACf,iBAAiB;AACrB;AACA;IACI,eAAe;IACf,iBAAiB;IACjB,gBAAgB;IAChB,mBAAmB;AACvB","sourcesContent":["* {\r\n    padding: 0;\r\n    margin: 0;\r\n    border: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n    font-size: inherit;\r\n    font-weight: inherit;\r\n}\r\n\r\na {\r\n    color: inherit;\r\n    text-decoration: none;\r\n    font-size: inherit;\r\n    font-weight: inherit;\r\n}\r\n\r\n*::before,\r\n*::after {\r\n    box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n    min-height: 100vh;\r\n    scroll-behavior: smooth;\r\n    text-rendering: optimizeSpeed;\r\n    line-height: 1.5;\r\n    font-family: 'Poppins', sans-serif;\r\n}\r\n\r\n* ul,\r\n* ol {\r\n    list-style: none;\r\n}\r\n\r\nimg {\r\n    max-width: 100%;\r\n    display: block;\r\n}\r\n\r\ninput,\r\nbutton,\r\ntextarea,\r\nselect {\r\n    font: inherit;\r\n    color: inherit;\r\n}\r\n\r\n@font-face {\r\n    font-family: StratosSkyeng;\r\n    src: url(./fonts/stratosskyengweb-regular.woff);\r\n}\r\n\r\nbody {\r\n    font-family: 'StratosSkyeng';\r\n    background-color: #004980;\r\n    padding: 22px;\r\n}\r\n\r\nh1 {\r\n    color: #004980;\r\n    font-size: 40px;\r\n    line-height: 48px;\r\n}\r\n\r\n.button {\r\n    color: #fff;\r\n    display: flex;\r\n    width: 246px;\r\n    height: 48px;\r\n    justify-content: center;\r\n    align-items: center;\r\n    border-radius: 12px;\r\n    background: #7ac100;\r\n    transition: all 0.2s;\r\n    cursor: pointer;\r\n}\r\n.button:hover {\r\n    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n.button:active {\r\n    opacity: 0.7;\r\n}\r\n\r\n.start-container {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    height: 90vh;\r\n}\r\n.start-box {\r\n    width: 480px;\r\n    height: 459px;\r\n    border-radius: 12px;\r\n    background: #c2f5ff;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\n.start-box-text {\r\n    text-align: center;\r\n    width: 208px;\r\n    margin: 52px 48px;\r\n}\r\n.start-box-flex {\r\n    display: flex;\r\n    gap: 24px;\r\n    position: relative;\r\n}\r\n\r\n.start-box-number {\r\n    display: flex;\r\n    background-color: #fff;\r\n    width: 98px;\r\n    height: 98px;\r\n    border-radius: 12px;\r\n    font-size: 64px;\r\n    line-height: 72px;\r\n    color: #0080c1;\r\n    transition: transform 0.3s;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.start-box-number:hover {\r\n    transform: scale(1.15);\r\n}\r\n.start-box-radio:checked + .start-box-number {\r\n    background-color: #004980;\r\n    color: #fff;\r\n}\r\n\r\n.start-box-radio {\r\n    width: 0;\r\n    height: 0;\r\n    position: absolute;\r\n    opacity: 0;\r\n    z-index: -1;\r\n}\r\n\r\n.start-box-button {\r\n    margin: auto;\r\n}\r\n.game {\r\n    max-width: 1024px;\r\n    margin: auto;\r\n    display: none;\r\n}\r\n.game-flex {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    height: 148px;\r\n    width: 100%;\r\n    margin-top: 20px;\r\n}\r\n\r\n.game-time {\r\n    color: #fff;\r\n    font-size: 64px;\r\n    line-height: 72px;\r\n    position: relative;\r\n}\r\n\r\n.game-time-min,\r\n.game-time-sek {\r\n    font-size: 16px;\r\n    line-height: 32px;\r\n    position: absolute;\r\n    top: -23px;\r\n}\r\n\r\n.game-time-sek {\r\n    right: 2%;\r\n}\r\n.game-time-min {\r\n    left: 25%;\r\n}\r\n\r\n.game-container {\r\n    display: grid;\r\n    grid-template-columns: repeat(6, 1fr);\r\n    gap: 15px;\r\n}\r\n\r\n.card-container {\r\n    position: relative;\r\n    width: 95px;\r\n    height: 133px;\r\n}\r\n.card-back {\r\n    width: 95px;\r\n    height: 133px;\r\n    border-radius: 4px;\r\n    position: absolute;\r\n    transition: transform 0.7s ease-out;\r\n    backface-visibility: hidden;\r\n}\r\n.card-back img {\r\n    border-radius: 4px;\r\n}\r\n\r\n.card-front {\r\n    width: 95px;\r\n    height: 133px;\r\n    border-radius: 4px;\r\n    transition: transform 0.7s ease-out;\r\n    backface-visibility: hidden;\r\n    border-radius: 4px;\r\n    background-color: #fff;\r\n    display: flex;\r\n    flex-direction: column;\r\n    position: relative;\r\n    justify-content: center;\r\n    align-items: center;\r\n    transform: rotateY(180deg);\r\n}\r\n.card-container.flipped .card-back {\r\n    transform: rotateY(180deg);\r\n}\r\n.card-container.flipped .card-front {\r\n    transform: rotateY(0deg);\r\n}\r\n\r\n.card-value-top {\r\n    position: absolute;\r\n    display: flex;\r\n    flex-direction: column;\r\n    top: 0;\r\n    left: 5%;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n.card-value-top svg {\r\n    margin-top: -2px;\r\n}\r\n\r\n.card-value-bottom {\r\n    display: flex;\r\n    flex-direction: column;\r\n    transform: rotate(180deg);\r\n    position: absolute;\r\n    bottom: 0;\r\n    right: 5%;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n.card-value-bottom svg {\r\n    margin-top: -2px;\r\n}\r\n\r\n.result {\r\n    position: fixed;\r\n    left: 0;\r\n    top: 0;\r\n    z-index: 2;\r\n    width: 100%;\r\n    height: 100vh;\r\n    background-color: rgba(0, 0, 0, 0.3);\r\n    visibility: hidden;\r\n    opacity: 0;\r\n    transition: all 0.4s ease;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n.result_modal {\r\n    width: 480px;\r\n    height: 460px;\r\n    background-color: #c2f5ff;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    border-radius: 12px;\r\n    margin: 0 auto;\r\n}\r\n.result_modal h1 {\r\n    margin: 9px 0 28px 0;\r\n}\r\n.result_modal button {\r\n    margin-bottom: 48px;\r\n}\r\n\r\n.result-text {\r\n    font-size: 24px;\r\n    line-height: 32px;\r\n}\r\n.result-time {\r\n    font-size: 64px;\r\n    line-height: 72px;\r\n    margin-top: 10px;\r\n    margin-bottom: 40px;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./styles.css":
/*!********************!*\
  !*** ./styles.css ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!./node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./components/deck.ts":
/*!****************************!*\
  !*** ./components/deck.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Deck)
/* harmony export */ });
const SUITES = [
    {
        name: 'clubs',
        top: `<svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path id="Union" fill-rule="evenodd" clip-rule="evenodd" d="M3.05901 2.82608C3.32139 2.45163 3.73053 1.65105 3.73053 1.08126C3.73053 0.445569 3.3832 0 2.87799 0C2.30963 0 1.99387 0.453431 1.99387 1.08126C1.99387 1.53767 2.38603 2.36275 2.64869 2.77927C2.26365 2.50327 1.44609 2.06883 1.00843 2.06883C0.422891 2.06883 0 2.40738 0 3.01679C0 3.55849 0.415559 3.9309 1.00843 3.9309C1.56683 3.9309 2.38076 3.4356 2.71152 3.15358L1.92974 6.00001C2.67474 5.71695 3.14775 5.71148 3.85936 6.00001L3.01819 3.15137C3.32658 3.42501 4.14546 3.9309 4.71612 3.9309C5.309 3.9309 5.72456 3.55849 5.72456 3.01679C5.72456 2.40738 5.30167 2.06883 4.71612 2.06883C4.26162 2.06883 3.41511 2.54819 3.05901 2.82608Z" fill="black"/>
    </svg>`,
        middle: `<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path id="Union" fill-rule="evenodd" clip-rule="evenodd" d="M13.3189 11.7767C14.4121 10.2172 16.118 6.88008 16.118 4.5052C16.118 1.85652 14.6708 0 12.5657 0C10.1976 0 8.88194 1.88928 8.88194 4.5052C8.88194 6.4076 10.5171 9.84722 11.6115 11.5821C10.0078 10.4322 6.59985 8.62089 4.77574 8.62089C2.336 8.62089 0.573975 10.0315 0.573975 12.5707C0.573975 14.8278 2.30545 16.3795 4.77574 16.3795C7.10192 16.3795 10.4924 14.3165 11.8711 13.1414L8.61407 24.9999C11.7182 23.8205 13.6891 23.7977 16.6541 24.9999L13.1494 13.1312C14.4342 14.2714 17.8464 16.3795 20.2243 16.3795C22.6946 16.3795 24.4261 14.8278 24.4261 12.5707C24.4261 10.0315 22.6641 8.62089 20.2243 8.62089C18.3302 8.62089 14.8022 10.619 13.3189 11.7767Z" fill="black"/>
    </svg>`,
    },
    {
        name: 'diamonds',
        top: `<svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path id="Rectangle 5" d="M3.37476 0L6.09331 3.3832L3.37476 6.74951L0.656203 3.3832L3.37476 0Z" fill="#FF4545"/>
    </svg>`,
        middle: `<svg width="22" height="26" viewBox="0 0 22 26" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path id="Rectangle 4" d="M11 0.000244141L21.2705 12.7817L11 25.4994L0.729502 12.7817L11 0.000244141Z" fill="#FF4545"/>
    </svg>`,
    },
    {
        name: 'hearts',
        top: `<svg width="7" height="6" viewBox="0 0 7 6" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path id="Union" fill-rule="evenodd" clip-rule="evenodd" d="M3.52144 5.99283C3.41073 5.90911 3.29902 5.82519 3.18695 5.741C1.64827 4.58505 0.0410603 3.37762 -2.10256e-08 1.94109C0.0441363 0.485181 1.05927 -0.00012207 1.942 -0.00012207C2.4587 -0.00012207 3.05039 0.287214 3.49094 0.768815C3.88472 0.287214 4.42642 -0.00012207 4.94312 -0.00012207C5.82585 -0.00012207 6.92925 0.48518 6.97339 1.94109C6.93077 3.43199 5.28351 4.67612 3.7001 5.87203C3.64674 5.91232 3.59346 5.95256 3.54032 5.99276C3.53719 5.99518 3.53406 5.99759 3.5309 5.99999C3.53088 5.99997 3.53085 5.99995 3.53083 5.99993C3.53081 5.99995 3.53078 5.99997 3.53076 5.99999C3.52764 5.99761 3.52453 5.99523 3.52144 5.99283Z" fill="#FF4545"/>
    </svg>
    `,
        middle: `<svg width="30" height="26" viewBox="0 0 30 26" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path id="Union" fill-rule="evenodd" clip-rule="evenodd" d="M14.53 3.27849C12.6964 1.22519 10.2335 0.000124665 8.08277 0.000124664C4.40879 0.000124663 0.183699 2.06893 -8.96305e-08 8.27535C0.170897 14.3992 6.86026 19.5464 13.2644 24.474C13.7441 24.8432 14.2223 25.2111 14.696 25.5781C14.696 25.5781 14.696 25.5781 14.696 25.578C14.6961 25.5781 14.6961 25.5781 14.6961 25.5781C14.9305 25.3965 15.1655 25.2147 15.4009 25.0326C21.9912 19.9345 28.8473 14.6309 29.0247 8.27535C28.841 2.06893 24.2485 0.00012207 20.5745 0.00012207C18.4238 0.00012207 16.169 1.22519 14.53 3.27849Z" fill="#FF4545"/>
    </svg>
    `,
    },
    {
        name: 'spades',
        top: `<svg width="7" height="6" viewBox="0 0 7 6" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path id="Union" fill-rule="evenodd" clip-rule="evenodd" d="M3.45195 0.00704546C3.56266 0.0907628 3.67437 0.174685 3.78644 0.25888C5.32512 1.41482 6.93233 2.62226 6.97339 4.05879C6.92925 5.5147 5.91412 6 5.03139 6C4.51469 6 3.923 5.71266 3.48245 5.23106C3.08867 5.71266 2.54697 6 2.03027 6C1.14754 6 0.0441366 5.5147 1.80544e-07 4.05879C0.0426148 2.56789 1.68988 1.32376 3.27329 0.127852C3.32665 0.0875551 3.37993 0.0473134 3.43307 0.00711889C3.4362 0.00469942 3.43933 0.002289 3.44249 -0.000111393C3.44251 -9.32734e-05 3.44253 -7.46767e-05 3.44256 -5.65569e-05C3.44258 -7.46767e-05 3.44261 -9.27965e-05 3.44263 -0.000110916C3.44575 0.00226516 3.44886 0.00465078 3.45195 0.00704546Z" fill="black"/>
    </svg>
    `,
        middle: `<svg width="30" height="26" viewBox="0 0 30 26" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path id="Union" fill-rule="evenodd" clip-rule="evenodd" d="M14.4946 22.7216C16.3283 24.7749 18.7912 26 20.9419 26C24.6159 26 28.841 23.9312 29.0247 17.7248C28.8538 11.6009 22.1644 6.45377 15.7603 1.52608C15.2805 1.15693 14.8024 0.789019 14.3287 0.422019C14.3287 0.42204 14.3287 0.422059 14.3286 0.42208C14.3286 0.422061 14.3286 0.42204 14.3286 0.422021C14.0942 0.603615 13.8591 0.785433 13.6238 0.967515C7.03343 6.06558 0.177371 11.3692 6.49169e-06 17.7248C0.183705 23.9312 4.77619 26 8.45018 26C10.6009 26 12.8557 24.7749 14.4946 22.7216Z" fill="black"/>
    </svg>
    `,
    },
];
const VALUES = ['6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
class Deck {
    constructor(cards = getDeck()) {
        this.card = cards;
    }
}
class Card {
    constructor(suit, value) {
        this.suit = suit;
        this.value = value;
    }
}
function getDeck() {
    return SUITES.flatMap((suit) => {
        return VALUES.map((value) => {
            return new Card(suit, value);
        });
    });
}


/***/ }),

/***/ "./fonts/stratosskyengweb-regular.woff":
/*!*********************************************!*\
  !*** ./fonts/stratosskyengweb-regular.woff ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d7d99bd522cf2d77ce4a.woff";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./styles.css");
/* harmony import */ var _components_deck_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/deck.ts */ "./components/deck.ts");


let gameLevel;
const gamecontainer = document.querySelector('.game');
const timeValue = document.getElementById('timeValue');
const deck = Object.values(new _components_deck_ts__WEBPACK_IMPORTED_MODULE_1__["default"]()).flat();
let newDeck = [];
let firstCard;
let secondCard;
let firstCardValue = '';
let secondCardValue = '';
let moves = 0;
let minutes = 0;
let seconds = 0;
let interval;
let secondsValue;
let minutesValue;
function renderStartPage() {
    const startContainer = document.getElementById('start');
    const startButton = document.querySelector('.start-box-button');
    const menuOptions = document.querySelectorAll('.start-box-radio');
    for (const menuOption of menuOptions) {
        startButton.addEventListener('click', (event) => {
            event.preventDefault();
            if (menuOption) {
                if (menuOption.checked) {
                    gameLevel = menuOption.value;
                    startContainer.style.display = 'none';
                    gamecontainer.style.display = 'block';
                    renderGamePlay();
                }
            }
        });
    }
}
function renderGamePlay() {
    getNewDeck(gameLevel);
    setTimeout(() => {
        interval = setInterval(() => {
            timeGenerator();
        }, 1000);
    }, 5000);
    const gamecontainer = document.querySelector('.game-container');
    gamecontainer.innerHTML = newDeck
        .map((card) => {
        return ` 
      <div class="card-container" data-value ='${card.suit.name + card.value}'>
      <div class="card-back">
      <img src="./static/cover.jpg"></img>
      </div>
        <div class="card-front">
            <div class="card-value-top">
          <p>${card.value}</p>
        ${card.suit.top}
            </div>
        ${card.suit.middle}
            <div class="card-value-bottom">
          <p>${card.value}</p>
        ${card.suit.top}
            </div>
        </div>
      </div>`;
    })
        .join('');
    const cards = document.querySelectorAll('.card-container');
    cards.forEach((card) => {
        card.classList.add('flipped');
        setTimeout(() => {
            card.classList.remove('flipped');
            card.addEventListener('click', () => {
                if (!card.classList.contains('matched')) {
                    card.classList.add('flipped');
                    if (!firstCard) {
                        firstCard = card;
                        firstCardValue = card.getAttribute('data-value');
                    }
                    else {
                        secondCard = card;
                        secondCardValue = card.getAttribute('data-value');
                        if (firstCardValue === secondCardValue) {
                            firstCard = [];
                            secondCard = null;
                            moves += 1;
                            let movesString = moves.toString();
                            if (movesString == gameLevel) {
                                setTimeout(() => {
                                    endGame(true, cards);
                                }, 1000);
                            }
                        }
                        else {
                            setTimeout(() => {
                                firstCard = [];
                                secondCard = null;
                                endGame(false, cards);
                            }, 1500);
                        }
                    }
                }
            });
        }, 5000);
    });
    const buttonElement = document.getElementById('button');
    buttonElement.addEventListener('click', () => {
        location.reload();
    });
}
renderStartPage();
function getNewDeck(gameLevel) {
    const tempDeck = [];
    for (let i = 0; i < gameLevel; i++) {
        const randomIndex = Math.floor(Math.random() * deck.length);
        tempDeck.push(deck[randomIndex]);
    }
    newDeck = [...tempDeck, ...tempDeck];
    for (let i = newDeck.length - 1; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1));
        [newDeck[i], newDeck[randomIndex]] = [newDeck[randomIndex], newDeck[i]];
    }
    return newDeck;
}
const timeGenerator = () => {
    seconds += 1;
    if (seconds >= 59) {
        minutes += 1;
        seconds = 0;
    }
    secondsValue = seconds < 10 ? `0${seconds.toString()}` : seconds.toString();
    minutesValue = minutes < 10 ? `0${minutes.toString()}` : minutes.toString();
    timeValue.innerHTML = `${minutesValue}:${secondsValue}`;
};
function endGame(win, cards) {
    if (!win) {
        cards.forEach((card) => {
            card.classList.remove('flipped');
        });
    }
    clearInterval(interval);
    const resultModal = document.querySelector('.result');
    resultModal.style.visibility = 'visible';
    resultModal.style.opacity = '1';
    resultModal.innerHTML = `<div class="result_modal">
        <img src="${win ? './static/celebration.png' : './static/dead.png'}" alt="no">
        <h1>Вы ${win ? 'выиграли' : 'проиграли'}</h1>
        <p class="result-text">Затраченное время</p>
        <p class="result-time">${minutesValue}:${secondsValue}</p>
        <button id="endButton" class="button">Играть снова</button>
    </div>`;
    document.getElementById('endButton').addEventListener('click', () => {
        location.reload();
    });
}

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map