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

/***/ "./src/ts/Animation.ts":
/*!*****************************!*\
  !*** ./src/ts/Animation.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nexports.__esModule = true;\nexports.Animation = void 0;\n\nvar Animation = function () {\n  function Animation(canvas) {\n    this.canvas = canvas;\n    this.animate();\n    this.fps = 10;\n  }\n\n  Animation.prototype.animate = function () {\n    var _this = this;\n\n    this.canvas.ctx.clearRect(0, 0, this.canvas.ctx.canvas.width, this.canvas.ctx.canvas.height);\n    this.canvas.animate();\n    var requestID = requestAnimationFrame(function () {\n      _this.animate();\n    });\n  };\n\n  return Animation;\n}();\n\nexports.Animation = Animation;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvQW5pbWF0aW9uLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBR0E7QUFLSSxxQkFBWUEsTUFBWixFQUEwQjtBQUN0QixTQUFLQSxNQUFMLEdBQWNBLE1BQWQ7QUFDQSxTQUFLQyxPQUFMO0FBQ0EsU0FBS0MsR0FBTCxHQUFXLEVBQVg7QUFDSDs7QUFFREM7QUFBQTs7QUFDSSxTQUFLSCxNQUFMLENBQVlJLEdBQVosQ0FBZ0JDLFNBQWhCLENBQTBCLENBQTFCLEVBQTZCLENBQTdCLEVBQWdDLEtBQUtMLE1BQUwsQ0FBWUksR0FBWixDQUFnQkosTUFBaEIsQ0FBdUJNLEtBQXZELEVBQThELEtBQUtOLE1BQUwsQ0FBWUksR0FBWixDQUFnQkosTUFBaEIsQ0FBdUJPLE1BQXJGO0FBQ0EsU0FBS1AsTUFBTCxDQUFZQyxPQUFaO0FBU0EsUUFBSU8sU0FBUyxHQUFHQyxxQkFBcUIsQ0FBQztBQUNsQ0MsV0FBSSxDQUFDVCxPQUFMO0FBQ0gsS0FGb0MsQ0FBckM7QUFHSCxHQWREOztBQWdCSjtBQUFDLENBM0JEOztBQUFhVSxpQkFBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZW1wbGF0ZS1wcm9qZXQtZXhhbWVuLy4vc3JjL3RzL0FuaW1hdGlvbi50cz85MWFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q2FudmFzfSBmcm9tIFwiLi9DYW52YXNcIjtcbmltcG9ydCB7c2V0dGluZ3N9IGZyb20gXCIuL3NldHRpbmdzXCI7XG5cbmV4cG9ydCBjbGFzcyBBbmltYXRpb24ge1xuICAgIHByaXZhdGUgY2FudmFzOiBDYW52YXNcbiAgICBwcml2YXRlIGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEXG4gICAgcHJpdmF0ZSBmcHM6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKGNhbnZhczogQ2FudmFzKSB7XG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzXG4gICAgICAgIHRoaXMuYW5pbWF0ZSgpXG4gICAgICAgIHRoaXMuZnBzID0gMTBcbiAgICB9XG5cbiAgICBhbmltYXRlKCkge1xuICAgICAgICB0aGlzLmNhbnZhcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLmN0eC5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmN0eC5jYW52YXMuaGVpZ2h0KVxuICAgICAgICB0aGlzLmNhbnZhcy5hbmltYXRlKClcblxuICAgICAgICAvKnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBsZXQgcmVxdWVzdElEID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgdGhpcy5hbmltYXRlKClcbiAgICAgICAgfSlcbiAgICAgICAgfSwgMTAwMCAvIHRoaXMuZnBzKSovXG5cblxuICAgICAgICBsZXQgcmVxdWVzdElEID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0ZSgpXG4gICAgICAgIH0pXG4gICAgfVxuXG59XG5cblxuLypsZXQgZCA9IG5ldyBEYXRlKClcbiAgICAgICAgaWYgKHRoaXMub2xkVGltZSAlIDEwMDApIHtcbiAgICAgICAgICAgIHRoaXMub2xkVGltZSA9IGQuZ2V0TWlsbGlzZWNvbmRzKCk7XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMub2xkVGltZSlcbiAgICAgICAgfVxuICAgICAgICBpZiAoZC5nZXRNaWxsaXNlY29uZHMoKSAtIHRoaXMub2xkVGltZSA+PSB0aGlzLmRlbHRhKSB7XG4gICAgICAgICAgICB0aGlzLm9sZFRpbWUgPSBkLmdldE1pbGxpc2Vjb25kcygpO1xuICAgICAgICB9Ki9cbi8qaWYgKCsrdGhpcy5jb3VudGVyICUgMTApIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9Ki9cbiJdLCJuYW1lcyI6WyJjYW52YXMiLCJhbmltYXRlIiwiZnBzIiwiQW5pbWF0aW9uIiwiY3R4IiwiY2xlYXJSZWN0Iiwid2lkdGgiLCJoZWlnaHQiLCJyZXF1ZXN0SUQiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJfdGhpcyIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/ts/Animation.ts\n");

/***/ }),

