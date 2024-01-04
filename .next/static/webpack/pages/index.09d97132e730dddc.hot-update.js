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

/***/ "./pages/components/HomePage.js":
/*!**************************************!*\
  !*** ./pages/components/HomePage.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ HomePage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__);\n// pages/index.js\n\nvar _s = $RefreshSig$();\n\n\nfunction HomePage() {\n    _s();\n    const [weight, setWeight] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [height, setHeight] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [boxStyle, setBoxStyle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        borderRadius: \"1rem\",\n        border: \"none\",\n        backgroundColor: \"white\",\n        marginTop: \"100px\",\n        marginBottom: \"100px\",\n        zIndex: \"2\",\n        borderColor: \"#0066FF\",\n        boxShadow: \"10px 8px 15px 0px rgba(0, 0, 0, 0.3)\",\n        transition: \"transform 0.3s ease-in-out, border-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out\",\n        display: \"flex\",\n        flexDirection: \"column\",\n        justifyContent: \"center\",\n        alignItems: \"center\",\n        gap: \"10px\"\n    });\n    const handleWeightChange = (e)=>{\n        setWeight(e.target.value);\n    };\n    const handleHeightChange = (e)=>{\n        setHeight(e.target.value);\n    };\n    const handleBox = ()=>{\n        if (weight && height) {\n            // Assuming weight and height are numeric values\n            const boxWidth = weight; // Adjust as needed\n            const boxHeight = height; // Adjust as needed\n            setBoxStyle({\n                ...boxStyle,\n                width: \"\".concat(boxWidth, \"px\"),\n                height: \"\".concat(boxHeight, \"px\"),\n                marginTop: \"200px\"\n            });\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().input),\n                children: [\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"Enter weight\",\n                        value: weight,\n                        onChange: handleWeightChange\n                    }, void 0, false, {\n                        fileName: \"/Users/mdwaliulislamnohan/Documents/web-builder/pages/components/HomePage.js\",\n                        lineNumber: 50,\n                        columnNumber: 36\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"Enter height\",\n                        value: height,\n                        onChange: handleHeightChange\n                    }, void 0, false, {\n                        fileName: \"/Users/mdwaliulislamnohan/Documents/web-builder/pages/components/HomePage.js\",\n                        lineNumber: 51,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mdwaliulislamnohan/Documents/web-builder/pages/components/HomePage.js\",\n                lineNumber: 50,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleBox,\n                children: \"Change\"\n            }, void 0, false, {\n                fileName: \"/Users/mdwaliulislamnohan/Documents/web-builder/pages/components/HomePage.js\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"box\",\n                style: boxStyle,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"Box Content\"\n                }, void 0, false, {\n                    fileName: \"/Users/mdwaliulislamnohan/Documents/web-builder/pages/components/HomePage.js\",\n                    lineNumber: 56,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/mdwaliulislamnohan/Documents/web-builder/pages/components/HomePage.js\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mdwaliulislamnohan/Documents/web-builder/pages/components/HomePage.js\",\n        lineNumber: 49,\n        columnNumber: 5\n    }, this);\n}\n_s(HomePage, \"+v/MItQGzEa/hV2ktTBZwjzSz7E=\");\n_c = HomePage;\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL0hvbWVQYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxpQkFBaUI7OztBQUNnQjtBQUNnQjtBQUNsQyxTQUFTRTs7SUFDdEIsTUFBTSxDQUFDQyxRQUFRQyxVQUFVLEdBQUdKLCtDQUFRQSxDQUFDO0lBQ3JDLE1BQU0sQ0FBQ0ssUUFBUUMsVUFBVSxHQUFHTiwrQ0FBUUEsQ0FBQztJQUNyQyxNQUFNLENBQUNPLFVBQVVDLFlBQVksR0FBR1IsK0NBQVFBLENBQUM7UUFFdkNTLGNBQWM7UUFDZEMsUUFBUTtRQUNSQyxpQkFBaUI7UUFDakJDLFdBQVc7UUFDWEMsY0FBYztRQUNkQyxRQUFRO1FBQ1JDLGFBQWE7UUFDYkMsV0FBVztRQUNYQyxZQUFZO1FBQ1pDLFNBQVM7UUFDVEMsZUFBZTtRQUNmQyxnQkFBZ0I7UUFDaEJDLFlBQVk7UUFDWkMsS0FBSztJQUNQO0lBRUEsTUFBTUMscUJBQXFCLENBQUNDO1FBQzFCcEIsVUFBVW9CLEVBQUVDLE1BQU0sQ0FBQ0MsS0FBSztJQUMxQjtJQUVBLE1BQU1DLHFCQUFxQixDQUFDSDtRQUMxQmxCLFVBQVVrQixFQUFFQyxNQUFNLENBQUNDLEtBQUs7SUFDMUI7SUFFQSxNQUFNRSxZQUFZO1FBQ2hCLElBQUl6QixVQUFVRSxRQUFRO1lBQ3BCLGdEQUFnRDtZQUNoRCxNQUFNd0IsV0FBVzFCLFFBQVEsbUJBQW1CO1lBQzVDLE1BQU0yQixZQUFZekIsUUFBUSxtQkFBbUI7WUFFN0NHLFlBQVk7Z0JBQ1YsR0FBR0QsUUFBUTtnQkFDWHdCLE9BQU8sR0FBWSxPQUFURixVQUFTO2dCQUNuQnhCLFFBQVEsR0FBYSxPQUFWeUIsV0FBVTtnQkFDckJsQixXQUFXO1lBQ2I7UUFDRjtJQUNGO0lBRUEscUJBQ0UsOERBQUNvQjs7MEJBQ0QsOERBQUNBO2dCQUFJQyxXQUFXaEMsc0VBQVk7O29CQUFFO2tDQUFDLDhEQUFDaUM7d0JBQU1DLE1BQUs7d0JBQU9DLGFBQVk7d0JBQWVWLE9BQU92Qjt3QkFBUWtDLFVBQVVkOzs7Ozs7a0NBQ3BHLDhEQUFDVzt3QkFBTUMsTUFBSzt3QkFBT0MsYUFBWTt3QkFBZVYsT0FBT3JCO3dCQUFRZ0MsVUFBVVY7Ozs7Ozs7Ozs7OzswQkFFdkUsOERBQUNXO2dCQUFPQyxTQUFTWDswQkFBVzs7Ozs7OzBCQUM1Qiw4REFBQ0k7Z0JBQUlDLFdBQVU7Z0JBQU1PLE9BQU9qQzswQkFFMUIsNEVBQUNrQzs4QkFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJWDtHQXhEd0J2QztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jb21wb25lbnRzL0hvbWVQYWdlLmpzPzE0YTMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcGFnZXMvaW5kZXguanNcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZVBhZ2UoKSB7XG4gIGNvbnN0IFt3ZWlnaHQsIHNldFdlaWdodF0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtoZWlnaHQsIHNldEhlaWdodF0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtib3hTdHlsZSwgc2V0Qm94U3R5bGVdID0gdXNlU3RhdGUoe1xuXG4gICAgYm9yZGVyUmFkaXVzOiAnMXJlbScsXG4gICAgYm9yZGVyOiAnbm9uZScsXG4gICAgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLFxuICAgIG1hcmdpblRvcDogJzEwMHB4JyxcbiAgICBtYXJnaW5Cb3R0b206ICcxMDBweCcsXG4gICAgekluZGV4OiAnMicsXG4gICAgYm9yZGVyQ29sb3I6ICcjMDA2NkZGJyxcbiAgICBib3hTaGFkb3c6ICcxMHB4IDhweCAxNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMyknLFxuICAgIHRyYW5zaXRpb246ICd0cmFuc2Zvcm0gMC4zcyBlYXNlLWluLW91dCwgYm9yZGVyLWNvbG9yIDAuM3MgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgMC4zcyBlYXNlLWluLW91dCcsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBnYXA6ICcxMHB4JyxcbiAgfSk7XG5cbiAgY29uc3QgaGFuZGxlV2VpZ2h0Q2hhbmdlID0gKGUpID0+IHtcbiAgICBzZXRXZWlnaHQoZS50YXJnZXQudmFsdWUpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUhlaWdodENoYW5nZSA9IChlKSA9PiB7XG4gICAgc2V0SGVpZ2h0KGUudGFyZ2V0LnZhbHVlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVCb3ggPSAoKSA9PiB7XG4gICAgaWYgKHdlaWdodCAmJiBoZWlnaHQpIHtcbiAgICAgIC8vIEFzc3VtaW5nIHdlaWdodCBhbmQgaGVpZ2h0IGFyZSBudW1lcmljIHZhbHVlc1xuICAgICAgY29uc3QgYm94V2lkdGggPSB3ZWlnaHQ7IC8vIEFkanVzdCBhcyBuZWVkZWRcbiAgICAgIGNvbnN0IGJveEhlaWdodCA9IGhlaWdodDsgLy8gQWRqdXN0IGFzIG5lZWRlZFxuXG4gICAgICBzZXRCb3hTdHlsZSh7XG4gICAgICAgIC4uLmJveFN0eWxlLFxuICAgICAgICB3aWR0aDogYCR7Ym94V2lkdGh9cHhgLFxuICAgICAgICBoZWlnaHQ6IGAke2JveEhlaWdodH1weGAsXG4gICAgICAgIG1hcmdpblRvcDogJzIwMHB4JyxcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dH0+IDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgd2VpZ2h0XCIgdmFsdWU9e3dlaWdodH0gb25DaGFuZ2U9e2hhbmRsZVdlaWdodENoYW5nZX0gLz5cbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgaGVpZ2h0XCIgdmFsdWU9e2hlaWdodH0gb25DaGFuZ2U9e2hhbmRsZUhlaWdodENoYW5nZX0gLz5cbiAgICAgIDwvZGl2PiBcbiAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlQm94fT5DaGFuZ2U8L2J1dHRvbj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94XCIgc3R5bGU9e2JveFN0eWxlfT5cbiAgICAgICAgey8qIERpc3BsYXkgY29udGVudCBpbnNpZGUgdGhlIGJveCAqL31cbiAgICAgICAgPHA+Qm94IENvbnRlbnQ8L3A+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInN0eWxlcyIsIkhvbWVQYWdlIiwid2VpZ2h0Iiwic2V0V2VpZ2h0IiwiaGVpZ2h0Iiwic2V0SGVpZ2h0IiwiYm94U3R5bGUiLCJzZXRCb3hTdHlsZSIsImJvcmRlclJhZGl1cyIsImJvcmRlciIsImJhY2tncm91bmRDb2xvciIsIm1hcmdpblRvcCIsIm1hcmdpbkJvdHRvbSIsInpJbmRleCIsImJvcmRlckNvbG9yIiwiYm94U2hhZG93IiwidHJhbnNpdGlvbiIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiZ2FwIiwiaGFuZGxlV2VpZ2h0Q2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlSGVpZ2h0Q2hhbmdlIiwiaGFuZGxlQm94IiwiYm94V2lkdGgiLCJib3hIZWlnaHQiLCJ3aWR0aCIsImRpdiIsImNsYXNzTmFtZSIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJidXR0b24iLCJvbkNsaWNrIiwic3R5bGUiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/components/HomePage.js\n"));

/***/ })

});