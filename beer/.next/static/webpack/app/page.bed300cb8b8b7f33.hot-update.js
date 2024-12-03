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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ PieChart)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var chart_js_auto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chart.js/auto */ \"(app-pages-browser)/./node_modules/chart.js/auto/auto.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nfunction PieChart(param) {\n    let { jsonData } = param;\n    _s();\n    const chartRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)({\n        \"PieChart.useEffect\": ()=>{\n            if (!jsonData) return;\n            const { labels, data } = processChartData(jsonData);\n            const chart = new chart_js_auto__WEBPACK_IMPORTED_MODULE_1__[\"default\"](chartRef.current, {\n                type: \"bar\",\n                data: {\n                    labels,\n                    datasets: [\n                        {\n                            label: \"Winning Genres\",\n                            data,\n                            backgroundColor: generateColors(labels.length),\n                            hoverOffset: 4\n                        }\n                    ]\n                },\n                options: {\n                    layout: {\n                        padding: {\n                            top: chartRef.current.clientHeight * 0.50,\n                            bottom: chartRef.current.clientHeight * 0.35,\n                            left: chartRef.current.clientWidth * 0.50,\n                            right: chartRef.current.clientWidth * 0.50\n                        }\n                    }\n                }\n            });\n            return ({\n                \"PieChart.useEffect\": ()=>{\n                    chart.destroy();\n                }\n            })[\"PieChart.useEffect\"];\n        }\n    }[\"PieChart.useEffect\"], [\n        jsonData\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: true\n            }, void 0, false, {\n                fileName: \"/Users/augustin/Documents/Cours/BUT_info/S5/BD/projet/beer/src/app/components/PieChart.js\",\n                lineNumber: 45,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"canvas\", {\n                ref: chartRef\n            }, void 0, false, {\n                fileName: \"/Users/augustin/Documents/Cours/BUT_info/S5/BD/projet/beer/src/app/components/PieChart.js\",\n                lineNumber: 46,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/augustin/Documents/Cours/BUT_info/S5/BD/projet/beer/src/app/components/PieChart.js\",\n        lineNumber: 44,\n        columnNumber: 9\n    }, this);\n}\n_s(PieChart, \"X+1SfQQ6xefXNU27aQW843M7cTw=\");\n_c = PieChart;\nconst processChartData = (jsonData)=>{\n    const labels = [];\n    const data = [];\n    jsonData.results.bindings.forEach((item)=>{\n        labels.push(item.wikidataGenreLabel.value);\n        data.push(parseInt(item.genreCount.value, 10));\n    });\n    return {\n        labels,\n        data\n    };\n};\nconst generateColors = (count)=>Array.from({\n        length: count\n    }, ()=>\"hsl(\".concat(Math.random() * 360, \", 70%, 60%)\"));\nvar _c;\n$RefreshReg$(_c, \"PieChart\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9QaWVDaGFydC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWtDO0FBQ1E7QUFFM0IsU0FBU0csU0FBUyxLQUFZO1FBQVosRUFBRUMsUUFBUSxFQUFFLEdBQVo7O0lBQzdCLE1BQU1DLFdBQVdILDZDQUFNQSxDQUFDO0lBRXhCRCxnREFBU0E7OEJBQUM7WUFDTixJQUFJLENBQUNHLFVBQVU7WUFFZixNQUFNLEVBQUVFLE1BQU0sRUFBRUMsSUFBSSxFQUFFLEdBQUdDLGlCQUFpQko7WUFFMUMsTUFBTUssUUFBUSxJQUFJVCxxREFBS0EsQ0FBQ0ssU0FBU0ssT0FBTyxFQUFFO2dCQUN0Q0MsTUFBTTtnQkFDTkosTUFBTTtvQkFDRkQ7b0JBQ0FNLFVBQVU7d0JBQ047NEJBQ0lDLE9BQU87NEJBQ1BOOzRCQUNBTyxpQkFBaUJDLGVBQWVULE9BQU9VLE1BQU07NEJBQzdDQyxhQUFhO3dCQUNqQjtxQkFDSDtnQkFDTDtnQkFDQUMsU0FBUztvQkFDTEMsUUFBUTt3QkFDSkMsU0FBUzs0QkFDTEMsS0FBS2hCLFNBQVNLLE9BQU8sQ0FBQ1ksWUFBWSxHQUFHOzRCQUNyQ0MsUUFBUWxCLFNBQVNLLE9BQU8sQ0FBQ1ksWUFBWSxHQUFHOzRCQUN4Q0UsTUFBTW5CLFNBQVNLLE9BQU8sQ0FBQ2UsV0FBVyxHQUFHOzRCQUNyQ0MsT0FBT3JCLFNBQVNLLE9BQU8sQ0FBQ2UsV0FBVyxHQUFHO3dCQUMxQztvQkFDSjtnQkFDSjtZQUNKO1lBR0E7c0NBQU87b0JBQ0hoQixNQUFNa0IsT0FBTztnQkFDakI7O1FBQ0o7NkJBQUc7UUFBQ3ZCO0tBQVM7SUFFYixxQkFDSSw4REFBQ3dCOzswQkFDRyw4REFBQ0M7Z0JBQU9DLFNBQVM7Ozs7OzswQkFDakIsOERBQUNDO2dCQUFPQyxLQUFLM0I7Ozs7Ozs7Ozs7OztBQUd6QjtHQTdDd0JGO0tBQUFBO0FBK0N4QixNQUFNSyxtQkFBbUIsQ0FBQ0o7SUFDdEIsTUFBTUUsU0FBUyxFQUFFO0lBQ2pCLE1BQU1DLE9BQU8sRUFBRTtJQUVmSCxTQUFTNkIsT0FBTyxDQUFDQyxRQUFRLENBQUNDLE9BQU8sQ0FBQyxDQUFDQztRQUMvQjlCLE9BQU8rQixJQUFJLENBQUNELEtBQUtFLGtCQUFrQixDQUFDQyxLQUFLO1FBQ3pDaEMsS0FBSzhCLElBQUksQ0FBQ0csU0FBU0osS0FBS0ssVUFBVSxDQUFDRixLQUFLLEVBQUU7SUFDOUM7SUFFQSxPQUFPO1FBQUVqQztRQUFRQztJQUFLO0FBQzFCO0FBRUEsTUFBTVEsaUJBQWlCLENBQUMyQixRQUNwQkMsTUFBTUMsSUFBSSxDQUFDO1FBQUU1QixRQUFRMEI7SUFBTSxHQUFHLElBQU0sT0FBMkIsT0FBcEJHLEtBQUtDLE1BQU0sS0FBSyxLQUFJIiwic291cmNlcyI6WyIvVXNlcnMvYXVndXN0aW4vRG9jdW1lbnRzL0NvdXJzL0JVVF9pbmZvL1M1L0JEL3Byb2pldC9iZWVyL3NyYy9hcHAvY29tcG9uZW50cy9QaWVDaGFydC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2hhcnQgZnJvbSAnY2hhcnQuanMvYXV0byc7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQaWVDaGFydCh7IGpzb25EYXRhIH0pIHtcbiAgICBjb25zdCBjaGFydFJlZiA9IHVzZVJlZihudWxsKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmICghanNvbkRhdGEpIHJldHVybjtcblxuICAgICAgICBjb25zdCB7IGxhYmVscywgZGF0YSB9ID0gcHJvY2Vzc0NoYXJ0RGF0YShqc29uRGF0YSk7XG5cbiAgICAgICAgY29uc3QgY2hhcnQgPSBuZXcgQ2hhcnQoY2hhcnRSZWYuY3VycmVudCwge1xuICAgICAgICAgICAgdHlwZTogXCJiYXJcIixcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICBsYWJlbHMsXG4gICAgICAgICAgICAgICAgZGF0YXNldHM6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiV2lubmluZyBHZW5yZXNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEsXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGdlbmVyYXRlQ29sb3JzKGxhYmVscy5sZW5ndGgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgaG92ZXJPZmZzZXQ6IDQsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgbGF5b3V0OiB7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogY2hhcnRSZWYuY3VycmVudC5jbGllbnRIZWlnaHQgKiAwLjUwLFxuICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tOiBjaGFydFJlZi5jdXJyZW50LmNsaWVudEhlaWdodCAqIDAuMzUsXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiBjaGFydFJlZi5jdXJyZW50LmNsaWVudFdpZHRoICogMC41MCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiBjaGFydFJlZi5jdXJyZW50LmNsaWVudFdpZHRoICogMC41MCxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG5cblxuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgY2hhcnQuZGVzdHJveSgpO1xuICAgICAgICB9O1xuICAgIH0sIFtqc29uRGF0YV0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPjwvYnV0dG9uPlxuICAgICAgICAgICAgPGNhbnZhcyByZWY9e2NoYXJ0UmVmfT48L2NhbnZhcz5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuY29uc3QgcHJvY2Vzc0NoYXJ0RGF0YSA9IChqc29uRGF0YSkgPT4ge1xuICAgIGNvbnN0IGxhYmVscyA9IFtdO1xuICAgIGNvbnN0IGRhdGEgPSBbXTtcblxuICAgIGpzb25EYXRhLnJlc3VsdHMuYmluZGluZ3MuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICBsYWJlbHMucHVzaChpdGVtLndpa2lkYXRhR2VucmVMYWJlbC52YWx1ZSk7XG4gICAgICAgIGRhdGEucHVzaChwYXJzZUludChpdGVtLmdlbnJlQ291bnQudmFsdWUsIDEwKSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4geyBsYWJlbHMsIGRhdGEgfTtcbn07XG5cbmNvbnN0IGdlbmVyYXRlQ29sb3JzID0gKGNvdW50KSA9PlxuICAgIEFycmF5LmZyb20oeyBsZW5ndGg6IGNvdW50IH0sICgpID0+IGBoc2woJHtNYXRoLnJhbmRvbSgpICogMzYwfSwgNzAlLCA2MCUpYCk7XG4iXSwibmFtZXMiOlsiQ2hhcnQiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJQaWVDaGFydCIsImpzb25EYXRhIiwiY2hhcnRSZWYiLCJsYWJlbHMiLCJkYXRhIiwicHJvY2Vzc0NoYXJ0RGF0YSIsImNoYXJ0IiwiY3VycmVudCIsInR5cGUiLCJkYXRhc2V0cyIsImxhYmVsIiwiYmFja2dyb3VuZENvbG9yIiwiZ2VuZXJhdGVDb2xvcnMiLCJsZW5ndGgiLCJob3Zlck9mZnNldCIsIm9wdGlvbnMiLCJsYXlvdXQiLCJwYWRkaW5nIiwidG9wIiwiY2xpZW50SGVpZ2h0IiwiYm90dG9tIiwibGVmdCIsImNsaWVudFdpZHRoIiwicmlnaHQiLCJkZXN0cm95IiwiZGl2IiwiYnV0dG9uIiwiY2xhc3NOYW1lIiwiY2FudmFzIiwicmVmIiwicmVzdWx0cyIsImJpbmRpbmdzIiwiZm9yRWFjaCIsIml0ZW0iLCJwdXNoIiwid2lraWRhdGFHZW5yZUxhYmVsIiwidmFsdWUiLCJwYXJzZUludCIsImdlbnJlQ291bnQiLCJjb3VudCIsIkFycmF5IiwiZnJvbSIsIk1hdGgiLCJyYW5kb20iXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/PieChart.js\n"));

/***/ })

});