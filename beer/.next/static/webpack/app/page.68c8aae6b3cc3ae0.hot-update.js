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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ QueryGraphDB)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nfunction QueryGraphDB() {\n    _s();\n    const [query, setQuery] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [result, setResult] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [startDate, setStartDate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1958);\n    const [endDate, setEndDate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(2019);\n    const [type, setType] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"albums\");\n    const MIN_DATE = 1958;\n    const MAX_DATE = 2019;\n    const executeQuery = async ()=>{\n        try {\n            const response = await fetch(\"/api/graphdb\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    query\n                })\n            });\n            const data = await response.json();\n            setResult(data);\n        } catch (error) {\n            console.error(\"Error executing query:\", error);\n        }\n    };\n    const handleStartDateChange = (e)=>{\n        let value = parseInt(e.target.value, 10);\n        if (value < 1958) value = 1958; // Corrige si la valeur est trop petite\n        if (value > 2019) value = 2019; // Corrige si la valeur est trop grande\n        setStartDate(value);\n    };\n    const handleEndDateChange = (e)=>{\n        let value = parseInt(e.target.value, 10);\n        if (value < 1958) value = 1958; // Corrige si la valeur est trop petite\n        if (value > 2019) value = 2019; // Corrige si la valeur est trop grande\n        setEndDate(value);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Trouvez les statistiques des Grammys de 1958 \\xe0 2019\"\n            }, void 0, false, {\n                fileName: \"/Users/augustin/Documents/Cours/BUT_info/S5/BD/projet/beer/src/app/components/QueryGraphDB.js\",\n                lineNumber: 48,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        children: [\n                            \"Date de d\\xe9but :\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"number\",\n                                min: \"1958\",\n                                max: \"2019\",\n                                step: \"1\",\n                                value: startDate,\n                                onChange: (e)=>setStartDate(e.target.value),\n                                onBlur: handleStartDateChange\n                            }, void 0, false, {\n                                fileName: \"/Users/augustin/Documents/Cours/BUT_info/S5/BD/projet/beer/src/app/components/QueryGraphDB.js\",\n                                lineNumber: 52,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/augustin/Documents/Cours/BUT_info/S5/BD/projet/beer/src/app/components/QueryGraphDB.js\",\n                        lineNumber: 50,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        children: [\n                            \"Date de fin :\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"number\",\n                                min: \"1958\",\n                                max: \"2019\",\n                                step: \"1\",\n                                value: endDate,\n                                onChange: (e)=>setEndDate(e.target.value),\n                                onBlur: handleEndDateChange\n                            }, void 0, false, {\n                                fileName: \"/Users/augustin/Documents/Cours/BUT_info/S5/BD/projet/beer/src/app/components/QueryGraphDB.js\",\n                                lineNumber: 65,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/augustin/Documents/Cours/BUT_info/S5/BD/projet/beer/src/app/components/QueryGraphDB.js\",\n                        lineNumber: 63,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/augustin/Documents/Cours/BUT_info/S5/BD/projet/beer/src/app/components/QueryGraphDB.js\",\n                lineNumber: 49,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"radio\",\n                                name: \"type\",\n                                value: \"albums\",\n                                checked: type === \"albums\",\n                                onChange: (e)=>setType(e.target.value)\n                            }, void 0, false, {\n                                fileName: \"/Users/augustin/Documents/Cours/BUT_info/S5/BD/projet/beer/src/app/components/QueryGraphDB.js\",\n                                lineNumber: 79,\n                                columnNumber: 21\n                            }, this),\n                            \"Albums\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/augustin/Documents/Cours/BUT_info/S5/BD/projet/beer/src/app/components/QueryGraphDB.js\",\n                        lineNumber: 78,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        style: {\n                            marginLeft: \"10px\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"radio\",\n                                name: \"type\",\n                                value: \"musiques\",\n                                checked: type === \"musiques\",\n                                onChange: (e)=>setType(e.target.value)\n                            }, void 0, false, {\n                                fileName: \"/Users/augustin/Documents/Cours/BUT_info/S5/BD/projet/beer/src/app/components/QueryGraphDB.js\",\n                                lineNumber: 89,\n                                columnNumber: 21\n                            }, this),\n                            \"Musiques\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/augustin/Documents/Cours/BUT_info/S5/BD/projet/beer/src/app/components/QueryGraphDB.js\",\n                        lineNumber: 88,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/augustin/Documents/Cours/BUT_info/S5/BD/projet/beer/src/app/components/QueryGraphDB.js\",\n                lineNumber: 77,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: executeQuery,\n                style: {\n                    marginTop: \"10px\"\n                },\n                children: \"Ca test en balle\"\n            }, void 0, false, {\n                fileName: \"/Users/augustin/Documents/Cours/BUT_info/S5/BD/projet/beer/src/app/components/QueryGraphDB.js\",\n                lineNumber: 99,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Vous allez effectuer des recherches de l'ann\\xe9e \",\n                    startDate,\n                    \" \\xe0 \",\n                    endDate,\n                    \" pour les \",\n                    type\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/augustin/Documents/Cours/BUT_info/S5/BD/projet/beer/src/app/components/QueryGraphDB.js\",\n                lineNumber: 102,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"pre\", {\n                children: JSON.stringify(result, null, 2)\n            }, void 0, false, {\n                fileName: \"/Users/augustin/Documents/Cours/BUT_info/S5/BD/projet/beer/src/app/components/QueryGraphDB.js\",\n                lineNumber: 103,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/augustin/Documents/Cours/BUT_info/S5/BD/projet/beer/src/app/components/QueryGraphDB.js\",\n        lineNumber: 47,\n        columnNumber: 9\n    }, this);\n}\n_s(QueryGraphDB, \"lpyKq88jIB0sVAo+sWJbBnGS/iU=\");\n_c = QueryGraphDB;\nvar _c;\n$RefreshReg$(_c, \"QueryGraphDB\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9RdWVyeUdyYXBoREIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBRWlDO0FBRWxCLFNBQVNDOztJQUNwQixNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR0gsK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDSSxRQUFRQyxVQUFVLEdBQUdMLCtDQUFRQSxDQUFDO0lBQ3JDLE1BQU0sQ0FBQ00sV0FBV0MsYUFBYSxHQUFHUCwrQ0FBUUEsQ0FBQztJQUMzQyxNQUFNLENBQUNRLFNBQVNDLFdBQVcsR0FBR1QsK0NBQVFBLENBQUM7SUFDdkMsTUFBTSxDQUFDVSxNQUFNQyxRQUFRLEdBQUdYLCtDQUFRQSxDQUFDO0lBRWpDLE1BQU1ZLFdBQVc7SUFDakIsTUFBTUMsV0FBVztJQUVqQixNQUFNQyxlQUFlO1FBQ2pCLElBQUk7WUFDQSxNQUFNQyxXQUFXLE1BQU1DLE1BQU0sZ0JBQWdCO2dCQUN6Q0MsUUFBUTtnQkFDUkMsU0FBUztvQkFDTCxnQkFBZ0I7Z0JBQ3BCO2dCQUNBQyxNQUFNQyxLQUFLQyxTQUFTLENBQUM7b0JBQUVuQjtnQkFBTTtZQUNqQztZQUVBLE1BQU1vQixPQUFPLE1BQU1QLFNBQVNRLElBQUk7WUFDaENsQixVQUFVaUI7UUFDZCxFQUFFLE9BQU9FLE9BQU87WUFDWkMsUUFBUUQsS0FBSyxDQUFDLDBCQUEwQkE7UUFDNUM7SUFDSjtJQUVBLE1BQU1FLHdCQUF3QixDQUFDQztRQUMzQixJQUFJQyxRQUFRQyxTQUFTRixFQUFFRyxNQUFNLENBQUNGLEtBQUssRUFBRTtRQUNyQyxJQUFJQSxRQUFRLE1BQU1BLFFBQVEsTUFBTSx1Q0FBdUM7UUFDdkUsSUFBSUEsUUFBUSxNQUFNQSxRQUFRLE1BQU0sdUNBQXVDO1FBQ3ZFckIsYUFBYXFCO0lBQ2pCO0lBRUEsTUFBTUcsc0JBQXNCLENBQUNKO1FBQ3pCLElBQUlDLFFBQVFDLFNBQVNGLEVBQUVHLE1BQU0sQ0FBQ0YsS0FBSyxFQUFFO1FBQ3JDLElBQUlBLFFBQVEsTUFBTUEsUUFBUSxNQUFNLHVDQUF1QztRQUN2RSxJQUFJQSxRQUFRLE1BQU1BLFFBQVEsTUFBTSx1Q0FBdUM7UUFDdkVuQixXQUFXbUI7SUFDZjtJQUVBLHFCQUNJLDhEQUFDSTs7MEJBQ0csOERBQUNDOzBCQUFHOzs7Ozs7MEJBQ0osOERBQUNEOztrQ0FDRyw4REFBQ0U7OzRCQUFNOzBDQUVILDhEQUFDQztnQ0FDR3pCLE1BQUs7Z0NBQ0wwQixLQUFJO2dDQUNKQyxLQUFJO2dDQUNKQyxNQUFLO2dDQUNMVixPQUFPdEI7Z0NBQ1BpQyxVQUFVLENBQUNaLElBQU1wQixhQUFhb0IsRUFBRUcsTUFBTSxDQUFDRixLQUFLO2dDQUM1Q1ksUUFBUWQ7Ozs7Ozs7Ozs7OztrQ0FJaEIsOERBQUNROzs0QkFBTTswQ0FFSCw4REFBQ0M7Z0NBQ0d6QixNQUFLO2dDQUNMMEIsS0FBSTtnQ0FDSkMsS0FBSTtnQ0FDSkMsTUFBSztnQ0FDTFYsT0FBT3BCO2dDQUNQK0IsVUFBVSxDQUFDWixJQUFNbEIsV0FBV2tCLEVBQUVHLE1BQU0sQ0FBQ0YsS0FBSztnQ0FDMUNZLFFBQVFUOzs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBS3BCLDhEQUFDQzs7a0NBQ0csOERBQUNFOzswQ0FDRyw4REFBQ0M7Z0NBQ0d6QixNQUFLO2dDQUNMK0IsTUFBSztnQ0FDTGIsT0FBTTtnQ0FDTmMsU0FBU2hDLFNBQVM7Z0NBQ2xCNkIsVUFBVSxDQUFDWixJQUFNaEIsUUFBUWdCLEVBQUVHLE1BQU0sQ0FBQ0YsS0FBSzs7Ozs7OzRCQUN6Qzs7Ozs7OztrQ0FHTiw4REFBQ007d0JBQU1TLE9BQU87NEJBQUVDLFlBQVk7d0JBQU87OzBDQUMvQiw4REFBQ1Q7Z0NBQ0d6QixNQUFLO2dDQUNMK0IsTUFBSztnQ0FDTGIsT0FBTTtnQ0FDTmMsU0FBU2hDLFNBQVM7Z0NBQ2xCNkIsVUFBVSxDQUFDWixJQUFNaEIsUUFBUWdCLEVBQUVHLE1BQU0sQ0FBQ0YsS0FBSzs7Ozs7OzRCQUN6Qzs7Ozs7Ozs7Ozs7OzswQkFJViw4REFBQ2lCO2dCQUFPQyxTQUFTaEM7Z0JBQWM2QixPQUFPO29CQUFFSSxXQUFXO2dCQUFPOzBCQUFHOzs7Ozs7MEJBRzdELDhEQUFDQzs7b0JBQUU7b0JBQWdEMUM7b0JBQVU7b0JBQUlFO29CQUFRO29CQUFXRTs7Ozs7OzswQkFDcEYsOERBQUN1QzswQkFBSzdCLEtBQUtDLFNBQVMsQ0FBQ2pCLFFBQVEsTUFBTTs7Ozs7Ozs7Ozs7O0FBRy9DO0dBckd3Qkg7S0FBQUEiLCJzb3VyY2VzIjpbIi9Vc2Vycy9hdWd1c3Rpbi9Eb2N1bWVudHMvQ291cnMvQlVUX2luZm8vUzUvQkQvcHJvamV0L2JlZXIvc3JjL2FwcC9jb21wb25lbnRzL1F1ZXJ5R3JhcGhEQi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUXVlcnlHcmFwaERCKCkge1xuICAgIGNvbnN0IFtxdWVyeSwgc2V0UXVlcnldID0gdXNlU3RhdGUoXCJcIik7XG4gICAgY29uc3QgW3Jlc3VsdCwgc2V0UmVzdWx0XSA9IHVzZVN0YXRlKG51bGwpO1xuICAgIGNvbnN0IFtzdGFydERhdGUsIHNldFN0YXJ0RGF0ZV0gPSB1c2VTdGF0ZSgxOTU4KTtcbiAgICBjb25zdCBbZW5kRGF0ZSwgc2V0RW5kRGF0ZV0gPSB1c2VTdGF0ZSgyMDE5KTtcbiAgICBjb25zdCBbdHlwZSwgc2V0VHlwZV0gPSB1c2VTdGF0ZShcImFsYnVtc1wiKTtcblxuICAgIGNvbnN0IE1JTl9EQVRFID0gMTk1ODtcbiAgICBjb25zdCBNQVhfREFURSA9IDIwMTk7XG5cbiAgICBjb25zdCBleGVjdXRlUXVlcnkgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiL2FwaS9ncmFwaGRiXCIsIHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IHF1ZXJ5IH0pLFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICBzZXRSZXN1bHQoZGF0YSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZXhlY3V0aW5nIHF1ZXJ5OlwiLCBlcnJvcik7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlU3RhcnREYXRlQ2hhbmdlID0gKGUpID0+IHtcbiAgICAgICAgbGV0IHZhbHVlID0gcGFyc2VJbnQoZS50YXJnZXQudmFsdWUsIDEwKTtcbiAgICAgICAgaWYgKHZhbHVlIDwgMTk1OCkgdmFsdWUgPSAxOTU4OyAvLyBDb3JyaWdlIHNpIGxhIHZhbGV1ciBlc3QgdHJvcCBwZXRpdGVcbiAgICAgICAgaWYgKHZhbHVlID4gMjAxOSkgdmFsdWUgPSAyMDE5OyAvLyBDb3JyaWdlIHNpIGxhIHZhbGV1ciBlc3QgdHJvcCBncmFuZGVcbiAgICAgICAgc2V0U3RhcnREYXRlKHZhbHVlKTtcbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlRW5kRGF0ZUNoYW5nZSA9IChlKSA9PiB7XG4gICAgICAgIGxldCB2YWx1ZSA9IHBhcnNlSW50KGUudGFyZ2V0LnZhbHVlLCAxMCk7XG4gICAgICAgIGlmICh2YWx1ZSA8IDE5NTgpIHZhbHVlID0gMTk1ODsgLy8gQ29ycmlnZSBzaSBsYSB2YWxldXIgZXN0IHRyb3AgcGV0aXRlXG4gICAgICAgIGlmICh2YWx1ZSA+IDIwMTkpIHZhbHVlID0gMjAxOTsgLy8gQ29ycmlnZSBzaSBsYSB2YWxldXIgZXN0IHRyb3AgZ3JhbmRlXG4gICAgICAgIHNldEVuZERhdGUodmFsdWUpO1xuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGgxPlRyb3V2ZXogbGVzIHN0YXRpc3RpcXVlcyBkZXMgR3JhbW15cyBkZSAxOTU4IMOgIDIwMTk8L2gxPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIERhdGUgZGUgZMOpYnV0IDpcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbj1cIjE5NThcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4PVwiMjAxOVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGVwPVwiMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c3RhcnREYXRlfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRTdGFydERhdGUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25CbHVyPXtoYW5kbGVTdGFydERhdGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgIC8vc3R5bGU9e3sgZGlzcGxheTogXCJibG9ja1wiLCBtYXJnaW5Cb3R0b206IFwiMTBweFwiLCB3aWR0aDogXCIxMDAlXCIgfX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgRGF0ZSBkZSBmaW4gOlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbWluPVwiMTk1OFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXg9XCIyMDE5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0ZXA9XCIxXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtlbmREYXRlfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRFbmREYXRlKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQmx1cj17aGFuZGxlRW5kRGF0ZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgLy9zdHlsZT17eyBkaXNwbGF5OiBcImJsb2NrXCIsIG1hcmdpbkJvdHRvbTogXCIxMHB4XCIsIHdpZHRoOiBcIjEwMCVcIiB9fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwidHlwZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cImFsYnVtc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXt0eXBlID09PSBcImFsYnVtc1wifVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRUeXBlKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgQWxidW1zXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8bGFiZWwgc3R5bGU9e3sgbWFyZ2luTGVmdDogXCIxMHB4XCIgfX0+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ0eXBlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwibXVzaXF1ZXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17dHlwZSA9PT0gXCJtdXNpcXVlc1wifVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRUeXBlKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgTXVzaXF1ZXNcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2V4ZWN1dGVRdWVyeX0gc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjEwcHhcIiB9fT5cbiAgICAgICAgICAgICAgICBDYSB0ZXN0IGVuIGJhbGxlXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxwPlZvdXMgYWxsZXogZWZmZWN0dWVyIGRlcyByZWNoZXJjaGVzIGRlIGwnYW5uw6llIHtzdGFydERhdGV9IMOgIHtlbmREYXRlfSBwb3VyIGxlcyB7dHlwZX08L3A+XG4gICAgICAgICAgICA8cHJlPntKU09OLnN0cmluZ2lmeShyZXN1bHQsIG51bGwsIDIpfTwvcHJlPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiUXVlcnlHcmFwaERCIiwicXVlcnkiLCJzZXRRdWVyeSIsInJlc3VsdCIsInNldFJlc3VsdCIsInN0YXJ0RGF0ZSIsInNldFN0YXJ0RGF0ZSIsImVuZERhdGUiLCJzZXRFbmREYXRlIiwidHlwZSIsInNldFR5cGUiLCJNSU5fREFURSIsIk1BWF9EQVRFIiwiZXhlY3V0ZVF1ZXJ5IiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImRhdGEiLCJqc29uIiwiZXJyb3IiLCJjb25zb2xlIiwiaGFuZGxlU3RhcnREYXRlQ2hhbmdlIiwiZSIsInZhbHVlIiwicGFyc2VJbnQiLCJ0YXJnZXQiLCJoYW5kbGVFbmREYXRlQ2hhbmdlIiwiZGl2IiwiaDEiLCJsYWJlbCIsImlucHV0IiwibWluIiwibWF4Iiwic3RlcCIsIm9uQ2hhbmdlIiwib25CbHVyIiwibmFtZSIsImNoZWNrZWQiLCJzdHlsZSIsIm1hcmdpbkxlZnQiLCJidXR0b24iLCJvbkNsaWNrIiwibWFyZ2luVG9wIiwicCIsInByZSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/QueryGraphDB.js\n"));

/***/ })

});