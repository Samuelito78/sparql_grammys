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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ QueryGraphDB)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction QueryGraphDB() {\n    _s();\n    const [result, setResult] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [startDate, setStartDate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1958);\n    const [endDate, setEndDate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(2019);\n    const [type, setType] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"albums\");\n    const [query, setQuery] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('\\n        PREFIX iut: <https://cours.iut-orsay.fr/npbd/>\\n        PREFIX wd: <http://www.wikidata.org/entity/>\\n        PREFIX wdt: <http://www.wikidata.org/prop/direct/>\\n        PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\\n        PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\\n\\n        SELECT * WHERE {\\n        ?entity a iut:Nominee ;\\n                iut:category \"{queryType} Of The Year\"@en ; # on met un boolean de con qui change soit album soit song\\n                iut:name ?name ;\\n                iut:year ?year ;\\n                iut:hasGenre ?wikidataGenreLabel .\\n\\n        # Convert the xsd:gYear to a string and compare\\n        FILTER (xsd:integer(str(?year)) >= '.concat(startDate, \" && xsd:integer(str(?year)) <= \").concat(endDate, \") # ici on change les ann\\xe9es avec des variables de con voila bisous\\n            }\"));\n    const MIN_DATE = 1958;\n    const MAX_DATE = 2019;\n    const calculateProgressBar = (start, end)=>{\n        const leftPercentage = (start - MIN_DATE) / (MAX_DATE - MIN_DATE) * 100;\n        const widthPercentage = start === end ? 0.5 : (end - start) / (MAX_DATE - MIN_DATE) * 100;\n        return {\n            leftPercentage,\n            widthPercentage\n        };\n    };\n    const executeQuery = async ()=>{\n        let queryType;\n        if (type === \"albums\") queryType = \"Album\";\n        else queryType = \"Song\";\n        console.log(queryType);\n        const updatedQuery = query.replace(\"{queryType}\", queryType);\n        try {\n            const response = await fetch(\"/api/graphdb\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    query: updatedQuery\n                })\n            });\n            const data = await response.json();\n            setResult(data);\n        } catch (error) {\n            console.error(\"Error executing query:\", error);\n        }\n    };\n    const handleStartDateChange = (e)=>{\n        let value = parseInt(e.target.value, 10);\n        if (value < MIN_DATE) value = MIN_DATE;\n        if (value > MAX_DATE) value = MAX_DATE;\n        if (value > endDate) value = endDate;\n        setStartDate(value);\n    };\n    const handleEndDateChange = (e)=>{\n        let value = parseInt(e.target.value, 10);\n        if (value < MIN_DATE) value = MIN_DATE;\n        if (value > MAX_DATE) value = MAX_DATE;\n        if (value < startDate) value = startDate;\n        setEndDate(value);\n    };\n    const { leftPercentage, widthPercentage } = calculateProgressBar(startDate, endDate);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: [\n                    \"Trouvez les statistiques des Grammys de \",\n                    MIN_DATE,\n                    \" \\xe0 \",\n                    MAX_DATE\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/augustin/Documents/Cours/BUT_info/S5/BD/projet/beer/src/app/components/QueryGraphDB.js\",\n                lineNumber: 87,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"form-group\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"types\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                className: \"radio-button \".concat(type === \"albums\" ? \"selected\" : \"\", \" \"),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"radio\",\n                                        name: \"type\",\n                                        value: \"albums\",\n                                        checked: type === \"albums\",\n                                        onChange: (e)=>setType(e.target.value)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/augustin/Documents/Cours/BUT_info/S5/BD/projet/beer/src/app/components/QueryGraphDB.js\",\n                                        lineNumber: 93,\n                                        columnNumber: 25\n                                    }, this),\n                                    \"Albums\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/augustin/Documents/Cours/BUT_info/S5/BD/projet/beer/src/app/components/QueryGraphDB.js\",\n                                lineNumber: 90,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                className: \"radio-button \".concat(type === \"singles\" ? \"selected\" : \"\", \" \"),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"radio\",\n                                        name: \"type\",\n                                        value: \"singles\",\n                                        checked: type === \"singles\",\n                                        onChange: (e)=>setType(e.target.value)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/augustin/Documents/Cours/BUT_info/S5/BD/projet/beer/src/app/components/QueryGraphDB.js\",\n                                        lineNumber: 105,\n                                        columnNumber: 25\n                                    }, this),\n                                    \"Singles\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/augustin/Documents/Cours/BUT_info/S5/BD/projet/beer/src/app/components/QueryGraphDB.js\",\n                                lineNumber: 102,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/augustin/Documents/Cours/BUT_info/S5/BD/projet/beer/src/app/components/QueryGraphDB.js\",\n                        lineNumber: 89,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"dates\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"number\",\n                                min: MIN_DATE,\n                                max: MAX_DATE,\n                                step: \"1\",\n                                onKeyDown: (event)=>{\n                                    event.preventDefault();\n                                },\n                                value: startDate,\n                                onChange: handleStartDateChange\n                            }, void 0, false, {\n                                fileName: \"/Users/augustin/Documents/Cours/BUT_info/S5/BD/projet/beer/src/app/components/QueryGraphDB.js\",\n                                lineNumber: 116,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"number\",\n                                min: MIN_DATE,\n                                max: MAX_DATE,\n                                step: \"1\",\n                                onKeyDown: (event)=>{\n                                    event.preventDefault();\n                                },\n                                value: endDate,\n                                onChange: handleEndDateChange\n                            }, void 0, false, {\n                                fileName: \"/Users/augustin/Documents/Cours/BUT_info/S5/BD/projet/beer/src/app/components/QueryGraphDB.js\",\n                                lineNumber: 127,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/augustin/Documents/Cours/BUT_info/S5/BD/projet/beer/src/app/components/QueryGraphDB.js\",\n                        lineNumber: 115,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"progress-bar\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"progress-bar-background\"\n                            }, void 0, false, {\n                                fileName: \"/Users/augustin/Documents/Cours/BUT_info/S5/BD/projet/beer/src/app/components/QueryGraphDB.js\",\n                                lineNumber: 141,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"progress-bar-fill\",\n                                style: {\n                                    left: \"\".concat(leftPercentage, \"% \"),\n                                    width: \"\".concat(widthPercentage, \"% \")\n                                }\n                            }, void 0, false, {\n                                fileName: \"/Users/augustin/Documents/Cours/BUT_info/S5/BD/projet/beer/src/app/components/QueryGraphDB.js\",\n                                lineNumber: 142,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/augustin/Documents/Cours/BUT_info/S5/BD/projet/beer/src/app/components/QueryGraphDB.js\",\n                        lineNumber: 140,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"summary\",\n                        children: [\n                            \"Vous allez effectuer des recherches entre \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: startDate\n                            }, void 0, false, {\n                                fileName: \"/Users/augustin/Documents/Cours/BUT_info/S5/BD/projet/beer/src/app/components/QueryGraphDB.js\",\n                                lineNumber: 151,\n                                columnNumber: 63\n                            }, this),\n                            \" et \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: endDate\n                            }, void 0, false, {\n                                fileName: \"/Users/augustin/Documents/Cours/BUT_info/S5/BD/projet/beer/src/app/components/QueryGraphDB.js\",\n                                lineNumber: 151,\n                                columnNumber: 91\n                            }, this),\n                            \" pour les \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: type\n                            }, void 0, false, {\n                                fileName: \"/Users/augustin/Documents/Cours/BUT_info/S5/BD/projet/beer/src/app/components/QueryGraphDB.js\",\n                                lineNumber: 151,\n                                columnNumber: 123\n                            }, this),\n                            \".\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/augustin/Documents/Cours/BUT_info/S5/BD/projet/beer/src/app/components/QueryGraphDB.js\",\n                        lineNumber: 150,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: executeQuery,\n                        children: \"Chercher\"\n                    }, void 0, false, {\n                        fileName: \"/Users/augustin/Documents/Cours/BUT_info/S5/BD/projet/beer/src/app/components/QueryGraphDB.js\",\n                        lineNumber: 153,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/augustin/Documents/Cours/BUT_info/S5/BD/projet/beer/src/app/components/QueryGraphDB.js\",\n                lineNumber: 88,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"pre\", {\n                children: JSON.stringify(result, null, 2)\n            }, void 0, false, {\n                fileName: \"/Users/augustin/Documents/Cours/BUT_info/S5/BD/projet/beer/src/app/components/QueryGraphDB.js\",\n                lineNumber: 158,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/augustin/Documents/Cours/BUT_info/S5/BD/projet/beer/src/app/components/QueryGraphDB.js\",\n        lineNumber: 86,\n        columnNumber: 9\n    }, this);\n}\n_s(QueryGraphDB, \"/pXU41vdngQuv2tSXhZrWV39Rog=\");\n_c = QueryGraphDB;\nvar _c;\n$RefreshReg$(_c, \"QueryGraphDB\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9RdWVyeUdyYXBoREIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBRWlDO0FBQ0E7QUFFbEIsU0FBU0U7O0lBQ3BCLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHSiwrQ0FBUUEsQ0FBQztJQUNyQyxNQUFNLENBQUNLLFdBQVdDLGFBQWEsR0FBR04sK0NBQVFBLENBQUM7SUFDM0MsTUFBTSxDQUFDTyxTQUFTQyxXQUFXLEdBQUdSLCtDQUFRQSxDQUFDO0lBQ3ZDLE1BQU0sQ0FBQ1MsTUFBTUMsUUFBUSxHQUFHViwrQ0FBUUEsQ0FBQztJQUVqQyxNQUFNLENBQUNXLE9BQU9DLFNBQVMsR0FBR1osK0NBQVFBLENBQUMseXJCQWVpRE8sT0FBM0NGLFdBQVUsbUNBQXlDLE9BQVJFLFNBQVE7SUFHNUYsTUFBTU0sV0FBVztJQUNqQixNQUFNQyxXQUFXO0lBRWpCLE1BQU1DLHVCQUF1QixDQUFDQyxPQUFPQztRQUNqQyxNQUFNQyxpQkFBaUIsQ0FBRUYsUUFBUUgsUUFBTyxJQUFNQyxDQUFBQSxXQUFXRCxRQUFPLElBQU07UUFFdEUsTUFBTU0sa0JBQWtCSCxVQUFVQyxNQUM1QixNQUNBLENBQUVBLE1BQU1ELEtBQUksSUFBTUYsQ0FBQUEsV0FBV0QsUUFBTyxJQUFNO1FBRWhELE9BQU87WUFBRUs7WUFBZ0JDO1FBQWdCO0lBQzdDO0lBRUEsTUFBTUMsZUFBZTtRQUNqQixJQUFJQztRQUNKLElBQUlaLFNBQVMsVUFBVVksWUFBWTthQUM5QkEsWUFBWTtRQUNqQkMsUUFBUUMsR0FBRyxDQUFDRjtRQUVaLE1BQU1HLGVBQWViLE1BQU1jLE9BQU8sQ0FBQyxlQUFlSjtRQUVsRCxJQUFJO1lBQ0EsTUFBTUssV0FBVyxNQUFNQyxNQUFNLGdCQUFnQjtnQkFDekNDLFFBQVE7Z0JBQ1JDLFNBQVM7b0JBQ0wsZ0JBQWdCO2dCQUNwQjtnQkFDQUMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDO29CQUFFckIsT0FB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Ozs7OzswQkFLbkMsOERBQUMyQzswQkFDSWhDLEtBQUtDLFNBQVMsQ0FBQzdCLFFBQVEsTUFBTTs7Ozs7Ozs7Ozs7O0FBSTlDO0dBN0p3QkQ7S0FBQUEiLCJzb3VyY2VzIjpbIi9Vc2Vycy9hdWd1c3Rpbi9Eb2N1bWVudHMvQ291cnMvQlVUX2luZm8vUzUvQkQvcHJvamV0L2JlZXIvc3JjL2FwcC9jb21wb25lbnRzL1F1ZXJ5R3JhcGhEQi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IENoYXJ0IH0gZnJvbSBcImNoYXJ0LmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFF1ZXJ5R3JhcGhEQigpIHtcbiAgICBjb25zdCBbcmVzdWx0LCBzZXRSZXN1bHRdID0gdXNlU3RhdGUobnVsbCk7XG4gICAgY29uc3QgW3N0YXJ0RGF0ZSwgc2V0U3RhcnREYXRlXSA9IHVzZVN0YXRlKDE5NTgpO1xuICAgIGNvbnN0IFtlbmREYXRlLCBzZXRFbmREYXRlXSA9IHVzZVN0YXRlKDIwMTkpO1xuICAgIGNvbnN0IFt0eXBlLCBzZXRUeXBlXSA9IHVzZVN0YXRlKFwiYWxidW1zXCIpO1xuXG4gICAgY29uc3QgW3F1ZXJ5LCBzZXRRdWVyeV0gPSB1c2VTdGF0ZShgXG4gICAgICAgIFBSRUZJWCBpdXQ6IDxodHRwczovL2NvdXJzLml1dC1vcnNheS5mci9ucGJkLz5cbiAgICAgICAgUFJFRklYIHdkOiA8aHR0cDovL3d3dy53aWtpZGF0YS5vcmcvZW50aXR5Lz5cbiAgICAgICAgUFJFRklYIHdkdDogPGh0dHA6Ly93d3cud2lraWRhdGEub3JnL3Byb3AvZGlyZWN0Lz5cbiAgICAgICAgUFJFRklYIHJkZnM6IDxodHRwOi8vd3d3LnczLm9yZy8yMDAwLzAxL3JkZi1zY2hlbWEjPlxuICAgICAgICBQUkVGSVggeHNkOiA8aHR0cDovL3d3dy53My5vcmcvMjAwMS9YTUxTY2hlbWEjPlxuXG4gICAgICAgIFNFTEVDVCAqIFdIRVJFIHtcbiAgICAgICAgP2VudGl0eSBhIGl1dDpOb21pbmVlIDtcbiAgICAgICAgICAgICAgICBpdXQ6Y2F0ZWdvcnkgXCJ7cXVlcnlUeXBlfSBPZiBUaGUgWWVhclwiQGVuIDsgIyBvbiBtZXQgdW4gYm9vbGVhbiBkZSBjb24gcXVpIGNoYW5nZSBzb2l0IGFsYnVtIHNvaXQgc29uZ1xuICAgICAgICAgICAgICAgIGl1dDpuYW1lID9uYW1lIDtcbiAgICAgICAgICAgICAgICBpdXQ6eWVhciA/eWVhciA7XG4gICAgICAgICAgICAgICAgaXV0Omhhc0dlbnJlID93aWtpZGF0YUdlbnJlTGFiZWwgLlxuXG4gICAgICAgICMgQ29udmVydCB0aGUgeHNkOmdZZWFyIHRvIGEgc3RyaW5nIGFuZCBjb21wYXJlXG4gICAgICAgIEZJTFRFUiAoeHNkOmludGVnZXIoc3RyKD95ZWFyKSkgPj0gJHtzdGFydERhdGV9ICYmIHhzZDppbnRlZ2VyKHN0cig/eWVhcikpIDw9ICR7ZW5kRGF0ZX0pICMgaWNpIG9uIGNoYW5nZSBsZXMgYW5uw6llcyBhdmVjIGRlcyB2YXJpYWJsZXMgZGUgY29uIHZvaWxhIGJpc291c1xuICAgICAgICAgICAgfWApO1xuXG4gICAgY29uc3QgTUlOX0RBVEUgPSAxOTU4O1xuICAgIGNvbnN0IE1BWF9EQVRFID0gMjAxOTtcblxuICAgIGNvbnN0IGNhbGN1bGF0ZVByb2dyZXNzQmFyID0gKHN0YXJ0LCBlbmQpID0+IHtcbiAgICAgICAgY29uc3QgbGVmdFBlcmNlbnRhZ2UgPSAoKHN0YXJ0IC0gTUlOX0RBVEUpIC8gKE1BWF9EQVRFIC0gTUlOX0RBVEUpKSAqIDEwMDtcblxuICAgICAgICBjb25zdCB3aWR0aFBlcmNlbnRhZ2UgPSBzdGFydCA9PT0gZW5kXG4gICAgICAgICAgICA/IDAuNVxuICAgICAgICAgICAgOiAoKGVuZCAtIHN0YXJ0KSAvIChNQVhfREFURSAtIE1JTl9EQVRFKSkgKiAxMDA7XG5cbiAgICAgICAgcmV0dXJuIHsgbGVmdFBlcmNlbnRhZ2UsIHdpZHRoUGVyY2VudGFnZSB9O1xuICAgIH07XG5cbiAgICBjb25zdCBleGVjdXRlUXVlcnkgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGxldCBxdWVyeVR5cGU7XG4gICAgICAgIGlmICh0eXBlID09PSBcImFsYnVtc1wiKSBxdWVyeVR5cGUgPSBcIkFsYnVtXCI7XG4gICAgICAgIGVsc2UgcXVlcnlUeXBlID0gXCJTb25nXCI7XG4gICAgICAgIGNvbnNvbGUubG9nKHF1ZXJ5VHlwZSk7XG5cbiAgICAgICAgY29uc3QgdXBkYXRlZFF1ZXJ5ID0gcXVlcnkucmVwbGFjZShcIntxdWVyeVR5cGV9XCIsIHF1ZXJ5VHlwZSk7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCIvYXBpL2dyYXBoZGJcIiwge1xuICAgICAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgcXVlcnk6IHVwZGF0ZWRRdWVyeSB9KSxcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgc2V0UmVzdWx0KGRhdGEpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGV4ZWN1dGluZyBxdWVyeTpcIiwgZXJyb3IpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZVN0YXJ0RGF0ZUNoYW5nZSA9IChlKSA9PiB7XG4gICAgICAgIGxldCB2YWx1ZSA9IHBhcnNlSW50KGUudGFyZ2V0LnZhbHVlLCAxMCk7XG4gICAgICAgIGlmICh2YWx1ZSA8IE1JTl9EQVRFKSB2YWx1ZSA9IE1JTl9EQVRFO1xuICAgICAgICBpZiAodmFsdWUgPiBNQVhfREFURSkgdmFsdWUgPSBNQVhfREFURTtcbiAgICAgICAgaWYgKHZhbHVlID4gZW5kRGF0ZSkgdmFsdWUgPSBlbmREYXRlO1xuICAgICAgICBzZXRTdGFydERhdGUodmFsdWUpO1xuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVFbmREYXRlQ2hhbmdlID0gKGUpID0+IHtcbiAgICAgICAgbGV0IHZhbHVlID0gcGFyc2VJbnQoZS50YXJnZXQudmFsdWUsIDEwKTtcbiAgICAgICAgaWYgKHZhbHVlIDwgTUlOX0RBVEUpIHZhbHVlID0gTUlOX0RBVEU7XG4gICAgICAgIGlmICh2YWx1ZSA+IE1BWF9EQVRFKSB2YWx1ZSA9IE1BWF9EQVRFO1xuICAgICAgICBpZiAodmFsdWUgPCBzdGFydERhdGUpIHZhbHVlID0gc3RhcnREYXRlO1xuICAgICAgICBzZXRFbmREYXRlKHZhbHVlKTtcbiAgICB9O1xuXG4gICAgY29uc3QgeyBsZWZ0UGVyY2VudGFnZSwgd2lkdGhQZXJjZW50YWdlIH0gPSBjYWxjdWxhdGVQcm9ncmVzc0JhcihzdGFydERhdGUsIGVuZERhdGUpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxoMj5Ucm91dmV6IGxlcyBzdGF0aXN0aXF1ZXMgZGVzIEdyYW1teXMgZGUge01JTl9EQVRFfSDDoCB7TUFYX0RBVEV9PC9oMj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHlwZXNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2ByYWRpby1idXR0b24gJHt0eXBlID09PSBcImFsYnVtc1wiID8gXCJzZWxlY3RlZFwiIDogXCJcIn0gYH1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwidHlwZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJhbGJ1bXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3R5cGUgPT09IFwiYWxidW1zXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRUeXBlKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICBBbGJ1bXNcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2ByYWRpby1idXR0b24gJHt0eXBlID09PSBcInNpbmdsZXNcIiA/IFwic2VsZWN0ZWRcIiA6IFwiXCJ9IGB9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInR5cGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwic2luZ2xlc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17dHlwZSA9PT0gXCJzaW5nbGVzXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRUeXBlKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICBTaW5nbGVzXG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXRlc1wiPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbWluPXtNSU5fREFURX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG1heD17TUFYX0RBVEV9XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGVwPVwiMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbktleURvd249eyhldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3N0YXJ0RGF0ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVTdGFydERhdGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW49e01JTl9EQVRFfVxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4PXtNQVhfREFURX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0ZXA9XCIxXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uS2V5RG93bj17KGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZW5kRGF0ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVFbmREYXRlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9ncmVzcy1iYXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9ncmVzcy1iYXItYmFja2dyb3VuZFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwcm9ncmVzcy1iYXItZmlsbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IGAke2xlZnRQZXJjZW50YWdlfSUgYCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogYCR7d2lkdGhQZXJjZW50YWdlfSUgYCxcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgID48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJzdW1tYXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgIFZvdXMgYWxsZXogZWZmZWN0dWVyIGRlcyByZWNoZXJjaGVzIGVudHJlIDxzcGFuPntzdGFydERhdGV9PC9zcGFuPiBldCA8c3Bhbj57ZW5kRGF0ZX08L3NwYW4+IHBvdXIgbGVzIDxzcGFuPnt0eXBlfTwvc3Bhbj4uXG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17ZXhlY3V0ZVF1ZXJ5fT5cbiAgICAgICAgICAgICAgICAgICAgQ2hlcmNoZXJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8cHJlPlxuICAgICAgICAgICAgICAgIHtKU09OLnN0cmluZ2lmeShyZXN1bHQsIG51bGwsIDIpfVxuICAgICAgICAgICAgPC9wcmU+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJDaGFydCIsIlF1ZXJ5R3JhcGhEQiIsInJlc3VsdCIsInNldFJlc3VsdCIsInN0YXJ0RGF0ZSIsInNldFN0YXJ0RGF0ZSIsImVuZERhdGUiLCJzZXRFbmREYXRlIiwidHlwZSIsInNldFR5cGUiLCJxdWVyeSIsInNldFF1ZXJ5IiwiTUlOX0RBVEUiLCJNQVhfREFURSIsImNhbGN1bGF0ZVByb2dyZXNzQmFyIiwic3RhcnQiLCJlbmQiLCJsZWZ0UGVyY2VudGFnZSIsIndpZHRoUGVyY2VudGFnZSIsImV4ZWN1dGVRdWVyeSIsInF1ZXJ5VHlwZSIsImNvbnNvbGUiLCJsb2ciLCJ1cGRhdGVkUXVlcnkiLCJyZXBsYWNlIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImRhdGEiLCJqc29uIiwiZXJyb3IiLCJoYW5kbGVTdGFydERhdGVDaGFuZ2UiLCJlIiwidmFsdWUiLCJwYXJzZUludCIsInRhcmdldCIsImhhbmRsZUVuZERhdGVDaGFuZ2UiLCJkaXYiLCJoMiIsImNsYXNzTmFtZSIsImxhYmVsIiwiaW5wdXQiLCJuYW1lIiwiY2hlY2tlZCIsIm9uQ2hhbmdlIiwibWluIiwibWF4Iiwic3RlcCIsIm9uS2V5RG93biIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzdHlsZSIsImxlZnQiLCJ3aWR0aCIsInAiLCJzcGFuIiwiYnV0dG9uIiwib25DbGljayIsInByZSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/QueryGraphDB.js\n"));

/***/ })

});