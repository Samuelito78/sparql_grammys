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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ PieChart)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var chart_js_auto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chart.js/auto */ \"(app-pages-browser)/./node_modules/chart.js/auto/auto.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nfunction PieChart(param) {\n    let { jsonData } = param;\n    _s();\n    const chartRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    const [chartType, setChartType] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"bar\");\n    const [isChartReady, setIsChartReady] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)({\n        \"PieChart.useEffect\": ()=>{\n            if (!jsonData) return;\n            const { labels, data } = processChartData(jsonData);\n            const existingChart = chart_js_auto__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getChart(chartRef.current);\n            if (existingChart) {\n                existingChart.destroy();\n            }\n            new chart_js_auto__WEBPACK_IMPORTED_MODULE_1__[\"default\"](chartRef.current, {\n                type: chartType,\n                data: {\n                    labels,\n                    datasets: [\n                        {\n                            label: \"Winning Genres\",\n                            data,\n                            backgroundColor: generateColors(labels.length),\n                            hoverOffset: 4\n                        }\n                    ]\n                }\n            });\n            setIsChartReady(true);\n        }\n    }[\"PieChart.useEffect\"], [\n        jsonData,\n        chartType\n    ]); // update if `jsonData` or `chartType` change\n    const toggleChartType = ()=>{\n        setChartType((prevType)=>prevType === \"bar\" ? \"pie\" : \"bar\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"chart-type\",\n                onClick: toggleChartType,\n                disabled: isChartReady ? \"false\" : \"true\",\n                children: chartType === \"bar\" ? \"Pie\" : \"Bar\"\n            }, void 0, false, {\n                fileName: \"/Users/augustin/Documents/Cours/BUT_info/S5/BD/projet/beer/src/app/components/PieChart.js\",\n                lineNumber: 53,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"canvas\", {\n                ref: chartRef\n            }, void 0, false, {\n                fileName: \"/Users/augustin/Documents/Cours/BUT_info/S5/BD/projet/beer/src/app/components/PieChart.js\",\n                lineNumber: 60,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(PieChart, \"S04j1af0LDQ3zcxIAeKYZlLk8NY=\");\n_c = PieChart;\nconst processChartData = (jsonData)=>{\n    const labels = [];\n    const data = [];\n    jsonData.results.bindings.forEach((item)=>{\n        labels.push(item.wikidataGenreLabel.value);\n        data.push(parseInt(item.genreCount.value, 10));\n    });\n    return {\n        labels,\n        data\n    };\n};\nconst generateColors = (count)=>Array.from({\n        length: count\n    }, ()=>\"hsl(\".concat(Math.random() * 360, \", 70%, 60%)\"));\nvar _c;\n$RefreshReg$(_c, \"PieChart\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9QaWVDaGFydC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWtDO0FBQ2tCO0FBRXJDLFNBQVNJLFNBQVMsS0FBWTtRQUFaLEVBQUVDLFFBQVEsRUFBRSxHQUFaOztJQUM3QixNQUFNQyxXQUFXSiw2Q0FBTUEsQ0FBQztJQUN4QixNQUFNLENBQUNLLFdBQVdDLGFBQWEsR0FBR0wsK0NBQVFBLENBQUM7SUFDM0MsTUFBTSxDQUFDTSxjQUFjQyxnQkFBZ0IsR0FBR1AsK0NBQVFBLENBQUM7SUFFakRGLGdEQUFTQTs4QkFBQztZQUNOLElBQUksQ0FBQ0ksVUFBVTtZQUVmLE1BQU0sRUFBRU0sTUFBTSxFQUFFQyxJQUFJLEVBQUUsR0FBR0MsaUJBQWlCUjtZQUUxQyxNQUFNUyxnQkFBZ0JkLHFEQUFLQSxDQUFDZSxRQUFRLENBQUNULFNBQVNVLE9BQU87WUFDckQsSUFBSUYsZUFBZTtnQkFDZkEsY0FBY0csT0FBTztZQUN6QjtZQUVBLElBQUlqQixxREFBS0EsQ0FBQ00sU0FBU1UsT0FBTyxFQUFFO2dCQUN4QkUsTUFBTVg7Z0JBQ05LLE1BQU07b0JBQ0ZEO29CQUNBUSxVQUFVO3dCQUNOOzRCQUNJQyxPQUFPOzRCQUNQUjs0QkFDQVMsaUJBQWlCQyxlQUFlWCxPQUFPWSxNQUFNOzRCQUM3Q0MsYUFBYTt3QkFDakI7cUJBQ0g7Z0JBQ0w7WUFXSjtZQUVBZCxnQkFBZ0I7UUFDcEI7NkJBQUc7UUFBQ0w7UUFBVUU7S0FBVSxHQUFHLDZDQUE2QztJQUV4RSxNQUFNa0Isa0JBQWtCO1FBQ3BCakIsYUFBYSxDQUFDa0IsV0FBY0EsYUFBYSxRQUFRLFFBQVE7SUFDN0Q7SUFFQSxxQkFDSTs7MEJBQ0ksOERBQUNDO2dCQUNHQyxXQUFVO2dCQUNWQyxTQUFTSjtnQkFDVEssVUFBVXJCLGVBQWUsVUFBVTswQkFFbENGLGNBQWMsUUFBUSxRQUFROzs7Ozs7MEJBRW5DLDhEQUFDd0I7Z0JBQU9DLEtBQUsxQjs7Ozs7Ozs7QUFHekI7R0EzRHdCRjtLQUFBQTtBQTZEeEIsTUFBTVMsbUJBQW1CLENBQUNSO0lBQ3RCLE1BQU1NLFNBQVMsRUFBRTtJQUNqQixNQUFNQyxPQUFPLEVBQUU7SUFFZlAsU0FBUzRCLE9BQU8sQ0FBQ0MsUUFBUSxDQUFDQyxPQUFPLENBQUMsQ0FBQ0M7UUFDL0J6QixPQUFPMEIsSUFBSSxDQUFDRCxLQUFLRSxrQkFBa0IsQ0FBQ0MsS0FBSztRQUN6QzNCLEtBQUt5QixJQUFJLENBQUNHLFNBQVNKLEtBQUtLLFVBQVUsQ0FBQ0YsS0FBSyxFQUFFO0lBQzlDO0lBRUEsT0FBTztRQUFFNUI7UUFBUUM7SUFBSztBQUMxQjtBQUVBLE1BQU1VLGlCQUFpQixDQUFDb0IsUUFDcEJDLE1BQU1DLElBQUksQ0FBQztRQUFFckIsUUFBUW1CO0lBQU0sR0FBRyxJQUFNLE9BQTJCLE9BQXBCRyxLQUFLQyxNQUFNLEtBQUssS0FBSSIsInNvdXJjZXMiOlsiL1VzZXJzL2F1Z3VzdGluL0RvY3VtZW50cy9Db3Vycy9CVVRfaW5mby9TNS9CRC9wcm9qZXQvYmVlci9zcmMvYXBwL2NvbXBvbmVudHMvUGllQ2hhcnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENoYXJ0IGZyb20gJ2NoYXJ0LmpzL2F1dG8nO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBpZUNoYXJ0KHsganNvbkRhdGEgfSkge1xuICAgIGNvbnN0IGNoYXJ0UmVmID0gdXNlUmVmKG51bGwpO1xuICAgIGNvbnN0IFtjaGFydFR5cGUsIHNldENoYXJ0VHlwZV0gPSB1c2VTdGF0ZShcImJhclwiKTtcbiAgICBjb25zdCBbaXNDaGFydFJlYWR5LCBzZXRJc0NoYXJ0UmVhZHldID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKCFqc29uRGF0YSkgcmV0dXJuO1xuXG4gICAgICAgIGNvbnN0IHsgbGFiZWxzLCBkYXRhIH0gPSBwcm9jZXNzQ2hhcnREYXRhKGpzb25EYXRhKTtcblxuICAgICAgICBjb25zdCBleGlzdGluZ0NoYXJ0ID0gQ2hhcnQuZ2V0Q2hhcnQoY2hhcnRSZWYuY3VycmVudCk7XG4gICAgICAgIGlmIChleGlzdGluZ0NoYXJ0KSB7XG4gICAgICAgICAgICBleGlzdGluZ0NoYXJ0LmRlc3Ryb3koKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG5ldyBDaGFydChjaGFydFJlZi5jdXJyZW50LCB7XG4gICAgICAgICAgICB0eXBlOiBjaGFydFR5cGUsXG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgbGFiZWxzLFxuICAgICAgICAgICAgICAgIGRhdGFzZXRzOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIldpbm5pbmcgR2VucmVzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLFxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBnZW5lcmF0ZUNvbG9ycyhsYWJlbHMubGVuZ3RoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhvdmVyT2Zmc2V0OiA0LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy8gb3B0aW9uczoge1xuICAgICAgICAgICAgLy8gICAgIGxheW91dDoge1xuICAgICAgICAgICAgLy8gICAgICAgICBwYWRkaW5nOiB7XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICB0b3A6IGNoYXJ0UmVmLmN1cnJlbnQuY2xpZW50SGVpZ2h0ICogMC41MCxcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIGJvdHRvbTogY2hhcnRSZWYuY3VycmVudC5jbGllbnRIZWlnaHQgKiAwLjM1LFxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgbGVmdDogY2hhcnRSZWYuY3VycmVudC5jbGllbnRXaWR0aCAqIDAuNTAsXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICByaWdodDogY2hhcnRSZWYuY3VycmVudC5jbGllbnRXaWR0aCAqIDAuNTAsXG4gICAgICAgICAgICAvLyAgICAgICAgIH0sXG4gICAgICAgICAgICAvLyAgICAgfSxcbiAgICAgICAgICAgIC8vIH0sXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHNldElzQ2hhcnRSZWFkeSh0cnVlKTtcbiAgICB9LCBbanNvbkRhdGEsIGNoYXJ0VHlwZV0pOyAvLyB1cGRhdGUgaWYgYGpzb25EYXRhYCBvciBgY2hhcnRUeXBlYCBjaGFuZ2VcblxuICAgIGNvbnN0IHRvZ2dsZUNoYXJ0VHlwZSA9ICgpID0+IHtcbiAgICAgICAgc2V0Q2hhcnRUeXBlKChwcmV2VHlwZSkgPT4gKHByZXZUeXBlID09PSBcImJhclwiID8gXCJwaWVcIiA6IFwiYmFyXCIpKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjaGFydC10eXBlXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVDaGFydFR5cGV9XG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2lzQ2hhcnRSZWFkeSA/IFwiZmFsc2VcIiA6IFwidHJ1ZVwifVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtjaGFydFR5cGUgPT09IFwiYmFyXCIgPyBcIlBpZVwiIDogXCJCYXJcIn1cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGNhbnZhcyByZWY9e2NoYXJ0UmVmfT48L2NhbnZhcz5cbiAgICAgICAgPC8+XG4gICAgKTtcbn1cblxuY29uc3QgcHJvY2Vzc0NoYXJ0RGF0YSA9IChqc29uRGF0YSkgPT4ge1xuICAgIGNvbnN0IGxhYmVscyA9IFtdO1xuICAgIGNvbnN0IGRhdGEgPSBbXTtcblxuICAgIGpzb25EYXRhLnJlc3VsdHMuYmluZGluZ3MuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICBsYWJlbHMucHVzaChpdGVtLndpa2lkYXRhR2VucmVMYWJlbC52YWx1ZSk7XG4gICAgICAgIGRhdGEucHVzaChwYXJzZUludChpdGVtLmdlbnJlQ291bnQudmFsdWUsIDEwKSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4geyBsYWJlbHMsIGRhdGEgfTtcbn07XG5cbmNvbnN0IGdlbmVyYXRlQ29sb3JzID0gKGNvdW50KSA9PlxuICAgIEFycmF5LmZyb20oeyBsZW5ndGg6IGNvdW50IH0sICgpID0+IGBoc2woJHtNYXRoLnJhbmRvbSgpICogMzYwfSwgNzAlLCA2MCUpYCk7XG4iXSwibmFtZXMiOlsiQ2hhcnQiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIlBpZUNoYXJ0IiwianNvbkRhdGEiLCJjaGFydFJlZiIsImNoYXJ0VHlwZSIsInNldENoYXJ0VHlwZSIsImlzQ2hhcnRSZWFkeSIsInNldElzQ2hhcnRSZWFkeSIsImxhYmVscyIsImRhdGEiLCJwcm9jZXNzQ2hhcnREYXRhIiwiZXhpc3RpbmdDaGFydCIsImdldENoYXJ0IiwiY3VycmVudCIsImRlc3Ryb3kiLCJ0eXBlIiwiZGF0YXNldHMiLCJsYWJlbCIsImJhY2tncm91bmRDb2xvciIsImdlbmVyYXRlQ29sb3JzIiwibGVuZ3RoIiwiaG92ZXJPZmZzZXQiLCJ0b2dnbGVDaGFydFR5cGUiLCJwcmV2VHlwZSIsImJ1dHRvbiIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJkaXNhYmxlZCIsImNhbnZhcyIsInJlZiIsInJlc3VsdHMiLCJiaW5kaW5ncyIsImZvckVhY2giLCJpdGVtIiwicHVzaCIsIndpa2lkYXRhR2VucmVMYWJlbCIsInZhbHVlIiwicGFyc2VJbnQiLCJnZW5yZUNvdW50IiwiY291bnQiLCJBcnJheSIsImZyb20iLCJNYXRoIiwicmFuZG9tIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/PieChart.js\n"));

/***/ })

});