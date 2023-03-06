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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Todo */ \"./src/components/Todo.tsx\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst API_BASE = \"http://localhost:3002\";\nfunction Home() {\n    _s();\n    const [todos, setTodos] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    const [popupActive, setPopupActive] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const [newTodo, setNewTodo] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const GetTodos = ()=>{\n        fetch(API_BASE + \"/todos\").then((res)=>res.json()).then((data)=>setTodos(data)).catch((error)=>console.error(\"Error: \", error));\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        GetTodos();\n    }, []);\n    const completeToDo = async (id)=>{\n        const data = await fetch(API_BASE + \"/todo/complete/\" + id, {\n            method: \"PUT\"\n        }).then((res)=>res.json());\n        setTodos((todos)=>todos.map((todo)=>{\n                if (todo._id === data._id) {\n                    todo.complete = data.complete;\n                }\n                return todo;\n            }));\n    };\n    const deleteTodo = async (id)=>{\n        const data = await fetch(API_BASE + \"/todo/delete/\" + id, {\n            method: \"DELETE\"\n        }).then((res)=>res.json());\n        setTodos((todos)=>todos.filter((todo)=>todo._id !== data._id));\n    };\n    const addToDo = async ()=>{\n        const data = await fetch(API_BASE + \"/todo/new\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                text: newTodo\n            })\n        }).then((res)=>res.json());\n        setTodos([\n            ...todos,\n            data\n        ]);\n        setPopupActive(false);\n        setNewTodo(\"\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-darkAlt text-light min-h-screen p-16\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Create Next App\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ar/Desktop/todo-express/client/src/pages/index.tsx\",\n                        lineNumber: 72,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ar/Desktop/todo-express/client/src/pages/index.tsx\",\n                        lineNumber: 73,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ar/Desktop/todo-express/client/src/pages/index.tsx\",\n                        lineNumber: 74,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ar/Desktop/todo-express/client/src/pages/index.tsx\",\n                        lineNumber: 75,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ar/Desktop/todo-express/client/src/pages/index.tsx\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-4xl font-bold mb-5\",\n                children: \"Welcome, Alex\"\n            }, void 0, false, {\n                fileName: \"/Users/ar/Desktop/todo-express/client/src/pages/index.tsx\",\n                lineNumber: 77,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                className: \"text-2xl text-lightAlt mb-5\",\n                children: \"Your tasks\"\n            }, void 0, false, {\n                fileName: \"/Users/ar/Desktop/todo-express/client/src/pages/index.tsx\",\n                lineNumber: 78,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"\",\n                children: todos.map((todo)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Todo__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        text: todo.text,\n                        complete: todo.complete,\n                        onClick: ()=>completeToDo(todo._id),\n                        deleteTodo: ()=>deleteTodo(todo._id)\n                    }, todo._id, false, {\n                        fileName: \"/Users/ar/Desktop/todo-express/client/src/pages/index.tsx\",\n                        lineNumber: 82,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/ar/Desktop/todo-express/client/src/pages/index.tsx\",\n                lineNumber: 80,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"fixed bottom-32 right-16 flex items-center justify-center h-20 w-20 rounded-3xl text-4xl bg-gradient-to-b from-primary to-secondary cursor-pointer hover:opacity-80\",\n                onClick: ()=>setPopupActive(true),\n                children: \"+\"\n            }, void 0, false, {\n                fileName: \"/Users/ar/Desktop/todo-express/client/src/pages/index.tsx\",\n                lineNumber: 91,\n                columnNumber: 7\n            }, this),\n            popupActive ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"fixed top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] w-full max-w-[400px] bg-light p-16 rounded-md  shadow-lg shadow-dark\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"cursor-pointer absolute top-[16px] right-[16px] text-md text-light bg-red-700 rounded-md h-[16px] w-[20px] flex items-center justify-center\",\n                        onClick: ()=>setPopupActive(false),\n                        children: \"x\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ar/Desktop/todo-express/client/src/pages/index.tsx\",\n                        lineNumber: 100,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                children: \"Add Task\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ar/Desktop/todo-express/client/src/pages/index.tsx\",\n                                lineNumber: 107,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                onChange: (e)=>setNewTodo(e.target.value),\n                                value: newTodo\n                            }, void 0, false, {\n                                fileName: \"/Users/ar/Desktop/todo-express/client/src/pages/index.tsx\",\n                                lineNumber: 108,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: addToDo,\n                                children: \"Create Task\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ar/Desktop/todo-express/client/src/pages/index.tsx\",\n                                lineNumber: 113,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ar/Desktop/todo-express/client/src/pages/index.tsx\",\n                        lineNumber: 106,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ar/Desktop/todo-express/client/src/pages/index.tsx\",\n                lineNumber: 99,\n                columnNumber: 9\n            }, this) : \"\"\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ar/Desktop/todo-express/client/src/pages/index.tsx\",\n        lineNumber: 70,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"hBaeT8MXYiBrK1sejsTqGWSgcfw=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxXQUFVO2dCQUNWVSxTQUFTLElBQU10QyxlQUFlLElBQUk7MEJBQ25DOzs7Ozs7WUFJQUQsNEJBQ0MsOERBQUM0QjtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNEO3dCQUNDQyxXQUFVO3dCQUNWVSxTQUFTLElBQU10QyxlQUFlLEtBQUs7a0NBQ3BDOzs7Ozs7a0NBR0QsOERBQUMyQjt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUNXOzBDQUFHOzs7Ozs7MENBQ0osOERBQUNDO2dDQUNDQyxNQUFLO2dDQUNMQyxVQUFVLENBQUNDLElBQU16QyxXQUFXeUMsRUFBRUMsTUFBTSxDQUFDQyxLQUFLO2dDQUMxQ0EsT0FBTzVDOzs7Ozs7MENBRVQsOERBQUM2QztnQ0FBT1IsU0FBU2pCOzBDQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozt1QkFJOUIsRUFDRDs7Ozs7OztBQUdQLENBQUM7R0EzR3VCekI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeD8xOWEwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUb2RvIGZyb20gXCJAL2NvbXBvbmVudHMvVG9kb1wiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBBUElfQkFTRSA9IFwiaHR0cDovL2xvY2FsaG9zdDozMDAyXCI7XG5cbmludGVyZmFjZSBUb2RvVHlwZSB7XG4gIF9pZDogc3RyaW5nO1xuICB0ZXh0OiBzdHJpbmc7XG4gIGNvbXBsZXRlOiBib29sZWFuO1xuICB0aW1lc3RhbXA6IHN0cmluZztcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW3RvZG9zLCBzZXRUb2Rvc10gPSB1c2VTdGF0ZTxUb2RvVHlwZVtdIHwgW10+KFtdKTtcbiAgY29uc3QgW3BvcHVwQWN0aXZlLCBzZXRQb3B1cEFjdGl2ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtuZXdUb2RvLCBzZXROZXdUb2RvXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIGNvbnN0IEdldFRvZG9zID0gKCkgPT4ge1xuICAgIGZldGNoKEFQSV9CQVNFICsgXCIvdG9kb3NcIilcbiAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXG4gICAgICAudGhlbigoZGF0YSkgPT4gc2V0VG9kb3MoZGF0YSkpXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiBjb25zb2xlLmVycm9yKFwiRXJyb3I6IFwiLCBlcnJvcikpO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgR2V0VG9kb3MoKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGNvbXBsZXRlVG9EbyA9IGFzeW5jIChpZDogc3RyaW5nKSA9PiB7XG4gICAgY29uc3QgZGF0YTogVG9kb1R5cGUgPSBhd2FpdCBmZXRjaChBUElfQkFTRSArIFwiL3RvZG8vY29tcGxldGUvXCIgKyBpZCwge1xuICAgICAgbWV0aG9kOiBcIlBVVFwiLFxuICAgIH0pLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSk7XG5cbiAgICBzZXRUb2RvcygodG9kb3MpID0+XG4gICAgICB0b2Rvcy5tYXAoKHRvZG8pID0+IHtcbiAgICAgICAgaWYgKHRvZG8uX2lkID09PSBkYXRhLl9pZCkge1xuICAgICAgICAgIHRvZG8uY29tcGxldGUgPSBkYXRhLmNvbXBsZXRlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0b2RvO1xuICAgICAgfSlcbiAgICApO1xuICB9O1xuXG4gIGNvbnN0IGRlbGV0ZVRvZG8gPSBhc3luYyAoaWQ6IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IGRhdGE6IFRvZG9UeXBlID0gYXdhaXQgZmV0Y2goQVBJX0JBU0UgKyBcIi90b2RvL2RlbGV0ZS9cIiArIGlkLCB7XG4gICAgICBtZXRob2Q6IFwiREVMRVRFXCIsXG4gICAgfSkudGhlbigocmVzKSA9PiByZXMuanNvbigpKTtcblxuICAgIHNldFRvZG9zKCh0b2RvcykgPT4gdG9kb3MuZmlsdGVyKCh0b2RvKSA9PiB0b2RvLl9pZCAhPT0gZGF0YS5faWQpKTtcbiAgfTtcblxuICBjb25zdCBhZGRUb0RvID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaChBUElfQkFTRSArIFwiL3RvZG8vbmV3XCIsIHtcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgdGV4dDogbmV3VG9kbyxcbiAgICAgIH0pLFxuICAgIH0pLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSk7XG5cbiAgICBzZXRUb2RvcyhbLi4udG9kb3MsIGRhdGFdKTtcbiAgICBzZXRQb3B1cEFjdGl2ZShmYWxzZSk7XG4gICAgc2V0TmV3VG9kbyhcIlwiKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctZGFya0FsdCB0ZXh0LWxpZ2h0IG1pbi1oLXNjcmVlbiBwLTE2XCI+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkNyZWF0ZSBOZXh0IEFwcDwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJHZW5lcmF0ZWQgYnkgY3JlYXRlIG5leHQgYXBwXCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNHhsIGZvbnQtYm9sZCBtYi01XCI+V2VsY29tZSwgQWxleDwvaDE+XG4gICAgICA8aDQgY2xhc3NOYW1lPVwidGV4dC0yeGwgdGV4dC1saWdodEFsdCBtYi01XCI+WW91ciB0YXNrczwvaDQ+XG4gICAgICB7LyogVG9kb3MgKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICB7dG9kb3MubWFwKCh0b2RvKSA9PiAoXG4gICAgICAgICAgPFRvZG9cbiAgICAgICAgICAgIGtleT17dG9kby5faWR9XG4gICAgICAgICAgICB0ZXh0PXt0b2RvLnRleHR9XG4gICAgICAgICAgICBjb21wbGV0ZT17dG9kby5jb21wbGV0ZX1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGNvbXBsZXRlVG9Ebyh0b2RvLl9pZCl9XG4gICAgICAgICAgICBkZWxldGVUb2RvPXsoKSA9PiBkZWxldGVUb2RvKHRvZG8uX2lkKX1cbiAgICAgICAgICAvPlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9XCJmaXhlZCBib3R0b20tMzIgcmlnaHQtMTYgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgaC0yMCB3LTIwIHJvdW5kZWQtM3hsIHRleHQtNHhsIGJnLWdyYWRpZW50LXRvLWIgZnJvbS1wcmltYXJ5IHRvLXNlY29uZGFyeSBjdXJzb3ItcG9pbnRlciBob3ZlcjpvcGFjaXR5LTgwXCJcbiAgICAgICAgb25DbGljaz17KCkgPT4gc2V0UG9wdXBBY3RpdmUodHJ1ZSl9XG4gICAgICA+XG4gICAgICAgICtcbiAgICAgIDwvZGl2PlxuXG4gICAgICB7cG9wdXBBY3RpdmUgPyAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZml4ZWQgdG9wLVs1MCVdIGxlZnQtWzUwJV0gdHJhbnNsYXRlLXktWy01MCVdIHRyYW5zbGF0ZS14LVstNTAlXSB3LWZ1bGwgbWF4LXctWzQwMHB4XSBiZy1saWdodCBwLTE2IHJvdW5kZWQtbWQgIHNoYWRvdy1sZyBzaGFkb3ctZGFya1wiPlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyIGFic29sdXRlIHRvcC1bMTZweF0gcmlnaHQtWzE2cHhdIHRleHQtbWQgdGV4dC1saWdodCBiZy1yZWQtNzAwIHJvdW5kZWQtbWQgaC1bMTZweF0gdy1bMjBweF0gZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0UG9wdXBBY3RpdmUoZmFsc2UpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHhcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICAgICAgPGgzPkFkZCBUYXNrPC9oMz5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TmV3VG9kbyhlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgIHZhbHVlPXtuZXdUb2RvfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17YWRkVG9Eb30+Q3JlYXRlIFRhc2s8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApIDogKFxuICAgICAgICBcIlwiXG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlRvZG8iLCJIZWFkIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJBUElfQkFTRSIsIkhvbWUiLCJ0b2RvcyIsInNldFRvZG9zIiwicG9wdXBBY3RpdmUiLCJzZXRQb3B1cEFjdGl2ZSIsIm5ld1RvZG8iLCJzZXROZXdUb2RvIiwiR2V0VG9kb3MiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwiZGF0YSIsImNhdGNoIiwiZXJyb3IiLCJjb25zb2xlIiwiY29tcGxldGVUb0RvIiwiaWQiLCJtZXRob2QiLCJtYXAiLCJ0b2RvIiwiX2lkIiwiY29tcGxldGUiLCJkZWxldGVUb2RvIiwiZmlsdGVyIiwiYWRkVG9EbyIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInRleHQiLCJkaXYiLCJjbGFzc05hbWUiLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsImxpbmsiLCJyZWwiLCJocmVmIiwiaDEiLCJoNCIsIm9uQ2xpY2siLCJoMyIsImlucHV0IiwidHlwZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});