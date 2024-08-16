/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
    font-family: Arial, Helvetica, sans-serif;
}

/* Play game screen */
#play_game_container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}

#play_game_form {
    display: flex;
    flex-direction: column;
    align-items: center;
}

#play_game_form>input[type="submit"] {
    margin: 15px;
    font-size: 18px;
    height: 40px;
    width: 150px;
}

#play_game_form>input[type="number"] {
    margin: 15px;
    font-size: 18px;
    height: 30px;
    width: 50px;
}

/* Boards container */

#boards-container {
    justify-content: space-evenly;
}

.board {
    display: grid;
    grid-template-columns: repeat(10, 60px);
    grid-template-rows: repeat(10, 60px);
}

.board>div {
    display: flex;
    align-items: center;
    justify-content: center;
    background: none;
    border: 2px solid black;
    margin: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
    height: 60px;
    width: 60px;
    text-decoration: none;
}

.board>div:hover {
    background-color: rgb(2, 2, 2, 0.2);
}

.ship {
    background-color: rgb(77, 51, 34);
    height: 50px;
    width: 50px;
}
.hit-ship {
    background-color: #d14444;
    height: 50px;
    width: 50px;
}

.hit-square {
    text-align: center;
    font-size: 25px;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,yCAAyC;AAC7C;;AAEA,qBAAqB;AACrB;IACI,aAAa;IACb,sBAAsB;IACtB,8BAA8B;IAC9B,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,YAAY;IACZ,eAAe;IACf,YAAY;IACZ,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,eAAe;IACf,YAAY;IACZ,WAAW;AACf;;AAEA,qBAAqB;;AAErB;IACI,6BAA6B;AACjC;;AAEA;IACI,aAAa;IACb,uCAAuC;IACvC,oCAAoC;AACxC;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,gBAAgB;IAChB,uBAAuB;IACvB,SAAS;IACT,aAAa;IACb,eAAe;IACf,gBAAgB;IAChB,YAAY;IACZ,WAAW;IACX,qBAAqB;AACzB;;AAEA;IACI,mCAAmC;AACvC;;AAEA;IACI,iCAAiC;IACjC,YAAY;IACZ,WAAW;AACf;AACA;IACI,yBAAyB;IACzB,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,kBAAkB;IAClB,eAAe;AACnB","sourcesContent":["* {\n    font-family: Arial, Helvetica, sans-serif;\n}\n\n/* Play game screen */\n#play_game_container {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center;\n}\n\n#play_game_form {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n#play_game_form>input[type=\"submit\"] {\n    margin: 15px;\n    font-size: 18px;\n    height: 40px;\n    width: 150px;\n}\n\n#play_game_form>input[type=\"number\"] {\n    margin: 15px;\n    font-size: 18px;\n    height: 30px;\n    width: 50px;\n}\n\n/* Boards container */\n\n#boards-container {\n    justify-content: space-evenly;\n}\n\n.board {\n    display: grid;\n    grid-template-columns: repeat(10, 60px);\n    grid-template-rows: repeat(10, 60px);\n}\n\n.board>div {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background: none;\n    border: 2px solid black;\n    margin: 0;\n    font: inherit;\n    cursor: pointer;\n    outline: inherit;\n    height: 60px;\n    width: 60px;\n    text-decoration: none;\n}\n\n.board>div:hover {\n    background-color: rgb(2, 2, 2, 0.2);\n}\n\n.ship {\n    background-color: rgb(77, 51, 34);\n    height: 50px;\n    width: 50px;\n}\n.hit-ship {\n    background-color: #d14444;\n    height: 50px;\n    width: 50px;\n}\n\n.hit-square {\n    text-align: center;\n    font-size: 25px;\n}"],"sourceRoot":""}]);
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

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/DOMLogic/attackSquare.js":
/*!**************************************!*\
  !*** ./src/DOMLogic/attackSquare.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   attackSquare: () => (/* binding */ attackSquare),
/* harmony export */   computerAttack: () => (/* binding */ computerAttack)
/* harmony export */ });
/* harmony import */ var _endGame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./endGame */ "./src/DOMLogic/endGame.js");
/* harmony import */ var _loadBoard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loadBoard */ "./src/DOMLogic/loadBoard.js");
/* harmony import */ var _setupGame__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./setupGame */ "./src/DOMLogic/setupGame.js");




function checkEndGame(board, winner) {
    if (board.allShipsSunk() === true) {
        (0,_endGame__WEBPACK_IMPORTED_MODULE_0__.endGame)(winner)
    }
}

function isInArray(value, array) {
    const stringArr = array.map(item => item.toString())
    const stringVal = value.toString()
    return stringArr.indexOf(stringVal) > -1;
}

const computerAttack = (game) => {
    const x = Math.floor(Math.random() * (0 + 9))
    const y = Math.floor(Math.random() * (0 + 9))
    // console.log(isInArray([7, 0].toString(), game.computer.gameBoard.receivedAttacks))
    if (!isInArray([x, y], game.playerOne.gameBoard.receivedAttacks )) {
        game.playerOne.gameBoard.receiveAttack([x, y])
        ;(0,_loadBoard__WEBPACK_IMPORTED_MODULE_1__.loadBoardToDOM)('#player-one-board', game.playerOne.gameBoard, game)
        _setupGame__WEBPACK_IMPORTED_MODULE_2__.playerTurn.switchTurn()
        checkEndGame(game.playerOne.gameBoard, 'Player Two')
    } else {
        computerAttack(game)
    }
}

const attackSquare = (button, board, coordinates, game, id) => {
    if (id !== '#player-one-board') {
        button.addEventListener('click', () => {
            if (_setupGame__WEBPACK_IMPORTED_MODULE_2__.playerTurn.turn === 1) {
                if (!isInArray(coordinates, game.computer.gameBoard.receivedAttacks)) {
                    board.receiveAttack(coordinates)
                    ;(0,_loadBoard__WEBPACK_IMPORTED_MODULE_1__.loadBoardToDOM)('#player-two-board', board, game)
                    _setupGame__WEBPACK_IMPORTED_MODULE_2__.playerTurn.switchTurn()
                    checkEndGame(board, "Player One")

                    computerAttack(game)
                }
            }
        })
    }
}


/***/ }),

/***/ "./src/DOMLogic/endGame.js":
/*!*********************************!*\
  !*** ./src/DOMLogic/endGame.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   endGame: () => (/* binding */ endGame)
/* harmony export */ });
/* harmony import */ var _setupGame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setupGame */ "./src/DOMLogic/setupGame.js");


const endGame = (winner) => {
    const boardContainer = document.querySelector("#boards-container")
    boardContainer.style.display = 'none'
    const endGameH1 = document.querySelector('#end_game_screen')
    endGameH1.style.display = "flex"
    endGameH1.textContent = winner + ' has won the game'
}

/***/ }),

/***/ "./src/DOMLogic/loadBoard.js":
/*!***********************************!*\
  !*** ./src/DOMLogic/loadBoard.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadBoardToDOM: () => (/* binding */ loadBoardToDOM)
/* harmony export */ });
/* harmony import */ var _endGame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./endGame */ "./src/DOMLogic/endGame.js");
/* harmony import */ var _attackSquare__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./attackSquare */ "./src/DOMLogic/attackSquare.js");



function checkEndGame(board) {
    if (board.allShipsSunk() === true) {
        (0,_endGame__WEBPACK_IMPORTED_MODULE_0__.endGame)()
    }
}

const loadBoardToDOM = (id, board, game) => {
    const playerBoard = document.querySelector(id)

    playerBoard.innerHTML = ''
    playerBoard.style.setProperty('--grid-size', board.board.length)

    board.board.forEach((row, rowIndex) => {
        row.forEach((node, colIndex) => {
            const cellButton = document.createElement('div')

            ;(0,_attackSquare__WEBPACK_IMPORTED_MODULE_1__.attackSquare)(cellButton, board, [rowIndex, colIndex], game, id)

            switch (node.type) {
                case "water":
                    if (node.hit == true) {
                        const innerSquare = document.createElement('p')
                        innerSquare.classList.add("hit-square")
                        innerSquare.textContent = 'X'

                        cellButton.appendChild(innerSquare)
                    }
                    break;
                default:
                    if (node.hit == true) {
                        const innerSquare = document.createElement('div')
                        innerSquare.classList.add('hit-ship')

                        cellButton.appendChild(innerSquare)

                    } else {
                        if(id !== '#player-two-board'){
                        const innerSquare = document.createElement('div')
                        innerSquare.classList.add('ship')

                        cellButton.appendChild(innerSquare)
                    }    
                    }
                    break;
            }

            playerBoard.appendChild(cellButton)
        })
    })
}

