webpackJsonp(["main"],{

/***/ "../../node_modules/create-empty-array/src/index.js":
/***/ (function(module, exports) {

function createEmptyArray(length) {
  return new Array(length).fill(undefined);
}

module.exports = createEmptyArray;


/***/ }),

/***/ "../a/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_create_empty_array__ = __webpack_require__("../../node_modules/create-empty-array/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_create_empty_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_create_empty_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__("../a/util.js");



console.log(__WEBPACK_IMPORTED_MODULE_0_create_empty_array___default.a);
Object(__WEBPACK_IMPORTED_MODULE_1__util__["a" /* default */])();

/***/ }),

/***/ "../a/util.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_create_html_element__ = __webpack_require__("../../node_modules/create-html-element/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_create_html_element___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_create_html_element__);


function hi() {
    const greeting = __WEBPACK_IMPORTED_MODULE_0_create_html_element___default()({
        name: "h1",
        html: "Hello from Application A"
    })

    if (typeof document !== "undefined") {
        document.body.innerHTML = greeting;
    }
}

/* harmony default export */ __webpack_exports__["a"] = (hi);

/***/ })

},["../a/index.js"]);