/***/ "./src/ts/Canvas.ts":
/*!**************************!*\
  !*** ./src/ts/Canvas.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nexports.__esModule = true;\nexports.Canvas = void 0;\n\nvar settings_1 = __webpack_require__(/*! ./settings */ \"./src/ts/settings.ts\");\n\nvar Board_1 = __webpack_require__(/*! ./Drawables/Board */ \"./src/ts/Drawables/Board.ts\");\n\nvar Canvas = function () {\n  function Canvas() {\n    this.shapes = [];\n    this.canvasElt = document.getElementById('my-canvas');\n    this.ctx = this.canvasElt.getContext('2d');\n    this.ctx.canvas.width = settings_1.settings.canvas.columns * settings_1.settings.square.size;\n    this.ctx.canvas.height = settings_1.settings.canvas.rows * settings_1.settings.square.size;\n    this.ctx.scale(settings_1.settings.square.size, settings_1.settings.square.size);\n    this.board = new Board_1.Board(this.ctx);\n    this.addEventListeners();\n    this.board.tetromino;\n    this.draw();\n  }\n\n  Canvas.prototype.addEventListeners = function () {\n    var _this = this;\n\n    document.querySelector('.tetris__play').addEventListener('click', function (e) {\n      _this.board.reset();\n    });\n  };\n\n  Canvas.prototype.draw = function () {\n    this.board.tetromino.draw();\n  };\n\n  Canvas.prototype.animate = function () {\n    this.board.tetromino.animate();\n  };\n\n  return Canvas;\n}();\n\nexports.Canvas = Canvas;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvQ2FudmFzLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQ0E7O0FBQ0E7O0FBSUE7QUFNSTtBQUhPLGtCQUFzQixFQUF0QjtBQUlILFNBQUtBLFNBQUwsR0FBaUJDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixXQUF4QixDQUFqQjtBQUNBLFNBQUtDLEdBQUwsR0FBVyxLQUFLSCxTQUFMLENBQWVJLFVBQWYsQ0FBMEIsSUFBMUIsQ0FBWDtBQUNBLFNBQUtELEdBQUwsQ0FBU0UsTUFBVCxDQUFnQkMsS0FBaEIsR0FBd0JDLG9CQUFTRixNQUFULENBQWdCRyxPQUFoQixHQUEwQkQsb0JBQVNFLE1BQVQsQ0FBZ0JDLElBQWxFO0FBQ0EsU0FBS1AsR0FBTCxDQUFTRSxNQUFULENBQWdCTSxNQUFoQixHQUF5Qkosb0JBQVNGLE1BQVQsQ0FBZ0JPLElBQWhCLEdBQXVCTCxvQkFBU0UsTUFBVCxDQUFnQkMsSUFBaEU7QUFDQSxTQUFLUCxHQUFMLENBQVNVLEtBQVQsQ0FBZU4sb0JBQVNFLE1BQVQsQ0FBZ0JDLElBQS9CLEVBQXFDSCxvQkFBU0UsTUFBVCxDQUFnQkMsSUFBckQ7QUFDQSxTQUFLSSxLQUFMLEdBQWEsSUFBSUMsYUFBSixDQUFVLEtBQUtaLEdBQWYsQ0FBYjtBQUdBLFNBQUthLGlCQUFMO0FBRUEsU0FBS0YsS0FBTCxDQUFXRyxTQUFYO0FBRUEsU0FBS0MsSUFBTDtBQUVIOztBQUVEQztBQUFBOztBQUNJbEIsWUFBUSxDQUFDbUIsYUFBVCxDQUF1QixlQUF2QixFQUF3Q0MsZ0JBQXhDLENBQXlELE9BQXpELEVBQWtFLFVBQUNDLENBQUQsRUFBRTtBQUNoRUMsV0FBSSxDQUFDVCxLQUFMLENBQVdVLEtBQVg7QUFDSCxLQUZEO0FBR0gsR0FKRDs7QUFNQUw7QUFDSSxTQUFLTCxLQUFMLENBQVdHLFNBQVgsQ0FBcUJDLElBQXJCO0FBQ0gsR0FGRDs7QUFJQUM7QUFDSSxTQUFLTCxLQUFMLENBQVdHLFNBQVgsQ0FBcUJRLE9BQXJCO0FBQ0gsR0FGRDs7QUFLSjtBQUFDLENBdENEOztBQUFhQyxjQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RlbXBsYXRlLXByb2pldC1leGFtZW4vLi9zcmMvdHMvQ2FudmFzLnRzPzg1YTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJRHJhd2FibGV9IGZyb20gXCIuL0ludGVyZmFjZXMvSURyYXdhYmxlXCI7XG5pbXBvcnQge3NldHRpbmdzfSBmcm9tIFwiLi9zZXR0aW5nc1wiO1xuaW1wb3J0IHtCb2FyZH0gZnJvbSBcIi4vRHJhd2FibGVzL0JvYXJkXCI7XG5pbXBvcnQgdGV0cm9taW5vU2hhcGVzIGZyb20gXCIuL3RldHJvbWlub1NoYXBlc1wiO1xuaW1wb3J0IHtUZXRyb21pbm99IGZyb20gXCIuL0RyYXdhYmxlcy9UZXRyb21pbm9cIjtcblxuZXhwb3J0IGNsYXNzIENhbnZhcyB7XG4gICAgcHJpdmF0ZSBjYW52YXNFbHQ6IEhUTUxDYW52YXNFbGVtZW50XG4gICAgcHVibGljIGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEXG4gICAgcHVibGljIHNoYXBlczogSURyYXdhYmxlW10gPSBbXTtcbiAgICBwdWJsaWMgYm9hcmQ6IEJvYXJkO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuY2FudmFzRWx0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ215LWNhbnZhcycpIGFzIEhUTUxDYW52YXNFbGVtZW50XG4gICAgICAgIHRoaXMuY3R4ID0gdGhpcy5jYW52YXNFbHQuZ2V0Q29udGV4dCgnMmQnKVxuICAgICAgICB0aGlzLmN0eC5jYW52YXMud2lkdGggPSBzZXR0aW5ncy5jYW52YXMuY29sdW1ucyAqIHNldHRpbmdzLnNxdWFyZS5zaXplXG4gICAgICAgIHRoaXMuY3R4LmNhbnZhcy5oZWlnaHQgPSBzZXR0aW5ncy5jYW52YXMucm93cyAqIHNldHRpbmdzLnNxdWFyZS5zaXplXG4gICAgICAgIHRoaXMuY3R4LnNjYWxlKHNldHRpbmdzLnNxdWFyZS5zaXplLCBzZXR0aW5ncy5zcXVhcmUuc2l6ZSlcbiAgICAgICAgdGhpcy5ib2FyZCA9IG5ldyBCb2FyZCh0aGlzLmN0eClcbiAgICAgICAgLy9jb25zb2xlLnRhYmxlKHRoaXMuYm9hcmQuZ2V0RW1wdHlCb2FyZCgpKVxuXG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoKTtcblxuICAgICAgICB0aGlzLmJvYXJkLnRldHJvbWlub1xuXG4gICAgICAgIHRoaXMuZHJhdygpXG5cbiAgICB9XG5cbiAgICBhZGRFdmVudExpc3RlbmVycygpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRldHJpc19fcGxheScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIHRoaXMuYm9hcmQucmVzZXQoKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGRyYXcoKSB7XG4gICAgICAgIHRoaXMuYm9hcmQudGV0cm9taW5vLmRyYXcoKVxuICAgIH1cblxuICAgIGFuaW1hdGUoKSB7XG4gICAgICAgIHRoaXMuYm9hcmQudGV0cm9taW5vLmFuaW1hdGUoKVxuICAgIH1cblxuXG59Il0sIm5hbWVzIjpbImNhbnZhc0VsdCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjdHgiLCJnZXRDb250ZXh0IiwiY2FudmFzIiwid2lkdGgiLCJzZXR0aW5nc18xIiwiY29sdW1ucyIsInNxdWFyZSIsInNpemUiLCJoZWlnaHQiLCJyb3dzIiwic2NhbGUiLCJib2FyZCIsIkJvYXJkXzEiLCJhZGRFdmVudExpc3RlbmVycyIsInRldHJvbWlubyIsImRyYXciLCJDYW52YXMiLCJxdWVyeVNlbGVjdG9yIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJfdGhpcyIsInJlc2V0IiwiYW5pbWF0ZSIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/ts/Canvas.ts\n");

/***/ }),

