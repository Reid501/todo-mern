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

/***/ "./src/components/Todo.tsx":
/*!*********************************!*\
  !*** ./src/components/Todo.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst Todo = (param)=>{\n    let { text , key , complete , onClick  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-dark p-5 rounded-md  cursor-pointer mb-5 hover:opacity-80 flex w-full relative\",\n        onClick: onClick,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"h-5 w-5 mr-5  rounded-xl  \".concat(complete ? \"bg-gradient-to-b from-primary to-secondary\" : \"bg-darkAlt\")\n            }, void 0, false, {\n                fileName: \"/Users/ar/Desktop/todo-express/client/src/components/Todo.tsx\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-md \".concat(complete ? \"line-through\" : \"no-underline\"),\n                children: text\n            }, void 0, false, {\n                fileName: \"/Users/ar/Desktop/todo-express/client/src/components/Todo.tsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute top-[50%] right-[16px] translate-y-[-50%] w-6 h-6 rounded-xl bg-red-700 flex items-center justify-center\",\n                children: \"X\"\n            }, void 0, false, {\n                fileName: \"/Users/ar/Desktop/todo-express/client/src/components/Todo.tsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, key, true, {\n        fileName: \"/Users/ar/Desktop/todo-express/client/src/components/Todo.tsx\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Todo;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Todo);\nvar _c;\n$RefreshReg$(_c, \"Todo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Ub2RvLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBNEM7QUFTNUMsTUFBTUMsT0FBcUIsU0FBc0M7UUFBckMsRUFBRUMsS0FBSSxFQUFFQyxJQUFHLEVBQUVDLFNBQVEsRUFBRUMsUUFBTyxFQUFFO0lBQzFELHFCQUNFLDhEQUFDQztRQUNDQyxXQUFVO1FBRVZGLFNBQVNBOzswQkFFVCw4REFBQ0M7Z0JBQ0NDLFdBQVcsNkJBRVYsT0FEQ0gsV0FBVywrQ0FBK0MsWUFBWTs7Ozs7OzBCQUcxRSw4REFBQ0U7Z0JBQUlDLFdBQVcsV0FBc0QsT0FBM0NILFdBQVcsaUJBQWlCLGNBQWM7MEJBQ2xFRjs7Ozs7OzBCQUdILDhEQUFDSTtnQkFBSUMsV0FBVTswQkFBb0g7Ozs7Ozs7T0FaOUhKOzs7OztBQWlCWDtLQXJCTUY7QUF1Qk4sK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVG9kby50c3g/OTU2MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRkMsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmludGVyZmFjZSBUb2RvVHlwZSB7XG4gIGtleTogc3RyaW5nO1xuICB0ZXh0OiBzdHJpbmc7XG4gIGNvbXBsZXRlOiBib29sZWFuO1xuICBvbkNsaWNrOiAoKSA9PiB2b2lkO1xufVxuXG5jb25zdCBUb2RvOiBGQzxUb2RvVHlwZT4gPSAoeyB0ZXh0LCBrZXksIGNvbXBsZXRlLCBvbkNsaWNrIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9XCJiZy1kYXJrIHAtNSByb3VuZGVkLW1kICBjdXJzb3ItcG9pbnRlciBtYi01IGhvdmVyOm9wYWNpdHktODAgZmxleCB3LWZ1bGwgcmVsYXRpdmVcIlxuICAgICAga2V5PXtrZXl9XG4gICAgICBvbkNsaWNrPXtvbkNsaWNrfVxuICAgID5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXtgaC01IHctNSBtci01ICByb3VuZGVkLXhsICAke1xuICAgICAgICAgIGNvbXBsZXRlID8gXCJiZy1ncmFkaWVudC10by1iIGZyb20tcHJpbWFyeSB0by1zZWNvbmRhcnlcIiA6IFwiYmctZGFya0FsdFwiXG4gICAgICAgIH1gfVxuICAgICAgPjwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2B0ZXh0LW1kICR7Y29tcGxldGUgPyBcImxpbmUtdGhyb3VnaFwiIDogXCJuby11bmRlcmxpbmVcIn1gfT5cbiAgICAgICAge3RleHR9XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtWzUwJV0gcmlnaHQtWzE2cHhdIHRyYW5zbGF0ZS15LVstNTAlXSB3LTYgaC02IHJvdW5kZWQteGwgYmctcmVkLTcwMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICBYXG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRvZG87XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJUb2RvIiwidGV4dCIsImtleSIsImNvbXBsZXRlIiwib25DbGljayIsImRpdiIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Todo.tsx\n"));

/***/ })

});