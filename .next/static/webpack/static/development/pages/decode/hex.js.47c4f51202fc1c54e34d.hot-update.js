webpackHotUpdate("static/development/pages/decode/hex.js",{

/***/ "./components/Transaction.tsx":
/*!************************************!*\
  !*** ./components/Transaction.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ethers_utils_bignumber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ethers/utils/bignumber */ "./node_modules/ethers/utils/bignumber.js");
/* harmony import */ var ethers_utils_bignumber__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ethers_utils_bignumber__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "/home/ilan/dev/cc-tools/components/Transaction.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


var keyType = {
  hash: "string",
  to: "string",
  from: "string",
  nonce: "number",
  gasLimit: "BigNumber",
  gasPrice: "BigNumber",
  data: "string",
  value: "BigNumber",
  chainId: "number",
  r: "string",
  s: "string",
  v: "number"
};

var TxInfo = function TxInfo(_ref) {
  var t = _ref.t;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(t).map(function (k, i) {
    return __jsx(IfExists, {
      t: t,
      k: k,
      key: i,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    });
  })));
};

var IfExists = function IfExists(_ref2) {
  var t = _ref2.t,
      k = _ref2.k;

  if (!t[k]) {
    return null;
  }

  var v = t[k];

  if (t[k] instanceof ethers_utils_bignumber__WEBPACK_IMPORTED_MODULE_2__["BigNumber"]) {
    v = t[k].toString();
  }

  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, k, ": ", v);
};

/* harmony default export */ __webpack_exports__["default"] = (TxInfo);

/***/ })

})
//# sourceMappingURL=hex.js.47c4f51202fc1c54e34d.hot-update.js.map