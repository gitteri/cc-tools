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
      type: keyType[k],
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
      k = _ref2.k,
      type = _ref2.type;

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
      lineNumber: 49
    },
    __self: this
  }, k, ":");
}; // {"nonce":3,"gasPrice":{"_hex":"0x3b9aca00"},"gasLimit":{"_hex":"0xdb91"},"to":"0xdAC17F958D2ee523a2206206994597C13D831ec7","value":{"_hex":"0x00"},"data":"0xa9059cbb000000000000000000000000954ef2f18ae8426ffb94466b986bfea7069c13410000000000000000000000000000000000000000000000000000000043c73d60","chainId":0,"v":28,"r":"0x35fa020909b4a5e36533e5d1398772631ab83b556f63d2e9a44254f9aca30c00","s":"0x3da9b5769419f214ecb7c2027c8233b4294986b48651af1210ab6f7f331cd365","from":"0x80c2AE82885A4A61C083c90c53B039fF20e3F013","hash":"0x55f956cf92ff9bcfc815ce878bcfbe89d8f62ad411b842b031c9a8021a16b152"}


/* harmony default export */ __webpack_exports__["default"] = (TxInfo);

/***/ })

})
//# sourceMappingURL=hex.js.c9957f1abcedbd379a2e.hot-update.js.map