/***/ }),

/***/ "./src/DOMLogic/placeShip.js":
/*!***********************************!*\
  !*** ./src/DOMLogic/placeShip.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   placeShipDOM: () => (/* binding */ placeShipDOM)
/* harmony export */ });
const checkPlacement = (direction, row, column, length, board) => {
    // Check if the ship placement goes out of bounds based on direction
    switch (direction) {
        case "north":
            if (row - (length - 1) < 0) throw new Error("Ship placement goes out of bounds");
            break;
        case "east":
            if (column + (length - 1) >= 10) throw new Error("Ship placement goes out of bounds");
            break;
        case "south":
            if (row + (length - 1) >= 10) throw new Error("Ship placement goes out of bounds");
            break;
        case "west":
            if (column - (length - 1) < 0) throw new Error("Ship placement goes out of bounds");
            break;
        default:
            throw new Error("Invalid direction");
    }

    for (let i = 0; i < length; i++) {
        if (board[row][column].type !== "water") {
            throw new Error("Ship placement overlaps with another ship");
        }

        // Adjust row and column based on the direction
        switch (direction) {
            case "north":
                row--;
                break;
            case "east":
                column++;
                break;
            case "south":
                row++;
                break;
            case "west":
                column--;
                break;
        }
    }
}

const getSquares = (shipToBePlaced, row, col, rotation) => {
    const squares = []
    for (let i = 0; i < shipToBePlaced; i++) {
        const coord = [row, col]
        switch (rotation) {
            case "north":
                coord[0] = coord[0] - i
                break;
            case "east":
                coord[1] = coord[1] + i
                break;
            case "south":
                coord[0] = coord[0] + i
                break;
            case "west":
                coord[1] = coord[1] - i
                break;
        }
        squares.push(`${coord[0]}_${coord[1]}`)
    }
    return squares
}

const placeShipDOM = (game) => {
    return new Promise((resolve, reject) => {
        const playerBoard = document.querySelector('#player-one-board')
        const board = game.playerOne.gameBoard

        const shipLengths = [4, 3, 3, 2, 2, 2, 1, 1, 1, 1]
        // const shipLengths = [4, 2]
        let shipIndex = 0
        let shipToBePlaced = shipLengths[shipIndex]

        const rotations = ['north', 'east', 'south', 'west']
        let currentIndex = 0
        let rotation = rotations[currentIndex]

        // change rotation
        document.addEventListener('keypress', function (event) {
            if (event.code === 'KeyR') {
                currentIndex = (currentIndex + 1) % rotations.length;
                rotation = rotations[currentIndex];
            }
        })

        // Create temporary board Display
        board.board.forEach((row, rowIndex) => {
            row.forEach((node, colIndex) => {
                const cellButton = document.createElement('div')
                cellButton.id = `l${rowIndex}_${colIndex}`
                const innerSquare = document.createElement('div')
                innerSquare.classList.add('ship')
                innerSquare.style.backgroundColor = 'rgb(77, 51, 34, 0)'
                cellButton.appendChild(innerSquare)

                // Add event listener for showing you are hovering above a square
                cellButton.addEventListener('mouseenter', () => {
                    try {
                        checkPlacement(rotation, rowIndex, colIndex, shipToBePlaced, board.board)
                        const squares = getSquares(shipToBePlaced, rowIndex, colIndex, rotation)
                        squares.forEach((item) => {
                            const row = Number(item.charAt(0))
                            const col = Number(item.charAt(2))
                            if (board.board[row][col].type == "water") {
                                const square = document.querySelector(`#l${item}`)
                                square.firstElementChild.style.backgroundColor = 'rgb(77, 51, 34, 0.5)'
                            }
                        })

                        // Remove the styling that shows you are hovering
                        cellButton.addEventListener('mouseleave', () => {
                            squares.forEach((item) => {
                                const row = Number(item.charAt(0))
                                const col = Number(item.charAt(2))
                                if (board.board[row][col].type === 'water') {
                                    const square = document.querySelector(`#l${item}`)
                                    square.firstElementChild.style.backgroundColor = 'rgb(77, 51, 34, 0)'
                                }
                            })
                        })
                    } catch (e) {
                        document.querySelector('#error_display').textContent = e
                        setTimeout(() => {
                            document.querySelector('#error_display').textContent = ''
                        }, 2000);
                    }
                })


                // Place a ship onto the gameboard.board object from event listener
                cellButton.addEventListener('click', () => {
                    // Try placing the ship
                    try {
                        if (shipIndex < shipLengths.length - 1) {
                            board.placeShip([rowIndex, colIndex], shipToBePlaced, rotation)
                            const squares = []
                            for (let i = 1; i < shipToBePlaced; i++) {
                                const coord = [rowIndex, colIndex]
                                switch (rotation) {
                                    case "north":
                                        coord[0] = coord[0] - i
                                        break;
                                    case "east":
                                        coord[1] = coord[1] + i
                                        break;
                                    case "south":
                                        coord[0] = coord[0] + i
                                        break;
                                    case "west":
                                        coord[1] = coord[1] - i
                                        break;
                                }
                                squares.push(`${coord[0]}_${coord[1]}`)
                            }
                            squares.forEach((item) => {
                                const square = document.querySelector(`#l${item}`)
                                square.firstElementChild.style.backgroundColor = 'rgb(77, 51, 34)'
                            })

                            shipIndex++
                            shipToBePlaced = shipLengths[shipIndex]
                            cellButton.firstElementChild.style.backgroundColor = 'rgb(77, 51, 34)'
                        } else {
                            board.placeShip([rowIndex, colIndex], shipToBePlaced, rotation)
                            resolve()
                        }
                    }
                    // If the ship is placed out of bounds remove the selected block and dont place ship
                    catch (e) {
                        document.querySelector('#error_display').textContent = e
                        setTimeout(() => {
                            document.querySelector('#error_display').textContent = ''
                        }, 2000);
                    }
                })
                playerBoard.appendChild(cellButton)
            })
        })
    })
}



/***/ }),

/***/ "./src/DOMLogic/setupGame.js":
/*!***********************************!*\
  !*** ./src/DOMLogic/setupGame.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   displayBoard: () => (/* binding */ displayBoard),
/* harmony export */   playerTurn: () => (/* binding */ playerTurn)
/* harmony export */ });
/* harmony import */ var _loadBoard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadBoard */ "./src/DOMLogic/loadBoard.js");
/* harmony import */ var _placeShip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./placeShip */ "./src/DOMLogic/placeShip.js");



const playerTurn = {
    turn: 1,
    switchTurn: function () {
        if (this.turn === 1) {
            this.turn = 2
        } else {
            this.turn = 1
        }
    },
    setTurnToOne: function () {
        this.turn = 1
    }
}


const displayBoard = (game) => {
    // First populate board, later need to work on making the player be able to place ships
    document.querySelector('#boards-container').style.display = 'flex'
    function loadGames() {
        document.querySelector('#player-one-board').innerHTML = ''
        document.querySelector('#player-two-board').innerHTML = ''
        
        ;(0,_loadBoard__WEBPACK_IMPORTED_MODULE_0__.loadBoardToDOM)('#player-two-board', game.computer.gameBoard, game)
        ;(0,_loadBoard__WEBPACK_IMPORTED_MODULE_0__.loadBoardToDOM)('#player-one-board', game.playerOne.gameBoard, game)

    }

    (0,_placeShip__WEBPACK_IMPORTED_MODULE_1__.placeShipDOM)(game).then(() => {
        // Once all ships are placed, load the game
        loadGames();

        // Example: Place computer ships and start the game
        game.computer.gameBoard.placeShip([7, 0], 2, 'north');
        game.computer.gameBoard.placeShip([3, 0], 2, 'east');
        game.computer.gameBoard.placeShip([3, 4], 4, 'east');
        game.computer.gameBoard.placeShip([0, 0], 3, 'south');

    });
}


