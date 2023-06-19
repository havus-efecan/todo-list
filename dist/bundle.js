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
___CSS_LOADER_EXPORT___.push([module.id, `html,body{
    height: 100%;
    margin: 0;

}



body{
    background: hsla(337, 65%, 78%, 1);
    background: linear-gradient(90deg, hsla(337, 65%, 78%, 1) 31%, hsla(0, 100%, 82%, 1) 77%);
    background: -moz-linear-gradient(90deg, hsla(337, 65%, 78%, 1) 31%, hsla(0, 100%, 82%, 1) 77%);
    background: -webkit-linear-gradient(90deg, hsla(337, 65%, 78%, 1) 31%, hsla(0, 100%, 82%, 1) 77%);

    display: flex;
    justify-content: center;
    align-items: center;
}

input[type="checkbox"] {
    position: relative;
    appearance: none;
    width: 1.5em;
    height: 1.5em;
    border-radius: 50%;
    border: 2px solid rgb(240, 203, 134);


  }

  input[type="checkbox"]::before {
    content: " ";
    border-radius: 50%;
    height: 100%;
    width: 100%;
    position: absolute;
    font-size: 1.2em;
    visibility: hidden;
  }
  input[type="checkbox"]:hover{
    background-color: rgb(21, 172, 71);

  }
 
  
  input[type="checkbox"]:checked::before {
    /* Use \`visibility\` instead of \`display\` to avoid recalculating layout */
    visibility: visible;
  }
  
  input[type="checkbox"]:disabled {
    border-color: black;
    background: #ddd;
    color: gray;
  }

h1{
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 42px;
    color: rgb(255, 255, 255);
}

.main-container{
    height: 700px;
    width: 1000px;
    background-color: rgb(255, 255, 255);
    border-radius: 24px;

    display: grid;

    grid-template: 0.2fr 1fr/ 0.3fr 1fr;

}


.header{
    grid-area: 1/1/2/3;
    display: flex;
    background-color: rgb(240, 203, 134);
    border-top-left-radius: 24px;
    border-top-right-radius: 24px;
    justify-content: flex-start;
    align-items: center;
    padding-left: 24px;
     box-sizing: border-box;



}
.logo{
    display: flex;
    flex-direction: row;
    flex-basis: 50%;
    justify-content: flex-start;
    align-items: center;
}
.logo > i{
    margin-right: 24px;
}


.sidebar{
    background-color: rgb(255, 242, 225);
    grid-area: 2/1/3/2;
    display: flex;
    border-bottom-left-radius: 24px;
    flex-direction: column;
    padding: 18px;

}
.sidebar > *{
    flex-basis: 30%;
}

.default-projects-list, .projects-list{
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;

}


.projects-title{
    color: rgb(109, 109, 109);
    font-size: 24px;
}


button{
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    border: none;
    background-color: rgb(255, 242, 225);
    font-size: 18px;
    color: rgb(143, 143, 143);
    font-weight: 600;
    cursor: pointer;

}

.todo-container{
    height: 100%;
    width: 100%;
    padding: 24px;
    grid-area: 2/2/3/3;
    display: grid;
    grid-template: 0.25fr 1fr/1fr;
    box-sizing: border-box;
}
.todo-container > div{
    flex-basis: 10%;
}

.task{
    padding: 12px;
    margin: 8px;
    display: flex;
    align-items: center;
    background-color: rgb(255, 242, 225);
    border-radius: 4px;
    justify-content: space-between;
    padding-left: 12px;
    padding-right: 24px;
    width: 700px;
    height: 150px;
    white-space: nowrap;
    box-sizing: border-box;
}

.task *{
    margin-top: 0px;
    margin-bottom: 0px;
}

.task-left{
    display: flex;
    align-items: center;
    

}

.task-center{
    overflow: hidden;
    text-overflow:ellipsis; 
    width: 400px;
    display: flex;
    margin-left: 24px;
}

.task-center p{
  white-space: nowrap;
  overflow: hidden;
  text-overflow:ellipsis; 
  color: rgb(143, 143, 143);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;


}

.task-right{
    display: flex;
    align-items: center;
    gap: 18px;
}

.task h1{
    color: rgb(109, 109, 109);
    margin-left: 4px;
    font-size: 24px;
    font-weight: 500;

}

.task h2 {
    color: rgb(143, 143, 143);
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 18px;
}

.add-task{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 4px;
}

.add-task h2{
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 24px;
    color: rgb(109, 109, 109);

}




`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,YAAY;IACZ,SAAS;;AAEb;;;;AAIA;IACI,kCAAkC;IAClC,yFAAyF;IACzF,8FAA8F;IAC9F,iGAAiG;;IAEjG,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;IAClB,gBAAgB;IAChB,YAAY;IACZ,aAAa;IACb,kBAAkB;IAClB,oCAAoC;;;EAGtC;;EAEA;IACE,YAAY;IACZ,kBAAkB;IAClB,YAAY;IACZ,WAAW;IACX,kBAAkB;IAClB,gBAAgB;IAChB,kBAAkB;EACpB;EACA;IACE,kCAAkC;;EAEpC;;;EAGA;IACE,wEAAwE;IACxE,mBAAmB;EACrB;;EAEA;IACE,mBAAmB;IACnB,gBAAgB;IAChB,WAAW;EACb;;AAEF;IACI,wIAAwI;IACxI,eAAe;IACf,yBAAyB;AAC7B;;AAEA;IACI,aAAa;IACb,aAAa;IACb,oCAAoC;IACpC,mBAAmB;;IAEnB,aAAa;;IAEb,mCAAmC;;AAEvC;;;AAGA;IACI,kBAAkB;IAClB,aAAa;IACb,oCAAoC;IACpC,4BAA4B;IAC5B,6BAA6B;IAC7B,2BAA2B;IAC3B,mBAAmB;IACnB,kBAAkB;KACjB,sBAAsB;;;;AAI3B;AACA;IACI,aAAa;IACb,mBAAmB;IACnB,eAAe;IACf,2BAA2B;IAC3B,mBAAmB;AACvB;AACA;IACI,kBAAkB;AACtB;;;AAGA;IACI,oCAAoC;IACpC,kBAAkB;IAClB,aAAa;IACb,+BAA+B;IAC/B,sBAAsB;IACtB,aAAa;;AAEjB;AACA;IACI,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,6BAA6B;IAC7B,uBAAuB;;AAE3B;;;AAGA;IACI,yBAAyB;IACzB,eAAe;AACnB;;;AAGA;IACI,wIAAwI;IACxI,YAAY;IACZ,oCAAoC;IACpC,eAAe;IACf,yBAAyB;IACzB,gBAAgB;IAChB,eAAe;;AAEnB;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,aAAa;IACb,kBAAkB;IAClB,aAAa;IACb,6BAA6B;IAC7B,sBAAsB;AAC1B;AACA;IACI,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,WAAW;IACX,aAAa;IACb,mBAAmB;IACnB,oCAAoC;IACpC,kBAAkB;IAClB,8BAA8B;IAC9B,kBAAkB;IAClB,mBAAmB;IACnB,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,sBAAsB;AAC1B;;AAEA;IACI,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,mBAAmB;;;AAGvB;;AAEA;IACI,gBAAgB;IAChB,sBAAsB;IACtB,YAAY;IACZ,aAAa;IACb,iBAAiB;AACrB;;AAEA;EACE,mBAAmB;EACnB,gBAAgB;EAChB,sBAAsB;EACtB,yBAAyB;EACzB,wIAAwI;;;AAG1I;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,yBAAyB;IACzB,gBAAgB;IAChB,eAAe;IACf,gBAAgB;;AAEpB;;AAEA;IACI,yBAAyB;IACzB,wIAAwI;IACxI,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,2BAA2B;IAC3B,mBAAmB;IACnB,QAAQ;AACZ;;AAEA;IACI,wIAAwI;IACxI,eAAe;IACf,yBAAyB;;AAE7B","sourcesContent":["html,body{\n    height: 100%;\n    margin: 0;\n\n}\n\n\n\nbody{\n    background: hsla(337, 65%, 78%, 1);\n    background: linear-gradient(90deg, hsla(337, 65%, 78%, 1) 31%, hsla(0, 100%, 82%, 1) 77%);\n    background: -moz-linear-gradient(90deg, hsla(337, 65%, 78%, 1) 31%, hsla(0, 100%, 82%, 1) 77%);\n    background: -webkit-linear-gradient(90deg, hsla(337, 65%, 78%, 1) 31%, hsla(0, 100%, 82%, 1) 77%);\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\ninput[type=\"checkbox\"] {\n    position: relative;\n    appearance: none;\n    width: 1.5em;\n    height: 1.5em;\n    border-radius: 50%;\n    border: 2px solid rgb(240, 203, 134);\n\n\n  }\n\n  input[type=\"checkbox\"]::before {\n    content: \" \";\n    border-radius: 50%;\n    height: 100%;\n    width: 100%;\n    position: absolute;\n    font-size: 1.2em;\n    visibility: hidden;\n  }\n  input[type=\"checkbox\"]:hover{\n    background-color: rgb(21, 172, 71);\n\n  }\n \n  \n  input[type=\"checkbox\"]:checked::before {\n    /* Use `visibility` instead of `display` to avoid recalculating layout */\n    visibility: visible;\n  }\n  \n  input[type=\"checkbox\"]:disabled {\n    border-color: black;\n    background: #ddd;\n    color: gray;\n  }\n\nh1{\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    font-size: 42px;\n    color: rgb(255, 255, 255);\n}\n\n.main-container{\n    height: 700px;\n    width: 1000px;\n    background-color: rgb(255, 255, 255);\n    border-radius: 24px;\n\n    display: grid;\n\n    grid-template: 0.2fr 1fr/ 0.3fr 1fr;\n\n}\n\n\n.header{\n    grid-area: 1/1/2/3;\n    display: flex;\n    background-color: rgb(240, 203, 134);\n    border-top-left-radius: 24px;\n    border-top-right-radius: 24px;\n    justify-content: flex-start;\n    align-items: center;\n    padding-left: 24px;\n     box-sizing: border-box;\n\n\n\n}\n.logo{\n    display: flex;\n    flex-direction: row;\n    flex-basis: 50%;\n    justify-content: flex-start;\n    align-items: center;\n}\n.logo > i{\n    margin-right: 24px;\n}\n\n\n.sidebar{\n    background-color: rgb(255, 242, 225);\n    grid-area: 2/1/3/2;\n    display: flex;\n    border-bottom-left-radius: 24px;\n    flex-direction: column;\n    padding: 18px;\n\n}\n.sidebar > *{\n    flex-basis: 30%;\n}\n\n.default-projects-list, .projects-list{\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    align-items: flex-start;\n\n}\n\n\n.projects-title{\n    color: rgb(109, 109, 109);\n    font-size: 24px;\n}\n\n\nbutton{\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    border: none;\n    background-color: rgb(255, 242, 225);\n    font-size: 18px;\n    color: rgb(143, 143, 143);\n    font-weight: 600;\n    cursor: pointer;\n\n}\n\n.todo-container{\n    height: 100%;\n    width: 100%;\n    padding: 24px;\n    grid-area: 2/2/3/3;\n    display: grid;\n    grid-template: 0.25fr 1fr/1fr;\n    box-sizing: border-box;\n}\n.todo-container > div{\n    flex-basis: 10%;\n}\n\n.task{\n    padding: 12px;\n    margin: 8px;\n    display: flex;\n    align-items: center;\n    background-color: rgb(255, 242, 225);\n    border-radius: 4px;\n    justify-content: space-between;\n    padding-left: 12px;\n    padding-right: 24px;\n    width: 700px;\n    height: 150px;\n    white-space: nowrap;\n    box-sizing: border-box;\n}\n\n.task *{\n    margin-top: 0px;\n    margin-bottom: 0px;\n}\n\n.task-left{\n    display: flex;\n    align-items: center;\n    \n\n}\n\n.task-center{\n    overflow: hidden;\n    text-overflow:ellipsis; \n    width: 400px;\n    display: flex;\n    margin-left: 24px;\n}\n\n.task-center p{\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow:ellipsis; \n  color: rgb(143, 143, 143);\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n\n\n}\n\n.task-right{\n    display: flex;\n    align-items: center;\n    gap: 18px;\n}\n\n.task h1{\n    color: rgb(109, 109, 109);\n    margin-left: 4px;\n    font-size: 24px;\n    font-weight: 500;\n\n}\n\n.task h2 {\n    color: rgb(143, 143, 143);\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    font-size: 18px;\n}\n\n.add-task{\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    gap: 4px;\n}\n\n.add-task h2{\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    font-size: 24px;\n    color: rgb(109, 109, 109);\n\n}\n\n\n\n\n"],"sourceRoot":""}]);
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

