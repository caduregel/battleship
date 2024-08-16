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

const rotateOnSpot = () => {

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

        document.querySelector('#ship_length_display').textContent = ''
        document.querySelector('#rotation_display').textContent = ''

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkM7QUFDN0MsYUFBYTtBQUNiLFNBQVM7O0FBRVQ7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDakl1Qzs7QUFFaEM7QUFDUDtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsaURBQVM7QUFDdEM7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNSTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7VUN0QkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7O0FDQXFEO0FBQ2pDOztBQUVwQixtRUFBYyxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi10ZW1wbGF0ZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vb2Rpbi10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL29kaW4tdGVtcGxhdGUvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vb2Rpbi10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vZGluLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGluLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4tdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29kaW4tdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLXRlbXBsYXRlLy4vc3JjL0RPTUxvZ2ljL2F0dGFja1NxdWFyZS5qcyIsIndlYnBhY2s6Ly9vZGluLXRlbXBsYXRlLy4vc3JjL0RPTUxvZ2ljL2VuZEdhbWUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10ZW1wbGF0ZS8uL3NyYy9ET01Mb2dpYy9sb2FkQm9hcmQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10ZW1wbGF0ZS8uL3NyYy9ET01Mb2dpYy9wbGFjZVNoaXAuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10ZW1wbGF0ZS8uL3NyYy9ET01Mb2dpYy9zZXR1cEdhbWUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10ZW1wbGF0ZS8uL3NyYy9ET01Mb2dpYy9zdGFydEdhbWUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10ZW1wbGF0ZS8uL3NyYy9nYW1lTG9naWMvZ2FtZS5qcyIsIndlYnBhY2s6Ly9vZGluLXRlbXBsYXRlLy4vc3JjL2dhbWVMb2dpYy9nYW1lQm9hcmQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10ZW1wbGF0ZS8uL3NyYy9nYW1lTG9naWMvcGxheWVyLmpzIiwid2VicGFjazovL29kaW4tdGVtcGxhdGUvLi9zcmMvZ2FtZUxvZ2ljL3NoaXAuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10ZW1wbGF0ZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL29kaW4tdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vb2Rpbi10ZW1wbGF0ZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG59XG5cbi8qIFBsYXkgZ2FtZSBzY3JlZW4gKi9cbiNwbGF5X2dhbWVfY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbiNwbGF5X2dhbWVfZm9ybSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbiNwbGF5X2dhbWVfZm9ybT5pbnB1dFt0eXBlPVwic3VibWl0XCJdIHtcbiAgICBtYXJnaW46IDE1cHg7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICB3aWR0aDogMTUwcHg7XG59XG5cbiNwbGF5X2dhbWVfZm9ybT5pbnB1dFt0eXBlPVwibnVtYmVyXCJdIHtcbiAgICBtYXJnaW46IDE1cHg7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICB3aWR0aDogNTBweDtcbn1cblxuLyogQm9hcmRzIGNvbnRhaW5lciAqL1xuXG4jYm9hcmRzLWNvbnRhaW5lciB7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG59XG5cbi5ib2FyZCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgNjBweCk7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDYwcHgpO1xufVxuXG4uYm9hcmQ+ZGl2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udDogaW5oZXJpdDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgb3V0bGluZTogaW5oZXJpdDtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgd2lkdGg6IDYwcHg7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uYm9hcmQ+ZGl2OmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMiwgMiwgMiwgMC4yKTtcbn1cblxuLnNoaXAge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig3NywgNTEsIDM0KTtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgd2lkdGg6IDUwcHg7XG59XG4uaGl0LXNoaXAge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkMTQ0NDQ7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIHdpZHRoOiA1MHB4O1xufVxuXG4uaGl0LXNxdWFyZSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSx5Q0FBeUM7QUFDN0M7O0FBRUEscUJBQXFCO0FBQ3JCO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qiw4QkFBOEI7SUFDOUIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZUFBZTtJQUNmLFlBQVk7SUFDWixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7SUFDZixZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBLHFCQUFxQjs7QUFFckI7SUFDSSw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUNBQXVDO0lBQ3ZDLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIsU0FBUztJQUNULGFBQWE7SUFDYixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixXQUFXO0lBQ1gscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksbUNBQW1DO0FBQ3ZDOztBQUVBO0lBQ0ksaUNBQWlDO0lBQ2pDLFlBQVk7SUFDWixXQUFXO0FBQ2Y7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4vKiBQbGF5IGdhbWUgc2NyZWVuICovXFxuI3BsYXlfZ2FtZV9jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNwbGF5X2dhbWVfZm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNwbGF5X2dhbWVfZm9ybT5pbnB1dFt0eXBlPVxcXCJzdWJtaXRcXFwiXSB7XFxuICAgIG1hcmdpbjogMTVweDtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIHdpZHRoOiAxNTBweDtcXG59XFxuXFxuI3BsYXlfZ2FtZV9mb3JtPmlucHV0W3R5cGU9XFxcIm51bWJlclxcXCJdIHtcXG4gICAgbWFyZ2luOiAxNXB4O1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgd2lkdGg6IDUwcHg7XFxufVxcblxcbi8qIEJvYXJkcyBjb250YWluZXIgKi9cXG5cXG4jYm9hcmRzLWNvbnRhaW5lciB7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbn1cXG5cXG4uYm9hcmQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgNjBweCk7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCA2MHB4KTtcXG59XFxuXFxuLmJvYXJkPmRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBmb250OiBpbmhlcml0O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIG91dGxpbmU6IGluaGVyaXQ7XFxuICAgIGhlaWdodDogNjBweDtcXG4gICAgd2lkdGg6IDYwcHg7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLmJvYXJkPmRpdjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyLCAyLCAyLCAwLjIpO1xcbn1cXG5cXG4uc2hpcCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig3NywgNTEsIDM0KTtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICB3aWR0aDogNTBweDtcXG59XFxuLmhpdC1zaGlwIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2QxNDQ0NDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICB3aWR0aDogNTBweDtcXG59XFxuXFxuLmhpdC1zcXVhcmUge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMjVweDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBlbmRHYW1lIH0gZnJvbSBcIi4vZW5kR2FtZVwiXG5pbXBvcnQgeyBsb2FkQm9hcmRUb0RPTSB9IGZyb20gXCIuL2xvYWRCb2FyZFwiXG5pbXBvcnQgeyBwbGF5ZXJUdXJuIH0gZnJvbSBcIi4vc2V0dXBHYW1lXCJcblxuZnVuY3Rpb24gY2hlY2tFbmRHYW1lKGJvYXJkLCB3aW5uZXIpIHtcbiAgICBpZiAoYm9hcmQuYWxsU2hpcHNTdW5rKCkgPT09IHRydWUpIHtcbiAgICAgICAgZW5kR2FtZSh3aW5uZXIpXG4gICAgfVxufVxuXG5mdW5jdGlvbiBpc0luQXJyYXkodmFsdWUsIGFycmF5KSB7XG4gICAgY29uc3Qgc3RyaW5nQXJyID0gYXJyYXkubWFwKGl0ZW0gPT4gaXRlbS50b1N0cmluZygpKVxuICAgIGNvbnN0IHN0cmluZ1ZhbCA9IHZhbHVlLnRvU3RyaW5nKClcbiAgICByZXR1cm4gc3RyaW5nQXJyLmluZGV4T2Yoc3RyaW5nVmFsKSA+IC0xO1xufVxuXG5leHBvcnQgY29uc3QgY29tcHV0ZXJBdHRhY2sgPSAoZ2FtZSkgPT4ge1xuICAgIGNvbnN0IHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoMCArIDkpKVxuICAgIGNvbnN0IHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoMCArIDkpKVxuICAgIC8vIGNvbnNvbGUubG9nKGlzSW5BcnJheShbNywgMF0udG9TdHJpbmcoKSwgZ2FtZS5jb21wdXRlci5nYW1lQm9hcmQucmVjZWl2ZWRBdHRhY2tzKSlcbiAgICBpZiAoIWlzSW5BcnJheShbeCwgeV0sIGdhbWUucGxheWVyT25lLmdhbWVCb2FyZC5yZWNlaXZlZEF0dGFja3MgKSkge1xuICAgICAgICBnYW1lLnBsYXllck9uZS5nYW1lQm9hcmQucmVjZWl2ZUF0dGFjayhbeCwgeV0pXG4gICAgICAgIGxvYWRCb2FyZFRvRE9NKCcjcGxheWVyLW9uZS1ib2FyZCcsIGdhbWUucGxheWVyT25lLmdhbWVCb2FyZCwgZ2FtZSlcbiAgICAgICAgcGxheWVyVHVybi5zd2l0Y2hUdXJuKClcbiAgICAgICAgY2hlY2tFbmRHYW1lKGdhbWUucGxheWVyT25lLmdhbWVCb2FyZCwgJ1BsYXllciBUd28nKVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbXB1dGVyQXR0YWNrKGdhbWUpXG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgYXR0YWNrU3F1YXJlID0gKGJ1dHRvbiwgYm9hcmQsIGNvb3JkaW5hdGVzLCBnYW1lLCBpZCkgPT4ge1xuICAgIGlmIChpZCAhPT0gJyNwbGF5ZXItb25lLWJvYXJkJykge1xuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAocGxheWVyVHVybi50dXJuID09PSAxKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFpc0luQXJyYXkoY29vcmRpbmF0ZXMsIGdhbWUuY29tcHV0ZXIuZ2FtZUJvYXJkLnJlY2VpdmVkQXR0YWNrcykpIHtcbiAgICAgICAgICAgICAgICAgICAgYm9hcmQucmVjZWl2ZUF0dGFjayhjb29yZGluYXRlcylcbiAgICAgICAgICAgICAgICAgICAgbG9hZEJvYXJkVG9ET00oJyNwbGF5ZXItdHdvLWJvYXJkJywgYm9hcmQsIGdhbWUpXG4gICAgICAgICAgICAgICAgICAgIHBsYXllclR1cm4uc3dpdGNoVHVybigpXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrRW5kR2FtZShib2FyZCwgXCJQbGF5ZXIgT25lXCIpXG5cbiAgICAgICAgICAgICAgICAgICAgY29tcHV0ZXJBdHRhY2soZ2FtZSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxufVxuIiwiaW1wb3J0IHsgcGxheWVyVHVybiB9IGZyb20gXCIuL3NldHVwR2FtZVwiXG5cbmV4cG9ydCBjb25zdCBlbmRHYW1lID0gKHdpbm5lcikgPT4ge1xuICAgIGNvbnN0IGJvYXJkQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNib2FyZHMtY29udGFpbmVyXCIpXG4gICAgYm9hcmRDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgIGNvbnN0IGVuZEdhbWVIMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlbmRfZ2FtZV9zY3JlZW4nKVxuICAgIGVuZEdhbWVIMS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCJcbiAgICBlbmRHYW1lSDEudGV4dENvbnRlbnQgPSB3aW5uZXIgKyAnIGhhcyB3b24gdGhlIGdhbWUnXG59IiwiaW1wb3J0IHsgZW5kR2FtZSB9IGZyb20gXCIuL2VuZEdhbWVcIlxuaW1wb3J0IHsgYXR0YWNrU3F1YXJlIH0gZnJvbSBcIi4vYXR0YWNrU3F1YXJlXCJcblxuZnVuY3Rpb24gY2hlY2tFbmRHYW1lKGJvYXJkKSB7XG4gICAgaWYgKGJvYXJkLmFsbFNoaXBzU3VuaygpID09PSB0cnVlKSB7XG4gICAgICAgIGVuZEdhbWUoKVxuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IGxvYWRCb2FyZFRvRE9NID0gKGlkLCBib2FyZCwgZ2FtZSkgPT4ge1xuICAgIGNvbnN0IHBsYXllckJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihpZClcblxuICAgIHBsYXllckJvYXJkLmlubmVySFRNTCA9ICcnXG4gICAgcGxheWVyQm9hcmQuc3R5bGUuc2V0UHJvcGVydHkoJy0tZ3JpZC1zaXplJywgYm9hcmQuYm9hcmQubGVuZ3RoKVxuXG4gICAgYm9hcmQuYm9hcmQuZm9yRWFjaCgocm93LCByb3dJbmRleCkgPT4ge1xuICAgICAgICByb3cuZm9yRWFjaCgobm9kZSwgY29sSW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNlbGxCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuXG4gICAgICAgICAgICBhdHRhY2tTcXVhcmUoY2VsbEJ1dHRvbiwgYm9hcmQsIFtyb3dJbmRleCwgY29sSW5kZXhdLCBnYW1lLCBpZClcblxuICAgICAgICAgICAgc3dpdGNoIChub2RlLnR5cGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIFwid2F0ZXJcIjpcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGUuaGl0ID09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGlubmVyU3F1YXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgICAgICAgICAgICAgICAgICAgICBpbm5lclNxdWFyZS5jbGFzc0xpc3QuYWRkKFwiaGl0LXNxdWFyZVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgaW5uZXJTcXVhcmUudGV4dENvbnRlbnQgPSAnWCdcblxuICAgICAgICAgICAgICAgICAgICAgICAgY2VsbEJ1dHRvbi5hcHBlbmRDaGlsZChpbm5lclNxdWFyZSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBpZiAobm9kZS5oaXQgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaW5uZXJTcXVhcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAgICAgICAgICAgICAgICAgaW5uZXJTcXVhcmUuY2xhc3NMaXN0LmFkZCgnaGl0LXNoaXAnKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBjZWxsQnV0dG9uLmFwcGVuZENoaWxkKGlubmVyU3F1YXJlKVxuXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZihpZCAhPT0gJyNwbGF5ZXItdHdvLWJvYXJkJyl7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpbm5lclNxdWFyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgICAgICAgICAgICAgICAgICBpbm5lclNxdWFyZS5jbGFzc0xpc3QuYWRkKCdzaGlwJylcblxuICAgICAgICAgICAgICAgICAgICAgICAgY2VsbEJ1dHRvbi5hcHBlbmRDaGlsZChpbm5lclNxdWFyZSlcbiAgICAgICAgICAgICAgICAgICAgfSAgICBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcGxheWVyQm9hcmQuYXBwZW5kQ2hpbGQoY2VsbEJ1dHRvbilcbiAgICAgICAgfSlcbiAgICB9KVxufSIsImNvbnN0IGNoZWNrUGxhY2VtZW50ID0gKGRpcmVjdGlvbiwgcm93LCBjb2x1bW4sIGxlbmd0aCwgYm9hcmQpID0+IHtcbiAgICAvLyBDaGVjayBpZiB0aGUgc2hpcCBwbGFjZW1lbnQgZ29lcyBvdXQgb2YgYm91bmRzIGJhc2VkIG9uIGRpcmVjdGlvblxuICAgIHN3aXRjaCAoZGlyZWN0aW9uKSB7XG4gICAgICAgIGNhc2UgXCJub3J0aFwiOlxuICAgICAgICAgICAgaWYgKHJvdyAtIChsZW5ndGggLSAxKSA8IDApIHRocm93IG5ldyBFcnJvcihcIlNoaXAgcGxhY2VtZW50IGdvZXMgb3V0IG9mIGJvdW5kc1wiKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiZWFzdFwiOlxuICAgICAgICAgICAgaWYgKGNvbHVtbiArIChsZW5ndGggLSAxKSA+PSAxMCkgdGhyb3cgbmV3IEVycm9yKFwiU2hpcCBwbGFjZW1lbnQgZ29lcyBvdXQgb2YgYm91bmRzXCIpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJzb3V0aFwiOlxuICAgICAgICAgICAgaWYgKHJvdyArIChsZW5ndGggLSAxKSA+PSAxMCkgdGhyb3cgbmV3IEVycm9yKFwiU2hpcCBwbGFjZW1lbnQgZ29lcyBvdXQgb2YgYm91bmRzXCIpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJ3ZXN0XCI6XG4gICAgICAgICAgICBpZiAoY29sdW1uIC0gKGxlbmd0aCAtIDEpIDwgMCkgdGhyb3cgbmV3IEVycm9yKFwiU2hpcCBwbGFjZW1lbnQgZ29lcyBvdXQgb2YgYm91bmRzXCIpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGRpcmVjdGlvblwiKTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChib2FyZFtyb3ddW2NvbHVtbl0udHlwZSAhPT0gXCJ3YXRlclwiKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJTaGlwIHBsYWNlbWVudCBvdmVybGFwcyB3aXRoIGFub3RoZXIgc2hpcFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEFkanVzdCByb3cgYW5kIGNvbHVtbiBiYXNlZCBvbiB0aGUgZGlyZWN0aW9uXG4gICAgICAgIHN3aXRjaCAoZGlyZWN0aW9uKSB7XG4gICAgICAgICAgICBjYXNlIFwibm9ydGhcIjpcbiAgICAgICAgICAgICAgICByb3ctLTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJlYXN0XCI6XG4gICAgICAgICAgICAgICAgY29sdW1uKys7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwic291dGhcIjpcbiAgICAgICAgICAgICAgICByb3crKztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJ3ZXN0XCI6XG4gICAgICAgICAgICAgICAgY29sdW1uLS07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmNvbnN0IGdldFNxdWFyZXMgPSAoc2hpcFRvQmVQbGFjZWQsIHJvdywgY29sLCByb3RhdGlvbikgPT4ge1xuICAgIGNvbnN0IHNxdWFyZXMgPSBbXVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcFRvQmVQbGFjZWQ7IGkrKykge1xuICAgICAgICBjb25zdCBjb29yZCA9IFtyb3csIGNvbF1cbiAgICAgICAgc3dpdGNoIChyb3RhdGlvbikge1xuICAgICAgICAgICAgY2FzZSBcIm5vcnRoXCI6XG4gICAgICAgICAgICAgICAgY29vcmRbMF0gPSBjb29yZFswXSAtIGlcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJlYXN0XCI6XG4gICAgICAgICAgICAgICAgY29vcmRbMV0gPSBjb29yZFsxXSArIGlcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJzb3V0aFwiOlxuICAgICAgICAgICAgICAgIGNvb3JkWzBdID0gY29vcmRbMF0gKyBpXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwid2VzdFwiOlxuICAgICAgICAgICAgICAgIGNvb3JkWzFdID0gY29vcmRbMV0gLSBpXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgc3F1YXJlcy5wdXNoKGAke2Nvb3JkWzBdfV8ke2Nvb3JkWzFdfWApXG4gICAgfVxuICAgIHJldHVybiBzcXVhcmVzXG59XG5cbmNvbnN0IHJvdGF0ZU9uU3BvdCA9ICgpID0+IHtcblxufVxuXG5leHBvcnQgY29uc3QgcGxhY2VTaGlwRE9NID0gKGdhbWUpID0+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBjb25zdCBwbGF5ZXJCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwbGF5ZXItb25lLWJvYXJkJylcbiAgICAgICAgY29uc3QgYm9hcmQgPSBnYW1lLnBsYXllck9uZS5nYW1lQm9hcmRcblxuICAgICAgICBjb25zdCBzaGlwTGVuZ3RocyA9IFs0LCAzLCAzLCAyLCAyLCAyLCAxLCAxLCAxLCAxXVxuICAgICAgICAvLyBjb25zdCBzaGlwTGVuZ3RocyA9IFs0LCAyXVxuICAgICAgICBsZXQgc2hpcEluZGV4ID0gMFxuICAgICAgICBsZXQgc2hpcFRvQmVQbGFjZWQgPSBzaGlwTGVuZ3Roc1tzaGlwSW5kZXhdXG5cbiAgICAgICAgY29uc3Qgcm90YXRpb25zID0gWydub3J0aCcsICdlYXN0JywgJ3NvdXRoJywgJ3dlc3QnXVxuICAgICAgICBsZXQgY3VycmVudEluZGV4ID0gMFxuICAgICAgICBsZXQgcm90YXRpb24gPSByb3RhdGlvbnNbY3VycmVudEluZGV4XVxuXG4gICAgICAgIC8vIGNoYW5nZSByb3RhdGlvblxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgaWYgKGV2ZW50LmNvZGUgPT09ICdLZXlSJykge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRJbmRleCA9IChjdXJyZW50SW5kZXggKyAxKSAlIHJvdGF0aW9ucy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgcm90YXRpb24gPSByb3RhdGlvbnNbY3VycmVudEluZGV4XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICAvLyBDcmVhdGUgdGVtcG9yYXJ5IGJvYXJkIERpc3BsYXlcbiAgICAgICAgYm9hcmQuYm9hcmQuZm9yRWFjaCgocm93LCByb3dJbmRleCkgPT4ge1xuICAgICAgICAgICAgcm93LmZvckVhY2goKG5vZGUsIGNvbEluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2VsbEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgICAgICAgICAgY2VsbEJ1dHRvbi5pZCA9IGBsJHtyb3dJbmRleH1fJHtjb2xJbmRleH1gXG4gICAgICAgICAgICAgICAgY29uc3QgaW5uZXJTcXVhcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAgICAgICAgIGlubmVyU3F1YXJlLmNsYXNzTGlzdC5hZGQoJ3NoaXAnKVxuICAgICAgICAgICAgICAgIGlubmVyU3F1YXJlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZ2IoNzcsIDUxLCAzNCwgMCknXG4gICAgICAgICAgICAgICAgY2VsbEJ1dHRvbi5hcHBlbmRDaGlsZChpbm5lclNxdWFyZSlcblxuICAgICAgICAgICAgICAgIC8vIEFkZCBldmVudCBsaXN0ZW5lciBmb3Igc2hvd2luZyB5b3UgYXJlIGhvdmVyaW5nIGFib3ZlIGEgc3F1YXJlXG4gICAgICAgICAgICAgICAgY2VsbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tQbGFjZW1lbnQocm90YXRpb24sIHJvd0luZGV4LCBjb2xJbmRleCwgc2hpcFRvQmVQbGFjZWQsIGJvYXJkLmJvYXJkKVxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3F1YXJlcyA9IGdldFNxdWFyZXMoc2hpcFRvQmVQbGFjZWQsIHJvd0luZGV4LCBjb2xJbmRleCwgcm90YXRpb24pXG4gICAgICAgICAgICAgICAgICAgICAgICBzcXVhcmVzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByb3cgPSBOdW1iZXIoaXRlbS5jaGFyQXQoMCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY29sID0gTnVtYmVyKGl0ZW0uY2hhckF0KDIpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChib2FyZC5ib2FyZFtyb3ddW2NvbF0udHlwZSA9PSBcIndhdGVyXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3F1YXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2wke2l0ZW19YClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3F1YXJlLmZpcnN0RWxlbWVudENoaWxkLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZ2IoNzcsIDUxLCAzNCwgMC41KSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBSZW1vdmUgdGhlIHN0eWxpbmcgdGhhdCBzaG93cyB5b3UgYXJlIGhvdmVyaW5nXG4gICAgICAgICAgICAgICAgICAgICAgICBjZWxsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3F1YXJlcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJvdyA9IE51bWJlcihpdGVtLmNoYXJBdCgwKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY29sID0gTnVtYmVyKGl0ZW0uY2hhckF0KDIpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYm9hcmQuYm9hcmRbcm93XVtjb2xdLnR5cGUgPT09ICd3YXRlcicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNxdWFyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNsJHtpdGVtfWApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcXVhcmUuZmlyc3RFbGVtZW50Q2hpbGQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JnYig3NywgNTEsIDM0LCAwKSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZXJyb3JfZGlzcGxheScpLnRleHRDb250ZW50ID0gZVxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Vycm9yX2Rpc3BsYXknKS50ZXh0Q29udGVudCA9ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCAyMDAwKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG5cblxuICAgICAgICAgICAgICAgIC8vIFBsYWNlIGEgc2hpcCBvbnRvIHRoZSBnYW1lYm9hcmQuYm9hcmQgb2JqZWN0IGZyb20gZXZlbnQgbGlzdGVuZXJcbiAgICAgICAgICAgICAgICBjZWxsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyBUcnkgcGxhY2luZyB0aGUgc2hpcFxuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNoaXBJbmRleCA8IHNoaXBMZW5ndGhzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib2FyZC5wbGFjZVNoaXAoW3Jvd0luZGV4LCBjb2xJbmRleF0sIHNoaXBUb0JlUGxhY2VkLCByb3RhdGlvbilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzcXVhcmVzID0gW11cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHNoaXBUb0JlUGxhY2VkOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY29vcmQgPSBbcm93SW5kZXgsIGNvbEluZGV4XVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHJvdGF0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwibm9ydGhcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb29yZFswXSA9IGNvb3JkWzBdIC0gaVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImVhc3RcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb29yZFsxXSA9IGNvb3JkWzFdICsgaVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcInNvdXRoXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29vcmRbMF0gPSBjb29yZFswXSArIGlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJ3ZXN0XCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29vcmRbMV0gPSBjb29yZFsxXSAtIGlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcXVhcmVzLnB1c2goYCR7Y29vcmRbMF19XyR7Y29vcmRbMV19YClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3F1YXJlcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNxdWFyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNsJHtpdGVtfWApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNxdWFyZS5maXJzdEVsZW1lbnRDaGlsZC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmdiKDc3LCA1MSwgMzQpJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGlwSW5kZXgrK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoaXBUb0JlUGxhY2VkID0gc2hpcExlbmd0aHNbc2hpcEluZGV4XVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbGxCdXR0b24uZmlyc3RFbGVtZW50Q2hpbGQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JnYig3NywgNTEsIDM0KSdcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9hcmQucGxhY2VTaGlwKFtyb3dJbmRleCwgY29sSW5kZXhdLCBzaGlwVG9CZVBsYWNlZCwgcm90YXRpb24pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgdGhlIHNoaXAgaXMgcGxhY2VkIG91dCBvZiBib3VuZHMgcmVtb3ZlIHRoZSBzZWxlY3RlZCBibG9jayBhbmQgZG9udCBwbGFjZSBzaGlwXG4gICAgICAgICAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZXJyb3JfZGlzcGxheScpLnRleHRDb250ZW50ID0gZVxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Vycm9yX2Rpc3BsYXknKS50ZXh0Q29udGVudCA9ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCAyMDAwKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgcGxheWVyQm9hcmQuYXBwZW5kQ2hpbGQoY2VsbEJ1dHRvbilcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgfSlcbn1cblxuIiwiaW1wb3J0IHsgbG9hZEJvYXJkVG9ET00gfSBmcm9tIFwiLi9sb2FkQm9hcmRcIlxuaW1wb3J0IHsgcGxhY2VTaGlwRE9NIH0gZnJvbSBcIi4vcGxhY2VTaGlwXCJcblxuZXhwb3J0IGNvbnN0IHBsYXllclR1cm4gPSB7XG4gICAgdHVybjogMSxcbiAgICBzd2l0Y2hUdXJuOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLnR1cm4gPT09IDEpIHtcbiAgICAgICAgICAgIHRoaXMudHVybiA9IDJcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudHVybiA9IDFcbiAgICAgICAgfVxuICAgIH0sXG4gICAgc2V0VHVyblRvT25lOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMudHVybiA9IDFcbiAgICB9XG59XG5cblxuZXhwb3J0IGNvbnN0IGRpc3BsYXlCb2FyZCA9IChnYW1lKSA9PiB7XG4gICAgLy8gRmlyc3QgcG9wdWxhdGUgYm9hcmQsIGxhdGVyIG5lZWQgdG8gd29yayBvbiBtYWtpbmcgdGhlIHBsYXllciBiZSBhYmxlIHRvIHBsYWNlIHNoaXBzXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2JvYXJkcy1jb250YWluZXInKS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnXG4gICAgZnVuY3Rpb24gbG9hZEdhbWVzKCkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGxheWVyLW9uZS1ib2FyZCcpLmlubmVySFRNTCA9ICcnXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwbGF5ZXItdHdvLWJvYXJkJykuaW5uZXJIVE1MID0gJydcblxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2hpcF9sZW5ndGhfZGlzcGxheScpLnRleHRDb250ZW50ID0gJydcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3JvdGF0aW9uX2Rpc3BsYXknKS50ZXh0Q29udGVudCA9ICcnXG5cbiAgICAgICAgbG9hZEJvYXJkVG9ET00oJyNwbGF5ZXItdHdvLWJvYXJkJywgZ2FtZS5jb21wdXRlci5nYW1lQm9hcmQsIGdhbWUpXG4gICAgICAgIGxvYWRCb2FyZFRvRE9NKCcjcGxheWVyLW9uZS1ib2FyZCcsIGdhbWUucGxheWVyT25lLmdhbWVCb2FyZCwgZ2FtZSlcblxuICAgIH1cblxuICAgIHBsYWNlU2hpcERPTShnYW1lKS50aGVuKCgpID0+IHtcbiAgICAgICAgLy8gT25jZSBhbGwgc2hpcHMgYXJlIHBsYWNlZCwgbG9hZCB0aGUgZ2FtZVxuICAgICAgICBsb2FkR2FtZXMoKTtcblxuICAgICAgICAvLyBFeGFtcGxlOiBQbGFjZSBjb21wdXRlciBzaGlwcyBhbmQgc3RhcnQgdGhlIGdhbWVcbiAgICAgICAgZ2FtZS5jb21wdXRlci5nYW1lQm9hcmQucGxhY2VTaGlwKFs3LCAwXSwgMiwgJ25vcnRoJyk7XG4gICAgICAgIGdhbWUuY29tcHV0ZXIuZ2FtZUJvYXJkLnBsYWNlU2hpcChbMywgMF0sIDIsICdlYXN0Jyk7XG4gICAgICAgIGdhbWUuY29tcHV0ZXIuZ2FtZUJvYXJkLnBsYWNlU2hpcChbMywgNF0sIDQsICdlYXN0Jyk7XG4gICAgICAgIGdhbWUuY29tcHV0ZXIuZ2FtZUJvYXJkLnBsYWNlU2hpcChbMCwgMF0sIDMsICdzb3V0aCcpO1xuXG4gICAgfSk7XG59XG4iLCJpbXBvcnQgeyBHYW1lIH0gZnJvbSAnLi4vZ2FtZUxvZ2ljL2dhbWUnXG5pbXBvcnQgeyBkaXNwbGF5Qm9hcmQgfSBmcm9tICcuL3NldHVwR2FtZSdcblxuXG5leHBvcnQgY29uc3QgaW5pdGlhbGl6ZUdhbWUgPSAoKSA9PiB7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwbGF5X2dhbWVfZm9ybScpXG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICAgICAgLy8gY29uc3Qgc2l6ZSA9IHBhcnNlSW50KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZ2FtZV9zaXplXCIpLnZhbHVlKTtcblxuICAgICAgICBjb25zdCBnYW1lID0gbmV3IEdhbWUoKVxuXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwbGF5X2dhbWVfY29udGFpbmVyJykuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgICAgICBkaXNwbGF5Qm9hcmQoZ2FtZSlcblxuICAgIH0pXG59XG4iLCJpbXBvcnQgeyBQbGF5ZXIgfSBmcm9tIFwiLi9wbGF5ZXJcIjtcblxuZXhwb3J0IGNsYXNzIEdhbWUge1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHRoaXMucGxheWVyT25lID0gbmV3IFBsYXllcihmYWxzZSwgMTAsIDEsIGZhbHNlKVxuICAgICAgICB0aGlzLmNvbXB1dGVyID0gbmV3IFBsYXllcihmYWxzZSwgMTAsIDIsIHRydWUpfVxuICAgIFxufSIsImltcG9ydCB7IFNoaXAgfSBmcm9tIFwiLi9zaGlwXCJcblxuY29uc3QgTm9kZSA9IGNsYXNzIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy50eXBlID0gXCJ3YXRlclwiXG4gICAgICAgIHRoaXMuaGl0ID0gZmFsc2VcbiAgICB9XG59XG5cbmNvbnN0IHBsYWNlU2hpcEhlbHBlciA9IChpbml0aWFsUm93LCBpbml0aWFsQ29sdW1uLCBzaXplLCBsZW5ndGgsIGJvYXJkLCBzaGlwLCBkaXJlY3Rpb24pID0+IHtcbiAgICBsZXQgcm93ID0gaW5pdGlhbFJvdztcbiAgICBsZXQgY29sdW1uID0gaW5pdGlhbENvbHVtbjtcbiAgICAvLyBDaGVjayBpZiB0aGUgc2hpcCBwbGFjZW1lbnQgZ29lcyBvdXQgb2YgYm91bmRzIGJhc2VkIG9uIGRpcmVjdGlvblxuICAgIHN3aXRjaCAoZGlyZWN0aW9uKSB7XG4gICAgICAgIGNhc2UgXCJub3J0aFwiOlxuICAgICAgICAgICAgaWYgKHJvdyAtIChsZW5ndGggLSAxKSA8IDApIHRocm93IG5ldyBFcnJvcihcIlNoaXAgcGxhY2VtZW50IGdvZXMgb3V0IG9mIGJvdW5kc1wiKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiZWFzdFwiOlxuICAgICAgICAgICAgaWYgKGNvbHVtbiArIChsZW5ndGggLSAxKSA+PSBzaXplKSB0aHJvdyBuZXcgRXJyb3IoXCJTaGlwIHBsYWNlbWVudCBnb2VzIG91dCBvZiBib3VuZHNcIik7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcInNvdXRoXCI6XG4gICAgICAgICAgICBpZiAocm93ICsgKGxlbmd0aCAtIDEpID49IHNpemUpIHRocm93IG5ldyBFcnJvcihcIlNoaXAgcGxhY2VtZW50IGdvZXMgb3V0IG9mIGJvdW5kc1wiKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwid2VzdFwiOlxuICAgICAgICAgICAgaWYgKGNvbHVtbiAtIChsZW5ndGggLSAxKSA8IDApIHRocm93IG5ldyBFcnJvcihcIlNoaXAgcGxhY2VtZW50IGdvZXMgb3V0IG9mIGJvdW5kc1wiKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBkaXJlY3Rpb25cIik7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoYm9hcmRbcm93XVtjb2x1bW5dLnR5cGUgIT09IFwid2F0ZXJcIikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiU2hpcCBwbGFjZW1lbnQgb3ZlcmxhcHMgd2l0aCBhbm90aGVyIHNoaXBcIik7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBBZGp1c3Qgcm93IGFuZCBjb2x1bW4gYmFzZWQgb24gdGhlIGRpcmVjdGlvblxuICAgICAgICBzd2l0Y2ggKGRpcmVjdGlvbikge1xuICAgICAgICAgICAgY2FzZSBcIm5vcnRoXCI6XG4gICAgICAgICAgICAgICAgcm93LS07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiZWFzdFwiOlxuICAgICAgICAgICAgICAgIGNvbHVtbisrO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInNvdXRoXCI6XG4gICAgICAgICAgICAgICAgcm93Kys7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwid2VzdFwiOlxuICAgICAgICAgICAgICAgIGNvbHVtbi0tO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcm93ID0gaW5pdGlhbFJvdztcbiAgICBjb2x1bW4gPSBpbml0aWFsQ29sdW1uO1xuXG4gICAgLy8gUGxhY2UgdGhlIHNoaXAgb24gdGhlIGJvYXJkIGJhc2VkIG9uIHRoZSBkaXJlY3Rpb25cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGJvYXJkW3Jvd11bY29sdW1uXS50eXBlID0gc2hpcDtcblxuICAgICAgICBzd2l0Y2ggKGRpcmVjdGlvbikge1xuICAgICAgICAgICAgY2FzZSBcIm5vcnRoXCI6XG4gICAgICAgICAgICAgICAgcm93LS07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiZWFzdFwiOlxuICAgICAgICAgICAgICAgIGNvbHVtbisrO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInNvdXRoXCI6XG4gICAgICAgICAgICAgICAgcm93Kys7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwid2VzdFwiOlxuICAgICAgICAgICAgICAgIGNvbHVtbi0tO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgR2FtZUJvYXJkID0gY2xhc3Mge1xuICAgIGNvbnN0cnVjdG9yKHNpemUpIHtcbiAgICAgICAgdGhpcy5ib2FyZCA9IEFycmF5KHNpemUpLmZpbGwobnVsbCkubWFwKCgpID0+IEFycmF5KHNpemUpLmZpbGwobnVsbCkubWFwKCgpID0+IG5ldyBOb2RlKCkpKTtcbiAgICAgICAgdGhpcy5yZWNlaXZlZEF0dGFja3MgPSBbXVxuICAgIH1cblxuICAgIHBsYWNlU2hpcChjb29yZGluYXRlcywgbGVuZ3RoLCByb3RhdGlvbikge1xuICAgICAgICBjb25zdCBzaGlwID0gbmV3IFNoaXAobGVuZ3RoKVxuICAgICAgICBsZXQgcm93ID0gY29vcmRpbmF0ZXNbMF1cbiAgICAgICAgbGV0IGNvbHVtbiA9IGNvb3JkaW5hdGVzWzFdXG5cbiAgICAgICAgc3dpdGNoIChyb3RhdGlvbikge1xuICAgICAgICAgICAgY2FzZSBcIm5vcnRoXCI6XG4gICAgICAgICAgICAgICAgcGxhY2VTaGlwSGVscGVyKHJvdywgY29sdW1uLCB0aGlzLnNpemUsIGxlbmd0aCwgdGhpcy5ib2FyZCwgc2hpcCwgXCJub3J0aFwiKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJlYXN0XCI6XG4gICAgICAgICAgICAgICAgcGxhY2VTaGlwSGVscGVyKHJvdywgY29sdW1uLCB0aGlzLnNpemUsIGxlbmd0aCwgdGhpcy5ib2FyZCwgc2hpcCwgXCJlYXN0XCIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInNvdXRoXCI6XG4gICAgICAgICAgICAgICAgcGxhY2VTaGlwSGVscGVyKHJvdywgY29sdW1uLCB0aGlzLnNpemUsIGxlbmd0aCwgdGhpcy5ib2FyZCwgc2hpcCwgXCJzb3V0aFwiKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJ3ZXN0XCI6XG4gICAgICAgICAgICAgICAgcGxhY2VTaGlwSGVscGVyKHJvdywgY29sdW1uLCB0aGlzLnNpemUsIGxlbmd0aCwgdGhpcy5ib2FyZCwgc2hpcCwgXCJ3ZXN0XCIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBwbGFjZVNoaXBIZWxwZXIocm93LCBjb2x1bW4sIHRoaXMuc2l6ZSwgbGVuZ3RoLCB0aGlzLmJvYXJkLCBzaGlwLCBcIm5vcnRoXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVjZWl2ZUF0dGFjayhjb29yZGluYXRlcykge1xuICAgICAgICBjb25zdCBhdHRhY2tlZFNxdWFyZSA9IHRoaXMuYm9hcmRbY29vcmRpbmF0ZXNbMF1dW2Nvb3JkaW5hdGVzWzFdXVxuICAgICAgICBpZiAoYXR0YWNrZWRTcXVhcmUudHlwZSAhPT0gXCJ3YXRlclwiKSB7XG4gICAgICAgICAgICBhdHRhY2tlZFNxdWFyZS50eXBlLmhpdEJvYXQoKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVjZWl2ZWRBdHRhY2tzLnB1c2goY29vcmRpbmF0ZXMpXG5cbiAgICAgICAgYXR0YWNrZWRTcXVhcmUuaGl0ID0gdHJ1ZVxuICAgIH1cblxuICAgIGFsbFNoaXBzU3VuaygpIHtcbiAgICAgICAgY29uc3QgYWxsU2hpcHMgPSBbXVxuICAgICAgICB0aGlzLmJvYXJkLmZvckVhY2goKGFycikgPT4ge1xuICAgICAgICAgICAgYXJyLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChpdGVtLnR5cGUgIT09IFwid2F0ZXJcIikgeyBhbGxTaGlwcy5wdXNoKGl0ZW0pIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG5cbiAgICAgICAgaWYgKGFsbFNoaXBzLmV2ZXJ5KChjdXJyZW50VmFsdWUpID0+IGN1cnJlbnRWYWx1ZS5oaXQgPT09IHRydWUpID09IHRydWUpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQgeyBHYW1lQm9hcmQgfSBmcm9tIFwiLi9nYW1lQm9hcmRcIlxuXG5leHBvcnQgY29uc3QgUGxheWVyID0gY2xhc3Mge1xuICAgIGNvbnN0cnVjdG9yKGNvbXB1dGVyLCBzaXplLCB3aGljaFBsYXllcikge1xuICAgICAgICB0aGlzLmNvbXB1dGVyID0gY29tcHV0ZXJcbiAgICAgICAgdGhpcy53aGljaFBsYXllciA9IHdoaWNoUGxheWVyXG4gICAgICAgIHRoaXMuZ2FtZUJvYXJkID0gbmV3IEdhbWVCb2FyZChzaXplKVxuICAgIH1cbn0iLCJleHBvcnQgY29uc3QgU2hpcCA9IGNsYXNzIHtcbiAgICBjb25zdHJ1Y3RvcihsZW5ndGgsKSB7XG4gICAgICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoXG4gICAgICAgIHRoaXMuZGFtYWdlID0gMFxuICAgICAgICB0aGlzLmZsb2F0aW5nID0gdHJ1ZVxuICAgIH1cblxuICAgIGhpdEJvYXQoKSB7XG4gICAgICAgIGlmICh0aGlzLmRhbWFnZSA8IHRoaXMubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLmRhbWFnZSA9IHRoaXMuZGFtYWdlICsgMVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuaXNTdW5rKClcbiAgICB9XG5cbiAgICBpc1N1bmsoKSB7XG4gICAgICAgIGlmICh0aGlzLmRhbWFnZSA9PT0gdGhpcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMuZmxvYXRpbmcgPSBmYWxzZVxuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9XG4gICAgfVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7IGluaXRpYWxpemVHYW1lIH0gZnJvbSAnLi9ET01Mb2dpYy9zdGFydEdhbWUnXG5pbXBvcnQgJy4vc3R5bGUuY3NzJ1xuXG5pbml0aWFsaXplR2FtZSgpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9