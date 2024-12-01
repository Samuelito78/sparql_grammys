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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ QueryGraphDB)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chart.js */ \"(app-pages-browser)/./node_modules/chart.js/dist/chart.js\");\n\nvar _s = $RefreshSig$();\n\"use cl\";\n\n\nfunction QueryGraphDB() {\n    _s();\n    const [result, setResult] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [startDate, setStartDate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1958);\n    const [endDate, setEndDate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(2019);\n    const [type, setType] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"albums\");\n    const [query, setQuery] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('\\n        PREFIX iut: <https://cours.iut-orsay.fr/npbd/>\\n        PREFIX wd: <http://www.wikidata.org/entity/>\\n        PREFIX wdt: <http://www.wikidata.org/prop/direct/>\\n        PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\\n        PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\\n\\n        SELECT * WHERE {\\n        ?entity a iut:Nominee ;\\n                iut:category \"{queryType} Of The Year\"@en ;\\n                iut:name ?name ;\\n                iut:year ?year ;\\n                iut:hasGenre ?wikidataGenreLabel .\\n\\n        FILTER (xsd:integer(str(?year)) >= '.concat(startDate, \" && xsd:integer(str(?year)) <= \").concat(endDate, \")\\n        }\"));\n    const chartRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const chartInstanceRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const MIN_DATE = 1958;\n    const MAX_DATE = 2019;\n    const calculateProgressBar = (start, end)=>{\n        const leftPercentage = (start - MIN_DATE) / (MAX_DATE - MIN_DATE) * 100;\n        const widthPercentage = start === end ? 0.5 : (end - start) / (MAX_DATE - MIN_DATE) * 100;\n        return {\n            leftPercentage,\n            widthPercentage\n        };\n    };\n    const executeQuery = async ()=>{\n        let queryType = type === \"albums\" ? \"Album\" : \"Song\";\n        const updatedQuery = query.replace(\"{queryType}\", queryType);\n        try {\n            const response = await fetch(\"/api/graphdb\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    query: updatedQuery\n                })\n            });\n            const data = await response.json();\n            console.log(\"Réponse de l'API:\", data);\n            if (data.results && Array.isArray(data.results.bindings)) {\n                setResult(data.results.bindings);\n                updateChart(data.results.bindings);\n            } else {\n                console.error(\"Les données ne sont pas dans le format attendu.\");\n            }\n        } catch (error) {\n            console.error(\"Erreur lors de l'exécution de la requête:\", error);\n        }\n    };\n    const handleStartDateChange = (e)=>{\n        let value = parseInt(e.target.value, 10);\n        if (value < MIN_DATE) value = MIN_DATE;\n        if (value > MAX_DATE) value = MAX_DATE;\n        if (value > endDate) value = endDate;\n        setStartDate(value);\n    };\n    const handleEndDateChange = (e)=>{\n        let value = parseInt(e.target.value, 10);\n        if (value < MIN_DATE) value = MIN_DATE;\n        if (value > MAX_DATE) value = MAX_DATE;\n        if (value < startDate) value = startDate;\n        setEndDate(value);\n    };\n    const { leftPercentage, widthPercentage } = calculateProgressBar(startDate, endDate);\n    const updateChart = (data)=>{\n        // Compter les occurrences par année\n        const yearCounts = data.reduce((acc, item)=>{\n            const year = item.year.value;\n            acc[year] = (acc[year] || 0) + 1;\n            return acc;\n        }, {});\n        const labels = Object.keys(yearCounts);\n        const counts = Object.values(yearCounts);\n        // Détruire l'ancienne instance du graphique si elle existe\n        if (chartInstanceRef.current) {\n            chartInstanceRef.current.destroy();\n        }\n        // Créer une nouvelle instance de graphique\n        const ctx = chartRef.current.getContext(\"2d\");\n        chartInstanceRef.current = new chart_js__WEBPACK_IMPORTED_MODULE_2__.Chart(ctx, {\n            type: \"bar\",\n            data: {\n                labels: labels,\n                datasets: [\n                    {\n                        label: \"\".concat(type, \" per Year\"),\n                        data: counts,\n                        backgroundColor: \"rgba(75, 192, 192, 0.2)\",\n                        borderColor: \"rgba(75, 192, 192, 1)\",\n                        borderWidth: 1\n                    }\n                ]\n            },\n            options: {\n                responsive: true,\n                scales: {\n                    x: {\n                        beginAtZero: true\n                    },\n                    y: {\n                        beginAtZero: true\n                    }\n                }\n            }\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: [\n                    \"Trouvez les statistiques des Grammys de \",\n                    MIN_DATE,\n                    \" \\xe0 \",\n                    MAX_DATE\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/augustin/Documents/Cours/BUT_info/S5/BD/projet/beer/src/app/components/QueryGraphDB.js\",\n                lineNumber: 137,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"form-group\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"types\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                className: \"radio-button \".concat(type === \"albums\" ? \"selected\" : \"\", \" \"),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"radio\",\n                                        name: \"type\",\n                                        value: \"albums\",\n                                        checked: type === \"albums\",\n                                        onChange: (e)=>setType(e.target.value)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/augustin/Documents/Cours/BUT_info/S5/BD/projet/beer/src/app/components/QueryGraphDB.js\",\n                                        lineNumber: 143,\n                                        columnNumber: 25\n                                    }, this),\n                                    \"Albums\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/augustin/Documents/Cours/BUT_info/S5/BD/projet/beer/src/app/components/QueryGraphDB.js\",\n                                lineNumber: 140,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                className: \"radio-button \".concat(type === \"singles\" ? \"selected\" : \"\", \" \"),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"radio\",\n                                        name: \"type\",\n                                        value: \"singles\",\n                                        checked: type === \"singles\",\n                                        onChange: (e)=>setType(e.target.value)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/augustin/Documents/Cours/BUT_info/S5/BD/projet/beer/src/app/components/QueryGraphDB.js\",\n                                        lineNumber: 155,\n                                        columnNumber: 25\n                                    }, this),\n                                    \"Singles\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/augustin/Documents/Cours/BUT_info/S5/BD/projet/beer/src/app/components/QueryGraphDB.js\",\n                                lineNumber: 152,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/augustin/Documents/Cours/BUT_info/S5/BD/projet/beer/src/app/components/QueryGraphDB.js\",\n                        lineNumber: 139,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"dates\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"number\",\n                                min: MIN_DATE,\n                                max: MAX_DATE,\n                                step: \"1\",\n                                onKeyDown: (event)=>{\n                                    event.preventDefault();\n                                },\n                                value: startDate,\n                                onChange: handleStartDateChange\n                            }, void 0, false, {\n                                fileName: \"/Users/augustin/Documents/Cours/BUT_info/S5/BD/projet/beer/src/app/components/QueryGraphDB.js\",\n                                lineNumber: 166,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"number\",\n                                min: MIN_DATE,\n                                max: MAX_DATE,\n                                step: \"1\",\n                                onKeyDown: (event)=>{\n                                    event.preventDefault();\n                                },\n                                value: endDate,\n                                onChange: handleEndDateChange\n                            }, void 0, false, {\n                                fileName: \"/Users/augustin/Documents/Cours/BUT_info/S5/BD/projet/beer/src/app/components/QueryGraphDB.js\",\n                                lineNumber: 177,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/augustin/Documents/Cours/BUT_info/S5/BD/projet/beer/src/app/components/QueryGraphDB.js\",\n                        lineNumber: 165,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"progress-bar\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"progress-bar-background\"\n                            }, void 0, false, {\n                                fileName: \"/Users/augustin/Documents/Cours/BUT_info/S5/BD/projet/beer/src/app/components/QueryGraphDB.js\",\n                                lineNumber: 191,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"progress-bar-fill\",\n                                style: {\n                                    left: \"\".concat(leftPercentage, \"% \"),\n                                    width: \"\".concat(widthPercentage, \"% \")\n                                }\n                            }, void 0, false, {\n                                fileName: \"/Users/augustin/Documents/Cours/BUT_info/S5/BD/projet/beer/src/app/components/QueryGraphDB.js\",\n                                lineNumber: 192,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/augustin/Documents/Cours/BUT_info/S5/BD/projet/beer/src/app/components/QueryGraphDB.js\",\n                        lineNumber: 190,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"summary\",\n                        children: [\n                            \"Vous allez effectuer des recherches entre \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: startDate\n                            }, void 0, false, {\n                                fileName: \"/Users/augustin/Documents/Cours/BUT_info/S5/BD/projet/beer/src/app/components/QueryGraphDB.js\",\n                                lineNumber: 201,\n                                columnNumber: 63\n                            }, this),\n                            \" et \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: endDate\n                            }, void 0, false, {\n                                fileName: \"/Users/augustin/Documents/Cours/BUT_info/S5/BD/projet/beer/src/app/components/QueryGraphDB.js\",\n                                lineNumber: 201,\n                                columnNumber: 91\n                            }, this),\n                            \" pour les \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: type\n                            }, void 0, false, {\n                                fileName: \"/Users/augustin/Documents/Cours/BUT_info/S5/BD/projet/beer/src/app/components/QueryGraphDB.js\",\n                                lineNumber: 201,\n                                columnNumber: 123\n                            }, this),\n                            \".\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/augustin/Documents/Cours/BUT_info/S5/BD/projet/beer/src/app/components/QueryGraphDB.js\",\n                        lineNumber: 200,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: executeQuery,\n                        children: \"Chercher\"\n                    }, void 0, false, {\n                        fileName: \"/Users/augustin/Documents/Cours/BUT_info/S5/BD/projet/beer/src/app/components/QueryGraphDB.js\",\n                        lineNumber: 203,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/augustin/Documents/Cours/BUT_info/S5/BD/projet/beer/src/app/components/QueryGraphDB.js\",\n                lineNumber: 138,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"canvas\", {\n                ref: chartRef\n            }, void 0, false, {\n                fileName: \"/Users/augustin/Documents/Cours/BUT_info/S5/BD/projet/beer/src/app/components/QueryGraphDB.js\",\n                lineNumber: 209,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/augustin/Documents/Cours/BUT_info/S5/BD/projet/beer/src/app/components/QueryGraphDB.js\",\n        lineNumber: 136,\n        columnNumber: 9\n    }, this);\n}\n_s(QueryGraphDB, \"sbqZGFzMh3uq6+DDbGs3oIjX6Yo=\");\n_c = QueryGraphDB;\nvar _c;\n$RefreshReg$(_c, \"QueryGraphDB\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9RdWVyeUdyYXBoREIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBRW9EO0FBQ25CO0FBRWxCLFNBQVNJOztJQUNwQixNQUFNLENBQUNDLFFBQVFDLFVBQVUsR0FBR04sK0NBQVFBLENBQUM7SUFDckMsTUFBTSxDQUFDTyxXQUFXQyxhQUFhLEdBQUdSLCtDQUFRQSxDQUFDO0lBQzNDLE1BQU0sQ0FBQ1MsU0FBU0MsV0FBVyxHQUFHViwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNLENBQUNXLE1BQU1DLFFBQVEsR0FBR1osK0NBQVFBLENBQUM7SUFFakMsTUFBTSxDQUFDYSxPQUFPQyxTQUFTLEdBQUdkLCtDQUFRQSxDQUFDLHFrQkFjaURTLE9BQTNDRixXQUFVLG1DQUF5QyxPQUFSRSxTQUFRO0lBRzVGLE1BQU1NLFdBQVdiLDZDQUFNQSxDQUFDO0lBQ3hCLE1BQU1jLG1CQUFtQmQsNkNBQU1BLENBQUM7SUFFaEMsTUFBTWUsV0FBVztJQUNqQixNQUFNQyxXQUFXO0lBRWpCLE1BQU1DLHVCQUF1QixDQUFDQyxPQUFPQztRQUNqQyxNQUFNQyxpQkFBaUIsQ0FBRUYsUUFBUUgsUUFBTyxJQUFNQyxDQUFBQSxXQUFXRCxRQUFPLElBQU07UUFDdEUsTUFBTU0sa0JBQWtCSCxVQUFVQyxNQUM1QixNQUNBLENBQUVBLE1BQU1ELEtBQUksSUFBTUYsQ0FBQUEsV0FBV0QsUUFBTyxJQUFNO1FBRWhELE9BQU87WUFBRUs7WUFBZ0JDO1FBQWdCO0lBQzdDO0lBRUEsTUFBTUMsZUFBZTtRQUNqQixJQUFJQyxZQUFZZCxTQUFTLFdBQVcsVUFBVTtRQUM5QyxNQUFNZSxlQUFlYixNQUFNYyxPQUFPLENBQUMsZUFBZUY7UUFFbEQsSUFBSTtZQUNBLE1BQU1HLFdBQVcsTUFBTUMsTUFBTSxnQkFBZ0I7Z0JBQ3pDQyxRQUFRO2dCQUNSQyxTQUFTO29CQUNMLGdCQUFnQjtnQkFDcEI7Z0JBQ0FDLE1BQU1D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cEY7Ozs7Ozs0QkFBZTswQ0FBVSw4REFBQ29GOzBDQUFNbEY7Ozs7Ozs0QkFBWTs7Ozs7OztrQ0FFN0gsOERBQUNtRjt3QkFBT0MsU0FBU3ZFO2tDQUFjOzs7Ozs7Ozs7Ozs7MEJBTW5DLDhEQUFDd0U7Z0JBQU9DLEtBQUtsRjs7Ozs7Ozs7Ozs7O0FBR3pCO0dBOU13Qlg7S0FBQUEiLCJzb3VyY2VzIjpbIi9Vc2Vycy9hdWd1c3Rpbi9Eb2N1bWVudHMvQ291cnMvQlVUX2luZm8vUzUvQkQvcHJvamV0L2JlZXIvc3JjL2FwcC9jb21wb25lbnRzL1F1ZXJ5R3JhcGhEQi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbFwiXG5cbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQ2hhcnQgfSBmcm9tIFwiY2hhcnQuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUXVlcnlHcmFwaERCKCkge1xuICAgIGNvbnN0IFtyZXN1bHQsIHNldFJlc3VsdF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgICBjb25zdCBbc3RhcnREYXRlLCBzZXRTdGFydERhdGVdID0gdXNlU3RhdGUoMTk1OCk7XG4gICAgY29uc3QgW2VuZERhdGUsIHNldEVuZERhdGVdID0gdXNlU3RhdGUoMjAxOSk7XG4gICAgY29uc3QgW3R5cGUsIHNldFR5cGVdID0gdXNlU3RhdGUoXCJhbGJ1bXNcIik7XG5cbiAgICBjb25zdCBbcXVlcnksIHNldFF1ZXJ5XSA9IHVzZVN0YXRlKGBcbiAgICAgICAgUFJFRklYIGl1dDogPGh0dHBzOi8vY291cnMuaXV0LW9yc2F5LmZyL25wYmQvPlxuICAgICAgICBQUkVGSVggd2Q6IDxodHRwOi8vd3d3Lndpa2lkYXRhLm9yZy9lbnRpdHkvPlxuICAgICAgICBQUkVGSVggd2R0OiA8aHR0cDovL3d3dy53aWtpZGF0YS5vcmcvcHJvcC9kaXJlY3QvPlxuICAgICAgICBQUkVGSVggcmRmczogPGh0dHA6Ly93d3cudzMub3JnLzIwMDAvMDEvcmRmLXNjaGVtYSM+XG4gICAgICAgIFBSRUZJWCB4c2Q6IDxodHRwOi8vd3d3LnczLm9yZy8yMDAxL1hNTFNjaGVtYSM+XG5cbiAgICAgICAgU0VMRUNUICogV0hFUkUge1xuICAgICAgICA/ZW50aXR5IGEgaXV0Ok5vbWluZWUgO1xuICAgICAgICAgICAgICAgIGl1dDpjYXRlZ29yeSBcIntxdWVyeVR5cGV9IE9mIFRoZSBZZWFyXCJAZW4gO1xuICAgICAgICAgICAgICAgIGl1dDpuYW1lID9uYW1lIDtcbiAgICAgICAgICAgICAgICBpdXQ6eWVhciA/eWVhciA7XG4gICAgICAgICAgICAgICAgaXV0Omhhc0dlbnJlID93aWtpZGF0YUdlbnJlTGFiZWwgLlxuXG4gICAgICAgIEZJTFRFUiAoeHNkOmludGVnZXIoc3RyKD95ZWFyKSkgPj0gJHtzdGFydERhdGV9ICYmIHhzZDppbnRlZ2VyKHN0cig/eWVhcikpIDw9ICR7ZW5kRGF0ZX0pXG4gICAgICAgIH1gKTtcblxuICAgIGNvbnN0IGNoYXJ0UmVmID0gdXNlUmVmKG51bGwpO1xuICAgIGNvbnN0IGNoYXJ0SW5zdGFuY2VSZWYgPSB1c2VSZWYobnVsbCk7XG5cbiAgICBjb25zdCBNSU5fREFURSA9IDE5NTg7XG4gICAgY29uc3QgTUFYX0RBVEUgPSAyMDE5O1xuXG4gICAgY29uc3QgY2FsY3VsYXRlUHJvZ3Jlc3NCYXIgPSAoc3RhcnQsIGVuZCkgPT4ge1xuICAgICAgICBjb25zdCBsZWZ0UGVyY2VudGFnZSA9ICgoc3RhcnQgLSBNSU5fREFURSkgLyAoTUFYX0RBVEUgLSBNSU5fREFURSkpICogMTAwO1xuICAgICAgICBjb25zdCB3aWR0aFBlcmNlbnRhZ2UgPSBzdGFydCA9PT0gZW5kXG4gICAgICAgICAgICA/IDAuNVxuICAgICAgICAgICAgOiAoKGVuZCAtIHN0YXJ0KSAvIChNQVhfREFURSAtIE1JTl9EQVRFKSkgKiAxMDA7XG5cbiAgICAgICAgcmV0dXJuIHsgbGVmdFBlcmNlbnRhZ2UsIHdpZHRoUGVyY2VudGFnZSB9O1xuICAgIH07XG5cbiAgICBjb25zdCBleGVjdXRlUXVlcnkgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGxldCBxdWVyeVR5cGUgPSB0eXBlID09PSBcImFsYnVtc1wiID8gXCJBbGJ1bVwiIDogXCJTb25nXCI7XG4gICAgICAgIGNvbnN0IHVwZGF0ZWRRdWVyeSA9IHF1ZXJ5LnJlcGxhY2UoXCJ7cXVlcnlUeXBlfVwiLCBxdWVyeVR5cGUpO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiL2FwaS9ncmFwaGRiXCIsIHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IHF1ZXJ5OiB1cGRhdGVkUXVlcnkgfSksXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUsOpcG9uc2UgZGUgbCdBUEk6XCIsIGRhdGEpO1xuXG4gICAgICAgICAgICBpZiAoZGF0YS5yZXN1bHRzICYmIEFycmF5LmlzQXJyYXkoZGF0YS5yZXN1bHRzLmJpbmRpbmdzKSkge1xuICAgICAgICAgICAgICAgIHNldFJlc3VsdChkYXRhLnJlc3VsdHMuYmluZGluZ3MpO1xuICAgICAgICAgICAgICAgIHVwZGF0ZUNoYXJ0KGRhdGEucmVzdWx0cy5iaW5kaW5ncyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJMZXMgZG9ubsOpZXMgbmUgc29udCBwYXMgZGFucyBsZSBmb3JtYXQgYXR0ZW5kdS5cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyZXVyIGxvcnMgZGUgbCdleMOpY3V0aW9uIGRlIGxhIHJlcXXDqnRlOlwiLCBlcnJvcik7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlU3RhcnREYXRlQ2hhbmdlID0gKGUpID0+IHtcbiAgICAgICAgbGV0IHZhbHVlID0gcGFyc2VJbnQoZS50YXJnZXQudmFsdWUsIDEwKTtcbiAgICAgICAgaWYgKHZhbHVlIDwgTUlOX0RBVEUpIHZhbHVlID0gTUlOX0RBVEU7XG4gICAgICAgIGlmICh2YWx1ZSA+IE1BWF9EQVRFKSB2YWx1ZSA9IE1BWF9EQVRFO1xuICAgICAgICBpZiAodmFsdWUgPiBlbmREYXRlKSB2YWx1ZSA9IGVuZERhdGU7XG4gICAgICAgIHNldFN0YXJ0RGF0ZSh2YWx1ZSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZUVuZERhdGVDaGFuZ2UgPSAoZSkgPT4ge1xuICAgICAgICBsZXQgdmFsdWUgPSBwYXJzZUludChlLnRhcmdldC52YWx1ZSwgMTApO1xuICAgICAgICBpZiAodmFsdWUgPCBNSU5fREFURSkgdmFsdWUgPSBNSU5fREFURTtcbiAgICAgICAgaWYgKHZhbHVlID4gTUFYX0RBVEUpIHZhbHVlID0gTUFYX0RBVEU7XG4gICAgICAgIGlmICh2YWx1ZSA8IHN0YXJ0RGF0ZSkgdmFsdWUgPSBzdGFydERhdGU7XG4gICAgICAgIHNldEVuZERhdGUodmFsdWUpO1xuICAgIH07XG5cbiAgICBjb25zdCB7IGxlZnRQZXJjZW50YWdlLCB3aWR0aFBlcmNlbnRhZ2UgfSA9IGNhbGN1bGF0ZVByb2dyZXNzQmFyKHN0YXJ0RGF0ZSwgZW5kRGF0ZSk7XG5cbiAgICBjb25zdCB1cGRhdGVDaGFydCA9IChkYXRhKSA9PiB7XG4gICAgICAgIC8vIENvbXB0ZXIgbGVzIG9jY3VycmVuY2VzIHBhciBhbm7DqWVcbiAgICAgICAgY29uc3QgeWVhckNvdW50cyA9IGRhdGEucmVkdWNlKChhY2MsIGl0ZW0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHllYXIgPSBpdGVtLnllYXIudmFsdWU7XG4gICAgICAgICAgICBhY2NbeWVhcl0gPSAoYWNjW3llYXJdIHx8IDApICsgMTtcbiAgICAgICAgICAgIHJldHVybiBhY2M7XG4gICAgICAgIH0sIHt9KTtcblxuICAgICAgICBjb25zdCBsYWJlbHMgPSBPYmplY3Qua2V5cyh5ZWFyQ291bnRzKTtcbiAgICAgICAgY29uc3QgY291bnRzID0gT2JqZWN0LnZhbHVlcyh5ZWFyQ291bnRzKTtcblxuICAgICAgICAvLyBEw6l0cnVpcmUgbCdhbmNpZW5uZSBpbnN0YW5jZSBkdSBncmFwaGlxdWUgc2kgZWxsZSBleGlzdGVcbiAgICAgICAgaWYgKGNoYXJ0SW5zdGFuY2VSZWYuY3VycmVudCkge1xuICAgICAgICAgICAgY2hhcnRJbnN0YW5jZVJlZi5jdXJyZW50LmRlc3Ryb3koKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENyw6llciB1bmUgbm91dmVsbGUgaW5zdGFuY2UgZGUgZ3JhcGhpcXVlXG4gICAgICAgIGNvbnN0IGN0eCA9IGNoYXJ0UmVmLmN1cnJlbnQuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgICBjaGFydEluc3RhbmNlUmVmLmN1cnJlbnQgPSBuZXcgQ2hhcnQoY3R4LCB7XG4gICAgICAgICAgICB0eXBlOiBcImJhclwiLFxuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIGxhYmVsczogbGFiZWxzLFxuICAgICAgICAgICAgICAgIGRhdGFzZXRzOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBgJHt0eXBlfSBwZXIgWWVhcmAsXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBjb3VudHMsXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSg3NSwgMTkyLCAxOTIsIDAuMilcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiBcInJnYmEoNzUsIDE5MiwgMTkyLCAxKVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyV2lkdGg6IDEsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgcmVzcG9uc2l2ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBzY2FsZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgeDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmVnaW5BdFplcm86IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHk6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJlZ2luQXRaZXJvOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxoMj5Ucm91dmV6IGxlcyBzdGF0aXN0aXF1ZXMgZGVzIEdyYW1teXMgZGUge01JTl9EQVRFfSDDoCB7TUFYX0RBVEV9PC9oMj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHlwZXNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2ByYWRpby1idXR0b24gJHt0eXBlID09PSBcImFsYnVtc1wiID8gXCJzZWxlY3RlZFwiIDogXCJcIn0gYH1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwidHlwZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJhbGJ1bXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3R5cGUgPT09IFwiYWxidW1zXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRUeXBlKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICBBbGJ1bXNcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2ByYWRpby1idXR0b24gJHt0eXBlID09PSBcInNpbmdsZXNcIiA/IFwic2VsZWN0ZWRcIiA6IFwiXCJ9IGB9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInR5cGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwic2luZ2xlc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17dHlwZSA9PT0gXCJzaW5nbGVzXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRUeXBlKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICBTaW5nbGVzXG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXRlc1wiPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbWluPXtNSU5fREFURX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG1heD17TUFYX0RBVEV9XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGVwPVwiMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbktleURvd249eyhldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3N0YXJ0RGF0ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVTdGFydERhdGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW49e01JTl9EQVRFfVxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4PXtNQVhfREFURX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0ZXA9XCIxXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uS2V5RG93bj17KGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZW5kRGF0ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVFbmREYXRlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9ncmVzcy1iYXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9ncmVzcy1iYXItYmFja2dyb3VuZFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwcm9ncmVzcy1iYXItZmlsbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IGAke2xlZnRQZXJjZW50YWdlfSUgYCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogYCR7d2lkdGhQZXJjZW50YWdlfSUgYCxcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgID48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJzdW1tYXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgIFZvdXMgYWxsZXogZWZmZWN0dWVyIGRlcyByZWNoZXJjaGVzIGVudHJlIDxzcGFuPntzdGFydERhdGV9PC9zcGFuPiBldCA8c3Bhbj57ZW5kRGF0ZX08L3NwYW4+IHBvdXIgbGVzIDxzcGFuPnt0eXBlfTwvc3Bhbj4uXG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17ZXhlY3V0ZVF1ZXJ5fT5cbiAgICAgICAgICAgICAgICAgICAgQ2hlcmNoZXJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICB7LyogQ2hhcnQuanMgQ2FudmFzICovfVxuICAgICAgICAgICAgPGNhbnZhcyByZWY9e2NoYXJ0UmVmfT48L2NhbnZhcz5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJlZiIsIkNoYXJ0IiwiUXVlcnlHcmFwaERCIiwicmVzdWx0Iiwic2V0UmVzdWx0Iiwic3RhcnREYXRlIiwic2V0U3RhcnREYXRlIiwiZW5kRGF0ZSIsInNldEVuZERhdGUiLCJ0eXBlIiwic2V0VHlwZSIsInF1ZXJ5Iiwic2V0UXVlcnkiLCJjaGFydFJlZiIsImNoYXJ0SW5zdGFuY2VSZWYiLCJNSU5fREFURSIsIk1BWF9EQVRFIiwiY2FsY3VsYXRlUHJvZ3Jlc3NCYXIiLCJzdGFydCIsImVuZCIsImxlZnRQZXJjZW50YWdlIiwid2lkdGhQZXJjZW50YWdlIiwiZXhlY3V0ZVF1ZXJ5IiwicXVlcnlUeXBlIiwidXBkYXRlZFF1ZXJ5IiwicmVwbGFjZSIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJkYXRhIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJyZXN1bHRzIiwiQXJyYXkiLCJpc0FycmF5IiwiYmluZGluZ3MiLCJ1cGRhdGVDaGFydCIsImVycm9yIiwiaGFuZGxlU3RhcnREYXRlQ2hhbmdlIiwiZSIsInZhbHVlIiwicGFyc2VJbnQiLCJ0YXJnZXQiLCJoYW5kbGVFbmREYXRlQ2hhbmdlIiwieWVhckNvdW50cyIsInJlZHVjZSIsImFjYyIsIml0ZW0iLCJ5ZWFyIiwibGFiZWxzIiwiT2JqZWN0Iiwia2V5cyIsImNvdW50cyIsInZhbHVlcyIsImN1cnJlbnQiLCJkZXN0cm95IiwiY3R4IiwiZ2V0Q29udGV4dCIsImRhdGFzZXRzIiwibGFiZWwiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXJDb2xvciIsImJvcmRlcldpZHRoIiwib3B0aW9ucyIsInJlc3BvbnNpdmUiLCJzY2FsZXMiLCJ4IiwiYmVnaW5BdFplcm8iLCJ5IiwiZGl2IiwiaDIiLCJjbGFzc05hbWUiLCJpbnB1dCIsIm5hbWUiLCJjaGVja2VkIiwib25DaGFuZ2UiLCJtaW4iLCJtYXgiLCJzdGVwIiwib25LZXlEb3duIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInN0eWxlIiwibGVmdCIsIndpZHRoIiwicCIsInNwYW4iLCJidXR0b24iLCJvbkNsaWNrIiwiY2FudmFzIiwicmVmIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/QueryGraphDB.js\n"));

/***/ })

});