/***/ "./src/DOMstuff.js":
/*!*************************!*\
  !*** ./src/DOMstuff.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addProjectButton: () => (/* binding */ addProjectButton),
/* harmony export */   drawTask: () => (/* binding */ drawTask),
/* harmony export */   todoContainer: () => (/* binding */ todoContainer)
/* harmony export */ });
const mainContainer = document.querySelector('.main-container')
const header = document.querySelector('.header')
const sidebar = document.querySelector('.sidebar')
const todoContainer = document.querySelector('.todo-container')
const addProjectButton = document.querySelector('.add-project-button')

function drawTask(toDo){

    const taskDiv = document.createElement('div')
    const taskLeft = document.createElement('div')
    const taskRight = document.createElement('div')
    const taskCenter = document.createElement('div')


    const checkbox = document.createElement('input')
    checkbox.classList.add('checkbox')
    checkbox.type = 'checkbox'
    

    const taskName = document.createElement('h1')
    taskName.innerHTML = toDo.title

    taskLeft.appendChild(checkbox)
    taskLeft.appendChild(taskName)

    const taskNotes = document.createElement('p')
    taskNotes.innerHTML = toDo.description

    taskCenter.appendChild(taskNotes)


    const viewDetails = document.createElement('i')
    viewDetails.classList.add('fa-solid')
    viewDetails.classList.add('fa-eye')
    viewDetails.style.color = 'color:rgb(109, 109, 109);'


    const edit = document.createElement('i')
    edit.classList.add('fa-solid')
    edit.classList.add('fa-ellipsis-vertical')
    edit.style.color = 'color:rgb(109, 109, 109);'


    const date = document.createElement('h2')
    date.innerText = toDo.dueDate

    taskRight.appendChild(date)
    taskRight.appendChild(viewDetails)
    taskRight.appendChild(edit)


    taskDiv.classList.add('task')
    taskLeft.classList.add('task-left')
    taskRight.classList.add('task-right')
    taskCenter.classList.add('task-center')

    taskDiv.appendChild(taskLeft)
    taskDiv.appendChild(taskCenter)
    taskDiv.appendChild(taskRight)

    todoContainer.appendChild(taskDiv)

    edit.addEventListener('click',()=>{
        const clickedElement = event.target
        eraseTask(clickedElement)
    })

}


