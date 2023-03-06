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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Todo */ \"./src/components/Todo.tsx\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst API_BASE = \"http://localhost:3002\";\nfunction Home() {\n    _s();\n    const [todos, setTodos] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    const [popupActive, setPopupActive] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const [newTodo, setNewTodo] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const GetTodos = ()=>{\n        fetch(API_BASE + \"/todos\").then((res)=>res.json()).then((data)=>setTodos(data)).catch((error)=>console.error(\"Error: \", error));\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        GetTodos();\n    }, []);\n    const completeToDo = async (id)=>{\n        const data = await fetch(API_BASE + \"/todo/complete/\" + id, {\n            method: \"PUT\"\n        }).then((res)=>res.json());\n        setTodos((todos)=>todos.map((todo)=>{\n                if (todo._id === data._id) {\n                    todo.complete = data.complete;\n                }\n                return todo;\n            }));\n    };\n    const deleteTodo = async (id)=>{\n        const data = await fetch(API_BASE + \"/todo/delete/\" + id, {\n            method: \"DELETE\"\n        }).then((res)=>res.json());\n        setTodos((todos)=>todos.filter((todo)=>todo._id !== data._id));\n    };\n    const addToDo = async ()=>{\n        const data = await fetch(API_BASE + \"/todo/new\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                text: newTodo\n            })\n        }).then((res)=>res.json());\n        setTodos([\n            ...todos,\n            data\n        ]);\n        setPopupActive(false);\n        setNewTodo(\"\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-darkAlt text-light min-h-screen p-16\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Create Next App\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ar/Desktop/todo-express/client/src/pages/index.tsx\",\n                        lineNumber: 72,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ar/Desktop/todo-express/client/src/pages/index.tsx\",\n                        lineNumber: 73,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ar/Desktop/todo-express/client/src/pages/index.tsx\",\n                        lineNumber: 74,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ar/Desktop/todo-express/client/src/pages/index.tsx\",\n                        lineNumber: 75,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ar/Desktop/todo-express/client/src/pages/index.tsx\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-4xl font-bold mb-5\",\n                children: \"Welcome, Alex\"\n            }, void 0, false, {\n                fileName: \"/Users/ar/Desktop/todo-express/client/src/pages/index.tsx\",\n                lineNumber: 77,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                className: \"text-2xl text-lightAlt mb-5\",\n                children: \"Your tasks\"\n            }, void 0, false, {\n                fileName: \"/Users/ar/Desktop/todo-express/client/src/pages/index.tsx\",\n                lineNumber: 78,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"\",\n                children: todos.map((todo)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Todo__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        text: todo.text,\n                        complete: todo.complete,\n                        onClick: ()=>completeToDo(todo._id),\n                        deleteTodo: ()=>deleteTodo(todo._id)\n                    }, todo._id, false, {\n                        fileName: \"/Users/ar/Desktop/todo-express/client/src/pages/index.tsx\",\n                        lineNumber: 82,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/ar/Desktop/todo-express/client/src/pages/index.tsx\",\n                lineNumber: 80,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"fixed bottom-32 right-16 flex items-center justify-center h-20 w-20 rounded-3xl text-4xl bg-gradient-to-b from-primary to-secondary cursor-pointer hover:opacity-80\",\n                onClick: ()=>setPopupActive(true),\n                children: \"+\"\n            }, void 0, false, {\n                fileName: \"/Users/ar/Desktop/todo-express/client/src/pages/index.tsx\",\n                lineNumber: 91,\n                columnNumber: 7\n            }, this),\n            popupActive ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"fixed top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] w-full max-w-[400px] bg-light p-16 rounded-md\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"cursor-pointer\",\n                        onClick: ()=>setPopupActive(false),\n                        children: \"x\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ar/Desktop/todo-express/client/src/pages/index.tsx\",\n                        lineNumber: 100,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                children: \"Add Task\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ar/Desktop/todo-express/client/src/pages/index.tsx\",\n                                lineNumber: 104,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                onChange: (e)=>setNewTodo(e.target.value),\n                                value: newTodo\n                            }, void 0, false, {\n                                fileName: \"/Users/ar/Desktop/todo-express/client/src/pages/index.tsx\",\n                                lineNumber: 105,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: addToDo,\n                                children: \"Create Task\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ar/Desktop/todo-express/client/src/pages/index.tsx\",\n                                lineNumber: 110,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ar/Desktop/todo-express/client/src/pages/index.tsx\",\n                        lineNumber: 103,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ar/Desktop/todo-express/client/src/pages/index.tsx\",\n                lineNumber: 99,\n                columnNumber: 9\n            }, this) : \"\"\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ar/Desktop/todo-express/client/src/pages/index.tsx\",\n        lineNumber: 70,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"hBaeT8MXYiBrK1sejsTqGWSgcfw=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxXQUFVO2dCQUNWVSxTQUFTLElBQU10QyxlQUFlLElBQUk7MEJBQ25DOzs7Ozs7WUFJQUQsNEJBQ0MsOERBQUM0QjtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNEO3dCQUFJQyxXQUFVO3dCQUFpQlUsU0FBUyxJQUFNdEMsZUFBZSxLQUFLO2tDQUFHOzs7Ozs7a0NBR3RFLDhEQUFDMkI7d0JBQUlDLFdBQVU7OzBDQUNiLDhEQUFDVzswQ0FBRzs7Ozs7OzBDQUNKLDhEQUFDQztnQ0FDQ0MsTUFBSztnQ0FDTEMsVUFBVSxDQUFDQyxJQUFNekMsV0FBV3lDLEVBQUVDLE1BQU0sQ0FBQ0MsS0FBSztnQ0FDMUNBLE9BQU81Qzs7Ozs7OzBDQUVULDhEQUFDNkM7Z0NBQU9SLFNBQVNqQjswQ0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7dUJBSTlCLEVBQ0Q7Ozs7Ozs7QUFHUCxDQUFDO0dBeEd1QnpCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9pbmRleC50c3g/MTlhMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVG9kbyBmcm9tIFwiQC9jb21wb25lbnRzL1RvZG9cIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgQVBJX0JBU0UgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMlwiO1xuXG5pbnRlcmZhY2UgVG9kb1R5cGUge1xuICBfaWQ6IHN0cmluZztcbiAgdGV4dDogc3RyaW5nO1xuICBjb21wbGV0ZTogYm9vbGVhbjtcbiAgdGltZXN0YW1wOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFt0b2Rvcywgc2V0VG9kb3NdID0gdXNlU3RhdGU8VG9kb1R5cGVbXSB8IFtdPihbXSk7XG4gIGNvbnN0IFtwb3B1cEFjdGl2ZSwgc2V0UG9wdXBBY3RpdmVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbbmV3VG9kbywgc2V0TmV3VG9kb10gPSB1c2VTdGF0ZShcIlwiKTtcblxuICBjb25zdCBHZXRUb2RvcyA9ICgpID0+IHtcbiAgICBmZXRjaChBUElfQkFTRSArIFwiL3RvZG9zXCIpXG4gICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICAgICAgLnRoZW4oKGRhdGEpID0+IHNldFRvZG9zKGRhdGEpKVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4gY29uc29sZS5lcnJvcihcIkVycm9yOiBcIiwgZXJyb3IpKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIEdldFRvZG9zKCk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBjb21wbGV0ZVRvRG8gPSBhc3luYyAoaWQ6IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IGRhdGE6IFRvZG9UeXBlID0gYXdhaXQgZmV0Y2goQVBJX0JBU0UgKyBcIi90b2RvL2NvbXBsZXRlL1wiICsgaWQsIHtcbiAgICAgIG1ldGhvZDogXCJQVVRcIixcbiAgICB9KS50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpO1xuXG4gICAgc2V0VG9kb3MoKHRvZG9zKSA9PlxuICAgICAgdG9kb3MubWFwKCh0b2RvKSA9PiB7XG4gICAgICAgIGlmICh0b2RvLl9pZCA9PT0gZGF0YS5faWQpIHtcbiAgICAgICAgICB0b2RvLmNvbXBsZXRlID0gZGF0YS5jb21wbGV0ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdG9kbztcbiAgICAgIH0pXG4gICAgKTtcbiAgfTtcblxuICBjb25zdCBkZWxldGVUb2RvID0gYXN5bmMgKGlkOiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCBkYXRhOiBUb2RvVHlwZSA9IGF3YWl0IGZldGNoKEFQSV9CQVNFICsgXCIvdG9kby9kZWxldGUvXCIgKyBpZCwge1xuICAgICAgbWV0aG9kOiBcIkRFTEVURVwiLFxuICAgIH0pLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSk7XG5cbiAgICBzZXRUb2RvcygodG9kb3MpID0+IHRvZG9zLmZpbHRlcigodG9kbykgPT4gdG9kby5faWQgIT09IGRhdGEuX2lkKSk7XG4gIH07XG5cbiAgY29uc3QgYWRkVG9EbyA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2goQVBJX0JBU0UgKyBcIi90b2RvL25ld1wiLCB7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIHRleHQ6IG5ld1RvZG8sXG4gICAgICB9KSxcbiAgICB9KS50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpO1xuXG4gICAgc2V0VG9kb3MoWy4uLnRvZG9zLCBkYXRhXSk7XG4gICAgc2V0UG9wdXBBY3RpdmUoZmFsc2UpO1xuICAgIHNldE5ld1RvZG8oXCJcIik7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWRhcmtBbHQgdGV4dC1saWdodCBtaW4taC1zY3JlZW4gcC0xNlwiPlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5DcmVhdGUgTmV4dCBBcHA8L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiR2VuZXJhdGVkIGJ5IGNyZWF0ZSBuZXh0IGFwcFwiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBmb250LWJvbGQgbWItNVwiPldlbGNvbWUsIEFsZXg8L2gxPlxuICAgICAgPGg0IGNsYXNzTmFtZT1cInRleHQtMnhsIHRleHQtbGlnaHRBbHQgbWItNVwiPllvdXIgdGFza3M8L2g0PlxuICAgICAgey8qIFRvZG9zICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAge3RvZG9zLm1hcCgodG9kbykgPT4gKFxuICAgICAgICAgIDxUb2RvXG4gICAgICAgICAgICBrZXk9e3RvZG8uX2lkfVxuICAgICAgICAgICAgdGV4dD17dG9kby50ZXh0fVxuICAgICAgICAgICAgY29tcGxldGU9e3RvZG8uY29tcGxldGV9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBjb21wbGV0ZVRvRG8odG9kby5faWQpfVxuICAgICAgICAgICAgZGVsZXRlVG9kbz17KCkgPT4gZGVsZXRlVG9kbyh0b2RvLl9pZCl9XG4gICAgICAgICAgLz5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPVwiZml4ZWQgYm90dG9tLTMyIHJpZ2h0LTE2IGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGgtMjAgdy0yMCByb3VuZGVkLTN4bCB0ZXh0LTR4bCBiZy1ncmFkaWVudC10by1iIGZyb20tcHJpbWFyeSB0by1zZWNvbmRhcnkgY3Vyc29yLXBvaW50ZXIgaG92ZXI6b3BhY2l0eS04MFwiXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFBvcHVwQWN0aXZlKHRydWUpfVxuICAgICAgPlxuICAgICAgICArXG4gICAgICA8L2Rpdj5cblxuICAgICAge3BvcHVwQWN0aXZlID8gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpeGVkIHRvcC1bNTAlXSBsZWZ0LVs1MCVdIHRyYW5zbGF0ZS15LVstNTAlXSB0cmFuc2xhdGUteC1bLTUwJV0gdy1mdWxsIG1heC13LVs0MDBweF0gYmctbGlnaHQgcC0xNiByb3VuZGVkLW1kXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlclwiIG9uQ2xpY2s9eygpID0+IHNldFBvcHVwQWN0aXZlKGZhbHNlKX0+XG4gICAgICAgICAgICB4XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgICAgIDxoMz5BZGQgVGFzazwvaDM+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE5ld1RvZG8oZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICB2YWx1ZT17bmV3VG9kb31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2FkZFRvRG99PkNyZWF0ZSBUYXNrPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSA6IChcbiAgICAgICAgXCJcIlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJUb2RvIiwiSGVhZCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQVBJX0JBU0UiLCJIb21lIiwidG9kb3MiLCJzZXRUb2RvcyIsInBvcHVwQWN0aXZlIiwic2V0UG9wdXBBY3RpdmUiLCJuZXdUb2RvIiwic2V0TmV3VG9kbyIsIkdldFRvZG9zIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsImRhdGEiLCJjYXRjaCIsImVycm9yIiwiY29uc29sZSIsImNvbXBsZXRlVG9EbyIsImlkIiwibWV0aG9kIiwibWFwIiwidG9kbyIsIl9pZCIsImNvbXBsZXRlIiwiZGVsZXRlVG9kbyIsImZpbHRlciIsImFkZFRvRG8iLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0ZXh0IiwiZGl2IiwiY2xhc3NOYW1lIiwidGl0bGUiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJsaW5rIiwicmVsIiwiaHJlZiIsImgxIiwiaDQiLCJvbkNsaWNrIiwiaDMiLCJpbnB1dCIsInR5cGUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});