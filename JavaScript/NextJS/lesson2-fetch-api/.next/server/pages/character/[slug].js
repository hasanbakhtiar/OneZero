"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/character/[slug]";
exports.ids = ["pages/character/[slug]"];
exports.modules = {

/***/ "./pages/character/[slug].js":
/*!***********************************!*\
  !*** ./pages/character/[slug].js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getStaticPaths\": () => (/* binding */ getStaticPaths),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isomorphic-unfetch */ \"isomorphic-unfetch\");\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var slug__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! slug */ \"slug\");\n/* harmony import */ var slug__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(slug__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst CharacterDetail = ({ character  })=>{\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Charachter Details Page\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\hasan\\\\OneDrive\\\\Desktop\\\\MatrixGroups\\\\OneZero\\\\JavaScript\\\\NextJS\\\\lesson2-fetch-api\\\\pages\\\\character\\\\[slug].js\",\n                lineNumber: 9,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: character.name\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\hasan\\\\OneDrive\\\\Desktop\\\\MatrixGroups\\\\OneZero\\\\JavaScript\\\\NextJS\\\\lesson2-fetch-api\\\\pages\\\\character\\\\[slug].js\",\n                lineNumber: 10,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"fiqure\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: character.image,\n                    alt: character.name\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\hasan\\\\OneDrive\\\\Desktop\\\\MatrixGroups\\\\OneZero\\\\JavaScript\\\\NextJS\\\\lesson2-fetch-api\\\\pages\\\\character\\\\[slug].js\",\n                    lineNumber: 12,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\hasan\\\\OneDrive\\\\Desktop\\\\MatrixGroups\\\\OneZero\\\\JavaScript\\\\NextJS\\\\lesson2-fetch-api\\\\pages\\\\character\\\\[slug].js\",\n                lineNumber: 11,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\hasan\\\\OneDrive\\\\Desktop\\\\MatrixGroups\\\\OneZero\\\\JavaScript\\\\NextJS\\\\lesson2-fetch-api\\\\pages\\\\character\\\\[slug].js\",\n        lineNumber: 8,\n        columnNumber: 9\n    }, undefined));\n};\nasync function getStaticPaths() {\n    const data = await fetch(\"https://rickandmortyapi.com/api/character/\");\n    const characters = await data.json();\n    return {\n        paths: characters.results.map((character)=>{\n            return {\n                params: {\n                    slug: `${slug__WEBPACK_IMPORTED_MODULE_2___default()(character.name)}-${character.id}`\n                }\n            };\n        }),\n        fallback: false\n    };\n}\nasync function getStaticProps({ params  }) {\n    // data fetch\n    const id = params.slug.split('-').slice(-1)[0];\n    const data = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default()(\"https://rickandmortyapi.com/api/character/\" + id);\n    const character = await data.json();\n    return {\n        props: {\n            character\n        }\n    };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CharacterDetail);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jaGFyYWN0ZXIvW3NsdWddLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBd0M7QUFDakI7QUFJdkIsS0FBSyxDQUFDRSxlQUFlLElBQUksQ0FBQ0MsQ0FBQUEsU0FBUyxHQUFDLEdBQUcsQ0FBQztJQUNwQyxNQUFNLDZFQUNEQyxDQUFHOzt3RkFDQ0MsQ0FBRTswQkFBQyxDQUF1Qjs7Ozs7O3dGQUMxQkQsQ0FBRzswQkFBRUQsU0FBUyxDQUFDRyxJQUFJOzs7Ozs7d0ZBQ25CQyxDQUFNO3NHQUNGQyxDQUFHO29CQUFDQyxHQUFHLEVBQUVOLFNBQVMsQ0FBQ08sS0FBSztvQkFBRUMsR0FBRyxFQUFFUixTQUFTLENBQUNHLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSTlELENBQUM7QUFHTSxlQUFlTSxjQUFjLEdBQUcsQ0FBQztJQUNwQyxLQUFLLENBQUNDLElBQUksR0FBRyxLQUFLLENBQUNDLEtBQUssQ0FBQyxDQUE0QztJQUNyRSxLQUFLLENBQUNDLFVBQVUsR0FBRyxLQUFLLENBQUNGLElBQUksQ0FBQ0csSUFBSTtJQUVwQyxNQUFNLENBQUMsQ0FBQztRQUNGQyxLQUFLLEVBQUNGLFVBQVUsQ0FBQ0csT0FBTyxDQUFDQyxHQUFHLEVBQUNoQixTQUFTLEdBQUksQ0FBQztZQUNuQyxNQUFNLENBQUMsQ0FBQ2lCO2dCQUFBQSxNQUFNLEVBQUMsQ0FBQ25CO29CQUFBQSxJQUFJLEtBQUlBLDJDQUFJLENBQUNFLFNBQVMsQ0FBQ0csSUFBSSxFQUFFLENBQUMsRUFBRUgsU0FBUyxDQUFDa0IsRUFBRTtnQkFBRSxDQUFDO1lBQUEsQ0FBQztRQUN4RSxDQUFDO1FBQ0RDLFFBQVEsRUFBRSxLQUFLO0lBQ3JCLENBQUM7QUFDSCxDQUFDO0FBR00sZUFBZUMsY0FBYyxDQUFDLENBQUNILENBQUFBLE1BQU0sR0FBQyxFQUFFLENBQUM7SUFDNUMsRUFBYTtJQUNkLEtBQUssQ0FBQ0MsRUFBRSxHQUFHRCxNQUFNLENBQUNuQixJQUFJLENBQUN1QixLQUFLLENBQUMsQ0FBRyxJQUFFQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUM7SUFDN0MsS0FBSyxDQUFDWixJQUFJLEdBQUcsS0FBSyxDQUFDYix5REFBTyxDQUFDLENBQTRDLDhDQUFDcUIsRUFBRTtJQUN6RSxLQUFLLENBQUNsQixTQUFTLEdBQUcsS0FBSyxDQUFDVSxJQUFJLENBQUNHLElBQUk7SUFDbkMsTUFBTSxDQUFDLENBQUM7UUFDTlUsS0FBSyxFQUFFLENBQUM7WUFDTnZCLFNBQVM7UUFDWCxDQUFDO0lBQ0gsQ0FBQztBQUNILENBQUM7QUFFRCxpRUFBZUQsZUFBZSIsInNvdXJjZXMiOlsid2VicGFjazovL2xlc3NvbjItZmV0Y2gtYXBpLy4vcGFnZXMvY2hhcmFjdGVyL1tzbHVnXS5qcz84ZGNhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB1bmZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XHJcbmltcG9ydCBzbHVnIGZyb20gJ3NsdWcnO1xyXG5cclxuXHJcblxyXG5jb25zdCBDaGFyYWN0ZXJEZXRhaWwgPSAoe2NoYXJhY3Rlcn0pPT57XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGgxPkNoYXJhY2h0ZXIgRGV0YWlscyBQYWdlPC9oMT5cclxuICAgICAgICAgICAgPGRpdj57Y2hhcmFjdGVyLm5hbWV9PC9kaXY+XHJcbiAgICAgICAgICAgIDxmaXF1cmU+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17Y2hhcmFjdGVyLmltYWdlfSBhbHQ9e2NoYXJhY3Rlci5uYW1lfSAvPlxyXG4gICAgICAgICAgICA8L2ZpcXVyZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaChcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvY2hhcmFjdGVyL1wiKTtcclxuICAgIGNvbnN0IGNoYXJhY3RlcnMgPSBhd2FpdCBkYXRhLmpzb24oKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgICAgICBwYXRoczpjaGFyYWN0ZXJzLnJlc3VsdHMubWFwKGNoYXJhY3RlciA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge3BhcmFtczp7c2x1ZzpgJHtzbHVnKGNoYXJhY3Rlci5uYW1lKX0tJHtjaGFyYWN0ZXIuaWR9YH19XHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgZmFsbGJhY2s6IGZhbHNlIFxyXG4gIH07XHJcbn1cclxuXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoe3BhcmFtc30pIHtcclxuICAgIC8vIGRhdGEgZmV0Y2hcclxuICAgY29uc3QgaWQgPSBwYXJhbXMuc2x1Zy5zcGxpdCgnLScpLnNsaWNlKC0xKVswXVxyXG4gICBjb25zdCBkYXRhID0gYXdhaXQgdW5mZXRjaChcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvY2hhcmFjdGVyL1wiK2lkKTtcclxuICAgIGNvbnN0IGNoYXJhY3RlciA9IGF3YWl0IGRhdGEuanNvbigpO1xyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBjaGFyYWN0ZXJcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENoYXJhY3RlckRldGFpbCJdLCJuYW1lcyI6WyJ1bmZldGNoIiwic2x1ZyIsIkNoYXJhY3RlckRldGFpbCIsImNoYXJhY3RlciIsImRpdiIsImgxIiwibmFtZSIsImZpcXVyZSIsImltZyIsInNyYyIsImltYWdlIiwiYWx0IiwiZ2V0U3RhdGljUGF0aHMiLCJkYXRhIiwiZmV0Y2giLCJjaGFyYWN0ZXJzIiwianNvbiIsInBhdGhzIiwicmVzdWx0cyIsIm1hcCIsInBhcmFtcyIsImlkIiwiZmFsbGJhY2siLCJnZXRTdGF0aWNQcm9wcyIsInNwbGl0Iiwic2xpY2UiLCJwcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/character/[slug].js\n");

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "slug":
/*!***********************!*\
  !*** external "slug" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("slug");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/character/[slug].js"));
module.exports = __webpack_exports__;

})();