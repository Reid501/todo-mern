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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Todo */ \"./src/components/Todo.tsx\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst API_BASE = \"http://localhost:3002\";\nfunction Home() {\n    _s();\n    const [todos, setTodos] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    const [popupActive, setPopupActive] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const [newTodo, setNewTodo] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const GetTodos = ()=>{\n        fetch(API_BASE + \"/todos\").then((res)=>res.json()).then((data)=>setTodos(data)).catch((error)=>console.error(\"Error: \", error));\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        GetTodos();\n    }, []);\n    const completeToDo = async (id)=>{\n        const data = await fetch(API_BASE + \"/todo/complete/\" + id, {\n            method: \"PUT\"\n        }).then((res)=>res.json());\n        setTodos((todos)=>todos.map((todo)=>{\n                if (todo._id === data._id) {\n                    todo.complete = data.complete;\n                }\n                return todo;\n            }));\n    };\n    const deleteTodo = async (id)=>{\n        const data = await fetch(API_BASE + \"/todo/delete/\" + id, {\n            method: \"DELETE\"\n        }).then((res)=>res.json());\n        setTodos((todos)=>todos.filter((todo)=>todo._id !== data._id));\n    };\n    const addToDo = async ()=>{\n        const data = await fetch(API_BASE + \"/todo/new\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                text: newTodo\n            })\n        }).then((res)=>res.json());\n        setTodos([\n            ...todos,\n            data\n        ]);\n        setPopupActive(false);\n        setNewTodo(\"\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-darkAlt text-light min-h-screen p-16\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Create Next App\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ar/Desktop/todo-express/client/src/pages/index.tsx\",\n                        lineNumber: 72,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ar/Desktop/todo-express/client/src/pages/index.tsx\",\n                        lineNumber: 73,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ar/Desktop/todo-express/client/src/pages/index.tsx\",\n                        lineNumber: 74,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ar/Desktop/todo-express/client/src/pages/index.tsx\",\n                        lineNumber: 75,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ar/Desktop/todo-express/client/src/pages/index.tsx\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-4xl font-bold mb-5\",\n                children: \"Welcome, Alex\"\n            }, void 0, false, {\n                fileName: \"/Users/ar/Desktop/todo-express/client/src/pages/index.tsx\",\n                lineNumber: 77,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                className: \"text-2xl text-lightAlt mb-5\",\n                children: \"Your tasks\"\n            }, void 0, false, {\n                fileName: \"/Users/ar/Desktop/todo-express/client/src/pages/index.tsx\",\n                lineNumber: 78,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"\",\n                children: todos.map((todo)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Todo__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        text: todo.text,\n                        complete: todo.complete,\n                        onClick: ()=>completeToDo(todo._id),\n                        deleteTodo: ()=>deleteTodo(todo._id)\n                    }, todo._id, false, {\n                        fileName: \"/Users/ar/Desktop/todo-express/client/src/pages/index.tsx\",\n                        lineNumber: 82,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/ar/Desktop/todo-express/client/src/pages/index.tsx\",\n                lineNumber: 80,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"fixed bottom-32 right-16 flex items-center justify-center h-20 w-20 rounded-3xl text-4xl bg-gradient-to-b from-primary to-secondary cursor-pointer hover:opacity-80\",\n                onClick: ()=>setPopupActive(true),\n                children: \"+\"\n            }, void 0, false, {\n                fileName: \"/Users/ar/Desktop/todo-express/client/src/pages/index.tsx\",\n                lineNumber: 91,\n                columnNumber: 7\n            }, this),\n            popupActive ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"fixed top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] w-full max-w-[400px] bg-light p-16 rounded-md  shadow-lg shadow-dark\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"cursor-pointer absolute top-[16px] right-[16px] text-sm text-light bg-red-700 rounded-xl h-[20px] w-[20px] flex items-center justify-center\",\n                        onClick: ()=>setPopupActive(false),\n                        children: \"x\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ar/Desktop/todo-express/client/src/pages/index.tsx\",\n                        lineNumber: 100,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: \"text-dark font-bold\",\n                                children: \"ADD TASK\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ar/Desktop/todo-express/client/src/pages/index.tsx\",\n                                lineNumber: 107,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                className: \"border-none outline-none bg-white p-2 rounded-md w-full my-4\",\n                                type: \"text\",\n                                onChange: (e)=>setNewTodo(e.target.value),\n                                value: newTodo\n                            }, void 0, false, {\n                                fileName: \"/Users/ar/Desktop/todo-express/client/src/pages/index.tsx\",\n                                lineNumber: 108,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"bg-gradient-to-b from-primary to-secondary cursor-pointer hover:opacity-80 py-2 px-4 rounded-3xl font-bold text-lg\",\n                                onClick: addToDo,\n                                children: \"Create Task\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ar/Desktop/todo-express/client/src/pages/index.tsx\",\n                                lineNumber: 114,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ar/Desktop/todo-express/client/src/pages/index.tsx\",\n                        lineNumber: 106,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ar/Desktop/todo-express/client/src/pages/index.tsx\",\n                lineNumber: 99,\n                columnNumber: 9\n            }, this) : \"\"\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ar/Desktop/todo-express/client/src/pages/index.tsx\",\n        lineNumber: 70,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"hBaeT8MXYiBrK1sejsTqGWSgcfw=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxXQUFVO2dCQUNWVSxTQUFTLElBQU10QyxlQUFlLElBQUk7MEJBQ25DOzs7Ozs7WUFJQUQsNEJBQ0MsOERBQUM0QjtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNEO3dCQUNDQyxXQUFVO3dCQUNWVSxTQUFTLElBQU10QyxlQUFlLEtBQUs7a0NBQ3BDOzs7Ozs7a0NBR0QsOERBQUMyQjt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUNXO2dDQUFHWCxXQUFVOzBDQUFzQjs7Ozs7OzBDQUNwQyw4REFBQ1k7Z0NBQ0NaLFdBQVU7Z0NBQ1ZhLE1BQUs7Z0NBQ0xDLFVBQVUsQ0FBQ0MsSUFBTXpDLFdBQVd5QyxFQUFFQyxNQUFNLENBQUNDLEtBQUs7Z0NBQzFDQSxPQUFPNUM7Ozs7OzswQ0FFVCw4REFBQzZDO2dDQUNDbEIsV0FBVTtnQ0FDVlUsU0FBU2pCOzBDQUNWOzs7Ozs7Ozs7Ozs7Ozs7Ozt1QkFNTCxFQUNEOzs7Ozs7O0FBR1AsQ0FBQztHQWpIdUJ6QjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvaW5kZXgudHN4PzE5YTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRvZG8gZnJvbSBcIkAvY29tcG9uZW50cy9Ub2RvXCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IEFQSV9CQVNFID0gXCJodHRwOi8vbG9jYWxob3N0OjMwMDJcIjtcblxuaW50ZXJmYWNlIFRvZG9UeXBlIHtcbiAgX2lkOiBzdHJpbmc7XG4gIHRleHQ6IHN0cmluZztcbiAgY29tcGxldGU6IGJvb2xlYW47XG4gIHRpbWVzdGFtcDogc3RyaW5nO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbdG9kb3MsIHNldFRvZG9zXSA9IHVzZVN0YXRlPFRvZG9UeXBlW10gfCBbXT4oW10pO1xuICBjb25zdCBbcG9wdXBBY3RpdmUsIHNldFBvcHVwQWN0aXZlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW25ld1RvZG8sIHNldE5ld1RvZG9dID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgY29uc3QgR2V0VG9kb3MgPSAoKSA9PiB7XG4gICAgZmV0Y2goQVBJX0JBU0UgKyBcIi90b2Rvc1wiKVxuICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgICAgIC50aGVuKChkYXRhKSA9PiBzZXRUb2RvcyhkYXRhKSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUuZXJyb3IoXCJFcnJvcjogXCIsIGVycm9yKSk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBHZXRUb2RvcygpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgY29tcGxldGVUb0RvID0gYXN5bmMgKGlkOiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCBkYXRhOiBUb2RvVHlwZSA9IGF3YWl0IGZldGNoKEFQSV9CQVNFICsgXCIvdG9kby9jb21wbGV0ZS9cIiArIGlkLCB7XG4gICAgICBtZXRob2Q6IFwiUFVUXCIsXG4gICAgfSkudGhlbigocmVzKSA9PiByZXMuanNvbigpKTtcblxuICAgIHNldFRvZG9zKCh0b2RvcykgPT5cbiAgICAgIHRvZG9zLm1hcCgodG9kbykgPT4ge1xuICAgICAgICBpZiAodG9kby5faWQgPT09IGRhdGEuX2lkKSB7XG4gICAgICAgICAgdG9kby5jb21wbGV0ZSA9IGRhdGEuY29tcGxldGU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRvZG87XG4gICAgICB9KVxuICAgICk7XG4gIH07XG5cbiAgY29uc3QgZGVsZXRlVG9kbyA9IGFzeW5jIChpZDogc3RyaW5nKSA9PiB7XG4gICAgY29uc3QgZGF0YTogVG9kb1R5cGUgPSBhd2FpdCBmZXRjaChBUElfQkFTRSArIFwiL3RvZG8vZGVsZXRlL1wiICsgaWQsIHtcbiAgICAgIG1ldGhvZDogXCJERUxFVEVcIixcbiAgICB9KS50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpO1xuXG4gICAgc2V0VG9kb3MoKHRvZG9zKSA9PiB0b2Rvcy5maWx0ZXIoKHRvZG8pID0+IHRvZG8uX2lkICE9PSBkYXRhLl9pZCkpO1xuICB9O1xuXG4gIGNvbnN0IGFkZFRvRG8gPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoKEFQSV9CQVNFICsgXCIvdG9kby9uZXdcIiwge1xuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICB0ZXh0OiBuZXdUb2RvLFxuICAgICAgfSksXG4gICAgfSkudGhlbigocmVzKSA9PiByZXMuanNvbigpKTtcblxuICAgIHNldFRvZG9zKFsuLi50b2RvcywgZGF0YV0pO1xuICAgIHNldFBvcHVwQWN0aXZlKGZhbHNlKTtcbiAgICBzZXROZXdUb2RvKFwiXCIpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJiZy1kYXJrQWx0IHRleHQtbGlnaHQgbWluLWgtc2NyZWVuIHAtMTZcIj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+Q3JlYXRlIE5leHQgQXBwPC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkdlbmVyYXRlZCBieSBjcmVhdGUgbmV4dCBhcHBcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC00eGwgZm9udC1ib2xkIG1iLTVcIj5XZWxjb21lLCBBbGV4PC9oMT5cbiAgICAgIDxoNCBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCB0ZXh0LWxpZ2h0QWx0IG1iLTVcIj5Zb3VyIHRhc2tzPC9oND5cbiAgICAgIHsvKiBUb2RvcyAqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgIHt0b2Rvcy5tYXAoKHRvZG8pID0+IChcbiAgICAgICAgICA8VG9kb1xuICAgICAgICAgICAga2V5PXt0b2RvLl9pZH1cbiAgICAgICAgICAgIHRleHQ9e3RvZG8udGV4dH1cbiAgICAgICAgICAgIGNvbXBsZXRlPXt0b2RvLmNvbXBsZXRlfVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gY29tcGxldGVUb0RvKHRvZG8uX2lkKX1cbiAgICAgICAgICAgIGRlbGV0ZVRvZG89eygpID0+IGRlbGV0ZVRvZG8odG9kby5faWQpfVxuICAgICAgICAgIC8+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT1cImZpeGVkIGJvdHRvbS0zMiByaWdodC0xNiBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBoLTIwIHctMjAgcm91bmRlZC0zeGwgdGV4dC00eGwgYmctZ3JhZGllbnQtdG8tYiBmcm9tLXByaW1hcnkgdG8tc2Vjb25kYXJ5IGN1cnNvci1wb2ludGVyIGhvdmVyOm9wYWNpdHktODBcIlxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRQb3B1cEFjdGl2ZSh0cnVlKX1cbiAgICAgID5cbiAgICAgICAgK1xuICAgICAgPC9kaXY+XG5cbiAgICAgIHtwb3B1cEFjdGl2ZSA/IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaXhlZCB0b3AtWzUwJV0gbGVmdC1bNTAlXSB0cmFuc2xhdGUteS1bLTUwJV0gdHJhbnNsYXRlLXgtWy01MCVdIHctZnVsbCBtYXgtdy1bNDAwcHhdIGJnLWxpZ2h0IHAtMTYgcm91bmRlZC1tZCAgc2hhZG93LWxnIHNoYWRvdy1kYXJrXCI+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXIgYWJzb2x1dGUgdG9wLVsxNnB4XSByaWdodC1bMTZweF0gdGV4dC1zbSB0ZXh0LWxpZ2h0IGJnLXJlZC03MDAgcm91bmRlZC14bCBoLVsyMHB4XSB3LVsyMHB4XSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRQb3B1cEFjdGl2ZShmYWxzZSl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgeFxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1kYXJrIGZvbnQtYm9sZFwiPkFERCBUQVNLPC9oMz5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXItbm9uZSBvdXRsaW5lLW5vbmUgYmctd2hpdGUgcC0yIHJvdW5kZWQtbWQgdy1mdWxsIG15LTRcIlxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TmV3VG9kbyhlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgIHZhbHVlPXtuZXdUb2RvfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctZ3JhZGllbnQtdG8tYiBmcm9tLXByaW1hcnkgdG8tc2Vjb25kYXJ5IGN1cnNvci1wb2ludGVyIGhvdmVyOm9wYWNpdHktODAgcHktMiBweC00IHJvdW5kZWQtM3hsIGZvbnQtYm9sZCB0ZXh0LWxnXCJcbiAgICAgICAgICAgICAgb25DbGljaz17YWRkVG9Eb31cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgQ3JlYXRlIFRhc2tcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkgOiAoXG4gICAgICAgIFwiXCJcbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiVG9kbyIsIkhlYWQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkFQSV9CQVNFIiwiSG9tZSIsInRvZG9zIiwic2V0VG9kb3MiLCJwb3B1cEFjdGl2ZSIsInNldFBvcHVwQWN0aXZlIiwibmV3VG9kbyIsInNldE5ld1RvZG8iLCJHZXRUb2RvcyIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJkYXRhIiwiY2F0Y2giLCJlcnJvciIsImNvbnNvbGUiLCJjb21wbGV0ZVRvRG8iLCJpZCIsIm1ldGhvZCIsIm1hcCIsInRvZG8iLCJfaWQiLCJjb21wbGV0ZSIsImRlbGV0ZVRvZG8iLCJmaWx0ZXIiLCJhZGRUb0RvIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwidGV4dCIsImRpdiIsImNsYXNzTmFtZSIsInRpdGxlIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwibGluayIsInJlbCIsImhyZWYiLCJoMSIsImg0Iiwib25DbGljayIsImgzIiwiaW5wdXQiLCJ0eXBlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});