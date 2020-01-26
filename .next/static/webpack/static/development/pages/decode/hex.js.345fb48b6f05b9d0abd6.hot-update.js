webpackHotUpdate("static/development/pages/decode/hex.js",{

/***/ "./components/Transaction.tsx":
/*!************************************!*\
  !*** ./components/Transaction.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/ilan/dev/cc-tools/components/Transaction.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


// hash?: string;
// to?: string;
// from?: string;
// nonce: number;
// gasLimit: BigNumber;
// gasPrice: BigNumber;
// data: string;
// value: BigNumber;
// chainId: number;
// r?: string;
// s?: string;
// v?: number;
var TxInfo = function TxInfo(t) {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx(IfExists, {
    t: t,
    k: "hash",
    type: "string",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  })));
};

var IfExists = function IfExists(_ref) {
  var t = _ref.t,
      k = _ref.k,
      type = _ref.type;

  if (!t[k]) {
    return null;
  }

  switch (type) {
    case "string":
      return __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, k, ": ", t[k]);
  }
}; // {"nonce":3,"gasPrice":{"_hex":"0x3b9aca00"},"gasLimit":{"_hex":"0xdb91"},"to":"0xdAC17F958D2ee523a2206206994597C13D831ec7","value":{"_hex":"0x00"},"data":"0xa9059cbb000000000000000000000000954ef2f18ae8426ffb94466b986bfea7069c13410000000000000000000000000000000000000000000000000000000043c73d60","chainId":0,"v":28,"r":"0x35fa020909b4a5e36533e5d1398772631ab83b556f63d2e9a44254f9aca30c00","s":"0x3da9b5769419f214ecb7c2027c8233b4294986b48651af1210ab6f7f331cd365","from":"0x80c2AE82885A4A61C083c90c53B039fF20e3F013","hash":"0x55f956cf92ff9bcfc815ce878bcfbe89d8f62ad411b842b031c9a8021a16b152"}


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
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var ethers_utils_transaction__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ethers/utils/transaction */ "./node_modules/ethers/utils/transaction.js");
/* harmony import */ var ethers_utils_transaction__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(ethers_utils_transaction__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_Transaction__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/Transaction */ "./components/Transaction.tsx");







var _jsxFileName = "/home/ilan/dev/cc-tools/pages/decode/hex/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;




var HexDecoder =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(HexDecoder, _React$Component);

  function HexDecoder(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HexDecoder);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(HexDecoder).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "decodeTx", function (e) {
      try {
        var decodedTx = Object(ethers_utils_transaction__WEBPACK_IMPORTED_MODULE_8__["parse"])(e.target.value);

        if (decodedTx) {
          _this.setState({
            decodedTx: decodedTx,
            errorMsg: ""
          });
        }

        console.log(decodedTx);
      } catch (e) {
        if (e instanceof Error) {
          console.log(e.message);

          _this.setState({
            decodeTx: undefined,
            errorMsg: e.message
          });
        }
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "render", function () {
      var textClass = _this.state.errorMsg !== "" ? "is-invalid form-control" : "form-control";
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
        onChange: _this.decodeTx,
        "html-rows": "4",
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
      }, _this.state.errorMsg)), __jsx(_components_Transaction__WEBPACK_IMPORTED_MODULE_9__["default"], {
        t: _this.state.decodedTx,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }), _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(_this.state.decodedTx));
    });

    _this.state = {
      decodeTx: "",
      errorMsg: ""
    };
    return _this;
  }

  return HexDecoder;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (HexDecoder);

/***/ })

})
//# sourceMappingURL=hex.js.345fb48b6f05b9d0abd6.hot-update.js.map