/***/ }),

/***/ "./src/DOMLogic/startGame.js":
/*!***********************************!*\
  !*** ./src/DOMLogic/startGame.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initializeGame: () => (/* binding */ initializeGame)
/* harmony export */ });
/* harmony import */ var _gameLogic_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../gameLogic/game */ "./src/gameLogic/game.js");
/* harmony import */ var _setupGame__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setupGame */ "./src/DOMLogic/setupGame.js");




const initializeGame = () => {
    const form = document.querySelector('#play_game_form')
    form.addEventListener("submit", (event) => {
        event.preventDefault()

        // const size = parseInt(document.querySelector("#game_size").value);

        const game = new _gameLogic_game__WEBPACK_IMPORTED_MODULE_0__.Game()

        document.querySelector('#play_game_container').style.display = 'none'
        ;(0,_setupGame__WEBPACK_IMPORTED_MODULE_1__.displayBoard)(game)

    })
}


/***/ }),

/***/ "./src/gameLogic/game.js":
/*!*******************************!*\
  !*** ./src/gameLogic/game.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Game: () => (/* binding */ Game)
/* harmony export */ });
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ "./src/gameLogic/player.js");


class Game {
    constructor(){
        this.playerOne = new _player__WEBPACK_IMPORTED_MODULE_0__.Player(false, 10, 1, false)
        this.computer = new _player__WEBPACK_IMPORTED_MODULE_0__.Player(false, 10, 2, true)}
    
}

/***/ }),

/***/ "./src/gameLogic/gameBoard.js":
/*!************************************!*\
  !*** ./src/gameLogic/gameBoard.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GameBoard: () => (/* binding */ GameBoard)
/* harmony export */ });
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ "./src/gameLogic/ship.js");


const Node = class {
    constructor() {
        this.type = "water"
        this.hit = false
    }
}

const placeShipHelper = (initialRow, initialColumn, size, length, board, ship, direction) => {
    let row = initialRow;
    let column = initialColumn;
    // Check if the ship placement goes out of bounds based on direction
    switch (direction) {
        case "north":
            if (row - (length - 1) < 0) throw new Error("Ship placement goes out of bounds");
            break;
        case "east":
            if (column + (length - 1) >= size) throw new Error("Ship placement goes out of bounds");
            break;
        case "south":
            if (row + (length - 1) >= size) throw new Error("Ship placement goes out of bounds");
            break;
        case "west":
            if (column - (length - 1) < 0) throw new Error("Ship placement goes out of bounds");
            break;
        default:
            throw new Error("Invalid direction");
    }

    for (let i = 0; i < length; i++) {
        if (board[row][column].type !== "water") {
            throw new Error("Ship placement overlaps with another ship");
        }

        // Adjust row and column based on the direction
        switch (direction) {
            case "north":
                row--;
                break;
            case "east":
                column++;
                break;
            case "south":
                row++;
                break;
            case "west":
                column--;
                break;
        }
    }

    row = initialRow;
    column = initialColumn;

    // Place the ship on the board based on the direction
    for (let i = 0; i < length; i++) {
        board[row][column].type = ship;

        switch (direction) {
            case "north":
                row--;
                break;
            case "east":
                column++;
                break;
            case "south":
                row++;
                break;
            case "west":
                column--;
                break;
        }
    }
}

const GameBoard = class {
    constructor(size) {
        this.board = Array(size).fill(null).map(() => Array(size).fill(null).map(() => new Node()));
        this.receivedAttacks = []
    }

    placeShip(coordinates, length, rotation) {
        const ship = new _ship__WEBPACK_IMPORTED_MODULE_0__.Ship(length)
        let row = coordinates[0]
        let column = coordinates[1]

        switch (rotation) {
            case "north":
                placeShipHelper(row, column, this.size, length, this.board, ship, "north");
                break;
            case "east":
                placeShipHelper(row, column, this.size, length, this.board, ship, "east");
                break;
            case "south":
                placeShipHelper(row, column, this.size, length, this.board, ship, "south");
                break;
            case "west":
                placeShipHelper(row, column, this.size, length, this.board, ship, "west");
                break;
            default:
                placeShipHelper(row, column, this.size, length, this.board, ship, "north");
        }
    }

    receiveAttack(coordinates) {
        const attackedSquare = this.board[coordinates[0]][coordinates[1]]
        if (attackedSquare.type !== "water") {
            attackedSquare.type.hitBoat()
        }
        this.receivedAttacks.push(coordinates)

        attackedSquare.hit = true
    }

    allShipsSunk() {
        const allShips = []
        this.board.forEach((arr) => {
            arr.map((item) => {
                if (item.type !== "water") { allShips.push(item) }
            })
        })

        if (allShips.every((currentValue) => currentValue.hit === true) == true) {
            return true
        } else {
            return false
        }
    }
}

/***/ }),

/***/ "./src/gameLogic/player.js":
/*!*********************************!*\
  !*** ./src/gameLogic/player.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Player: () => (/* binding */ Player)
/* harmony export */ });
/* harmony import */ var _gameBoard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameBoard */ "./src/gameLogic/gameBoard.js");


const Player = class {
    constructor(computer, size, whichPlayer) {
        this.computer = computer
        this.whichPlayer = whichPlayer
        this.gameBoard = new _gameBoard__WEBPACK_IMPORTED_MODULE_0__.GameBoard(size)
    }
}

/***/ }),

/***/ "./src/gameLogic/ship.js":
/*!*******************************!*\
  !*** ./src/gameLogic/ship.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ship: () => (/* binding */ Ship)
/* harmony export */ });
const Ship = class {
    constructor(length,) {
        this.length = length
        this.damage = 0
        this.floating = true
    }

    hitBoat() {
        if (this.damage < this.length) {
            this.damage = this.damage + 1
        }
        this.isSunk()
    }

    isSunk() {
        if (this.damage === this.length) {
            this.floating = false
            return true
        } else {
            return false
        }
    }
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DOMLogic_startGame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOMLogic/startGame */ "./src/DOMLogic/startGame.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");



