/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/dashboard",{

/***/ "./src/pages/dashboard.tsx":
/*!*********************************!*\
  !*** ./src/pages/dashboard.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Dashboard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/esm/index.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Header */ \"./src/components/Header.tsx\");\n/* harmony import */ var _components_Sidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Sidebar */ \"./src/components/Sidebar.tsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nvar _jsxFileName = \"/Users/fillipi/Documents/Leksjoner/Ignite/reactjs/GaDashbord/src/pages/dashboard.tsx\";\n\n\n\n\nvar Chart = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(_c = function _c() {\n  return __webpack_require__.e(/*! import() */ \"vendors-node_modules_react-apexcharts_dist_react-apexcharts_min_js\").then(__webpack_require__.bind(__webpack_require__, /*! react-apexcharts */ \"./node_modules/react-apexcharts/dist/react-apexcharts.min.js\"));\n}, {\n  ssr: false,\n  loadableGenerated: {\n    webpack: function webpack() {\n      return [/*require.resolve*/(/*! react-apexcharts */ \"./node_modules/react-apexcharts/dist/react-apexcharts.min.js\")];\n    },\n    modules: [\"dashboard.tsx -> \" + 'react-apexcharts']\n  }\n});\n_c2 = Chart;\nvar options = {\n  chart: {\n    toolbar: {\n      show: false\n    },\n    zoom: {\n      enabled: false\n    },\n    foreColor: _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.theme.colors.gray[500]\n  },\n  grid: {\n    show: false\n  },\n  dataLabels: {\n    enabled: false\n  },\n  tooltip: {\n    enabled: false\n  },\n  xaxis: {\n    type: 'datetime',\n    axisBorder: {\n      color: _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.theme.colors.gray[600]\n    }\n  }\n};\nvar series = [{\n  name: 'series1',\n  data: [31, 120, 10, 28, 61, 18, 109]\n}];\nfunction Dashboard() {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Flex, {\n    direction: \"column\",\n    h: \"100vh\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_2__.Header, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Flex, {\n      w: \"100%\",\n      my: \"6\",\n      maxWidth: 1480,\n      mx: \"auto\",\n      px: \"6\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Sidebar__WEBPACK_IMPORTED_MODULE_3__.Sidebar, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.SimpleGrid, {\n        flex: \"1\",\n        gap: \"4\",\n        minChildWidth: \"320px\",\n        align: \"flex-start\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {\n          p: \"8\",\n          bg: \"gray.800\",\n          borderRadius: 8 // pb=\"4\"\n          ,\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Text, {\n            fontSize: \"lg\",\n            mb: \"4\",\n            children: \"Ukens abonnenter\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 57,\n            columnNumber: 13\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Chart, {\n            options: options,\n            series: series,\n            type: \"area\",\n            height: 160\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 58,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 51,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {\n          p: \"8\",\n          bg: \"gray.800\",\n          borderRadius: 8 // pb=\"4\"\n          ,\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Text, {\n            fontSize: \"lg\",\n            mb: \"4\",\n            children: \"\\xC5pningsgebyr\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 66,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 60,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 44,\n    columnNumber: 5\n  }, this);\n}\n_c3 = Dashboard;\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"Chart$dynamic\");\n$RefreshReg$(_c2, \"Chart\");\n$RefreshReg$(_c3, \"Dashboard\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2Rhc2hib2FyZC50c3g/OWIzMSJdLCJuYW1lcyI6WyJDaGFydCIsImR5bmFtaWMiLCJzc3IiLCJvcHRpb25zIiwiY2hhcnQiLCJ0b29sYmFyIiwic2hvdyIsInpvb20iLCJlbmFibGVkIiwiZm9yZUNvbG9yIiwidGhlbWUiLCJncmlkIiwiZGF0YUxhYmVscyIsInRvb2x0aXAiLCJ4YXhpcyIsInR5cGUiLCJheGlzQm9yZGVyIiwiY29sb3IiLCJzZXJpZXMiLCJuYW1lIiwiZGF0YSIsIkRhc2hib2FyZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLEtBQUssR0FBR0MsbURBQU8sTUFBQztBQUFBLFNBQU0sdVBBQU47QUFBQSxDQUFELEVBQW1DO0FBQ3REQyxLQUFHLEVBQUUsS0FEaUQ7QUFBQTtBQUFBO0FBQUEsa0NBQXJCLHNGQUFxQjtBQUFBO0FBQUEsb0NBQXJCLGtCQUFxQjtBQUFBO0FBQUEsQ0FBbkMsQ0FBckI7TUFBTUYsSztBQUlOLElBQU1HLE9BQU8sR0FBRztBQUNkQyxPQUFLLEVBQUU7QUFDTEMsV0FBTyxFQUFFO0FBQ1BDLFVBQUksRUFBRTtBQURDLEtBREo7QUFJTEMsUUFBSSxFQUFFO0FBQ0pDLGFBQU8sRUFBRTtBQURMLEtBSkQ7QUFPTEMsYUFBUyxFQUFFQyxvRUFBQTtBQVBOLEdBRE87QUFVZEMsTUFBSSxFQUFFO0FBQ0pMLFFBQUksRUFBRTtBQURGLEdBVlE7QUFhZE0sWUFBVSxFQUFFO0FBQ1ZKLFdBQU8sRUFBRTtBQURDLEdBYkU7QUFnQmRLLFNBQU8sRUFBRTtBQUNQTCxXQUFPLEVBQUU7QUFERixHQWhCSztBQW1CZE0sT0FBSyxFQUFFO0FBQ0xDLFFBQUksRUFBRSxVQUREO0FBRUxDLGNBQVUsRUFBRTtBQUNWQyxXQUFLLEVBQUVQLG9FQUFBO0FBREc7QUFGUDtBQW5CTyxDQUFoQjtBQTRCQSxJQUFNUSxNQUFNLEdBQUcsQ0FDYjtBQUFFQyxNQUFJLEVBQUUsU0FBUjtBQUFtQkMsTUFBSSxFQUFFLENBQUMsRUFBRCxFQUFLLEdBQUwsRUFBVSxFQUFWLEVBQWMsRUFBZCxFQUFrQixFQUFsQixFQUFzQixFQUF0QixFQUEwQixHQUExQjtBQUF6QixDQURhLENBQWY7QUFJZSxTQUFTQyxTQUFULEdBQXFCO0FBQ2xDLHNCQUNFLDhEQUFDLGtEQUFEO0FBQU0sYUFBUyxFQUFDLFFBQWhCO0FBQXlCLEtBQUMsRUFBQyxPQUEzQjtBQUFBLDRCQUNFLDhEQUFDLHNEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUdFLDhEQUFDLGtEQUFEO0FBQU0sT0FBQyxFQUFDLE1BQVI7QUFBZSxRQUFFLEVBQUMsR0FBbEI7QUFBc0IsY0FBUSxFQUFFLElBQWhDO0FBQXNDLFFBQUUsRUFBQyxNQUF6QztBQUFnRCxRQUFFLEVBQUMsR0FBbkQ7QUFBQSw4QkFDRSw4REFBQyx3REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFHRSw4REFBQyx3REFBRDtBQUFZLFlBQUksRUFBQyxHQUFqQjtBQUFxQixXQUFHLEVBQUMsR0FBekI7QUFBNkIscUJBQWEsRUFBQyxPQUEzQztBQUFtRCxhQUFLLEVBQUMsWUFBekQ7QUFBQSxnQ0FDRSw4REFBQyxpREFBRDtBQUNFLFdBQUMsRUFBQyxHQURKO0FBRUUsWUFBRSxFQUFDLFVBRkw7QUFHRSxzQkFBWSxFQUFFLENBSGhCLENBSUE7QUFKQTtBQUFBLGtDQU1FLDhEQUFDLGtEQUFEO0FBQU0sb0JBQVEsRUFBQyxJQUFmO0FBQW9CLGNBQUUsRUFBQyxHQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFORixlQU9FLDhEQUFDLEtBQUQ7QUFBTyxtQkFBTyxFQUFFbEIsT0FBaEI7QUFBeUIsa0JBQU0sRUFBRWUsTUFBakM7QUFBeUMsZ0JBQUksRUFBQyxNQUE5QztBQUFxRCxrQkFBTSxFQUFFO0FBQTdEO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBVUUsOERBQUMsaURBQUQ7QUFDRSxXQUFDLEVBQUMsR0FESjtBQUVFLFlBQUUsRUFBQyxVQUZMO0FBR0Usc0JBQVksRUFBRSxDQUhoQixDQUlBO0FBSkE7QUFBQSxpQ0FNRSw4REFBQyxrREFBRDtBQUFNLG9CQUFRLEVBQUMsSUFBZjtBQUFvQixjQUFFLEVBQUMsR0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFORjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBNkJEO01BOUJ1QkcsUyIsImZpbGUiOiIuL3NyYy9wYWdlcy9kYXNoYm9hcmQudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm94LCBGbGV4LCBTaW1wbGVHcmlkLCBUZXh0LCB0aGVtZSB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5pbXBvcnQgZHluYW1pYyBmcm9tICduZXh0L2R5bmFtaWMnO1xuaW1wb3J0IHsgSGVhZGVyIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvSGVhZGVyXCI7XG5pbXBvcnQgeyBTaWRlYmFyIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvU2lkZWJhclwiO1xuXG5jb25zdCBDaGFydCA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KCdyZWFjdC1hcGV4Y2hhcnRzJyksIHtcbiAgc3NyOiBmYWxzZSxcbn0pXG5cbmNvbnN0IG9wdGlvbnMgPSB7XG4gIGNoYXJ0OiB7XG4gICAgdG9vbGJhcjoge1xuICAgICAgc2hvdzogZmFsc2UsXG4gICAgfSxcbiAgICB6b29tOiB7XG4gICAgICBlbmFibGVkOiBmYWxzZSxcbiAgICB9LFxuICAgIGZvcmVDb2xvcjogdGhlbWUuY29sb3JzLmdyYXlbNTAwXSxcbiAgfSxcbiAgZ3JpZDoge1xuICAgIHNob3c6IGZhbHNlLFxuICB9LFxuICBkYXRhTGFiZWxzOiB7XG4gICAgZW5hYmxlZDogZmFsc2UsXG4gIH0sXG4gIHRvb2x0aXA6IHtcbiAgICBlbmFibGVkOiBmYWxzZSxcbiAgfSxcbiAgeGF4aXM6IHtcbiAgICB0eXBlOiAnZGF0ZXRpbWUnLFxuICAgIGF4aXNCb3JkZXI6IHtcbiAgICAgIGNvbG9yOiB0aGVtZS5jb2xvcnMuZ3JheVs2MDBdXG4gICAgfVxuXG4gIH1cbn07XG5cbmNvbnN0IHNlcmllcyA9IFtcbiAgeyBuYW1lOiAnc2VyaWVzMScsIGRhdGE6IFszMSwgMTIwLCAxMCwgMjgsIDYxLCAxOCwgMTA5XSB9XG5dO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEYXNoYm9hcmQoKSB7XG4gIHJldHVybiAoXG4gICAgPEZsZXggZGlyZWN0aW9uPVwiY29sdW1uXCIgaD1cIjEwMHZoXCI+XG4gICAgICA8SGVhZGVyIC8+XG5cbiAgICAgIDxGbGV4IHc9XCIxMDAlXCIgbXk9XCI2XCIgbWF4V2lkdGg9ezE0ODB9IG14PVwiYXV0b1wiIHB4PVwiNlwiPlxuICAgICAgICA8U2lkZWJhciAvPlxuXG4gICAgICAgIDxTaW1wbGVHcmlkIGZsZXg9XCIxXCIgZ2FwPVwiNFwiIG1pbkNoaWxkV2lkdGg9XCIzMjBweFwiIGFsaWduPVwiZmxleC1zdGFydFwiPlxuICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgIHA9XCI4XCJcbiAgICAgICAgICAgIGJnPVwiZ3JheS44MDBcIlxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzPXs4fVxuICAgICAgICAgIC8vIHBiPVwiNFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPFRleHQgZm9udFNpemU9XCJsZ1wiIG1iPVwiNFwiPlVrZW5zIGFib25uZW50ZXI8L1RleHQ+XG4gICAgICAgICAgICA8Q2hhcnQgb3B0aW9ucz17b3B0aW9uc30gc2VyaWVzPXtzZXJpZXN9IHR5cGU9XCJhcmVhXCIgaGVpZ2h0PXsxNjB9IC8+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgPEJveFxuICAgICAgICAgICAgcD1cIjhcIlxuICAgICAgICAgICAgYmc9XCJncmF5LjgwMFwiXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM9ezh9XG4gICAgICAgICAgLy8gcGI9XCI0XCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8VGV4dCBmb250U2l6ZT1cImxnXCIgbWI9XCI0XCI+w4VwbmluZ3NnZWJ5cjwvVGV4dD5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgPC9TaW1wbGVHcmlkPlxuICAgICAgPC9GbGV4PlxuICAgIDwvRmxleD5cbiAgKVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/dashboard.tsx\n");

/***/ })

});