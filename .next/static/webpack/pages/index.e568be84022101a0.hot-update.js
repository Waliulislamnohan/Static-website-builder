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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ HomePage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n// pages/index.js\n\nvar _s = $RefreshSig$();\n\n\nfunction HomePage() {\n    _s();\n    const [weight, setWeight] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [height, setHeight] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [boxStyle, setBoxStyle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        borderRadius: \"1rem\",\n        border: \"none\",\n        backgroundColor: \"white\",\n        marginTop: \"100px\",\n        marginBottom: \"100px\",\n        zIndex: \"2\",\n        borderColor: \"#0066FF\",\n        boxShadow: \"10px 8px 15px 0px rgba(0, 0, 0, 0.3)\",\n        transition: \"transform 0.3s ease-in-out, border-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out\",\n        display: \"flex\",\n        flexDirection: \"column\",\n        justifyContent: \"center\",\n        alignItems: \"center\",\n        gap: \"10px\"\n    });\n    const handleWeightChange = (e)=>{\n        setWeight(e.target.value);\n    };\n    const handleHeightChange = (e)=>{\n        setHeight(e.target.value);\n    };\n    const handleBox = ()=>{\n        if (weight && height) {\n            // Assuming weight and height are numeric values\n            const boxWidth = parseInt(weight) * 2; // Adjust as needed\n            const boxHeight = parseInt(height) * 3; // Adjust as needed\n            setBoxStyle({\n                ...boxStyle,\n                width: \"\".concat(boxWidth, \"px\"),\n                height: \"\".concat(boxHeight, \"px\")\n            });\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                placeholder: \"Enter weight\",\n                value: weight,\n                onChange: handleWeightChange\n            }, void 0, false, {\n                fileName: \"/Users/mdwaliulislamnohan/Documents/web-builder/pages/components/HomePage.js\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                placeholder: \"Enter height\",\n                value: height,\n                onChange: handleHeightChange\n            }, void 0, false, {\n                fileName: \"/Users/mdwaliulislamnohan/Documents/web-builder/pages/components/HomePage.js\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"box\",\n                style: boxStyle,\n                onClick: handleBox,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"Box Content\"\n                }, void 0, false, {\n                    fileName: \"/Users/mdwaliulislamnohan/Documents/web-builder/pages/components/HomePage.js\",\n                    lineNumber: 53,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/mdwaliulislamnohan/Documents/web-builder/pages/components/HomePage.js\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mdwaliulislamnohan/Documents/web-builder/pages/components/HomePage.js\",\n        lineNumber: 48,\n        columnNumber: 5\n    }, this);\n}\n_s(HomePage, \"+v/MItQGzEa/hV2ktTBZwjzSz7E=\");\n_c = HomePage;\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL0hvbWVQYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsaUJBQWlCOzs7QUFDZ0I7QUFDZ0I7QUFDbEMsU0FBU0U7O0lBQ3RCLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHSiwrQ0FBUUEsQ0FBQztJQUNyQyxNQUFNLENBQUNLLFFBQVFDLFVBQVUsR0FBR04sK0NBQVFBLENBQUM7SUFDckMsTUFBTSxDQUFDTyxVQUFVQyxZQUFZLEdBQUdSLCtDQUFRQSxDQUFDO1FBRXZDUyxjQUFjO1FBQ2RDLFFBQVE7UUFDUkMsaUJBQWlCO1FBQ2pCQyxXQUFXO1FBQ1hDLGNBQWM7UUFDZEMsUUFBUTtRQUNSQyxhQUFhO1FBQ2JDLFdBQVc7UUFDWEMsWUFBWTtRQUNaQyxTQUFTO1FBQ1RDLGVBQWU7UUFDZkMsZ0JBQWdCO1FBQ2hCQyxZQUFZO1FBQ1pDLEtBQUs7SUFDUDtJQUVBLE1BQU1DLHFCQUFxQixDQUFDQztRQUMxQnBCLFVBQVVvQixFQUFFQyxNQUFNLENBQUNDLEtBQUs7SUFDMUI7SUFFQSxNQUFNQyxxQkFBcUIsQ0FBQ0g7UUFDMUJsQixVQUFVa0IsRUFBRUMsTUFBTSxDQUFDQyxLQUFLO0lBQzFCO0lBRUEsTUFBTUUsWUFBWTtRQUNoQixJQUFJekIsVUFBVUUsUUFBUTtZQUNwQixnREFBZ0Q7WUFDaEQsTUFBTXdCLFdBQVdDLFNBQVMzQixVQUFVLEdBQUcsbUJBQW1CO1lBQzFELE1BQU00QixZQUFZRCxTQUFTekIsVUFBVSxHQUFHLG1CQUFtQjtZQUUzREcsWUFBWTtnQkFDVixHQUFHRCxRQUFRO2dCQUNYeUIsT0FBTyxHQUFZLE9BQVRILFVBQVM7Z0JBQ25CeEIsUUFBUSxHQUFhLE9BQVYwQixXQUFVO1lBQ3ZCO1FBQ0Y7SUFDRjtJQUVBLHFCQUNFLDhEQUFDRTs7MEJBQ0MsOERBQUNDO2dCQUFNQyxNQUFLO2dCQUFPQyxhQUFZO2dCQUFlVixPQUFPdkI7Z0JBQVFrQyxVQUFVZDs7Ozs7OzBCQUN2RSw4REFBQ1c7Z0JBQU1DLE1BQUs7Z0JBQU9DLGFBQVk7Z0JBQWVWLE9BQU9yQjtnQkFBUWdDLFVBQVVWOzs7Ozs7MEJBQ3ZFLDhEQUFDTTtnQkFBSUssV0FBVTtnQkFBTUMsT0FBT2hDO2dCQUFVaUMsU0FBU1o7MEJBRTdDLDRFQUFDYTs4QkFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJWDtHQXJEd0J2QztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jb21wb25lbnRzL0hvbWVQYWdlLmpzPzE0YTMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcGFnZXMvaW5kZXguanNcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZVBhZ2UoKSB7XG4gIGNvbnN0IFt3ZWlnaHQsIHNldFdlaWdodF0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtoZWlnaHQsIHNldEhlaWdodF0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtib3hTdHlsZSwgc2V0Qm94U3R5bGVdID0gdXNlU3RhdGUoe1xuXG4gICAgYm9yZGVyUmFkaXVzOiAnMXJlbScsXG4gICAgYm9yZGVyOiAnbm9uZScsXG4gICAgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLFxuICAgIG1hcmdpblRvcDogJzEwMHB4JyxcbiAgICBtYXJnaW5Cb3R0b206ICcxMDBweCcsXG4gICAgekluZGV4OiAnMicsXG4gICAgYm9yZGVyQ29sb3I6ICcjMDA2NkZGJyxcbiAgICBib3hTaGFkb3c6ICcxMHB4IDhweCAxNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMyknLFxuICAgIHRyYW5zaXRpb246ICd0cmFuc2Zvcm0gMC4zcyBlYXNlLWluLW91dCwgYm9yZGVyLWNvbG9yIDAuM3MgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgMC4zcyBlYXNlLWluLW91dCcsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBnYXA6ICcxMHB4JyxcbiAgfSk7XG5cbiAgY29uc3QgaGFuZGxlV2VpZ2h0Q2hhbmdlID0gKGUpID0+IHtcbiAgICBzZXRXZWlnaHQoZS50YXJnZXQudmFsdWUpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUhlaWdodENoYW5nZSA9IChlKSA9PiB7XG4gICAgc2V0SGVpZ2h0KGUudGFyZ2V0LnZhbHVlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVCb3ggPSAoKSA9PiB7XG4gICAgaWYgKHdlaWdodCAmJiBoZWlnaHQpIHtcbiAgICAgIC8vIEFzc3VtaW5nIHdlaWdodCBhbmQgaGVpZ2h0IGFyZSBudW1lcmljIHZhbHVlc1xuICAgICAgY29uc3QgYm94V2lkdGggPSBwYXJzZUludCh3ZWlnaHQpICogMjsgLy8gQWRqdXN0IGFzIG5lZWRlZFxuICAgICAgY29uc3QgYm94SGVpZ2h0ID0gcGFyc2VJbnQoaGVpZ2h0KSAqIDM7IC8vIEFkanVzdCBhcyBuZWVkZWRcblxuICAgICAgc2V0Qm94U3R5bGUoe1xuICAgICAgICAuLi5ib3hTdHlsZSxcbiAgICAgICAgd2lkdGg6IGAke2JveFdpZHRofXB4YCxcbiAgICAgICAgaGVpZ2h0OiBgJHtib3hIZWlnaHR9cHhgLFxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgd2VpZ2h0XCIgdmFsdWU9e3dlaWdodH0gb25DaGFuZ2U9e2hhbmRsZVdlaWdodENoYW5nZX0gLz5cbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgaGVpZ2h0XCIgdmFsdWU9e2hlaWdodH0gb25DaGFuZ2U9e2hhbmRsZUhlaWdodENoYW5nZX0gLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94XCIgc3R5bGU9e2JveFN0eWxlfSBvbkNsaWNrPXtoYW5kbGVCb3h9PlxuICAgICAgICB7LyogRGlzcGxheSBjb250ZW50IGluc2lkZSB0aGUgYm94ICovfVxuICAgICAgICA8cD5Cb3ggQ29udGVudDwvcD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwic3R5bGVzIiwiSG9tZVBhZ2UiLCJ3ZWlnaHQiLCJzZXRXZWlnaHQiLCJoZWlnaHQiLCJzZXRIZWlnaHQiLCJib3hTdHlsZSIsInNldEJveFN0eWxlIiwiYm9yZGVyUmFkaXVzIiwiYm9yZGVyIiwiYmFja2dyb3VuZENvbG9yIiwibWFyZ2luVG9wIiwibWFyZ2luQm90dG9tIiwiekluZGV4IiwiYm9yZGVyQ29sb3IiLCJib3hTaGFkb3ciLCJ0cmFuc2l0aW9uIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJnYXAiLCJoYW5kbGVXZWlnaHRDaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVIZWlnaHRDaGFuZ2UiLCJoYW5kbGVCb3giLCJib3hXaWR0aCIsInBhcnNlSW50IiwiYm94SGVpZ2h0Iiwid2lkdGgiLCJkaXYiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwiY2xhc3NOYW1lIiwic3R5bGUiLCJvbkNsaWNrIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/components/HomePage.js\n"));

/***/ })

});