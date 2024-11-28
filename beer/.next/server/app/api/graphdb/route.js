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

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fgraphdb%2Froute&page=%2Fapi%2Fgraphdb%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fgraphdb%2Froute.js&appDir=%2FUsers%2Faugustin%2FDocuments%2FCours%2FBUT_info%2FS5%2FBD%2Fbeer%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Faugustin%2FDocuments%2FCours%2FBUT_info%2FS5%2FBD%2Fbeer&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fgraphdb%2Froute&page=%2Fapi%2Fgraphdb%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fgraphdb%2Froute.js&appDir=%2FUsers%2Faugustin%2FDocuments%2FCours%2FBUT_info%2FS5%2FBD%2Fbeer%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Faugustin%2FDocuments%2FCours%2FBUT_info%2FS5%2FBD%2Fbeer&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_augustin_Documents_Cours_BUT_info_S5_BD_beer_src_app_api_graphdb_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/graphdb/route.js */ \"(rsc)/./src/app/api/graphdb/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/graphdb/route\",\n        pathname: \"/api/graphdb\",\n        filename: \"route\",\n        bundlePath: \"app/api/graphdb/route\"\n    },\n    resolvedPagePath: \"/Users/augustin/Documents/Cours/BUT_info/S5/BD/beer/src/app/api/graphdb/route.js\",\n    nextConfigOutput,\n    userland: _Users_augustin_Documents_Cours_BUT_info_S5_BD_beer_src_app_api_graphdb_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZncmFwaGRiJTJGcm91dGUmcGFnZT0lMkZhcGklMkZncmFwaGRiJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGZ3JhcGhkYiUyRnJvdXRlLmpzJmFwcERpcj0lMkZVc2VycyUyRmF1Z3VzdGluJTJGRG9jdW1lbnRzJTJGQ291cnMlMkZCVVRfaW5mbyUyRlM1JTJGQkQlMkZiZWVyJTJGc3JjJTJGYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj0lMkZVc2VycyUyRmF1Z3VzdGluJTJGRG9jdW1lbnRzJTJGQ291cnMlMkZCVVRfaW5mbyUyRlM1JTJGQkQlMkZiZWVyJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUErRjtBQUN2QztBQUNxQjtBQUNnQztBQUM3RztBQUNBO0FBQ0E7QUFDQSx3QkFBd0IseUdBQW1CO0FBQzNDO0FBQ0EsY0FBYyxrRUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHNEQUFzRDtBQUM5RDtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUMwRjs7QUFFMUYiLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiL1VzZXJzL2F1Z3VzdGluL0RvY3VtZW50cy9Db3Vycy9CVVRfaW5mby9TNS9CRC9iZWVyL3NyYy9hcHAvYXBpL2dyYXBoZGIvcm91dGUuanNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2dyYXBoZGIvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9ncmFwaGRiXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9ncmFwaGRiL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiL1VzZXJzL2F1Z3VzdGluL0RvY3VtZW50cy9Db3Vycy9CVVRfaW5mby9TNS9CRC9iZWVyL3NyYy9hcHAvYXBpL2dyYXBoZGIvcm91dGUuanNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICB3b3JrQXN5bmNTdG9yYWdlLFxuICAgICAgICB3b3JrVW5pdEFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fgraphdb%2Froute&page=%2Fapi%2Fgraphdb%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fgraphdb%2Froute.js&appDir=%2FUsers%2Faugustin%2FDocuments%2FCours%2FBUT_info%2FS5%2FBD%2Fbeer%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Faugustin%2FDocuments%2FCours%2FBUT_info%2FS5%2FBD%2Fbeer&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var _utils_graphdb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/graphdb */ \"(rsc)/./src/utils/graphdb.js\");\n// src/app/api/graphdb/route.js\n\nasync function POST(req) {\n    try {\n        const { query } = await req.json();\n        if (!query) {\n            return new Response(JSON.stringify({\n                message: \"Query is required\"\n            }), {\n                status: 400,\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                }\n            });\n        }\n        const data = await (0,_utils_graphdb__WEBPACK_IMPORTED_MODULE_0__.executeSparqlQuery)(query);\n        return new Response(JSON.stringify(data), {\n            status: 200,\n            headers: {\n                \"Content-Type\": \"application/json\"\n            }\n        });\n    } catch (error) {\n        return new Response(JSON.stringify({\n            message: error.message\n        }), {\n            status: 500,\n            headers: {\n                \"Content-Type\": \"application/json\"\n            }\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9ncmFwaGRiL3JvdXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsK0JBQStCO0FBQ3NCO0FBRTlDLGVBQWVDLEtBQUtDLEdBQUc7SUFDNUIsSUFBSTtRQUNGLE1BQU0sRUFBRUMsS0FBSyxFQUFFLEdBQUcsTUFBTUQsSUFBSUUsSUFBSTtRQUVoQyxJQUFJLENBQUNELE9BQU87WUFDVixPQUFPLElBQUlFLFNBQ1RDLEtBQUtDLFNBQVMsQ0FBQztnQkFBRUMsU0FBUztZQUFvQixJQUM5QztnQkFBRUMsUUFBUTtnQkFBS0MsU0FBUztvQkFBRSxnQkFBZ0I7Z0JBQW1CO1lBQUU7UUFFbkU7UUFFQSxNQUFNQyxPQUFPLE1BQU1YLGtFQUFrQkEsQ0FBQ0c7UUFDdEMsT0FBTyxJQUFJRSxTQUFTQyxLQUFLQyxTQUFTLENBQUNJLE9BQU87WUFDeENGLFFBQVE7WUFDUkMsU0FBUztnQkFBRSxnQkFBZ0I7WUFBbUI7UUFDaEQ7SUFDRixFQUFFLE9BQU9FLE9BQU87UUFDZCxPQUFPLElBQUlQLFNBQ1RDLEtBQUtDLFNBQVMsQ0FBQztZQUFFQyxTQUFTSSxNQUFNSixPQUFPO1FBQUMsSUFDeEM7WUFBRUMsUUFBUTtZQUFLQyxTQUFTO2dCQUFFLGdCQUFnQjtZQUFtQjtRQUFFO0lBRW5FO0FBQ0YiLCJzb3VyY2VzIjpbIi9Vc2Vycy9hdWd1c3Rpbi9Eb2N1bWVudHMvQ291cnMvQlVUX2luZm8vUzUvQkQvYmVlci9zcmMvYXBwL2FwaS9ncmFwaGRiL3JvdXRlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHNyYy9hcHAvYXBpL2dyYXBoZGIvcm91dGUuanNcbmltcG9ydCB7IGV4ZWN1dGVTcGFycWxRdWVyeSB9IGZyb20gXCJAL3V0aWxzL2dyYXBoZGJcIjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1QocmVxKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgeyBxdWVyeSB9ID0gYXdhaXQgcmVxLmpzb24oKTtcblxuICAgIGlmICghcXVlcnkpIHtcbiAgICAgIHJldHVybiBuZXcgUmVzcG9uc2UoXG4gICAgICAgIEpTT04uc3RyaW5naWZ5KHsgbWVzc2FnZTogXCJRdWVyeSBpcyByZXF1aXJlZFwiIH0pLFxuICAgICAgICB7IHN0YXR1czogNDAwLCBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0gfVxuICAgICAgKTtcbiAgICB9XG5cbiAgICBjb25zdCBkYXRhID0gYXdhaXQgZXhlY3V0ZVNwYXJxbFF1ZXJ5KHF1ZXJ5KTtcbiAgICByZXR1cm4gbmV3IFJlc3BvbnNlKEpTT04uc3RyaW5naWZ5KGRhdGEpLCB7XG4gICAgICBzdGF0dXM6IDIwMCxcbiAgICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gbmV3IFJlc3BvbnNlKFxuICAgICAgSlNPTi5zdHJpbmdpZnkoeyBtZXNzYWdlOiBlcnJvci5tZXNzYWdlIH0pLFxuICAgICAgeyBzdGF0dXM6IDUwMCwgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9IH1cbiAgICApO1xuICB9XG59XG4iXSwibmFtZXMiOlsiZXhlY3V0ZVNwYXJxbFF1ZXJ5IiwiUE9TVCIsInJlcSIsInF1ZXJ5IiwianNvbiIsIlJlc3BvbnNlIiwiSlNPTiIsInN0cmluZ2lmeSIsIm1lc3NhZ2UiLCJzdGF0dXMiLCJoZWFkZXJzIiwiZGF0YSIsImVycm9yIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/graphdb/route.js\n");