/***/ "./src/ts/Drawables/Board.ts":
/*!***********************************!*\
  !*** ./src/ts/Drawables/Board.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nexports.__esModule = true;\nexports.Board = void 0;\n\nvar settings_1 = __webpack_require__(/*! ../settings */ \"./src/ts/settings.ts\");\n\nvar Tetromino_1 = __webpack_require__(/*! ./Tetromino */ \"./src/ts/Drawables/Tetromino.ts\");\n\nvar Board = function () {\n  function Board(ctx) {\n    this.ctx = ctx;\n    this.getEmptyBoard();\n    this.tetromino = new Tetromino_1.Tetromino(this.ctx);\n  }\n\n  Board.prototype.getEmptyBoard = function () {\n    var columns = Array.from({\n      length: settings_1.settings.canvas.columns\n    });\n    return Array.from({\n      length: settings_1.settings.canvas.rows\n    }, function () {\n      return columns.fill(0);\n    });\n  };\n\n  Board.prototype.reset = function () {\n    return this.getEmptyBoard();\n  };\n\n  return Board;\n}();\n\nexports.Board = Board;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvRHJhd2FibGVzL0JvYXJkLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0FBQ0E7O0FBRUE7QUFJSSxpQkFBWUEsR0FBWixFQUF5QztBQUNyQyxTQUFLQSxHQUFMLEdBQVdBLEdBQVg7QUFHQSxTQUFLQyxhQUFMO0FBQ0EsU0FBS0MsU0FBTCxHQUFpQixJQUFJQyxxQkFBSixDQUFjLEtBQUtILEdBQW5CLENBQWpCO0FBQ0g7O0FBRURJO0FBSUksUUFBSUMsT0FBTyxHQUFHQyxLQUFLLENBQUNDLElBQU4sQ0FBVztBQUFDQyxZQUFNLEVBQUdDLG9CQUFTQyxNQUFULENBQWdCTDtBQUExQixLQUFYLENBQWQ7QUFDQSxXQUFPQyxLQUFLLENBQUNDLElBQU4sQ0FBVztBQUFDQyxZQUFNLEVBQUdDLG9CQUFTQyxNQUFULENBQWdCQztBQUExQixLQUFYLEVBQTRDO0FBQU0sb0JBQU8sQ0FBQ0MsSUFBUixDQUFhLENBQWI7QUFBZSxLQUFqRSxDQUFQO0FBQ0gsR0FORDs7QUFRQVI7QUFDSSxXQUFPLEtBQUtILGFBQUwsRUFBUDtBQUNILEdBRkQ7O0FBSUo7QUFBQyxDQXhCRDs7QUFBYVksYUFBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZW1wbGF0ZS1wcm9qZXQtZXhhbWVuLy4vc3JjL3RzL0RyYXdhYmxlcy9Cb2FyZC50cz85ZWNhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7c2V0dGluZ3N9IGZyb20gXCIuLi9zZXR0aW5nc1wiO1xuaW1wb3J0IHtUZXRyb21pbm99IGZyb20gXCIuL1RldHJvbWlub1wiO1xuXG5leHBvcnQgY2xhc3MgQm9hcmQge1xuICAgIHByaXZhdGUgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XG4gICAgcHVibGljIHRldHJvbWlubzogVGV0cm9taW5vO1xuXG4gICAgY29uc3RydWN0b3IoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpIHtcbiAgICAgICAgdGhpcy5jdHggPSBjdHhcbiAgICAgICAgLy8gYm9hcmQgd2l0aCBlbXB0eSBjZWxscyA6IDBcbiAgICAgICAgLy8gV2l0aCBvY2N1cGllZCBjZWxscyA6IDEtNyBhY2NvcmRpbmcgdG8gY29sb3JzXG4gICAgICAgIHRoaXMuZ2V0RW1wdHlCb2FyZCgpXG4gICAgICAgIHRoaXMudGV0cm9taW5vID0gbmV3IFRldHJvbWlubyh0aGlzLmN0eClcbiAgICB9XG5cbiAgICBnZXRFbXB0eUJvYXJkKCkge1xuICAgICAgICAvLyBsZW5ndGggOiBnw6luw6hyZSB1bmUgc8OpcXVlbmNlIGRlIG5vbWJyZXMgOiAyMCByb3dzID0gWzAgLSAxOV1cbiAgICAgICAgLy8gYXJyYXkuZmlsbCgpIDogZmlsbCBhbGwgZWxlbWVudHMgd2l0aCB2YWx1ZVxuICAgICAgICAvLyA9IGdyaWxsZSBkZSAxMCBzdXIgMjBcbiAgICAgICAgbGV0IGNvbHVtbnMgPSBBcnJheS5mcm9tKHtsZW5ndGggOiBzZXR0aW5ncy5jYW52YXMuY29sdW1uc30pXG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKHtsZW5ndGggOiBzZXR0aW5ncy5jYW52YXMucm93c30sICgpID0+IGNvbHVtbnMuZmlsbCgwKSlcbiAgICB9XG5cbiAgICByZXNldCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RW1wdHlCb2FyZCgpXG4gICAgfVxuXG59Il0sIm5hbWVzIjpbImN0eCIsImdldEVtcHR5Qm9hcmQiLCJ0ZXRyb21pbm8iLCJUZXRyb21pbm9fMSIsIkJvYXJkIiwiY29sdW1ucyIsIkFycmF5IiwiZnJvbSIsImxlbmd0aCIsInNldHRpbmdzXzEiLCJjYW52YXMiLCJyb3dzIiwiZmlsbCIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/ts/Drawables/Board.ts\n");

/***/ }),

/***/ "./src/ts/Drawables/Shape.ts":
/*!***********************************!*\
  !*** ./src/ts/Drawables/Shape.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nexports.__esModule = true;\nexports.Shape = void 0;\n\nvar Shape = function () {\n  function Shape(ctx) {\n    this.ctx = ctx;\n  }\n\n  Shape.prototype.draw = function () {};\n\n  Shape.prototype.animate = function () {};\n\n  Shape.prototype.moveLeft = function () {};\n\n  Shape.prototype.moveRight = function () {};\n\n  Shape.prototype.moveDown = function () {};\n\n  Shape.prototype.rotate = function () {};\n\n  Shape.prototype.checkCollision = function () {};\n\n  return Shape;\n}();\n\nexports.Shape = Shape;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvRHJhd2FibGVzL1NoYXBlLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBRUE7QUFNSSxpQkFBc0JBLEdBQXRCLEVBQW1EO0FBQy9DLFNBQUtBLEdBQUwsR0FBV0EsR0FBWDtBQUNIOztBQUVEQyxzQ0FBUSxDQUFSOztBQUVBQSx5Q0FBVyxDQUFYOztBQUVBQSwwQ0FBWSxDQUFaOztBQUVBQSwyQ0FBYSxDQUFiOztBQUVBQSwwQ0FBWSxDQUFaOztBQUVBQSx3Q0FBVSxDQUFWOztBQUVBQSxnREFBa0IsQ0FBbEI7O0FBR0o7QUFBQyxDQXpCRDs7QUFBc0JDLGFBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVtcGxhdGUtcHJvamV0LWV4YW1lbi8uL3NyYy90cy9EcmF3YWJsZXMvU2hhcGUudHM/ZjdlMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0lEcmF3YWJsZX0gZnJvbSBcIi4uL0ludGVyZmFjZXMvSURyYXdhYmxlXCI7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBTaGFwZSBpbXBsZW1lbnRzIElEcmF3YWJsZXtcbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XG4gICAgcHJvdGVjdGVkIGlkOiBudW1iZXI7XG4gICAgcHJvdGVjdGVkIGNvbG9yOiBzdHJpbmc7XG4gICAgcHJvdGVjdGVkIHBvc2l0aW9uOiB7eDogbnVtYmVyLCB5OiBudW1iZXJ9XG5cbiAgICBwcm90ZWN0ZWQgY29uc3RydWN0b3IoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpIHtcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgfVxuXG4gICAgZHJhdygpe31cblxuICAgIGFuaW1hdGUoKXt9XG5cbiAgICBtb3ZlTGVmdCgpe31cblxuICAgIG1vdmVSaWdodCgpe31cblxuICAgIG1vdmVEb3duKCl7fVxuXG4gICAgcm90YXRlKCl7fVxuXG4gICAgY2hlY2tDb2xsaXNpb24oKXt9XG5cblxufSJdLCJuYW1lcyI6WyJjdHgiLCJTaGFwZSIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/ts/Drawables/Shape.ts\n");

/***/ }),

