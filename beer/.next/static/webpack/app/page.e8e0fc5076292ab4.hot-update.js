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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ QueryGraphDB)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _PieChart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PieChart */ \"(app-pages-browser)/./src/app/components/PieChart.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction QueryGraphDB() {\n    _s();\n    const MIN_DATE = 1964;\n    const MAX_DATE = 2019;\n    const [result, setResult] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [startDate, setStartDate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(MIN_DATE);\n    const [endDate, setEndDate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(MAX_DATE);\n    const [type, setType] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"albums\");\n    const [isChartDiplayed, setIsChartDiplayed] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const calculateProgressBar = (start, end)=>{\n        const leftPercentage = (start - MIN_DATE) / (MAX_DATE - MIN_DATE) * 100;\n        const widthPercentage = start === end ? 0.5 : (end - start) / (MAX_DATE - MIN_DATE) * 100;\n        return {\n            leftPercentage,\n            widthPercentage\n        };\n    };\n    const executeQuery = async ()=>{\n        const queryType = type === \"albums\" ? \"Album\" : \"Song\";\n        const updatedQuery = '\\n            PREFIX iut: <https://cours.iut-orsay.fr/npbd/>\\n            PREFIX wd: <http://www.wikidata.org/entity/>\\n            PREFIX wdt: <http://www.wikidata.org/prop/direct/>\\n            PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\\n            PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\\n\\n            SELECT ?wikidataGenreLabel (COUNT(?entity) AS ?genreCount)\\n            WHERE {\\n                ?entity a iut:Nominee ;\\n                        iut:category \"'.concat(queryType, ' Of The Year\"@en ;\\n                        iut:year ?year ;\\n                        iut:hasGenre ?wikidataGenreLabel .\\n\\n                FILTER (xsd:integer(str(?year)) >= ').concat(startDate, \" && xsd:integer(str(?year)) <= \").concat(endDate, \")\\n            }\\n            GROUP BY ?wikidataGenreLabel\\n            ORDER BY DESC(?genreCount)\");\n        try {\n            const response = await fetch(\"/api/graphdb\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    query: updatedQuery\n                })\n            });\n            const data = await response.json();\n            setResult(data);\n            setIsChartDiplayed(true);\n        } catch (error) {\n            console.error(\"Error executing query:\", error);\n        }\n    };\n    const handleStartDateChange = (e)=>{\n        let value = parseInt(e.target.value, 10);\n        if (value < MIN_DATE) value = MIN_DATE;\n        if (value > MAX_DATE) value = MAX_DATE;\n        if (value > endDate) value = endDate;\n        setStartDate(value);\n    };\n    const handleEndDateChange = (e)=>{\n        let value = parseInt(e.target.value, 10);\n        if (value < MIN_DATE) value = MIN_DATE;\n        if (value > MAX_DATE) value = MAX_DATE;\n        if (value < startDate) value = startDate;\n        setEndDate(value);\n    };\n    const { leftPercentage, widthPercentage } = calculateProgressBar(startDate, endDate);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: [\n                    \"Trouvez les statistiques des Grammys de \",\n                    MIN_DATE,\n                    \" \\xe0 \",\n                    MAX_DATE\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/augustin/Documents/Cours/BUT_info/S5/BD/projet/beer/src/app/components/QueryGraphDB.js\",\n                lineNumber: 85,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"form-group\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"types\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                className: \"radio-button \".concat(type === \"albums\" ? \"selected\" : \"\"),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"radio\",\n                                        name: \"type\",\n                                        value: \"albums\",\n                                        checked: type === \"albums\",\n                                        onChange: (e)=>setType(e.target.value)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/augustin/Documents/Cours/BUT_info/S5/BD/projet/beer/src/app/components/QueryGraphDB.js\",\n                                        lineNumber: 91,\n                                        columnNumber: 25\n                                    }, this),\n                                    \"Albums\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/augustin/Documents/Cours/BUT_info/S5/BD/projet/beer/src/app/components/QueryGraphDB.js\",\n                                lineNumber: 88,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                className: \"radio-button \".concat(type === \"singles\" ? \"selected\" : \"\"),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"radio\",\n                                        name: \"type\",\n                                        value: \"singles\",\n                                        checked: type === \"singles\",\n                                        onChange: (e)=>setType(e.target.value)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/augustin/Documents/Cours/BUT_info/S5/BD/projet/beer/src/app/components/QueryGraphDB.js\",\n                                        lineNumber: 103,\n                                        columnNumber: 25\n                                    }, this),\n                                    \"Singles\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/augustin/Documents/Cours/BUT_info/S5/BD/projet/beer/src/app/components/QueryGraphDB.js\",\n                                lineNumber: 100,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/augustin/Documents/Cours/BUT_info/S5/BD/projet/beer/src/app/components/QueryGraphDB.js\",\n                        lineNumber: 87,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"dates\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"number\",\n                                min: MIN_DATE,\n                                max: MAX_DATE,\n                                step: \"1\",\n                                onKeyDown: (event)=>{\n                                    event.preventDefault();\n                                },\n                                value: startDate,\n                                onChange: handleStartDateChange\n                            }, void 0, false, {\n                                fileName: \"/Users/augustin/Documents/Cours/BUT_info/S5/BD/projet/beer/src/app/components/QueryGraphDB.js\",\n                                lineNumber: 114,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"number\",\n                                min: MIN_DATE,\n                                max: MAX_DATE,\n                                step: \"1\",\n                                onKeyDown: (event)=>{\n                                    event.preventDefault();\n                                },\n                                value: endDate,\n                                onChange: handleEndDateChange\n                            }, void 0, false, {\n                                fileName: \"/Users/augustin/Documents/Cours/BUT_info/S5/BD/projet/beer/src/app/components/QueryGraphDB.js\",\n                                lineNumber: 125,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/augustin/Documents/Cours/BUT_info/S5/BD/projet/beer/src/app/components/QueryGraphDB.js\",\n                        lineNumber: 113,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"progress-bar\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"progress-bar-background\"\n                            }, void 0, false, {\n                                fileName: \"/Users/augustin/Documents/Cours/BUT_info/S5/BD/projet/beer/src/app/components/QueryGraphDB.js\",\n                                lineNumber: 139,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"progress-bar-fill\",\n                                style: {\n                                    left: \"\".concat(leftPercentage, \"%\"),\n                                    width: \"\".concat(widthPercentage, \"%\")\n                                }\n                            }, void 0, false, {\n                                fileName: \"/Users/augustin/Documents/Cours/BUT_info/S5/BD/projet/beer/src/app/components/QueryGraphDB.js\",\n                                lineNumber: 140,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/augustin/Documents/Cours/BUT_info/S5/BD/projet/beer/src/app/components/QueryGraphDB.js\",\n                        lineNumber: 138,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"summary\",\n                        children: [\n                            \"Vous allez effectuer des recherches entre \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: startDate\n                            }, void 0, false, {\n                                fileName: \"/Users/augustin/Documents/Cours/BUT_info/S5/BD/projet/beer/src/app/components/QueryGraphDB.js\",\n                                lineNumber: 149,\n                                columnNumber: 63\n                            }, this),\n                            \" et \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: endDate\n                            }, void 0, false, {\n                                fileName: \"/Users/augustin/Documents/Cours/BUT_info/S5/BD/projet/beer/src/app/components/QueryGraphDB.js\",\n                                lineNumber: 149,\n                                columnNumber: 91\n                            }, this),\n                            \" pour les \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: type\n                            }, void 0, false, {\n                                fileName: \"/Users/augustin/Documents/Cours/BUT_info/S5/BD/projet/beer/src/app/components/QueryGraphDB.js\",\n                                lineNumber: 149,\n                                columnNumber: 123\n                            }, this),\n                            \".\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/augustin/Documents/Cours/BUT_info/S5/BD/projet/beer/src/app/components/QueryGraphDB.js\",\n                        lineNumber: 148,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: executeQuery,\n                        children: \"Chercher\"\n                    }, void 0, false, {\n                        fileName: \"/Users/augustin/Documents/Cours/BUT_info/S5/BD/projet/beer/src/app/components/QueryGraphDB.js\",\n                        lineNumber: 151,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/augustin/Documents/Cours/BUT_info/S5/BD/projet/beer/src/app/components/QueryGraphDB.js\",\n                lineNumber: 86,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"chart\",\n                disabled: isChartDiplayed,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PieChart__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    jsonData: result\n                }, void 0, false, {\n                    fileName: \"/Users/augustin/Documents/Cours/BUT_info/S5/BD/projet/beer/src/app/components/QueryGraphDB.js\",\n                    lineNumber: 157,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/augustin/Documents/Cours/BUT_info/S5/BD/projet/beer/src/app/components/QueryGraphDB.js\",\n                lineNumber: 156,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/augustin/Documents/Cours/BUT_info/S5/BD/projet/beer/src/app/components/QueryGraphDB.js\",\n        lineNumber: 84,\n        columnNumber: 9\n    }, this);\n}\n_s(QueryGraphDB, \"8G0sS0PVfWpUYsnBxi8CkdLhHKs=\");\n_c = QueryGraphDB;\nvar _c;\n$RefreshReg$(_c, \"QueryGraphDB\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9RdWVyeUdyYXBoREIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUVpQztBQUNDO0FBRW5CLFNBQVNFOztJQUNwQixNQUFNQyxXQUFXO0lBQ2pCLE1BQU1DLFdBQVc7SUFFakIsTUFBTSxDQUFDQyxRQUFRQyxVQUFVLEdBQUdOLCtDQUFRQSxDQUFDO0lBQ3JDLE1BQU0sQ0FBQ08sV0FBV0MsYUFBYSxHQUFHUiwrQ0FBUUEsQ0FBQ0c7SUFDM0MsTUFBTSxDQUFDTSxTQUFTQyxXQUFXLEdBQUdWLCtDQUFRQSxDQUFDSTtJQUN2QyxNQUFNLENBQUNPLE1BQU1DLFFBQVEsR0FBR1osK0NBQVFBLENBQUM7SUFDakMsTUFBTSxDQUFDYSxpQkFBaUJDLG1CQUFtQixHQUFHZCwrQ0FBUUEsQ0FBQztJQUV2RCxNQUFNZSx1QkFBdUIsQ0FBQ0MsT0FBT0M7UUFDakMsTUFBTUMsaUJBQWlCLENBQUVGLFFBQVFiLFFBQU8sSUFBTUMsQ0FBQUEsV0FBV0QsUUFBTyxJQUFNO1FBRXRFLE1BQU1nQixrQkFBa0JILFVBQVVDLE1BQzVCLE1BQ0EsQ0FBRUEsTUFBTUQsS0FBSSxJQUFNWixDQUFBQSxXQUFXRCxRQUFPLElBQU07UUFFaEQsT0FBTztZQUFFZTtZQUFnQkM7UUFBZ0I7SUFDN0M7SUFFQSxNQUFNQyxlQUFlO1FBQ2pCLE1BQU1DLFlBQVlWLFNBQVMsV0FBVyxVQUFVO1FBRWhELE1BQU1XLGVBQWUsd2VBY3dCZixPQUpiYyxXQUFVLG1MQUk4Q1osT0FBM0NGLFdBQVUsbUNBQXlDLE9BQVJFLFNBQVE7UUFLaEcsSUFBSTtZQUNBLE1BQU1jLFdBQVcsTUFBTUMsTUFBTSxnQkFBZ0I7Z0JBQ3pDQyxRQUFRO2dCQUNSQyxTQUFTO29CQUNMLGdCQUFnQjtnQkFDcEI7Z0JBQ0FDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQztvQkFBRUMsT0FBT1I7Z0JBQWE7WUFDL0M7WUFFQSxNQUFNUyxPQUFPLE1BQU1SLFNB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QkFBUW1CLFVBQVVqRDswQkFDN0IsNEVBQUNaLGlEQUFRQTtvQkFBQzhELFVBQVUxRDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJcEM7R0EzSndCSDtLQUFBQSIsInNvdXJjZXMiOlsiL1VzZXJzL2F1Z3VzdGluL0RvY3VtZW50cy9Db3Vycy9CVVRfaW5mby9TNS9CRC9wcm9qZXQvYmVlci9zcmMvYXBwL2NvbXBvbmVudHMvUXVlcnlHcmFwaERCLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFBpZUNoYXJ0IGZyb20gXCIuL1BpZUNoYXJ0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFF1ZXJ5R3JhcGhEQigpIHtcbiAgICBjb25zdCBNSU5fREFURSA9IDE5NjQ7XG4gICAgY29uc3QgTUFYX0RBVEUgPSAyMDE5O1xuXG4gICAgY29uc3QgW3Jlc3VsdCwgc2V0UmVzdWx0XSA9IHVzZVN0YXRlKG51bGwpO1xuICAgIGNvbnN0IFtzdGFydERhdGUsIHNldFN0YXJ0RGF0ZV0gPSB1c2VTdGF0ZShNSU5fREFURSk7XG4gICAgY29uc3QgW2VuZERhdGUsIHNldEVuZERhdGVdID0gdXNlU3RhdGUoTUFYX0RBVEUpO1xuICAgIGNvbnN0IFt0eXBlLCBzZXRUeXBlXSA9IHVzZVN0YXRlKFwiYWxidW1zXCIpO1xuICAgIGNvbnN0IFtpc0NoYXJ0RGlwbGF5ZWQsIHNldElzQ2hhcnREaXBsYXllZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgICBjb25zdCBjYWxjdWxhdGVQcm9ncmVzc0JhciA9IChzdGFydCwgZW5kKSA9PiB7XG4gICAgICAgIGNvbnN0IGxlZnRQZXJjZW50YWdlID0gKChzdGFydCAtIE1JTl9EQVRFKSAvIChNQVhfREFURSAtIE1JTl9EQVRFKSkgKiAxMDA7XG5cbiAgICAgICAgY29uc3Qgd2lkdGhQZXJjZW50YWdlID0gc3RhcnQgPT09IGVuZFxuICAgICAgICAgICAgPyAwLjVcbiAgICAgICAgICAgIDogKChlbmQgLSBzdGFydCkgLyAoTUFYX0RBVEUgLSBNSU5fREFURSkpICogMTAwO1xuXG4gICAgICAgIHJldHVybiB7IGxlZnRQZXJjZW50YWdlLCB3aWR0aFBlcmNlbnRhZ2UgfTtcbiAgICB9O1xuXG4gICAgY29uc3QgZXhlY3V0ZVF1ZXJ5ID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBjb25zdCBxdWVyeVR5cGUgPSB0eXBlID09PSBcImFsYnVtc1wiID8gXCJBbGJ1bVwiIDogXCJTb25nXCI7XG5cbiAgICAgICAgY29uc3QgdXBkYXRlZFF1ZXJ5ID0gYFxuICAgICAgICAgICAgUFJFRklYIGl1dDogPGh0dHBzOi8vY291cnMuaXV0LW9yc2F5LmZyL25wYmQvPlxuICAgICAgICAgICAgUFJFRklYIHdkOiA8aHR0cDovL3d3dy53aWtpZGF0YS5vcmcvZW50aXR5Lz5cbiAgICAgICAgICAgIFBSRUZJWCB3ZHQ6IDxodHRwOi8vd3d3Lndpa2lkYXRhLm9yZy9wcm9wL2RpcmVjdC8+XG4gICAgICAgICAgICBQUkVGSVggcmRmczogPGh0dHA6Ly93d3cudzMub3JnLzIwMDAvMDEvcmRmLXNjaGVtYSM+XG4gICAgICAgICAgICBQUkVGSVggeHNkOiA8aHR0cDovL3d3dy53My5vcmcvMjAwMS9YTUxTY2hlbWEjPlxuXG4gICAgICAgICAgICBTRUxFQ1QgP3dpa2lkYXRhR2VucmVMYWJlbCAoQ09VTlQoP2VudGl0eSkgQVMgP2dlbnJlQ291bnQpXG4gICAgICAgICAgICBXSEVSRSB7XG4gICAgICAgICAgICAgICAgP2VudGl0eSBhIGl1dDpOb21pbmVlIDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl1dDpjYXRlZ29yeSBcIiR7cXVlcnlUeXBlfSBPZiBUaGUgWWVhclwiQGVuIDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl1dDp5ZWFyID95ZWFyIDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl1dDpoYXNHZW5yZSA/d2lraWRhdGFHZW5yZUxhYmVsIC5cblxuICAgICAgICAgICAgICAgIEZJTFRFUiAoeHNkOmludGVnZXIoc3RyKD95ZWFyKSkgPj0gJHtzdGFydERhdGV9ICYmIHhzZDppbnRlZ2VyKHN0cig/eWVhcikpIDw9ICR7ZW5kRGF0ZX0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBHUk9VUCBCWSA/d2lraWRhdGFHZW5yZUxhYmVsXG4gICAgICAgICAgICBPUkRFUiBCWSBERVNDKD9nZW5yZUNvdW50KWA7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCIvYXBpL2dyYXBoZGJcIiwge1xuICAgICAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgcXVlcnk6IHVwZGF0ZWRRdWVyeSB9KSxcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgc2V0UmVzdWx0KGRhdGEpO1xuICAgICAgICAgICAgc2V0SXNDaGFydERpcGxheWVkKHRydWUpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGV4ZWN1dGluZyBxdWVyeTpcIiwgZXJyb3IpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZVN0YXJ0RGF0ZUNoYW5nZSA9IChlKSA9PiB7XG4gICAgICAgIGxldCB2YWx1ZSA9IHBhcnNlSW50KGUudGFyZ2V0LnZhbHVlLCAxMCk7XG4gICAgICAgIGlmICh2YWx1ZSA8IE1JTl9EQVRFKSB2YWx1ZSA9IE1JTl9EQVRFO1xuICAgICAgICBpZiAodmFsdWUgPiBNQVhfREFURSkgdmFsdWUgPSBNQVhfREFURTtcbiAgICAgICAgaWYgKHZhbHVlID4gZW5kRGF0ZSkgdmFsdWUgPSBlbmREYXRlO1xuICAgICAgICBzZXRTdGFydERhdGUodmFsdWUpO1xuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVFbmREYXRlQ2hhbmdlID0gKGUpID0+IHtcbiAgICAgICAgbGV0IHZhbHVlID0gcGFyc2VJbnQoZS50YXJnZXQudmFsdWUsIDEwKTtcbiAgICAgICAgaWYgKHZhbHVlIDwgTUlOX0RBVEUpIHZhbHVlID0gTUlOX0RBVEU7XG4gICAgICAgIGlmICh2YWx1ZSA+IE1BWF9EQVRFKSB2YWx1ZSA9IE1BWF9EQVRFO1xuICAgICAgICBpZiAodmFsdWUgPCBzdGFydERhdGUpIHZhbHVlID0gc3RhcnREYXRlO1xuICAgICAgICBzZXRFbmREYXRlKHZhbHVlKTtcbiAgICB9O1xuXG4gICAgY29uc3QgeyBsZWZ0UGVyY2VudGFnZSwgd2lkdGhQZXJjZW50YWdlIH0gPSBjYWxjdWxhdGVQcm9ncmVzc0JhcihzdGFydERhdGUsIGVuZERhdGUpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxoMj5Ucm91dmV6IGxlcyBzdGF0aXN0aXF1ZXMgZGVzIEdyYW1teXMgZGUge01JTl9EQVRFfSDDoCB7TUFYX0RBVEV9PC9oMj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHlwZXNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2ByYWRpby1idXR0b24gJHt0eXBlID09PSBcImFsYnVtc1wiID8gXCJzZWxlY3RlZFwiIDogXCJcIn1gfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ0eXBlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cImFsYnVtc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17dHlwZSA9PT0gXCJhbGJ1bXNcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFR5cGUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIEFsYnVtc1xuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHJhZGlvLWJ1dHRvbiAke3R5cGUgPT09IFwic2luZ2xlc1wiID8gXCJzZWxlY3RlZFwiIDogXCJcIn1gfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ0eXBlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cInNpbmdsZXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3R5cGUgPT09IFwic2luZ2xlc1wifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VHlwZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgU2luZ2xlc1xuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGF0ZXNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbj17TUlOX0RBVEV9XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXg9e01BWF9EQVRFfVxuICAgICAgICAgICAgICAgICAgICAgICAgc3RlcD1cIjFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25LZXlEb3duPXsoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzdGFydERhdGV9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlU3RhcnREYXRlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbWluPXtNSU5fREFURX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG1heD17TUFYX0RBVEV9XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGVwPVwiMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbktleURvd249eyhldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2VuZERhdGV9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlRW5kRGF0ZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZ3Jlc3MtYmFyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZ3Jlc3MtYmFyLWJhY2tncm91bmRcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHJvZ3Jlc3MtYmFyLWZpbGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiBgJHtsZWZ0UGVyY2VudGFnZX0lYCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogYCR7d2lkdGhQZXJjZW50YWdlfSVgLFxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgPjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInN1bW1hcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgVm91cyBhbGxleiBlZmZlY3R1ZXIgZGVzIHJlY2hlcmNoZXMgZW50cmUgPHNwYW4+e3N0YXJ0RGF0ZX08L3NwYW4+IGV0IDxzcGFuPntlbmREYXRlfTwvc3Bhbj4gcG91ciBsZXMgPHNwYW4+e3R5cGV9PC9zcGFuPi5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtleGVjdXRlUXVlcnl9PlxuICAgICAgICAgICAgICAgICAgICBDaGVyY2hlclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhcnRcIiBkaXNhYmxlZD17aXNDaGFydERpcGxheWVkfT5cbiAgICAgICAgICAgICAgICA8UGllQ2hhcnQganNvbkRhdGE9e3Jlc3VsdH0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiUGllQ2hhcnQiLCJRdWVyeUdyYXBoREIiLCJNSU5fREFURSIsIk1BWF9EQVRFIiwicmVzdWx0Iiwic2V0UmVzdWx0Iiwic3RhcnREYXRlIiwic2V0U3RhcnREYXRlIiwiZW5kRGF0ZSIsInNldEVuZERhdGUiLCJ0eXBlIiwic2V0VHlwZSIsImlzQ2hhcnREaXBsYXllZCIsInNldElzQ2hhcnREaXBsYXllZCIsImNhbGN1bGF0ZVByb2dyZXNzQmFyIiwic3RhcnQiLCJlbmQiLCJsZWZ0UGVyY2VudGFnZSIsIndpZHRoUGVyY2VudGFnZSIsImV4ZWN1dGVRdWVyeSIsInF1ZXJ5VHlwZSIsInVwZGF0ZWRRdWVyeSIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJxdWVyeSIsImRhdGEiLCJqc29uIiwiZXJyb3IiLCJjb25zb2xlIiwiaGFuZGxlU3RhcnREYXRlQ2hhbmdlIiwiZSIsInZhbHVlIiwicGFyc2VJbnQiLCJ0YXJnZXQiLCJoYW5kbGVFbmREYXRlQ2hhbmdlIiwiZGl2IiwiaDIiLCJjbGFzc05hbWUiLCJsYWJlbCIsImlucHV0IiwibmFtZSIsImNoZWNrZWQiLCJvbkNoYW5nZSIsIm1pbiIsIm1heCIsInN0ZXAiLCJvbktleURvd24iLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic3R5bGUiLCJsZWZ0Iiwid2lkdGgiLCJwIiwic3BhbiIsImJ1dHRvbiIsIm9uQ2xpY2siLCJkaXNhYmxlZCIsImpzb25EYXRhIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/QueryGraphDB.js\n"));

/***/ })

});