/***/ }),

/***/ "(rsc)/./src/utils/graphdb.js":
/*!******************************!*\
  !*** ./src/utils/graphdb.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   executeSparqlQuery: () => (/* binding */ executeSparqlQuery)\n/* harmony export */ });\n// src/utils/graphdb.js\nconst GRAPHDB_URL = \"http://Bonnet-de-bain.local:7200/repositories/TP1\";\nasync function executeSparqlQuery(query) {\n    const headers = {\n        \"Content-Type\": \"application/sparql-query\",\n        Accept: \"application/sparql-results+json\"\n    };\n    const response = await fetch(GRAPHDB_URL, {\n        method: \"POST\",\n        headers,\n        body: query\n    });\n    if (!response.ok) {\n        throw new Error(`GraphDB request failed: ${response.statusText}`);\n    }\n    return response.json();\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvdXRpbHMvZ3JhcGhkYi5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsdUJBQXVCO0FBQ3ZCLE1BQU1BLGNBQWM7QUFFYixlQUFlQyxtQkFBbUJDLEtBQUs7SUFDNUMsTUFBTUMsVUFBVTtRQUNkLGdCQUFnQjtRQUNoQkMsUUFBUTtJQUNWO0lBRUEsTUFBTUMsV0FBVyxNQUFNQyxNQUFNTixhQUFhO1FBQ3hDTyxRQUFRO1FBQ1JKO1FBQ0FLLE1BQU1OO0lBQ1I7SUFFQSxJQUFJLENBQUNHLFNBQVNJLEVBQUUsRUFBRTtRQUNoQixNQUFNLElBQUlDLE1BQU0sQ0FBQyx3QkFBd0IsRUFBRUwsU0FBU00sVUFBVSxFQUFFO0lBQ2xFO0lBRUEsT0FBT04sU0FBU08sSUFBSTtBQUN0QiIsInNvdXJjZXMiOlsiL1VzZXJzL2F1Z3VzdGluL0RvY3VtZW50cy9Db3Vycy9CVVRfaW5mby9TNS9CRC9iZWVyL3NyYy91dGlscy9ncmFwaGRiLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHNyYy91dGlscy9ncmFwaGRiLmpzXG5jb25zdCBHUkFQSERCX1VSTCA9IFwiaHR0cDovL0Jvbm5ldC1kZS1iYWluLmxvY2FsOjcyMDAvcmVwb3NpdG9yaWVzL1RQMVwiO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZXhlY3V0ZVNwYXJxbFF1ZXJ5KHF1ZXJ5KSB7XG4gIGNvbnN0IGhlYWRlcnMgPSB7XG4gICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9zcGFycWwtcXVlcnlcIixcbiAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vc3BhcnFsLXJlc3VsdHMranNvblwiLFxuICB9O1xuXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goR1JBUEhEQl9VUkwsIHtcbiAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgIGhlYWRlcnMsXG4gICAgYm9keTogcXVlcnksXG4gIH0pO1xuXG4gIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYEdyYXBoREIgcmVxdWVzdCBmYWlsZWQ6ICR7cmVzcG9uc2Uuc3RhdHVzVGV4dH1gKTtcbiAgfVxuXG4gIHJldHVybiByZXNwb25zZS5qc29uKCk7XG59XG4iXSwibmFtZXMiOlsiR1JBUEhEQl9VUkwiLCJleGVjdXRlU3BhcnFsUXVlcnkiLCJxdWVyeSIsImhlYWRlcnMiLCJBY2NlcHQiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsIm9rIiwiRXJyb3IiLCJzdGF0dXNUZXh0IiwianNvbiJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/utils/graphdb.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fgraphdb%2Froute&page=%2Fapi%2Fgraphdb%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fgraphdb%2Froute.js&appDir=%2FUsers%2Faugustin%2FDocuments%2FCours%2FBUT_info%2FS5%2FBD%2Fbeer%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Faugustin%2FDocuments%2FCours%2FBUT_info%2FS5%2FBD%2Fbeer&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();