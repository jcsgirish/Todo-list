/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["pages/index"],{

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=D%3A%5CTodo%20list%5Cpages%5Cindex.js&page=%2F!":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=D%3A%5CTodo%20list%5Cpages%5Cindex.js&page=%2F! ***!
  \***************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("\n    (window.__NEXT_P = window.__NEXT_P || []).push([\n      \"/\",\n      function () {\n        return __webpack_require__(/*! ./pages/index.js */ \"./pages/index.js\");\n      }\n    ]);\n    if(true) {\n      module.hot.dispose(function () {\n        window.__NEXT_P.push([\"/\"])\n      });\n    }\n  //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWNsaWVudC1wYWdlcy1sb2FkZXIuanM/YWJzb2x1dGVQYWdlUGF0aD1EJTNBJTVDVG9kbyUyMGxpc3QlNUNwYWdlcyU1Q2luZGV4LmpzJnBhZ2U9JTJGISIsIm1hcHBpbmdzIjoiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxtQkFBTyxDQUFDLDBDQUFrQjtBQUN6QztBQUNBO0FBQ0EsT0FBTyxJQUFVO0FBQ2pCLE1BQU0sVUFBVTtBQUNoQjtBQUNBLE9BQU87QUFDUDtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8/MzAwNSJdLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAod2luZG93Ll9fTkVYVF9QID0gd2luZG93Ll9fTkVYVF9QIHx8IFtdKS5wdXNoKFtcbiAgICAgIFwiL1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gcmVxdWlyZShcIi4vcGFnZXMvaW5kZXguanNcIik7XG4gICAgICB9XG4gICAgXSk7XG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgd2luZG93Ll9fTkVYVF9QLnB1c2goW1wiL1wiXSlcbiAgICAgIH0pO1xuICAgIH1cbiAgIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=D%3A%5CTodo%20list%5Cpages%5Cindex.js&page=%2F!\n"));

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction Home() {\n    _s();\n    const [folders, setFolders] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        {\n            name: \"Default\",\n            todos: []\n        },\n        {\n            name: \"Work\",\n            todos: []\n        },\n        {\n            name: \"Personal\",\n            todos: []\n        }\n    ]);\n    const [newTodoText, setNewTodoText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [newFolderName, setNewFolderName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [selectedFolder, setSelectedFolder] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const addTodo = ()=>{\n        if (selectedFolder) {\n            const updatedFolders = folders.map((folder)=>{\n                if (folder === selectedFolder) {\n                    return {\n                        ...folder,\n                        todos: [\n                            ...folder.todos,\n                            {\n                                text: newTodoText,\n                                completed: false\n                            }\n                        ]\n                    };\n                }\n                return folder;\n            });\n            setFolders(updatedFolders);\n            setNewTodoText(\"\");\n        }\n    };\n    const toggleCompleted = (todo)=>{\n        todo.completed = !todo.completed;\n        setFolders([\n            ...folders\n        ]);\n    };\n    const editTodoFolder = (todo)=>{\n        const newTodoText = prompt(\"Enter the new todo text:\", todo.text);\n        if (newTodoText) {\n            todo.text = newTodoText;\n            setFolders([\n                ...folders\n            ]);\n        }\n    };\n    const deleteTodoFolder = (todo)=>{\n        const updatedFolders = folders.map((folder)=>{\n            if (folder === selectedFolder) {\n                const updatedTodos = folder.todos.filter((t)=>t !== todo);\n                return {\n                    ...folder,\n                    todos: updatedTodos\n                };\n            }\n            return folder;\n        });\n        setFolders(updatedFolders);\n    };\n    const addFolder = ()=>{\n        const newFolder = {\n            name: newFolderName,\n            todos: []\n        };\n        setFolders([\n            ...folders,\n            newFolder\n        ]);\n        setNewFolderName(\"\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"todo-app\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Todo App\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Todo list\\\\pages\\\\index.js\",\n                lineNumber: 85,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        value: newTodoText,\n                        onChange: (e)=>setNewTodoText(e.target.value),\n                        placeholder: \"Enter a new todo\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Todo list\\\\pages\\\\index.js\",\n                        lineNumber: 87,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: addTodo,\n                        children: \"Add Todo\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Todo list\\\\pages\\\\index.js\",\n                        lineNumber: 92,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Todo list\\\\pages\\\\index.js\",\n                lineNumber: 86,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"D:\\\\Todo list\\\\pages\\\\index.js\",\n                lineNumber: 94,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        value: newFolderName,\n                        onChange: (e)=>setNewFolderName(e.target.value),\n                        placeholder: \"Enter folder name\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Todo list\\\\pages\\\\index.js\",\n                        lineNumber: 96,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: addFolder,\n                        children: \"Add Folder\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Todo list\\\\pages\\\\index.js\",\n                        lineNumber: 101,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Todo list\\\\pages\\\\index.js\",\n                lineNumber: 95,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"D:\\\\Todo list\\\\pages\\\\index.js\",\n                lineNumber: 103,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                    value: selectedFolder ? selectedFolder : \"\",\n                    onChange: (e)=>setSelectedFolder(folders.find((folder)=>folder.name === e.target.value)),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                            disabled: true,\n                            value: \"\",\n                            children: \"Select a folder\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Todo list\\\\pages\\\\index.js\",\n                            lineNumber: 113,\n                            columnNumber: 11\n                        }, this),\n                        folders.map((folder, folderIndex)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: folder,\n                                children: folder.name\n                            }, folderIndex, false, {\n                                fileName: \"D:\\\\Todo list\\\\pages\\\\index.js\",\n                                lineNumber: 117,\n                                columnNumber: 13\n                            }, this))\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Todo list\\\\pages\\\\index.js\",\n                    lineNumber: 105,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\Todo list\\\\pages\\\\index.js\",\n                lineNumber: 104,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"D:\\\\Todo list\\\\pages\\\\index.js\",\n                lineNumber: 123,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: selectedFolder ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            children: selectedFolder.name\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Todo list\\\\pages\\\\index.js\",\n                            lineNumber: 127,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            children: selectedFolder.todos.map((todo, todoIndex)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: todo.completed ? \"strike-through\" : \"\",\n                                            children: todo.text\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Todo list\\\\pages\\\\index.js\",\n                                            lineNumber: 131,\n                                            columnNumber: 19\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            onClick: ()=>toggleCompleted(todo),\n                                            children: \"Done\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Todo list\\\\pages\\\\index.js\",\n                                            lineNumber: 134,\n                                            columnNumber: 19\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            onClick: ()=>editTodoFolder(todo),\n                                            children: \"Edit\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Todo list\\\\pages\\\\index.js\",\n                                            lineNumber: 137,\n                                            columnNumber: 19\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            onClick: ()=>deleteTodoFolder(todo),\n                                            children: \"Delete\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Todo list\\\\pages\\\\index.js\",\n                                            lineNumber: 138,\n                                            columnNumber: 19\n                                        }, this)\n                                    ]\n                                }, todoIndex, true, {\n                                    fileName: \"D:\\\\Todo list\\\\pages\\\\index.js\",\n                                    lineNumber: 130,\n                                    columnNumber: 17\n                                }, this))\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Todo list\\\\pages\\\\index.js\",\n                            lineNumber: 128,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Todo list\\\\pages\\\\index.js\",\n                    lineNumber: 126,\n                    columnNumber: 11\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"No folder selected\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Todo list\\\\pages\\\\index.js\",\n                        lineNumber: 147,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\Todo list\\\\pages\\\\index.js\",\n                    lineNumber: 146,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\Todo list\\\\pages\\\\index.js\",\n                lineNumber: 124,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Todo list\\\\pages\\\\index.js\",\n        lineNumber: 84,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"tvsHzrXDrVkNIPonfuTu0BHf92w=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU0sQ0FBQ0gsS0FBSzs7c0NBSTNELDhEQUFDVTs0QkFBT0MsUUFBUTs0QkFBQ1gsT0FBTTtzQ0FBRzs7Ozs7O3dCQUd6QjlCLFFBQVFZLEdBQUcsQ0FBQyxDQUFDQyxRQUFRNkIsNEJBQ3BCLDhEQUFDRjtnQ0FBeUJWLE9BQU9qQjswQ0FDOUJBLE9BQU9YLElBQUk7K0JBRER3Qzs7Ozs7Ozs7Ozs7Ozs7OzswQkFNbkIsOERBQUNMOzs7OzswQkFDRCw4REFBQ1g7MEJBQ0VsQiwrQkFDQyw4REFBQ2tCOztzQ0FDQyw4REFBQ2lCO3NDQUFJbkMsZUFBZU4sSUFBSTs7Ozs7O3NDQUN4Qiw4REFBQzBDO3NDQUNFcEMsZUFBZUwsS0FBSyxDQUFDUyxHQUFHLENBQUMsQ0FBQ0ssTUFBTTRCLDBCQUMvQiw4REFBQ0M7O3NEQUNDLDhEQUFDQzs0Q0FBS3BCLFdBQVdWLEtBQUtGLFNBQVMsR0FBRyxtQkFBbUI7c0RBQ2xERSxLQUFLSCxJQUFJOzs7Ozs7c0RBRVosOERBQUNxQjs0Q0FBT0MsU0FBUyxJQUFNcEIsZ0JBQWdCQztzREFBTzs7Ozs7O3NEQUc5Qyw4REFBQ2tCOzRDQUFPQyxTQUFTLElBQU1sQixlQUFlRDtzREFBTzs7Ozs7O3NEQUM3Qyw4REFBQ2tCOzRDQUFPQyxTQUFTLElBQU1oQixpQkFBaUJIO3NEQUFPOzs7Ozs7O21DQVJ4QzRCOzs7Ozs7Ozs7Ozs7Ozs7eUNBZ0JiLDhEQUFDbkI7OEJBQ0QsNEVBQUNzQjtrQ0FBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1mO0dBdEpVakQ7S0FBQUE7QUF5SlYsK0RBQWVBLElBQUlBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbiBmdW5jdGlvbiBIb21lKCkge1xyXG4gIGNvbnN0IFtmb2xkZXJzLCBzZXRGb2xkZXJzXSA9IHVzZVN0YXRlKFtcclxuICAgIHtcclxuICAgICAgbmFtZTogJ0RlZmF1bHQnLFxyXG4gICAgICB0b2RvczogW10sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiAnV29yaycsXHJcbiAgICAgIHRvZG9zOiBbXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICdQZXJzb25hbCcsXHJcbiAgICAgIHRvZG9zOiBbXSxcclxuICAgIH0sXHJcbiAgXSk7XHJcblxyXG4gIGNvbnN0IFtuZXdUb2RvVGV4dCwgc2V0TmV3VG9kb1RleHRdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtuZXdGb2xkZXJOYW1lLCBzZXROZXdGb2xkZXJOYW1lXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbc2VsZWN0ZWRGb2xkZXIsIHNldFNlbGVjdGVkRm9sZGVyXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICBjb25zdCBhZGRUb2RvID0gKCkgPT4ge1xyXG4gICAgaWYgKHNlbGVjdGVkRm9sZGVyKSB7XHJcbiAgICAgIGNvbnN0IHVwZGF0ZWRGb2xkZXJzID0gZm9sZGVycy5tYXAoKGZvbGRlcikgPT4ge1xyXG4gICAgICAgIGlmIChmb2xkZXIgPT09IHNlbGVjdGVkRm9sZGVyKSB7XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAuLi5mb2xkZXIsXHJcbiAgICAgICAgICAgIHRvZG9zOiBbXHJcbiAgICAgICAgICAgICAgLi4uZm9sZGVyLnRvZG9zLFxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRleHQ6IG5ld1RvZG9UZXh0LFxyXG4gICAgICAgICAgICAgICAgY29tcGxldGVkOiBmYWxzZSxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZvbGRlcjtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBzZXRGb2xkZXJzKHVwZGF0ZWRGb2xkZXJzKTtcclxuICAgICAgc2V0TmV3VG9kb1RleHQoJycpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHRvZ2dsZUNvbXBsZXRlZCA9ICh0b2RvKSA9PiB7XHJcbiAgICB0b2RvLmNvbXBsZXRlZCA9ICF0b2RvLmNvbXBsZXRlZDtcclxuICAgIHNldEZvbGRlcnMoWy4uLmZvbGRlcnNdKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBlZGl0VG9kb0ZvbGRlciA9ICh0b2RvKSA9PiB7XHJcbiAgICBjb25zdCBuZXdUb2RvVGV4dCA9IHByb21wdCgnRW50ZXIgdGhlIG5ldyB0b2RvIHRleHQ6JywgdG9kby50ZXh0KTtcclxuICAgIGlmIChuZXdUb2RvVGV4dCkge1xyXG4gICAgICB0b2RvLnRleHQgPSBuZXdUb2RvVGV4dDtcclxuICAgICAgc2V0Rm9sZGVycyhbLi4uZm9sZGVyc10pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGRlbGV0ZVRvZG9Gb2xkZXIgPSAodG9kbykgPT4ge1xyXG4gICAgY29uc3QgdXBkYXRlZEZvbGRlcnMgPSBmb2xkZXJzLm1hcCgoZm9sZGVyKSA9PiB7XHJcbiAgICAgIGlmIChmb2xkZXIgPT09IHNlbGVjdGVkRm9sZGVyKSB7XHJcbiAgICAgICAgY29uc3QgdXBkYXRlZFRvZG9zID0gZm9sZGVyLnRvZG9zLmZpbHRlcigodCkgPT4gdCAhPT0gdG9kbyk7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIC4uLmZvbGRlcixcclxuICAgICAgICAgIHRvZG9zOiB1cGRhdGVkVG9kb3MsXHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gZm9sZGVyO1xyXG4gICAgfSk7XHJcblxyXG4gICAgc2V0Rm9sZGVycyh1cGRhdGVkRm9sZGVycyk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgYWRkRm9sZGVyID0gKCkgPT4ge1xyXG4gICAgY29uc3QgbmV3Rm9sZGVyID0ge1xyXG4gICAgICBuYW1lOiBuZXdGb2xkZXJOYW1lLFxyXG4gICAgICB0b2RvczogW10sXHJcbiAgICB9O1xyXG4gICAgc2V0Rm9sZGVycyhbLi4uZm9sZGVycywgbmV3Rm9sZGVyXSk7XHJcbiAgICBzZXROZXdGb2xkZXJOYW1lKCcnKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ0b2RvLWFwcFwiPlxyXG4gICAgICA8aDE+VG9kbyBBcHA8L2gxPlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdmFsdWU9e25ld1RvZG9UZXh0fVxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXROZXdUb2RvVGV4dChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIGEgbmV3IHRvZG9cIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXthZGRUb2RvfT5BZGQgVG9kbzwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGJyIC8+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB2YWx1ZT17bmV3Rm9sZGVyTmFtZX1cclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TmV3Rm9sZGVyTmFtZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIGZvbGRlciBuYW1lXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17YWRkRm9sZGVyfT5BZGQgRm9sZGVyPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8YnIgLz5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICB2YWx1ZT17c2VsZWN0ZWRGb2xkZXIgPyBzZWxlY3RlZEZvbGRlciA6ICcnfVxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PlxyXG4gICAgICAgICAgICBzZXRTZWxlY3RlZEZvbGRlcihcclxuICAgICAgICAgICAgICBmb2xkZXJzLmZpbmQoKGZvbGRlcikgPT4gZm9sZGVyLm5hbWUgPT09IGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPG9wdGlvbiBkaXNhYmxlZCB2YWx1ZT1cIlwiPlxyXG4gICAgICAgICAgICBTZWxlY3QgYSBmb2xkZXJcclxuICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAge2ZvbGRlcnMubWFwKChmb2xkZXIsIGZvbGRlckluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgIDxvcHRpb24ga2V5PXtmb2xkZXJJbmRleH0gdmFsdWU9e2ZvbGRlcn0+XHJcbiAgICAgICAgICAgICAge2ZvbGRlci5uYW1lfVxyXG4gICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGJyIC8+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAge3NlbGVjdGVkRm9sZGVyID8gKFxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGgzPntzZWxlY3RlZEZvbGRlci5uYW1lfTwvaDM+XHJcbiAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICB7c2VsZWN0ZWRGb2xkZXIudG9kb3MubWFwKCh0b2RvLCB0b2RvSW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgIDxsaSBrZXk9e3RvZG9JbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17dG9kby5jb21wbGV0ZWQgPyAnc3RyaWtlLXRocm91Z2gnIDogJyd9PlxyXG4gICAgICAgICAgICAgICAgICAgIHt0b2RvLnRleHR9XHJcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB0b2dnbGVDb21wbGV0ZWQodG9kbyl9PlxyXG4gICAgICAgICAgICAgICAgICAgIERvbmVcclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gZWRpdFRvZG9Gb2xkZXIodG9kbyl9PkVkaXQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBkZWxldGVUb2RvRm9sZGVyKHRvZG8pfT5cclxuICAgICAgICAgICAgICAgICAgICBEZWxldGVcclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTooXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxwPk5vIGZvbGRlciBzZWxlY3RlZDwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWUiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJIb21lIiwiZm9sZGVycyIsInNldEZvbGRlcnMiLCJuYW1lIiwidG9kb3MiLCJuZXdUb2RvVGV4dCIsInNldE5ld1RvZG9UZXh0IiwibmV3Rm9sZGVyTmFtZSIsInNldE5ld0ZvbGRlck5hbWUiLCJzZWxlY3RlZEZvbGRlciIsInNldFNlbGVjdGVkRm9sZGVyIiwiYWRkVG9kbyIsInVwZGF0ZWRGb2xkZXJzIiwibWFwIiwiZm9sZGVyIiwidGV4dCIsImNvbXBsZXRlZCIsInRvZ2dsZUNvbXBsZXRlZCIsInRvZG8iLCJlZGl0VG9kb0ZvbGRlciIsInByb21wdCIsImRlbGV0ZVRvZG9Gb2xkZXIiLCJ1cGRhdGVkVG9kb3MiLCJmaWx0ZXIiLCJ0IiwiYWRkRm9sZGVyIiwibmV3Rm9sZGVyIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJpbnB1dCIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwicGxhY2Vob2xkZXIiLCJidXR0b24iLCJvbkNsaWNrIiwiYnIiLCJzZWxlY3QiLCJmaW5kIiwib3B0aW9uIiwiZGlzYWJsZWQiLCJmb2xkZXJJbmRleCIsImgzIiwidWwiLCJ0b2RvSW5kZXgiLCJsaSIsInNwYW4iLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["pages/_app","main"], function() { return __webpack_exec__("./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=D%3A%5CTodo%20list%5Cpages%5Cindex.js&page=%2F!"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);