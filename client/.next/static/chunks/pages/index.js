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
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Todo */ \"./src/components/Todo.tsx\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst API_BASE = \"http://localhost:3002\";\nfunction Home() {\n    _s();\n    const [todos, setTodos] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    const [popupActive, setPopupActive] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const [newTodo, setNewTodo] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const GetTodos = ()=>{\n        fetch(API_BASE + \"/todos\").then((res)=>res.json()).then((data)=>setTodos(data)).catch((error)=>console.error(\"Error: \", error));\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        GetTodos();\n    }, []);\n    const completeToDo = async (id)=>{\n        const data = await fetch(API_BASE + \"/todo/complete/\" + id, {\n            method: \"PUT\"\n        }).then((res)=>res.json());\n        setTodos((todos)=>todos.map((todo)=>{\n                if (todo._id === data._id) {\n                    todo.complete = data.complete;\n                }\n                return todo;\n            }));\n    };\n    const deleteTodo = async (id)=>{\n        const data = await fetch(API_BASE + \"/todo/delete/\" + id, {\n            method: \"DELETE\"\n        }).then((res)=>res.json());\n        setTodos((todos)=>todos.filter((todo)=>todo._id !== data._id));\n    };\n    const addToDo = async ()=>{\n        const data = await fetch(API_BASE + \"/todo/new\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                text: newTodo\n            })\n        }).then((res)=>res.json());\n        setTodos([\n            ...todos,\n            data\n        ]);\n        setPopupActive(false);\n        setNewTodo(\"\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-darkAlt text-light min-h-screen p-16\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Create Next App\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ar/Desktop/todo-express/client/src/pages/index.tsx\",\n                        lineNumber: 72,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ar/Desktop/todo-express/client/src/pages/index.tsx\",\n                        lineNumber: 73,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ar/Desktop/todo-express/client/src/pages/index.tsx\",\n                        lineNumber: 74,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ar/Desktop/todo-express/client/src/pages/index.tsx\",\n                        lineNumber: 75,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ar/Desktop/todo-express/client/src/pages/index.tsx\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-4xl font-bold mb-5\",\n                children: \"Welcome, Alex\"\n            }, void 0, false, {\n                fileName: \"/Users/ar/Desktop/todo-express/client/src/pages/index.tsx\",\n                lineNumber: 77,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                className: \"text-2xl text-lightAlt mb-5\",\n                children: \"Your tasks\"\n            }, void 0, false, {\n                fileName: \"/Users/ar/Desktop/todo-express/client/src/pages/index.tsx\",\n                lineNumber: 78,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"\",\n                children: todos.map((todo)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Todo__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        text: todo.text,\n                        complete: todo.complete,\n                        onClick: ()=>completeToDo(todo._id),\n                        deleteTodo: ()=>deleteTodo(todo._id)\n                    }, todo._id, false, {\n                        fileName: \"/Users/ar/Desktop/todo-express/client/src/pages/index.tsx\",\n                        lineNumber: 82,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/ar/Desktop/todo-express/client/src/pages/index.tsx\",\n                lineNumber: 80,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"fixed bottom-32 right-16 flex items-center justify-center h-20 w-20 rounded-3xl text-4xl bg-gradient-to-b from-primary to-secondary cursor-pointer hover:opacity-80\",\n                onClick: ()=>setPopupActive(true),\n                children: \"+\"\n            }, void 0, false, {\n                fileName: \"/Users/ar/Desktop/todo-express/client/src/pages/index.tsx\",\n                lineNumber: 91,\n                columnNumber: 7\n            }, this),\n            popupActive ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"fixed top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] w-full max-w-[400px] bg-light p-8 rounded-md  shadow-lg shadow-dark\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"cursor-pointer absolute top-[16px] right-[16px] text-sm text-light bg-red-700 rounded-xl h-[20px] w-[20px] flex items-center justify-center\",\n                        onClick: ()=>setPopupActive(false),\n                        children: \"x\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ar/Desktop/todo-express/client/src/pages/index.tsx\",\n                        lineNumber: 100,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: \"text-dark font-bold\",\n                                children: \"ADD TASK\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ar/Desktop/todo-express/client/src/pages/index.tsx\",\n                                lineNumber: 107,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                className: \"border-none outline-none bg-white p-2 rounded-md w-full my-4 text-dark font-bold\",\n                                type: \"text\",\n                                onChange: (e)=>setNewTodo(e.target.value),\n                                value: newTodo\n                            }, void 0, false, {\n                                fileName: \"/Users/ar/Desktop/todo-express/client/src/pages/index.tsx\",\n                                lineNumber: 108,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"bg-gradient-to-b from-primary to-secondary cursor-pointer hover:opacity-80 py-2 px-4 rounded-3xl font-bold text-lg\",\n                                onClick: addToDo,\n                                children: \"Create Task\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ar/Desktop/todo-express/client/src/pages/index.tsx\",\n                                lineNumber: 114,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ar/Desktop/todo-express/client/src/pages/index.tsx\",\n                        lineNumber: 106,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ar/Desktop/todo-express/client/src/pages/index.tsx\",\n                lineNumber: 99,\n                columnNumber: 9\n            }, this) : \"\"\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ar/Desktop/todo-express/client/src/pages/index.tsx\",\n        lineNumber: 70,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"hBaeT8MXYiBrK1sejsTqGWSgcfw=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBcUM7QUFDUjtBQUNlO0FBRTVDLE1BQU1JLFdBQVc7QUFTRixTQUFTQyxPQUFPOztJQUM3QixNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR0osK0NBQVFBLENBQWtCLEVBQUU7SUFDdEQsTUFBTSxDQUFDSyxhQUFhQyxlQUFlLEdBQUdOLCtDQUFRQSxDQUFDLEtBQUs7SUFDcEQsTUFBTSxDQUFDTyxTQUFTQyxXQUFXLEdBQUdSLCtDQUFRQSxDQUFDO0lBRXZDLE1BQU1TLFdBQVcsSUFBTTtRQUNyQkMsTUFBTVQsV0FBVyxVQUNkVSxJQUFJLENBQUMsQ0FBQ0MsTUFBUUEsSUFBSUMsSUFBSSxJQUN0QkYsSUFBSSxDQUFDLENBQUNHLE9BQVNWLFNBQVNVLE9BQ3hCQyxLQUFLLENBQUMsQ0FBQ0MsUUFBVUMsUUFBUUQsS0FBSyxDQUFDLFdBQVdBO0lBQy9DO0lBRUFqQixnREFBU0EsQ0FBQyxJQUFNO1FBQ2RVO0lBQ0YsR0FBRyxFQUFFO0lBRUwsTUFBTVMsZUFBZSxPQUFPQyxLQUFlO1FBQ3pDLE1BQU1MLE9BQWlCLE1BQU1KLE1BQU1ULFdBQVcsb0JBQW9Ca0IsSUFBSTtZQUNwRUMsUUFBUTtRQUNWLEdBQUdULElBQUksQ0FBQyxDQUFDQyxNQUFRQSxJQUFJQyxJQUFJO1FBRXpCVCxTQUFTLENBQUNELFFBQ1JBLE1BQU1rQixHQUFHLENBQUMsQ0FBQ0MsT0FBUztnQkFDbEIsSUFBSUEsS0FBS0MsR0FBRyxLQUFLVCxLQUFLUyxHQUFHLEVBQUU7b0JBQ3pCRCxLQUFLRSxRQUFRLEdBQUdWLEtBQUtVLFFBQVE7Z0JBQy9CLENBQUM7Z0JBQ0QsT0FBT0Y7WUFDVDtJQUVKO0lBRUEsTUFBTUcsYUFBYSxPQUFPTixLQUFlO1FBQ3ZDLE1BQU1MLE9BQWlCLE1BQU1KLE1BQU1ULFdBQVcsa0JBQWtCa0IsSUFBSTtZQUNsRUMsUUFBUTtRQUNWLEdBQUdULElBQUksQ0FBQyxDQUFDQyxNQUFRQSxJQUFJQyxJQUFJO1FBRXpCVCxTQUFTLENBQUNELFFBQVVBLE1BQU11QixNQUFNLENBQUMsQ0FBQ0osT0FBU0EsS0FBS0MsR0FBRyxLQUFLVCxLQUFLUyxHQUFHO0lBQ2xFO0lBRUEsTUFBTUksVUFBVSxVQUFZO1FBQzFCLE1BQU1iLE9BQU8sTUFBTUosTUFBTVQsV0FBVyxhQUFhO1lBQy9DbUIsUUFBUTtZQUNSUSxTQUFTO2dCQUNQLGdCQUFnQjtZQUNsQjtZQUNBQyxNQUFNQyxLQUFLQyxTQUFTLENBQUM7Z0JBQ25CQyxNQUFNekI7WUFDUjtRQUNGLEdBQUdJLElBQUksQ0FBQyxDQUFDQyxNQUFRQSxJQUFJQyxJQUFJO1FBRXpCVCxTQUFTO2VBQUlEO1lBQU9XO1NBQUs7UUFDekJSLGVBQWUsS0FBSztRQUNwQkUsV0FBVztJQUNiO0lBRUEscUJBQ0UsOERBQUN5QjtRQUFJQyxXQUFVOzswQkFDYiw4REFBQ3BDLGtEQUFJQTs7a0NBQ0gsOERBQUNxQztrQ0FBTTs7Ozs7O2tDQUNQLDhEQUFDQzt3QkFBS0MsTUFBSzt3QkFBY0MsU0FBUTs7Ozs7O2tDQUNqQyw4REFBQ0Y7d0JBQUtDLE1BQUs7d0JBQVdDLFNBQVE7Ozs7OztrQ0FDOUIsOERBQUNDO3dCQUFLQyxLQUFJO3dCQUFPQyxNQUFLOzs7Ozs7Ozs7Ozs7MEJBRXhCLDhEQUFDQztnQkFBR1IsV0FBVTswQkFBMEI7Ozs7OzswQkFDeEMsOERBQUNTO2dCQUFHVCxXQUFVOzBCQUE4Qjs7Ozs7OzBCQUU1Qyw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ1ovQixNQUFNa0IsR0FBRyxDQUFDLENBQUNDLHFCQUNWLDhEQUFDekIsd0RBQUlBO3dCQUVIbUMsTUFBTVYsS0FBS1UsSUFBSTt3QkFDZlIsVUFBVUYsS0FBS0UsUUFBUTt3QkFDdkJvQixTQUFTLElBQU0xQixhQUFhSSxLQUFLQyxHQUFHO3dCQUNwQ0UsWUFBWSxJQUFNQSxXQUFXSCxLQUFLQyxHQUFHO3VCQUpoQ0QsS0FBS0MsR0FBRzs7Ozs7Ozs7OzswQkFRbkIsOERBQUNVO2dCQUNDQyxXQUFVO2dCQUNWVSxTQUFTLElBQU10QyxlQUFlLElBQUk7MEJBQ25DOzs7Ozs7WUFJQUQsNEJBQ0MsOERBQUM0QjtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNEO3dCQUNDQyxXQUFVO3dCQUNWVSxTQUFTLElBQU10QyxlQUFlLEtBQUs7a0NBQ3BDOzs7Ozs7a0NBR0QsOERBQUMyQjt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUNXO2dDQUFHWCxXQUFVOzBDQUFzQjs7Ozs7OzBDQUNwQyw4REFBQ1k7Z0NBQ0NaLFdBQVU7Z0NBQ1ZhLE1BQUs7Z0NBQ0xDLFVBQVUsQ0FBQ0MsSUFBTXpDLFdBQVd5QyxFQUFFQyxNQUFNLENBQUNDLEtBQUs7Z0NBQzFDQSxPQUFPNUM7Ozs7OzswQ0FFVCw4REFBQzZDO2dDQUNDbEIsV0FBVTtnQ0FDVlUsU0FBU2pCOzBDQUNWOzs7Ozs7Ozs7Ozs7Ozs7Ozt1QkFNTCxFQUNEOzs7Ozs7O0FBR1AsQ0FBQztHQWpIdUJ6QjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvaW5kZXgudHN4PzE5YTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRvZG8gZnJvbSBcIkAvY29tcG9uZW50cy9Ub2RvXCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IEFQSV9CQVNFID0gXCJodHRwOi8vbG9jYWxob3N0OjMwMDJcIjtcblxuaW50ZXJmYWNlIFRvZG9UeXBlIHtcbiAgX2lkOiBzdHJpbmc7XG4gIHRleHQ6IHN0cmluZztcbiAgY29tcGxldGU6IGJvb2xlYW47XG4gIHRpbWVzdGFtcDogc3RyaW5nO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbdG9kb3MsIHNldFRvZG9zXSA9IHVzZVN0YXRlPFRvZG9UeXBlW10gfCBbXT4oW10pO1xuICBjb25zdCBbcG9wdXBBY3RpdmUsIHNldFBvcHVwQWN0aXZlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW25ld1RvZG8sIHNldE5ld1RvZG9dID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgY29uc3QgR2V0VG9kb3MgPSAoKSA9PiB7XG4gICAgZmV0Y2goQVBJX0JBU0UgKyBcIi90b2Rvc1wiKVxuICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgICAgIC50aGVuKChkYXRhKSA9PiBzZXRUb2RvcyhkYXRhKSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUuZXJyb3IoXCJFcnJvcjogXCIsIGVycm9yKSk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBHZXRUb2RvcygpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgY29tcGxldGVUb0RvID0gYXN5bmMgKGlkOiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCBkYXRhOiBUb2RvVHlwZSA9IGF3YWl0IGZldGNoKEFQSV9CQVNFICsgXCIvdG9kby9jb21wbGV0ZS9cIiArIGlkLCB7XG4gICAgICBtZXRob2Q6IFwiUFVUXCIsXG4gICAgfSkudGhlbigocmVzKSA9PiByZXMuanNvbigpKTtcblxuICAgIHNldFRvZG9zKCh0b2RvcykgPT5cbiAgICAgIHRvZG9zLm1hcCgodG9kbykgPT4ge1xuICAgICAgICBpZiAodG9kby5faWQgPT09IGRhdGEuX2lkKSB7XG4gICAgICAgICAgdG9kby5jb21wbGV0ZSA9IGRhdGEuY29tcGxldGU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRvZG87XG4gICAgICB9KVxuICAgICk7XG4gIH07XG5cbiAgY29uc3QgZGVsZXRlVG9kbyA9IGFzeW5jIChpZDogc3RyaW5nKSA9PiB7XG4gICAgY29uc3QgZGF0YTogVG9kb1R5cGUgPSBhd2FpdCBmZXRjaChBUElfQkFTRSArIFwiL3RvZG8vZGVsZXRlL1wiICsgaWQsIHtcbiAgICAgIG1ldGhvZDogXCJERUxFVEVcIixcbiAgICB9KS50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpO1xuXG4gICAgc2V0VG9kb3MoKHRvZG9zKSA9PiB0b2Rvcy5maWx0ZXIoKHRvZG8pID0+IHRvZG8uX2lkICE9PSBkYXRhLl9pZCkpO1xuICB9O1xuXG4gIGNvbnN0IGFkZFRvRG8gPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoKEFQSV9CQVNFICsgXCIvdG9kby9uZXdcIiwge1xuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICB0ZXh0OiBuZXdUb2RvLFxuICAgICAgfSksXG4gICAgfSkudGhlbigocmVzKSA9PiByZXMuanNvbigpKTtcblxuICAgIHNldFRvZG9zKFsuLi50b2RvcywgZGF0YV0pO1xuICAgIHNldFBvcHVwQWN0aXZlKGZhbHNlKTtcbiAgICBzZXROZXdUb2RvKFwiXCIpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJiZy1kYXJrQWx0IHRleHQtbGlnaHQgbWluLWgtc2NyZWVuIHAtMTZcIj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+Q3JlYXRlIE5leHQgQXBwPC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkdlbmVyYXRlZCBieSBjcmVhdGUgbmV4dCBhcHBcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC00eGwgZm9udC1ib2xkIG1iLTVcIj5XZWxjb21lLCBBbGV4PC9oMT5cbiAgICAgIDxoNCBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCB0ZXh0LWxpZ2h0QWx0IG1iLTVcIj5Zb3VyIHRhc2tzPC9oND5cbiAgICAgIHsvKiBUb2RvcyAqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgIHt0b2Rvcy5tYXAoKHRvZG8pID0+IChcbiAgICAgICAgICA8VG9kb1xuICAgICAgICAgICAga2V5PXt0b2RvLl9pZH1cbiAgICAgICAgICAgIHRleHQ9e3RvZG8udGV4dH1cbiAgICAgICAgICAgIGNvbXBsZXRlPXt0b2RvLmNvbXBsZXRlfVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gY29tcGxldGVUb0RvKHRvZG8uX2lkKX1cbiAgICAgICAgICAgIGRlbGV0ZVRvZG89eygpID0+IGRlbGV0ZVRvZG8odG9kby5faWQpfVxuICAgICAgICAgIC8+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT1cImZpeGVkIGJvdHRvbS0zMiByaWdodC0xNiBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBoLTIwIHctMjAgcm91bmRlZC0zeGwgdGV4dC00eGwgYmctZ3JhZGllbnQtdG8tYiBmcm9tLXByaW1hcnkgdG8tc2Vjb25kYXJ5IGN1cnNvci1wb2ludGVyIGhvdmVyOm9wYWNpdHktODBcIlxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRQb3B1cEFjdGl2ZSh0cnVlKX1cbiAgICAgID5cbiAgICAgICAgK1xuICAgICAgPC9kaXY+XG5cbiAgICAgIHtwb3B1cEFjdGl2ZSA/IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaXhlZCB0b3AtWzUwJV0gbGVmdC1bNTAlXSB0cmFuc2xhdGUteS1bLTUwJV0gdHJhbnNsYXRlLXgtWy01MCVdIHctZnVsbCBtYXgtdy1bNDAwcHhdIGJnLWxpZ2h0IHAtOCByb3VuZGVkLW1kICBzaGFkb3ctbGcgc2hhZG93LWRhcmtcIj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlciBhYnNvbHV0ZSB0b3AtWzE2cHhdIHJpZ2h0LVsxNnB4XSB0ZXh0LXNtIHRleHQtbGlnaHQgYmctcmVkLTcwMCByb3VuZGVkLXhsIGgtWzIwcHhdIHctWzIwcHhdIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFBvcHVwQWN0aXZlKGZhbHNlKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB4XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LWRhcmsgZm9udC1ib2xkXCI+QUREIFRBU0s8L2gzPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJvcmRlci1ub25lIG91dGxpbmUtbm9uZSBiZy13aGl0ZSBwLTIgcm91bmRlZC1tZCB3LWZ1bGwgbXktNCB0ZXh0LWRhcmsgZm9udC1ib2xkXCJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE5ld1RvZG8oZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICB2YWx1ZT17bmV3VG9kb31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWdyYWRpZW50LXRvLWIgZnJvbS1wcmltYXJ5IHRvLXNlY29uZGFyeSBjdXJzb3ItcG9pbnRlciBob3ZlcjpvcGFjaXR5LTgwIHB5LTIgcHgtNCByb3VuZGVkLTN4bCBmb250LWJvbGQgdGV4dC1sZ1wiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2FkZFRvRG99XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIENyZWF0ZSBUYXNrXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApIDogKFxuICAgICAgICBcIlwiXG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlRvZG8iLCJIZWFkIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJBUElfQkFTRSIsIkhvbWUiLCJ0b2RvcyIsInNldFRvZG9zIiwicG9wdXBBY3RpdmUiLCJzZXRQb3B1cEFjdGl2ZSIsIm5ld1RvZG8iLCJzZXROZXdUb2RvIiwiR2V0VG9kb3MiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwiZGF0YSIsImNhdGNoIiwiZXJyb3IiLCJjb25zb2xlIiwiY29tcGxldGVUb0RvIiwiaWQiLCJtZXRob2QiLCJtYXAiLCJ0b2RvIiwiX2lkIiwiY29tcGxldGUiLCJkZWxldGVUb2RvIiwiZmlsdGVyIiwiYWRkVG9EbyIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInRleHQiLCJkaXYiLCJjbGFzc05hbWUiLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsImxpbmsiLCJyZWwiLCJocmVmIiwiaDEiLCJoNCIsIm9uQ2xpY2siLCJoMyIsImlucHV0IiwidHlwZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

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