"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/components/QueryGraphDB.js":
/*!********************************************!*\
  !*** ./src/app/components/QueryGraphDB.js ***!
  \********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ QueryGraphDB)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nfunction QueryGraphDB() {\n    _s();\n    const [query, setQuery] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [result, setResult] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const executeQuery = async ()=>{\n        try {\n            const response = await fetch(\"/api/graphdb\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    query\n                })\n            });\n            const data = await response.json();\n            setResult(data);\n        } catch (error) {\n            console.error(\"Error executing query:\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Query GraphDB\"\n            }, void 0, false, {\n                fileName: \"/Users/augustin/Documents/Cours/BUT_info/S5/BD/projet/beer/src/app/components/QueryGraphDB.js\",\n                lineNumber: 28,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        children: [\n                            \"Date de d\\xe9but :\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"date\",\n                                min: \"1958\",\n                                max: \"2019\",\n                                step: \"1\",\n                                onChange: (e)=>setStartDate(e.target.value),\n                                style: {\n                                    display: \"block\",\n                                    marginBottom: \"10px\",\n                                    width: \"100%\"\n                                }\n                            }, void 0, false, {\n                                fileName: \"/Users/augustin/Documents/Cours/BUT_info/S5/BD/projet/beer/src/app/components/QueryGraphDB.js\",\n                                lineNumber: 32,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/augustin/Documents/Cours/BUT_info/S5/BD/projet/beer/src/app/components/QueryGraphDB.js\",\n                        lineNumber: 30,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        children: [\n                            \"Date de fin :\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"date\",\n                                value: endDate,\n                                onChange: (e)=>setEndDate(e.target.value),\n                                style: {\n                                    display: \"block\",\n                                    marginBottom: \"10px\",\n                                    width: \"100%\"\n                                }\n                            }, void 0, false, {\n                                fileName: \"/Users/augustin/Documents/Cours/BUT_info/S5/BD/projet/beer/src/app/components/QueryGraphDB.js\",\n                                lineNumber: 43,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/augustin/Documents/Cours/BUT_info/S5/BD/projet/beer/src/app/components/QueryGraphDB.js\",\n                        lineNumber: 41,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/augustin/Documents/Cours/BUT_info/S5/BD/projet/beer/src/app/components/QueryGraphDB.js\",\n                lineNumber: 29,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"radio\",\n                                name: \"type\",\n                                value: \"album\",\n                                checked: type === \"album\",\n                                onChange: (e)=>setType(e.target.value)\n                            }, void 0, false, {\n                                fileName: \"/Users/augustin/Documents/Cours/BUT_info/S5/BD/projet/beer/src/app/components/QueryGraphDB.js\",\n                                lineNumber: 53,\n                                columnNumber: 21\n                            }, this),\n                            \"Album\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/augustin/Documents/Cours/BUT_info/S5/BD/projet/beer/src/app/components/QueryGraphDB.js\",\n                        lineNumber: 52,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        style: {\n                            marginLeft: \"10px\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"radio\",\n                                name: \"type\",\n                                value: \"musique\",\n                                checked: type === \"musique\",\n                                onChange: (e)=>setType(e.target.value)\n                            }, void 0, false, {\n                                fileName: \"/Users/augustin/Documents/Cours/BUT_info/S5/BD/projet/beer/src/app/components/QueryGraphDB.js\",\n                                lineNumber: 63,\n                                columnNumber: 21\n                            }, this),\n                            \"Musique\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/augustin/Documents/Cours/BUT_info/S5/BD/projet/beer/src/app/components/QueryGraphDB.js\",\n                        lineNumber: 62,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/augustin/Documents/Cours/BUT_info/S5/BD/projet/beer/src/app/components/QueryGraphDB.js\",\n                lineNumber: 51,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: executeQuery,\n                style: {\n                    marginTop: \"10px\"\n                },\n                children: \"Ca test en balle\"\n            }, void 0, false, {\n                fileName: \"/Users/augustin/Documents/Cours/BUT_info/S5/BD/projet/beer/src/app/components/QueryGraphDB.js\",\n                lineNumber: 73,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"pre\", {\n                children: JSON.stringify(result, null, 2)\n            }, void 0, false, {\n                fileName: \"/Users/augustin/Documents/Cours/BUT_info/S5/BD/projet/beer/src/app/components/QueryGraphDB.js\",\n                lineNumber: 76,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/augustin/Documents/Cours/BUT_info/S5/BD/projet/beer/src/app/components/QueryGraphDB.js\",\n        lineNumber: 27,\n        columnNumber: 9\n    }, this);\n}\n_s(QueryGraphDB, \"oRnSi++OHBKzRtoq41TC9UCAEDE=\");\n_c = QueryGraphDB;\nvar _c;\n$RefreshReg$(_c, \"QueryGraphDB\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9RdWVyeUdyYXBoREIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBRWlDO0FBRWxCLFNBQVNDOztJQUNwQixNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR0gsK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDSSxRQUFRQyxVQUFVLEdBQUdMLCtDQUFRQSxDQUFDO0lBRXJDLE1BQU1NLGVBQWU7UUFDakIsSUFBSTtZQUNBLE1BQU1DLFdBQVcsTUFBTUMsTUFBTSxnQkFBZ0I7Z0JBQ3pDQyxRQUFRO2dCQUNSQyxTQUFTO29CQUNMLGdCQUFnQjtnQkFDcEI7Z0JBQ0FDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQztvQkFBRVg7Z0JBQU07WUFDakM7WUFFQSxNQUFNWSxPQUFPLE1BQU1QLFNBQVNRLElBQUk7WUFDaENWLFVBQVVTO1FBQ2QsRUFBRSxPQUFPRSxPQUFPO1lBQ1pDLFFBQVFELEtBQUssQ0FBQywwQkFBMEJBO1FBQzVDO0lBQ0o7SUFFQSxxQkFDSSw4REFBQ0U7OzBCQUNHLDhEQUFDQzswQkFBRzs7Ozs7OzBCQUNKLDhEQUFDRDs7a0NBQ0csOERBQUNFOzs0QkFBTTswQ0FFSCw4REFBQ0M7Z0NBQ0dDLE1BQUs7Z0NBQ0xDLEtBQUk7Z0NBQ0pDLEtBQUk7Z0NBQ0pDLE1BQUs7Z0NBQ0xDLFVBQVUsQ0FBQ0MsSUFBTUMsYUFBYUQsRUFBRUUsTUFBTSxDQUFDQyxLQUFLO2dDQUM1Q0MsT0FBTztvQ0FBRUMsU0FBUztvQ0FBU0MsY0FBYztvQ0FBUUMsT0FBTztnQ0FBTzs7Ozs7Ozs7Ozs7O2tDQUd2RSw4REFBQ2Q7OzRCQUFNOzBDQUVILDhEQUFDQztnQ0FDR0MsTUFBSztnQ0FDTFEsT0FBT0s7Z0NBQ1BULFVBQVUsQ0FBQ0MsSUFBTVMsV0FBV1QsRUFBRUUsTUFBTSxDQUFDQyxLQUFLO2dDQUMxQ0MsT0FBTztvQ0FBRUMsU0FBUztvQ0FBU0MsY0FBYztvQ0FBUUMsT0FBTztnQ0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUkzRSw4REFBQ2hCOztrQ0FDRyw4REFBQ0U7OzBDQUNHLDhEQUFDQztnQ0FDR0MsTUFBSztnQ0FDTGUsTUFBSztnQ0FDTFAsT0FBTTtnQ0FDTlEsU0FBU2hCLFNBQVM7Z0NBQ2xCSSxVQUFVLENBQUNDLElBQU1ZLFFBQVFaLEVBQUVFLE1BQU0sQ0FBQ0MsS0FBSzs7Ozs7OzRCQUN6Qzs7Ozs7OztrQ0FHTiw4REFBQ1Y7d0JBQU1XLE9BQU87NEJBQUVTLFlBQVk7d0JBQU87OzBDQUMvQiw4REFBQ25CO2dDQUNHQyxNQUFLO2dDQUNMZSxNQUFLO2dDQUNMUCxPQUFNO2dDQUNOUSxTQUFTaEIsU0FBUztnQ0FDbEJJLFVBQVUsQ0FBQ0MsSUFBTVksUUFBUVosRUFBRUUsTUFBTSxDQUFDQyxLQUFLOzs7Ozs7NEJBQ3pDOzs7Ozs7Ozs7Ozs7OzBCQUlWLDhEQUFDVztnQkFBT0MsU0FBU3BDO2dCQUFjeUIsT0FBTztvQkFBRVksV0FBVztnQkFBTzswQkFBRzs7Ozs7OzBCQUc3RCw4REFBQ0M7MEJBQUtoQyxLQUFLQyxTQUFTLENBQUNULFFBQVEsTUFBTTs7Ozs7Ozs7Ozs7O0FBRy9DO0dBMUV3Qkg7S0FBQUEiLCJzb3VyY2VzIjpbIi9Vc2Vycy9hdWd1c3Rpbi9Eb2N1bWVudHMvQ291cnMvQlVUX2luZm8vUzUvQkQvcHJvamV0L2JlZXIvc3JjL2FwcC9jb21wb25lbnRzL1F1ZXJ5R3JhcGhEQi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUXVlcnlHcmFwaERCKCkge1xuICAgIGNvbnN0IFtxdWVyeSwgc2V0UXVlcnldID0gdXNlU3RhdGUoXCJcIik7XG4gICAgY29uc3QgW3Jlc3VsdCwgc2V0UmVzdWx0XSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gICAgY29uc3QgZXhlY3V0ZVF1ZXJ5ID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcIi9hcGkvZ3JhcGhkYlwiLCB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBxdWVyeSB9KSxcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgc2V0UmVzdWx0KGRhdGEpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGV4ZWN1dGluZyBxdWVyeTpcIiwgZXJyb3IpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDI+UXVlcnkgR3JhcGhEQjwvaDI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgRGF0ZSBkZSBkw6lidXQgOlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJkYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbj1cIjE5NThcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4PVwiMjAxOVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGVwPVwiMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFN0YXJ0RGF0ZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBcImJsb2NrXCIsIG1hcmdpbkJvdHRvbTogXCIxMHB4XCIsIHdpZHRoOiBcIjEwMCVcIiB9fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgICAgICBEYXRlIGRlIGZpbiA6XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImRhdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2VuZERhdGV9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEVuZERhdGUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogXCJibG9ja1wiLCBtYXJnaW5Cb3R0b206IFwiMTBweFwiLCB3aWR0aDogXCIxMDAlXCIgfX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInR5cGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJhbGJ1bVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXt0eXBlID09PSBcImFsYnVtXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFR5cGUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICBBbGJ1bVxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGxhYmVsIHN0eWxlPXt7IG1hcmdpbkxlZnQ6IFwiMTBweFwiIH19PlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwidHlwZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cIm11c2lxdWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17dHlwZSA9PT0gXCJtdXNpcXVlXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFR5cGUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICBNdXNpcXVlXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtleGVjdXRlUXVlcnl9IHN0eWxlPXt7IG1hcmdpblRvcDogXCIxMHB4XCIgfX0+XG4gICAgICAgICAgICAgICAgQ2EgdGVzdCBlbiBiYWxsZVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8cHJlPntKU09OLnN0cmluZ2lmeShyZXN1bHQsIG51bGwsIDIpfTwvcHJlPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiUXVlcnlHcmFwaERCIiwicXVlcnkiLCJzZXRRdWVyeSIsInJlc3VsdCIsInNldFJlc3VsdCIsImV4ZWN1dGVRdWVyeSIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJkYXRhIiwianNvbiIsImVycm9yIiwiY29uc29sZSIsImRpdiIsImgyIiwibGFiZWwiLCJpbnB1dCIsInR5cGUiLCJtaW4iLCJtYXgiLCJzdGVwIiwib25DaGFuZ2UiLCJlIiwic2V0U3RhcnREYXRlIiwidGFyZ2V0IiwidmFsdWUiLCJzdHlsZSIsImRpc3BsYXkiLCJtYXJnaW5Cb3R0b20iLCJ3aWR0aCIsImVuZERhdGUiLCJzZXRFbmREYXRlIiwibmFtZSIsImNoZWNrZWQiLCJzZXRUeXBlIiwibWFyZ2luTGVmdCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJtYXJnaW5Ub3AiLCJwcmUiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/QueryGraphDB.js\n"));

/***/ })

});