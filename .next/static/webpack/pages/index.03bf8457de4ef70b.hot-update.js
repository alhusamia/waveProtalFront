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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_yazan_Desktop_BlockChain_waveFront_wave_portal_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/regenerator-runtime/runtime.js */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_yazan_Desktop_BlockChain_waveFront_wave_portal_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_yazan_Desktop_BlockChain_waveFront_wave_portal_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _utils_WavePortal_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/WavePortal.json */ \"./utils/WavePortal.json\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar App = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), currentAccount = ref[0], setCurrentAccount = ref[1];\n    var contractAddress = \"0x53e483a76db0311Ef4702c3A9d235e852207b60e\";\n    var contractABI = _utils_WavePortal_json__WEBPACK_IMPORTED_MODULE_3__.abi;\n    var checkIfWalletIsConnected = _asyncToGenerator(C_Users_yazan_Desktop_BlockChain_waveFront_wave_portal_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        var ethereum, accounts, account;\n        return C_Users_yazan_Desktop_BlockChain_waveFront_wave_portal_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.prev = 0;\n                    ethereum = window.ethereum;\n                    if (ethereum) {\n                        _ctx.next = 7;\n                        break;\n                    }\n                    console.log(\"Make sure you have metamask!\");\n                    return _ctx.abrupt(\"return\");\n                case 7:\n                    {\n                        console.log(\"We have the ethereum object\", ethereum);\n                    }\n                case 8:\n                    _ctx.next = 10;\n                    return ethereum.request({\n                        method: \"eth_accounts\"\n                    });\n                case 10:\n                    accounts = _ctx.sent;\n                    if (accounts.length !== 0) {\n                        account = accounts[0];\n                        console.log(\"Found an authorized account:\", account);\n                        setCurrentAccount(account);\n                    } else {\n                        console.log(\"No authorized account found\");\n                    }\n                    _ctx.next = 17;\n                    break;\n                case 14:\n                    _ctx.prev = 14;\n                    _ctx.t0 = _ctx[\"catch\"](0);\n                    console.log(_ctx.t0);\n                case 17:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee, null, [\n            [\n                0,\n                14\n            ]\n        ]);\n    }));\n    /**\r\n   * Implement your connectWallet method here\r\n   */ var connectWallet = _asyncToGenerator(C_Users_yazan_Desktop_BlockChain_waveFront_wave_portal_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        var ethereum, accounts;\n        return C_Users_yazan_Desktop_BlockChain_waveFront_wave_portal_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.prev = 0;\n                    ethereum = window.ethereum;\n                    if (ethereum) {\n                        _ctx.next = 5;\n                        break;\n                    }\n                    alert(\"Get MetaMask!\");\n                    return _ctx.abrupt(\"return\");\n                case 5:\n                    _ctx.next = 7;\n                    return ethereum.request({\n                        method: \"eth_requestAccounts\"\n                    });\n                case 7:\n                    accounts = _ctx.sent;\n                    console.log(\"Connected\", accounts[0]);\n                    setCurrentAccount(accounts[0]);\n                    _ctx.next = 15;\n                    break;\n                case 12:\n                    _ctx.prev = 12;\n                    _ctx.t0 = _ctx[\"catch\"](0);\n                    console.log(_ctx.t0);\n                case 15:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee, null, [\n            [\n                0,\n                12\n            ]\n        ]);\n    }));\n    var wave = _asyncToGenerator(C_Users_yazan_Desktop_BlockChain_waveFront_wave_portal_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        var ethereum, provider, signer, wavePortalContract, count;\n        return C_Users_yazan_Desktop_BlockChain_waveFront_wave_portal_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.prev = 0;\n                    ethereum = window.ethereum;\n                    if (!ethereum) {\n                        _ctx.next = 12;\n                        break;\n                    }\n                    provider = new ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.providers.Web3Provider(ethereum);\n                    signer = provider.getSigner();\n                    wavePortalContract = new ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.Contract(contractAddress, contractABI, signer);\n                    _ctx.next = 8;\n                    return wavePortalContract.getTotalWaves();\n                case 8:\n                    count = _ctx.sent;\n                    console.log(\"Retrieved total wave count...\", count.toNumber());\n                    _ctx.next = 13;\n                    break;\n                case 12:\n                    {\n                        console.log(\"Ethereum object doesn't exist!\");\n                    }\n                case 13:\n                    _ctx.next = 18;\n                    break;\n                case 15:\n                    _ctx.prev = 15;\n                    _ctx.t0 = _ctx[\"catch\"](0);\n                    console.log(_ctx.t0);\n                case 18:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee, null, [\n            [\n                0,\n                15\n            ]\n        ]);\n    }));\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        checkIfWalletIsConnected();\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n        className: \"mainContainer\",\n        __source: {\n            fileName: \"C:\\\\Users\\\\yazan\\\\Desktop\\\\BlockChain\\\\waveFront\\\\wave_portal\\\\pages\\\\index.js\",\n            lineNumber: 86,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"div\", {\n            className: \"dataContainer\",\n            __source: {\n                fileName: \"C:\\\\Users\\\\yazan\\\\Desktop\\\\BlockChain\\\\waveFront\\\\wave_portal\\\\pages\\\\index.js\",\n                lineNumber: 87,\n                columnNumber: 7\n            },\n            __self: _this,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n                    className: \"header\",\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\yazan\\\\Desktop\\\\BlockChain\\\\waveFront\\\\wave_portal\\\\pages\\\\index.js\",\n                        lineNumber: 88,\n                        columnNumber: 9\n                    },\n                    __self: _this,\n                    children: \"👋 Hey there!\"\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n                    className: \"bio\",\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\yazan\\\\Desktop\\\\BlockChain\\\\waveFront\\\\wave_portal\\\\pages\\\\index.js\",\n                        lineNumber: 90,\n                        columnNumber: 9\n                    },\n                    __self: _this,\n                    children: \"I am farza and I worked on self-driving cars so that's pretty cool right? Connect your Ethereum wallet and wave at me!\"\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"button\", {\n                    className: \"waveButton\",\n                    onClick: wave,\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\yazan\\\\Desktop\\\\BlockChain\\\\waveFront\\\\wave_portal\\\\pages\\\\index.js\",\n                        lineNumber: 95,\n                        columnNumber: 9\n                    },\n                    __self: _this,\n                    children: \"Wave at Me\"\n                }),\n                !currentAccount && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"button\", {\n                    className: \"waveButton\",\n                    onClick: connectWallet,\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\yazan\\\\Desktop\\\\BlockChain\\\\waveFront\\\\wave_portal\\\\pages\\\\index.js\",\n                        lineNumber: 103,\n                        columnNumber: 11\n                    },\n                    __self: _this,\n                    children: \"Connect Wallet\"\n                })\n            ]\n        })\n    }));\n};\n_s(App, \"X84oG7rPwBW3Op/2mv/xhVbwveQ=\");\n_c = App;\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBa0Q7QUFDbkI7QUFDVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFMUMsR0FBSyxDQUFDSyxHQUFHLEdBQUcsUUFBUSxHQUFGLENBQUM7O0lBQ2pCLEdBQUssQ0FBdUNILEdBQVksR0FBWkEsK0NBQVEsQ0FBQyxDQUFFLElBQWhESSxjQUFjLEdBQXVCSixHQUFZLEtBQWpDSyxpQkFBaUIsR0FBSUwsR0FBWTtJQUN4RCxHQUFLLENBQUNNLGVBQWUsR0FBRyxDQUE0QztJQUNwRSxHQUFLLENBQUNDLFdBQVcsR0FBR0wsdURBQU87SUFFM0IsR0FBSyxDQUFDTSx3QkFBd0Isb0tBQUcsUUFBUSxXQUFJLENBQUM7WUFFbENDLFFBQVEsRUFTVkMsUUFBUSxFQUdOQyxPQUFPOzs7OztvQkFaUEYsUUFBUSxHQUFLRyxNQUFNLENBQW5CSCxRQUFRO3dCQUVYQSxRQUFROzs7O29CQUNYSSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUE4Qjs7O29CQUVyQyxDQUFDO3dCQUNORCxPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUE2Qiw4QkFBRUwsUUFBUTtvQkFDckQsQ0FBQzs7OzJCQUVzQkEsUUFBUSxDQUFDTSxPQUFPLENBQUMsQ0FBQzt3QkFBQ0MsTUFBTSxFQUFFLENBQWM7b0JBQUMsQ0FBQzs7b0JBQTVETixRQUFRO29CQUVkLEVBQUUsRUFBRUEsUUFBUSxDQUFDTyxNQUFNLEtBQUssQ0FBQyxFQUFFLENBQUM7d0JBQ3BCTixPQUFPLEdBQUdELFFBQVEsQ0FBQyxDQUFDO3dCQUMxQkcsT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBOEIsK0JBQUVILE9BQU87d0JBQ25ETixpQkFBaUIsQ0FBQ00sT0FBTztvQkFDM0IsQ0FBQyxNQUFNLENBQUM7d0JBQ05FLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQTZCO29CQUMzQyxDQUFDOzs7Ozs7b0JBRURELE9BQU8sQ0FBQ0MsR0FBRzs7Ozs7Ozs7Ozs7SUFFZixDQUFDO0lBRUQsRUFFRztZQUdTTCxRQUFRLEVBT1ZDLFFBQVE7Ozs7O29CQVBORDt3QkFFSEEsUUFBUTs7OztvQkFDWFUsS0FBSyxDQUFDLENBQWU7Ozs7O3dCQUtyQkgsTUFBTSxFQUFFLENBQXFCO29CQUMvQixDQUFDOztvQkFGS047b0JBSU5HO29CQUNBUixpQkFBaUIsQ0FBQ0s7Ozs7OztvQkFFbEJHLE9BQU8sQ0FBQ0MsR0FBRzs7Ozs7Ozs7Ozs7SUFFZixDQUFDO0lBQ0QsR0FBSyxDQUFDTTs7Ozs7O29CQUVNWDt5QkFFSkEsUUFBUTs7OztvQkFDSlksUUFBUTtvQkFDUkM7b0JBRUFDLGVBQUFBLGlFQUNKakI7OzJCQUtnQmlCLGtCQUFrQixtREFBYzs7b0JBQTlDQyxLQUFLO29CQUNUWDs7OztvQkFDSyxDQUFDO3dCQUNOQTtvQkFDRixDQUFDOzs7Ozs7O29CQUVEQSxPQUFPLENBQUNDLEdBQUc7Ozs7Ozs7Ozs7O0lBRWYsQ0FBQztJQUVEZjtRQUNFUztJQUNGLGdEQUFLO0lBRUwsTUFBTSxvQkFDSHVCLENBQUc7UUFBQ0M7Ozs7Ozs7O1lBQ0VBLFNBQVM7Ozs7Ozs7OztvQkFDUEE7Ozs7Ozs7OzttQ0FFSkQsQ0FBRzs7Ozs7Ozs7OzttQ0FLSEUsQ0FBTTs7b0JBQXdCQyxPQUFPLEVBQUVkLENBQUFBLHNEQUFJOzs7Ozs7Ozs7aUJBTzFDaEIsY0FBYzs7b0JBQ2lCOEIsT0FBTyxFQUFFaEIsYUFBYTs7Ozs7Ozs7Ozs7O0FBTy9ELENBQUM7R0F6R0tmLEdBQUc7O0FBMkdULE1BQU0sU0FBU0EsR0FBRyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGV0aGVycyB9IGZyb20gXCJldGhlcnNcIjtcclxuaW1wb3J0IGFiaSBmcm9tIFwiLi4vdXRpbHMvV2F2ZVBvcnRhbC5qc29uXCI7XHJcblxyXG5jb25zdCBBcHAgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2N1cnJlbnRBY2NvdW50LCBzZXRDdXJyZW50QWNjb3VudF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBjb250cmFjdEFkZHJlc3MgPSBcIjB4NTNlNDgzYTc2ZGIwMzExRWY0NzAyYzNBOWQyMzVlODUyMjA3YjYwZVwiO1xyXG4gIGNvbnN0IGNvbnRyYWN0QUJJID0gYWJpLmFiaTtcclxuXHJcbiAgY29uc3QgY2hlY2tJZldhbGxldElzQ29ubmVjdGVkID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgeyBldGhlcmV1bSB9ID0gd2luZG93O1xyXG5cclxuICAgICAgaWYgKCFldGhlcmV1bSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiTWFrZSBzdXJlIHlvdSBoYXZlIG1ldGFtYXNrIVwiKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJXZSBoYXZlIHRoZSBldGhlcmV1bSBvYmplY3RcIiwgZXRoZXJldW0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IGV0aGVyZXVtLnJlcXVlc3QoeyBtZXRob2Q6IFwiZXRoX2FjY291bnRzXCIgfSk7XHJcblxyXG4gICAgICBpZiAoYWNjb3VudHMubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgICAgY29uc3QgYWNjb3VudCA9IGFjY291bnRzWzBdO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRm91bmQgYW4gYXV0aG9yaXplZCBhY2NvdW50OlwiLCBhY2NvdW50KTtcclxuICAgICAgICBzZXRDdXJyZW50QWNjb3VudChhY2NvdW50KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIk5vIGF1dGhvcml6ZWQgYWNjb3VudCBmb3VuZFwiKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIC8qKlxyXG4gICAqIEltcGxlbWVudCB5b3VyIGNvbm5lY3RXYWxsZXQgbWV0aG9kIGhlcmVcclxuICAgKi9cclxuICBjb25zdCBjb25uZWN0V2FsbGV0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgeyBldGhlcmV1bSB9ID0gd2luZG93O1xyXG5cclxuICAgICAgaWYgKCFldGhlcmV1bSkge1xyXG4gICAgICAgIGFsZXJ0KFwiR2V0IE1ldGFNYXNrIVwiKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgZXRoZXJldW0ucmVxdWVzdCh7XHJcbiAgICAgICAgbWV0aG9kOiBcImV0aF9yZXF1ZXN0QWNjb3VudHNcIixcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBjb25zb2xlLmxvZyhcIkNvbm5lY3RlZFwiLCBhY2NvdW50c1swXSk7XHJcbiAgICAgIHNldEN1cnJlbnRBY2NvdW50KGFjY291bnRzWzBdKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgIH1cclxuICB9O1xyXG4gIGNvbnN0IHdhdmUgPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB7IGV0aGVyZXVtIH0gPSB3aW5kb3c7XHJcblxyXG4gICAgICBpZiAoZXRoZXJldW0pIHtcclxuICAgICAgICBjb25zdCBwcm92aWRlciA9IG5ldyBldGhlcnMucHJvdmlkZXJzLldlYjNQcm92aWRlcihldGhlcmV1bSk7XHJcbiAgICAgICAgY29uc3Qgc2lnbmVyID0gcHJvdmlkZXIuZ2V0U2lnbmVyKCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHdhdmVQb3J0YWxDb250cmFjdCA9IG5ldyBldGhlcnMuQ29udHJhY3QoXHJcbiAgICAgICAgICBjb250cmFjdEFkZHJlc3MsXHJcbiAgICAgICAgICBjb250cmFjdEFCSSxcclxuICAgICAgICAgIHNpZ25lclxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGxldCBjb3VudCA9IGF3YWl0IHdhdmVQb3J0YWxDb250cmFjdC5nZXRUb3RhbFdhdmVzKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJSZXRyaWV2ZWQgdG90YWwgd2F2ZSBjb3VudC4uLlwiLCBjb3VudC50b051bWJlcigpKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkV0aGVyZXVtIG9iamVjdCBkb2Vzbid0IGV4aXN0IVwiKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjaGVja0lmV2FsbGV0SXNDb25uZWN0ZWQoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5Db250YWluZXJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXRhQ29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj7wn5GLIEhleSB0aGVyZSE8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiaW9cIj5cclxuICAgICAgICAgIEkgYW0gZmFyemEgYW5kIEkgd29ya2VkIG9uIHNlbGYtZHJpdmluZyBjYXJzIHNvIHRoYXQncyBwcmV0dHkgY29vbFxyXG4gICAgICAgICAgcmlnaHQ/IENvbm5lY3QgeW91ciBFdGhlcmV1bSB3YWxsZXQgYW5kIHdhdmUgYXQgbWUhXHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwid2F2ZUJ1dHRvblwiIG9uQ2xpY2s9e3dhdmV9PlxyXG4gICAgICAgICAgV2F2ZSBhdCBNZVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgICB7LypcclxuICAgICAgICAgKiBJZiB0aGVyZSBpcyBubyBjdXJyZW50QWNjb3VudCByZW5kZXIgdGhpcyBidXR0b25cclxuICAgICAgICAgKi99XHJcbiAgICAgICAgeyFjdXJyZW50QWNjb3VudCAmJiAoXHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIndhdmVCdXR0b25cIiBvbkNsaWNrPXtjb25uZWN0V2FsbGV0fT5cclxuICAgICAgICAgICAgQ29ubmVjdCBXYWxsZXRcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJldGhlcnMiLCJhYmkiLCJBcHAiLCJjdXJyZW50QWNjb3VudCIsInNldEN1cnJlbnRBY2NvdW50IiwiY29udHJhY3RBZGRyZXNzIiwiY29udHJhY3RBQkkiLCJjaGVja0lmV2FsbGV0SXNDb25uZWN0ZWQiLCJldGhlcmV1bSIsImFjY291bnRzIiwiYWNjb3VudCIsIndpbmRvdyIsImNvbnNvbGUiLCJsb2ciLCJyZXF1ZXN0IiwibWV0aG9kIiwibGVuZ3RoIiwiY29ubmVjdFdhbGxldCIsImFsZXJ0Iiwid2F2ZSIsInByb3ZpZGVyIiwic2lnbmVyIiwid2F2ZVBvcnRhbENvbnRyYWN0IiwiY291bnQiLCJwcm92aWRlcnMiLCJXZWIzUHJvdmlkZXIiLCJnZXRTaWduZXIiLCJDb250cmFjdCIsImdldFRvdGFsV2F2ZXMiLCJ0b051bWJlciIsImRpdiIsImNsYXNzTmFtZSIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});