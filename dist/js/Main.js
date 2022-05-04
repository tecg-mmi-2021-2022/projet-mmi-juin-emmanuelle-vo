/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/ts/Canvas.ts":
/*!**************************!*\
  !*** ./src/ts/Canvas.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nexports.__esModule = true;\nexports.Canvas = void 0;\n\nvar Canvas = function () {\n  function Canvas() {\n    this.canvasElt = document.getElementById('my-canvas');\n    this.ctx = this.canvasElt.getContext('2d');\n    this.resizeCanvas();\n    this.addEventListeners();\n    return this;\n  }\n\n  Canvas.prototype.addEventListeners = function () {\n    var _this = this;\n\n    window.addEventListener('resize', function () {\n      _this.resizeCanvas();\n    });\n  };\n\n  Canvas.prototype.resizeCanvas = function () {\n    this.canvasElt.width = window.innerWidth;\n    this.canvasElt.height = window.innerHeight;\n  };\n\n  return Canvas;\n}();\n\nexports.Canvas = Canvas;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvQ2FudmFzLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFJSTtBQUNJLFNBQUtBLFNBQUwsR0FBaUJDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixXQUF4QixDQUFqQjtBQUNBLFNBQUtDLEdBQUwsR0FBVyxLQUFLSCxTQUFMLENBQWVJLFVBQWYsQ0FBMEIsSUFBMUIsQ0FBWDtBQUNBLFNBQUtDLFlBQUw7QUFDQSxTQUFLQyxpQkFBTDtBQUVBLFdBQU8sSUFBUDtBQUNIOztBQUVEQztBQUFBOztBQUNJQyxVQUFNLENBQUNDLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDO0FBQzlCQyxXQUFJLENBQUNMLFlBQUw7QUFDSCxLQUZEO0FBR0gsR0FKRDs7QUFNQUU7QUFDSSxTQUFLUCxTQUFMLENBQWVXLEtBQWYsR0FBdUJILE1BQU0sQ0FBQ0ksVUFBOUI7QUFDQSxTQUFLWixTQUFMLENBQWVhLE1BQWYsR0FBd0JMLE1BQU0sQ0FBQ00sV0FBL0I7QUFDSCxHQUhEOztBQUtKO0FBQUMsQ0F4QkQ7O0FBQWFDLGNBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVtcGxhdGUtcHJvamV0LWV4YW1lbi8uL3NyYy90cy9DYW52YXMudHM/ODVhNSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgQ2FudmFzIHtcbiAgICBwcml2YXRlIGNhbnZhc0VsdDogSFRNTENhbnZhc0VsZW1lbnRcbiAgICBwcml2YXRlIGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEXG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5jYW52YXNFbHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXktY2FudmFzJykgYXMgSFRNTENhbnZhc0VsZW1lbnRcbiAgICAgICAgdGhpcy5jdHggPSB0aGlzLmNhbnZhc0VsdC5nZXRDb250ZXh0KCcyZCcpXG4gICAgICAgIHRoaXMucmVzaXplQ2FudmFzKCk7XG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoKTtcblxuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH1cblxuICAgIGFkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5yZXNpemVDYW52YXMoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVzaXplQ2FudmFzKCkge1xuICAgICAgICB0aGlzLmNhbnZhc0VsdC53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgICB0aGlzLmNhbnZhc0VsdC5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgfVxuXG59Il0sIm5hbWVzIjpbImNhbnZhc0VsdCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjdHgiLCJnZXRDb250ZXh0IiwicmVzaXplQ2FudmFzIiwiYWRkRXZlbnRMaXN0ZW5lcnMiLCJDYW52YXMiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiX3RoaXMiLCJ3aWR0aCIsImlubmVyV2lkdGgiLCJoZWlnaHQiLCJpbm5lckhlaWdodCIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/ts/Canvas.ts\n");

/***/ }),

/***/ "./src/ts/Main.ts":
/*!************************!*\
  !*** ./src/ts/Main.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nexports.__esModule = true;\n\nvar Canvas_1 = __webpack_require__(/*! ./Canvas */ \"./src/ts/Canvas.ts\");\n\nvar Main = function () {\n  function Main() {\n    this.canvas = new Canvas_1.Canvas();\n    console.log('test');\n  }\n\n  return Main;\n}();\n\nnew Main();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvTWFpbi50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7O0FBRUE7QUFHSTtBQUNJLFNBQUtBLE1BQUwsR0FBYyxJQUFJQyxlQUFKLEVBQWQ7QUFDQUMsV0FBTyxDQUFDQyxHQUFSLENBQVksTUFBWjtBQUNIOztBQUNMO0FBQUMsQ0FQRDs7QUFTQSxJQUFJQyxJQUFKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVtcGxhdGUtcHJvamV0LWV4YW1lbi8uL3NyYy90cy9NYWluLnRzPzQ4OGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDYW52YXN9IGZyb20gXCIuL0NhbnZhc1wiO1xuXG5jbGFzcyBNYWluIHtcbiAgICBwcml2YXRlIGNhbnZhczogQ2FudmFzXG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBuZXcgQ2FudmFzKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKCd0ZXN0JylcbiAgICB9XG59XG5cbm5ldyBNYWluKCk7Il0sIm5hbWVzIjpbImNhbnZhcyIsIkNhbnZhc18xIiwiY29uc29sZSIsImxvZyIsIk1haW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/ts/Main.ts\n");

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2Nzcy9tYWluLnNjc3MuanMiLCJtYXBwaW5ncyI6IjtBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVtcGxhdGUtcHJvamV0LWV4YW1lbi8uL3NyYy9zY3NzL21haW4uc2Nzcz9mN2U1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scss/main.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/main": 0,
/******/ 			"css/main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunktemplate_projet_examen"] = self["webpackChunktemplate_projet_examen"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/main"], () => (__webpack_require__("./src/ts/Main.ts")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/main"], () => (__webpack_require__("./src/scss/main.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;