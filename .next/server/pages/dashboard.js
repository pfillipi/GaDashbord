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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Dashboard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ \"next/dynamic\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Header */ \"./src/components/Header.tsx\");\n/* harmony import */ var _components_Sidebar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Sidebar */ \"./src/components/Sidebar.tsx\");\n\nvar _jsxFileName = \"/Users/fillipi/Documents/Leksjoner/Ignite/reactjs/GaDashbord/src/pages/dashboard.tsx\";\n\n\n\n\nconst Chart = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(() => Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(__webpack_require__, /*! react-apexcharts */ \"react-apexcharts\", 23)), {\n  ssr: false,\n  loadableGenerated: {\n    webpack: () => [/*require.resolve*/(/*! react-apexcharts */ \"react-apexcharts\")],\n    modules: [\"dashboard.tsx -> \" + 'react-apexcharts']\n  }\n});\nconst options = {\n  chart: {\n    toolbar: {\n      show: false\n    },\n    zoom: {\n      enabled: false\n    },\n    foreColor: _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.theme.colors.gray[500]\n  },\n  grid: {\n    show: false\n  },\n  dataLabels: {\n    enabled: false\n  },\n  tooltip: {\n    enabled: false\n  },\n  xaxis: {\n    type: 'datetime',\n    axisBorder: {\n      color: _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.theme.colors.gray[600]\n    },\n    axisTicks: {\n      color: _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.theme.colors.gray[600]\n    },\n    categories: ['2021-05-18T00:00:00.000Z', '2021-05-19T00:00:00.000Z', '2021-05-20T00:00:00.000Z', '2021-05-21T00:00:00.000Z', '2021-05-22T00:00:00.000Z', '2021-05-23T00:00:00.000Z', '2021-05-24T00:00:00.000Z']\n  },\n  fill: {\n    opacity: 0.3,\n    type: 'gradient',\n    gradient: {\n      shade: 'dark',\n      opacityFrom: 0.7,\n      opacityTo: 0.3\n    }\n  }\n};\nconst series = [{\n  name: 'series1',\n  data: [31, 120, 10, 28, 61, 18, 109]\n}];\nfunction Dashboard() {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {\n    direction: \"column\",\n    h: \"100vh\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_3__.Header, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {\n      w: \"100%\",\n      my: \"6\",\n      maxWidth: 1480,\n      mx: \"auto\",\n      px: \"6\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Sidebar__WEBPACK_IMPORTED_MODULE_4__.Sidebar, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 69,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.SimpleGrid, {\n        flex: \"1\",\n        gap: \"4\",\n        minChildWidth: \"320px\",\n        align: \"flex-start\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {\n          p: \"8\",\n          bg: \"gray.800\",\n          borderRadius: 8,\n          pb: \"4\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {\n            fontSize: \"lg\",\n            mb: \"4\",\n            children: \"Ukens abonnenter\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 78,\n            columnNumber: 13\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Chart, {\n            options: options,\n            series: series,\n            type: \"area\",\n            height: 160\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 79,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 72,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {\n          p: \"8\",\n          bg: \"gray.800\",\n          borderRadius: 8,\n          pb: \"4\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {\n            fontSize: \"lg\",\n            mb: \"4\",\n            children: \"\\xC5pningsgebyr\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 87,\n            columnNumber: 13\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Chart, {\n            options: options,\n            series: series,\n            type: \"area\",\n            height: 160\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 88,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 81,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 71,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 65,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYXNoZ2EvLi9zcmMvcGFnZXMvZGFzaGJvYXJkLnRzeD85YjMxIl0sIm5hbWVzIjpbIkNoYXJ0IiwiZHluYW1pYyIsInNzciIsIm9wdGlvbnMiLCJjaGFydCIsInRvb2xiYXIiLCJzaG93Iiwiem9vbSIsImVuYWJsZWQiLCJmb3JlQ29sb3IiLCJ0aGVtZSIsImdyaWQiLCJkYXRhTGFiZWxzIiwidG9vbHRpcCIsInhheGlzIiwidHlwZSIsImF4aXNCb3JkZXIiLCJjb2xvciIsImF4aXNUaWNrcyIsImNhdGVnb3JpZXMiLCJmaWxsIiwib3BhY2l0eSIsImdyYWRpZW50Iiwic2hhZGUiLCJvcGFjaXR5RnJvbSIsIm9wYWNpdHlUbyIsInNlcmllcyIsIm5hbWUiLCJkYXRhIiwiRGFzaGJvYXJkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBRUEsTUFBTUEsS0FBSyxHQUFHQyxtREFBTyxDQUFDLE1BQU0sc0lBQVAsRUFBbUM7QUFDdERDLEtBQUcsRUFBRSxLQURpRDtBQUFBO0FBQUEsd0NBQXJCLDBDQUFxQjtBQUFBLG9DQUFyQixrQkFBcUI7QUFBQTtBQUFBLENBQW5DLENBQXJCO0FBSUEsTUFBTUMsT0FBb0IsR0FBRztBQUMzQkMsT0FBSyxFQUFFO0FBQ0xDLFdBQU8sRUFBRTtBQUNQQyxVQUFJLEVBQUU7QUFEQyxLQURKO0FBSUxDLFFBQUksRUFBRTtBQUNKQyxhQUFPLEVBQUU7QUFETCxLQUpEO0FBT0xDLGFBQVMsRUFBRUMsb0VBQUE7QUFQTixHQURvQjtBQVUzQkMsTUFBSSxFQUFFO0FBQ0pMLFFBQUksRUFBRTtBQURGLEdBVnFCO0FBYTNCTSxZQUFVLEVBQUU7QUFDVkosV0FBTyxFQUFFO0FBREMsR0FiZTtBQWdCM0JLLFNBQU8sRUFBRTtBQUNQTCxXQUFPLEVBQUU7QUFERixHQWhCa0I7QUFtQjNCTSxPQUFLLEVBQUU7QUFDTEMsUUFBSSxFQUFFLFVBREQ7QUFFTEMsY0FBVSxFQUFFO0FB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c0NvbnRlbnQiOlsiaW1wb3J0IHsgQm94LCBGbGV4LCBTaW1wbGVHcmlkLCBUZXh0LCB0aGVtZSB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5pbXBvcnQgeyBBcGV4T3B0aW9ucyB9IGZyb20gXCJhcGV4Y2hhcnRzXCI7XG5pbXBvcnQgZHluYW1pYyBmcm9tICduZXh0L2R5bmFtaWMnO1xuaW1wb3J0IHsgSGVhZGVyIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvSGVhZGVyXCI7XG5pbXBvcnQgeyBTaWRlYmFyIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvU2lkZWJhclwiO1xuXG5jb25zdCBDaGFydCA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KCdyZWFjdC1hcGV4Y2hhcnRzJyksIHtcbiAgc3NyOiBmYWxzZSxcbn0pXG5cbmNvbnN0IG9wdGlvbnM6IEFwZXhPcHRpb25zID0ge1xuICBjaGFydDoge1xuICAgIHRvb2xiYXI6IHtcbiAgICAgIHNob3c6IGZhbHNlLFxuICAgIH0sXG4gICAgem9vbToge1xuICAgICAgZW5hYmxlZDogZmFsc2UsXG4gICAgfSxcbiAgICBmb3JlQ29sb3I6IHRoZW1lLmNvbG9ycy5ncmF5WzUwMF0sXG4gIH0sXG4gIGdyaWQ6IHtcbiAgICBzaG93OiBmYWxzZSxcbiAgfSxcbiAgZGF0YUxhYmVsczoge1xuICAgIGVuYWJsZWQ6IGZhbHNlLFxuICB9LFxuICB0b29sdGlwOiB7XG4gICAgZW5hYmxlZDogZmFsc2UsXG4gIH0sXG4gIHhheGlzOiB7XG4gICAgdHlwZTogJ2RhdGV0aW1lJyxcbiAgICBheGlzQm9yZGVyOiB7XG4gICAgICBjb2xvcjogdGhlbWUuY29sb3JzLmdyYXlbNjAwXVxuICAgIH0sXG4gICAgYXhpc1RpY2tzOiB7XG4gICAgICBjb2xvcjogdGhlbWUuY29sb3JzLmdyYXlbNjAwXVxuICAgIH0sXG4gICAgY2F0ZWdvcmllczogW1xuICAgICAgJzIwMjEtMDUtMThUMDA6MDA6MDAuMDAwWicsXG4gICAgICAnMjAyMS0wNS0xOVQwMDowMDowMC4wMDBaJyxcbiAgICAgICcyMDIxLTA1LTIwVDAwOjAwOjAwLjAwMFonLFxuICAgICAgJzIwMjEtMDUtMjFUMDA6MDA6MDAuMDAwWicsXG4gICAgICAnMjAyMS0wNS0yMlQwMDowMDowMC4wMDBaJyxcbiAgICAgICcyMDIxLTA1LTIzVDAwOjAwOjAwLjAwMFonLFxuICAgICAgJzIwMjEtMDUtMjRUMDA6MDA6MDAuMDAwWicsXG4gICAgXSxcbiAgfSxcbiAgZmlsbDoge1xuICAgIG9wYWNpdHk6IDAuMyxcbiAgICB0eXBlOiAnZ3JhZGllbnQnLFxuICAgIGdyYWRpZW50OiB7XG4gICAgICBzaGFkZTogJ2RhcmsnLFxuICAgICAgb3BhY2l0eUZyb206IDAuNyxcbiAgICAgIG9wYWNpdHlUbzogMC4zLFxuICAgIH1cbiAgfSxcbn07XG5cbmNvbnN0IHNlcmllcyA9IFtcbiAgeyBuYW1lOiAnc2VyaWVzMScsIGRhdGE6IFszMSwgMTIwLCAxMCwgMjgsIDYxLCAxOCwgMTA5XSB9XG5dO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEYXNoYm9hcmQoKSB7XG4gIHJldHVybiAoXG4gICAgPEZsZXggZGlyZWN0aW9uPVwiY29sdW1uXCIgaD1cIjEwMHZoXCI+XG4gICAgICA8SGVhZGVyIC8+XG5cbiAgICAgIDxGbGV4IHc9XCIxMDAlXCIgbXk9XCI2XCIgbWF4V2lkdGg9ezE0ODB9IG14PVwiYXV0b1wiIHB4PVwiNlwiPlxuICAgICAgICA8U2lkZWJhciAvPlxuXG4gICAgICAgIDxTaW1wbGVHcmlkIGZsZXg9XCIxXCIgZ2FwPVwiNFwiIG1pbkNoaWxkV2lkdGg9XCIzMjBweFwiIGFsaWduPVwiZmxleC1zdGFydFwiPlxuICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgIHA9XCI4XCJcbiAgICAgICAgICAgIGJnPVwiZ3JheS44MDBcIlxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzPXs4fVxuICAgICAgICAgICAgcGI9XCI0XCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8VGV4dCBmb250U2l6ZT1cImxnXCIgbWI9XCI0XCI+VWtlbnMgYWJvbm5lbnRlcjwvVGV4dD5cbiAgICAgICAgICAgIDxDaGFydCBvcHRpb25zPXtvcHRpb25zfSBzZXJpZXM9e3Nlcmllc30gdHlwZT1cImFyZWFcIiBoZWlnaHQ9ezE2MH0gLz5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgICA8Qm94XG4gICAgICAgICAgICBwPVwiOFwiXG4gICAgICAgICAgICBiZz1cImdyYXkuODAwXCJcbiAgICAgICAgICAgIGJvcmRlclJhZGl1cz17OH1cbiAgICAgICAgICAgIHBiPVwiNFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPFRleHQgZm9udFNpemU9XCJsZ1wiIG1iPVwiNFwiPsOFcG5pbmdzZ2VieXI8L1RleHQ+XG4gICAgICAgICAgICA8Q2hhcnQgb3B0aW9ucz17b3B0aW9uc30gc2VyaWVzPXtzZXJpZXN9IHR5cGU9XCJhcmVhXCIgaGVpZ2h0PXsxNjB9IC8+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgIDwvU2ltcGxlR3JpZD5cbiAgICAgIDwvRmxleD5cbiAgICA8L0ZsZXg+XG4gIClcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/dashboard.tsx\n");

/***/ }),

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/***/ (function(module) {

"use strict";
module.exports = require("@chakra-ui/react");;

/***/ }),

/***/ "next/dynamic":
/*!*******************************!*\
  !*** external "next/dynamic" ***!
  \*******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dynamic");;

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_react-icons_ri_index_esm_js","src_components_Header_tsx-src_components_Sidebar_tsx"], function() { return __webpack_exec__("./src/pages/dashboard.tsx"); });
module.exports = __webpack_exports__;

})();