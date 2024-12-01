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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ QueryGraphDB)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/script */ \"(app-pages-browser)/./node_modules/next/dist/api/script.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction QueryGraphDB() {\n    _s();\n    const [result, setResult] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const [startDate, setStartDate] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1958);\n    const [endDate, setEndDate] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(2019);\n    const [type, setType] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"albums\");\n    const [query, setQuery] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('\\n        PREFIX iut: <https://cours.iut-orsay.fr/npbd/>\\n        PREFIX wd: <http://www.wikidata.org/entity/>\\n        PREFIX wdt: <http://www.wikidata.org/prop/direct/>\\n        PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\\n        PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\\n\\n        SELECT * WHERE {\\n        ?entity a iut:Nominee ;\\n                iut:category \"{queryType} Of The Year\"@en ; # on met un boolean de con qui change soit album soit song\\n                iut:name ?name ;\\n                iut:year ?year ;\\n                iut:hasGenre ?wikidataGenreLabel .\\n\\n        # Convert the xsd:gYear to a string and compare\\n        FILTER (xsd:integer(str(?year)) >= '.concat(startDate, \" && xsd:integer(str(?year)) <= \").concat(endDate, \") # ici on change les ann\\xe9es avec des variables de con voila bisous\\n            }\"));\n    const MIN_DATE = 1958;\n    const MAX_DATE = 2019;\n    const calculateProgressBar = (start, end)=>{\n        const leftPercentage = (start - MIN_DATE) / (MAX_DATE - MIN_DATE) * 100;\n        const widthPercentage = start === end ? 0.5 : (end - start) / (MAX_DATE - MIN_DATE) * 100;\n        return {\n            leftPercentage,\n            widthPercentage\n        };\n    };\n    const executeQuery = async ()=>{\n        let queryType;\n        if (type === \"albums\") queryType = \"Album\";\n        else queryType = \"Song\";\n        console.log(queryType);\n        const updatedQuery = query.replace(\"{queryType}\", queryType);\n        setQuery(updatedQuery);\n        console.log(updatedQuery);\n        console.log(query);\n        try {\n            const response = await fetch(\"/api/graphdb\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    query: query\n                })\n            });\n            const data = await response.json();\n            setResult(data);\n        } catch (error) {\n            console.error(\"Error executing query:\", error);\n        }\n    };\n    const handleStartDateChange = (e)=>{\n        let value = parseInt(e.target.value, 10);\n        if (value < MIN_DATE) value = MIN_DATE;\n        if (value > MAX_DATE) value = MAX_DATE;\n        if (value > endDate) value = endDate;\n        setStartDate(value);\n    };\n    const handleEndDateChange = (e)=>{\n        let value = parseInt(e.target.value, 10);\n        if (value < MIN_DATE) value = MIN_DATE;\n        if (value > MAX_DATE) value = MAX_DATE;\n        if (value < startDate) value = startDate;\n        setEndDate(value);\n    };\n    const { leftPercentage, widthPercentage } = calculateProgressBar(startDate, endDate);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: [\n                    \"Trouvez les statistiques des Grammys de \",\n                    MIN_DATE,\n                    \" \\xe0 \",\n                    MAX_DATE\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/augustin/Documents/Cours/BUT_info/S5/BD/projet/beer/src/app/components/QueryGraphDB.js\",\n                lineNumber: 90,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"form-group\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"types\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                className: \"radio-button \".concat(type === \"albums\" ? \"selected\" : \"\", \" \"),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"radio\",\n                                        name: \"type\",\n                                        value: \"albums\",\n                                        checked: type === \"albums\",\n                                        onChange: (e)=>setType(e.target.value)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/augustin/Documents/Cours/BUT_info/S5/BD/projet/beer/src/app/components/QueryGraphDB.js\",\n                                        lineNumber: 96,\n                                        columnNumber: 25\n                                    }, this),\n                                    \"Albums\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/augustin/Documents/Cours/BUT_info/S5/BD/projet/beer/src/app/components/QueryGraphDB.js\",\n                                lineNumber: 93,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                className: \"radio-button \".concat(type === \"singles\" ? \"selected\" : \"\", \" \"),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"radio\",\n                                        name: \"type\",\n                                        value: \"singles\",\n                                        checked: type === \"singles\",\n                                        onChange: (e)=>setType(e.target.value)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/augustin/Documents/Cours/BUT_info/S5/BD/projet/beer/src/app/components/QueryGraphDB.js\",\n                                        lineNumber: 108,\n                                        columnNumber: 25\n                                    }, this),\n                                    \"Singles\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/augustin/Documents/Cours/BUT_info/S5/BD/projet/beer/src/app/components/QueryGraphDB.js\",\n                                lineNumber: 105,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/augustin/Documents/Cours/BUT_info/S5/BD/projet/beer/src/app/components/QueryGraphDB.js\",\n                        lineNumber: 92,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"dates\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"number\",\n                                min: MIN_DATE,\n                                max: MAX_DATE,\n                                step: \"1\",\n                                onKeyDown: (event)=>{\n                                    event.preventDefault();\n                                },\n                                value: startDate,\n                                onChange: handleStartDateChange\n                            }, void 0, false, {\n                                fileName: \"/Users/augustin/Documents/Cours/BUT_info/S5/BD/projet/beer/src/app/components/QueryGraphDB.js\",\n                                lineNumber: 119,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"number\",\n                                min: MIN_DATE,\n                                max: MAX_DATE,\n                                step: \"1\",\n                                onKeyDown: (event)=>{\n                                    event.preventDefault();\n                                },\n                                value: endDate,\n                                onChange: handleEndDateChange\n                            }, void 0, false, {\n                                fileName: \"/Users/augustin/Documents/Cours/BUT_info/S5/BD/projet/beer/src/app/components/QueryGraphDB.js\",\n                                lineNumber: 130,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/augustin/Documents/Cours/BUT_info/S5/BD/projet/beer/src/app/components/QueryGraphDB.js\",\n                        lineNumber: 118,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"progress-bar\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"progress-bar-background\"\n                            }, void 0, false, {\n                                fileName: \"/Users/augustin/Documents/Cours/BUT_info/S5/BD/projet/beer/src/app/components/QueryGraphDB.js\",\n                                lineNumber: 144,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"progress-bar-fill\",\n                                style: {\n                                    left: \"\".concat(leftPercentage, \"% \"),\n                                    width: \"\".concat(widthPercentage, \"% \")\n                                }\n                            }, void 0, false, {\n                                fileName: \"/Users/augustin/Documents/Cours/BUT_info/S5/BD/projet/beer/src/app/components/QueryGraphDB.js\",\n                                lineNumber: 145,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/augustin/Documents/Cours/BUT_info/S5/BD/projet/beer/src/app/components/QueryGraphDB.js\",\n                        lineNumber: 143,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"summary\",\n                        children: [\n                            \"Vous allez effectuer des recherches entre \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: startDate\n                            }, void 0, false, {\n                                fileName: \"/Users/augustin/Documents/Cours/BUT_info/S5/BD/projet/beer/src/app/components/QueryGraphDB.js\",\n                                lineNumber: 154,\n                                columnNumber: 63\n                            }, this),\n                            \" et \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: endDate\n                            }, void 0, false, {\n                                fileName: \"/Users/augustin/Documents/Cours/BUT_info/S5/BD/projet/beer/src/app/components/QueryGraphDB.js\",\n                                lineNumber: 154,\n                                columnNumber: 91\n                            }, this),\n                            \" pour les \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: type\n                            }, void 0, false, {\n                                fileName: \"/Users/augustin/Documents/Cours/BUT_info/S5/BD/projet/beer/src/app/components/QueryGraphDB.js\",\n                                lineNumber: 154,\n                                columnNumber: 123\n                            }, this),\n                            \".\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/augustin/Documents/Cours/BUT_info/S5/BD/projet/beer/src/app/components/QueryGraphDB.js\",\n                        lineNumber: 153,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: executeQuery,\n                        children: \"Chercher\"\n                    }, void 0, false, {\n                        fileName: \"/Users/augustin/Documents/Cours/BUT_info/S5/BD/projet/beer/src/app/components/QueryGraphDB.js\",\n                        lineNumber: 156,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/augustin/Documents/Cours/BUT_info/S5/BD/projet/beer/src/app/components/QueryGraphDB.js\",\n                lineNumber: 91,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"pre\", {\n                children: JSON.stringify(result, null, 2)\n            }, void 0, false, {\n                fileName: \"/Users/augustin/Documents/Cours/BUT_info/S5/BD/projet/beer/src/app/components/QueryGraphDB.js\",\n                lineNumber: 160,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/augustin/Documents/Cours/BUT_info/S5/BD/projet/beer/src/app/components/QueryGraphDB.js\",\n        lineNumber: 89,\n        columnNumber: 9\n    }, this);\n}\n_s(QueryGraphDB, \"/pXU41vdngQuv2tSXhZrWV39Rog=\");\n_c = QueryGraphDB;\nvar _c;\n$RefreshReg$(_c, \"QueryGraphDB\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9RdWVyeUdyYXBoREIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUVxRDtBQUNwQjtBQUVsQixTQUFTRTs7SUFDcEIsTUFBTSxDQUFDQyxRQUFRQyxVQUFVLEdBQUdILCtDQUFRQSxDQUFDO0lBQ3JDLE1BQU0sQ0FBQ0ksV0FBV0MsYUFBYSxHQUFHTCwrQ0FBUUEsQ0FBQztJQUMzQyxNQUFNLENBQUNNLFNBQVNDLFdBQVcsR0FBR1AsK0NBQVFBLENBQUM7SUFDdkMsTUFBTSxDQUFDUSxNQUFNQyxRQUFRLEdBQUdULCtDQUFRQSxDQUFDO0lBRWpDLE1BQU0sQ0FBQ1UsT0FBT0MsU0FBUyxHQUFHWCwrQ0FBUUEsQ0FBQyx5ckJBZWlETSxPQUEzQ0YsV0FBVSxtQ0FBeUMsT0FBUkUsU0FBUTtJQUc1RixNQUFNTSxXQUFXO0lBQ2pCLE1BQU1DLFdBQVc7SUFFakIsTUFBTUMsdUJBQXVCLENBQUNDLE9BQU9DO1FBQ2pDLE1BQU1DLGlCQUFpQixDQUFFRixRQUFRSCxRQUFPLElBQU1DLENBQUFBLFdBQVdELFFBQU8sSUFBTTtRQUV0RSxNQUFNTSxrQkFBa0JILFVBQVVDLE1BQzVCLE1BQ0EsQ0FBRUEsTUFBTUQsS0FBSSxJQUFNRixDQUFBQSxXQUFXRCxRQUFPLElBQU07UUFFaEQsT0FBTztZQUFFSztZQUFnQkM7UUFBZ0I7SUFDN0M7SUFFQSxNQUFNQyxlQUFlO1FBQ2pCLElBQUlDO1FBQ0osSUFBSVosU0FBUyxVQUFVWSxZQUFZO2FBQzlCQSxZQUFZO1FBQ2pCQyxRQUFRQyxHQUFHLENBQUNGO1FBRVosTUFBTUcsZUFBZWIsTUFBTWMsT0FBTyxDQUFDLGVBQWVKO1FBQ2xEVCxTQUFTWTtRQUNURixRQUFRQyxHQUFHLENBQUNDO1FBQ1pGLFFBQVFDLEdBQUcsQ0FBQ1o7UUFFWixJQUFJO1lBQ0EsTUFBTWUsV0FBVyxNQUFNQyxNQUFNLGdCQUFnQjtnQkFDekNDLFFBQVE7Z0JBQ1JDLFNBQVM7b0JBQ0wsZ0JBQWdCO2dCQUNwQjtnQkFDQUMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDO29CQUFFckIsT0FBT0E7Z0JBQU07WUFDeEM7WUFFQSxNQUFNc0IsT0FBTyxNQUFNUCxTQUFTUSxJQUFJO1lBQ2hDOUIsVUFBVTZCO1FBQ2QsRUFBRSxPQUFPRSxPQUFPO1lBQ1piLFFBQVFhLEtBQUssQ0FBQywwQkFBMEJBO1FBQzVDO0lBQ0o7SUFFQSxNQUFNQyx3QkFBd0IsQ0FBQ0M7UUFDM0IsSUFBSUMsUUFBUUMsU0FBU0YsRUFBRUcsTUFBTSxDQUFDRixLQUFLLEVBQUU7UUFDckMsSUFBSUEsUUFBUXpCLFVBQVV5QixRQUFRekI7UUFDOUIsSUFBSXlCLFFBQVF4QixVQUFVd0IsUUFBUXhCO1FBQzlCLElBQUl3QixRQUFRL0IsU0FBUytCLFFBQVEvQjtRQUM3QkQsYUFBYWdDO0lBQ2pCO0lBRUEsTUFBTUcsc0JBQXNCLENBQUNKO1FBQ3pCLElBQUlDLFFBQVFDLFNBQVNGLEVBQUVHLE1BQU0sQ0FBQ0YsS0FBSyxFQUFFO1FBQ3JDLElBQUlBLFFBQVF6QixVQUFVeUIsUUFBUXpCO1FBQzlCLElBQUl5QixRQUFReEIsVUFBVXdCLFFBQVF4QjtRQUM5QixJQUFJd0IsUUFBUWpDLFdBQVdpQyxRQUFRakM7UUFDL0JHLFdBQVc4QjtJQUNmO0lBRUEsTUFBTSxFQUFFcEIsY0FBYyxFQUFFQyxlQUFlLEVBQUUsR0FBR0oscUJBQXFCVixXQUFXRTtJQUU1RSxxQkFDSSw4REFBQ21DOzswQkFDRyw4REFBQ0M7O29CQUFHO29CQUF5QzlCO29CQUFTO29CQUFJQzs7Ozs7OzswQkFDMUQsOERBQUM0QjtnQkFBSUUsV0FBVTs7a0NBQ1gsOERBQUNGO3dCQUFJRSxXQUFVOzswQ0FDWCw4REFBQ0M7Z0NBQ0dELFdBQVcsZ0JBQW9ELE9BQXBDbkMsU0FBUyxXQUFXLGFBQWEsSUFBRzs7a0RBRS9ELDhEQUFDcUM7d0NBQ0dyQyxNQUFLO3dDQUNMc0MsTUFBSzt3Q0FDTFQsT0FBTTt3Q0FDTlUsU0FBU3ZDLFNBQVM7d0NBQ2xCd0MsVUFBVSxDQUFDWixJQUFNM0IsUUFBUTJCLEVBQUVHLE1BQU0sQ0FBQ0YsS0FBSzs7Ozs7O29DQUN6Qzs7Ozs7OzswQ0FHTiw4REFBQ087Z0NBQ0dELFdBQVcsZ0JBQXFELE9BQXJDbkMsU0FBUyxZQUFZLGFBQWEsSUFBRzs7a0RBRWhFLDhEQUFDcUM7d0NBQ0dyQyxNQUFLO3dDQUNMc0MsTUFBSzt3Q0FDTFQsT0FBTTt3Q0FDTlUsU0FBU3ZDLFNBQVM7d0NBQ2xCd0MsVUFBVSxDQUFDWixJQUFNM0IsUUFBUTJCLEVBQUVHLE1BQU0sQ0FBQ0YsS0FBSzs7Ozs7O29DQUN6Qzs7Ozs7Ozs7Ozs7OztrQ0FJViw4REFBQ0k7d0JBQUlFLFdBQVU7OzBDQUNYLDhEQUFDRTtnQ0FDR3JDLE1BQUs7Z0NBQ0x5QyxLQUFLckM7Z0NBQ0xzQyxLQUFLckM7Z0NBQ0xzQyxNQUFLO2dDQUNMQyxXQUFXLENBQUNDO29DQUNSQSxNQUFNQyxjQUFjO2dDQUN4QjtnQ0FDQWpCLE9BQU9qQztnQ0FDUDRDLFVBQVViOzs7Ozs7MENBRWQsOERBQUNVO2dDQUNHckMsTUFBSztnQ0FDTHlDLEtBQUtyQztnQ0FDTHNDLEtBQUtyQztnQ0FDTHNDLE1BQUs7Z0NBQ0xDLFdBQVcsQ0FBQ0M7b0NBQ1JBLE1BQU1DLGNBQWM7Z0NBQ3hCO2dDQUNBakIsT0FBTy9CO2dDQUNQMEMsVUFBVVI7Ozs7Ozs7Ozs7OztrQ0FJbEIsOERBQUNDO3dCQUFJRSxXQUFVOzswQ0FDWCw4REFBQ0Y7Z0NBQUlFLFdBQVU7Ozs7OzswQ0FDZiw4REFBQ0Y7Z0NBQ0dFLFdBQVU7Z0NBQ1ZZLE9BQU87b0NBQ0hDLE1BQU0sR0FBa0IsT0FBZnZDLGdCQUFlO29DQUN4QndDLE9BQU8sR0FBbUIsT0FBaEJ2QyxpQkFBZ0I7Z0NBQzlCOzs7Ozs7Ozs7Ozs7a0NBR1IsOERBQUN3Qzt3QkFBRWYsV0FBVTs7NEJBQVU7MENBQ3VCLDhEQUFDZ0I7MENBQU12RDs7Ozs7OzRCQUFpQjswQ0FBSSw4REFBQ3VEOzBDQUFNckQ7Ozs7Ozs0QkFBZTswQ0FBVSw4REFBQ3FEOzBDQUFNbkQ7Ozs7Ozs0QkFBWTs7Ozs7OztrQ0FFN0gsOERBQUNvRDt3QkFBT0MsU0FBUzFDO2tDQUFjOzs7Ozs7Ozs7Ozs7MEJBSW5DLDhEQUFDMkM7MEJBQUtoQyxLQUFLQyxTQUFTLENBQUM3QixRQUFRLE1BQU07Ozs7Ozs7Ozs7OztBQUcvQztHQTdKd0JEO0tBQUFBIiwic291cmNlcyI6WyIvVXNlcnMvYXVndXN0aW4vRG9jdW1lbnRzL0NvdXJzL0JVVF9pbmZvL1M1L0JEL3Byb2pldC9iZWVyL3NyYy9hcHAvY29tcG9uZW50cy9RdWVyeUdyYXBoREIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCB7IGhhbmRsZUNsaWVudFNjcmlwdExvYWQgfSBmcm9tIFwibmV4dC9zY3JpcHRcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFF1ZXJ5R3JhcGhEQigpIHtcbiAgICBjb25zdCBbcmVzdWx0LCBzZXRSZXN1bHRdID0gdXNlU3RhdGUobnVsbCk7XG4gICAgY29uc3QgW3N0YXJ0RGF0ZSwgc2V0U3RhcnREYXRlXSA9IHVzZVN0YXRlKDE5NTgpO1xuICAgIGNvbnN0IFtlbmREYXRlLCBzZXRFbmREYXRlXSA9IHVzZVN0YXRlKDIwMTkpO1xuICAgIGNvbnN0IFt0eXBlLCBzZXRUeXBlXSA9IHVzZVN0YXRlKFwiYWxidW1zXCIpO1xuXG4gICAgY29uc3QgW3F1ZXJ5LCBzZXRRdWVyeV0gPSB1c2VTdGF0ZShgXG4gICAgICAgIFBSRUZJWCBpdXQ6IDxodHRwczovL2NvdXJzLml1dC1vcnNheS5mci9ucGJkLz5cbiAgICAgICAgUFJFRklYIHdkOiA8aHR0cDovL3d3dy53aWtpZGF0YS5vcmcvZW50aXR5Lz5cbiAgICAgICAgUFJFRklYIHdkdDogPGh0dHA6Ly93d3cud2lraWRhdGEub3JnL3Byb3AvZGlyZWN0Lz5cbiAgICAgICAgUFJFRklYIHJkZnM6IDxodHRwOi8vd3d3LnczLm9yZy8yMDAwLzAxL3JkZi1zY2hlbWEjPlxuICAgICAgICBQUkVGSVggeHNkOiA8aHR0cDovL3d3dy53My5vcmcvMjAwMS9YTUxTY2hlbWEjPlxuXG4gICAgICAgIFNFTEVDVCAqIFdIRVJFIHtcbiAgICAgICAgP2VudGl0eSBhIGl1dDpOb21pbmVlIDtcbiAgICAgICAgICAgICAgICBpdXQ6Y2F0ZWdvcnkgXCJ7cXVlcnlUeXBlfSBPZiBUaGUgWWVhclwiQGVuIDsgIyBvbiBtZXQgdW4gYm9vbGVhbiBkZSBjb24gcXVpIGNoYW5nZSBzb2l0IGFsYnVtIHNvaXQgc29uZ1xuICAgICAgICAgICAgICAgIGl1dDpuYW1lID9uYW1lIDtcbiAgICAgICAgICAgICAgICBpdXQ6eWVhciA/eWVhciA7XG4gICAgICAgICAgICAgICAgaXV0Omhhc0dlbnJlID93aWtpZGF0YUdlbnJlTGFiZWwgLlxuXG4gICAgICAgICMgQ29udmVydCB0aGUgeHNkOmdZZWFyIHRvIGEgc3RyaW5nIGFuZCBjb21wYXJlXG4gICAgICAgIEZJTFRFUiAoeHNkOmludGVnZXIoc3RyKD95ZWFyKSkgPj0gJHtzdGFydERhdGV9ICYmIHhzZDppbnRlZ2VyKHN0cig/eWVhcikpIDw9ICR7ZW5kRGF0ZX0pICMgaWNpIG9uIGNoYW5nZSBsZXMgYW5uw6llcyBhdmVjIGRlcyB2YXJpYWJsZXMgZGUgY29uIHZvaWxhIGJpc291c1xuICAgICAgICAgICAgfWApO1xuXG4gICAgY29uc3QgTUlOX0RBVEUgPSAxOTU4O1xuICAgIGNvbnN0IE1BWF9EQVRFID0gMjAxOTtcblxuICAgIGNvbnN0IGNhbGN1bGF0ZVByb2dyZXNzQmFyID0gKHN0YXJ0LCBlbmQpID0+IHtcbiAgICAgICAgY29uc3QgbGVmdFBlcmNlbnRhZ2UgPSAoKHN0YXJ0IC0gTUlOX0RBVEUpIC8gKE1BWF9EQVRFIC0gTUlOX0RBVEUpKSAqIDEwMDtcblxuICAgICAgICBjb25zdCB3aWR0aFBlcmNlbnRhZ2UgPSBzdGFydCA9PT0gZW5kXG4gICAgICAgICAgICA/IDAuNVxuICAgICAgICAgICAgOiAoKGVuZCAtIHN0YXJ0KSAvIChNQVhfREFURSAtIE1JTl9EQVRFKSkgKiAxMDA7XG5cbiAgICAgICAgcmV0dXJuIHsgbGVmdFBlcmNlbnRhZ2UsIHdpZHRoUGVyY2VudGFnZSB9O1xuICAgIH07XG5cbiAgICBjb25zdCBleGVjdXRlUXVlcnkgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGxldCBxdWVyeVR5cGU7XG4gICAgICAgIGlmICh0eXBlID09PSBcImFsYnVtc1wiKSBxdWVyeVR5cGUgPSBcIkFsYnVtXCI7XG4gICAgICAgIGVsc2UgcXVlcnlUeXBlID0gXCJTb25nXCI7XG4gICAgICAgIGNvbnNvbGUubG9nKHF1ZXJ5VHlwZSk7XG5cbiAgICAgICAgY29uc3QgdXBkYXRlZFF1ZXJ5ID0gcXVlcnkucmVwbGFjZShcIntxdWVyeVR5cGV9XCIsIHF1ZXJ5VHlwZSk7XG4gICAgICAgIHNldFF1ZXJ5KHVwZGF0ZWRRdWVyeSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHVwZGF0ZWRRdWVyeSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHF1ZXJ5KTtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcIi9hcGkvZ3JhcGhkYlwiLCB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBxdWVyeTogcXVlcnkgfSksXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgIHNldFJlc3VsdChkYXRhKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBleGVjdXRpbmcgcXVlcnk6XCIsIGVycm9yKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVTdGFydERhdGVDaGFuZ2UgPSAoZSkgPT4ge1xuICAgICAgICBsZXQgdmFsdWUgPSBwYXJzZUludChlLnRhcmdldC52YWx1ZSwgMTApO1xuICAgICAgICBpZiAodmFsdWUgPCBNSU5fREFURSkgdmFsdWUgPSBNSU5fREFURTtcbiAgICAgICAgaWYgKHZhbHVlID4gTUFYX0RBVEUpIHZhbHVlID0gTUFYX0RBVEU7XG4gICAgICAgIGlmICh2YWx1ZSA+IGVuZERhdGUpIHZhbHVlID0gZW5kRGF0ZTtcbiAgICAgICAgc2V0U3RhcnREYXRlKHZhbHVlKTtcbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlRW5kRGF0ZUNoYW5nZSA9IChlKSA9PiB7XG4gICAgICAgIGxldCB2YWx1ZSA9IHBhcnNlSW50KGUudGFyZ2V0LnZhbHVlLCAxMCk7XG4gICAgICAgIGlmICh2YWx1ZSA8IE1JTl9EQVRFKSB2YWx1ZSA9IE1JTl9EQVRFO1xuICAgICAgICBpZiAodmFsdWUgPiBNQVhfREFURSkgdmFsdWUgPSBNQVhfREFURTtcbiAgICAgICAgaWYgKHZhbHVlIDwgc3RhcnREYXRlKSB2YWx1ZSA9IHN0YXJ0RGF0ZTtcbiAgICAgICAgc2V0RW5kRGF0ZSh2YWx1ZSk7XG4gICAgfTtcblxuICAgIGNvbnN0IHsgbGVmdFBlcmNlbnRhZ2UsIHdpZHRoUGVyY2VudGFnZSB9ID0gY2FsY3VsYXRlUHJvZ3Jlc3NCYXIoc3RhcnREYXRlLCBlbmREYXRlKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDI+VHJvdXZleiBsZXMgc3RhdGlzdGlxdWVzIGRlcyBHcmFtbXlzIGRlIHtNSU5fREFURX0gw6Age01BWF9EQVRFfTwvaDI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInR5cGVzXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcmFkaW8tYnV0dG9uICR7dHlwZSA9PT0gXCJhbGJ1bXNcIiA/IFwic2VsZWN0ZWRcIiA6IFwiXCJ9IGB9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInR5cGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiYWxidW1zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXt0eXBlID09PSBcImFsYnVtc1wifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VHlwZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgQWxidW1zXG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcmFkaW8tYnV0dG9uICR7dHlwZSA9PT0gXCJzaW5nbGVzXCIgPyBcInNlbGVjdGVkXCIgOiBcIlwifSBgfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ0eXBlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cInNpbmdsZXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3R5cGUgPT09IFwic2luZ2xlc1wifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VHlwZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgU2luZ2xlc1xuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGF0ZXNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbj17TUlOX0RBVEV9XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXg9e01BWF9EQVRFfVxuICAgICAgICAgICAgICAgICAgICAgICAgc3RlcD1cIjFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25LZXlEb3duPXsoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzdGFydERhdGV9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlU3RhcnREYXRlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbWluPXtNSU5fREFURX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG1heD17TUFYX0RBVEV9XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGVwPVwiMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbktleURvd249eyhldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2VuZERhdGV9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlRW5kRGF0ZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZ3Jlc3MtYmFyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZ3Jlc3MtYmFyLWJhY2tncm91bmRcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHJvZ3Jlc3MtYmFyLWZpbGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiBgJHtsZWZ0UGVyY2VudGFnZX0lIGAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGAke3dpZHRoUGVyY2VudGFnZX0lIGAsXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICA+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwic3VtbWFyeVwiPlxuICAgICAgICAgICAgICAgICAgICBWb3VzIGFsbGV6IGVmZmVjdHVlciBkZXMgcmVjaGVyY2hlcyBlbnRyZSA8c3Bhbj57c3RhcnREYXRlfTwvc3Bhbj4gZXQgPHNwYW4+e2VuZERhdGV9PC9zcGFuPiBwb3VyIGxlcyA8c3Bhbj57dHlwZX08L3NwYW4+LlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2V4ZWN1dGVRdWVyeX0+XG4gICAgICAgICAgICAgICAgICAgIENoZXJjaGVyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxwcmU+e0pTT04uc3RyaW5naWZ5KHJlc3VsdCwgbnVsbCwgMil9PC9wcmU+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG4iXSwibmFtZXMiOlsiaGFuZGxlQ2xpZW50U2NyaXB0TG9hZCIsInVzZVN0YXRlIiwiUXVlcnlHcmFwaERCIiwicmVzdWx0Iiwic2V0UmVzdWx0Iiwic3RhcnREYXRlIiwic2V0U3RhcnREYXRlIiwiZW5kRGF0ZSIsInNldEVuZERhdGUiLCJ0eXBlIiwic2V0VHlwZSIsInF1ZXJ5Iiwic2V0UXVlcnkiLCJNSU5fREFURSIsIk1BWF9EQVRFIiwiY2FsY3VsYXRlUHJvZ3Jlc3NCYXIiLCJzdGFydCIsImVuZCIsImxlZnRQZXJjZW50YWdlIiwid2lkdGhQZXJjZW50YWdlIiwiZXhlY3V0ZVF1ZXJ5IiwicXVlcnlUeXBlIiwiY29uc29sZSIsImxvZyIsInVwZGF0ZWRRdWVyeSIsInJlcGxhY2UiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiZGF0YSIsImpzb24iLCJlcnJvciIsImhhbmRsZVN0YXJ0RGF0ZUNoYW5nZSIsImUiLCJ2YWx1ZSIsInBhcnNlSW50IiwidGFyZ2V0IiwiaGFuZGxlRW5kRGF0ZUNoYW5nZSIsImRpdiIsImgyIiwiY2xhc3NOYW1lIiwibGFiZWwiLCJpbnB1dCIsIm5hbWUiLCJjaGVja2VkIiwib25DaGFuZ2UiLCJtaW4iLCJtYXgiLCJzdGVwIiwib25LZXlEb3duIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInN0eWxlIiwibGVmdCIsIndpZHRoIiwicCIsInNwYW4iLCJidXR0b24iLCJvbkNsaWNrIiwicHJlIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/QueryGraphDB.js\n"));

/***/ })

});