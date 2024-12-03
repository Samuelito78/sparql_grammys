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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ QueryGraphDB)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _PieChart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PieChart */ \"(app-pages-browser)/./src/app/components/PieChart.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction QueryGraphDB() {\n    _s();\n    const [result, setResult] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [startDate, setStartDate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(MIN_DATE);\n    const [endDate, setEndDate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(MAX_DATE);\n    const [type, setType] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"albums\");\n    const MIN_DATE = 1964;\n    const MAX_DATE = 2019;\n    const calculateProgressBar = (start, end)=>{\n        const leftPercentage = (start - MIN_DATE) / (MAX_DATE - MIN_DATE) * 100;\n        const widthPercentage = start === end ? 0.5 : (end - start) / (MAX_DATE - MIN_DATE) * 100;\n        return {\n            leftPercentage,\n            widthPercentage\n        };\n    };\n    const executeQuery = async ()=>{\n        const queryType = type === \"albums\" ? \"Album\" : \"Song\";\n        const updatedQuery = '\\n            PREFIX iut: <https://cours.iut-orsay.fr/npbd/>\\n            PREFIX wd: <http://www.wikidata.org/entity/>\\n            PREFIX wdt: <http://www.wikidata.org/prop/direct/>\\n            PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\\n            PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\\n\\n            SELECT ?wikidataGenreLabel (COUNT(?entity) AS ?genreCount)\\n            WHERE {\\n                ?entity a iut:Nominee ;\\n                        iut:category \"'.concat(queryType, ' Of The Year\"@en ;\\n                        iut:year ?year ;\\n                        iut:hasGenre ?wikidataGenreLabel .\\n\\n                FILTER (xsd:integer(str(?year)) >= ').concat(startDate, \" && xsd:integer(str(?year)) <= \").concat(endDate, \")\\n            }\\n            GROUP BY ?wikidataGenreLabel\\n            ORDER BY DESC(?genreCount)\");\n        try {\n            const response = await fetch(\"/api/graphdb\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    query: updatedQuery\n                })\n            });\n            const data = await response.json();\n            setResult(data);\n        } catch (error) {\n            console.error(\"Error executing query:\", error);\n        }\n    };\n    const handleStartDateChange = (e)=>{\n        let value = parseInt(e.target.value, 10);\n        if (value < MIN_DATE) value = MIN_DATE;\n        if (value > MAX_DATE) value = MAX_DATE;\n        if (value > endDate) value = endDate;\n        setStartDate(value);\n    };\n    const handleEndDateChange = (e)=>{\n        let value = parseInt(e.target.value, 10);\n        if (value < MIN_DATE) value = MIN_DATE;\n        if (value > MAX_DATE) value = MAX_DATE;\n        if (value < startDate) value = startDate;\n        setEndDate(value);\n    };\n    const { leftPercentage, widthPercentage } = calculateProgressBar(startDate, endDate);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: [\n                    \"Trouvez les statistiques des Grammys de \",\n                    MIN_DATE,\n                    \" \\xe0 \",\n                    MAX_DATE\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/augustin/Documents/Cours/BUT_info/S5/BD/projet/beer/src/app/components/QueryGraphDB.js\",\n                lineNumber: 82,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"form-group\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"types\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                className: \"radio-button \".concat(type === \"albums\" ? \"selected\" : \"\"),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"radio\",\n                                        name: \"type\",\n                                        value: \"albums\",\n                                        checked: type === \"albums\",\n                                        onChange: (e)=>setType(e.target.value)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/augustin/Documents/Cours/BUT_info/S5/BD/projet/beer/src/app/components/QueryGraphDB.js\",\n                                        lineNumber: 88,\n                                        columnNumber: 25\n                                    }, this),\n                                    \"Albums\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/augustin/Documents/Cours/BUT_info/S5/BD/projet/beer/src/app/components/QueryGraphDB.js\",\n                                lineNumber: 85,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                className: \"radio-button \".concat(type === \"singles\" ? \"selected\" : \"\"),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"radio\",\n                                        name: \"type\",\n                                        value: \"singles\",\n                                        checked: type === \"singles\",\n                                        onChange: (e)=>setType(e.target.value)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/augustin/Documents/Cours/BUT_info/S5/BD/projet/beer/src/app/components/QueryGraphDB.js\",\n                                        lineNumber: 100,\n                                        columnNumber: 25\n                                    }, this),\n                                    \"Singles\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/augustin/Documents/Cours/BUT_info/S5/BD/projet/beer/src/app/components/QueryGraphDB.js\",\n                                lineNumber: 97,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/augustin/Documents/Cours/BUT_info/S5/BD/projet/beer/src/app/components/QueryGraphDB.js\",\n                        lineNumber: 84,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"dates\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"number\",\n                                min: MIN_DATE,\n                                max: MAX_DATE,\n                                step: \"1\",\n                                onKeyDown: (event)=>{\n                                    event.preventDefault();\n                                },\n                                value: startDate,\n                                onChange: handleStartDateChange\n                            }, void 0, false, {\n                                fileName: \"/Users/augustin/Documents/Cours/BUT_info/S5/BD/projet/beer/src/app/components/QueryGraphDB.js\",\n                                lineNumber: 111,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"number\",\n                                min: MIN_DATE,\n                                max: MAX_DATE,\n                                step: \"1\",\n                                onKeyDown: (event)=>{\n                                    event.preventDefault();\n                                },\n                                value: endDate,\n                                onChange: handleEndDateChange\n                            }, void 0, false, {\n                                fileName: \"/Users/augustin/Documents/Cours/BUT_info/S5/BD/projet/beer/src/app/components/QueryGraphDB.js\",\n                                lineNumber: 122,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/augustin/Documents/Cours/BUT_info/S5/BD/projet/beer/src/app/components/QueryGraphDB.js\",\n                        lineNumber: 110,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"progress-bar\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"progress-bar-background\"\n                            }, void 0, false, {\n                                fileName: \"/Users/augustin/Documents/Cours/BUT_info/S5/BD/projet/beer/src/app/components/QueryGraphDB.js\",\n                                lineNumber: 136,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"progress-bar-fill\",\n                                style: {\n                                    left: \"\".concat(leftPercentage, \"%\"),\n                                    width: \"\".concat(widthPercentage, \"%\")\n                                }\n                            }, void 0, false, {\n                                fileName: \"/Users/augustin/Documents/Cours/BUT_info/S5/BD/projet/beer/src/app/components/QueryGraphDB.js\",\n                                lineNumber: 137,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/augustin/Documents/Cours/BUT_info/S5/BD/projet/beer/src/app/components/QueryGraphDB.js\",\n                        lineNumber: 135,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"summary\",\n                        children: [\n                            \"Vous allez effectuer des recherches entre \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: startDate\n                            }, void 0, false, {\n                                fileName: \"/Users/augustin/Documents/Cours/BUT_info/S5/BD/projet/beer/src/app/components/QueryGraphDB.js\",\n                                lineNumber: 146,\n                                columnNumber: 63\n                            }, this),\n                            \" et \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: endDate\n                            }, void 0, false, {\n                                fileName: \"/Users/augustin/Documents/Cours/BUT_info/S5/BD/projet/beer/src/app/components/QueryGraphDB.js\",\n                                lineNumber: 146,\n                                columnNumber: 91\n                            }, this),\n                            \" pour les \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: type\n                            }, void 0, false, {\n                                fileName: \"/Users/augustin/Documents/Cours/BUT_info/S5/BD/projet/beer/src/app/components/QueryGraphDB.js\",\n                                lineNumber: 146,\n                                columnNumber: 123\n                            }, this),\n                            \".\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/augustin/Documents/Cours/BUT_info/S5/BD/projet/beer/src/app/components/QueryGraphDB.js\",\n                        lineNumber: 145,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: executeQuery,\n                        children: \"Chercher\"\n                    }, void 0, false, {\n                        fileName: \"/Users/augustin/Documents/Cours/BUT_info/S5/BD/projet/beer/src/app/components/QueryGraphDB.js\",\n                        lineNumber: 148,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/augustin/Documents/Cours/BUT_info/S5/BD/projet/beer/src/app/components/QueryGraphDB.js\",\n                lineNumber: 83,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"chart\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PieChart__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    jsonData: result\n                }, void 0, false, {\n                    fileName: \"/Users/augustin/Documents/Cours/BUT_info/S5/BD/projet/beer/src/app/components/QueryGraphDB.js\",\n                    lineNumber: 154,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/augustin/Documents/Cours/BUT_info/S5/BD/projet/beer/src/app/components/QueryGraphDB.js\",\n                lineNumber: 153,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/augustin/Documents/Cours/BUT_info/S5/BD/projet/beer/src/app/components/QueryGraphDB.js\",\n        lineNumber: 81,\n        columnNumber: 9\n    }, this);\n}\n_s(QueryGraphDB, \"mmQVriIe0nb2NPcbxEzMIWaTAAo=\");\n_c = QueryGraphDB;\nvar _c;\n$RefreshReg$(_c, \"QueryGraphDB\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9RdWVyeUdyYXBoREIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUVpQztBQUNDO0FBRW5CLFNBQVNFOztJQUNwQixNQUFNLENBQUNDLFFBQVFDLFVBQVUsR0FBR0osK0NBQVFBLENBQUM7SUFDckMsTUFBTSxDQUFDSyxXQUFXQyxhQUFhLEdBQUdOLCtDQUFRQSxDQUFDTztJQUMzQyxNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR1QsK0NBQVFBLENBQUNVO0lBQ3ZDLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHWiwrQ0FBUUEsQ0FBQztJQUNqQyxNQUFNTyxXQUFXO0lBQ2pCLE1BQU1HLFdBQVc7SUFFakIsTUFBTUcsdUJBQXVCLENBQUNDLE9BQU9DO1FBQ2pDLE1BQU1DLGlCQUFpQixDQUFFRixRQUFRUCxRQUFPLElBQU1HLENBQUFBLFdBQVdILFFBQU8sSUFBTTtRQUV0RSxNQUFNVSxrQkFBa0JILFVBQVVDLE1BQzVCLE1BQ0EsQ0FBRUEsTUFBTUQsS0FBSSxJQUFNSixDQUFBQSxXQUFXSCxRQUFPLElBQU07UUFFaEQsT0FBTztZQUFFUztZQUFnQkM7UUFBZ0I7SUFDN0M7SUFFQSxNQUFNQyxlQUFlO1FBQ2pCLE1BQU1DLFlBQVlSLFNBQVMsV0FBVyxVQUFVO1FBRWhELE1BQU1TLGVBQWUsd2VBY3dCZixPQUpiYyxXQUFVLG1MQUk4Q1gsT0FBM0NILFdBQVUsbUNBQXlDLE9BQVJHLFNBQVE7UUFLaEcsSUFBSTtZQUNBLE1BQU1hLFdBQVcsTUFBTUMsTUFBTSxnQkFBZ0I7Z0JBQ3pDQyxRQUFRO2dCQUNSQyxTQUFTO29CQUNMLGdCQUFnQjtnQkFDcEI7Z0JBQ0FDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQztvQkFBRUMsT0FBT1I7Z0JBQWE7WUFDL0M7WUFFQSxNQUFNUyxPQUFPLE1BQU1SLFNBQVNTLElBQUk7WUFDaEMxQixVQUFVeUI7UUFDZCxFQUFFLE9BQU9FLE9BQU87WUFDWkMs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QUFBIiwic291cmNlcyI6WyIvVXNlcnMvYXVndXN0aW4vRG9jdW1lbnRzL0NvdXJzL0JVVF9pbmZvL1M1L0JEL3Byb2pldC9iZWVyL3NyYy9hcHAvY29tcG9uZW50cy9RdWVyeUdyYXBoREIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUGllQ2hhcnQgZnJvbSBcIi4vUGllQ2hhcnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUXVlcnlHcmFwaERCKCkge1xuICAgIGNvbnN0IFtyZXN1bHQsIHNldFJlc3VsdF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgICBjb25zdCBbc3RhcnREYXRlLCBzZXRTdGFydERhdGVdID0gdXNlU3RhdGUoTUlOX0RBVEUpO1xuICAgIGNvbnN0IFtlbmREYXRlLCBzZXRFbmREYXRlXSA9IHVzZVN0YXRlKE1BWF9EQVRFKTtcbiAgICBjb25zdCBbdHlwZSwgc2V0VHlwZV0gPSB1c2VTdGF0ZShcImFsYnVtc1wiKTtcbiAgICBjb25zdCBNSU5fREFURSA9IDE5NjQ7XG4gICAgY29uc3QgTUFYX0RBVEUgPSAyMDE5O1xuXG4gICAgY29uc3QgY2FsY3VsYXRlUHJvZ3Jlc3NCYXIgPSAoc3RhcnQsIGVuZCkgPT4ge1xuICAgICAgICBjb25zdCBsZWZ0UGVyY2VudGFnZSA9ICgoc3RhcnQgLSBNSU5fREFURSkgLyAoTUFYX0RBVEUgLSBNSU5fREFURSkpICogMTAwO1xuXG4gICAgICAgIGNvbnN0IHdpZHRoUGVyY2VudGFnZSA9IHN0YXJ0ID09PSBlbmRcbiAgICAgICAgICAgID8gMC41XG4gICAgICAgICAgICA6ICgoZW5kIC0gc3RhcnQpIC8gKE1BWF9EQVRFIC0gTUlOX0RBVEUpKSAqIDEwMDtcblxuICAgICAgICByZXR1cm4geyBsZWZ0UGVyY2VudGFnZSwgd2lkdGhQZXJjZW50YWdlIH07XG4gICAgfTtcblxuICAgIGNvbnN0IGV4ZWN1dGVRdWVyeSA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgY29uc3QgcXVlcnlUeXBlID0gdHlwZSA9PT0gXCJhbGJ1bXNcIiA/IFwiQWxidW1cIiA6IFwiU29uZ1wiO1xuXG4gICAgICAgIGNvbnN0IHVwZGF0ZWRRdWVyeSA9IGBcbiAgICAgICAgICAgIFBSRUZJWCBpdXQ6IDxodHRwczovL2NvdXJzLml1dC1vcnNheS5mci9ucGJkLz5cbiAgICAgICAgICAgIFBSRUZJWCB3ZDogPGh0dHA6Ly93d3cud2lraWRhdGEub3JnL2VudGl0eS8+XG4gICAgICAgICAgICBQUkVGSVggd2R0OiA8aHR0cDovL3d3dy53aWtpZGF0YS5vcmcvcHJvcC9kaXJlY3QvPlxuICAgICAgICAgICAgUFJFRklYIHJkZnM6IDxodHRwOi8vd3d3LnczLm9yZy8yMDAwLzAxL3JkZi1zY2hlbWEjPlxuICAgICAgICAgICAgUFJFRklYIHhzZDogPGh0dHA6Ly93d3cudzMub3JnLzIwMDEvWE1MU2NoZW1hIz5cblxuICAgICAgICAgICAgU0VMRUNUID93aWtpZGF0YUdlbnJlTGFiZWwgKENPVU5UKD9lbnRpdHkpIEFTID9nZW5yZUNvdW50KVxuICAgICAgICAgICAgV0hFUkUge1xuICAgICAgICAgICAgICAgID9lbnRpdHkgYSBpdXQ6Tm9taW5lZSA7XG4gICAgICAgICAgICAgICAgICAgICAgICBpdXQ6Y2F0ZWdvcnkgXCIke3F1ZXJ5VHlwZX0gT2YgVGhlIFllYXJcIkBlbiA7XG4gICAgICAgICAgICAgICAgICAgICAgICBpdXQ6eWVhciA/eWVhciA7XG4gICAgICAgICAgICAgICAgICAgICAgICBpdXQ6aGFzR2VucmUgP3dpa2lkYXRhR2VucmVMYWJlbCAuXG5cbiAgICAgICAgICAgICAgICBGSUxURVIgKHhzZDppbnRlZ2VyKHN0cig/eWVhcikpID49ICR7c3RhcnREYXRlfSAmJiB4c2Q6aW50ZWdlcihzdHIoP3llYXIpKSA8PSAke2VuZERhdGV9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgR1JPVVAgQlkgP3dpa2lkYXRhR2VucmVMYWJlbFxuICAgICAgICAgICAgT1JERVIgQlkgREVTQyg/Z2VucmVDb3VudClgO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiL2FwaS9ncmFwaGRiXCIsIHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IHF1ZXJ5OiB1cGRhdGVkUXVlcnkgfSksXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgIHNldFJlc3VsdChkYXRhKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBleGVjdXRpbmcgcXVlcnk6XCIsIGVycm9yKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVTdGFydERhdGVDaGFuZ2UgPSAoZSkgPT4ge1xuICAgICAgICBsZXQgdmFsdWUgPSBwYXJzZUludChlLnRhcmdldC52YWx1ZSwgMTApO1xuICAgICAgICBpZiAodmFsdWUgPCBNSU5fREFURSkgdmFsdWUgPSBNSU5fREFURTtcbiAgICAgICAgaWYgKHZhbHVlID4gTUFYX0RBVEUpIHZhbHVlID0gTUFYX0RBVEU7XG4gICAgICAgIGlmICh2YWx1ZSA+IGVuZERhdGUpIHZhbHVlID0gZW5kRGF0ZTtcbiAgICAgICAgc2V0U3RhcnREYXRlKHZhbHVlKTtcbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlRW5kRGF0ZUNoYW5nZSA9IChlKSA9PiB7XG4gICAgICAgIGxldCB2YWx1ZSA9IHBhcnNlSW50KGUudGFyZ2V0LnZhbHVlLCAxMCk7XG4gICAgICAgIGlmICh2YWx1ZSA8IE1JTl9EQVRFKSB2YWx1ZSA9IE1JTl9EQVRFO1xuICAgICAgICBpZiAodmFsdWUgPiBNQVhfREFURSkgdmFsdWUgPSBNQVhfREFURTtcbiAgICAgICAgaWYgKHZhbHVlIDwgc3RhcnREYXRlKSB2YWx1ZSA9IHN0YXJ0RGF0ZTtcbiAgICAgICAgc2V0RW5kRGF0ZSh2YWx1ZSk7XG4gICAgfTtcblxuICAgIGNvbnN0IHsgbGVmdFBlcmNlbnRhZ2UsIHdpZHRoUGVyY2VudGFnZSB9ID0gY2FsY3VsYXRlUHJvZ3Jlc3NCYXIoc3RhcnREYXRlLCBlbmREYXRlKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDI+VHJvdXZleiBsZXMgc3RhdGlzdGlxdWVzIGRlcyBHcmFtbXlzIGRlIHtNSU5fREFURX0gw6Age01BWF9EQVRFfTwvaDI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInR5cGVzXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcmFkaW8tYnV0dG9uICR7dHlwZSA9PT0gXCJhbGJ1bXNcIiA/IFwic2VsZWN0ZWRcIiA6IFwiXCJ9YH1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwidHlwZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJhbGJ1bXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3R5cGUgPT09IFwiYWxidW1zXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRUeXBlKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICBBbGJ1bXNcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2ByYWRpby1idXR0b24gJHt0eXBlID09PSBcInNpbmdsZXNcIiA/IFwic2VsZWN0ZWRcIiA6IFwiXCJ9YH1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwidHlwZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJzaW5nbGVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXt0eXBlID09PSBcInNpbmdsZXNcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFR5cGUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIFNpbmdsZXNcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhdGVzXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW49e01JTl9EQVRFfVxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4PXtNQVhfREFURX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0ZXA9XCIxXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uS2V5RG93bj17KGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c3RhcnREYXRlfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVN0YXJ0RGF0ZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbj17TUlOX0RBVEV9XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXg9e01BWF9EQVRFfVxuICAgICAgICAgICAgICAgICAgICAgICAgc3RlcD1cIjFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25LZXlEb3duPXsoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtlbmREYXRlfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUVuZERhdGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2dyZXNzLWJhclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2dyZXNzLWJhci1iYWNrZ3JvdW5kXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInByb2dyZXNzLWJhci1maWxsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogYCR7bGVmdFBlcmNlbnRhZ2V9JWAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGAke3dpZHRoUGVyY2VudGFnZX0lYCxcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgID48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJzdW1tYXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgIFZvdXMgYWxsZXogZWZmZWN0dWVyIGRlcyByZWNoZXJjaGVzIGVudHJlIDxzcGFuPntzdGFydERhdGV9PC9zcGFuPiBldCA8c3Bhbj57ZW5kRGF0ZX08L3NwYW4+IHBvdXIgbGVzIDxzcGFuPnt0eXBlfTwvc3Bhbj4uXG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17ZXhlY3V0ZVF1ZXJ5fT5cbiAgICAgICAgICAgICAgICAgICAgQ2hlcmNoZXJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXJ0XCI+XG4gICAgICAgICAgICAgICAgPFBpZUNoYXJ0IGpzb25EYXRhPXtyZXN1bHR9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIlBpZUNoYXJ0IiwiUXVlcnlHcmFwaERCIiwicmVzdWx0Iiwic2V0UmVzdWx0Iiwic3RhcnREYXRlIiwic2V0U3RhcnREYXRlIiwiTUlOX0RBVEUiLCJlbmREYXRlIiwic2V0RW5kRGF0ZSIsIk1BWF9EQVRFIiwidHlwZSIsInNldFR5cGUiLCJjYWxjdWxhdGVQcm9ncmVzc0JhciIsInN0YXJ0IiwiZW5kIiwibGVmdFBlcmNlbnRhZ2UiLCJ3aWR0aFBlcmNlbnRhZ2UiLCJleGVjdXRlUXVlcnkiLCJxdWVyeVR5cGUiLCJ1cGRhdGVkUXVlcnkiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwicXVlcnkiLCJkYXRhIiwianNvbiIsImVycm9yIiwiY29uc29sZSIsImhhbmRsZVN0YXJ0RGF0ZUNoYW5nZSIsImUiLCJ2YWx1ZSIsInBhcnNlSW50IiwidGFyZ2V0IiwiaGFuZGxlRW5kRGF0ZUNoYW5nZSIsImRpdiIsImgyIiwiY2xhc3NOYW1lIiwibGFiZWwiLCJpbnB1dCIsIm5hbWUiLCJjaGVja2VkIiwib25DaGFuZ2UiLCJtaW4iLCJtYXgiLCJzdGVwIiwib25LZXlEb3duIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInN0eWxlIiwibGVmdCIsIndpZHRoIiwicCIsInNwYW4iLCJidXR0b24iLCJvbkNsaWNrIiwianNvbkRhdGEiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/QueryGraphDB.js\n"));

/***/ })

});