(0,_DOMLogic_startGame__WEBPACK_IMPORTED_MODULE_0__.initializeGame)()
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QztBQUM3QyxhQUFhO0FBQ2IsU0FBUzs7QUFFVDtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNqSXVDOztBQUVoQztBQUNQO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixpREFBUztBQUN0QztBQUNBOzs7Ozs7Ozs7Ozs7OztBQ1JPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7Ozs7OztVQ3RCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7QUNBcUQ7QUFDakM7O0FBRXBCLG1FQUFjLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXRlbXBsYXRlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9vZGluLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vZGluLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10ZW1wbGF0ZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9vZGluLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW4tdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29kaW4tdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29kaW4tdGVtcGxhdGUvLi9zcmMvRE9NTG9naWMvYXR0YWNrU3F1YXJlLmpzIiwid2VicGFjazovL29kaW4tdGVtcGxhdGUvLi9zcmMvRE9NTG9naWMvZW5kR2FtZS5qcyIsIndlYnBhY2s6Ly9vZGluLXRlbXBsYXRlLy4vc3JjL0RPTUxvZ2ljL2xvYWRCb2FyZC5qcyIsIndlYnBhY2s6Ly9vZGluLXRlbXBsYXRlLy4vc3JjL0RPTUxvZ2ljL3BsYWNlU2hpcC5qcyIsIndlYnBhY2s6Ly9vZGluLXRlbXBsYXRlLy4vc3JjL0RPTUxvZ2ljL3NldHVwR2FtZS5qcyIsIndlYnBhY2s6Ly9vZGluLXRlbXBsYXRlLy4vc3JjL0RPTUxvZ2ljL3N0YXJ0R2FtZS5qcyIsIndlYnBhY2s6Ly9vZGluLXRlbXBsYXRlLy4vc3JjL2dhbWVMb2dpYy9nYW1lLmpzIiwid2VicGFjazovL29kaW4tdGVtcGxhdGUvLi9zcmMvZ2FtZUxvZ2ljL2dhbWVCb2FyZC5qcyIsIndlYnBhY2s6Ly9vZGluLXRlbXBsYXRlLy4vc3JjL2dhbWVMb2dpYy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10ZW1wbGF0ZS8uL3NyYy9nYW1lTG9naWMvc2hpcC5qcyIsIndlYnBhY2s6Ly9vZGluLXRlbXBsYXRlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vb2Rpbi10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9vZGluLXRlbXBsYXRlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbn1cblxuLyogUGxheSBnYW1lIHNjcmVlbiAqL1xuI3BsYXlfZ2FtZV9jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuI3BsYXlfZ2FtZV9mb3JtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuI3BsYXlfZ2FtZV9mb3JtPmlucHV0W3R5cGU9XCJzdWJtaXRcIl0ge1xuICAgIG1hcmdpbjogMTVweDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIHdpZHRoOiAxNTBweDtcbn1cblxuI3BsYXlfZ2FtZV9mb3JtPmlucHV0W3R5cGU9XCJudW1iZXJcIl0ge1xuICAgIG1hcmdpbjogMTVweDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIHdpZHRoOiA1MHB4O1xufVxuXG4vKiBCb2FyZHMgY29udGFpbmVyICovXG5cbiNib2FyZHMtY29udGFpbmVyIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbn1cblxuLmJvYXJkIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCA2MHB4KTtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgNjBweCk7XG59XG5cbi5ib2FyZD5kaXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250OiBpbmhlcml0O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBvdXRsaW5lOiBpbmhlcml0O1xuICAgIGhlaWdodDogNjBweDtcbiAgICB3aWR0aDogNjBweDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5ib2FyZD5kaXY6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyLCAyLCAyLCAwLjIpO1xufVxuXG4uc2hpcCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDc3LCA1MSwgMzQpO1xuICAgIGhlaWdodDogNTBweDtcbiAgICB3aWR0aDogNTBweDtcbn1cbi5oaXQtc2hpcCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2QxNDQ0NDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgd2lkdGg6IDUwcHg7XG59XG5cbi5oaXQtc3F1YXJlIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAyNXB4O1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHlDQUF5QztBQUM3Qzs7QUFFQSxxQkFBcUI7QUFDckI7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDhCQUE4QjtJQUM5QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixlQUFlO0lBQ2YsWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZUFBZTtJQUNmLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBRUEscUJBQXFCOztBQUVyQjtJQUNJLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLGFBQWE7SUFDYix1Q0FBdUM7SUFDdkMsb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2QixTQUFTO0lBQ1QsYUFBYTtJQUNiLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLFdBQVc7SUFDWCxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxtQ0FBbUM7QUFDdkM7O0FBRUE7SUFDSSxpQ0FBaUM7SUFDakMsWUFBWTtJQUNaLFdBQVc7QUFDZjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxufVxcblxcbi8qIFBsYXkgZ2FtZSBzY3JlZW4gKi9cXG4jcGxheV9nYW1lX2NvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI3BsYXlfZ2FtZV9mb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI3BsYXlfZ2FtZV9mb3JtPmlucHV0W3R5cGU9XFxcInN1Ym1pdFxcXCJdIHtcXG4gICAgbWFyZ2luOiAxNXB4O1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgd2lkdGg6IDE1MHB4O1xcbn1cXG5cXG4jcGxheV9nYW1lX2Zvcm0+aW5wdXRbdHlwZT1cXFwibnVtYmVyXFxcIl0ge1xcbiAgICBtYXJnaW46IDE1cHg7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICB3aWR0aDogNTBweDtcXG59XFxuXFxuLyogQm9hcmRzIGNvbnRhaW5lciAqL1xcblxcbiNib2FyZHMtY29udGFpbmVyIHtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxufVxcblxcbi5ib2FyZCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCA2MHB4KTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDYwcHgpO1xcbn1cXG5cXG4uYm9hcmQ+ZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGZvbnQ6IGluaGVyaXQ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgb3V0bGluZTogaW5oZXJpdDtcXG4gICAgaGVpZ2h0OiA2MHB4O1xcbiAgICB3aWR0aDogNjBweDtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4uYm9hcmQ+ZGl2OmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIsIDIsIDIsIDAuMik7XFxufVxcblxcbi5zaGlwIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDc3LCA1MSwgMzQpO1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIHdpZHRoOiA1MHB4O1xcbn1cXG4uaGl0LXNoaXAge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDE0NDQ0O1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIHdpZHRoOiA1MHB4O1xcbn1cXG5cXG4uaGl0LXNxdWFyZSB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGVuZEdhbWUgfSBmcm9tIFwiLi9lbmRHYW1lXCJcbmltcG9ydCB7IGxvYWRCb2FyZFRvRE9NIH0gZnJvbSBcIi4vbG9hZEJvYXJkXCJcbmltcG9ydCB7IHBsYXllclR1cm4gfSBmcm9tIFwiLi9zZXR1cEdhbWVcIlxuXG5mdW5jdGlvbiBjaGVja0VuZEdhbWUoYm9hcmQsIHdpbm5lcikge1xuICAgIGlmIChib2FyZC5hbGxTaGlwc1N1bmsoKSA9PT0gdHJ1ZSkge1xuICAgICAgICBlbmRHYW1lKHdpbm5lcilcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGlzSW5BcnJheSh2YWx1ZSwgYXJyYXkpIHtcbiAgICBjb25zdCBzdHJpbmdBcnIgPSBhcnJheS5tYXAoaXRlbSA9PiBpdGVtLnRvU3RyaW5nKCkpXG4gICAgY29uc3Qgc3RyaW5nVmFsID0gdmFsdWUudG9TdHJpbmcoKVxuICAgIHJldHVybiBzdHJpbmdBcnIuaW5kZXhPZihzdHJpbmdWYWwpID4gLTE7XG59XG5cbmV4cG9ydCBjb25zdCBjb21wdXRlckF0dGFjayA9IChnYW1lKSA9PiB7XG4gICAgY29uc3QgeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICgwICsgOSkpXG4gICAgY29uc3QgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICgwICsgOSkpXG4gICAgLy8gY29uc29sZS5sb2coaXNJbkFycmF5KFs3LCAwXS50b1N0cmluZygpLCBnYW1lLmNvbXB1dGVyLmdhbWVCb2FyZC5yZWNlaXZlZEF0dGFja3MpKVxuICAgIGlmICghaXNJbkFycmF5KFt4LCB5XSwgZ2FtZS5wbGF5ZXJPbmUuZ2FtZUJvYXJkLnJlY2VpdmVkQXR0YWNrcyApKSB7XG4gICAgICAgIGdhbWUucGxheWVyT25lLmdhbWVCb2FyZC5yZWNlaXZlQXR0YWNrKFt4LCB5XSlcbiAgICAgICAgbG9hZEJvYXJkVG9ET00oJyNwbGF5ZXItb25lLWJvYXJkJywgZ2FtZS5wbGF5ZXJPbmUuZ2FtZUJvYXJkLCBnYW1lKVxuICAgICAgICBwbGF5ZXJUdXJuLnN3aXRjaFR1cm4oKVxuICAgICAgICBjaGVja0VuZEdhbWUoZ2FtZS5wbGF5ZXJPbmUuZ2FtZUJvYXJkLCAnUGxheWVyIFR3bycpXG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29tcHV0ZXJBdHRhY2soZ2FtZSlcbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBhdHRhY2tTcXVhcmUgPSAoYnV0dG9uLCBib2FyZCwgY29vcmRpbmF0ZXMsIGdhbWUsIGlkKSA9PiB7XG4gICAgaWYgKGlkICE9PSAnI3BsYXllci1vbmUtYm9hcmQnKSB7XG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGlmIChwbGF5ZXJUdXJuLnR1cm4gPT09IDEpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWlzSW5BcnJheShjb29yZGluYXRlcywgZ2FtZS5jb21wdXRlci5nYW1lQm9hcmQucmVjZWl2ZWRBdHRhY2tzKSkge1xuICAgICAgICAgICAgICAgICAgICBib2FyZC5yZWNlaXZlQXR0YWNrKGNvb3JkaW5hdGVzKVxuICAgICAgICAgICAgICAgICAgICBsb2FkQm9hcmRUb0RPTSgnI3BsYXllci10d28tYm9hcmQnLCBib2FyZCwgZ2FtZSlcbiAgICAgICAgICAgICAgICAgICAgcGxheWVyVHVybi5zd2l0Y2hUdXJuKClcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tFbmRHYW1lKGJvYXJkLCBcIlBsYXllciBPbmVcIilcblxuICAgICAgICAgICAgICAgICAgICBjb21wdXRlckF0dGFjayhnYW1lKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBwbGF5ZXJUdXJuIH0gZnJvbSBcIi4vc2V0dXBHYW1lXCJcblxuZXhwb3J0IGNvbnN0IGVuZEdhbWUgPSAod2lubmVyKSA9PiB7XG4gICAgY29uc3QgYm9hcmRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2JvYXJkcy1jb250YWluZXJcIilcbiAgICBib2FyZENvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgY29uc3QgZW5kR2FtZUgxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VuZF9nYW1lX3NjcmVlbicpXG4gICAgZW5kR2FtZUgxLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIlxuICAgIGVuZEdhbWVIMS50ZXh0Q29udGVudCA9IHdpbm5lciArICcgaGFzIHdvbiB0aGUgZ2FtZSdcbn0iLCJpbXBvcnQgeyBlbmRHYW1lIH0gZnJvbSBcIi4vZW5kR2FtZVwiXG5pbXBvcnQgeyBhdHRhY2tTcXVhcmUgfSBmcm9tIFwiLi9hdHRhY2tTcXVhcmVcIlxuXG5mdW5jdGlvbiBjaGVja0VuZEdhbWUoYm9hcmQpIHtcbiAgICBpZiAoYm9hcmQuYWxsU2hpcHNTdW5rKCkgPT09IHRydWUpIHtcbiAgICAgICAgZW5kR2FtZSgpXG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgbG9hZEJvYXJkVG9ET00gPSAoaWQsIGJvYXJkLCBnYW1lKSA9PiB7XG4gICAgY29uc3QgcGxheWVyQm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGlkKVxuXG4gICAgcGxheWVyQm9hcmQuaW5uZXJIVE1MID0gJydcbiAgICBwbGF5ZXJCb2FyZC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1ncmlkLXNpemUnLCBib2FyZC5ib2FyZC5sZW5ndGgpXG5cbiAgICBib2FyZC5ib2FyZC5mb3JFYWNoKChyb3csIHJvd0luZGV4KSA9PiB7XG4gICAgICAgIHJvdy5mb3JFYWNoKChub2RlLCBjb2xJbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY2VsbEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5cbiAgICAgICAgICAgIGF0dGFja1NxdWFyZShjZWxsQnV0dG9uLCBib2FyZCwgW3Jvd0luZGV4LCBjb2xJbmRleF0sIGdhbWUsIGlkKVxuXG4gICAgICAgICAgICBzd2l0Y2ggKG5vZGUudHlwZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgXCJ3YXRlclwiOlxuICAgICAgICAgICAgICAgICAgICBpZiAobm9kZS5oaXQgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaW5uZXJTcXVhcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICAgICAgICAgICAgICAgICAgICAgIGlubmVyU3F1YXJlLmNsYXNzTGlzdC5hZGQoXCJoaXQtc3F1YXJlXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICBpbm5lclNxdWFyZS50ZXh0Q29udGVudCA9ICdYJ1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjZWxsQnV0dG9uLmFwcGVuZENoaWxkKGlubmVyU3F1YXJlKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGlmIChub2RlLmhpdCA9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpbm5lclNxdWFyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgICAgICAgICAgICAgICAgICBpbm5lclNxdWFyZS5jbGFzc0xpc3QuYWRkKCdoaXQtc2hpcCcpXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbGxCdXR0b24uYXBwZW5kQ2hpbGQoaW5uZXJTcXVhcmUpXG5cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGlkICE9PSAnI3BsYXllci10d28tYm9hcmQnKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGlubmVyU3F1YXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgICAgICAgICAgICAgICAgIGlubmVyU3F1YXJlLmNsYXNzTGlzdC5hZGQoJ3NoaXAnKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBjZWxsQnV0dG9uLmFwcGVuZENoaWxkKGlubmVyU3F1YXJlKVxuICAgICAgICAgICAgICAgICAgICB9ICAgIFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBwbGF5ZXJCb2FyZC5hcHBlbmRDaGlsZChjZWxsQnV0dG9uKVxuICAgICAgICB9KVxuICAgIH0pXG59IiwiY29uc3QgY2hlY2tQbGFjZW1lbnQgPSAoZGlyZWN0aW9uLCByb3csIGNvbHVtbiwgbGVuZ3RoLCBib2FyZCkgPT4ge1xuICAgIC8vIENoZWNrIGlmIHRoZSBzaGlwIHBsYWNlbWVudCBnb2VzIG91dCBvZiBib3VuZHMgYmFzZWQgb24gZGlyZWN0aW9uXG4gICAgc3dpdGNoIChkaXJlY3Rpb24pIHtcbiAgICAgICAgY2FzZSBcIm5vcnRoXCI6XG4gICAgICAgICAgICBpZiAocm93IC0gKGxlbmd0aCAtIDEpIDwgMCkgdGhyb3cgbmV3IEVycm9yKFwiU2hpcCBwbGFjZW1lbnQgZ29lcyBvdXQgb2YgYm91bmRzXCIpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJlYXN0XCI6XG4gICAgICAgICAgICBpZiAoY29sdW1uICsgKGxlbmd0aCAtIDEpID49IDEwKSB0aHJvdyBuZXcgRXJyb3IoXCJTaGlwIHBsYWNlbWVudCBnb2VzIG91dCBvZiBib3VuZHNcIik7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcInNvdXRoXCI6XG4gICAgICAgICAgICBpZiAocm93ICsgKGxlbmd0aCAtIDEpID49IDEwKSB0aHJvdyBuZXcgRXJyb3IoXCJTaGlwIHBsYWNlbWVudCBnb2VzIG91dCBvZiBib3VuZHNcIik7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIndlc3RcIjpcbiAgICAgICAgICAgIGlmIChjb2x1bW4gLSAobGVuZ3RoIC0gMSkgPCAwKSB0aHJvdyBuZXcgRXJyb3IoXCJTaGlwIHBsYWNlbWVudCBnb2VzIG91dCBvZiBib3VuZHNcIik7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgZGlyZWN0aW9uXCIpO1xuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGJvYXJkW3Jvd11bY29sdW1uXS50eXBlICE9PSBcIndhdGVyXCIpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlNoaXAgcGxhY2VtZW50IG92ZXJsYXBzIHdpdGggYW5vdGhlciBzaGlwXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQWRqdXN0IHJvdyBhbmQgY29sdW1uIGJhc2VkIG9uIHRoZSBkaXJlY3Rpb25cbiAgICAgICAgc3dpdGNoIChkaXJlY3Rpb24pIHtcbiAgICAgICAgICAgIGNhc2UgXCJub3J0aFwiOlxuICAgICAgICAgICAgICAgIHJvdy0tO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImVhc3RcIjpcbiAgICAgICAgICAgICAgICBjb2x1bW4rKztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJzb3V0aFwiOlxuICAgICAgICAgICAgICAgIHJvdysrO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIndlc3RcIjpcbiAgICAgICAgICAgICAgICBjb2x1bW4tLTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbn1cblxuY29uc3QgZ2V0U3F1YXJlcyA9IChzaGlwVG9CZVBsYWNlZCwgcm93LCBjb2wsIHJvdGF0aW9uKSA9PiB7XG4gICAgY29uc3Qgc3F1YXJlcyA9IFtdXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwVG9CZVBsYWNlZDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGNvb3JkID0gW3JvdywgY29sXVxuICAgICAgICBzd2l0Y2ggKHJvdGF0aW9uKSB7XG4gICAgICAgICAgICBjYXNlIFwibm9ydGhcIjpcbiAgICAgICAgICAgICAgICBjb29yZFswXSA9IGNvb3JkWzBdIC0gaVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImVhc3RcIjpcbiAgICAgICAgICAgICAgICBjb29yZFsxXSA9IGNvb3JkWzFdICsgaVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInNvdXRoXCI6XG4gICAgICAgICAgICAgICAgY29vcmRbMF0gPSBjb29yZFswXSArIGlcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJ3ZXN0XCI6XG4gICAgICAgICAgICAgICAgY29vcmRbMV0gPSBjb29yZFsxXSAtIGlcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBzcXVhcmVzLnB1c2goYCR7Y29vcmRbMF19XyR7Y29vcmRbMV19YClcbiAgICB9XG4gICAgcmV0dXJuIHNxdWFyZXNcbn1cblxuZXhwb3J0IGNvbnN0IHBsYWNlU2hpcERPTSA9IChnYW1lKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgY29uc3QgcGxheWVyQm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGxheWVyLW9uZS1ib2FyZCcpXG4gICAgICAgIGNvbnN0IGJvYXJkID0gZ2FtZS5wbGF5ZXJPbmUuZ2FtZUJvYXJkXG5cbiAgICAgICAgY29uc3Qgc2hpcExlbmd0aHMgPSBbNCwgMywgMywgMiwgMiwgMiwgMSwgMSwgMSwgMV1cbiAgICAgICAgLy8gY29uc3Qgc2hpcExlbmd0aHMgPSBbNCwgMl1cbiAgICAgICAgbGV0IHNoaXBJbmRleCA9IDBcbiAgICAgICAgbGV0IHNoaXBUb0JlUGxhY2VkID0gc2hpcExlbmd0aHNbc2hpcEluZGV4XVxuXG4gICAgICAgIGNvbnN0IHJvdGF0aW9ucyA9IFsnbm9ydGgnLCAnZWFzdCcsICdzb3V0aCcsICd3ZXN0J11cbiAgICAgICAgbGV0IGN1cnJlbnRJbmRleCA9IDBcbiAgICAgICAgbGV0IHJvdGF0aW9uID0gcm90YXRpb25zW2N1cnJlbnRJbmRleF1cblxuICAgICAgICAvLyBjaGFuZ2Ugcm90YXRpb25cbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIGlmIChldmVudC5jb2RlID09PSAnS2V5UicpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50SW5kZXggPSAoY3VycmVudEluZGV4ICsgMSkgJSByb3RhdGlvbnMubGVuZ3RoO1xuICAgICAgICAgICAgICAgIHJvdGF0aW9uID0gcm90YXRpb25zW2N1cnJlbnRJbmRleF07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgLy8gQ3JlYXRlIHRlbXBvcmFyeSBib2FyZCBEaXNwbGF5XG4gICAgICAgIGJvYXJkLmJvYXJkLmZvckVhY2goKHJvdywgcm93SW5kZXgpID0+IHtcbiAgICAgICAgICAgIHJvdy5mb3JFYWNoKChub2RlLCBjb2xJbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNlbGxCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAgICAgICAgIGNlbGxCdXR0b24uaWQgPSBgbCR7cm93SW5kZXh9XyR7Y29sSW5kZXh9YFxuICAgICAgICAgICAgICAgIGNvbnN0IGlubmVyU3F1YXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgICAgICAgICBpbm5lclNxdWFyZS5jbGFzc0xpc3QuYWRkKCdzaGlwJylcbiAgICAgICAgICAgICAgICBpbm5lclNxdWFyZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmdiKDc3LCA1MSwgMzQsIDApJ1xuICAgICAgICAgICAgICAgIGNlbGxCdXR0b24uYXBwZW5kQ2hpbGQoaW5uZXJTcXVhcmUpXG5cbiAgICAgICAgICAgICAgICAvLyBBZGQgZXZlbnQgbGlzdGVuZXIgZm9yIHNob3dpbmcgeW91IGFyZSBob3ZlcmluZyBhYm92ZSBhIHNxdWFyZVxuICAgICAgICAgICAgICAgIGNlbGxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrUGxhY2VtZW50KHJvdGF0aW9uLCByb3dJbmRleCwgY29sSW5kZXgsIHNoaXBUb0JlUGxhY2VkLCBib2FyZC5ib2FyZClcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNxdWFyZXMgPSBnZXRTcXVhcmVzKHNoaXBUb0JlUGxhY2VkLCByb3dJbmRleCwgY29sSW5kZXgsIHJvdGF0aW9uKVxuICAgICAgICAgICAgICAgICAgICAgICAgc3F1YXJlcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgcm93ID0gTnVtYmVyKGl0ZW0uY2hhckF0KDApKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbCA9IE51bWJlcihpdGVtLmNoYXJBdCgyKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYm9hcmQuYm9hcmRbcm93XVtjb2xdLnR5cGUgPT0gXCJ3YXRlclwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNxdWFyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNsJHtpdGVtfWApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNxdWFyZS5maXJzdEVsZW1lbnRDaGlsZC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmdiKDc3LCA1MSwgMzQsIDAuNSknXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gUmVtb3ZlIHRoZSBzdHlsaW5nIHRoYXQgc2hvd3MgeW91IGFyZSBob3ZlcmluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgY2VsbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNxdWFyZXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByb3cgPSBOdW1iZXIoaXRlbS5jaGFyQXQoMCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbCA9IE51bWJlcihpdGVtLmNoYXJBdCgyKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGJvYXJkLmJvYXJkW3Jvd11bY29sXS50eXBlID09PSAnd2F0ZXInKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzcXVhcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjbCR7aXRlbX1gKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3F1YXJlLmZpcnN0RWxlbWVudENoaWxkLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZ2IoNzcsIDUxLCAzNCwgMCknXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Vycm9yX2Rpc3BsYXknKS50ZXh0Q29udGVudCA9IGVcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlcnJvcl9kaXNwbGF5JykudGV4dENvbnRlbnQgPSAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwgMjAwMCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuXG5cbiAgICAgICAgICAgICAgICAvLyBQbGFjZSBhIHNoaXAgb250byB0aGUgZ2FtZWJvYXJkLmJvYXJkIG9iamVjdCBmcm9tIGV2ZW50IGxpc3RlbmVyXG4gICAgICAgICAgICAgICAgY2VsbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gVHJ5IHBsYWNpbmcgdGhlIHNoaXBcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzaGlwSW5kZXggPCBzaGlwTGVuZ3Rocy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9hcmQucGxhY2VTaGlwKFtyb3dJbmRleCwgY29sSW5kZXhdLCBzaGlwVG9CZVBsYWNlZCwgcm90YXRpb24pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3F1YXJlcyA9IFtdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBzaGlwVG9CZVBsYWNlZDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvb3JkID0gW3Jvd0luZGV4LCBjb2xJbmRleF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChyb3RhdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIm5vcnRoXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29vcmRbMF0gPSBjb29yZFswXSAtIGlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJlYXN0XCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29vcmRbMV0gPSBjb29yZFsxXSArIGlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJzb3V0aFwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvb3JkWzBdID0gY29vcmRbMF0gKyBpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwid2VzdFwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvb3JkWzFdID0gY29vcmRbMV0gLSBpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3F1YXJlcy5wdXNoKGAke2Nvb3JkWzBdfV8ke2Nvb3JkWzFdfWApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNxdWFyZXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzcXVhcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjbCR7aXRlbX1gKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcXVhcmUuZmlyc3RFbGVtZW50Q2hpbGQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JnYig3NywgNTEsIDM0KSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hpcEluZGV4KytcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGlwVG9CZVBsYWNlZCA9IHNoaXBMZW5ndGhzW3NoaXBJbmRleF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZWxsQnV0dG9uLmZpcnN0RWxlbWVudENoaWxkLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZ2IoNzcsIDUxLCAzNCknXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvYXJkLnBsYWNlU2hpcChbcm93SW5kZXgsIGNvbEluZGV4XSwgc2hpcFRvQmVQbGFjZWQsIHJvdGF0aW9uKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIElmIHRoZSBzaGlwIGlzIHBsYWNlZCBvdXQgb2YgYm91bmRzIHJlbW92ZSB0aGUgc2VsZWN0ZWQgYmxvY2sgYW5kIGRvbnQgcGxhY2Ugc2hpcFxuICAgICAgICAgICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Vycm9yX2Rpc3BsYXknKS50ZXh0Q29udGVudCA9IGVcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlcnJvcl9kaXNwbGF5JykudGV4dENvbnRlbnQgPSAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwgMjAwMCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIHBsYXllckJvYXJkLmFwcGVuZENoaWxkKGNlbGxCdXR0b24pXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgIH0pXG59XG5cbiIsImltcG9ydCB7IGxvYWRCb2FyZFRvRE9NIH0gZnJvbSBcIi4vbG9hZEJvYXJkXCJcbmltcG9ydCB7IHBsYWNlU2hpcERPTSB9IGZyb20gXCIuL3BsYWNlU2hpcFwiXG5cbmV4cG9ydCBjb25zdCBwbGF5ZXJUdXJuID0ge1xuICAgIHR1cm46IDEsXG4gICAgc3dpdGNoVHVybjogZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy50dXJuID09PSAxKSB7XG4gICAgICAgICAgICB0aGlzLnR1cm4gPSAyXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnR1cm4gPSAxXG4gICAgICAgIH1cbiAgICB9LFxuICAgIHNldFR1cm5Ub09uZTogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnR1cm4gPSAxXG4gICAgfVxufVxuXG5cbmV4cG9ydCBjb25zdCBkaXNwbGF5Qm9hcmQgPSAoZ2FtZSkgPT4ge1xuICAgIC8vIEZpcnN0IHBvcHVsYXRlIGJvYXJkLCBsYXRlciBuZWVkIHRvIHdvcmsgb24gbWFraW5nIHRoZSBwbGF5ZXIgYmUgYWJsZSB0byBwbGFjZSBzaGlwc1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNib2FyZHMtY29udGFpbmVyJykuc3R5bGUuZGlzcGxheSA9ICdmbGV4J1xuICAgIGZ1bmN0aW9uIGxvYWRHYW1lcygpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BsYXllci1vbmUtYm9hcmQnKS5pbm5lckhUTUwgPSAnJ1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGxheWVyLXR3by1ib2FyZCcpLmlubmVySFRNTCA9ICcnXG4gICAgICAgIFxuICAgICAgICBsb2FkQm9hcmRUb0RPTSgnI3BsYXllci10d28tYm9hcmQnLCBnYW1lLmNvbXB1dGVyLmdhbWVCb2FyZCwgZ2FtZSlcbiAgICAgICAgbG9hZEJvYXJkVG9ET00oJyNwbGF5ZXItb25lLWJvYXJkJywgZ2FtZS5wbGF5ZXJPbmUuZ2FtZUJvYXJkLCBnYW1lKVxuXG4gICAgfVxuXG4gICAgcGxhY2VTaGlwRE9NKGdhbWUpLnRoZW4oKCkgPT4ge1xuICAgICAgICAvLyBPbmNlIGFsbCBzaGlwcyBhcmUgcGxhY2VkLCBsb2FkIHRoZSBnYW1lXG4gICAgICAgIGxvYWRHYW1lcygpO1xuXG4gICAgICAgIC8vIEV4YW1wbGU6IFBsYWNlIGNvbXB1dGVyIHNoaXBzIGFuZCBzdGFydCB0aGUgZ2FtZVxuICAgICAgICBnYW1lLmNvbXB1dGVyLmdhbWVCb2FyZC5wbGFjZVNoaXAoWzcsIDBdLCAyLCAnbm9ydGgnKTtcbiAgICAgICAgZ2FtZS5jb21wdXRlci5nYW1lQm9hcmQucGxhY2VTaGlwKFszLCAwXSwgMiwgJ2Vhc3QnKTtcbiAgICAgICAgZ2FtZS5jb21wdXRlci5nYW1lQm9hcmQucGxhY2VTaGlwKFszLCA0XSwgNCwgJ2Vhc3QnKTtcbiAgICAgICAgZ2FtZS5jb21wdXRlci5nYW1lQm9hcmQucGxhY2VTaGlwKFswLCAwXSwgMywgJ3NvdXRoJyk7XG5cbiAgICB9KTtcbn1cbiIsImltcG9ydCB7IEdhbWUgfSBmcm9tICcuLi9nYW1lTG9naWMvZ2FtZSdcbmltcG9ydCB7IGRpc3BsYXlCb2FyZCB9IGZyb20gJy4vc2V0dXBHYW1lJ1xuXG5cbmV4cG9ydCBjb25zdCBpbml0aWFsaXplR2FtZSA9ICgpID0+IHtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BsYXlfZ2FtZV9mb3JtJylcbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcblxuICAgICAgICAvLyBjb25zdCBzaXplID0gcGFyc2VJbnQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNnYW1lX3NpemVcIikudmFsdWUpO1xuXG4gICAgICAgIGNvbnN0IGdhbWUgPSBuZXcgR2FtZSgpXG5cbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BsYXlfZ2FtZV9jb250YWluZXInKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgICAgIGRpc3BsYXlCb2FyZChnYW1lKVxuXG4gICAgfSlcbn1cbiIsImltcG9ydCB7IFBsYXllciB9IGZyb20gXCIuL3BsYXllclwiO1xuXG5leHBvcnQgY2xhc3MgR2FtZSB7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdGhpcy5wbGF5ZXJPbmUgPSBuZXcgUGxheWVyKGZhbHNlLCAxMCwgMSwgZmFsc2UpXG4gICAgICAgIHRoaXMuY29tcHV0ZXIgPSBuZXcgUGxheWVyKGZhbHNlLCAxMCwgMiwgdHJ1ZSl9XG4gICAgXG59IiwiaW1wb3J0IHsgU2hpcCB9IGZyb20gXCIuL3NoaXBcIlxuXG5jb25zdCBOb2RlID0gY2xhc3Mge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnR5cGUgPSBcIndhdGVyXCJcbiAgICAgICAgdGhpcy5oaXQgPSBmYWxzZVxuICAgIH1cbn1cblxuY29uc3QgcGxhY2VTaGlwSGVscGVyID0gKGluaXRpYWxSb3csIGluaXRpYWxDb2x1bW4sIHNpemUsIGxlbmd0aCwgYm9hcmQsIHNoaXAsIGRpcmVjdGlvbikgPT4ge1xuICAgIGxldCByb3cgPSBpbml0aWFsUm93O1xuICAgIGxldCBjb2x1bW4gPSBpbml0aWFsQ29sdW1uO1xuICAgIC8vIENoZWNrIGlmIHRoZSBzaGlwIHBsYWNlbWVudCBnb2VzIG91dCBvZiBib3VuZHMgYmFzZWQgb24gZGlyZWN0aW9uXG4gICAgc3dpdGNoIChkaXJlY3Rpb24pIHtcbiAgICAgICAgY2FzZSBcIm5vcnRoXCI6XG4gICAgICAgICAgICBpZiAocm93IC0gKGxlbmd0aCAtIDEpIDwgMCkgdGhyb3cgbmV3IEVycm9yKFwiU2hpcCBwbGFjZW1lbnQgZ29lcyBvdXQgb2YgYm91bmRzXCIpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJlYXN0XCI6XG4gICAgICAgICAgICBpZiAoY29sdW1uICsgKGxlbmd0aCAtIDEpID49IHNpemUpIHRocm93IG5ldyBFcnJvcihcIlNoaXAgcGxhY2VtZW50IGdvZXMgb3V0IG9mIGJvdW5kc1wiKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwic291dGhcIjpcbiAgICAgICAgICAgIGlmIChyb3cgKyAobGVuZ3RoIC0gMSkgPj0gc2l6ZSkgdGhyb3cgbmV3IEVycm9yKFwiU2hpcCBwbGFjZW1lbnQgZ29lcyBvdXQgb2YgYm91bmRzXCIpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJ3ZXN0XCI6XG4gICAgICAgICAgICBpZiAoY29sdW1uIC0gKGxlbmd0aCAtIDEpIDwgMCkgdGhyb3cgbmV3IEVycm9yKFwiU2hpcCBwbGFjZW1lbnQgZ29lcyBvdXQgb2YgYm91bmRzXCIpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGRpcmVjdGlvblwiKTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChib2FyZFtyb3ddW2NvbHVtbl0udHlwZSAhPT0gXCJ3YXRlclwiKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJTaGlwIHBsYWNlbWVudCBvdmVybGFwcyB3aXRoIGFub3RoZXIgc2hpcFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEFkanVzdCByb3cgYW5kIGNvbHVtbiBiYXNlZCBvbiB0aGUgZGlyZWN0aW9uXG4gICAgICAgIHN3aXRjaCAoZGlyZWN0aW9uKSB7XG4gICAgICAgICAgICBjYXNlIFwibm9ydGhcIjpcbiAgICAgICAgICAgICAgICByb3ctLTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJlYXN0XCI6XG4gICAgICAgICAgICAgICAgY29sdW1uKys7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwic291dGhcIjpcbiAgICAgICAgICAgICAgICByb3crKztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJ3ZXN0XCI6XG4gICAgICAgICAgICAgICAgY29sdW1uLS07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByb3cgPSBpbml0aWFsUm93O1xuICAgIGNvbHVtbiA9IGluaXRpYWxDb2x1bW47XG5cbiAgICAvLyBQbGFjZSB0aGUgc2hpcCBvbiB0aGUgYm9hcmQgYmFzZWQgb24gdGhlIGRpcmVjdGlvblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgYm9hcmRbcm93XVtjb2x1bW5dLnR5cGUgPSBzaGlwO1xuXG4gICAgICAgIHN3aXRjaCAoZGlyZWN0aW9uKSB7XG4gICAgICAgICAgICBjYXNlIFwibm9ydGhcIjpcbiAgICAgICAgICAgICAgICByb3ctLTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJlYXN0XCI6XG4gICAgICAgICAgICAgICAgY29sdW1uKys7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwic291dGhcIjpcbiAgICAgICAgICAgICAgICByb3crKztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJ3ZXN0XCI6XG4gICAgICAgICAgICAgICAgY29sdW1uLS07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBHYW1lQm9hcmQgPSBjbGFzcyB7XG4gICAgY29uc3RydWN0b3Ioc2l6ZSkge1xuICAgICAgICB0aGlzLmJvYXJkID0gQXJyYXkoc2l6ZSkuZmlsbChudWxsKS5tYXAoKCkgPT4gQXJyYXkoc2l6ZSkuZmlsbChudWxsKS5tYXAoKCkgPT4gbmV3IE5vZGUoKSkpO1xuICAgICAgICB0aGlzLnJlY2VpdmVkQXR0YWNrcyA9IFtdXG4gICAgfVxuXG4gICAgcGxhY2VTaGlwKGNvb3JkaW5hdGVzLCBsZW5ndGgsIHJvdGF0aW9uKSB7XG4gICAgICAgIGNvbnN0IHNoaXAgPSBuZXcgU2hpcChsZW5ndGgpXG4gICAgICAgIGxldCByb3cgPSBjb29yZGluYXRlc1swXVxuICAgICAgICBsZXQgY29sdW1uID0gY29vcmRpbmF0ZXNbMV1cblxuICAgICAgICBzd2l0Y2ggKHJvdGF0aW9uKSB7XG4gICAgICAgICAgICBjYXNlIFwibm9ydGhcIjpcbiAgICAgICAgICAgICAgICBwbGFjZVNoaXBIZWxwZXIocm93LCBjb2x1bW4sIHRoaXMuc2l6ZSwgbGVuZ3RoLCB0aGlzLmJvYXJkLCBzaGlwLCBcIm5vcnRoXCIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImVhc3RcIjpcbiAgICAgICAgICAgICAgICBwbGFjZVNoaXBIZWxwZXIocm93LCBjb2x1bW4sIHRoaXMuc2l6ZSwgbGVuZ3RoLCB0aGlzLmJvYXJkLCBzaGlwLCBcImVhc3RcIik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwic291dGhcIjpcbiAgICAgICAgICAgICAgICBwbGFjZVNoaXBIZWxwZXIocm93LCBjb2x1bW4sIHRoaXMuc2l6ZSwgbGVuZ3RoLCB0aGlzLmJvYXJkLCBzaGlwLCBcInNvdXRoXCIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIndlc3RcIjpcbiAgICAgICAgICAgICAgICBwbGFjZVNoaXBIZWxwZXIocm93LCBjb2x1bW4sIHRoaXMuc2l6ZSwgbGVuZ3RoLCB0aGlzLmJvYXJkLCBzaGlwLCBcIndlc3RcIik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHBsYWNlU2hpcEhlbHBlcihyb3csIGNvbHVtbiwgdGhpcy5zaXplLCBsZW5ndGgsIHRoaXMuYm9hcmQsIHNoaXAsIFwibm9ydGhcIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZWNlaXZlQXR0YWNrKGNvb3JkaW5hdGVzKSB7XG4gICAgICAgIGNvbnN0IGF0dGFja2VkU3F1YXJlID0gdGhpcy5ib2FyZFtjb29yZGluYXRlc1swXV1bY29vcmRpbmF0ZXNbMV1dXG4gICAgICAgIGlmIChhdHRhY2tlZFNxdWFyZS50eXBlICE9PSBcIndhdGVyXCIpIHtcbiAgICAgICAgICAgIGF0dGFja2VkU3F1YXJlLnR5cGUuaGl0Qm9hdCgpXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZWNlaXZlZEF0dGFja3MucHVzaChjb29yZGluYXRlcylcblxuICAgICAgICBhdHRhY2tlZFNxdWFyZS5oaXQgPSB0cnVlXG4gICAgfVxuXG4gICAgYWxsU2hpcHNTdW5rKCkge1xuICAgICAgICBjb25zdCBhbGxTaGlwcyA9IFtdXG4gICAgICAgIHRoaXMuYm9hcmQuZm9yRWFjaCgoYXJyKSA9PiB7XG4gICAgICAgICAgICBhcnIubWFwKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0udHlwZSAhPT0gXCJ3YXRlclwiKSB7IGFsbFNoaXBzLnB1c2goaXRlbSkgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcblxuICAgICAgICBpZiAoYWxsU2hpcHMuZXZlcnkoKGN1cnJlbnRWYWx1ZSkgPT4gY3VycmVudFZhbHVlLmhpdCA9PT0gdHJ1ZSkgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCB7IEdhbWVCb2FyZCB9IGZyb20gXCIuL2dhbWVCb2FyZFwiXG5cbmV4cG9ydCBjb25zdCBQbGF5ZXIgPSBjbGFzcyB7XG4gICAgY29uc3RydWN0b3IoY29tcHV0ZXIsIHNpemUsIHdoaWNoUGxheWVyKSB7XG4gICAgICAgIHRoaXMuY29tcHV0ZXIgPSBjb21wdXRlclxuICAgICAgICB0aGlzLndoaWNoUGxheWVyID0gd2hpY2hQbGF5ZXJcbiAgICAgICAgdGhpcy5nYW1lQm9hcmQgPSBuZXcgR2FtZUJvYXJkKHNpemUpXG4gICAgfVxufSIsImV4cG9ydCBjb25zdCBTaGlwID0gY2xhc3Mge1xuICAgIGNvbnN0cnVjdG9yKGxlbmd0aCwpIHtcbiAgICAgICAgdGhpcy5sZW5ndGggPSBsZW5ndGhcbiAgICAgICAgdGhpcy5kYW1hZ2UgPSAwXG4gICAgICAgIHRoaXMuZmxvYXRpbmcgPSB0cnVlXG4gICAgfVxuXG4gICAgaGl0Qm9hdCgpIHtcbiAgICAgICAgaWYgKHRoaXMuZGFtYWdlIDwgdGhpcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMuZGFtYWdlID0gdGhpcy5kYW1hZ2UgKyAxXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pc1N1bmsoKVxuICAgIH1cblxuICAgIGlzU3VuaygpIHtcbiAgICAgICAgaWYgKHRoaXMuZGFtYWdlID09PSB0aGlzLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5mbG9hdGluZyA9IGZhbHNlXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH1cbiAgICB9XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHsgaW5pdGlhbGl6ZUdhbWUgfSBmcm9tICcuL0RPTUxvZ2ljL3N0YXJ0R2FtZSdcbmltcG9ydCAnLi9zdHlsZS5jc3MnXG5cbmluaXRpYWxpemVHYW1lKCkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=