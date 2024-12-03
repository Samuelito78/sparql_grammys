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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ PieChart)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var chart_js_auto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chart.js/auto */ \"(app-pages-browser)/./node_modules/chart.js/auto/auto.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nfunction PieChart(param) {\n    let { jsonData } = param;\n    _s();\n    const chartRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    const [chatType, setChartType] = useState(\"bar\");\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)({\n        \"PieChart.useEffect\": ()=>{\n            if (!jsonData) return;\n            const { labels, data } = processChartData(jsonData);\n            const existingChart = chart_js_auto__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getChart(chartRef.current);\n            if (existingChart) {\n                existingChart.destroy();\n            }\n            const chart = new chart_js_auto__WEBPACK_IMPORTED_MODULE_1__[\"default\"](chartRef.current, {\n                type: \"bar\",\n                data: {\n                    labels,\n                    datasets: [\n                        {\n                            label: \"Winning Genres\",\n                            data,\n                            backgroundColor: generateColors(labels.length),\n                            hoverOffset: 4\n                        }\n                    ]\n                },\n                options: {\n                    layout: {\n                        padding: {\n                            top: chartRef.current.clientHeight * 0.50,\n                            bottom: chartRef.current.clientHeight * 0.35,\n                            left: chartRef.current.clientWidth * 0.50,\n                            right: chartRef.current.clientWidth * 0.50\n                        }\n                    }\n                }\n            });\n            return ({\n                \"PieChart.useEffect\": ()=>{\n                    chart.destroy();\n                }\n            })[\"PieChart.useEffect\"];\n        }\n    }[\"PieChart.useEffect\"], [\n        jsonData\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {}, void 0, false, {\n                fileName: \"/Users/augustin/Documents/Cours/BUT_info/S5/BD/projet/beer/src/app/components/PieChart.js\",\n                lineNumber: 51,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"canvas\", {\n                ref: chartRef\n            }, void 0, false, {\n                fileName: \"/Users/augustin/Documents/Cours/BUT_info/S5/BD/projet/beer/src/app/components/PieChart.js\",\n                lineNumber: 52,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/augustin/Documents/Cours/BUT_info/S5/BD/projet/beer/src/app/components/PieChart.js\",\n        lineNumber: 50,\n        columnNumber: 9\n    }, this);\n}\n_s(PieChart, \"TQfjncL9GHXOf6T+22fNbVdvjac=\");\n_c = PieChart;\nconst processChartData = (jsonData)=>{\n    const labels = [];\n    const data = [];\n    jsonData.results.bindings.forEach((item)=>{\n        labels.push(item.wikidataGenreLabel.value);\n        data.push(parseInt(item.genreCount.value, 10));\n    });\n    return {\n        labels,\n        data\n    };\n};\nconst generateColors = (count)=>Array.from({\n        length: count\n    }, ()=>\"hsl(\".concat(Math.random() * 360, \", 70%, 60%)\"));\nvar _c;\n$RefreshReg$(_c, \"PieChart\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9QaWVDaGFydC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWtDO0FBQ1E7QUFFM0IsU0FBU0csU0FBUyxLQUFZO1FBQVosRUFBRUMsUUFBUSxFQUFFLEdBQVo7O0lBQzdCLE1BQU1DLFdBQVdILDZDQUFNQSxDQUFDO0lBQ3hCLE1BQU0sQ0FBQ0ksVUFBVUMsYUFBYSxHQUFHQyxTQUFTO0lBRTFDUCxnREFBU0E7OEJBQUM7WUFDTixJQUFJLENBQUNHLFVBQVU7WUFFZixNQUFNLEVBQUVLLE1BQU0sRUFBRUMsSUFBSSxFQUFFLEdBQUdDLGlCQUFpQlA7WUFFMUMsTUFBTVEsZ0JBQWdCWixxREFBS0EsQ0FBQ2EsUUFBUSxDQUFDUixTQUFTUyxPQUFPO1lBQ3JELElBQUlGLGVBQWU7Z0JBQ2ZBLGNBQWNHLE9BQU87WUFDekI7WUFFQSxNQUFNQyxRQUFRLElBQUloQixxREFBS0EsQ0FBQ0ssU0FBU1MsT0FBTyxFQUFFO2dCQUN0Q0csTUFBTTtnQkFDTlAsTUFBTTtvQkFDRkQ7b0JBQ0FTLFVBQVU7d0JBQ047NEJBQ0lDLE9BQU87NEJBQ1BUOzRCQUNBVSxpQkFBaUJDLGVBQWVaLE9BQU9hLE1BQU07NEJBQzdDQyxhQUFhO3dCQUNqQjtxQkFDSDtnQkFDTDtnQkFDQUMsU0FBUztvQkFDTEMsUUFBUTt3QkFDSkMsU0FBUzs0QkFDTEMsS0FBS3RCLFNBQVNTLE9BQU8sQ0FBQ2MsWUFBWSxHQUFHOzRCQUNyQ0MsUUFBUXhCLFNBQVNTLE9BQU8sQ0FBQ2MsWUFBWSxHQUFHOzRCQUN4Q0UsTUFBTXpCLFNBQVNTLE9BQU8sQ0FBQ2lCLFdBQVcsR0FBRzs0QkFDckNDLE9BQU8zQixTQUFTUyxPQUFPLENBQUNpQixXQUFXLEdBQUc7d0JBQzFDO29CQUNKO2dCQUNKO1lBQ0o7WUFHQTtzQ0FBTztvQkFDSGYsTUFBTUQsT0FBTztnQkFDakI7O1FBQ0o7NkJBQUc7UUFBQ1g7S0FBUztJQUViLHFCQUNJLDhEQUFDNkI7OzBCQUNHLDhEQUFDQzs7Ozs7MEJBQ0QsOERBQUNDO2dCQUFPQyxLQUFLL0I7Ozs7Ozs7Ozs7OztBQUd6QjtHQW5Ed0JGO0tBQUFBO0FBcUR4QixNQUFNUSxtQkFBbUIsQ0FBQ1A7SUFDdEIsTUFBTUssU0FBUyxFQUFFO0lBQ2pCLE1BQU1DLE9BQU8sRUFBRTtJQUVmTixTQUFTaUMsT0FBTyxDQUFDQyxRQUFRLENBQUNDLE9BQU8sQ0FBQyxDQUFDQztRQUMvQi9CLE9BQU9nQyxJQUFJLENBQUNELEtBQUtFLGtCQUFrQixDQUFDQyxLQUFLO1FBQ3pDakMsS0FBSytCLElBQUksQ0FBQ0csU0FBU0osS0FBS0ssVUFBVSxDQUFDRixLQUFLLEVBQUU7SUFDOUM7SUFFQSxPQUFPO1FBQUVsQztRQUFRQztJQUFLO0FBQzFCO0FBRUEsTUFBTVcsaUJBQWlCLENBQUN5QixRQUNwQkMsTUFBTUMsSUFBSSxDQUFDO1FBQUUxQixRQUFRd0I7SUFBTSxHQUFHLElBQU0sT0FBMkIsT0FBcEJHLEtBQUtDLE1BQU0sS0FBSyxLQUFJIiwic291cmNlcyI6WyIvVXNlcnMvYXVndXN0aW4vRG9jdW1lbnRzL0NvdXJzL0JVVF9pbmZvL1M1L0JEL3Byb2pldC9iZWVyL3NyYy9hcHAvY29tcG9uZW50cy9QaWVDaGFydC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2hhcnQgZnJvbSAnY2hhcnQuanMvYXV0byc7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQaWVDaGFydCh7IGpzb25EYXRhIH0pIHtcbiAgICBjb25zdCBjaGFydFJlZiA9IHVzZVJlZihudWxsKTtcbiAgICBjb25zdCBbY2hhdFR5cGUsIHNldENoYXJ0VHlwZV0gPSB1c2VTdGF0ZShcImJhclwiKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmICghanNvbkRhdGEpIHJldHVybjtcblxuICAgICAgICBjb25zdCB7IGxhYmVscywgZGF0YSB9ID0gcHJvY2Vzc0NoYXJ0RGF0YShqc29uRGF0YSk7XG5cbiAgICAgICAgY29uc3QgZXhpc3RpbmdDaGFydCA9IENoYXJ0LmdldENoYXJ0KGNoYXJ0UmVmLmN1cnJlbnQpO1xuICAgICAgICBpZiAoZXhpc3RpbmdDaGFydCkge1xuICAgICAgICAgICAgZXhpc3RpbmdDaGFydC5kZXN0cm95KCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjaGFydCA9IG5ldyBDaGFydChjaGFydFJlZi5jdXJyZW50LCB7XG4gICAgICAgICAgICB0eXBlOiBcImJhclwiLFxuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIGxhYmVscyxcbiAgICAgICAgICAgICAgICBkYXRhc2V0czogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJXaW5uaW5nIEdlbnJlc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogZ2VuZXJhdGVDb2xvcnMobGFiZWxzLmxlbmd0aCksXG4gICAgICAgICAgICAgICAgICAgICAgICBob3Zlck9mZnNldDogNCxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICBsYXlvdXQ6IHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiBjaGFydFJlZi5jdXJyZW50LmNsaWVudEhlaWdodCAqIDAuNTAsXG4gICAgICAgICAgICAgICAgICAgICAgICBib3R0b206IGNoYXJ0UmVmLmN1cnJlbnQuY2xpZW50SGVpZ2h0ICogMC4zNSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IGNoYXJ0UmVmLmN1cnJlbnQuY2xpZW50V2lkdGggKiAwLjUwLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IGNoYXJ0UmVmLmN1cnJlbnQuY2xpZW50V2lkdGggKiAwLjUwLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcblxuXG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICBjaGFydC5kZXN0cm95KCk7XG4gICAgICAgIH07XG4gICAgfSwgW2pzb25EYXRhXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGJ1dHRvbj57IH08L2J1dHRvbj5cbiAgICAgICAgICAgIDxjYW52YXMgcmVmPXtjaGFydFJlZn0+PC9jYW52YXM+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmNvbnN0IHByb2Nlc3NDaGFydERhdGEgPSAoanNvbkRhdGEpID0+IHtcbiAgICBjb25zdCBsYWJlbHMgPSBbXTtcbiAgICBjb25zdCBkYXRhID0gW107XG5cbiAgICBqc29uRGF0YS5yZXN1bHRzLmJpbmRpbmdzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgbGFiZWxzLnB1c2goaXRlbS53aWtpZGF0YUdlbnJlTGFiZWwudmFsdWUpO1xuICAgICAgICBkYXRhLnB1c2gocGFyc2VJbnQoaXRlbS5nZW5yZUNvdW50LnZhbHVlLCAxMCkpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHsgbGFiZWxzLCBkYXRhIH07XG59O1xuXG5jb25zdCBnZW5lcmF0ZUNvbG9ycyA9IChjb3VudCkgPT5cbiAgICBBcnJheS5mcm9tKHsgbGVuZ3RoOiBjb3VudCB9LCAoKSA9PiBgaHNsKCR7TWF0aC5yYW5kb20oKSAqIDM2MH0sIDcwJSwgNjAlKWApO1xuIl0sIm5hbWVzIjpbIkNoYXJ0IiwidXNlRWZmZWN0IiwidXNlUmVmIiwiUGllQ2hhcnQiLCJqc29uRGF0YSIsImNoYXJ0UmVmIiwiY2hhdFR5cGUiLCJzZXRDaGFydFR5cGUiLCJ1c2VTdGF0ZSIsImxhYmVscyIsImRhdGEiLCJwcm9jZXNzQ2hhcnREYXRhIiwiZXhpc3RpbmdDaGFydCIsImdldENoYXJ0IiwiY3VycmVudCIsImRlc3Ryb3kiLCJjaGFydCIsInR5cGUiLCJkYXRhc2V0cyIsImxhYmVsIiwiYmFja2dyb3VuZENvbG9yIiwiZ2VuZXJhdGVDb2xvcnMiLCJsZW5ndGgiLCJob3Zlck9mZnNldCIsIm9wdGlvbnMiLCJsYXlvdXQiLCJwYWRkaW5nIiwidG9wIiwiY2xpZW50SGVpZ2h0IiwiYm90dG9tIiwibGVmdCIsImNsaWVudFdpZHRoIiwicmlnaHQiLCJkaXYiLCJidXR0b24iLCJjYW52YXMiLCJyZWYiLCJyZXN1bHRzIiwiYmluZGluZ3MiLCJmb3JFYWNoIiwiaXRlbSIsInB1c2giLCJ3aWtpZGF0YUdlbnJlTGFiZWwiLCJ2YWx1ZSIsInBhcnNlSW50IiwiZ2VucmVDb3VudCIsImNvdW50IiwiQXJyYXkiLCJmcm9tIiwiTWF0aCIsInJhbmRvbSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/PieChart.js\n"));

/***/ })

});