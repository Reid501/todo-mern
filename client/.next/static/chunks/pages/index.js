/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["pages/index"],{

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2FUsers%2Far%2FDesktop%2Ftodo-express%2Fclient%2Fsrc%2Fpages%2Findex.tsx&page=%2F!":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2FUsers%2Far%2FDesktop%2Ftodo-express%2Fclient%2Fsrc%2Fpages%2Findex.tsx&page=%2F! ***!
  \***************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("\n    (window.__NEXT_P = window.__NEXT_P || []).push([\n      \"/\",\n      function () {\n        return __webpack_require__(/*! ./src/pages/index.tsx */ \"./src/pages/index.tsx\");\n      }\n    ]);\n    if(true) {\n      module.hot.dispose(function () {\n        window.__NEXT_P.push([\"/\"])\n      });\n    }\n  //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWNsaWVudC1wYWdlcy1sb2FkZXIuanM/YWJzb2x1dGVQYWdlUGF0aD0lMkZVc2VycyUyRmFyJTJGRGVza3RvcCUyRnRvZG8tZXhwcmVzcyUyRmNsaWVudCUyRnNyYyUyRnBhZ2VzJTJGaW5kZXgudHN4JnBhZ2U9JTJGIS5qcyIsIm1hcHBpbmdzIjoiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxtQkFBTyxDQUFDLG9EQUF1QjtBQUM5QztBQUNBO0FBQ0EsT0FBTyxJQUFVO0FBQ2pCLE1BQU0sVUFBVTtBQUNoQjtBQUNBLE9BQU87QUFDUDtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8/OGU4ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAod2luZG93Ll9fTkVYVF9QID0gd2luZG93Ll9fTkVYVF9QIHx8IFtdKS5wdXNoKFtcbiAgICAgIFwiL1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gcmVxdWlyZShcIi4vc3JjL3BhZ2VzL2luZGV4LnRzeFwiKTtcbiAgICAgIH1cbiAgICBdKTtcbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKCkge1xuICAgICAgICB3aW5kb3cuX19ORVhUX1AucHVzaChbXCIvXCJdKVxuICAgICAgfSk7XG4gICAgfVxuICAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2FUsers%2Far%2FDesktop%2Ftodo-express%2Fclient%2Fsrc%2Fpages%2Findex.tsx&page=%2F!\n"));

/***/ }),

