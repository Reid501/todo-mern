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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nfunction Home() {\n    _s();\n    const [checked, setChecked] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const onCheck = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(()=>{\n        console.log(checked);\n        if (checked) {\n            setChecked(false);\n            console.log(checked);\n        }\n        if (!checked) {\n            setChecked(true);\n            console.log(checked);\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-darkAlt text-light min-h-screen p-16\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Create Next App\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ar/Desktop/todo-express/client/src/pages/index.tsx\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ar/Desktop/todo-express/client/src/pages/index.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ar/Desktop/todo-express/client/src/pages/index.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ar/Desktop/todo-express/client/src/pages/index.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ar/Desktop/todo-express/client/src/pages/index.tsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-4xl font-bold mb-5\",\n                children: \"Welcome, Alex\"\n            }, void 0, false, {\n                fileName: \"/Users/ar/Desktop/todo-express/client/src/pages/index.tsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                className: \"text-2xl text-lightAlt mb-5\",\n                children: \"Your tasks\"\n            }, void 0, false, {\n                fileName: \"/Users/ar/Desktop/todo-express/client/src/pages/index.tsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"bg-dark p-5 rounded-md flex items-center cursor-pointer mb-5 hover:opacity-80\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"h-5 w-5 mr-5  rounded-xl  \".concat(checked ? \"bg-primary\" : \"bg-darkAlt\"),\n                                onClick: onCheck\n                            }, void 0, false, {\n                                fileName: \"/Users/ar/Desktop/todo-express/client/src/pages/index.tsx\",\n                                lineNumber: 36,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"\",\n                                children: \"Get milk\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ar/Desktop/todo-express/client/src/pages/index.tsx\",\n                                lineNumber: 44,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"\",\n                                children: \"Delete\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ar/Desktop/todo-express/client/src/pages/index.tsx\",\n                                lineNumber: 47,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ar/Desktop/todo-express/client/src/pages/index.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"bg-dark p-5 rounded-md flex items-center cursor-pointer mb-5\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"\",\n                                children: \"Make dinner\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ar/Desktop/todo-express/client/src/pages/index.tsx\",\n                                lineNumber: 52,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ar/Desktop/todo-express/client/src/pages/index.tsx\",\n                                lineNumber: 55,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"\",\n                                children: \"Delete\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ar/Desktop/todo-express/client/src/pages/index.tsx\",\n                                lineNumber: 58,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ar/Desktop/todo-express/client/src/pages/index.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"bg-dark p-5 rounded-md flex items-center cursor-pointer mb-5\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"\",\n                                children: \"Cut the grass\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ar/Desktop/todo-express/client/src/pages/index.tsx\",\n                                lineNumber: 63,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ar/Desktop/todo-express/client/src/pages/index.tsx\",\n                                lineNumber: 66,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"\",\n                                children: \"Delete\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ar/Desktop/todo-express/client/src/pages/index.tsx\",\n                                lineNumber: 69,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ar/Desktop/todo-express/client/src/pages/index.tsx\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ar/Desktop/todo-express/client/src/pages/index.tsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ar/Desktop/todo-express/client/src/pages/index.tsx\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"ca6MqBx9klGzF2c2dLZd8LwM0bQ=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUE2QjtBQUNpQjtBQUUvQixTQUFTRyxPQUFPOztJQUM3QixNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR0gsK0NBQVFBLENBQUMsS0FBSztJQUU1QyxNQUFNSSxVQUFVTCxrREFBV0EsQ0FBQyxJQUFNO1FBQ2hDTSxRQUFRQyxHQUFHLENBQUNKO1FBQ1osSUFBSUEsU0FBUztZQUNYQyxXQUFXLEtBQUs7WUFDaEJFLFFBQVFDLEdBQUcsQ0FBQ0o7UUFDZCxDQUFDO1FBRUQsSUFBSSxDQUFDQSxTQUFTO1lBQ1pDLFdBQVcsSUFBSTtZQUNmRSxRQUFRQyxHQUFHLENBQUNKO1FBQ2QsQ0FBQztJQUNILEdBQUcsRUFBRTtJQUVMLHFCQUNFLDhEQUFDSztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ1Ysa0RBQUlBOztrQ0FDSCw4REFBQ1c7a0NBQU07Ozs7OztrQ0FDUCw4REFBQ0M7d0JBQUtDLE1BQUs7d0JBQWNDLFNBQVE7Ozs7OztrQ0FDakMsOERBQUNGO3dCQUFLQyxNQUFLO3dCQUFXQyxTQUFROzs7Ozs7a0NBQzlCLDhEQUFDQzt3QkFBS0MsS0FBSTt3QkFBT0MsTUFBSzs7Ozs7Ozs7Ozs7OzBCQUV4Qiw4REFBQ0M7Z0JBQUdSLFdBQVU7MEJBQTBCOzs7Ozs7MEJBQ3hDLDhEQUFDUztnQkFBR1QsV0FBVTswQkFBOEI7Ozs7OzswQkFHNUMsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FFYiw4REFBQ0Q7d0JBQUlDLFdBQVU7OzBDQUViLDhEQUFDRDtnQ0FDQ0MsV0FBVyw2QkFFVixPQURDTixVQUFVLGVBQWUsWUFBWTtnQ0FFdkNnQixTQUFTZDs7Ozs7OzBDQUlYLDhEQUFDRztnQ0FBSUMsV0FBVTswQ0FBRzs7Ozs7OzBDQUdsQiw4REFBQ0Q7Z0NBQUlDLFdBQVU7MENBQUc7Ozs7Ozs7Ozs7OztrQ0FHcEIsOERBQUNEO3dCQUFJQyxXQUFVOzswQ0FFYiw4REFBQ0Q7Z0NBQUlDLFdBQVU7MENBQUc7Ozs7OzswQ0FHbEIsOERBQUNEO2dDQUFJQyxXQUFVOzs7Ozs7MENBR2YsOERBQUNEO2dDQUFJQyxXQUFVOzBDQUFHOzs7Ozs7Ozs7Ozs7a0NBR3BCLDhEQUFDRDt3QkFBSUMsV0FBVTs7MENBRWIsOERBQUNEO2dDQUFJQyxXQUFVOzBDQUFHOzs7Ozs7MENBR2xCLDhEQUFDRDtnQ0FBSUMsV0FBVTs7Ozs7OzBDQUdmLDhEQUFDRDtnQ0FBSUMsV0FBVTswQ0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSzVCLENBQUM7R0F0RXVCUDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvaW5kZXgudHN4PzE5YTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtjaGVja2VkLCBzZXRDaGVja2VkXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBvbkNoZWNrID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGNoZWNrZWQpO1xuICAgIGlmIChjaGVja2VkKSB7XG4gICAgICBzZXRDaGVja2VkKGZhbHNlKTtcbiAgICAgIGNvbnNvbGUubG9nKGNoZWNrZWQpO1xuICAgIH1cblxuICAgIGlmICghY2hlY2tlZCkge1xuICAgICAgc2V0Q2hlY2tlZCh0cnVlKTtcbiAgICAgIGNvbnNvbGUubG9nKGNoZWNrZWQpO1xuICAgIH1cbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJiZy1kYXJrQWx0IHRleHQtbGlnaHQgbWluLWgtc2NyZWVuIHAtMTZcIj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+Q3JlYXRlIE5leHQgQXBwPC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkdlbmVyYXRlZCBieSBjcmVhdGUgbmV4dCBhcHBcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC00eGwgZm9udC1ib2xkIG1iLTVcIj5XZWxjb21lLCBBbGV4PC9oMT5cbiAgICAgIDxoNCBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCB0ZXh0LWxpZ2h0QWx0IG1iLTVcIj5Zb3VyIHRhc2tzPC9oND5cblxuICAgICAgey8qIFRvZG9zICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgey8qIFRvZG8gKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctZGFyayBwLTUgcm91bmRlZC1tZCBmbGV4IGl0ZW1zLWNlbnRlciBjdXJzb3ItcG9pbnRlciBtYi01IGhvdmVyOm9wYWNpdHktODBcIj5cbiAgICAgICAgICB7LyogQ2hlY2tib3ggKi99XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgaC01IHctNSBtci01ICByb3VuZGVkLXhsICAke1xuICAgICAgICAgICAgICBjaGVja2VkID8gXCJiZy1wcmltYXJ5XCIgOiBcImJnLWRhcmtBbHRcIlxuICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICBvbkNsaWNrPXtvbkNoZWNrfVxuICAgICAgICAgID48L2Rpdj5cblxuICAgICAgICAgIHsvKiBUZXh0ICovfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+R2V0IG1pbGs8L2Rpdj5cblxuICAgICAgICAgIHsvKiBEZWxldGUgKi99XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5EZWxldGU8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1kYXJrIHAtNSByb3VuZGVkLW1kIGZsZXggaXRlbXMtY2VudGVyIGN1cnNvci1wb2ludGVyIG1iLTVcIj5cbiAgICAgICAgICB7LyogQ2hlY2tib3ggKi99XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5NYWtlIGRpbm5lcjwvZGl2PlxuXG4gICAgICAgICAgey8qIFRleHQgKi99XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj48L2Rpdj5cblxuICAgICAgICAgIHsvKiBEZWxldGUgKi99XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5EZWxldGU8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1kYXJrIHAtNSByb3VuZGVkLW1kIGZsZXggaXRlbXMtY2VudGVyIGN1cnNvci1wb2ludGVyIG1iLTVcIj5cbiAgICAgICAgICB7LyogQ2hlY2tib3ggKi99XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5DdXQgdGhlIGdyYXNzPC9kaXY+XG5cbiAgICAgICAgICB7LyogVGV4dCAqL31cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPjwvZGl2PlxuXG4gICAgICAgICAgey8qIERlbGV0ZSAqL31cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPkRlbGV0ZTwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkhlYWQiLCJ1c2VDYWxsYmFjayIsInVzZVN0YXRlIiwiSG9tZSIsImNoZWNrZWQiLCJzZXRDaGVja2VkIiwib25DaGVjayIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsImxpbmsiLCJyZWwiLCJocmVmIiwiaDEiLCJoNCIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});