function eraseTask(clickedElement){

    clickedElement.parentNode.parentNode.remove()

}

function drawProjects(){
}

/***/ }),

/***/ "./src/logic.js":
/*!**********************!*\
  !*** ./src/logic.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createToDo: () => (/* binding */ createToDo)
/* harmony export */ });
let inbox,today,thisWeek,projects = []




const toDoFactory = (title,description,dueDate,priority) => {

    let toDoItem = {
        title: title,
        description: description,
        dueDate: dueDate,
        priority: priority
      };

    return {toDoItem}
}

const projectFactory = () => {

    let project = {
        
        todoItems : [],
        itemCount : 0,

        addItemToProject : function(toDoItem){
            this.todoItems.push(toDoItem)
            this.itemCount++
        }

        
      };

      return {project}
}




function createToDo(title,description,dueDate,priority){
    let newToDo = toDoFactory(title,description,dueDate,priority).toDoItem
    return newToDo
}

function addExistingToDo(toDo,container){
    container.push(toDo)
}



function createProject(title){
    let newProject = projectFactory(title)
    return newProject
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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/style.css */ "./src/style.css");
/* harmony import */ var _DOMstuff__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOMstuff */ "./src/DOMstuff.js");
/* harmony import */ var _logic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logic */ "./src/logic.js");





 let task = (0,_logic__WEBPACK_IMPORTED_MODULE_2__.createToDo)("Mow the lawn", "self explanatory", "06/02/2023", "medium")

 _DOMstuff__WEBPACK_IMPORTED_MODULE_1__.addProjectButton.addEventListener('click', ()=>{

    ;(0,_DOMstuff__WEBPACK_IMPORTED_MODULE_1__.drawTask)(task)

})







})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map