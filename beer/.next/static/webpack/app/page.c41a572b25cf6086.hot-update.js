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

/***/ "(app-pages-browser)/./src/app/components/PieChart.js":
/*!****************************************!*\
  !*** ./src/app/components/PieChart.js ***!
  \****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ PieChart)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var chart_js_auto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chart.js/auto */ \"(app-pages-browser)/./node_modules/chart.js/auto/auto.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nfunction PieChart(param) {\n    let { jsonData } = param;\n    _s();\n    const chartRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    const [chartType, setChartType] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"bar\");\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)({\n        \"PieChart.useEffect\": ()=>{\n            if (!jsonData) return;\n            const { labels, data } = processChartData(jsonData);\n            const existingChart = chart_js_auto__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getChart(chartRef.current);\n            if (existingChart) {\n                existingChart.destroy();\n            }\n            new chart_js_auto__WEBPACK_IMPORTED_MODULE_1__[\"default\"](chartRef.current, {\n                type: chartType,\n                data: {\n                    labels,\n                    datasets: [\n                        {\n                            label: \"Winning Genres\",\n                            data,\n                            backgroundColor: generateColors(labels.length),\n                            hoverOffset: 4\n                        }\n                    ]\n                }\n            });\n        // Pas besoin de clean-up explicite ici, car on détruit toujours l'ancien graphique avant de créer le nouveau.\n        }\n    }[\"PieChart.useEffect\"], [\n        jsonData,\n        chartType\n    ]); // Mettre à jour le graphique si `jsonData` ou `chartType` change\n    const toggleChartType = ()=>{\n        setChartType((prevType)=>prevType === \"bar\" ? \"pie\" : \"bar\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                visible: \"true\",\n                className: \"chart-type\",\n                onClick: toggleChartType,\n                children: chartType === \"bar\" ? \"Pie\" : \"Bar\"\n            }, void 0, false, {\n                fileName: \"/Users/augustin/Documents/Cours/BUT_info/S5/BD/projet/beer/src/app/components/PieChart.js\",\n                lineNumber: 52,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"canvas\", {\n                ref: chartRef\n            }, void 0, false, {\n                fileName: \"/Users/augustin/Documents/Cours/BUT_info/S5/BD/projet/beer/src/app/components/PieChart.js\",\n                lineNumber: 53,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(PieChart, \"jPbHgJBw5QLhs+SCb+xjfRBf9rg=\");\n_c = PieChart;\nconst processChartData = (jsonData)=>{\n    const labels = [];\n    const data = [];\n    jsonData.results.bindings.forEach((item)=>{\n        labels.push(item.wikidataGenreLabel.value);\n        data.push(parseInt(item.genreCount.value, 10));\n    });\n    return {\n        labels,\n        data\n    };\n};\nconst generateColors = (count)=>Array.from({\n        length: count\n    }, ()=>\"hsl(\".concat(Math.random() * 360, \", 70%, 60%)\"));\nvar _c;\n$RefreshReg$(_c, \"PieChart\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9QaWVDaGFydC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWtDO0FBQ2tCO0FBRXJDLFNBQVNJLFNBQVMsS0FBWTtRQUFaLEVBQUVDLFFBQVEsRUFBRSxHQUFaOztJQUM3QixNQUFNQyxXQUFXSiw2Q0FBTUEsQ0FBQztJQUN4QixNQUFNLENBQUNLLFdBQVdDLGFBQWEsR0FBR0wsK0NBQVFBLENBQUM7SUFFM0NGLGdEQUFTQTs4QkFBQztZQUNOLElBQUksQ0FBQ0ksVUFBVTtZQUVmLE1BQU0sRUFBRUksTUFBTSxFQUFFQyxJQUFJLEVBQUUsR0FBR0MsaUJBQWlCTjtZQUUxQyxNQUFNTyxnQkFBZ0JaLHFEQUFLQSxDQUFDYSxRQUFRLENBQUNQLFNBQVNRLE9BQU87WUFDckQsSUFBSUYsZUFBZTtnQkFDZkEsY0FBY0csT0FBTztZQUN6QjtZQUVBLElBQUlmLHFEQUFLQSxDQUFDTSxTQUFTUSxPQUFPLEVBQUU7Z0JBQ3hCRSxNQUFNVDtnQkFDTkcsTUFBTTtvQkFDRkQ7b0JBQ0FRLFVBQVU7d0JBQ047NEJBQ0lDLE9BQU87NEJBQ1BSOzRCQUNBUyxpQkFBaUJDLGVBQWVYLE9BQU9ZLE1BQU07NEJBQzdDQyxhQUFhO3dCQUNqQjtxQkFDSDtnQkFDTDtZQVdKO1FBRUEsOEdBQThHO1FBQ2xIOzZCQUFHO1FBQUNqQjtRQUFVRTtLQUFVLEdBQUcsaUVBQWlFO0lBRTVGLE1BQU1nQixrQkFBa0I7UUFDcEJmLGFBQWEsQ0FBQ2dCLFdBQWNBLGFBQWEsUUFBUSxRQUFRO0lBQzdEO0lBRUEscUJBQ0k7OzBCQUNJLDhEQUFDQztnQkFBT0MsU0FBUTtnQkFBT0MsV0FBVTtnQkFBYUMsU0FBU0w7MEJBQWtCaEIsY0FBYyxRQUFRLFFBQVE7Ozs7OzswQkFDdkcsOERBQUNzQjtnQkFBT0MsS0FBS3hCOzs7Ozs7OztBQUd6QjtHQXBEd0JGO0tBQUFBO0FBc0R4QixNQUFNTyxtQkFBbUIsQ0FBQ047SUFDdEIsTUFBTUksU0FBUyxFQUFFO0lBQ2pCLE1BQU1DLE9BQU8sRUFBRTtJQUVmTCxTQUFTMEIsT0FBTyxDQUFDQyxRQUFRLENBQUNDLE9BQU8sQ0FBQyxDQUFDQztRQUMvQnpCLE9BQU8wQixJQUFJLENBQUNELEtBQUtFLGtCQUFrQixDQUFDQyxLQUFLO1FBQ3pDM0IsS0FBS3lCLElBQUksQ0FBQ0csU0FBU0osS0FBS0ssVUFBVSxDQUFDRixLQUFLLEVBQUU7SUFDOUM7SUFFQSxPQUFPO1FBQUU1QjtRQUFRQztJQUFLO0FBQzFCO0FBRUEsTUFBTVUsaUJBQWlCLENBQUNvQixRQUNwQkMsTUFBTUMsSUFBSSxDQUFDO1FBQUVyQixRQUFRbUI7SUFBTSxHQUFHLElBQU0sT0FBMkIsT0FBcEJHLEtBQUtDLE1BQU0sS0FBSyxLQUFJIiwic291cmNlcyI6WyIvVXNlcnMvYXVndXN0aW4vRG9jdW1lbnRzL0NvdXJzL0JVVF9pbmZvL1M1L0JEL3Byb2pldC9iZWVyL3NyYy9hcHAvY29tcG9uZW50cy9QaWVDaGFydC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2hhcnQgZnJvbSAnY2hhcnQuanMvYXV0byc7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGllQ2hhcnQoeyBqc29uRGF0YSB9KSB7XG4gICAgY29uc3QgY2hhcnRSZWYgPSB1c2VSZWYobnVsbCk7XG4gICAgY29uc3QgW2NoYXJ0VHlwZSwgc2V0Q2hhcnRUeXBlXSA9IHVzZVN0YXRlKFwiYmFyXCIpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKCFqc29uRGF0YSkgcmV0dXJuO1xuXG4gICAgICAgIGNvbnN0IHsgbGFiZWxzLCBkYXRhIH0gPSBwcm9jZXNzQ2hhcnREYXRhKGpzb25EYXRhKTtcblxuICAgICAgICBjb25zdCBleGlzdGluZ0NoYXJ0ID0gQ2hhcnQuZ2V0Q2hhcnQoY2hhcnRSZWYuY3VycmVudCk7XG4gICAgICAgIGlmIChleGlzdGluZ0NoYXJ0KSB7XG4gICAgICAgICAgICBleGlzdGluZ0NoYXJ0LmRlc3Ryb3koKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG5ldyBDaGFydChjaGFydFJlZi5jdXJyZW50LCB7XG4gICAgICAgICAgICB0eXBlOiBjaGFydFR5cGUsXG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgbGFiZWxzLFxuICAgICAgICAgICAgICAgIGRhdGFzZXRzOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIldpbm5pbmcgR2VucmVzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLFxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBnZW5lcmF0ZUNvbG9ycyhsYWJlbHMubGVuZ3RoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhvdmVyT2Zmc2V0OiA0LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy8gb3B0aW9uczoge1xuICAgICAgICAgICAgLy8gICAgIGxheW91dDoge1xuICAgICAgICAgICAgLy8gICAgICAgICBwYWRkaW5nOiB7XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICB0b3A6IGNoYXJ0UmVmLmN1cnJlbnQuY2xpZW50SGVpZ2h0ICogMC41MCxcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIGJvdHRvbTogY2hhcnRSZWYuY3VycmVudC5jbGllbnRIZWlnaHQgKiAwLjM1LFxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgbGVmdDogY2hhcnRSZWYuY3VycmVudC5jbGllbnRXaWR0aCAqIDAuNTAsXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICByaWdodDogY2hhcnRSZWYuY3VycmVudC5jbGllbnRXaWR0aCAqIDAuNTAsXG4gICAgICAgICAgICAvLyAgICAgICAgIH0sXG4gICAgICAgICAgICAvLyAgICAgfSxcbiAgICAgICAgICAgIC8vIH0sXG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIFBhcyBiZXNvaW4gZGUgY2xlYW4tdXAgZXhwbGljaXRlIGljaSwgY2FyIG9uIGTDqXRydWl0IHRvdWpvdXJzIGwnYW5jaWVuIGdyYXBoaXF1ZSBhdmFudCBkZSBjcsOpZXIgbGUgbm91dmVhdS5cbiAgICB9LCBbanNvbkRhdGEsIGNoYXJ0VHlwZV0pOyAvLyBNZXR0cmUgw6Agam91ciBsZSBncmFwaGlxdWUgc2kgYGpzb25EYXRhYCBvdSBgY2hhcnRUeXBlYCBjaGFuZ2VcblxuICAgIGNvbnN0IHRvZ2dsZUNoYXJ0VHlwZSA9ICgpID0+IHtcbiAgICAgICAgc2V0Q2hhcnRUeXBlKChwcmV2VHlwZSkgPT4gKHByZXZUeXBlID09PSBcImJhclwiID8gXCJwaWVcIiA6IFwiYmFyXCIpKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxidXR0b24gdmlzaWJsZT1cInRydWVcIiBjbGFzc05hbWU9XCJjaGFydC10eXBlXCIgb25DbGljaz17dG9nZ2xlQ2hhcnRUeXBlfT57Y2hhcnRUeXBlID09PSBcImJhclwiID8gXCJQaWVcIiA6IFwiQmFyXCJ9PC9idXR0b24+XG4gICAgICAgICAgICA8Y2FudmFzIHJlZj17Y2hhcnRSZWZ9PjwvY2FudmFzPlxuICAgICAgICA8Lz5cbiAgICApO1xufVxuXG5jb25zdCBwcm9jZXNzQ2hhcnREYXRhID0gKGpzb25EYXRhKSA9PiB7XG4gICAgY29uc3QgbGFiZWxzID0gW107XG4gICAgY29uc3QgZGF0YSA9IFtdO1xuXG4gICAganNvbkRhdGEucmVzdWx0cy5iaW5kaW5ncy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgIGxhYmVscy5wdXNoKGl0ZW0ud2lraWRhdGFHZW5yZUxhYmVsLnZhbHVlKTtcbiAgICAgICAgZGF0YS5wdXNoKHBhcnNlSW50KGl0ZW0uZ2VucmVDb3VudC52YWx1ZSwgMTApKTtcbiAgICB9KTtcblxuICAgIHJldHVybiB7IGxhYmVscywgZGF0YSB9O1xufTtcblxuY29uc3QgZ2VuZXJhdGVDb2xvcnMgPSAoY291bnQpID0+XG4gICAgQXJyYXkuZnJvbSh7IGxlbmd0aDogY291bnQgfSwgKCkgPT4gYGhzbCgke01hdGgucmFuZG9tKCkgKiAzNjB9LCA3MCUsIDYwJSlgKTtcbiJdLCJuYW1lcyI6WyJDaGFydCIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwiUGllQ2hhcnQiLCJqc29uRGF0YSIsImNoYXJ0UmVmIiwiY2hhcnRUeXBlIiwic2V0Q2hhcnRUeXBlIiwibGFiZWxzIiwiZGF0YSIsInByb2Nlc3NDaGFydERhdGEiLCJleGlzdGluZ0NoYXJ0IiwiZ2V0Q2hhcnQiLCJjdXJyZW50IiwiZGVzdHJveSIsInR5cGUiLCJkYXRhc2V0cyIsImxhYmVsIiwiYmFja2dyb3VuZENvbG9yIiwiZ2VuZXJhdGVDb2xvcnMiLCJsZW5ndGgiLCJob3Zlck9mZnNldCIsInRvZ2dsZUNoYXJ0VHlwZSIsInByZXZUeXBlIiwiYnV0dG9uIiwidmlzaWJsZSIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJjYW52YXMiLCJyZWYiLCJyZXN1bHRzIiwiYmluZGluZ3MiLCJmb3JFYWNoIiwiaXRlbSIsInB1c2giLCJ3aWtpZGF0YUdlbnJlTGFiZWwiLCJ2YWx1ZSIsInBhcnNlSW50IiwiZ2VucmVDb3VudCIsImNvdW50IiwiQXJyYXkiLCJmcm9tIiwiTWF0aCIsInJhbmRvbSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/PieChart.js\n"));

/***/ })

});