"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nfunction Home() {\n    _s();\n    const [checked, setChecked] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const onCheck = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(()=>{\n        console.log(checked);\n        if (checked) {\n            setChecked(false);\n        }\n        if (!checked) {\n            setChecked(true);\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-darkAlt text-light min-h-screen p-16\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Create Next App\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ar/Desktop/todo-express/client/src/pages/index.tsx\",\n                        lineNumber: 21,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ar/Desktop/todo-express/client/src/pages/index.tsx\",\n                        lineNumber: 22,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ar/Desktop/todo-express/client/src/pages/index.tsx\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ar/Desktop/todo-express/client/src/pages/index.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ar/Desktop/todo-express/client/src/pages/index.tsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-4xl font-bold mb-5\",\n                children: \"Welcome, Alex\"\n            }, void 0, false, {\n                fileName: \"/Users/ar/Desktop/todo-express/client/src/pages/index.tsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                className: \"text-2xl text-lightAlt mb-5\",\n                children: \"Your tasks\"\n            }, void 0, false, {\n                fileName: \"/Users/ar/Desktop/todo-express/client/src/pages/index.tsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"bg-dark p-5 rounded-md flex items-center cursor-pointer mb-5 hover:opacity-80\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"h-5 w-5 mr-5  rounded-xl  \".concat(checked ? \"bg-primary\" : \"bg-darkAlt\"),\n                                onClick: onCheck\n                            }, void 0, false, {\n                                fileName: \"/Users/ar/Desktop/todo-express/client/src/pages/index.tsx\",\n                                lineNumber: 34,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"\",\n                                children: \"Get milk\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ar/Desktop/todo-express/client/src/pages/index.tsx\",\n                                lineNumber: 42,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"\",\n                                children: \"Delete\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ar/Desktop/todo-express/client/src/pages/index.tsx\",\n                                lineNumber: 45,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ar/Desktop/todo-express/client/src/pages/index.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"bg-dark p-5 rounded-md flex items-center cursor-pointer mb-5\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"\",\n                                children: \"Make dinner\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ar/Desktop/todo-express/client/src/pages/index.tsx\",\n                                lineNumber: 50,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ar/Desktop/todo-express/client/src/pages/index.tsx\",\n                                lineNumber: 53,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"\",\n                                children: \"Delete\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ar/Desktop/todo-express/client/src/pages/index.tsx\",\n                                lineNumber: 56,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ar/Desktop/todo-express/client/src/pages/index.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"bg-dark p-5 rounded-md flex items-center cursor-pointer mb-5\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"\",\n                                children: \"Cut the grass\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ar/Desktop/todo-express/client/src/pages/index.tsx\",\n                                lineNumber: 61,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ar/Desktop/todo-express/client/src/pages/index.tsx\",\n                                lineNumber: 64,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"\",\n                                children: \"Delete\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ar/Desktop/todo-express/client/src/pages/index.tsx\",\n                                lineNumber: 67,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ar/Desktop/todo-express/client/src/pages/index.tsx\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ar/Desktop/todo-express/client/src/pages/index.tsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ar/Desktop/todo-express/client/src/pages/index.tsx\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"ca6MqBx9klGzF2c2dLZd8LwM0bQ=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUE2QjtBQUNpQjtBQUUvQixTQUFTRyxPQUFPOztJQUM3QixNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR0gsK0NBQVFBLENBQUMsS0FBSztJQUU1QyxNQUFNSSxVQUFVTCxrREFBV0EsQ0FBQyxJQUFNO1FBQ2hDTSxRQUFRQyxHQUFHLENBQUNKO1FBQ1osSUFBSUEsU0FBUztZQUNYQyxXQUFXLEtBQUs7UUFDbEIsQ0FBQztRQUVELElBQUksQ0FBQ0QsU0FBUztZQUNaQyxXQUFXLElBQUk7UUFDakIsQ0FBQztJQUNILEdBQUcsRUFBRTtJQUVMLHFCQUNFLDhEQUFDSTtRQUFJQyxXQUFVOzswQkFDYiw4REFBQ1Ysa0RBQUlBOztrQ0FDSCw4REFBQ1c7a0NBQU07Ozs7OztrQ0FDUCw4REFBQ0M7d0JBQUtDLE1BQUs7d0JBQWNDLFNBQVE7Ozs7OztrQ0FDakMsOERBQUNGO3dCQUFLQyxNQUFLO3dCQUFXQyxTQUFROzs7Ozs7a0NBQzlCLDhEQUFDQzt3QkFBS0MsS0FBSTt3QkFBT0MsTUFBSzs7Ozs7Ozs7Ozs7OzBCQUV4Qiw4REFBQ0M7Z0JBQUdSLFdBQVU7MEJBQTBCOzs7Ozs7MEJBQ3hDLDhEQUFDUztnQkFBR1QsV0FBVTswQkFBOEI7Ozs7OzswQkFHNUMsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FFYiw4REFBQ0Q7d0JBQUlDLFdBQVU7OzBDQUViLDhEQUFDRDtnQ0FDQ0MsV0FBVyw2QkFFVixPQURDTixVQUFVLGVBQWUsWUFBWTtnQ0FFdkNnQixTQUFTZDs7Ozs7OzBDQUlYLDhEQUFDRztnQ0FBSUMsV0FBVTswQ0FBRzs7Ozs7OzBDQUdsQiw4REFBQ0Q7Z0NBQUlDLFdBQVU7MENBQUc7Ozs7Ozs7Ozs7OztrQ0FHcEIsOERBQUNEO3dCQUFJQyxXQUFVOzswQ0FFYiw4REFBQ0Q7Z0NBQUlDLFdBQVU7MENBQUc7Ozs7OzswQ0FHbEIsOERBQUNEO2dDQUFJQyxXQUFVOzs7Ozs7MENBR2YsOERBQUNEO2dDQUFJQyxXQUFVOzBDQUFHOzs7Ozs7Ozs7Ozs7a0NBR3BCLDhEQUFDRDt3QkFBSUMsV0FBVTs7MENBRWIsOERBQUNEO2dDQUFJQyxXQUFVOzBDQUFHOzs7Ozs7MENBR2xCLDhEQUFDRDtnQ0FBSUMsV0FBVTs7Ozs7OzBDQUdmLDhEQUFDRDtnQ0FBSUMsV0FBVTswQ0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSzVCLENBQUM7R0FwRXVCUDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvaW5kZXgudHN4PzE5YTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtjaGVja2VkLCBzZXRDaGVja2VkXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBvbkNoZWNrID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGNoZWNrZWQpO1xuICAgIGlmIChjaGVja2VkKSB7XG4gICAgICBzZXRDaGVja2VkKGZhbHNlKTtcbiAgICB9XG5cbiAgICBpZiAoIWNoZWNrZWQpIHtcbiAgICAgIHNldENoZWNrZWQodHJ1ZSk7XG4gICAgfVxuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWRhcmtBbHQgdGV4dC1saWdodCBtaW4taC1zY3JlZW4gcC0xNlwiPlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5DcmVhdGUgTmV4dCBBcHA8L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiR2VuZXJhdGVkIGJ5IGNyZWF0ZSBuZXh0IGFwcFwiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBmb250LWJvbGQgbWItNVwiPldlbGNvbWUsIEFsZXg8L2gxPlxuICAgICAgPGg0IGNsYXNzTmFtZT1cInRleHQtMnhsIHRleHQtbGlnaHRBbHQgbWItNVwiPllvdXIgdGFza3M8L2g0PlxuXG4gICAgICB7LyogVG9kb3MgKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICB7LyogVG9kbyAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1kYXJrIHAtNSByb3VuZGVkLW1kIGZsZXggaXRlbXMtY2VudGVyIGN1cnNvci1wb2ludGVyIG1iLTUgaG92ZXI6b3BhY2l0eS04MFwiPlxuICAgICAgICAgIHsvKiBDaGVja2JveCAqL31cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9e2BoLTUgdy01IG1yLTUgIHJvdW5kZWQteGwgICR7XG4gICAgICAgICAgICAgIGNoZWNrZWQgPyBcImJnLXByaW1hcnlcIiA6IFwiYmctZGFya0FsdFwiXG4gICAgICAgICAgICB9YH1cbiAgICAgICAgICAgIG9uQ2xpY2s9e29uQ2hlY2t9XG4gICAgICAgICAgPjwvZGl2PlxuXG4gICAgICAgICAgey8qIFRleHQgKi99XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5HZXQgbWlsazwvZGl2PlxuXG4gICAgICAgICAgey8qIERlbGV0ZSAqL31cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPkRlbGV0ZTwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWRhcmsgcC01IHJvdW5kZWQtbWQgZmxleCBpdGVtcy1jZW50ZXIgY3Vyc29yLXBvaW50ZXIgbWItNVwiPlxuICAgICAgICAgIHsvKiBDaGVja2JveCAqL31cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPk1ha2UgZGlubmVyPC9kaXY+XG5cbiAgICAgICAgICB7LyogVGV4dCAqL31cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPjwvZGl2PlxuXG4gICAgICAgICAgey8qIERlbGV0ZSAqL31cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPkRlbGV0ZTwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWRhcmsgcC01IHJvdW5kZWQtbWQgZmxleCBpdGVtcy1jZW50ZXIgY3Vyc29yLXBvaW50ZXIgbWItNVwiPlxuICAgICAgICAgIHsvKiBDaGVja2JveCAqL31cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPkN1dCB0aGUgZ3Jhc3M8L2Rpdj5cblxuICAgICAgICAgIHsvKiBUZXh0ICovfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+PC9kaXY+XG5cbiAgICAgICAgICB7LyogRGVsZXRlICovfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+RGVsZXRlPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiSGVhZCIsInVzZUNhbGxiYWNrIiwidXNlU3RhdGUiLCJIb21lIiwiY2hlY2tlZCIsInNldENoZWNrZWQiLCJvbkNoZWNrIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsInRpdGxlIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwibGluayIsInJlbCIsImhyZWYiLCJoMSIsImg0Iiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});