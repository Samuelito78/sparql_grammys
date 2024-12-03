/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/graphdb/route";
exports.ids = ["app/api/graphdb/route"];
exports.modules = {

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fgraphdb%2Froute&page=%2Fapi%2Fgraphdb%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fgraphdb%2Froute.js&appDir=%2FUsers%2Faugustin%2FDocuments%2FCours%2FBUT_info%2FS5%2FBD%2Fprojet%2Fbeer%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Faugustin%2FDocuments%2FCours%2FBUT_info%2FS5%2FBD%2Fprojet%2Fbeer&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fgraphdb%2Froute&page=%2Fapi%2Fgraphdb%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fgraphdb%2Froute.js&appDir=%2FUsers%2Faugustin%2FDocuments%2FCours%2FBUT_info%2FS5%2FBD%2Fprojet%2Fbeer%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Faugustin%2FDocuments%2FCours%2FBUT_info%2FS5%2FBD%2Fprojet%2Fbeer&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_augustin_Documents_Cours_BUT_info_S5_BD_projet_beer_src_app_api_graphdb_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/graphdb/route.js */ \"(rsc)/./src/app/api/graphdb/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/graphdb/route\",\n        pathname: \"/api/graphdb\",\n        filename: \"route\",\n        bundlePath: \"app/api/graphdb/route\"\n    },\n    resolvedPagePath: \"/Users/augustin/Documents/Cours/BUT_info/S5/BD/projet/beer/src/app/api/graphdb/route.js\",\n    nextConfigOutput,\n    userland: _Users_augustin_Documents_Cours_BUT_info_S5_BD_projet_beer_src_app_api_graphdb_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZncmFwaGRiJTJGcm91dGUmcGFnZT0lMkZhcGklMkZncmFwaGRiJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGZ3JhcGhkYiUyRnJvdXRlLmpzJmFwcERpcj0lMkZVc2VycyUyRmF1Z3VzdGluJTJGRG9jdW1lbnRzJTJGQ291cnMlMkZCVVRfaW5mbyUyRlM1JTJGQkQlMkZwcm9qZXQlMkZiZWVyJTJGc3JjJTJGYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj0lMkZVc2VycyUyRmF1Z3VzdGluJTJGRG9jdW1lbnRzJTJGQ291cnMlMkZCVVRfaW5mbyUyRlM1JTJGQkQlMkZwcm9qZXQlMkZiZWVyJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUErRjtBQUN2QztBQUNxQjtBQUN1QztBQUNwSDtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IseUdBQW1CO0FBQzNDO0FBQ0EsY0FBYyxrRUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHNEQUFzRDtBQUM5RDtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUMwRjs7QUFFMUYiLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiL1VzZXJzL2F1Z3VzdGluL0RvY3VtZW50cy9Db3Vycy9CVVRfaW5mby9TNS9CRC9wcm9qZXQvYmVlci9zcmMvYXBwL2FwaS9ncmFwaGRiL3JvdXRlLmpzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9ncmFwaGRiL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvZ3JhcGhkYlwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvZ3JhcGhkYi9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIi9Vc2Vycy9hdWd1c3Rpbi9Eb2N1bWVudHMvQ291cnMvQlVUX2luZm8vUzUvQkQvcHJvamV0L2JlZXIvc3JjL2FwcC9hcGkvZ3JhcGhkYi9yb3V0ZS5qc1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHdvcmtBc3luY1N0b3JhZ2UsXG4gICAgICAgIHdvcmtVbml0QXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fgraphdb%2Froute&page=%2Fapi%2Fgraphdb%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fgraphdb%2Froute.js&appDir=%2FUsers%2Faugustin%2FDocuments%2FCours%2FBUT_info%2FS5%2FBD%2Fprojet%2Fbeer%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Faugustin%2FDocuments%2FCours%2FBUT_info%2FS5%2FBD%2Fprojet%2Fbeer&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(rsc)/./src/app/api/graphdb/route.js":
/*!**************************************!*\
  !*** ./src/app/api/graphdb/route.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var _utils_graphdb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/graphdb */ \"(rsc)/./src/utils/graphdb.js\");\n// src/app/api/graphdb/route.js\n\nasync function POST(req) {\n    try {\n        const { query } = await req.json();\n        if (!query) {\n            return new Response(JSON.stringify({\n                message: \"Query is required\"\n            }), {\n                status: 400,\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                }\n            });\n        }\n        const data = await (0,_utils_graphdb__WEBPACK_IMPORTED_MODULE_0__.executeSparqlQuery)(query);\n        return new Response(JSON.stringify(data), {\n            status: 200,\n            headers: {\n                \"Content-Type\": \"application/json\"\n            }\n        });\n    } catch (error) {\n        return new Response(JSON.stringify({\n            message: error.message\n        }), {\n            status: 500,\n            headers: {\n                \"Content-Type\": \"application/json\"\n            }\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9ncmFwaGRiL3JvdXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsK0JBQStCO0FBQ3NCO0FBRTlDLGVBQWVDLEtBQUtDLEdBQUc7SUFDNUIsSUFBSTtRQUNGLE1BQU0sRUFBRUMsS0FBSyxFQUFFLEdBQUcsTUFBTUQsSUFBSUUsSUFBSTtRQUVoQyxJQUFJLENBQUNELE9BQU87WUFDVixPQUFPLElBQUlFLFNBQ1RDLEtBQUtDLFNBQVMsQ0FBQztnQkFBRUMsU0FBUztZQUFvQixJQUM5QztnQkFBRUMsUUFBUTtnQkFBS0MsU0FBUztvQkFBRSxnQkFBZ0I7Z0JBQW1CO1lBQUU7UUFFbkU7UUFFQSxNQUFNQyxPQUFPLE1BQU1YLGtFQUFrQkEsQ0FBQ0c7UUFDdEMsT0FBTyxJQUFJRSxTQUFTQyxLQUFLQyxTQUFTLENBQUNJLE9BQU87WUFDeENGLFFBQVE7WUFDUkMsU0FBUztnQkFBRSxnQkFBZ0I7WUFBbUI7UUFDaEQ7SUFDRixFQUFFLE9BQU9FLE9BQU87UUFDZCxPQUFPLElBQUlQLFNBQ1RDLEtBQUtDLFNBQVMsQ0FBQztZQUFFQyxTQUFTSSxNQUFNSixPQUFPO1FBQUMsSUFDeEM7WUFBRUMsUUFBUTtZQUFLQyxTQUFTO2dCQUFFLGdCQUFnQjtZQUFtQjtRQUFFO0lBRW5FO0FBQ0YiLCJzb3VyY2VzIjpbIi9Vc2Vycy9hdWd1c3Rpbi9Eb2N1bWVudHMvQ291cnMvQlVUX2luZm8vUzUvQkQvcHJvamV0L2JlZXIvc3JjL2FwcC9hcGkvZ3JhcGhkYi9yb3V0ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBzcmMvYXBwL2FwaS9ncmFwaGRiL3JvdXRlLmpzXG5pbXBvcnQgeyBleGVjdXRlU3BhcnFsUXVlcnkgfSBmcm9tIFwiQC91dGlscy9ncmFwaGRiXCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcSkge1xuICB0cnkge1xuICAgIGNvbnN0IHsgcXVlcnkgfSA9IGF3YWl0IHJlcS5qc29uKCk7XG5cbiAgICBpZiAoIXF1ZXJ5KSB7XG4gICAgICByZXR1cm4gbmV3IFJlc3BvbnNlKFxuICAgICAgICBKU09OLnN0cmluZ2lmeSh7IG1lc3NhZ2U6IFwiUXVlcnkgaXMgcmVxdWlyZWRcIiB9KSxcbiAgICAgICAgeyBzdGF0dXM6IDQwMCwgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9IH1cbiAgICAgICk7XG4gICAgfVxuXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGV4ZWN1dGVTcGFycWxRdWVyeShxdWVyeSk7XG4gICAgcmV0dXJuIG5ldyBSZXNwb25zZShKU09OLnN0cmluZ2lmeShkYXRhKSwge1xuICAgICAgc3RhdHVzOiAyMDAsXG4gICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIG5ldyBSZXNwb25zZShcbiAgICAgIEpTT04uc3RyaW5naWZ5KHsgbWVzc2FnZTogZXJyb3IubWVzc2FnZSB9KSxcbiAgICAgIHsgc3RhdHVzOiA1MDAsIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSB9XG4gICAgKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbImV4ZWN1dGVTcGFycWxRdWVyeSIsIlBPU1QiLCJyZXEiLCJxdWVyeSIsImpzb24iLCJSZXNwb25zZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJtZXNzYWdlIiwic3RhdHVzIiwiaGVhZGVycyIsImRhdGEiLCJlcnJvciJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/graphdb/route.js\n");

