"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_yazan_Desktop_BlockChain_waveFront_wave_portal_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/regenerator-runtime/runtime.js */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_yazan_Desktop_BlockChain_waveFront_wave_portal_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_yazan_Desktop_BlockChain_waveFront_wave_portal_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _utils_WavePortal_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/WavePortal.json */ \"./utils/WavePortal.json\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar App = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), currentAccount = ref[0], setCurrentAccount = ref[1];\n    var contractAddress = \"0x53e483a76db0311Ef4702c3A9d235e852207b60e\";\n    var contractABI = _utils_WavePortal_json__WEBPACK_IMPORTED_MODULE_3__.abi;\n    var checkIfWalletIsConnected = _asyncToGenerator(C_Users_yazan_Desktop_BlockChain_waveFront_wave_portal_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        var ethereum, accounts, account;\n        return C_Users_yazan_Desktop_BlockChain_waveFront_wave_portal_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.prev = 0;\n                    ethereum = window.ethereum;\n                    if (ethereum) {\n                        _ctx.next = 7;\n                        break;\n                    }\n                    console.log(\"Make sure you have metamask!\");\n                    return _ctx.abrupt(\"return\");\n                case 7:\n                    {\n                        console.log(\"We have the ethereum object\", ethereum);\n                    }\n                case 8:\n                    _ctx.next = 10;\n                    return ethereum.request({\n                        method: \"eth_accounts\"\n                    });\n                case 10:\n                    accounts = _ctx.sent;\n                    if (accounts.length !== 0) {\n                        account = accounts[0];\n                        console.log(\"Found an authorized account:\", account);\n                        setCurrentAccount(account);\n                    } else {\n                        console.log(\"No authorized account found\");\n                    }\n                    _ctx.next = 17;\n                    break;\n                case 14:\n                    _ctx.prev = 14;\n                    _ctx.t0 = _ctx[\"catch\"](0);\n                    console.log(_ctx.t0);\n                case 17:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee, null, [\n            [\n                0,\n                14\n            ]\n        ]);\n    }));\n    /**\r\n   * Implement your connectWallet method here\r\n   */ var connectWallet = _asyncToGenerator(C_Users_yazan_Desktop_BlockChain_waveFront_wave_portal_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        var ethereum, accounts;\n        return C_Users_yazan_Desktop_BlockChain_waveFront_wave_portal_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.prev = 0;\n                    ethereum = window.ethereum;\n                    if (ethereum) {\n                        _ctx.next = 5;\n                        break;\n                    }\n                    alert(\"Get MetaMask!\");\n                    return _ctx.abrupt(\"return\");\n                case 5:\n                    _ctx.next = 7;\n                    return ethereum.request({\n                        method: \"eth_requestAccounts\"\n                    });\n                case 7:\n                    accounts = _ctx.sent;\n                    console.log(\"Connected\", accounts[0]);\n                    setCurrentAccount(accounts[0]);\n                    _ctx.next = 15;\n                    break;\n                case 12:\n                    _ctx.prev = 12;\n                    _ctx.t0 = _ctx[\"catch\"](0);\n                    console.log(_ctx.t0);\n                case 15:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee, null, [\n            [\n                0,\n                12\n            ]\n        ]);\n    }));\n    var wave = _asyncToGenerator(C_Users_yazan_Desktop_BlockChain_waveFront_wave_portal_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        var ethereum, provider, signer, wavePortalContract, count, waveTxn;\n        return C_Users_yazan_Desktop_BlockChain_waveFront_wave_portal_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.prev = 0;\n                    ethereum = window.ethereum;\n                    if (!ethereum) {\n                        _ctx.next = 23;\n                        break;\n                    }\n                    provider = new ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.providers.Web3Provider(ethereum);\n                    signer = provider.getSigner();\n                    wavePortalContract = new ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.Contract(contractAddress, contractABI, signer);\n                    _ctx.next = 8;\n                    return wavePortalContract.getTotalWaves();\n                case 8:\n                    count = _ctx.sent;\n                    console.log(\"Retrieved total wave count...\", count.toNumber());\n                    _ctx.next = 12;\n                    return wavePortalContract.wave();\n                case 12:\n                    waveTxn = _ctx.sent;\n                    console.log(\"Mining...\", waveTxn.hash);\n                    _ctx.next = 16;\n                    return waveTxn.wait();\n                case 16:\n                    console.log(\"Mined -- \", waveTxn.hash);\n                    _ctx.next = 19;\n                    return wavePortalContract.getTotalWaves();\n                case 19:\n                    count = _ctx.sent;\n                    console.log(\"Retrieved total wave count...\", count.toNumber());\n                    _ctx.next = 24;\n                    break;\n                case 23:\n                    {\n                        console.log(\"Ethereum object doesn't exist!\");\n                    }\n                case 24:\n                    _ctx.next = 29;\n                    break;\n                case 26:\n                    _ctx.prev = 26;\n                    _ctx.t0 = _ctx[\"catch\"](0);\n                    console.log(_ctx.t0);\n                case 29:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee, null, [\n            [\n                0,\n                26\n            ]\n        ]);\n    }));\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        checkIfWalletIsConnected();\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n        className: \"mainContainer\",\n        __source: {\n            fileName: \"C:\\\\Users\\\\yazan\\\\Desktop\\\\BlockChain\\\\waveFront\\\\wave_portal\\\\pages\\\\index.js\",\n            lineNumber: 90,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"div\", {\n            className: \"dataContainer\",\n            __source: {\n                fileName: \"C:\\\\Users\\\\yazan\\\\Desktop\\\\BlockChain\\\\waveFront\\\\wave_portal\\\\pages\\\\index.js\",\n                lineNumber: 91,\n                columnNumber: 7\n            },\n            __self: _this,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n                    className: \"header\",\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\yazan\\\\Desktop\\\\BlockChain\\\\waveFront\\\\wave_portal\\\\pages\\\\index.js\",\n                        lineNumber: 92,\n                        columnNumber: 9\n                    },\n                    __self: _this,\n                    children: \"👋 Hey there!\"\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n                    className: \"bio\",\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\yazan\\\\Desktop\\\\BlockChain\\\\waveFront\\\\wave_portal\\\\pages\\\\index.js\",\n                        lineNumber: 94,\n                        columnNumber: 9\n                    },\n                    __self: _this,\n                    children: \"I am farza and I worked on self-driving cars so that's pretty cool right? Connect your Ethereum wallet and wave at me!\"\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"button\", {\n                    className: \"waveButton\",\n                    onClick: wave,\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\yazan\\\\Desktop\\\\BlockChain\\\\waveFront\\\\wave_portal\\\\pages\\\\index.js\",\n                        lineNumber: 99,\n                        columnNumber: 9\n                    },\n                    __self: _this,\n                    children: \"Wave at Me\"\n                }),\n                !currentAccount && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"button\", {\n                    className: \"waveButton\",\n                    onClick: connectWallet,\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\yazan\\\\Desktop\\\\BlockChain\\\\waveFront\\\\wave_portal\\\\pages\\\\index.js\",\n                        lineNumber: 107,\n                        columnNumber: 11\n                    },\n                    __self: _this,\n                    children: \"Connect Wallet\"\n                })\n            ]\n        })\n    }));\n};\n_s(App, \"X84oG7rPwBW3Op/2mv/xhVbwveQ=\");\n_c = App;\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBldGhlcnMgfSBmcm9tIFwiZXRoZXJzXCI7XHJcbmltcG9ydCBhYmkgZnJvbSBcIi4uL3V0aWxzL1dhdmVQb3J0YWwuanNvblwiO1xyXG5cclxuY29uc3QgQXBwID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtjdXJyZW50QWNjb3VudCwgc2V0Q3VycmVudEFjY291bnRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgY29udHJhY3RBZGRyZXNzID0gXCIweDUzZTQ4M2E3NmRiMDMxMUVmNDcwMmMzQTlkMjM1ZTg1MjIwN2I2MGVcIjtcclxuICBjb25zdCBjb250cmFjdEFCSSA9IGFiaS5hYmk7XHJcblxyXG4gIGNvbnN0IGNoZWNrSWZXYWxsZXRJc0Nvbm5lY3RlZCA9IGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHsgZXRoZXJldW0gfSA9IHdpbmRvdztcclxuXHJcbiAgICAgIGlmICghZXRoZXJldW0pIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIk1ha2Ugc3VyZSB5b3UgaGF2ZSBtZXRhbWFzayFcIik7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiV2UgaGF2ZSB0aGUgZXRoZXJldW0gb2JqZWN0XCIsIGV0aGVyZXVtKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCBldGhlcmV1bS5yZXF1ZXN0KHsgbWV0aG9kOiBcImV0aF9hY2NvdW50c1wiIH0pO1xyXG5cclxuICAgICAgaWYgKGFjY291bnRzLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICAgIGNvbnN0IGFjY291bnQgPSBhY2NvdW50c1swXTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkZvdW5kIGFuIGF1dGhvcml6ZWQgYWNjb3VudDpcIiwgYWNjb3VudCk7XHJcbiAgICAgICAgc2V0Q3VycmVudEFjY291bnQoYWNjb3VudCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJObyBhdXRob3JpemVkIGFjY291bnQgZm91bmRcIik7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICAvKipcclxuICAgKiBJbXBsZW1lbnQgeW91ciBjb25uZWN0V2FsbGV0IG1ldGhvZCBoZXJlXHJcbiAgICovXHJcbiAgY29uc3QgY29ubmVjdFdhbGxldCA9IGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHsgZXRoZXJldW0gfSA9IHdpbmRvdztcclxuXHJcbiAgICAgIGlmICghZXRoZXJldW0pIHtcclxuICAgICAgICBhbGVydChcIkdldCBNZXRhTWFzayFcIik7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IGV0aGVyZXVtLnJlcXVlc3Qoe1xyXG4gICAgICAgIG1ldGhvZDogXCJldGhfcmVxdWVzdEFjY291bnRzXCIsXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgY29uc29sZS5sb2coXCJDb25uZWN0ZWRcIiwgYWNjb3VudHNbMF0pO1xyXG4gICAgICBzZXRDdXJyZW50QWNjb3VudChhY2NvdW50c1swXSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICB9XHJcbiAgfTtcclxuICBjb25zdCB3YXZlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgeyBldGhlcmV1bSB9ID0gd2luZG93O1xyXG5cclxuICAgICAgaWYgKGV0aGVyZXVtKSB7XHJcbiAgICAgICAgY29uc3QgcHJvdmlkZXIgPSBuZXcgZXRoZXJzLnByb3ZpZGVycy5XZWIzUHJvdmlkZXIoZXRoZXJldW0pO1xyXG4gICAgICAgIGNvbnN0IHNpZ25lciA9IHByb3ZpZGVyLmdldFNpZ25lcigpO1xyXG4gICAgICAgIGNvbnN0IHdhdmVQb3J0YWxDb250cmFjdCA9IG5ldyBldGhlcnMuQ29udHJhY3QoY29udHJhY3RBZGRyZXNzLCBjb250cmFjdEFCSSwgc2lnbmVyKTtcclxuXHJcbiAgICAgICAgbGV0IGNvdW50ID0gYXdhaXQgd2F2ZVBvcnRhbENvbnRyYWN0LmdldFRvdGFsV2F2ZXMoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlJldHJpZXZlZCB0b3RhbCB3YXZlIGNvdW50Li4uXCIsIGNvdW50LnRvTnVtYmVyKCkpO1xyXG5cclxuICAgICAgICBjb25zdCB3YXZlVHhuID0gYXdhaXQgd2F2ZVBvcnRhbENvbnRyYWN0LndhdmUoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIk1pbmluZy4uLlwiLCB3YXZlVHhuLmhhc2gpO1xyXG5cclxuICAgICAgICBhd2FpdCB3YXZlVHhuLndhaXQoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIk1pbmVkIC0tIFwiLCB3YXZlVHhuLmhhc2gpO1xyXG5cclxuICAgICAgICBjb3VudCA9IGF3YWl0IHdhdmVQb3J0YWxDb250cmFjdC5nZXRUb3RhbFdhdmVzKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJSZXRyaWV2ZWQgdG90YWwgd2F2ZSBjb3VudC4uLlwiLCBjb3VudC50b051bWJlcigpKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkV0aGVyZXVtIG9iamVjdCBkb2Vzbid0IGV4aXN0IVwiKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY2hlY2tJZldhbGxldElzQ29ubmVjdGVkKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtYWluQ29udGFpbmVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGF0YUNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+8J+RiyBIZXkgdGhlcmUhPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmlvXCI+XHJcbiAgICAgICAgICBJIGFtIGZhcnphIGFuZCBJIHdvcmtlZCBvbiBzZWxmLWRyaXZpbmcgY2FycyBzbyB0aGF0J3MgcHJldHR5IGNvb2xcclxuICAgICAgICAgIHJpZ2h0PyBDb25uZWN0IHlvdXIgRXRoZXJldW0gd2FsbGV0IGFuZCB3YXZlIGF0IG1lIVxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIndhdmVCdXR0b25cIiBvbkNsaWNrPXt3YXZlfT5cclxuICAgICAgICAgIFdhdmUgYXQgTWVcclxuICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgey8qXHJcbiAgICAgICAgICogSWYgdGhlcmUgaXMgbm8gY3VycmVudEFjY291bnQgcmVuZGVyIHRoaXMgYnV0dG9uXHJcbiAgICAgICAgICovfVxyXG4gICAgICAgIHshY3VycmVudEFjY291bnQgJiYgKFxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ3YXZlQnV0dG9uXCIgb25DbGljaz17Y29ubmVjdFdhbGxldH0+XHJcbiAgICAgICAgICAgIENvbm5lY3QgV2FsbGV0XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICApfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHA7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiZXRoZXJzIiwiYWJpIiwiQXBwIiwiY3VycmVudEFjY291bnQiLCJzZXRDdXJyZW50QWNjb3VudCIsImNvbnRyYWN0QWRkcmVzcyIsImNvbnRyYWN0QUJJIiwiY2hlY2tJZldhbGxldElzQ29ubmVjdGVkIiwiZXRoZXJldW0iLCJhY2NvdW50cyIsImFjY291bnQiLCJ3aW5kb3ciLCJjb25zb2xlIiwibG9nIiwicmVxdWVzdCIsIm1ldGhvZCIsImxlbmd0aCIsImNvbm5lY3RXYWxsZXQiLCJhbGVydCIsIndhdmUiLCJwcm92aWRlciIsInNpZ25lciIsIndhdmVQb3J0YWxDb250cmFjdCIsImNvdW50Iiwid2F2ZVR4biIsInByb3ZpZGVycyIsIldlYjNQcm92aWRlciIsImdldFNpZ25lciIsIkNvbnRyYWN0IiwiZ2V0VG90YWxXYXZlcyIsInRvTnVtYmVyIiwiaGFzaCIsIndhaXQiLCJkaXYiLCJjbGFzc05hbWUiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});