/***/ "./src/ts/Drawables/Tetromino.ts":
/*!***************************************!*\
  !*** ./src/ts/Drawables/Tetromino.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\n\nvar __extends = this && this.__extends || function () {\n  var _extendStatics = function extendStatics(d, b) {\n    _extendStatics = Object.setPrototypeOf || {\n      __proto__: []\n    } instanceof Array && function (d, b) {\n      d.__proto__ = b;\n    } || function (d, b) {\n      for (var p in b) {\n        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];\n      }\n    };\n\n    return _extendStatics(d, b);\n  };\n\n  return function (d, b) {\n    if (typeof b !== \"function\" && b !== null) throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n\n    _extendStatics(d, b);\n\n    function __() {\n      this.constructor = d;\n    }\n\n    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n  };\n}();\n\nexports.__esModule = true;\nexports.Tetromino = void 0;\n\nvar Shape_1 = __webpack_require__(/*! ./Shape */ \"./src/ts/Drawables/Shape.ts\");\n\nvar tetrominoShapes_1 = __webpack_require__(/*! ../tetrominoShapes */ \"./src/ts/tetrominoShapes.ts\");\n\nvar tetrominoColors_1 = __webpack_require__(/*! ../tetrominoColors */ \"./src/ts/tetrominoColors.ts\");\n\nvar settings_1 = __webpack_require__(/*! ../settings */ \"./src/ts/settings.ts\");\n\nvar Tetromino = function (_super) {\n  __extends(Tetromino, _super);\n\n  function Tetromino(ctx) {\n    var _this = _super.call(this, ctx) || this;\n\n    _this.id = Math.floor(Math.random() * tetrominoShapes_1[\"default\"].length);\n    _this.shape = tetrominoShapes_1[\"default\"][_this.id];\n    _this.color = tetrominoColors_1[\"default\"][_this.id];\n    _this.position = {\n      x: settings_1.settings.tetrominos.position.x,\n      y: settings_1.settings.tetrominos.position.y\n    };\n    return _this;\n  }\n\n  Tetromino.prototype.draw = function () {\n    var _this = this;\n\n    this.ctx.beginPath();\n    this.ctx.fillStyle = this.color;\n    this.shape.forEach(function (row, y) {\n      row.forEach(function (value, x) {\n        if (value > 0) {\n          _this.ctx.fillRect(_this.position.x + x, _this.position.y + y, 1, 1);\n        }\n      });\n    });\n    this.ctx.closePath();\n  };\n\n  Tetromino.prototype.animate = function () {\n    this.draw();\n    this.checkCollision();\n  };\n\n  Tetromino.prototype.fall = function () {\n    if (this.position.y + this.shape.length >= settings_1.settings.canvas.rows) {\n      this.position.y += 0;\n    } else {\n      this.position.y += 1;\n    }\n  };\n\n  Tetromino.prototype.moveLeft = function () {\n    if (this.position.x > 0) {\n      this.position.x -= 1;\n    }\n\n    this.draw();\n  };\n\n  Tetromino.prototype.moveRight = function () {\n    for (var i = 0; i < this.shape.length; i++) {\n      if (this.position.x + this.shape[i].length < settings_1.settings.canvas.columns) {\n        this.position.x += 1;\n        return false;\n      }\n    }\n\n    this.draw();\n  };\n\n  Tetromino.prototype.moveDown = function () {\n    for (var i = 0; i < this.shape.length; i++) {\n      if (this.position.y + this.shape.length < settings_1.settings.canvas.rows) {\n        this.position.y += 1;\n        return false;\n      }\n    }\n\n    this.draw();\n  };\n\n  Tetromino.prototype.rotate = function () {\n    for (var i = 0; i < this.shape.length; i++) {\n      console.log(this.shape[i].length);\n    }\n\n    this.draw();\n  };\n\n  Tetromino.prototype.checkCollision = function () {};\n\n  return Tetromino;\n}(Shape_1.Shape);\n\nexports.Tetromino = Tetromino;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvRHJhd2FibGVzL1RldHJvbWluby50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTtBQUErQkE7O0FBSTNCLHFCQUFZQyxHQUFaLEVBQXlDO0FBQXpDLGdCQUNJQyxrQkFBTUQsR0FBTixLQUFVLElBRGQ7O0FBRUlFLFNBQUksQ0FBQ0MsRUFBTCxHQUFVQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLEtBQWdCQyw2QkFBZ0JDLE1BQTNDLENBQVY7QUFDQU4sU0FBSSxDQUFDTyxLQUFMLEdBQWFGLDZCQUFnQkwsS0FBSSxDQUFDQyxFQUFyQixDQUFiO0FBQ0FELFNBQUksQ0FBQ1EsS0FBTCxHQUFhQyw2QkFBZ0JULEtBQUksQ0FBQ0MsRUFBckIsQ0FBYjtBQUVBRCxTQUFJLENBQUNVLFFBQUwsR0FBZ0I7QUFBQ0MsT0FBQyxFQUFFQyxvQkFBU0MsVUFBVCxDQUFvQkgsUUFBcEIsQ0FBNkJDLENBQWpDO0FBQW9DRyxPQUFDLEVBQUVGLG9CQUFTQyxVQUFULENBQW9CSCxRQUFwQixDQUE2Qkk7QUFBcEUsS0FBaEI7O0FBQ0g7O0FBRVFDLDZCQUFUO0FBQUE7O0FBQ0ksU0FBS2pCLEdBQUwsQ0FBU2tCLFNBQVQ7QUFDQSxTQUFLbEIsR0FBTCxDQUFTbUIsU0FBVCxHQUFxQixLQUFLVCxLQUExQjtBQUNBLFNBQUtELEtBQUwsQ0FBV1csT0FBWCxDQUFtQixVQUFDQyxHQUFELEVBQU1MLENBQU4sRUFBTztBQUN0QkssU0FBRyxDQUFDRCxPQUFKLENBQVksVUFBQ0UsS0FBRCxFQUFRVCxDQUFSLEVBQVM7QUFDakIsWUFBSVMsS0FBSyxHQUFHLENBQVosRUFBZTtBQUNYcEIsZUFBSSxDQUFDRixHQUFMLENBQVN1QixRQUFULENBQWtCckIsS0FBSSxDQUFDVSxRQUFMLENBQWNDLENBQWQsR0FBa0JBLENBQXBDLEVBQXVDWCxLQUFJLENBQUNVLFFBQUwsQ0FBY0ksQ0FBZCxHQUFrQkEsQ0FBekQsRUFBNEQsQ0FBNUQsRUFBK0QsQ0FBL0Q7QUFDSDtBQUNKLE9BSkQ7QUFLSCxLQU5EO0FBT0EsU0FBS2hCLEdBQUwsQ0FBU3dCLFNBQVQ7QUFDSCxHQVhROztBQWFBUCxnQ0FBVDtBQUdJLFNBQUtRLElBQUw7QUFDQSxTQUFLQyxjQUFMO0FBQ0gsR0FMUTs7QUFPVFQ7QUFDSSxRQUFJLEtBQUtMLFFBQUwsQ0FBY0ksQ0FBZCxHQUFrQixLQUFLUCxLQUFMLENBQVdELE1BQTdCLElBQXVDTSxvQkFBU2EsTUFBVCxDQUFnQkMsSUFBM0QsRUFBaUU7QUFDN0QsV0FBS2hCLFFBQUwsQ0FBY0ksQ0FBZCxJQUFtQixDQUFuQjtBQUNILEtBRkQsTUFFTztBQUNILFdBQUtKLFFBQUwsQ0FBY0ksQ0FBZCxJQUFtQixDQUFuQjtBQUNIO0FBQ0osR0FORDs7QUFRU0MsaUNBQVQ7QUFDSSxRQUFJLEtBQUtMLFFBQUwsQ0FBY0MsQ0FBZCxHQUFrQixDQUF0QixFQUF5QjtBQUNyQixXQUFLRCxRQUFMLENBQWNDLENBQWQsSUFBbUIsQ0FBbkI7QUFDSDs7QUFDRCxTQUFLWSxJQUFMO0FBQ0gsR0FMUTs7QUFPQVIsa0NBQVQ7QUFDSSxTQUFLLElBQUlZLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsS0FBS3BCLEtBQUwsQ0FBV0QsTUFBL0IsRUFBdUNxQixDQUFDLEVBQXhDLEVBQTRDO0FBQ3hDLFVBQUksS0FBS2pCLFFBQUwsQ0FBY0MsQ0FBZCxHQUFrQixLQUFLSixLQUFMLENBQVdvQixDQUFYLEVBQWNyQixNQUFoQyxHQUF5Q00sb0JBQVNhLE1BQVQsQ0FBZ0JHLE9BQTdELEVBQXNFO0FBQ2xFLGFBQUtsQixRQUFMLENBQWNDLENBQWQsSUFBbUIsQ0FBbkI7QUFDQSxlQUFPLEtBQVA7QUFDSDtBQUNKOztBQUNELFNBQUtZLElBQUw7QUFDSCxHQVJROztBQVVBUixpQ0FBVDtBQUNJLFNBQUssSUFBSVksQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxLQUFLcEIsS0FBTCxDQUFXRCxNQUEvQixFQUF1Q3FCLENBQUMsRUFBeEMsRUFBNEM7QUFDeEMsVUFBSSxLQUFLakIsUUFBTCxDQUFjSSxDQUFkLEdBQWtCLEtBQUtQLEtBQUwsQ0FBV0QsTUFBN0IsR0FBc0NNLG9CQUFTYSxNQUFULENBQWdCQyxJQUExRCxFQUFnRTtBQUM1RCxhQUFLaEIsUUFBTCxDQUFjSSxDQUFkLElBQW1CLENBQW5CO0FBQ0EsZUFBTyxLQUFQO0FBQ0g7QUFDSjs7QUFDRCxTQUFLUyxJQUFMO0FBQ0gsR0FSUTs7QUFVQVIsK0JBQVQ7QUFDSSxTQUFLLElBQUlZLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsS0FBS3BCLEtBQUwsQ0FBV0QsTUFBL0IsRUFBdUNxQixDQUFDLEVBQXhDLEVBQTRDO0FBQ3hDRSxhQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFLdkIsS0FBTCxDQUFXb0IsQ0FBWCxFQUFjckIsTUFBMUI7QUFDSDs7QUFjRCxTQUFLaUIsSUFBTDtBQUNILEdBbEJROztBQW9CQVIsdUNBQVQsYUFHQyxDQUhROztBQUliO0FBQUMsQ0E1RkQsQ0FBK0JnQixhQUEvQjs7QUFBYUMsaUJBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVtcGxhdGUtcHJvamV0LWV4YW1lbi8uL3NyYy90cy9EcmF3YWJsZXMvVGV0cm9taW5vLnRzPzA1NmEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJRHJhd2FibGV9IGZyb20gXCIuLi9JbnRlcmZhY2VzL0lEcmF3YWJsZVwiO1xuaW1wb3J0IHtTaGFwZX0gZnJvbSBcIi4vU2hhcGVcIjtcbmltcG9ydCB0ZXRyb21pbm9TaGFwZXMgZnJvbSBcIi4uL3RldHJvbWlub1NoYXBlc1wiO1xuaW1wb3J0IHRldHJvbWlub0NvbG9ycyBmcm9tIFwiLi4vdGV0cm9taW5vQ29sb3JzXCI7XG5pbXBvcnQge3NldHRpbmdzfSBmcm9tIFwiLi4vc2V0dGluZ3NcIjtcblxuZXhwb3J0IGNsYXNzIFRldHJvbWlubyBleHRlbmRzIFNoYXBlIGltcGxlbWVudHMgSURyYXdhYmxlIHtcbiAgICBwcml2YXRlIHNoYXBlOiBudW1iZXJbXVtdO1xuXG5cbiAgICBjb25zdHJ1Y3RvcihjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkge1xuICAgICAgICBzdXBlcihjdHgpO1xuICAgICAgICB0aGlzLmlkID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGV0cm9taW5vU2hhcGVzLmxlbmd0aClcbiAgICAgICAgdGhpcy5zaGFwZSA9IHRldHJvbWlub1NoYXBlc1t0aGlzLmlkXVxuICAgICAgICB0aGlzLmNvbG9yID0gdGV0cm9taW5vQ29sb3JzW3RoaXMuaWRdXG5cbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHt4OiBzZXR0aW5ncy50ZXRyb21pbm9zLnBvc2l0aW9uLngsIHk6IHNldHRpbmdzLnRldHJvbWlub3MucG9zaXRpb24ueX1cbiAgICB9XG5cbiAgICBvdmVycmlkZSBkcmF3KCkge1xuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKVxuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSB0aGlzLmNvbG9yXG4gICAgICAgIHRoaXMuc2hhcGUuZm9yRWFjaCgocm93LCB5KSA9PiB7XG4gICAgICAgICAgICByb3cuZm9yRWFjaCgodmFsdWUsIHgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KHRoaXMucG9zaXRpb24ueCArIHgsIHRoaXMucG9zaXRpb24ueSArIHksIDEsIDEpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKClcbiAgICB9XG5cbiAgICBvdmVycmlkZSBhbmltYXRlKCkge1xuICAgICAgICAvL3RoaXMuZmFsbCgpXG5cbiAgICAgICAgdGhpcy5kcmF3KClcbiAgICAgICAgdGhpcy5jaGVja0NvbGxpc2lvbigpXG4gICAgfVxuXG4gICAgZmFsbCgpIHtcbiAgICAgICAgaWYgKHRoaXMucG9zaXRpb24ueSArIHRoaXMuc2hhcGUubGVuZ3RoID49IHNldHRpbmdzLmNhbnZhcy5yb3dzKSB7XG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnkgKz0gMFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi55ICs9IDFcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG92ZXJyaWRlIG1vdmVMZWZ0KCkge1xuICAgICAgICBpZiAodGhpcy5wb3NpdGlvbi54ID4gMCkge1xuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi54IC09IDFcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRyYXcoKVxuICAgIH1cblxuICAgIG92ZXJyaWRlIG1vdmVSaWdodCgpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNoYXBlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wb3NpdGlvbi54ICsgdGhpcy5zaGFwZVtpXS5sZW5ndGggPCBzZXR0aW5ncy5jYW52YXMuY29sdW1ucykge1xuICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueCArPSAxXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kcmF3KClcbiAgICB9XG5cbiAgICBvdmVycmlkZSBtb3ZlRG93bigpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNoYXBlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wb3NpdGlvbi55ICsgdGhpcy5zaGFwZS5sZW5ndGggPCBzZXR0aW5ncy5jYW52YXMucm93cykge1xuICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueSArPSAxXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kcmF3KClcbiAgICB9XG5cbiAgICBvdmVycmlkZSByb3RhdGUoKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zaGFwZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5zaGFwZVtpXS5sZW5ndGgpXG4gICAgICAgIH1cblxuXG5cbiAgICAgICAgLypmb3IgKGxldCB5ID0gMDsgeSA8IHRoaXMuc2hhcGUubGVuZ3RoOyB5KyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgeTsgKyt4KSB7XG4gICAgICAgICAgICAgICAgW3RoaXMuc2hhcGVbeF1beV0sIHRoaXMuc2hhcGVbeV1beF1dID1cbiAgICAgICAgICAgICAgICAgICAgW3RoaXMuc2hhcGVbeV1beF0sIHRoaXMuc2hhcGVbeF1beV1dO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2hhcGUuZm9yRWFjaCgocm93OiBhbnlbXSkgPT4gcm93LnJldmVyc2UoKSk7Ki9cblxuXG5cbiAgICAgICAgdGhpcy5kcmF3KClcbiAgICB9XG5cbiAgICBvdmVycmlkZSBjaGVja0NvbGxpc2lvbigpIHtcblxuXG4gICAgfVxufVxuIl0sIm5hbWVzIjpbIl9fZXh0ZW5kcyIsImN0eCIsIl9zdXBlciIsIl90aGlzIiwiaWQiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJ0ZXRyb21pbm9TaGFwZXNfMSIsImxlbmd0aCIsInNoYXBlIiwiY29sb3IiLCJ0ZXRyb21pbm9Db2xvcnNfMSIsInBvc2l0aW9uIiwieCIsInNldHRpbmdzXzEiLCJ0ZXRyb21pbm9zIiwieSIsIlRldHJvbWlubyIsImJlZ2luUGF0aCIsImZpbGxTdHlsZSIsImZvckVhY2giLCJyb3ciLCJ2YWx1ZSIsImZpbGxSZWN0IiwiY2xvc2VQYXRoIiwiZHJhdyIsImNoZWNrQ29sbGlzaW9uIiwiY2FudmFzIiwicm93cyIsImkiLCJjb2x1bW5zIiwiY29uc29sZSIsImxvZyIsIlNoYXBlXzEiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/ts/Drawables/Tetromino.ts\n");