/***/ }),

/***/ "(rsc)/./src/utils/graphdb.js":
/*!******************************!*\
  !*** ./src/utils/graphdb.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   executeSparqlQuery: () => (/* binding */ executeSparqlQuery)\n/* harmony export */ });\n// src/utils/graphdb.js\nconst GRAPHDB_URL = \"http://localhost:7200/repositories/aoty-soty\";\n//http://localhost:7200/repositories/grammys-sparql\nasync function executeSparqlQuery(query) {\n    const headers = {\n        \"Content-Type\": \"application/sparql-query\",\n        Accept: \"application/sparql-results+json\"\n    };\n    const response = await fetch(GRAPHDB_URL, {\n        method: \"POST\",\n        headers,\n        body: query\n    });\n    if (!response.ok) {\n        throw new Error(`GraphDB request failed: ${response.statusText}`);\n    }\n    return response.json();\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvdXRpbHMvZ3JhcGhkYi5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsdUJBQXVCO0FBQ3ZCLE1BQU1BLGNBQWM7QUFDcEIsbURBQW1EO0FBRTVDLGVBQWVDLG1CQUFtQkMsS0FBSztJQUM1QyxNQUFNQyxVQUFVO1FBQ2QsZ0JBQWdCO1FBQ2hCQyxRQUFRO0lBQ1Y7SUFFQSxNQUFNQyxXQUFXLE1BQU1DLE1BQU1OLGFBQWE7UUFDeENPLFFBQVE7UUFDUko7UUFDQUssTUFBTU47SUFDUjtJQUVBLElBQUksQ0FBQ0csU0FBU0ksRUFBRSxFQUFFO1FBQ2hCLE1BQU0sSUFBSUMsTUFBTSxDQUFDLHdCQUF3QixFQUFFTCxTQUFTTSxVQUFVLEVBQUU7SUFDbEU7SUFFQSxPQUFPTixTQUFTTyxJQUFJO0FBQ3RCIiwic291cmNlcyI6WyIvVXNlcnMvYXVndXN0aW4vRG9jdW1lbnRzL0NvdXJzL0JVVF9pbmZvL1M1L0JEL3Byb2pldC9iZWVyL3NyYy91dGlscy9ncmFwaGRiLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHNyYy91dGlscy9ncmFwaGRiLmpzXG5jb25zdCBHUkFQSERCX1VSTCA9IFwiaHR0cDovL2xvY2FsaG9zdDo3MjAwL3JlcG9zaXRvcmllcy9hb3R5LXNvdHlcIjtcbi8vaHR0cDovL2xvY2FsaG9zdDo3MjAwL3JlcG9zaXRvcmllcy9ncmFtbXlzLXNwYXJxbFxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZXhlY3V0ZVNwYXJxbFF1ZXJ5KHF1ZXJ5KSB7XG4gIGNvbnN0IGhlYWRlcnMgPSB7XG4gICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9zcGFycWwtcXVlcnlcIixcbiAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vc3BhcnFsLXJlc3VsdHMranNvblwiLFxuICB9O1xuXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goR1JBUEhEQl9VUkwsIHtcbiAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgIGhlYWRlcnMsXG4gICAgYm9keTogcXVlcnksXG4gIH0pO1xuXG4gIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYEdyYXBoREIgcmVxdWVzdCBmYWlsZWQ6ICR7cmVzcG9uc2Uuc3RhdHVzVGV4dH1gKTtcbiAgfVxuXG4gIHJldHVybiByZXNwb25zZS5qc29uKCk7XG59XG4iXSwibmFtZXMiOlsiR1JBUEhEQl9VUkwiLCJleGVjdXRlU3BhcnFsUXVlcnkiLCJxdWVyeSIsImhlYWRlcnMiLCJBY2NlcHQiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsIm9rIiwiRXJyb3IiLCJzdGF0dXNUZXh0IiwianNvbiJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/utils/graphdb.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fgraphdb%2Froute&page=%2Fapi%2Fgraphdb%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fgraphdb%2Froute.js&appDir=%2FUsers%2Faugustin%2FDocuments%2FCours%2FBUT_info%2FS5%2FBD%2Fprojet%2Fbeer%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Faugustin%2FDocuments%2FCours%2FBUT_info%2FS5%2FBD%2Fprojet%2Fbeer&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();