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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ PieChart)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var chart_js_auto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chart.js/auto */ \"(app-pages-browser)/./node_modules/chart.js/auto/auto.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nfunction PieChart(param) {\n    let { jsonData } = param;\n    _s();\n    const chartRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    const [chartType, setChartType] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"bar\");\n    const [isChartReady, setIsChartReady] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)({\n        \"PieChart.useEffect\": ()=>{\n            if (!jsonData) return;\n            const { labels, data } = processChartData(jsonData);\n            const existingChart = chart_js_auto__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getChart(chartRef.current);\n            if (existingChart) {\n                existingChart.destroy();\n            }\n            new chart_js_auto__WEBPACK_IMPORTED_MODULE_1__[\"default\"](chartRef.current, {\n                type: chartType,\n                data: {\n                    labels,\n                    datasets: [\n                        {\n                            label: \"Winning Genres\",\n                            data,\n                            backgroundColor: generateColors(labels.length),\n                            hoverOffset: 4\n                        }\n                    ]\n                }\n            });\n            setIsChartReady(true);\n        }\n    }[\"PieChart.useEffect\"], [\n        jsonData,\n        chartType\n    ]); // update if `jsonData` or `chartType` change\n    const toggleChartType = ()=>{\n        setChartType((prevType)=>prevType === \"bar\" ? \"pie\" : \"bar\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"chart-type\",\n                onClick: toggleChartType,\n                disabled: isChartReady,\n                children: chartType === \"bar\" ? \"Pie\" : \"Bar\"\n            }, void 0, false, {\n                fileName: \"/Users/augustin/Documents/Cours/BUT_info/S5/BD/projet/beer/src/app/components/PieChart.js\",\n                lineNumber: 53,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"canvas\", {\n                ref: chartRef\n            }, void 0, false, {\n                fileName: \"/Users/augustin/Documents/Cours/BUT_info/S5/BD/projet/beer/src/app/components/PieChart.js\",\n                lineNumber: 60,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(PieChart, \"S04j1af0LDQ3zcxIAeKYZlLk8NY=\");\n_c = PieChart;\nconst processChartData = (jsonData)=>{\n    const labels = [];\n    const data = [];\n    jsonData.results.bindings.forEach((item)=>{\n        labels.push(item.wikidataGenreLabel.value);\n        data.push(parseInt(item.genreCount.value, 10));\n    });\n    return {\n        labels,\n        data\n    };\n};\nconst generateColors = (count)=>Array.from({\n        length: count\n    }, ()=>\"hsl(\".concat(Math.random() * 360, \", 70%, 60%)\"));\nvar _c;\n$RefreshReg$(_c, \"PieChart\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9QaWVDaGFydC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWtDO0FBQ2tCO0FBRXJDLFNBQVNJLFNBQVMsS0FBWTtRQUFaLEVBQUVDLFFBQVEsRUFBRSxHQUFaOztJQUM3QixNQUFNQyxXQUFXSiw2Q0FBTUEsQ0FBQztJQUN4QixNQUFNLENBQUNLLFdBQVdDLGFBQWEsR0FBR0wsK0NBQVFBLENBQUM7SUFDM0MsTUFBTSxDQUFDTSxjQUFjQyxnQkFBZ0IsR0FBR1AsK0NBQVFBLENBQUM7SUFFakRGLGdEQUFTQTs4QkFBQztZQUNOLElBQUksQ0FBQ0ksVUFBVTtZQUVmLE1BQU0sRUFBRU0sTUFBTSxFQUFFQyxJQUFJLEVBQUUsR0FBR0MsaUJBQWlCUjtZQUUxQyxNQUFNUyxnQkFBZ0JkLHFEQUFLQSxDQUFDZSxRQUFRLENBQUNULFNBQVNVLE9BQU87WUFDckQsSUFBSUYsZUFBZTtnQkFDZkEsY0FBY0csT0FBTztZQUN6QjtZQUVBLElBQUlqQixxREFBS0EsQ0FBQ00sU0FBU1UsT0FBTyxFQUFFO2dCQUN4QkUsTUFBTVg7Z0JBQ05LLE1BQU07b0JBQ0ZEO29CQUNBUSxVQUFVO3dCQUNOOzRCQUNJQyxPQUFPOzRCQUNQUjs0QkFDQVMsaUJBQWlCQyxlQUFlWCxPQUFPWSxNQUFNOzRCQUM3Q0MsYUFBYTt3QkFDakI7cUJBQ0g7Z0JBQ0w7WUFXSjtZQUVBZCxnQkFBZ0I7UUFDcEI7NkJBQUc7UUFBQ0w7UUFBVUU7S0FBVSxHQUFHLDZDQUE2QztJQUV4RSxNQUFNa0Isa0JBQWtCO1FBQ3BCakIsYUFBYSxDQUFDa0IsV0FBY0EsYUFBYSxRQUFRLFFBQVE7SUFDN0Q7SUFFQSxxQkFDSTs7MEJBQ0ksOERBQUNDO2dCQUNHQyxXQUFVO2dCQUNWQyxTQUFTSjtnQkFDVEssVUFBVXJCOzBCQUVURixjQUFjLFFBQVEsUUFBUTs7Ozs7OzBCQUVuQyw4REFBQ3dCO2dCQUFPQyxLQUFLMUI7Ozs7Ozs7O0FBR3pCO0dBM0R3QkY7S0FBQUE7QUE2RHhCLE1BQU1TLG1CQUFtQixDQUFDUjtJQUN0QixNQUFNTSxTQUFTLEVBQUU7SUFDakIsTUFBTUMsT0FBTyxFQUFFO0lBRWZQLFNBQVM0QixPQUFPLENBQUNDLFFBQVEsQ0FBQ0MsT0FBTyxDQUFDLENBQUNDO1FBQy9CekIsT0FBTzBCLElBQUksQ0FBQ0QsS0FBS0Usa0JBQWtCLENBQUNDLEtBQUs7UUFDekMzQixLQUFLeUIsSUFBSSxDQUFDRyxTQUFTSixLQUFLSyxVQUFVLENBQUNGLEtBQUssRUFBRTtJQUM5QztJQUVBLE9BQU87UUFBRTVCO1FBQVFDO0lBQUs7QUFDMUI7QUFFQSxNQUFNVSxpQkFBaUIsQ0FBQ29CLFFBQ3BCQyxNQUFNQyxJQUFJLENBQUM7UUFBRXJCLFFBQVFtQjtJQUFNLEdBQUcsSUFBTSxPQUEyQixPQUFwQkcsS0FBS0MsTUFBTSxLQUFLLEtBQUkiLCJzb3VyY2VzIjpbIi9Vc2Vycy9hdWd1c3Rpbi9Eb2N1bWVudHMvQ291cnMvQlVUX2luZm8vUzUvQkQvcHJvamV0L2JlZXIvc3JjL2FwcC9jb21wb25lbnRzL1BpZUNoYXJ0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDaGFydCBmcm9tICdjaGFydC5qcy9hdXRvJztcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQaWVDaGFydCh7IGpzb25EYXRhIH0pIHtcbiAgICBjb25zdCBjaGFydFJlZiA9IHVzZVJlZihudWxsKTtcbiAgICBjb25zdCBbY2hhcnRUeXBlLCBzZXRDaGFydFR5cGVdID0gdXNlU3RhdGUoXCJiYXJcIik7XG4gICAgY29uc3QgW2lzQ2hhcnRSZWFkeSwgc2V0SXNDaGFydFJlYWR5XSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmICghanNvbkRhdGEpIHJldHVybjtcblxuICAgICAgICBjb25zdCB7IGxhYmVscywgZGF0YSB9ID0gcHJvY2Vzc0NoYXJ0RGF0YShqc29uRGF0YSk7XG5cbiAgICAgICAgY29uc3QgZXhpc3RpbmdDaGFydCA9IENoYXJ0LmdldENoYXJ0KGNoYXJ0UmVmLmN1cnJlbnQpO1xuICAgICAgICBpZiAoZXhpc3RpbmdDaGFydCkge1xuICAgICAgICAgICAgZXhpc3RpbmdDaGFydC5kZXN0cm95KCk7XG4gICAgICAgIH1cblxuICAgICAgICBuZXcgQ2hhcnQoY2hhcnRSZWYuY3VycmVudCwge1xuICAgICAgICAgICAgdHlwZTogY2hhcnRUeXBlLFxuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIGxhYmVscyxcbiAgICAgICAgICAgICAgICBkYXRhc2V0czogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJXaW5uaW5nIEdlbnJlc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogZ2VuZXJhdGVDb2xvcnMobGFiZWxzLmxlbmd0aCksXG4gICAgICAgICAgICAgICAgICAgICAgICBob3Zlck9mZnNldDogNCxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8vIG9wdGlvbnM6IHtcbiAgICAgICAgICAgIC8vICAgICBsYXlvdXQ6IHtcbiAgICAgICAgICAgIC8vICAgICAgICAgcGFkZGluZzoge1xuICAgICAgICAgICAgLy8gICAgICAgICAgICAgdG9wOiBjaGFydFJlZi5jdXJyZW50LmNsaWVudEhlaWdodCAqIDAuNTAsXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICBib3R0b206IGNoYXJ0UmVmLmN1cnJlbnQuY2xpZW50SGVpZ2h0ICogMC4zNSxcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIGxlZnQ6IGNoYXJ0UmVmLmN1cnJlbnQuY2xpZW50V2lkdGggKiAwLjUwLFxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgcmlnaHQ6IGNoYXJ0UmVmLmN1cnJlbnQuY2xpZW50V2lkdGggKiAwLjUwLFxuICAgICAgICAgICAgLy8gICAgICAgICB9LFxuICAgICAgICAgICAgLy8gICAgIH0sXG4gICAgICAgICAgICAvLyB9LFxuICAgICAgICB9KTtcblxuICAgICAgICBzZXRJc0NoYXJ0UmVhZHkodHJ1ZSk7XG4gICAgfSwgW2pzb25EYXRhLCBjaGFydFR5cGVdKTsgLy8gdXBkYXRlIGlmIGBqc29uRGF0YWAgb3IgYGNoYXJ0VHlwZWAgY2hhbmdlXG5cbiAgICBjb25zdCB0b2dnbGVDaGFydFR5cGUgPSAoKSA9PiB7XG4gICAgICAgIHNldENoYXJ0VHlwZSgocHJldlR5cGUpID0+IChwcmV2VHlwZSA9PT0gXCJiYXJcIiA/IFwicGllXCIgOiBcImJhclwiKSk7XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2hhcnQtdHlwZVwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17dG9nZ2xlQ2hhcnRUeXBlfVxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXtpc0NoYXJ0UmVhZHl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2NoYXJ0VHlwZSA9PT0gXCJiYXJcIiA/IFwiUGllXCIgOiBcIkJhclwifVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8Y2FudmFzIHJlZj17Y2hhcnRSZWZ9PjwvY2FudmFzPlxuICAgICAgICA8Lz5cbiAgICApO1xufVxuXG5jb25zdCBwcm9jZXNzQ2hhcnREYXRhID0gKGpzb25EYXRhKSA9PiB7XG4gICAgY29uc3QgbGFiZWxzID0gW107XG4gICAgY29uc3QgZGF0YSA9IFtdO1xuXG4gICAganNvbkRhdGEucmVzdWx0cy5iaW5kaW5ncy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgIGxhYmVscy5wdXNoKGl0ZW0ud2lraWRhdGFHZW5yZUxhYmVsLnZhbHVlKTtcbiAgICAgICAgZGF0YS5wdXNoKHBhcnNlSW50KGl0ZW0uZ2VucmVDb3VudC52YWx1ZSwgMTApKTtcbiAgICB9KTtcblxuICAgIHJldHVybiB7IGxhYmVscywgZGF0YSB9O1xufTtcblxuY29uc3QgZ2VuZXJhdGVDb2xvcnMgPSAoY291bnQpID0+XG4gICAgQXJyYXkuZnJvbSh7IGxlbmd0aDogY291bnQgfSwgKCkgPT4gYGhzbCgke01hdGgucmFuZG9tKCkgKiAzNjB9LCA3MCUsIDYwJSlgKTtcbiJdLCJuYW1lcyI6WyJDaGFydCIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwiUGllQ2hhcnQiLCJqc29uRGF0YSIsImNoYXJ0UmVmIiwiY2hhcnRUeXBlIiwic2V0Q2hhcnRUeXBlIiwiaXNDaGFydFJlYWR5Iiwic2V0SXNDaGFydFJlYWR5IiwibGFiZWxzIiwiZGF0YSIsInByb2Nlc3NDaGFydERhdGEiLCJleGlzdGluZ0NoYXJ0IiwiZ2V0Q2hhcnQiLCJjdXJyZW50IiwiZGVzdHJveSIsInR5cGUiLCJkYXRhc2V0cyIsImxhYmVsIiwiYmFja2dyb3VuZENvbG9yIiwiZ2VuZXJhdGVDb2xvcnMiLCJsZW5ndGgiLCJob3Zlck9mZnNldCIsInRvZ2dsZUNoYXJ0VHlwZSIsInByZXZUeXBlIiwiYnV0dG9uIiwiY2xhc3NOYW1lIiwib25DbGljayIsImRpc2FibGVkIiwiY2FudmFzIiwicmVmIiwicmVzdWx0cyIsImJpbmRpbmdzIiwiZm9yRWFjaCIsIml0ZW0iLCJwdXNoIiwid2lraWRhdGFHZW5yZUxhYmVsIiwidmFsdWUiLCJwYXJzZUludCIsImdlbnJlQ291bnQiLCJjb3VudCIsIkFycmF5IiwiZnJvbSIsIk1hdGgiLCJyYW5kb20iXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/PieChart.js\n"));

/***/ })

});