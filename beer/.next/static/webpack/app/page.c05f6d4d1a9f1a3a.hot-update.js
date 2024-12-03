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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ QueryGraphDB)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _PieChart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PieChart */ \"(app-pages-browser)/./src/app/components/PieChart.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction QueryGraphDB() {\n    _s();\n    const MIN_DATE = 1964;\n    const MAX_DATE = 2019;\n    const [result, setResult] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [startDate, setStartDate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(MIN_DATE);\n    const [endDate, setEndDate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(MAX_DATE);\n    const [type, setType] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"albums\");\n    const [isChartDiplayed, setIsChartDiplayed] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const calculateProgressBar = (start, end)=>{\n        const leftPercentage = (start - MIN_DATE) / (MAX_DATE - MIN_DATE) * 100;\n        const widthPercentage = start === end ? 0.5 : (end - start) / (MAX_DATE - MIN_DATE) * 100;\n        return {\n            leftPercentage,\n            widthPercentage\n        };\n    };\n    const executeQuery = async ()=>{\n        const queryType = type === \"albums\" ? \"Album\" : \"Song\";\n        const updatedQuery = '\\n            PREFIX iut: <https://cours.iut-orsay.fr/npbd/>\\n            PREFIX wd: <http://www.wikidata.org/entity/>\\n            PREFIX wdt: <http://www.wikidata.org/prop/direct/>\\n            PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\\n            PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\\n\\n            SELECT ?wikidataGenreLabel (COUNT(?entity) AS ?genreCount)\\n            WHERE {\\n                ?entity a iut:Nominee ;\\n                        iut:category \"'.concat(queryType, ' Of The Year\"@en ;\\n                        iut:year ?year ;\\n                        iut:hasGenre ?wikidataGenreLabel .\\n\\n                FILTER (xsd:integer(str(?year)) >= ').concat(startDate, \" && xsd:integer(str(?year)) <= \").concat(endDate, \")\\n            }\\n            GROUP BY ?wikidataGenreLabel\\n            ORDER BY DESC(?genreCount)\");\n        try {\n            const response = await fetch(\"/api/graphdb\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    query: updatedQuery\n                })\n            });\n            const data = await response.json();\n            setResult(data);\n            setIsChartDiplayed(true);\n        } catch (error) {\n            console.error(\"Error executing query:\", error);\n        }\n    };\n    const handleStartDateChange = (e)=>{\n        let value = parseInt(e.target.value, 10);\n        if (value < MIN_DATE) value = MIN_DATE;\n        if (value > MAX_DATE) value = MAX_DATE;\n        if (value > endDate) value = endDate;\n        setStartDate(value);\n    };\n    const handleEndDateChange = (e)=>{\n        let value = parseInt(e.target.value, 10);\n        if (value < MIN_DATE) value = MIN_DATE;\n        if (value > MAX_DATE) value = MAX_DATE;\n        if (value < startDate) value = startDate;\n        setEndDate(value);\n    };\n    const { leftPercentage, widthPercentage } = calculateProgressBar(startDate, endDate);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: [\n                    \"Trouvez les statistiques des Grammys de \",\n                    MIN_DATE,\n                    \" \\xe0 \",\n                    MAX_DATE\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/augustin/Documents/Cours/BUT_info/S5/BD/projet/beer/src/app/components/QueryGraphDB.js\",\n                lineNumber: 85,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"form-group\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"types\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                className: \"radio-button \".concat(type === \"albums\" ? \"selected\" : \"\"),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"radio\",\n                                        name: \"type\",\n                                        value: \"albums\",\n                                        checked: type === \"albums\",\n                                        onChange: (e)=>setType(e.target.value)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/augustin/Documents/Cours/BUT_info/S5/BD/projet/beer/src/app/components/QueryGraphDB.js\",\n                                        lineNumber: 91,\n                                        columnNumber: 25\n                                    }, this),\n                                    \"Albums\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/augustin/Documents/Cours/BUT_info/S5/BD/projet/beer/src/app/components/QueryGraphDB.js\",\n                                lineNumber: 88,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                className: \"radio-button \".concat(type === \"singles\" ? \"selected\" : \"\"),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"radio\",\n                                        name: \"type\",\n                                        value: \"singles\",\n                                        checked: type === \"singles\",\n                                        onChange: (e)=>setType(e.target.value)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/augustin/Documents/Cours/BUT_info/S5/BD/projet/beer/src/app/components/QueryGraphDB.js\",\n                                        lineNumber: 103,\n                                        columnNumber: 25\n                                    }, this),\n                                    \"Singles\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/augustin/Documents/Cours/BUT_info/S5/BD/projet/beer/src/app/components/QueryGraphDB.js\",\n                                lineNumber: 100,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/augustin/Documents/Cours/BUT_info/S5/BD/projet/beer/src/app/components/QueryGraphDB.js\",\n                        lineNumber: 87,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"dates\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"number\",\n                                min: MIN_DATE,\n                                max: MAX_DATE,\n                                step: \"1\",\n                                onKeyDown: (event)=>{\n                                    event.preventDefault();\n                                },\n                                value: startDate,\n                                onChange: handleStartDateChange\n                            }, void 0, false, {\n                                fileName: \"/Users/augustin/Documents/Cours/BUT_info/S5/BD/projet/beer/src/app/components/QueryGraphDB.js\",\n                                lineNumber: 114,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"number\",\n                                min: MIN_DATE,\n                                max: MAX_DATE,\n                                step: \"1\",\n                                onKeyDown: (event)=>{\n                                    event.preventDefault();\n                                },\n                                value: endDate,\n                                onChange: handleEndDateChange\n                            }, void 0, false, {\n                                fileName: \"/Users/augustin/Documents/Cours/BUT_info/S5/BD/projet/beer/src/app/components/QueryGraphDB.js\",\n                                lineNumber: 125,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/augustin/Documents/Cours/BUT_info/S5/BD/projet/beer/src/app/components/QueryGraphDB.js\",\n                        lineNumber: 113,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"progress-bar\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"progress-bar-background\"\n                            }, void 0, false, {\n                                fileName: \"/Users/augustin/Documents/Cours/BUT_info/S5/BD/projet/beer/src/app/components/QueryGraphDB.js\",\n                                lineNumber: 139,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"progress-bar-fill\",\n                                style: {\n                                    left: \"\".concat(leftPercentage, \"%\"),\n                                    width: \"\".concat(widthPercentage, \"%\")\n                                }\n                            }, void 0, false, {\n                                fileName: \"/Users/augustin/Documents/Cours/BUT_info/S5/BD/projet/beer/src/app/components/QueryGraphDB.js\",\n                                lineNumber: 140,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/augustin/Documents/Cours/BUT_info/S5/BD/projet/beer/src/app/components/QueryGraphDB.js\",\n                        lineNumber: 138,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"summary\",\n                        children: [\n                            \"Vous allez effectuer des recherches entre \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: startDate\n                            }, void 0, false, {\n                                fileName: \"/Users/augustin/Documents/Cours/BUT_info/S5/BD/projet/beer/src/app/components/QueryGraphDB.js\",\n                                lineNumber: 149,\n                                columnNumber: 63\n                            }, this),\n                            \" et \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: endDate\n                            }, void 0, false, {\n                                fileName: \"/Users/augustin/Documents/Cours/BUT_info/S5/BD/projet/beer/src/app/components/QueryGraphDB.js\",\n                                lineNumber: 149,\n                                columnNumber: 91\n                            }, this),\n                            \" pour les \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: type\n                            }, void 0, false, {\n                                fileName: \"/Users/augustin/Documents/Cours/BUT_info/S5/BD/projet/beer/src/app/components/QueryGraphDB.js\",\n                                lineNumber: 149,\n                                columnNumber: 123\n                            }, this),\n                            \".\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/augustin/Documents/Cours/BUT_info/S5/BD/projet/beer/src/app/components/QueryGraphDB.js\",\n                        lineNumber: 148,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: executeQuery,\n                        children: \"Chercher\"\n                    }, void 0, false, {\n                        fileName: \"/Users/augustin/Documents/Cours/BUT_info/S5/BD/projet/beer/src/app/components/QueryGraphDB.js\",\n                        lineNumber: 151,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/augustin/Documents/Cours/BUT_info/S5/BD/projet/beer/src/app/components/QueryGraphDB.js\",\n                lineNumber: 86,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"chart\",\n                style: {\n                    display: isChartDiplayed ? \"flex\" : \"none\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PieChart__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    jsonData: result\n                }, void 0, false, {\n                    fileName: \"/Users/augustin/Documents/Cours/BUT_info/S5/BD/projet/beer/src/app/components/QueryGraphDB.js\",\n                    lineNumber: 157,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/augustin/Documents/Cours/BUT_info/S5/BD/projet/beer/src/app/components/QueryGraphDB.js\",\n                lineNumber: 156,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/augustin/Documents/Cours/BUT_info/S5/BD/projet/beer/src/app/components/QueryGraphDB.js\",\n        lineNumber: 84,\n        columnNumber: 9\n    }, this);\n}\n_s(QueryGraphDB, \"8G0sS0PVfWpUYsnBxi8CkdLhHKs=\");\n_c = QueryGraphDB;\nvar _c;\n$RefreshReg$(_c, \"QueryGraphDB\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9RdWVyeUdyYXBoREIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUVpQztBQUNDO0FBRW5CLFNBQVNFOztJQUNwQixNQUFNQyxXQUFXO0lBQ2pCLE1BQU1DLFdBQVc7SUFFakIsTUFBTSxDQUFDQyxRQUFRQyxVQUFVLEdBQUdOLCtDQUFRQSxDQUFDO0lBQ3JDLE1BQU0sQ0FBQ08sV0FBV0MsYUFBYSxHQUFHUiwrQ0FBUUEsQ0FBQ0c7SUFDM0MsTUFBTSxDQUFDTSxTQUFTQyxXQUFXLEdBQUdWLCtDQUFRQSxDQUFDSTtJQUN2QyxNQUFNLENBQUNPLE1BQU1DLFFBQVEsR0FBR1osK0NBQVFBLENBQUM7SUFDakMsTUFBTSxDQUFDYSxpQkFBaUJDLG1CQUFtQixHQUFHZCwrQ0FBUUEsQ0FBQztJQUV2RCxNQUFNZSx1QkFBdUIsQ0FBQ0MsT0FBT0M7UUFDakMsTUFBTUMsaUJBQWlCLENBQUVGLFFBQVFiLFFBQU8sSUFBTUMsQ0FBQUEsV0FBV0QsUUFBTyxJQUFNO1FBRXRFLE1BQU1nQixrQkFBa0JILFVBQVVDLE1BQzVCLE1BQ0EsQ0FBRUEsTUFBTUQsS0FBSSxJQUFNWixDQUFBQSxXQUFXRCxRQUFPLElBQU07UUFFaEQsT0FBTztZQUFFZTtZQUFnQkM7UUFBZ0I7SUFDN0M7SUFFQSxNQUFNQyxlQUFlO1FBQ2pCLE1BQU1DLFlBQVlWLFNBQVMsV0FBVyxVQUFVO1FBRWhELE1BQU1XLGVBQWUsd2VBY3dCZixPQUpiYyxXQUFVLG1MQUk4Q1osT0FBM0NGLFdBQVUsbUNBQXlDLE9BQVJFLFNBQVE7UUFLaEcsSUFBSTtZQUNBLE1BQU1jLFdBQVcsTUFBTUMsTUFBTSxnQkFBZ0I7Z0JBQ3pDQyxRQUFRO2dCQUNSQyxTQUFTO29CQUNMLGdCQUFnQjtnQkFDcEI7Z0JBQ0FDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQztvQkFBRUMsT0FBT1I7Z0JBQWE7WUFDL0M7WUFFQSxNQUFNUyxPQUFPLE1BQU1SLFNB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QkFBUVksT0FBTztvQkFBRU8sU0FBU2pELGtCQUFrQixTQUFTO2dCQUFPOzBCQUN2RSw0RUFBQ1osaURBQVFBO29CQUFDOEQsVUFBVTFEOzs7Ozs7Ozs7Ozs7Ozs7OztBQUlwQztHQTNKd0JIO0tBQUFBIiwic291cmNlcyI6WyIvVXNlcnMvYXVndXN0aW4vRG9jdW1lbnRzL0NvdXJzL0JVVF9pbmZvL1M1L0JEL3Byb2pldC9iZWVyL3NyYy9hcHAvY29tcG9uZW50cy9RdWVyeUdyYXBoREIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUGllQ2hhcnQgZnJvbSBcIi4vUGllQ2hhcnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUXVlcnlHcmFwaERCKCkge1xuICAgIGNvbnN0IE1JTl9EQVRFID0gMTk2NDtcbiAgICBjb25zdCBNQVhfREFURSA9IDIwMTk7XG5cbiAgICBjb25zdCBbcmVzdWx0LCBzZXRSZXN1bHRdID0gdXNlU3RhdGUobnVsbCk7XG4gICAgY29uc3QgW3N0YXJ0RGF0ZSwgc2V0U3RhcnREYXRlXSA9IHVzZVN0YXRlKE1JTl9EQVRFKTtcbiAgICBjb25zdCBbZW5kRGF0ZSwgc2V0RW5kRGF0ZV0gPSB1c2VTdGF0ZShNQVhfREFURSk7XG4gICAgY29uc3QgW3R5cGUsIHNldFR5cGVdID0gdXNlU3RhdGUoXCJhbGJ1bXNcIik7XG4gICAgY29uc3QgW2lzQ2hhcnREaXBsYXllZCwgc2V0SXNDaGFydERpcGxheWVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgIGNvbnN0IGNhbGN1bGF0ZVByb2dyZXNzQmFyID0gKHN0YXJ0LCBlbmQpID0+IHtcbiAgICAgICAgY29uc3QgbGVmdFBlcmNlbnRhZ2UgPSAoKHN0YXJ0IC0gTUlOX0RBVEUpIC8gKE1BWF9EQVRFIC0gTUlOX0RBVEUpKSAqIDEwMDtcblxuICAgICAgICBjb25zdCB3aWR0aFBlcmNlbnRhZ2UgPSBzdGFydCA9PT0gZW5kXG4gICAgICAgICAgICA/IDAuNVxuICAgICAgICAgICAgOiAoKGVuZCAtIHN0YXJ0KSAvIChNQVhfREFURSAtIE1JTl9EQVRFKSkgKiAxMDA7XG5cbiAgICAgICAgcmV0dXJuIHsgbGVmdFBlcmNlbnRhZ2UsIHdpZHRoUGVyY2VudGFnZSB9O1xuICAgIH07XG5cbiAgICBjb25zdCBleGVjdXRlUXVlcnkgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHF1ZXJ5VHlwZSA9IHR5cGUgPT09IFwiYWxidW1zXCIgPyBcIkFsYnVtXCIgOiBcIlNvbmdcIjtcblxuICAgICAgICBjb25zdCB1cGRhdGVkUXVlcnkgPSBgXG4gICAgICAgICAgICBQUkVGSVggaXV0OiA8aHR0cHM6Ly9jb3Vycy5pdXQtb3JzYXkuZnIvbnBiZC8+XG4gICAgICAgICAgICBQUkVGSVggd2Q6IDxodHRwOi8vd3d3Lndpa2lkYXRhLm9yZy9lbnRpdHkvPlxuICAgICAgICAgICAgUFJFRklYIHdkdDogPGh0dHA6Ly93d3cud2lraWRhdGEub3JnL3Byb3AvZGlyZWN0Lz5cbiAgICAgICAgICAgIFBSRUZJWCByZGZzOiA8aHR0cDovL3d3dy53My5vcmcvMjAwMC8wMS9yZGYtc2NoZW1hIz5cbiAgICAgICAgICAgIFBSRUZJWCB4c2Q6IDxodHRwOi8vd3d3LnczLm9yZy8yMDAxL1hNTFNjaGVtYSM+XG5cbiAgICAgICAgICAgIFNFTEVDVCA/d2lraWRhdGFHZW5yZUxhYmVsIChDT1VOVCg/ZW50aXR5KSBBUyA/Z2VucmVDb3VudClcbiAgICAgICAgICAgIFdIRVJFIHtcbiAgICAgICAgICAgICAgICA/ZW50aXR5IGEgaXV0Ok5vbWluZWUgO1xuICAgICAgICAgICAgICAgICAgICAgICAgaXV0OmNhdGVnb3J5IFwiJHtxdWVyeVR5cGV9IE9mIFRoZSBZZWFyXCJAZW4gO1xuICAgICAgICAgICAgICAgICAgICAgICAgaXV0OnllYXIgP3llYXIgO1xuICAgICAgICAgICAgICAgICAgICAgICAgaXV0Omhhc0dlbnJlID93aWtpZGF0YUdlbnJlTGFiZWwgLlxuXG4gICAgICAgICAgICAgICAgRklMVEVSICh4c2Q6aW50ZWdlcihzdHIoP3llYXIpKSA+PSAke3N0YXJ0RGF0ZX0gJiYgeHNkOmludGVnZXIoc3RyKD95ZWFyKSkgPD0gJHtlbmREYXRlfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEdST1VQIEJZID93aWtpZGF0YUdlbnJlTGFiZWxcbiAgICAgICAgICAgIE9SREVSIEJZIERFU0MoP2dlbnJlQ291bnQpYDtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcIi9hcGkvZ3JhcGhkYlwiLCB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBxdWVyeTogdXBkYXRlZFF1ZXJ5IH0pLFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICBzZXRSZXN1bHQoZGF0YSk7XG4gICAgICAgICAgICBzZXRJc0NoYXJ0RGlwbGF5ZWQodHJ1ZSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZXhlY3V0aW5nIHF1ZXJ5OlwiLCBlcnJvcik7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlU3RhcnREYXRlQ2hhbmdlID0gKGUpID0+IHtcbiAgICAgICAgbGV0IHZhbHVlID0gcGFyc2VJbnQoZS50YXJnZXQudmFsdWUsIDEwKTtcbiAgICAgICAgaWYgKHZhbHVlIDwgTUlOX0RBVEUpIHZhbHVlID0gTUlOX0RBVEU7XG4gICAgICAgIGlmICh2YWx1ZSA+IE1BWF9EQVRFKSB2YWx1ZSA9IE1BWF9EQVRFO1xuICAgICAgICBpZiAodmFsdWUgPiBlbmREYXRlKSB2YWx1ZSA9IGVuZERhdGU7XG4gICAgICAgIHNldFN0YXJ0RGF0ZSh2YWx1ZSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZUVuZERhdGVDaGFuZ2UgPSAoZSkgPT4ge1xuICAgICAgICBsZXQgdmFsdWUgPSBwYXJzZUludChlLnRhcmdldC52YWx1ZSwgMTApO1xuICAgICAgICBpZiAodmFsdWUgPCBNSU5fREFURSkgdmFsdWUgPSBNSU5fREFURTtcbiAgICAgICAgaWYgKHZhbHVlID4gTUFYX0RBVEUpIHZhbHVlID0gTUFYX0RBVEU7XG4gICAgICAgIGlmICh2YWx1ZSA8IHN0YXJ0RGF0ZSkgdmFsdWUgPSBzdGFydERhdGU7XG4gICAgICAgIHNldEVuZERhdGUodmFsdWUpO1xuICAgIH07XG5cbiAgICBjb25zdCB7IGxlZnRQZXJjZW50YWdlLCB3aWR0aFBlcmNlbnRhZ2UgfSA9IGNhbGN1bGF0ZVByb2dyZXNzQmFyKHN0YXJ0RGF0ZSwgZW5kRGF0ZSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGgyPlRyb3V2ZXogbGVzIHN0YXRpc3RpcXVlcyBkZXMgR3JhbW15cyBkZSB7TUlOX0RBVEV9IMOgIHtNQVhfREFURX08L2gyPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0eXBlc1wiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHJhZGlvLWJ1dHRvbiAke3R5cGUgPT09IFwiYWxidW1zXCIgPyBcInNlbGVjdGVkXCIgOiBcIlwifWB9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInR5cGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiYWxidW1zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXt0eXBlID09PSBcImFsYnVtc1wifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VHlwZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgQWxidW1zXG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcmFkaW8tYnV0dG9uICR7dHlwZSA9PT0gXCJzaW5nbGVzXCIgPyBcInNlbGVjdGVkXCIgOiBcIlwifWB9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInR5cGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwic2luZ2xlc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17dHlwZSA9PT0gXCJzaW5nbGVzXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRUeXBlKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICBTaW5nbGVzXG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXRlc1wiPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbWluPXtNSU5fREFURX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG1heD17TUFYX0RBVEV9XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGVwPVwiMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbktleURvd249eyhldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3N0YXJ0RGF0ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVTdGFydERhdGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW49e01JTl9EQVRFfVxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4PXtNQVhfREFURX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0ZXA9XCIxXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uS2V5RG93bj17KGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZW5kRGF0ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVFbmREYXRlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9ncmVzcy1iYXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9ncmVzcy1iYXItYmFja2dyb3VuZFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwcm9ncmVzcy1iYXItZmlsbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IGAke2xlZnRQZXJjZW50YWdlfSVgLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBgJHt3aWR0aFBlcmNlbnRhZ2V9JWAsXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICA+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwic3VtbWFyeVwiPlxuICAgICAgICAgICAgICAgICAgICBWb3VzIGFsbGV6IGVmZmVjdHVlciBkZXMgcmVjaGVyY2hlcyBlbnRyZSA8c3Bhbj57c3RhcnREYXRlfTwvc3Bhbj4gZXQgPHNwYW4+e2VuZERhdGV9PC9zcGFuPiBwb3VyIGxlcyA8c3Bhbj57dHlwZX08L3NwYW4+LlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2V4ZWN1dGVRdWVyeX0+XG4gICAgICAgICAgICAgICAgICAgIENoZXJjaGVyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGFydFwiIHN0eWxlPXt7IGRpc3BsYXk6IGlzQ2hhcnREaXBsYXllZCA/IFwiZmxleFwiIDogXCJub25lXCIgfX0+XG4gICAgICAgICAgICAgICAgPFBpZUNoYXJ0IGpzb25EYXRhPXtyZXN1bHR9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIlBpZUNoYXJ0IiwiUXVlcnlHcmFwaERCIiwiTUlOX0RBVEUiLCJNQVhfREFURSIsInJlc3VsdCIsInNldFJlc3VsdCIsInN0YXJ0RGF0ZSIsInNldFN0YXJ0RGF0ZSIsImVuZERhdGUiLCJzZXRFbmREYXRlIiwidHlwZSIsInNldFR5cGUiLCJpc0NoYXJ0RGlwbGF5ZWQiLCJzZXRJc0NoYXJ0RGlwbGF5ZWQiLCJjYWxjdWxhdGVQcm9ncmVzc0JhciIsInN0YXJ0IiwiZW5kIiwibGVmdFBlcmNlbnRhZ2UiLCJ3aWR0aFBlcmNlbnRhZ2UiLCJleGVjdXRlUXVlcnkiLCJxdWVyeVR5cGUiLCJ1cGRhdGVkUXVlcnkiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwicXVlcnkiLCJkYXRhIiwianNvbiIsImVycm9yIiwiY29uc29sZSIsImhhbmRsZVN0YXJ0RGF0ZUNoYW5nZSIsImUiLCJ2YWx1ZSIsInBhcnNlSW50IiwidGFyZ2V0IiwiaGFuZGxlRW5kRGF0ZUNoYW5nZSIsImRpdiIsImgyIiwiY2xhc3NOYW1lIiwibGFiZWwiLCJpbnB1dCIsIm5hbWUiLCJjaGVja2VkIiwib25DaGFuZ2UiLCJtaW4iLCJtYXgiLCJzdGVwIiwib25LZXlEb3duIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInN0eWxlIiwibGVmdCIsIndpZHRoIiwicCIsInNwYW4iLCJidXR0b24iLCJvbkNsaWNrIiwiZGlzcGxheSIsImpzb25EYXRhIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/QueryGraphDB.js\n"));

/***/ })

});