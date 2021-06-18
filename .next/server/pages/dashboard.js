/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/dashboard";
exports.ids = ["pages/dashboard"];
exports.modules = {

/***/ "./src/pages/dashboard.tsx":
/*!*********************************!*\
  !*** ./src/pages/dashboard.tsx ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Dashboard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ \"next/dynamic\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Header */ \"./src/components/Header/index.tsx\");\n/* harmony import */ var _components_Sidebar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Sidebar */ \"./src/components/Sidebar/index.tsx\");\n\nvar _jsxFileName = \"/Users/fillipi/Documents/Leksjoner/Ignite/reactjs/GaDashbord/src/pages/dashboard.tsx\";\n\n\n\n\nconst Chart = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(() => Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(__webpack_require__, /*! react-apexcharts */ \"react-apexcharts\", 23)), {\n  ssr: false,\n  loadableGenerated: {\n    webpack: () => [/*require.resolve*/(/*! react-apexcharts */ \"react-apexcharts\")],\n    modules: [\"dashboard.tsx -> \" + 'react-apexcharts']\n  }\n});\nconst options = {\n  chart: {\n    toolbar: {\n      show: false\n    },\n    zoom: {\n      enabled: false\n    },\n    foreColor: _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.theme.colors.gray[500]\n  },\n  grid: {\n    show: false\n  },\n  dataLabels: {\n    enabled: false\n  },\n  tooltip: {\n    enabled: false\n  },\n  xaxis: {\n    type: 'datetime',\n    axisBorder: {\n      color: _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.theme.colors.gray[600]\n    },\n    axisTicks: {\n      color: _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.theme.colors.gray[600]\n    },\n    categories: ['2021-05-18T00:00:00.000Z', '2021-05-19T00:00:00.000Z', '2021-05-20T00:00:00.000Z', '2021-05-21T00:00:00.000Z', '2021-05-22T00:00:00.000Z', '2021-05-23T00:00:00.000Z', '2021-05-24T00:00:00.000Z']\n  },\n  fill: {\n    opacity: 0.3,\n    type: 'gradient',\n    gradient: {\n      shade: 'dark',\n      opacityFrom: 0.7,\n      opacityTo: 0.3\n    }\n  }\n};\nconst series = [{\n  name: 'series1',\n  data: [31, 120, 10, 28, 61, 18, 109]\n}];\nfunction Dashboard() {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {\n    direction: \"column\",\n    h: \"100vh\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_3__.Header, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {\n      w: \"100%\",\n      my: \"6\",\n      maxWidth: 1480,\n      mx: \"auto\",\n      px: \"6\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Sidebar__WEBPACK_IMPORTED_MODULE_4__.Sidebar, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 69,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.SimpleGrid, {\n        flex: \"1\",\n        gap: \"4\",\n        minChildWidth: \"320px\",\n        align: \"flex-start\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {\n          p: [\"6\", \"8\"],\n          bg: \"gray.800\",\n          borderRadius: 8,\n          pb: \"4\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {\n            fontSize: \"lg\",\n            mb: \"4\",\n            children: \"Ukens abonnenter\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 78,\n            columnNumber: 13\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Chart, {\n            options: options,\n            series: series,\n            type: \"area\",\n            height: 160\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 79,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 72,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {\n          p: \"8\",\n          bg: \"gray.800\",\n          borderRadius: 8,\n          pb: \"4\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {\n            fontSize: \"lg\",\n            mb: \"4\",\n            children: \"\\xC5pningsgebyr\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 87,\n            columnNumber: 13\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Chart, {\n            options: options,\n            series: series,\n            type: \"area\",\n            height: 160\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 88,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 81,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 71,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 65,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYXNoZ2EvLi9zcmMvcGFnZXMvZGFzaGJvYXJkLnRzeD85YjMxIl0sIm5hbWVzIjpbIkNoYXJ0IiwiZHluYW1pYyIsInNzciIsIm9wdGlvbnMiLCJjaGFydCIsInRvb2xiYXIiLCJzaG93Iiwiem9vbSIsImVuYWJsZWQiLCJmb3JlQ29sb3IiLCJ0aGVtZSIsImdyaWQiLCJkYXRhTGFiZWxzIiwidG9vbHRpcCIsInhheGlzIiwidHlwZSIsImF4aXNCb3JkZXIiLCJjb2xvciIsImF4aXNUaWNrcyIsImNhdGVnb3JpZXMiLCJmaWxsIiwib3BhY2l0eSIsImdyYWRpZW50Iiwic2hhZGUiLCJvcGFjaXR5RnJvbSIsIm9wYWNpdHlUbyIsInNlcmllcyIsIm5hbWUiLCJkYXRhIiwiRGFzaGJvYXJkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBRUEsTUFBTUEsS0FBSyxHQUFHQyxtREFBTyxDQUFDLE1BQU0sc0lBQVAsRUFBbUM7QUFDdERDLEtBQUcsRUFBRSxLQURpRDtBQUFBO0FBQUEsd0NBQXJCLDBDQUFxQjtBQUFBLG9DQUFyQixrQkFBcUI7QUFBQTtBQUFBLENBQW5DLENBQXJCO0FBSUEsTUFBTUMsT0FBb0IsR0FBRztBQUMzQkMsT0FBSyxFQUFFO0FBQ0xDLFdBQU8sRUFBRTtBQUNQQyxVQUFJLEVBQUU7QUFEQyxLQURKO0FBSUxDLFFBQUksRUFBRTtBQUNKQyxhQUFPLEVBQUU7QUFETCxLQUpEO0FBT0xDLGFBQVMsRUFBRUMsb0VBQUE7QUFQTixHQURvQjtBQVUzQkMsTUFBSSxFQUFFO0FBQ0pMLFFBQUksRUFBRTtBQURGLEdBVnFCO0FBYTNCTSxZQUFVLEVBQUU7QUFDVkosV0FBTyxFQUFFO0FBREMsR0FiZTtBQWdCM0JLLFNBQU8sRUFBRTtBQUNQTCxXQUFPLEVBQUU7QUFERixHQWhCa0I7QUFtQjNCTSxPQUFLLEVBQUU7QUFDTEMsUUFBSSxFQUFFLFVBREQ7QUFFTEMsY0FBVSxFQUFFO0FB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b2FyZC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3gsIEZsZXgsIFNpbXBsZUdyaWQsIFRleHQsIHRoZW1lIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcbmltcG9ydCB7IEFwZXhPcHRpb25zIH0gZnJvbSBcImFwZXhjaGFydHNcIjtcbmltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYyc7XG5pbXBvcnQgeyBIZWFkZXIgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9IZWFkZXJcIjtcbmltcG9ydCB7IFNpZGViYXIgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9TaWRlYmFyXCI7XG5cbmNvbnN0IENoYXJ0ID0gZHluYW1pYygoKSA9PiBpbXBvcnQoJ3JlYWN0LWFwZXhjaGFydHMnKSwge1xuICBzc3I6IGZhbHNlLFxufSlcblxuY29uc3Qgb3B0aW9uczogQXBleE9wdGlvbnMgPSB7XG4gIGNoYXJ0OiB7XG4gICAgdG9vbGJhcjoge1xuICAgICAgc2hvdzogZmFsc2UsXG4gICAgfSxcbiAgICB6b29tOiB7XG4gICAgICBlbmFibGVkOiBmYWxzZSxcbiAgICB9LFxuICAgIGZvcmVDb2xvcjogdGhlbWUuY29sb3JzLmdyYXlbNTAwXSxcbiAgfSxcbiAgZ3JpZDoge1xuICAgIHNob3c6IGZhbHNlLFxuICB9LFxuICBkYXRhTGFiZWxzOiB7XG4gICAgZW5hYmxlZDogZmFsc2UsXG4gIH0sXG4gIHRvb2x0aXA6IHtcbiAgICBlbmFibGVkOiBmYWxzZSxcbiAgfSxcbiAgeGF4aXM6IHtcbiAgICB0eXBlOiAnZGF0ZXRpbWUnLFxuICAgIGF4aXNCb3JkZXI6IHtcbiAgICAgIGNvbG9yOiB0aGVtZS5jb2xvcnMuZ3JheVs2MDBdXG4gICAgfSxcbiAgICBheGlzVGlja3M6IHtcbiAgICAgIGNvbG9yOiB0aGVtZS5jb2xvcnMuZ3JheVs2MDBdXG4gICAgfSxcbiAgICBjYXRlZ29yaWVzOiBbXG4gICAgICAnMjAyMS0wNS0xOFQwMDowMDowMC4wMDBaJyxcbiAgICAgICcyMDIxLTA1LTE5VDAwOjAwOjAwLjAwMFonLFxuICAgICAgJzIwMjEtMDUtMjBUMDA6MDA6MDAuMDAwWicsXG4gICAgICAnMjAyMS0wNS0yMVQwMDowMDowMC4wMDBaJyxcbiAgICAgICcyMDIxLTA1LTIyVDAwOjAwOjAwLjAwMFonLFxuICAgICAgJzIwMjEtMDUtMjNUMDA6MDA6MDAuMDAwWicsXG4gICAgICAnMjAyMS0wNS0yNFQwMDowMDowMC4wMDBaJyxcbiAgICBdLFxuICB9LFxuICBmaWxsOiB7XG4gICAgb3BhY2l0eTogMC4zLFxuICAgIHR5cGU6ICdncmFkaWVudCcsXG4gICAgZ3JhZGllbnQ6IHtcbiAgICAgIHNoYWRlOiAnZGFyaycsXG4gICAgICBvcGFjaXR5RnJvbTogMC43LFxuICAgICAgb3BhY2l0eVRvOiAwLjMsXG4gICAgfVxuICB9LFxufTtcblxuY29uc3Qgc2VyaWVzID0gW1xuICB7IG5hbWU6ICdzZXJpZXMxJywgZGF0YTogWzMxLCAxMjAsIDEwLCAyOCwgNjEsIDE4LCAxMDldIH1cbl07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERhc2hib2FyZCgpIHtcbiAgcmV0dXJuIChcbiAgICA8RmxleCBkaXJlY3Rpb249XCJjb2x1bW5cIiBoPVwiMTAwdmhcIj5cbiAgICAgIDxIZWFkZXIgLz5cblxuICAgICAgPEZsZXggdz1cIjEwMCVcIiBteT1cIjZcIiBtYXhXaWR0aD17MTQ4MH0gbXg9XCJhdXRvXCIgcHg9XCI2XCI+XG4gICAgICAgIDxTaWRlYmFyIC8+XG5cbiAgICAgICAgPFNpbXBsZUdyaWQgZmxleD1cIjFcIiBnYXA9XCI0XCIgbWluQ2hpbGRXaWR0aD1cIjMyMHB4XCIgYWxpZ249XCJmbGV4LXN0YXJ0XCI+XG4gICAgICAgICAgPEJveFxuICAgICAgICAgICAgcD17W1wiNlwiLCBcIjhcIl19XG4gICAgICAgICAgICBiZz1cImdyYXkuODAwXCJcbiAgICAgICAgICAgIGJvcmRlclJhZGl1cz17OH1cbiAgICAgICAgICAgIHBiPVwiNFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPFRleHQgZm9udFNpemU9XCJsZ1wiIG1iPVwiNFwiPlVrZW5zIGFib25uZW50ZXI8L1RleHQ+XG4gICAgICAgICAgICA8Q2hhcnQgb3B0aW9ucz17b3B0aW9uc30gc2VyaWVzPXtzZXJpZXN9IHR5cGU9XCJhcmVhXCIgaGVpZ2h0PXsxNjB9IC8+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgPEJveFxuICAgICAgICAgICAgcD1cIjhcIlxuICAgICAgICAgICAgYmc9XCJncmF5LjgwMFwiXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM9ezh9XG4gICAgICAgICAgICBwYj1cIjRcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxUZXh0IGZvbnRTaXplPVwibGdcIiBtYj1cIjRcIj7DhXBuaW5nc2dlYnlyPC9UZXh0PlxuICAgICAgICAgICAgPENoYXJ0IG9wdGlvbnM9e29wdGlvbnN9IHNlcmllcz17c2VyaWVzfSB0eXBlPVwiYXJlYVwiIGhlaWdodD17MTYwfSAvPlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICA8L1NpbXBsZUdyaWQ+XG4gICAgICA8L0ZsZXg+XG4gICAgPC9GbGV4PlxuICApXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/dashboard.tsx\n");

/***/ }),

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/***/ (function(module) {

"use strict";
module.exports = require("@chakra-ui/react");;

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "next/dynamic":
/*!*******************************!*\
  !*** external "next/dynamic" ***!
  \*******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dynamic");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-apexcharts":
/*!***********************************!*\
  !*** external "react-apexcharts" ***!
  \***********************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-apexcharts");;

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js-node_modules_react-icons_ri_index_esm_js","src_contexts_SidebarDrawerContext_tsx","src_components_Header_index_tsx-src_components_Sidebar_index_tsx"], function() { return __webpack_exec__("./src/pages/dashboard.tsx"); });
module.exports = __webpack_exports__;

})();