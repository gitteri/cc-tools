module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Transaction.tsx":
/*!************************************!*\
  !*** ./components/Transaction.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ethers_utils_bignumber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ethers/utils/bignumber */ "ethers/utils/bignumber");
/* harmony import */ var ethers_utils_bignumber__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ethers_utils_bignumber__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/ilan/dev/cc-tools/components/Transaction.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const TxInfo = ({
  t
}) => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, Object.keys(t).map((k, i) => __jsx(IfExists, {
  t: t,
  k: k,
  key: i,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}))));

const IfExists = ({
  t,
  k
}) => {
  if (!t[k]) {
    return null;
  }

  let v = t[k];

  if (t[k] instanceof ethers_utils_bignumber__WEBPACK_IMPORTED_MODULE_1__["BigNumber"]) {
    v = t[k].toString();
  }

  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }, k, ": ", v);
};

/* harmony default export */ __webpack_exports__["default"] = (TxInfo);

/***/ }),

/***/ "./pages/decode/hex/index.tsx":
/*!************************************!*\
  !*** ./pages/decode/hex/index.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ethers_utils_transaction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ethers/utils/transaction */ "ethers/utils/transaction");
/* harmony import */ var ethers_utils_transaction__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ethers_utils_transaction__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Transaction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/Transaction */ "./components/Transaction.tsx");
var _jsxFileName = "/home/ilan/dev/cc-tools/pages/decode/hex/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class HexDecoder extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "decodeTx", e => {
      try {
        let decodedTx = Object(ethers_utils_transaction__WEBPACK_IMPORTED_MODULE_1__["parse"])(e.target.value);

        if (decodedTx) {
          this.setState({
            decodedTx,
            errorMsg: ""
          });
        }

        console.log(decodedTx);
      } catch (e) {
        if (e instanceof Error) {
          console.log(e.message);
          this.setState({
            decodeTx: undefined,
            errorMsg: e.message
          });
        }
      }
    });

    _defineProperty(this, "render", () => {
      const textClass = this.state.errorMsg !== "" ? "is-invalid form-control" : "form-control";
      return __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, __jsx("div", {
        className: "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, __jsx("label", {
        "html-for": "decode-tx",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, "Enter Raw Hex"), __jsx("textarea", {
        className: textClass,
        id: "decode-tx",
        onChange: this.decodeTx,
        rows: 4,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }), __jsx("div", {
        className: "invalid-feedback",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, this.state.errorMsg)), this.state.decodedTx && __jsx(_components_Transaction__WEBPACK_IMPORTED_MODULE_2__["default"], {
        t: this.state.decodedTx,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }));
    });

    this.state = {
      decodeTx: "",
      errorMsg: ""
    };
  }

}

/* harmony default export */ __webpack_exports__["default"] = (HexDecoder);

/***/ }),

/***/ 4:
/*!******************************************!*\
  !*** multi ./pages/decode/hex/index.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/ilan/dev/cc-tools/pages/decode/hex/index.tsx */"./pages/decode/hex/index.tsx");


/***/ }),

/***/ "ethers/utils/bignumber":
/*!*****************************************!*\
  !*** external "ethers/utils/bignumber" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("ethers/utils/bignumber");

/***/ }),

/***/ "ethers/utils/transaction":
/*!*******************************************!*\
  !*** external "ethers/utils/transaction" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("ethers/utils/transaction");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=hex.js.map