/***/ }),

/***/ "./src/ts/GameController.ts":
/*!**********************************!*\
  !*** ./src/ts/GameController.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nexports.__esModule = true;\nexports.GameController = void 0;\n\nvar GameController = function () {\n  function GameController(animation, tetromino) {\n    this.isStart = false;\n    this.animation = animation;\n    this.playText = document.querySelector('.tetris__play');\n    this.tetromino = tetromino;\n    this.addEventListeners();\n  }\n\n  GameController.prototype.addEventListeners = function () {\n    var _this = this;\n\n    window.addEventListener('keydown', function (e) {\n      if (e.key === 'ArrowRight') {\n        _this.tetromino.moveRight();\n      }\n\n      if (e.key === 'ArrowLeft') {\n        _this.tetromino.moveLeft();\n      }\n\n      if (e.key === 'ArrowDown') {\n        _this.tetromino.moveDown();\n      }\n\n      if (e.key === 'ArrowUp') {\n        _this.tetromino.rotate();\n      }\n    });\n  };\n\n  return GameController;\n}();\n\nexports.GameController = GameController;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvR2FtZUNvbnRyb2xsZXIudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFHQTtBQU1JLDBCQUFZQSxTQUFaLEVBQWtDQyxTQUFsQyxFQUFzRDtBQUNsRCxTQUFLQyxPQUFMLEdBQWUsS0FBZjtBQUNBLFNBQUtGLFNBQUwsR0FBaUJBLFNBQWpCO0FBQ0EsU0FBS0csUUFBTCxHQUFnQkMsUUFBUSxDQUFDQyxhQUFULENBQXVCLGVBQXZCLENBQWhCO0FBQ0EsU0FBS0osU0FBTCxHQUFpQkEsU0FBakI7QUFDQSxTQUFLSyxpQkFBTDtBQUNIOztBQUVEQztBQUFBOztBQUNJQyxVQUFNLENBQUNDLGdCQUFQLENBQXdCLFNBQXhCLEVBQW1DLFVBQUNDLENBQUQsRUFBaUI7QUFDaEQsVUFBSUEsQ0FBQyxDQUFDQyxHQUFGLEtBQVUsWUFBZCxFQUE0QjtBQUN4QkMsYUFBSSxDQUFDWCxTQUFMLENBQWVZLFNBQWY7QUFDSDs7QUFDRCxVQUFJSCxDQUFDLENBQUNDLEdBQUYsS0FBVSxXQUFkLEVBQTJCO0FBQ3ZCQyxhQUFJLENBQUNYLFNBQUwsQ0FBZWEsUUFBZjtBQUNIOztBQUNELFVBQUlKLENBQUMsQ0FBQ0MsR0FBRixLQUFVLFdBQWQsRUFBMkI7QUFDdkJDLGFBQUksQ0FBQ1gsU0FBTCxDQUFlYyxRQUFmO0FBQ0g7O0FBQ0QsVUFBSUwsQ0FBQyxDQUFDQyxHQUFGLEtBQVUsU0FBZCxFQUF5QjtBQUVyQkMsYUFBSSxDQUFDWCxTQUFMLENBQWVlLE1BQWY7QUFDSDtBQUNKLEtBZEQ7QUFlSCxHQWhCRDs7QUFtQko7QUFBQyxDQWpDRDs7QUFBYUMsc0JBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVtcGxhdGUtcHJvamV0LWV4YW1lbi8uL3NyYy90cy9HYW1lQ29udHJvbGxlci50cz9hOWE0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QW5pbWF0aW9ufSBmcm9tIFwiLi9BbmltYXRpb25cIjtcbmltcG9ydCB7VGV0cm9taW5vfSBmcm9tIFwiLi9EcmF3YWJsZXMvVGV0cm9taW5vXCI7XG5cbmV4cG9ydCBjbGFzcyBHYW1lQ29udHJvbGxlciB7XG4gICAgcHJpdmF0ZSBpc1N0YXJ0OiBib29sZWFuO1xuICAgIHByaXZhdGUgYW5pbWF0aW9uOiBBbmltYXRpb247XG4gICAgcHJpdmF0ZSBwbGF5VGV4dDogSFRNTFBhcmFncmFwaEVsZW1lbnQ7XG4gICAgcHJpdmF0ZSB0ZXRyb21pbm86IFRldHJvbWlubztcblxuICAgIGNvbnN0cnVjdG9yKGFuaW1hdGlvbjogQW5pbWF0aW9uLCB0ZXRyb21pbm86IFRldHJvbWlubykge1xuICAgICAgICB0aGlzLmlzU3RhcnQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5hbmltYXRpb24gPSBhbmltYXRpb247XG4gICAgICAgIHRoaXMucGxheVRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGV0cmlzX19wbGF5Jyk7XG4gICAgICAgIHRoaXMudGV0cm9taW5vID0gdGV0cm9taW5vXG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoKVxuICAgIH1cblxuICAgIGFkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChlOiBLZXlib2FyZEV2ZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAoZS5rZXkgPT09ICdBcnJvd1JpZ2h0Jykge1xuICAgICAgICAgICAgICAgIHRoaXMudGV0cm9taW5vLm1vdmVSaWdodCgpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZS5rZXkgPT09ICdBcnJvd0xlZnQnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50ZXRyb21pbm8ubW92ZUxlZnQoKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGUua2V5ID09PSAnQXJyb3dEb3duJykge1xuICAgICAgICAgICAgICAgIHRoaXMudGV0cm9taW5vLm1vdmVEb3duKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChlLmtleSA9PT0gJ0Fycm93VXAnKSB7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnRldHJvbWluby5yb3RhdGUoKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuXG59Il0sIm5hbWVzIjpbImFuaW1hdGlvbiIsInRldHJvbWlubyIsImlzU3RhcnQiLCJwbGF5VGV4dCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImFkZEV2ZW50TGlzdGVuZXJzIiwiR2FtZUNvbnRyb2xsZXIiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImtleSIsIl90aGlzIiwibW92ZVJpZ2h0IiwibW92ZUxlZnQiLCJtb3ZlRG93biIsInJvdGF0ZSIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/ts/GameController.ts\n");

/***/ }),

