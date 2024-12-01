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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ QueryGraphDB)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/script */ \"(app-pages-browser)/./node_modules/next/dist/api/script.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction QueryGraphDB() {\n    _s();\n    const [query, setQuery] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [result, setResult] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const [startDate, setStartDate] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1958);\n    const [endDate, setEndDate] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(2019);\n    const [type, setType] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"albums\");\n    const MIN_DATE = 1958;\n    const MAX_DATE = 2019;\n    const calculateProgressBar = (start, end)=>{\n        const leftPercentage = (start - MIN_DATE) / (MAX_DATE - MIN_DATE) * 100;\n        const widthPercentage = start === end ? 1 : (end - start) / (MAX_DATE - MIN_DATE) * 100;\n        return {\n            leftPercentage,\n            widthPercentage\n        };\n    };\n    const executeQuery = async ()=>{\n        try {\n            const response = await fetch(\"/api/graphdb\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    query\n                })\n            });\n            const data = await response.json();\n            setResult(data);\n        } catch (error) {\n            console.error(\"Error executing query:\", error);\n        }\n    };\n    const handleStartDateChange = (e)=>{\n        let value = parseInt(e.target.value, 10);\n        if (value < MIN_DATE) value = MIN_DATE;\n        if (value > MAX_DATE) value = MAX_DATE;\n        if (value > endDate) value = endDate;\n        setStartDate(value);\n    };\n    const handleEndDateChange = (e)=>{\n        let value = parseInt(e.target.value, 10);\n        if (value < MIN_DATE) value = MIN_DATE;\n        if (value > MAX_DATE) value = MAX_DATE;\n        if (value < startDate) value = startDate;\n        setEndDate(value);\n    };\n    const { leftPercentage, widthPercentage } = calculateProgressBar(startDate, endDate);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: [\n                    \"Trouvez les statistiques des Grammys de \",\n                    MIN_DATE,\n                    \" \\xe0 \",\n                    MAX_DATE\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/augustin/Documents/Cours/BUT_info/S5/BD/projet/beer/src/app/components/QueryGraphDB.js\",\n                lineNumber: 64,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"form-group\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"types\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                className: \"radio-button \".concat(type === \"albums\" ? \"selected\" : \"\"),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"radio\",\n                                        name: \"type\",\n                                        value: \"albums\",\n                                        checked: type === \"albums\",\n                                        onChange: (e)=>setType(e.target.value)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/augustin/Documents/Cours/BUT_info/S5/BD/projet/beer/src/app/components/QueryGraphDB.js\",\n                                        lineNumber: 70,\n                                        columnNumber: 25\n                                    }, this),\n                                    \"Albums\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/augustin/Documents/Cours/BUT_info/S5/BD/projet/beer/src/app/components/QueryGraphDB.js\",\n                                lineNumber: 67,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                className: \"radio-button \".concat(type === \"singles\" ? \"selected\" : \"\"),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"radio\",\n                                        name: \"type\",\n                                        value: \"singles\",\n                                        checked: type === \"singles\",\n                                        onChange: (e)=>setType(e.target.value)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/augustin/Documents/Cours/BUT_info/S5/BD/projet/beer/src/app/components/QueryGraphDB.js\",\n                                        lineNumber: 82,\n                                        columnNumber: 25\n                                    }, this),\n                                    \"Singles\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/augustin/Documents/Cours/BUT_info/S5/BD/projet/beer/src/app/components/QueryGraphDB.js\",\n                                lineNumber: 79,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/augustin/Documents/Cours/BUT_info/S5/BD/projet/beer/src/app/components/QueryGraphDB.js\",\n                        lineNumber: 66,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"dates\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"number\",\n                                min: MIN_DATE,\n                                max: MAX_DATE,\n                                step: \"1\",\n                                onKeyDown: (event)=>{\n                                    event.preventDefault();\n                                },\n                                value: startDate,\n                                onChange: handleStartDateChange\n                            }, void 0, false, {\n                                fileName: \"/Users/augustin/Documents/Cours/BUT_info/S5/BD/projet/beer/src/app/components/QueryGraphDB.js\",\n                                lineNumber: 93,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"number\",\n                                min: MIN_DATE,\n                                max: MAX_DATE,\n                                step: \"1\",\n                                onKeyDown: (event)=>{\n                                    event.preventDefault();\n                                },\n                                value: endDate,\n                                onChange: handleEndDateChange\n                            }, void 0, false, {\n                                fileName: \"/Users/augustin/Documents/Cours/BUT_info/S5/BD/projet/beer/src/app/components/QueryGraphDB.js\",\n                                lineNumber: 105,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/augustin/Documents/Cours/BUT_info/S5/BD/projet/beer/src/app/components/QueryGraphDB.js\",\n                        lineNumber: 92,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"progress-bar\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"progress-bar-background\"\n                            }, void 0, false, {\n                                fileName: \"/Users/augustin/Documents/Cours/BUT_info/S5/BD/projet/beer/src/app/components/QueryGraphDB.js\",\n                                lineNumber: 120,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"progress-bar-fill\",\n                                style: {\n                                    left: \"\".concat(leftPercentage, \"%\"),\n                                    width: \"\".concat(widthPercentage, \"%\")\n                                }\n                            }, void 0, false, {\n                                fileName: \"/Users/augustin/Documents/Cours/BUT_info/S5/BD/projet/beer/src/app/components/QueryGraphDB.js\",\n                                lineNumber: 121,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/augustin/Documents/Cours/BUT_info/S5/BD/projet/beer/src/app/components/QueryGraphDB.js\",\n                        lineNumber: 119,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"summary\",\n                        children: [\n                            \"Vous allez effectuer des recherches entre \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: startDate\n                            }, void 0, false, {\n                                fileName: \"/Users/augustin/Documents/Cours/BUT_info/S5/BD/projet/beer/src/app/components/QueryGraphDB.js\",\n                                lineNumber: 130,\n                                columnNumber: 63\n                            }, this),\n                            \" et \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: endDate\n                            }, void 0, false, {\n                                fileName: \"/Users/augustin/Documents/Cours/BUT_info/S5/BD/projet/beer/src/app/components/QueryGraphDB.js\",\n                                lineNumber: 130,\n                                columnNumber: 91\n                            }, this),\n                            \" pour les \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: type\n                            }, void 0, false, {\n                                fileName: \"/Users/augustin/Documents/Cours/BUT_info/S5/BD/projet/beer/src/app/components/QueryGraphDB.js\",\n                                lineNumber: 130,\n                                columnNumber: 123\n                            }, this),\n                            \".\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/augustin/Documents/Cours/BUT_info/S5/BD/projet/beer/src/app/components/QueryGraphDB.js\",\n                        lineNumber: 129,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: executeQuery,\n                        children: \"Chercher\"\n                    }, void 0, false, {\n                        fileName: \"/Users/augustin/Documents/Cours/BUT_info/S5/BD/projet/beer/src/app/components/QueryGraphDB.js\",\n                        lineNumber: 132,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/augustin/Documents/Cours/BUT_info/S5/BD/projet/beer/src/app/components/QueryGraphDB.js\",\n                lineNumber: 65,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"pre\", {\n                children: JSON.stringify(result, null, 2)\n            }, void 0, false, {\n                fileName: \"/Users/augustin/Documents/Cours/BUT_info/S5/BD/projet/beer/src/app/components/QueryGraphDB.js\",\n                lineNumber: 136,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/augustin/Documents/Cours/BUT_info/S5/BD/projet/beer/src/app/components/QueryGraphDB.js\",\n        lineNumber: 63,\n        columnNumber: 9\n    }, this);\n}\n_s(QueryGraphDB, \"lpyKq88jIB0sVAo+sWJbBnGS/iU=\");\n_c = QueryGraphDB;\nvar _c;\n$RefreshReg$(_c, \"QueryGraphDB\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9RdWVyeUdyYXBoREIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUVxRDtBQUNwQjtBQUVsQixTQUFTRTs7SUFDcEIsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdILCtDQUFRQSxDQUFDO0lBQ25DLE1BQU0sQ0FBQ0ksUUFBUUMsVUFBVSxHQUFHTCwrQ0FBUUEsQ0FBQztJQUNyQyxNQUFNLENBQUNNLFdBQVdDLGFBQWEsR0FBR1AsK0NBQVFBLENBQUM7SUFDM0MsTUFBTSxDQUFDUSxTQUFTQyxXQUFXLEdBQUdULCtDQUFRQSxDQUFDO0lBQ3ZDLE1BQU0sQ0FBQ1UsTUFBTUMsUUFBUSxHQUFHWCwrQ0FBUUEsQ0FBQztJQUVqQyxNQUFNWSxXQUFXO0lBQ2pCLE1BQU1DLFdBQVc7SUFFakIsTUFBTUMsdUJBQXVCLENBQUNDLE9BQU9DO1FBQ2pDLE1BQU1DLGlCQUFpQixDQUFFRixRQUFRSCxRQUFPLElBQU1DLENBQUFBLFdBQVdELFFBQU8sSUFBTTtRQUV0RSxNQUFNTSxrQkFBa0JILFVBQVVDLE1BQzVCLElBQ0EsQ0FBRUEsTUFBTUQsS0FBSSxJQUFNRixDQUFBQSxXQUFXRCxRQUFPLElBQU07UUFFaEQsT0FBTztZQUFFSztZQUFnQkM7UUFBZ0I7SUFDN0M7SUFHQSxNQUFNQyxlQUFlO1FBQ2pCLElBQUk7WUFDQSxNQUFNQyxXQUFXLE1BQU1DLE1BQU0sZ0JBQWdCO2dCQUN6Q0MsUUFBUTtnQkFDUkMsU0FBUztvQkFDTCxnQkFBZ0I7Z0JBQ3BCO2dCQUNBQyxNQUFNQyxLQUFLQyxTQUFTLENBQUM7b0JBQUV4QjtnQkFBTTtZQUNqQztZQUVBLE1BQU15QixPQUFPLE1BQU1QLFNBQVNRLElBQUk7WUFDaEN2QixVQUFVc0I7UUFDZCxFQUFFLE9BQU9FLE9BQU87WUFDWkMsUUFBUUQsS0FBSyxDQUFDLDBCQUEwQkE7UUFDNUM7SUFDSjtJQUVBLE1BQU1FLHdCQUF3QixDQUFDQztRQUMzQixJQUFJQyxRQUFRQyxTQUFTRixFQUFFRyxNQUFNLENBQUNGLEtBQUssRUFBRTtRQUNyQyxJQUFJQSxRQUFRckIsVUFBVXFCLFFBQVFyQjtRQUM5QixJQUFJcUIsUUFBUXBCLFVBQVVvQixRQUFRcEI7UUFDOUIsSUFBSW9CLFFBQVF6QixTQUFTeUIsUUFBUXpCO1FBQzdCRCxhQUFhMEI7SUFDakI7SUFFQSxNQUFNRyxzQkFBc0IsQ0FBQ0o7UUFDekIsSUFBSUMsUUFBUUMsU0FBU0YsRUFBRUcsTUFBTSxDQUFDRixLQUFLLEVBQUU7UUFDckMsSUFBSUEsUUFBUXJCLFVBQVVxQixRQUFRckI7UUFDOUIsSUFBSXFCLFFBQVFwQixVQUFVb0IsUUFBUXBCO1FBQzlCLElBQUlvQixRQUFRM0IsV0FBVzJCLFFBQVEzQjtRQUMvQkcsV0FBV3dCO0lBQ2Y7SUFFQSxNQUFNLEVBQUVoQixjQUFjLEVBQUVDLGVBQWUsRUFBRSxHQUFHSixxQkFBcUJSLFdBQVdFO0lBRTVFLHFCQUNJLDhEQUFDNkI7OzBCQUNHLDhEQUFDQzs7b0JBQUc7b0JBQXlDMUI7b0JBQVM7b0JBQUlDOzs7Ozs7OzBCQUMxRCw4REFBQ3dCO2dCQUFJRSxXQUFVOztrQ0FDWCw4REFBQ0Y7d0JBQUlFLFdBQVU7OzBDQUNYLDhEQUFDQztnQ0FDR0QsV0FBVyxnQkFBb0QsT0FBcEM3QixTQUFTLFdBQVcsYUFBYTs7a0RBRTVELDhEQUFDK0I7d0NBQ0cvQixNQUFLO3dDQUNMZ0MsTUFBSzt3Q0FDTFQsT0FBTTt3Q0FDTlUsU0FBU2pDLFNBQVM7d0NBQ2xCa0MsVUFBVSxDQUFDWixJQUFNckIsUUFBUXFCLEVBQUVHLE1BQU0sQ0FBQ0YsS0FBSzs7Ozs7O29DQUN6Qzs7Ozs7OzswQ0FHTiw4REFBQ087Z0NBQ0dELFdBQVcsZ0JBQXFELE9BQXJDN0IsU0FBUyxZQUFZLGFBQWE7O2tEQUU3RCw4REFBQytCO3dDQUNHL0IsTUFBSzt3Q0FDTGdDLE1BQUs7d0NBQ0xULE9BQU07d0NBQ05VLFNBQVNqQyxTQUFTO3dDQUNsQmtDLFVBQVUsQ0FBQ1osSUFBTXJCLFFBQVFxQixFQUFFRyxNQUFNLENBQUNGLEtBQUs7Ozs7OztvQ0FDekM7Ozs7Ozs7Ozs7Ozs7a0NBSVYsOERBQUNJO3dCQUFJRSxXQUFVOzswQ0FDWCw4REFBQ0U7Z0NBQ0cvQixNQUFLO2dDQUNMbUMsS0FBS2pDO2dDQUNMa0MsS0FBS2pDO2dDQUNMa0MsTUFBSztnQ0FDTEMsV0FBVyxDQUFDQztvQ0FDUkEsTUFBTUMsY0FBYztnQ0FDeEI7Z0NBQ0FqQixPQUFPM0I7Z0NBQ1BzQyxVQUFVYjs7Ozs7OzBDQUdkLDhEQUFDVTtnQ0FDRy9CLE1BQUs7Z0NBQ0xtQyxLQUFLakM7Z0NBQ0xrQyxLQUFLakM7Z0NBQ0xrQyxNQUFLO2dDQUNMQyxXQUFXLENBQUNDO29DQUNSQSxNQUFNQyxjQUFjO2dDQUN4QjtnQ0FDQWpCLE9BQU96QjtnQ0FDUG9DLFVBQVVSOzs7Ozs7Ozs7Ozs7a0NBS2xCLDhEQUFDQzt3QkFBSUUsV0FBVTs7MENBQ1gsOERBQUNGO2dDQUFJRSxXQUFVOzs7Ozs7MENBQ2YsOERBQUNGO2dDQUNHRSxXQUFVO2dDQUNWWSxPQUFPO29DQUNIQyxNQUFNLEdBQWtCLE9BQWZuQyxnQkFBZTtvQ0FDeEJvQyxPQUFPLEdBQW1CLE9BQWhCbkMsaUJBQWdCO2dDQUM5Qjs7Ozs7Ozs7Ozs7O2tDQUdSLDhEQUFDb0M7d0JBQUVmLFdBQVU7OzRCQUFVOzBDQUN1Qiw4REFBQ2dCOzBDQUFNakQ7Ozs7Ozs0QkFBaUI7MENBQUksOERBQUNpRDswQ0FBTS9DOzs7Ozs7NEJBQWU7MENBQVUsOERBQUMrQzswQ0FBTTdDOzs7Ozs7NEJBQVk7Ozs7Ozs7a0NBRTdILDhEQUFDOEM7d0JBQU9DLFNBQVN0QztrQ0FBYzs7Ozs7Ozs7Ozs7OzBCQUluQyw4REFBQ3VDOzBCQUFLakMsS0FBS0MsU0FBUyxDQUFDdEIsUUFBUSxNQUFNOzs7Ozs7Ozs7Ozs7QUFHL0M7R0FySXdCSDtLQUFBQSIsInNvdXJjZXMiOlsiL1VzZXJzL2F1Z3VzdGluL0RvY3VtZW50cy9Db3Vycy9CVVRfaW5mby9TNS9CRC9wcm9qZXQvYmVlci9zcmMvYXBwL2NvbXBvbmVudHMvUXVlcnlHcmFwaERCLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgeyBoYW5kbGVDbGllbnRTY3JpcHRMb2FkIH0gZnJvbSBcIm5leHQvc2NyaXB0XCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBRdWVyeUdyYXBoREIoKSB7XG4gICAgY29uc3QgW3F1ZXJ5LCBzZXRRdWVyeV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgICBjb25zdCBbcmVzdWx0LCBzZXRSZXN1bHRdID0gdXNlU3RhdGUobnVsbCk7XG4gICAgY29uc3QgW3N0YXJ0RGF0ZSwgc2V0U3RhcnREYXRlXSA9IHVzZVN0YXRlKDE5NTgpO1xuICAgIGNvbnN0IFtlbmREYXRlLCBzZXRFbmREYXRlXSA9IHVzZVN0YXRlKDIwMTkpO1xuICAgIGNvbnN0IFt0eXBlLCBzZXRUeXBlXSA9IHVzZVN0YXRlKFwiYWxidW1zXCIpO1xuXG4gICAgY29uc3QgTUlOX0RBVEUgPSAxOTU4O1xuICAgIGNvbnN0IE1BWF9EQVRFID0gMjAxOTtcblxuICAgIGNvbnN0IGNhbGN1bGF0ZVByb2dyZXNzQmFyID0gKHN0YXJ0LCBlbmQpID0+IHtcbiAgICAgICAgY29uc3QgbGVmdFBlcmNlbnRhZ2UgPSAoKHN0YXJ0IC0gTUlOX0RBVEUpIC8gKE1BWF9EQVRFIC0gTUlOX0RBVEUpKSAqIDEwMDtcblxuICAgICAgICBjb25zdCB3aWR0aFBlcmNlbnRhZ2UgPSBzdGFydCA9PT0gZW5kXG4gICAgICAgICAgICA/IDFcbiAgICAgICAgICAgIDogKChlbmQgLSBzdGFydCkgLyAoTUFYX0RBVEUgLSBNSU5fREFURSkpICogMTAwO1xuXG4gICAgICAgIHJldHVybiB7IGxlZnRQZXJjZW50YWdlLCB3aWR0aFBlcmNlbnRhZ2UgfTtcbiAgICB9O1xuXG5cbiAgICBjb25zdCBleGVjdXRlUXVlcnkgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiL2FwaS9ncmFwaGRiXCIsIHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IHF1ZXJ5IH0pLFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICBzZXRSZXN1bHQoZGF0YSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZXhlY3V0aW5nIHF1ZXJ5OlwiLCBlcnJvcik7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlU3RhcnREYXRlQ2hhbmdlID0gKGUpID0+IHtcbiAgICAgICAgbGV0IHZhbHVlID0gcGFyc2VJbnQoZS50YXJnZXQudmFsdWUsIDEwKTtcbiAgICAgICAgaWYgKHZhbHVlIDwgTUlOX0RBVEUpIHZhbHVlID0gTUlOX0RBVEU7XG4gICAgICAgIGlmICh2YWx1ZSA+IE1BWF9EQVRFKSB2YWx1ZSA9IE1BWF9EQVRFO1xuICAgICAgICBpZiAodmFsdWUgPiBlbmREYXRlKSB2YWx1ZSA9IGVuZERhdGU7XG4gICAgICAgIHNldFN0YXJ0RGF0ZSh2YWx1ZSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZUVuZERhdGVDaGFuZ2UgPSAoZSkgPT4ge1xuICAgICAgICBsZXQgdmFsdWUgPSBwYXJzZUludChlLnRhcmdldC52YWx1ZSwgMTApO1xuICAgICAgICBpZiAodmFsdWUgPCBNSU5fREFURSkgdmFsdWUgPSBNSU5fREFURTtcbiAgICAgICAgaWYgKHZhbHVlID4gTUFYX0RBVEUpIHZhbHVlID0gTUFYX0RBVEU7XG4gICAgICAgIGlmICh2YWx1ZSA8IHN0YXJ0RGF0ZSkgdmFsdWUgPSBzdGFydERhdGU7XG4gICAgICAgIHNldEVuZERhdGUodmFsdWUpO1xuICAgIH07XG5cbiAgICBjb25zdCB7IGxlZnRQZXJjZW50YWdlLCB3aWR0aFBlcmNlbnRhZ2UgfSA9IGNhbGN1bGF0ZVByb2dyZXNzQmFyKHN0YXJ0RGF0ZSwgZW5kRGF0ZSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGgyPlRyb3V2ZXogbGVzIHN0YXRpc3RpcXVlcyBkZXMgR3JhbW15cyBkZSB7TUlOX0RBVEV9IMOgIHtNQVhfREFURX08L2gyPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0eXBlc1wiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHJhZGlvLWJ1dHRvbiAke3R5cGUgPT09IFwiYWxidW1zXCIgPyBcInNlbGVjdGVkXCIgOiBcIlwifWB9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInR5cGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiYWxidW1zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXt0eXBlID09PSBcImFsYnVtc1wifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VHlwZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgQWxidW1zXG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcmFkaW8tYnV0dG9uICR7dHlwZSA9PT0gXCJzaW5nbGVzXCIgPyBcInNlbGVjdGVkXCIgOiBcIlwifWB9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInR5cGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwic2luZ2xlc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17dHlwZSA9PT0gXCJzaW5nbGVzXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRUeXBlKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICBTaW5nbGVzXG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXRlc1wiPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbWluPXtNSU5fREFURX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG1heD17TUFYX0RBVEV9XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGVwPVwiMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbktleURvd249eyhldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3N0YXJ0RGF0ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVTdGFydERhdGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgIC8vIG9uQmx1cj17aGFuZGxlU3RhcnREYXRlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbWluPXtNSU5fREFURX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG1heD17TUFYX0RBVEV9XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGVwPVwiMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbktleURvd249eyhldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2VuZERhdGV9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlRW5kRGF0ZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgLy8gb25CbHVyPXtoYW5kbGVFbmREYXRlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9ncmVzcy1iYXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9ncmVzcy1iYXItYmFja2dyb3VuZFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwcm9ncmVzcy1iYXItZmlsbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IGAke2xlZnRQZXJjZW50YWdlfSVgLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBgJHt3aWR0aFBlcmNlbnRhZ2V9JWAsXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICA+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwic3VtbWFyeVwiPlxuICAgICAgICAgICAgICAgICAgICBWb3VzIGFsbGV6IGVmZmVjdHVlciBkZXMgcmVjaGVyY2hlcyBlbnRyZSA8c3Bhbj57c3RhcnREYXRlfTwvc3Bhbj4gZXQgPHNwYW4+e2VuZERhdGV9PC9zcGFuPiBwb3VyIGxlcyA8c3Bhbj57dHlwZX08L3NwYW4+LlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2V4ZWN1dGVRdWVyeX0+XG4gICAgICAgICAgICAgICAgICAgIENoZXJjaGVyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxwcmU+e0pTT04uc3RyaW5naWZ5KHJlc3VsdCwgbnVsbCwgMil9PC9wcmU+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG4iXSwibmFtZXMiOlsiaGFuZGxlQ2xpZW50U2NyaXB0TG9hZCIsInVzZVN0YXRlIiwiUXVlcnlHcmFwaERCIiwicXVlcnkiLCJzZXRRdWVyeSIsInJlc3VsdCIsInNldFJlc3VsdCIsInN0YXJ0RGF0ZSIsInNldFN0YXJ0RGF0ZSIsImVuZERhdGUiLCJzZXRFbmREYXRlIiwidHlwZSIsInNldFR5cGUiLCJNSU5fREFURSIsIk1BWF9EQVRFIiwiY2FsY3VsYXRlUHJvZ3Jlc3NCYXIiLCJzdGFydCIsImVuZCIsImxlZnRQZXJjZW50YWdlIiwid2lkdGhQZXJjZW50YWdlIiwiZXhlY3V0ZVF1ZXJ5IiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImRhdGEiLCJqc29uIiwiZXJyb3IiLCJjb25zb2xlIiwiaGFuZGxlU3RhcnREYXRlQ2hhbmdlIiwiZSIsInZhbHVlIiwicGFyc2VJbnQiLCJ0YXJnZXQiLCJoYW5kbGVFbmREYXRlQ2hhbmdlIiwiZGl2IiwiaDIiLCJjbGFzc05hbWUiLCJsYWJlbCIsImlucHV0IiwibmFtZSIsImNoZWNrZWQiLCJvbkNoYW5nZSIsIm1pbiIsIm1heCIsInN0ZXAiLCJvbktleURvd24iLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic3R5bGUiLCJsZWZ0Iiwid2lkdGgiLCJwIiwic3BhbiIsImJ1dHRvbiIsIm9uQ2xpY2siLCJwcmUiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/QueryGraphDB.js\n"));

/***/ })

});