/***/ "./src/components/Todo.tsx":
/*!*********************************!*\
  !*** ./src/components/Todo.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst Todo = (param)=>{\n    let { text , key , complete , onClick , deleteTodo  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-dark p-5 rounded-md  cursor-pointer mb-5 hover:opacity-80 flex w-full relative\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                onClick: onClick,\n                className: \"h-5 w-5 mr-5  rounded-xl  \".concat(complete ? \"bg-gradient-to-b from-primary to-secondary\" : \"bg-darkAlt\")\n            }, void 0, false, {\n                fileName: \"/Users/ar/Desktop/todo-express/client/src/components/Todo.tsx\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-md \".concat(complete ? \"line-through\" : \"no-underline\"),\n                onClick: onClick,\n                children: text\n            }, void 0, false, {\n                fileName: \"/Users/ar/Desktop/todo-express/client/src/components/Todo.tsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute top-[50%] right-[16px] translate-y-[-50%] w-6 h-6 rounded-xl bg-red-700 flex items-center justify-center z-[100]\",\n                onClick: deleteTodo,\n                children: \"X\"\n            }, void 0, false, {\n                fileName: \"/Users/ar/Desktop/todo-express/client/src/components/Todo.tsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, key, true, {\n        fileName: \"/Users/ar/Desktop/todo-express/client/src/components/Todo.tsx\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Todo;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Todo);\nvar _c;\n$RefreshReg$(_c, \"Todo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Ub2RvLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBNEM7QUFVNUMsTUFBTUMsT0FBcUIsU0FBa0Q7UUFBakQsRUFBRUMsS0FBSSxFQUFFQyxJQUFHLEVBQUVDLFNBQVEsRUFBRUMsUUFBTyxFQUFFQyxXQUFVLEVBQUU7SUFDdEUscUJBQ0UsOERBQUNDO1FBQ0NDLFdBQVU7OzBCQUdWLDhEQUFDRDtnQkFDQ0YsU0FBU0E7Z0JBQ1RHLFdBQVcsNkJBRVYsT0FEQ0osV0FBVywrQ0FBK0MsWUFBWTs7Ozs7OzBCQUcxRSw4REFBQ0c7Z0JBQ0NDLFdBQVcsV0FBc0QsT0FBM0NKLFdBQVcsaUJBQWlCLGNBQWM7Z0JBQ2hFQyxTQUFTQTswQkFFUkg7Ozs7OzswQkFHSCw4REFBQ0s7Z0JBQ0NDLFdBQVU7Z0JBQ1ZILFNBQVNDOzBCQUNWOzs7Ozs7O09BbEJJSDs7Ozs7QUF1Qlg7S0EzQk1GO0FBNkJOLCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1RvZG8udHN4Pzk1NjIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZDLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbnRlcmZhY2UgVG9kb1R5cGUge1xuICBrZXk6IHN0cmluZztcbiAgdGV4dDogc3RyaW5nO1xuICBjb21wbGV0ZTogYm9vbGVhbjtcbiAgb25DbGljazogKCkgPT4gdm9pZDtcbiAgZGVsZXRlVG9kbzogKCkgPT4gdm9pZDtcbn1cblxuY29uc3QgVG9kbzogRkM8VG9kb1R5cGU+ID0gKHsgdGV4dCwga2V5LCBjb21wbGV0ZSwgb25DbGljaywgZGVsZXRlVG9kbyB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPVwiYmctZGFyayBwLTUgcm91bmRlZC1tZCAgY3Vyc29yLXBvaW50ZXIgbWItNSBob3ZlcjpvcGFjaXR5LTgwIGZsZXggdy1mdWxsIHJlbGF0aXZlXCJcbiAgICAgIGtleT17a2V5fVxuICAgID5cbiAgICAgIDxkaXZcbiAgICAgICAgb25DbGljaz17b25DbGlja31cbiAgICAgICAgY2xhc3NOYW1lPXtgaC01IHctNSBtci01ICByb3VuZGVkLXhsICAke1xuICAgICAgICAgIGNvbXBsZXRlID8gXCJiZy1ncmFkaWVudC10by1iIGZyb20tcHJpbWFyeSB0by1zZWNvbmRhcnlcIiA6IFwiYmctZGFya0FsdFwiXG4gICAgICAgIH1gfVxuICAgICAgPjwvZGl2PlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e2B0ZXh0LW1kICR7Y29tcGxldGUgPyBcImxpbmUtdGhyb3VnaFwiIDogXCJuby11bmRlcmxpbmVcIn1gfVxuICAgICAgICBvbkNsaWNrPXtvbkNsaWNrfVxuICAgICAgPlxuICAgICAgICB7dGV4dH1cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC1bNTAlXSByaWdodC1bMTZweF0gdHJhbnNsYXRlLXktWy01MCVdIHctNiBoLTYgcm91bmRlZC14bCBiZy1yZWQtNzAwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHotWzEwMF1cIlxuICAgICAgICBvbkNsaWNrPXtkZWxldGVUb2RvfVxuICAgICAgPlxuICAgICAgICBYXG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRvZG87XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJUb2RvIiwidGV4dCIsImtleSIsImNvbXBsZXRlIiwib25DbGljayIsImRlbGV0ZVRvZG8iLCJkaXYiLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Todo.tsx\n"));

/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Todo */ \"./src/components/Todo.tsx\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst API_BASE = \"http://localhost:3002\";\nfunction Home() {\n    _s();\n    const [todos, setTodos] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    const [popupActive, setPopupActive] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const [newTodo, setNewTodo] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const GetTodos = ()=>{\n        fetch(API_BASE + \"/todos\").then((res)=>res.json()).then((data)=>setTodos(data)).catch((error)=>console.error(\"Error: \", error));\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        GetTodos();\n    }, []);\n    const completeToDo = async (id)=>{\n        const data = await fetch(API_BASE + \"/todo/complete/\" + id, {\n            method: \"PUT\"\n        }).then((res)=>res.json());\n        setTodos((todos)=>todos.map((todo)=>{\n                if (todo._id === data._id) {\n                    todo.complete = data.complete;\n                }\n                return todo;\n            }));\n    };\n    const deleteTodo = async (id)=>{\n        const data = await fetch(API_BASE + \"/todo/delete/\" + id, {\n            method: \"DELETE\"\n        }).then((res)=>res.json());\n        setTodos((todos)=>todos.filter((todo)=>todo._id !== data._id));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-darkAlt text-light min-h-screen p-16\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Create Next App\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ar/Desktop/todo-express/client/src/pages/index.tsx\",\n                        lineNumber: 56,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ar/Desktop/todo-express/client/src/pages/index.tsx\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ar/Desktop/todo-express/client/src/pages/index.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ar/Desktop/todo-express/client/src/pages/index.tsx\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ar/Desktop/todo-express/client/src/pages/index.tsx\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-4xl font-bold mb-5\",\n                children: \"Welcome, Alex\"\n            }, void 0, false, {\n                fileName: \"/Users/ar/Desktop/todo-express/client/src/pages/index.tsx\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                className: \"text-2xl text-lightAlt mb-5\",\n                children: \"Your tasks\"\n            }, void 0, false, {\n                fileName: \"/Users/ar/Desktop/todo-express/client/src/pages/index.tsx\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"\",\n                children: todos.map((todo)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Todo__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        text: todo.text,\n                        complete: todo.complete,\n                        onClick: ()=>completeToDo(todo._id),\n                        deleteTodo: ()=>deleteTodo(todo._id)\n                    }, todo._id, false, {\n                        fileName: \"/Users/ar/Desktop/todo-express/client/src/pages/index.tsx\",\n                        lineNumber: 66,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/ar/Desktop/todo-express/client/src/pages/index.tsx\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ar/Desktop/todo-express/client/src/pages/index.tsx\",\n        lineNumber: 54,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"hBaeT8MXYiBrK1sejsTqGWSgcfw=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBcUM7QUFDUjtBQUNlO0FBRTVDLE1BQU1JLFdBQVc7QUFTRixTQUFTQyxPQUFPOztJQUM3QixNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR0osK0NBQVFBLENBQWtCLEVBQUU7SUFDdEQsTUFBTSxDQUFDSyxhQUFhQyxlQUFlLEdBQUdOLCtDQUFRQSxDQUFDLEtBQUs7SUFDcEQsTUFBTSxDQUFDTyxTQUFTQyxXQUFXLEdBQUdSLCtDQUFRQSxDQUFDO0lBRXZDLE1BQU1TLFdBQVcsSUFBTTtRQUNyQkMsTUFBTVQsV0FBVyxVQUNkVSxJQUFJLENBQUMsQ0FBQ0MsTUFBUUEsSUFBSUMsSUFBSSxJQUN0QkYsSUFBSSxDQUFDLENBQUNHLE9BQVNWLFNBQVNVLE9BQ3hCQyxLQUFLLENBQUMsQ0FBQ0MsUUFBVUMsUUFBUUQsS0FBSyxDQUFDLFdBQVdBO0lBQy9DO0lBRUFqQixnREFBU0EsQ0FBQyxJQUFNO1FBQ2RVO0lBQ0YsR0FBRyxFQUFFO0lBRUwsTUFBTVMsZUFBZSxPQUFPQyxLQUFlO1FBQ3pDLE1BQU1MLE9BQWlCLE1BQU1KLE1BQU1ULFdBQVcsb0JBQW9Ca0IsSUFBSTtZQUNwRUMsUUFBUTtRQUNWLEdBQUdULElBQUksQ0FBQyxDQUFDQyxNQUFRQSxJQUFJQyxJQUFJO1FBRXpCVCxTQUFTLENBQUNELFFBQ1JBLE1BQU1rQixHQUFHLENBQUMsQ0FBQ0MsT0FBUztnQkFDbEIsSUFBSUEsS0FBS0MsR0FBRyxLQUFLVCxLQUFLUyxHQUFHLEVBQUU7b0JBQ3pCRCxLQUFLRSxRQUFRLEdBQUdWLEtBQUtVLFFBQVE7Z0JBQy9CLENBQUM7Z0JBQ0QsT0FBT0Y7WUFDVDtJQUVKO0lBRUEsTUFBTUcsYUFBYSxPQUFPTixLQUFlO1FBQ3ZDLE1BQU1MLE9BQWlCLE1BQU1KLE1BQU1ULFdBQVcsa0JBQWtCa0IsSUFBSTtZQUNsRUMsUUFBUTtRQUNWLEdBQUdULElBQUksQ0FBQyxDQUFDQyxNQUFRQSxJQUFJQyxJQUFJO1FBRXpCVCxTQUFTLENBQUNELFFBQVVBLE1BQU11QixNQUFNLENBQUMsQ0FBQ0osT0FBU0EsS0FBS0MsR0FBRyxLQUFLVCxLQUFLUyxHQUFHO0lBQ2xFO0lBRUEscUJBQ0UsOERBQUNJO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDOUIsa0RBQUlBOztrQ0FDSCw4REFBQytCO2tDQUFNOzs7Ozs7a0NBQ1AsOERBQUNDO3dCQUFLQyxNQUFLO3dCQUFjQyxTQUFROzs7Ozs7a0NBQ2pDLDhEQUFDRjt3QkFBS0MsTUFBSzt3QkFBV0MsU0FBUTs7Ozs7O2tDQUM5Qiw4REFBQ0M7d0JBQUtDLEtBQUk7d0JBQU9DLE1BQUs7Ozs7Ozs7Ozs7OzswQkFFeEIsOERBQUNDO2dCQUFHUixXQUFVOzBCQUEwQjs7Ozs7OzBCQUN4Qyw4REFBQ1M7Z0JBQUdULFdBQVU7MEJBQThCOzs7Ozs7MEJBRTVDLDhEQUFDRDtnQkFBSUMsV0FBVTswQkFDWnpCLE1BQU1rQixHQUFHLENBQUMsQ0FBQ0MscUJBQ1YsOERBQUN6Qix3REFBSUE7d0JBRUh5QyxNQUFNaEIsS0FBS2dCLElBQUk7d0JBQ2ZkLFVBQVVGLEtBQUtFLFFBQVE7d0JBQ3ZCZSxTQUFTLElBQU1yQixhQUFhSSxLQUFLQyxHQUFHO3dCQUNwQ0UsWUFBWSxJQUFNQSxXQUFXSCxLQUFLQyxHQUFHO3VCQUpoQ0QsS0FBS0MsR0FBRzs7Ozs7Ozs7Ozs7Ozs7OztBQVV6QixDQUFDO0dBL0R1QnJCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9pbmRleC50c3g/MTlhMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVG9kbyBmcm9tIFwiQC9jb21wb25lbnRzL1RvZG9cIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgQVBJX0JBU0UgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMlwiO1xuXG5pbnRlcmZhY2UgVG9kb1R5cGUge1xuICBfaWQ6IHN0cmluZztcbiAgdGV4dDogc3RyaW5nO1xuICBjb21wbGV0ZTogYm9vbGVhbjtcbiAgdGltZXN0YW1wOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFt0b2Rvcywgc2V0VG9kb3NdID0gdXNlU3RhdGU8VG9kb1R5cGVbXSB8IFtdPihbXSk7XG4gIGNvbnN0IFtwb3B1cEFjdGl2ZSwgc2V0UG9wdXBBY3RpdmVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbbmV3VG9kbywgc2V0TmV3VG9kb10gPSB1c2VTdGF0ZShcIlwiKTtcblxuICBjb25zdCBHZXRUb2RvcyA9ICgpID0+IHtcbiAgICBmZXRjaChBUElfQkFTRSArIFwiL3RvZG9zXCIpXG4gICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICAgICAgLnRoZW4oKGRhdGEpID0+IHNldFRvZG9zKGRhdGEpKVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4gY29uc29sZS5lcnJvcihcIkVycm9yOiBcIiwgZXJyb3IpKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIEdldFRvZG9zKCk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBjb21wbGV0ZVRvRG8gPSBhc3luYyAoaWQ6IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IGRhdGE6IFRvZG9UeXBlID0gYXdhaXQgZmV0Y2goQVBJX0JBU0UgKyBcIi90b2RvL2NvbXBsZXRlL1wiICsgaWQsIHtcbiAgICAgIG1ldGhvZDogXCJQVVRcIixcbiAgICB9KS50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpO1xuXG4gICAgc2V0VG9kb3MoKHRvZG9zKSA9PlxuICAgICAgdG9kb3MubWFwKCh0b2RvKSA9PiB7XG4gICAgICAgIGlmICh0b2RvLl9pZCA9PT0gZGF0YS5faWQpIHtcbiAgICAgICAgICB0b2RvLmNvbXBsZXRlID0gZGF0YS5jb21wbGV0ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdG9kbztcbiAgICAgIH0pXG4gICAgKTtcbiAgfTtcblxuICBjb25zdCBkZWxldGVUb2RvID0gYXN5bmMgKGlkOiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCBkYXRhOiBUb2RvVHlwZSA9IGF3YWl0IGZldGNoKEFQSV9CQVNFICsgXCIvdG9kby9kZWxldGUvXCIgKyBpZCwge1xuICAgICAgbWV0aG9kOiBcIkRFTEVURVwiLFxuICAgIH0pLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSk7XG5cbiAgICBzZXRUb2RvcygodG9kb3MpID0+IHRvZG9zLmZpbHRlcigodG9kbykgPT4gdG9kby5faWQgIT09IGRhdGEuX2lkKSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWRhcmtBbHQgdGV4dC1saWdodCBtaW4taC1zY3JlZW4gcC0xNlwiPlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5DcmVhdGUgTmV4dCBBcHA8L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiR2VuZXJhdGVkIGJ5IGNyZWF0ZSBuZXh0IGFwcFwiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBmb250LWJvbGQgbWItNVwiPldlbGNvbWUsIEFsZXg8L2gxPlxuICAgICAgPGg0IGNsYXNzTmFtZT1cInRleHQtMnhsIHRleHQtbGlnaHRBbHQgbWItNVwiPllvdXIgdGFza3M8L2g0PlxuICAgICAgey8qIFRvZG9zICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAge3RvZG9zLm1hcCgodG9kbykgPT4gKFxuICAgICAgICAgIDxUb2RvXG4gICAgICAgICAgICBrZXk9e3RvZG8uX2lkfVxuICAgICAgICAgICAgdGV4dD17dG9kby50ZXh0fVxuICAgICAgICAgICAgY29tcGxldGU9e3RvZG8uY29tcGxldGV9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBjb21wbGV0ZVRvRG8odG9kby5faWQpfVxuICAgICAgICAgICAgZGVsZXRlVG9kbz17KCkgPT4gZGVsZXRlVG9kbyh0b2RvLl9pZCl9XG4gICAgICAgICAgLz5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJUb2RvIiwiSGVhZCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQVBJX0JBU0UiLCJIb21lIiwidG9kb3MiLCJzZXRUb2RvcyIsInBvcHVwQWN0aXZlIiwic2V0UG9wdXBBY3RpdmUiLCJuZXdUb2RvIiwic2V0TmV3VG9kbyIsIkdldFRvZG9zIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsImRhdGEiLCJjYXRjaCIsImVycm9yIiwiY29uc29sZSIsImNvbXBsZXRlVG9EbyIsImlkIiwibWV0aG9kIiwibWFwIiwidG9kbyIsIl9pZCIsImNvbXBsZXRlIiwiZGVsZXRlVG9kbyIsImZpbHRlciIsImRpdiIsImNsYXNzTmFtZSIsInRpdGxlIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwibGluayIsInJlbCIsImhyZWYiLCJoMSIsImg0IiwidGV4dCIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ }),

/***/ "./node_modules/next/head.js":
/*!***********************************!*\
  !*** ./node_modules/next/head.js ***!
  \***********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("module.exports = __webpack_require__(/*! ./dist/shared/lib/head */ \"./node_modules/next/dist/shared/lib/head.js\")\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9oZWFkLmpzLmpzIiwibWFwcGluZ3MiOiJBQUFBLGlIQUFrRCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9oZWFkLmpzPzg4NDkiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3Qvc2hhcmVkL2xpYi9oZWFkJylcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/head.js\n"));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["pages/_app","main"], function() { return __webpack_exec__("./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2FUsers%2Far%2FDesktop%2Ftodo-express%2Fclient%2Fsrc%2Fpages%2Findex.tsx&page=%2F!"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);