/***/ "./src/ts/Main.ts":
/*!************************!*\
  !*** ./src/ts/Main.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nexports.__esModule = true;\n\nvar Canvas_1 = __webpack_require__(/*! ./Canvas */ \"./src/ts/Canvas.ts\");\n\nvar Animation_1 = __webpack_require__(/*! ./Animation */ \"./src/ts/Animation.ts\");\n\nvar GameController_1 = __webpack_require__(/*! ./GameController */ \"./src/ts/GameController.ts\");\n\nvar Main = function () {\n  function Main() {\n    this.canvas = new Canvas_1.Canvas();\n    this.animation = new Animation_1.Animation(this.canvas);\n    this.game = new GameController_1.GameController(this.animation, this.canvas.board.tetromino);\n  }\n\n  return Main;\n}();\n\nnew Main();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvTWFpbi50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBRUE7QUFLSTtBQUNJLFNBQUtBLE1BQUwsR0FBYyxJQUFJQyxlQUFKLEVBQWQ7QUFDQSxTQUFLQyxTQUFMLEdBQWlCLElBQUlDLHFCQUFKLENBQWMsS0FBS0gsTUFBbkIsQ0FBakI7QUFDQSxTQUFLSSxJQUFMLEdBQVksSUFBSUMsK0JBQUosQ0FBbUIsS0FBS0gsU0FBeEIsRUFBa0MsS0FBS0YsTUFBTCxDQUFZTSxLQUFaLENBQWtCQyxTQUFwRCxDQUFaO0FBQ0g7O0FBQ0w7QUFBQyxDQVZEOztBQVlBLElBQUlDLElBQUoiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZW1wbGF0ZS1wcm9qZXQtZXhhbWVuLy4vc3JjL3RzL01haW4udHM/NDg4ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NhbnZhc30gZnJvbSBcIi4vQ2FudmFzXCI7XG5pbXBvcnQge0FuaW1hdGlvbn0gZnJvbSBcIi4vQW5pbWF0aW9uXCI7XG5pbXBvcnQge0dhbWVDb250cm9sbGVyfSBmcm9tIFwiLi9HYW1lQ29udHJvbGxlclwiO1xuXG5jbGFzcyBNYWluIHtcbiAgICBwcml2YXRlIGNhbnZhczogQ2FudmFzXG4gICAgcHJpdmF0ZSBhbmltYXRpb246IEFuaW1hdGlvbjtcbiAgICBwcml2YXRlIGdhbWU6IEdhbWVDb250cm9sbGVyO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuY2FudmFzID0gbmV3IENhbnZhcygpO1xuICAgICAgICB0aGlzLmFuaW1hdGlvbiA9IG5ldyBBbmltYXRpb24odGhpcy5jYW52YXMpXG4gICAgICAgIHRoaXMuZ2FtZSA9IG5ldyBHYW1lQ29udHJvbGxlcih0aGlzLmFuaW1hdGlvbix0aGlzLmNhbnZhcy5ib2FyZC50ZXRyb21pbm8pO1xuICAgIH1cbn1cblxubmV3IE1haW4oKTsiXSwibmFtZXMiOlsiY2FudmFzIiwiQ2FudmFzXzEiLCJhbmltYXRpb24iLCJBbmltYXRpb25fMSIsImdhbWUiLCJHYW1lQ29udHJvbGxlcl8xIiwiYm9hcmQiLCJ0ZXRyb21pbm8iLCJNYWluIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/ts/Main.ts\n");

/***/ }),

/***/ "./src/ts/settings.ts":
/*!****************************!*\
  !*** ./src/ts/settings.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nexports.__esModule = true;\nexports.settings = void 0;\nexports.settings = {\n  canvas: {\n    columns: 10,\n    rows: 20\n  },\n  animationTime: {\n    start: 0,\n    timeInterval: 0,\n    maxTime: 1000\n  },\n  tetrominos: {\n    speed: 5,\n    acceleration: 1.5,\n    width: 20,\n    position: {\n      x: 3,\n      y: 0\n    },\n    square: {\n      color: 'hsl(45, 60%, 75%)'\n    },\n    level: 1\n  },\n  square: {\n    size: 20\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvc2V0dGluZ3MudHMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFhQSxnQkFBQUEsR0FBVztBQUNwQkMsUUFBTSxFQUFFO0FBQ0pDLFdBQU8sRUFBRyxFQUROO0FBRUpDLFFBQUksRUFBRztBQUZILEdBRFk7QUFLcEJDLGVBQWEsRUFBRTtBQUNYQyxTQUFLLEVBQUUsQ0FESTtBQUVYQyxnQkFBWSxFQUFFLENBRkg7QUFHWEMsV0FBTyxFQUFFO0FBSEUsR0FMSztBQVVwQkMsWUFBVSxFQUFFO0FBQ1JDLFNBQUssRUFBRyxDQURBO0FBRVJDLGdCQUFZLEVBQUcsR0FGUDtBQUdSQyxTQUFLLEVBQUUsRUFIQztBQUlSQyxZQUFRLEVBQUU7QUFDUkMsT0FBQyxFQUFFLENBREs7QUFDRkMsT0FBQyxFQUFFO0FBREQsS0FKRjtBQU9SQyxVQUFNLEVBQUU7QUFDSkMsV0FBSyxFQUFFO0FBREgsS0FQQTtBQVVSQyxTQUFLLEVBQUU7QUFWQyxHQVZRO0FBc0JwQkYsUUFBTSxFQUFFO0FBQ05HLFFBQUksRUFBRTtBQURBO0FBdEJZLENBQVgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZW1wbGF0ZS1wcm9qZXQtZXhhbWVuLy4vc3JjL3RzL3NldHRpbmdzLnRzPzc0YWEiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IHNldHRpbmdzID0ge1xuICAgIGNhbnZhczoge1xuICAgICAgICBjb2x1bW5zIDogMTAsXG4gICAgICAgIHJvd3MgOiAyMCxcbiAgICB9LFxuICAgIGFuaW1hdGlvblRpbWU6IHtcbiAgICAgICAgc3RhcnQ6IDAsXG4gICAgICAgIHRpbWVJbnRlcnZhbDogMCxcbiAgICAgICAgbWF4VGltZTogMTAwMCxcbiAgICB9LFxuICAgIHRldHJvbWlub3M6IHtcbiAgICAgICAgc3BlZWQgOiA1LFxuICAgICAgICBhY2NlbGVyYXRpb24gOiAxLjUsXG4gICAgICAgIHdpZHRoOiAyMCxcbiAgICAgICAgcG9zaXRpb246IHtcbiAgICAgICAgICB4OiAzLCB5OiAwXG4gICAgICAgIH0sXG4gICAgICAgIHNxdWFyZToge1xuICAgICAgICAgICAgY29sb3I6ICdoc2woNDUsIDYwJSwgNzUlKScsXG4gICAgICAgIH0sXG4gICAgICAgIGxldmVsOiAxLFxuICAgIH0sXG4gICAgc3F1YXJlOiB7XG4gICAgICBzaXplOiAyMCxcbiAgICB9XG59Il0sIm5hbWVzIjpbImV4cG9ydHMiLCJjYW52YXMiLCJjb2x1bW5zIiwicm93cyIsImFuaW1hdGlvblRpbWUiLCJzdGFydCIsInRpbWVJbnRlcnZhbCIsIm1heFRpbWUiLCJ0ZXRyb21pbm9zIiwic3BlZWQiLCJhY2NlbGVyYXRpb24iLCJ3aWR0aCIsInBvc2l0aW9uIiwieCIsInkiLCJzcXVhcmUiLCJjb2xvciIsImxldmVsIiwic2l6ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/ts/settings.ts\n");

/***/ }),

/***/ "./src/ts/tetrominoColors.ts":
/*!***********************************!*\
  !*** ./src/ts/tetrominoColors.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nexports.__esModule = true;\nvar colors = ['red', 'blue', 'yellow', 'green', 'grey', 'orange', 'purple'];\nexports[\"default\"] = colors;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvdGV0cm9taW5vQ29sb3JzLnRzLmpzIiwibWFwcGluZ3MiOiI7OztBQUFBLElBQU1BLE1BQU0sR0FBRyxDQUNYLEtBRFcsRUFFWCxNQUZXLEVBR1gsUUFIVyxFQUlYLE9BSlcsRUFLWCxNQUxXLEVBTVgsUUFOVyxFQU9YLFFBUFcsQ0FBZjtBQVVBQyxrQkFBQUEsR0FBZUQsTUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL3RlbXBsYXRlLXByb2pldC1leGFtZW4vLi9zcmMvdHMvdGV0cm9taW5vQ29sb3JzLnRzP2VjMTEiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgY29sb3JzID0gW1xuICAgICdyZWQnLFxuICAgICdibHVlJyxcbiAgICAneWVsbG93JyxcbiAgICAnZ3JlZW4nLFxuICAgICdncmV5JyxcbiAgICAnb3JhbmdlJyxcbiAgICAncHVycGxlJyxcbl1cblxuZXhwb3J0IGRlZmF1bHQgY29sb3JzIl0sIm5hbWVzIjpbImNvbG9ycyIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/ts/tetrominoColors.ts\n");

/***/ }),

/***/ "./src/ts/tetrominoShapes.ts":
/*!***********************************!*\
  !*** ./src/ts/tetrominoShapes.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nexports.__esModule = true;\nvar tetrominoShapes = [[[1, 0, 0], [1, 1, 1]], [[1, 1, 1], [0, 0, 1]], [[1, 1, 0], [0, 1, 1]], [[0, 1, 1], [1, 1, 0]], [[1, 1, 1, 1]], [[1, 1], [1, 1]], [[0, 1, 0], [1, 1, 1]]];\nexports[\"default\"] = tetrominoShapes;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvdGV0cm9taW5vU2hhcGVzLnRzLmpzIiwibWFwcGluZ3MiOiI7OztBQUFBLElBQU1BLGVBQWUsR0FBRyxDQUNwQixDQUNJLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBREosRUFFSSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUZKLENBRG9CLEVBT3BCLENBQ0ksQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FESixFQUVJLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRkosQ0FQb0IsRUFhcEIsQ0FDSSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQURKLEVBRUksQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FGSixDQWJvQixFQW1CcEIsQ0FDSSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQURKLEVBRUksQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FGSixDQW5Cb0IsRUErQnBCLENBQ0ksQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFWLENBREosQ0EvQm9CLEVBbUNwQixDQUNJLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FESixFQUVJLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FGSixDQW5Db0IsRUF5Q3BCLENBQ0ksQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FESixFQUVJLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRkosQ0F6Q29CLENBQXhCO0FBbURBQyxrQkFBQUEsR0FBZUQsZUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL3RlbXBsYXRlLXByb2pldC1leGFtZW4vLi9zcmMvdHMvdGV0cm9taW5vU2hhcGVzLnRzPzUxYjkiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgdGV0cm9taW5vU2hhcGVzID0gW1xuICAgIFtcbiAgICAgICAgWzEsIDAsIDBdLFxuICAgICAgICBbMSwgMSwgMV0sXG4gICAgICAgIC8qWzAsIDAsIDBdLCovXG4gICAgXSxcblxuICAgIFtcbiAgICAgICAgWzEsIDEsIDFdLFxuICAgICAgICBbMCwgMCwgMV0sXG4gICAgICAgIC8qWzAsIDAsIDBdLCovXG4gICAgXSxcblxuICAgIFtcbiAgICAgICAgWzEsIDEsIDBdLFxuICAgICAgICBbMCwgMSwgMV0sXG4gICAgICAgIC8qWzAsIDAsIDBdLCovXG4gICAgXSxcblxuICAgIFtcbiAgICAgICAgWzAsIDEsIDFdLFxuICAgICAgICBbMSwgMSwgMF0sXG4gICAgICAgIC8qWzAsIDAsIDBdLCovXG4gICAgXSxcblxuICAgIC8qW1xuICAgICAgICBbMSwgMCwgMF0sXG4gICAgICAgIFsxLCAwLCAwXSxcbiAgICAgICAgWzEsIDAsIDBdLFxuICAgICAgICBbMSwgMCwgMF0sXG4gICAgXSwqL1xuICAgIFtcbiAgICAgICAgWzEsIDEsIDEsIDFdXG4gICAgXSxcblxuICAgIFtcbiAgICAgICAgWzEsIDEsXSxcbiAgICAgICAgWzEsIDEsXSxcbiAgICAgICAgLypbMCwgMCwgMF0sKi9cbiAgICBdLFxuXG4gICAgW1xuICAgICAgICBbMCwgMSwgMF0sXG4gICAgICAgIFsxLCAxLCAxXSxcbiAgICAgICAgLypbMCwgMCwgMF0sKi9cbiAgICBdLFxuXG5dXG5cblxuXG5leHBvcnQgZGVmYXVsdCB0ZXRyb21pbm9TaGFwZXNcbiJdLCJuYW1lcyI6WyJ0ZXRyb21pbm9TaGFwZXMiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/ts/tetrominoShapes.ts\n");

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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