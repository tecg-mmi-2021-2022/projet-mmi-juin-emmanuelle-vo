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

eval("\n\nexports.__esModule = true;\nexports.Animation = void 0;\n\nvar Animation = function () {\n  function Animation(canvas) {\n    this.canvas = canvas;\n    this.animate();\n    this.delta = 10;\n    this.oldTime = 0;\n  }\n\n  Animation.prototype.animate = function () {\n    var _this = this;\n\n    this.canvas.ctx.clearRect(0, 0, this.canvas.ctx.canvas.width, this.canvas.ctx.canvas.height);\n    this.canvas.animate();\n    var d = new Date();\n\n    if (this.oldTime % 1000) {\n      this.oldTime = d.getMilliseconds();\n    }\n\n    if (d.getMilliseconds() - this.oldTime >= this.delta) {\n      this.oldTime = d.getMilliseconds();\n    }\n\n    var requestID = requestAnimationFrame(function () {\n      _this.animate();\n    });\n  };\n\n  return Animation;\n}();\n\nexports.Animation = Animation;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvQW5pbWF0aW9uLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBR0E7QUFNSSxxQkFBWUEsTUFBWixFQUEwQjtBQUN0QixTQUFLQSxNQUFMLEdBQWNBLE1BQWQ7QUFDQSxTQUFLQyxPQUFMO0FBQ0EsU0FBS0MsS0FBTCxHQUFhLEVBQWI7QUFDQSxTQUFLQyxPQUFMLEdBQWUsQ0FBZjtBQUNIOztBQUVEQztBQUFBOztBQUNJLFNBQUtKLE1BQUwsQ0FBWUssR0FBWixDQUFnQkMsU0FBaEIsQ0FBMEIsQ0FBMUIsRUFBNkIsQ0FBN0IsRUFBZ0MsS0FBS04sTUFBTCxDQUFZSyxHQUFaLENBQWdCTCxNQUFoQixDQUF1Qk8sS0FBdkQsRUFBOEQsS0FBS1AsTUFBTCxDQUFZSyxHQUFaLENBQWdCTCxNQUFoQixDQUF1QlEsTUFBckY7QUFDQSxTQUFLUixNQUFMLENBQVlDLE9BQVo7QUFFQSxRQUFJUSxDQUFDLEdBQUcsSUFBSUMsSUFBSixFQUFSOztBQUNBLFFBQUksS0FBS1AsT0FBTCxHQUFlLElBQW5CLEVBQXlCO0FBQ3JCLFdBQUtBLE9BQUwsR0FBZU0sQ0FBQyxDQUFDRSxlQUFGLEVBQWY7QUFFSDs7QUFDRCxRQUFJRixDQUFDLENBQUNFLGVBQUYsS0FBc0IsS0FBS1IsT0FBM0IsSUFBc0MsS0FBS0QsS0FBL0MsRUFBc0Q7QUFDbEQsV0FBS0MsT0FBTCxHQUFlTSxDQUFDLENBQUNFLGVBQUYsRUFBZjtBQUNIOztBQUVELFFBQUlDLFNBQVMsR0FBR0MscUJBQXFCLENBQUM7QUFDbENDLFdBQUksQ0FBQ2IsT0FBTDtBQUNILEtBRm9DLENBQXJDO0FBR0gsR0FoQkQ7O0FBaUJKO0FBQUMsQ0E5QkQ7O0FBQWFjLGlCQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RlbXBsYXRlLXByb2pldC1leGFtZW4vLi9zcmMvdHMvQW5pbWF0aW9uLnRzPzkxYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDYW52YXN9IGZyb20gXCIuL0NhbnZhc1wiO1xuaW1wb3J0IHtzZXR0aW5nc30gZnJvbSBcIi4vc2V0dGluZ3NcIjtcblxuZXhwb3J0IGNsYXNzIEFuaW1hdGlvbiB7XG4gICAgcHJpdmF0ZSBjYW52YXM6IENhbnZhc1xuICAgIHByaXZhdGUgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkRcbiAgICBwcml2YXRlIGRlbHRhOiBudW1iZXI7XG4gICAgcHJpdmF0ZSBvbGRUaW1lOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihjYW52YXM6IENhbnZhcykge1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhc1xuICAgICAgICB0aGlzLmFuaW1hdGUoKVxuICAgICAgICB0aGlzLmRlbHRhID0gMTA7XG4gICAgICAgIHRoaXMub2xkVGltZSA9IDA7XG4gICAgfVxuXG4gICAgYW5pbWF0ZSgpIHtcbiAgICAgICAgdGhpcy5jYW52YXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy5jdHguY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5jdHguY2FudmFzLmhlaWdodClcbiAgICAgICAgdGhpcy5jYW52YXMuYW5pbWF0ZSgpXG5cbiAgICAgICAgbGV0IGQgPSBuZXcgRGF0ZSgpXG4gICAgICAgIGlmICh0aGlzLm9sZFRpbWUgJSAxMDAwKSB7XG4gICAgICAgICAgICB0aGlzLm9sZFRpbWUgPSBkLmdldE1pbGxpc2Vjb25kcygpO1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLm9sZFRpbWUpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGQuZ2V0TWlsbGlzZWNvbmRzKCkgLSB0aGlzLm9sZFRpbWUgPj0gdGhpcy5kZWx0YSkge1xuICAgICAgICAgICAgdGhpcy5vbGRUaW1lID0gZC5nZXRNaWxsaXNlY29uZHMoKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgbGV0IHJlcXVlc3RJRCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmFuaW1hdGUoKVxuICAgICAgICB9KVxuICAgIH1cbn0iXSwibmFtZXMiOlsiY2FudmFzIiwiYW5pbWF0ZSIsImRlbHRhIiwib2xkVGltZSIsIkFuaW1hdGlvbiIsImN0eCIsImNsZWFyUmVjdCIsIndpZHRoIiwiaGVpZ2h0IiwiZCIsIkRhdGUiLCJnZXRNaWxsaXNlY29uZHMiLCJyZXF1ZXN0SUQiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJfdGhpcyIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/ts/Animation.ts\n");

/***/ }),

/***/ "./src/ts/Canvas.ts":
/*!**************************!*\
  !*** ./src/ts/Canvas.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nexports.__esModule = true;\nexports.Canvas = void 0;\n\nvar settings_1 = __webpack_require__(/*! ./settings */ \"./src/ts/settings.ts\");\n\nvar Board_1 = __webpack_require__(/*! ./Drawables/Board */ \"./src/ts/Drawables/Board.ts\");\n\nvar Canvas = function () {\n  function Canvas() {\n    this.shapes = [];\n    this.canvasElt = document.getElementById('my-canvas');\n    this.ctx = this.canvasElt.getContext('2d');\n    this.ctx.canvas.width = settings_1.settings.canvas.columns * settings_1.settings.square.size;\n    this.ctx.canvas.height = settings_1.settings.canvas.rows * settings_1.settings.square.size;\n    this.ctx.scale(settings_1.settings.square.size, settings_1.settings.square.size);\n    this.board = new Board_1.Board(this.ctx);\n    console.table(this.board.getEmptyBoard());\n    this.addEventListeners();\n    this.board.tetromino;\n    this.draw();\n  }\n\n  Canvas.prototype.addEventListeners = function () {\n    var _this = this;\n\n    document.querySelector('.tetris__play').addEventListener('click', function (e) {\n      _this.board.reset();\n    });\n  };\n\n  Canvas.prototype.draw = function () {\n    this.board.tetromino.draw();\n  };\n\n  Canvas.prototype.animate = function () {\n    this.board.tetromino.animate();\n  };\n\n  return Canvas;\n}();\n\nexports.Canvas = Canvas;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvQ2FudmFzLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBRUE7O0FBT0E7O0FBSUE7QUFNSTtBQUhPLGtCQUFzQixFQUF0QjtBQUlILFNBQUtBLFNBQUwsR0FBaUJDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixXQUF4QixDQUFqQjtBQUNBLFNBQUtDLEdBQUwsR0FBVyxLQUFLSCxTQUFMLENBQWVJLFVBQWYsQ0FBMEIsSUFBMUIsQ0FBWDtBQUNBLFNBQUtELEdBQUwsQ0FBU0UsTUFBVCxDQUFnQkMsS0FBaEIsR0FBd0JDLG9CQUFTRixNQUFULENBQWdCRyxPQUFoQixHQUEwQkQsb0JBQVNFLE1BQVQsQ0FBZ0JDLElBQWxFO0FBQ0EsU0FBS1AsR0FBTCxDQUFTRSxNQUFULENBQWdCTSxNQUFoQixHQUF5Qkosb0JBQVNGLE1BQVQsQ0FBZ0JPLElBQWhCLEdBQXVCTCxvQkFBU0UsTUFBVCxDQUFnQkMsSUFBaEU7QUFDQSxTQUFLUCxHQUFMLENBQVNVLEtBQVQsQ0FBZU4sb0JBQVNFLE1BQVQsQ0FBZ0JDLElBQS9CLEVBQXFDSCxvQkFBU0UsTUFBVCxDQUFnQkMsSUFBckQ7QUFDQSxTQUFLSSxLQUFMLEdBQWEsSUFBSUMsYUFBSixDQUFVLEtBQUtaLEdBQWYsQ0FBYjtBQUNBYSxXQUFPLENBQUNDLEtBQVIsQ0FBYyxLQUFLSCxLQUFMLENBQVdJLGFBQVgsRUFBZDtBQUVBLFNBQUtDLGlCQUFMO0FBRUEsU0FBS0wsS0FBTCxDQUFXTSxTQUFYO0FBRUEsU0FBS0MsSUFBTDtBQUVIOztBQUVEQztBQUFBOztBQUNJckIsWUFBUSxDQUFDc0IsYUFBVCxDQUF1QixlQUF2QixFQUF3Q0MsZ0JBQXhDLENBQXlELE9BQXpELEVBQWtFLFVBQUNDLENBQUQsRUFBRTtBQUNoRUMsV0FBSSxDQUFDWixLQUFMLENBQVdhLEtBQVg7QUFDSCxLQUZEO0FBR0gsR0FKRDs7QUFNQUw7QUFDSSxTQUFLUixLQUFMLENBQVdNLFNBQVgsQ0FBcUJDLElBQXJCO0FBQ0gsR0FGRDs7QUFJQUM7QUFDSSxTQUFLUixLQUFMLENBQVdNLFNBQVgsQ0FBcUJRLE9BQXJCO0FBQ0gsR0FGRDs7QUFLSjtBQUFDLENBdENEOztBQUFhQyxjQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RlbXBsYXRlLXByb2pldC1leGFtZW4vLi9zcmMvdHMvQ2FudmFzLnRzPzg1YTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJRHJhd2FibGV9IGZyb20gXCIuL0ludGVyZmFjZXMvSURyYXdhYmxlXCI7XG5pbXBvcnQge1RldHJvbWlub1NxdWFyZX0gZnJvbSBcIi4vRHJhd2FibGVzL1RldHJvbWlub3MvVGV0cm9taW5vU3F1YXJlXCI7XG5pbXBvcnQge3NldHRpbmdzfSBmcm9tIFwiLi9zZXR0aW5nc1wiO1xuaW1wb3J0IHtUZXRyb21pbm9JfSBmcm9tIFwiLi9EcmF3YWJsZXMvVGV0cm9taW5vcy9UZXRyb21pbm9JXCI7XG5pbXBvcnQge1RldHJvbWlub0x9IGZyb20gXCIuL0RyYXdhYmxlcy9UZXRyb21pbm9zL1RldHJvbWlub0xcIjtcbmltcG9ydCB7VGV0cm9taW5vSW52ZXJzZUx9IGZyb20gXCIuL0RyYXdhYmxlcy9UZXRyb21pbm9zL1RldHJvbWlub0ludmVyc2VMXCI7XG5pbXBvcnQge1RldHJvbWlub1R9IGZyb20gXCIuL0RyYXdhYmxlcy9UZXRyb21pbm9zL1RldHJvbWlub1RcIjtcbmltcG9ydCB7VGV0cm9taW5vWn0gZnJvbSBcIi4vRHJhd2FibGVzL1RldHJvbWlub3MvVGV0cm9taW5vWlwiO1xuaW1wb3J0IHtUZXRyb21pbm9JbnZlcnNlWn0gZnJvbSBcIi4vRHJhd2FibGVzL1RldHJvbWlub3MvVGV0cm9taW5vSW52ZXJzZVpcIjtcbmltcG9ydCB7Qm9hcmR9IGZyb20gXCIuL0RyYXdhYmxlcy9Cb2FyZFwiO1xuaW1wb3J0IHRldHJvbWlub1NoYXBlcyBmcm9tIFwiLi90ZXRyb21pbm9TaGFwZXNcIjtcbmltcG9ydCB7VGV0cm9taW5vfSBmcm9tIFwiLi9EcmF3YWJsZXMvVGV0cm9taW5vXCI7XG5cbmV4cG9ydCBjbGFzcyBDYW52YXMge1xuICAgIHByaXZhdGUgY2FudmFzRWx0OiBIVE1MQ2FudmFzRWxlbWVudFxuICAgIHB1YmxpYyBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRFxuICAgIHB1YmxpYyBzaGFwZXM6IElEcmF3YWJsZVtdID0gW107XG4gICAgcHVibGljIGJvYXJkOiBCb2FyZDtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmNhbnZhc0VsdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdteS1jYW52YXMnKSBhcyBIVE1MQ2FudmFzRWxlbWVudFxuICAgICAgICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzRWx0LmdldENvbnRleHQoJzJkJylcbiAgICAgICAgdGhpcy5jdHguY2FudmFzLndpZHRoID0gc2V0dGluZ3MuY2FudmFzLmNvbHVtbnMgKiBzZXR0aW5ncy5zcXVhcmUuc2l6ZVxuICAgICAgICB0aGlzLmN0eC5jYW52YXMuaGVpZ2h0ID0gc2V0dGluZ3MuY2FudmFzLnJvd3MgKiBzZXR0aW5ncy5zcXVhcmUuc2l6ZVxuICAgICAgICB0aGlzLmN0eC5zY2FsZShzZXR0aW5ncy5zcXVhcmUuc2l6ZSwgc2V0dGluZ3Muc3F1YXJlLnNpemUpXG4gICAgICAgIHRoaXMuYm9hcmQgPSBuZXcgQm9hcmQodGhpcy5jdHgpXG4gICAgICAgIGNvbnNvbGUudGFibGUodGhpcy5ib2FyZC5nZXRFbXB0eUJvYXJkKCkpXG5cbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVycygpO1xuXG4gICAgICAgIHRoaXMuYm9hcmQudGV0cm9taW5vXG5cbiAgICAgICAgdGhpcy5kcmF3KClcblxuICAgIH1cblxuICAgIGFkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGV0cmlzX19wbGF5JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5ib2FyZC5yZXNldCgpXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgZHJhdygpIHtcbiAgICAgICAgdGhpcy5ib2FyZC50ZXRyb21pbm8uZHJhdygpXG4gICAgfVxuXG4gICAgYW5pbWF0ZSgpIHtcbiAgICAgICAgdGhpcy5ib2FyZC50ZXRyb21pbm8uYW5pbWF0ZSgpXG4gICAgfVxuXG5cbn0iXSwibmFtZXMiOlsiY2FudmFzRWx0IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImN0eCIsImdldENvbnRleHQiLCJjYW52YXMiLCJ3aWR0aCIsInNldHRpbmdzXzEiLCJjb2x1bW5zIiwic3F1YXJlIiwic2l6ZSIsImhlaWdodCIsInJvd3MiLCJzY2FsZSIsImJvYXJkIiwiQm9hcmRfMSIsImNvbnNvbGUiLCJ0YWJsZSIsImdldEVtcHR5Qm9hcmQiLCJhZGRFdmVudExpc3RlbmVycyIsInRldHJvbWlubyIsImRyYXciLCJDYW52YXMiLCJxdWVyeVNlbGVjdG9yIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJfdGhpcyIsInJlc2V0IiwiYW5pbWF0ZSIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/ts/Canvas.ts\n");

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

eval("\n\nvar __extends = this && this.__extends || function () {\n  var _extendStatics = function extendStatics(d, b) {\n    _extendStatics = Object.setPrototypeOf || {\n      __proto__: []\n    } instanceof Array && function (d, b) {\n      d.__proto__ = b;\n    } || function (d, b) {\n      for (var p in b) {\n        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];\n      }\n    };\n\n    return _extendStatics(d, b);\n  };\n\n  return function (d, b) {\n    if (typeof b !== \"function\" && b !== null) throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n\n    _extendStatics(d, b);\n\n    function __() {\n      this.constructor = d;\n    }\n\n    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n  };\n}();\n\nexports.__esModule = true;\nexports.Tetromino = void 0;\n\nvar Shape_1 = __webpack_require__(/*! ./Shape */ \"./src/ts/Drawables/Shape.ts\");\n\nvar tetrominoShapes_1 = __webpack_require__(/*! ../tetrominoShapes */ \"./src/ts/tetrominoShapes.ts\");\n\nvar tetrominoColors_1 = __webpack_require__(/*! ../tetrominoColors */ \"./src/ts/tetrominoColors.ts\");\n\nvar settings_1 = __webpack_require__(/*! ../settings */ \"./src/ts/settings.ts\");\n\nvar Tetromino = function (_super) {\n  __extends(Tetromino, _super);\n\n  function Tetromino(ctx) {\n    var _this = _super.call(this, ctx) || this;\n\n    _this.id = Math.floor(Math.random() * tetrominoShapes_1[\"default\"].length);\n    _this.shape = tetrominoShapes_1[\"default\"][_this.id];\n    _this.color = tetrominoColors_1[\"default\"][_this.id];\n    _this.position = {\n      x: settings_1.settings.tetrominos.position.x,\n      y: settings_1.settings.tetrominos.position.y\n    };\n    return _this;\n  }\n\n  Tetromino.prototype.draw = function () {\n    var _this = this;\n\n    this.ctx.beginPath();\n    this.ctx.fillStyle = this.color;\n    this.shape.forEach(function (row, y) {\n      row.forEach(function (value, x) {\n        if (value > 0) {\n          _this.ctx.fillRect(_this.position.x + x, _this.position.y + y, 1, 1);\n        }\n      });\n    });\n    this.ctx.closePath();\n  };\n\n  Tetromino.prototype.animate = function () {\n    this.position.y += 1;\n    this.draw();\n    this.checkCollision();\n  };\n\n  Tetromino.prototype.moveLeft = function () {\n    this.position.x -= 1;\n    this.draw();\n  };\n\n  Tetromino.prototype.moveRight = function () {\n    this.position.x += 1;\n    this.draw();\n  };\n\n  Tetromino.prototype.moveDown = function () {\n    this.position.y += 1;\n    this.draw();\n  };\n\n  Tetromino.prototype.rotate = function () {\n    this.draw();\n  };\n\n  Tetromino.prototype.checkCollision = function () {};\n\n  return Tetromino;\n}(Shape_1.Shape);\n\nexports.Tetromino = Tetromino;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvRHJhd2FibGVzL1RldHJvbWluby50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTtBQUErQkE7O0FBSzNCLHFCQUFZQyxHQUFaLEVBQXlDO0FBQXpDLGdCQUNJQyxrQkFBTUQsR0FBTixLQUFVLElBRGQ7O0FBRUlFLFNBQUksQ0FBQ0MsRUFBTCxHQUFVQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLEtBQWdCQyw2QkFBZ0JDLE1BQTNDLENBQVY7QUFDQU4sU0FBSSxDQUFDTyxLQUFMLEdBQWFGLDZCQUFnQkwsS0FBSSxDQUFDQyxFQUFyQixDQUFiO0FBQ0FELFNBQUksQ0FBQ1EsS0FBTCxHQUFhQyw2QkFBZ0JULEtBQUksQ0FBQ0MsRUFBckIsQ0FBYjtBQUVBRCxTQUFJLENBQUNVLFFBQUwsR0FBZ0I7QUFBQ0MsT0FBQyxFQUFFQyxvQkFBU0MsVUFBVCxDQUFvQkgsUUFBcEIsQ0FBNkJDLENBQWpDO0FBQW9DRyxPQUFDLEVBQUVGLG9CQUFTQyxVQUFULENBQW9CSCxRQUFwQixDQUE2Qkk7QUFBcEUsS0FBaEI7O0FBQ0g7O0FBRVFDLDZCQUFUO0FBQUE7O0FBQ0ksU0FBS2pCLEdBQUwsQ0FBU2tCLFNBQVQ7QUFDQSxTQUFLbEIsR0FBTCxDQUFTbUIsU0FBVCxHQUFxQixLQUFLVCxLQUExQjtBQUVBLFNBQUtELEtBQUwsQ0FBV1csT0FBWCxDQUFtQixVQUFDQyxHQUFELEVBQU1MLENBQU4sRUFBTztBQUN0QkssU0FBRyxDQUFDRCxPQUFKLENBQVksVUFBQ0UsS0FBRCxFQUFRVCxDQUFSLEVBQVM7QUFDakIsWUFBSVMsS0FBSyxHQUFHLENBQVosRUFBZTtBQUNYcEIsZUFBSSxDQUFDRixHQUFMLENBQVN1QixRQUFULENBQWtCckIsS0FBSSxDQUFDVSxRQUFMLENBQWNDLENBQWQsR0FBa0JBLENBQXBDLEVBQXVDWCxLQUFJLENBQUNVLFFBQUwsQ0FBY0ksQ0FBZCxHQUFrQkEsQ0FBekQsRUFBNEQsQ0FBNUQsRUFBK0QsQ0FBL0Q7QUFDSDtBQUNKLE9BSkQ7QUFLSCxLQU5EO0FBT0EsU0FBS2hCLEdBQUwsQ0FBU3dCLFNBQVQ7QUFDSCxHQVpROztBQWNBUCxnQ0FBVDtBQUNJLFNBQUtMLFFBQUwsQ0FBY0ksQ0FBZCxJQUFtQixDQUFuQjtBQUVBLFNBQUtTLElBQUw7QUFDQSxTQUFLQyxjQUFMO0FBQ0gsR0FMUTs7QUFPQVQsaUNBQVQ7QUFDSSxTQUFLTCxRQUFMLENBQWNDLENBQWQsSUFBbUIsQ0FBbkI7QUFDQSxTQUFLWSxJQUFMO0FBQ0gsR0FIUTs7QUFJQVIsa0NBQVQ7QUFDSSxTQUFLTCxRQUFMLENBQWNDLENBQWQsSUFBbUIsQ0FBbkI7QUFDQSxTQUFLWSxJQUFMO0FBQ0gsR0FIUTs7QUFJQVIsaUNBQVQ7QUFDSSxTQUFLTCxRQUFMLENBQWNJLENBQWQsSUFBbUIsQ0FBbkI7QUFDQSxTQUFLUyxJQUFMO0FBQ0gsR0FIUTs7QUFJQVIsK0JBQVQ7QUFJSSxTQUFLUSxJQUFMO0FBQ0gsR0FMUTs7QUFPQVIsdUNBQVQsYUFHQyxDQUhROztBQUliO0FBQUMsQ0ExREQsQ0FBK0JVLGFBQS9COztBQUFhQyxpQkFBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZW1wbGF0ZS1wcm9qZXQtZXhhbWVuLy4vc3JjL3RzL0RyYXdhYmxlcy9UZXRyb21pbm8udHM/MDU2YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0lEcmF3YWJsZX0gZnJvbSBcIi4uL0ludGVyZmFjZXMvSURyYXdhYmxlXCI7XG5pbXBvcnQge1NoYXBlfSBmcm9tIFwiLi9TaGFwZVwiO1xuaW1wb3J0IHRldHJvbWlub1NoYXBlcyBmcm9tIFwiLi4vdGV0cm9taW5vU2hhcGVzXCI7XG5pbXBvcnQgdGV0cm9taW5vQ29sb3JzIGZyb20gXCIuLi90ZXRyb21pbm9Db2xvcnNcIjtcbmltcG9ydCB7c2V0dGluZ3N9IGZyb20gXCIuLi9zZXR0aW5nc1wiO1xuXG5leHBvcnQgY2xhc3MgVGV0cm9taW5vIGV4dGVuZHMgU2hhcGUgaW1wbGVtZW50cyBJRHJhd2FibGUge1xuICAgIHByaXZhdGUgc2hhcGU6IG51bWJlcltdW107XG5cblxuXG4gICAgY29uc3RydWN0b3IoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpIHtcbiAgICAgICAgc3VwZXIoY3R4KTtcbiAgICAgICAgdGhpcy5pZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRldHJvbWlub1NoYXBlcy5sZW5ndGgpXG4gICAgICAgIHRoaXMuc2hhcGUgPSB0ZXRyb21pbm9TaGFwZXNbdGhpcy5pZF1cbiAgICAgICAgdGhpcy5jb2xvciA9IHRldHJvbWlub0NvbG9yc1t0aGlzLmlkXVxuXG4gICAgICAgIHRoaXMucG9zaXRpb24gPSB7eDogc2V0dGluZ3MudGV0cm9taW5vcy5wb3NpdGlvbi54LCB5OiBzZXR0aW5ncy50ZXRyb21pbm9zLnBvc2l0aW9uLnl9XG4gICAgfVxuXG4gICAgb3ZlcnJpZGUgZHJhdygpe1xuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKVxuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSB0aGlzLmNvbG9yXG4gICAgICAgIC8vIHNpID4gMCA6IGRlc3NpbmVyIGxlIGNhcnLDqVxuICAgICAgICB0aGlzLnNoYXBlLmZvckVhY2goKHJvdywgeSkgPT4ge1xuICAgICAgICAgICAgcm93LmZvckVhY2goKHZhbHVlLCB4KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlID4gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsUmVjdCh0aGlzLnBvc2l0aW9uLnggKyB4LCB0aGlzLnBvc2l0aW9uLnkgKyB5LCAxLCAxKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpXG4gICAgfVxuXG4gICAgb3ZlcnJpZGUgYW5pbWF0ZSgpe1xuICAgICAgICB0aGlzLnBvc2l0aW9uLnkgKz0gMVxuXG4gICAgICAgIHRoaXMuZHJhdygpXG4gICAgICAgIHRoaXMuY2hlY2tDb2xsaXNpb24oKVxuICAgIH1cblxuICAgIG92ZXJyaWRlIG1vdmVMZWZ0KCkge1xuICAgICAgICB0aGlzLnBvc2l0aW9uLnggLT0gMVxuICAgICAgICB0aGlzLmRyYXcoKVxuICAgIH1cbiAgICBvdmVycmlkZSBtb3ZlUmlnaHQoKSB7XG4gICAgICAgIHRoaXMucG9zaXRpb24ueCArPSAxXG4gICAgICAgIHRoaXMuZHJhdygpXG4gICAgfVxuICAgIG92ZXJyaWRlIG1vdmVEb3duKCkge1xuICAgICAgICB0aGlzLnBvc2l0aW9uLnkgKz0gMVxuICAgICAgICB0aGlzLmRyYXcoKVxuICAgIH1cbiAgICBvdmVycmlkZSByb3RhdGUoKSB7XG4gICAgICAgIC8vVE9ET1xuXG5cbiAgICAgICAgdGhpcy5kcmF3KClcbiAgICB9XG5cbiAgICBvdmVycmlkZSBjaGVja0NvbGxpc2lvbigpe1xuXG5cbiAgICB9XG59XG5cbi8qXG5pc0luc2lkZVdhbGxzKHgsIHkpIHtcbiAgcmV0dXJuICAoXG4gICAgeCA+PSAwICYmICAgLy8gTGVmdCB3YWxsXG4gICAgeCA8IENPTFMgJiYgLy8gUmlnaHQgd2FsbFxuICAgIHkgPCBST1dTIC8vIEZsb29yXG4gIClcbn1cbnZhbGlkKHApIHtcbiAgcmV0dXJuIHAuc2hhcGUuZXZlcnkoKHJvdywgZHkpID0+IHtcbiAgICByZXR1cm4gcm93LmV2ZXJ5KCh2YWx1ZSwgZHgpID0+XG4gICAgICB2YWx1ZSA9PT0gMCB8fFxuICAgICAgdGhpcy5pc0luc2lkZVdhbGxzKHAueCArIGR4LCBwLnkgKyBkeSlcbiAgICApO1xuICB9KTtcbn1cbiAqLyJdLCJuYW1lcyI6WyJfX2V4dGVuZHMiLCJjdHgiLCJfc3VwZXIiLCJfdGhpcyIsImlkIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwidGV0cm9taW5vU2hhcGVzXzEiLCJsZW5ndGgiLCJzaGFwZSIsImNvbG9yIiwidGV0cm9taW5vQ29sb3JzXzEiLCJwb3NpdGlvbiIsIngiLCJzZXR0aW5nc18xIiwidGV0cm9taW5vcyIsInkiLCJUZXRyb21pbm8iLCJiZWdpblBhdGgiLCJmaWxsU3R5bGUiLCJmb3JFYWNoIiwicm93IiwidmFsdWUiLCJmaWxsUmVjdCIsImNsb3NlUGF0aCIsImRyYXciLCJjaGVja0NvbGxpc2lvbiIsIlNoYXBlXzEiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/ts/Drawables/Tetromino.ts\n");

/***/ }),

/***/ "./src/ts/GameController.ts":
/*!**********************************!*\
  !*** ./src/ts/GameController.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nexports.__esModule = true;\nexports.GameController = void 0;\n\nvar GameController = function () {\n  function GameController(animation, tetromino) {\n    this.isStart = false;\n    this.animation = animation;\n    this.playText = document.querySelector('.tetris__play');\n    this.tetromino = tetromino;\n    this.addEventListeners();\n  }\n\n  GameController.prototype.addEventListeners = function () {\n    var _this = this;\n\n    window.addEventListener('keydown', function (e) {\n      if (e.key === 'ArrowRight') {\n        _this.tetromino.moveRight();\n      }\n\n      if (e.key === 'ArrowLeft') {\n        _this.tetromino.moveLeft();\n      }\n\n      if (e.key === 'ArrowDown') {\n        _this.tetromino.moveDown();\n      }\n\n      if (e.key === 'ArrowUp') {\n        _this.tetromino.rotate();\n      }\n    });\n  };\n\n  return GameController;\n}();\n\nexports.GameController = GameController;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvR2FtZUNvbnRyb2xsZXIudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFLQTtBQU1JLDBCQUFZQSxTQUFaLEVBQWtDQyxTQUFsQyxFQUFzRDtBQUNsRCxTQUFLQyxPQUFMLEdBQWUsS0FBZjtBQUNBLFNBQUtGLFNBQUwsR0FBaUJBLFNBQWpCO0FBQ0EsU0FBS0csUUFBTCxHQUFnQkMsUUFBUSxDQUFDQyxhQUFULENBQXVCLGVBQXZCLENBQWhCO0FBQ0EsU0FBS0osU0FBTCxHQUFpQkEsU0FBakI7QUFDQSxTQUFLSyxpQkFBTDtBQUNIOztBQUVEQztBQUFBOztBQUNJQyxVQUFNLENBQUNDLGdCQUFQLENBQXdCLFNBQXhCLEVBQW1DLFVBQUNDLENBQUQsRUFBaUI7QUFDaEQsVUFBSUEsQ0FBQyxDQUFDQyxHQUFGLEtBQVUsWUFBZCxFQUE0QjtBQUNwQkMsYUFBSSxDQUFDWCxTQUFMLENBQWVZLFNBQWY7QUFDUDs7QUFDRCxVQUFJSCxDQUFDLENBQUNDLEdBQUYsS0FBVSxXQUFkLEVBQTJCO0FBQ25CQyxhQUFJLENBQUNYLFNBQUwsQ0FBZWEsUUFBZjtBQUNQOztBQUNELFVBQUlKLENBQUMsQ0FBQ0MsR0FBRixLQUFVLFdBQWQsRUFBMkI7QUFDbkJDLGFBQUksQ0FBQ1gsU0FBTCxDQUFlYyxRQUFmO0FBQ1A7O0FBQ0QsVUFBSUwsQ0FBQyxDQUFDQyxHQUFGLEtBQVUsU0FBZCxFQUF5QjtBQUVqQkMsYUFBSSxDQUFDWCxTQUFMLENBQWVlLE1BQWY7QUFDUDtBQUNKLEtBZEQ7QUFlSCxHQWhCRDs7QUFvQko7QUFBQyxDQWxDRDs7QUFBYUMsc0JBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVtcGxhdGUtcHJvamV0LWV4YW1lbi8uL3NyYy90cy9HYW1lQ29udHJvbGxlci50cz9hOWE0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QW5pbWF0aW9ufSBmcm9tIFwiLi9BbmltYXRpb25cIjtcbmltcG9ydCB7VGV0cm9taW5vTH0gZnJvbSBcIi4vRHJhd2FibGVzL1RldHJvbWlub3MvVGV0cm9taW5vTFwiO1xuaW1wb3J0IHtJRHJhd2FibGV9IGZyb20gXCIuL0ludGVyZmFjZXMvSURyYXdhYmxlXCI7XG5pbXBvcnQge1RldHJvbWlub30gZnJvbSBcIi4vRHJhd2FibGVzL1RldHJvbWlub1wiO1xuXG5leHBvcnQgY2xhc3MgR2FtZUNvbnRyb2xsZXIge1xuICAgIHByaXZhdGUgaXNTdGFydDogYm9vbGVhbjtcbiAgICBwcml2YXRlIGFuaW1hdGlvbjogQW5pbWF0aW9uO1xuICAgIHByaXZhdGUgcGxheVRleHQ6IEhUTUxQYXJhZ3JhcGhFbGVtZW50O1xuICAgIHByaXZhdGUgdGV0cm9taW5vOiBUZXRyb21pbm87XG5cbiAgICBjb25zdHJ1Y3RvcihhbmltYXRpb246IEFuaW1hdGlvbiwgdGV0cm9taW5vOiBUZXRyb21pbm8pIHtcbiAgICAgICAgdGhpcy5pc1N0YXJ0ID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYW5pbWF0aW9uID0gYW5pbWF0aW9uO1xuICAgICAgICB0aGlzLnBsYXlUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRldHJpc19fcGxheScpO1xuICAgICAgICB0aGlzLnRldHJvbWlubyA9IHRldHJvbWlub1xuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKClcbiAgICB9XG5cbiAgICBhZGRFdmVudExpc3RlbmVycygpIHtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZTogS2V5Ym9hcmRFdmVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKGUua2V5ID09PSAnQXJyb3dSaWdodCcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50ZXRyb21pbm8ubW92ZVJpZ2h0KClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChlLmtleSA9PT0gJ0Fycm93TGVmdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50ZXRyb21pbm8ubW92ZUxlZnQoKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGUua2V5ID09PSAnQXJyb3dEb3duJykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRldHJvbWluby5tb3ZlRG93bigpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZS5rZXkgPT09ICdBcnJvd1VwJykge1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGV0cm9taW5vLnJvdGF0ZSgpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG5cblxufSJdLCJuYW1lcyI6WyJhbmltYXRpb24iLCJ0ZXRyb21pbm8iLCJpc1N0YXJ0IiwicGxheVRleHQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJhZGRFdmVudExpc3RlbmVycyIsIkdhbWVDb250cm9sbGVyIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJrZXkiLCJfdGhpcyIsIm1vdmVSaWdodCIsIm1vdmVMZWZ0IiwibW92ZURvd24iLCJyb3RhdGUiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/ts/GameController.ts\n");

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

eval("\n\nexports.__esModule = true;\nvar tetrominoShapes = [[[1, 0, 0], [1, 1, 1], [0, 0, 0]], [[1, 1, 1], [0, 0, 1], [0, 0, 0]], [[1, 1, 0], [0, 1, 1], [0, 0, 0]], [[0, 1, 1], [1, 1, 0], [0, 0, 0]], [[1, 0, 0], [1, 0, 0], [1, 0, 0], [1, 0, 0]], [[1, 1, 0], [1, 1, 0], [0, 0, 0]], [[0, 1, 0], [1, 1, 1], [0, 0, 0]]];\nexports[\"default\"] = tetrominoShapes;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvdGV0cm9taW5vU2hhcGVzLnRzLmpzIiwibWFwcGluZ3MiOiI7OztBQUFBLElBQU1BLGVBQWUsR0FBRyxDQUNwQixDQUNJLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBREosRUFFSSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUZKLEVBR0ksQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FISixDQURvQixFQU9wQixDQUNJLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBREosRUFFSSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUZKLEVBR0ksQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FISixDQVBvQixFQWFwQixDQUNJLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBREosRUFFSSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUZKLEVBR0ksQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FISixDQWJvQixFQW1CcEIsQ0FDSSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQURKLEVBRUksQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FGSixFQUdJLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBSEosQ0FuQm9CLEVBeUJwQixDQUNJLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBREosRUFFSSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUZKLEVBR0ksQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FISixFQUlJLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBSkosQ0F6Qm9CLEVBZ0NwQixDQUNJLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBREosRUFFSSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUZKLEVBR0ksQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FISixDQWhDb0IsRUFzQ3BCLENBQ0ksQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FESixFQUVJLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRkosRUFHSSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUhKLENBdENvQixDQUF4QjtBQWdEQUMsa0JBQUFBLEdBQWVELGVBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZW1wbGF0ZS1wcm9qZXQtZXhhbWVuLy4vc3JjL3RzL3RldHJvbWlub1NoYXBlcy50cz81MWI5Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHRldHJvbWlub1NoYXBlcyA9IFtcbiAgICBbXG4gICAgICAgIFsxLCAwLCAwXSxcbiAgICAgICAgWzEsIDEsIDFdLFxuICAgICAgICBbMCwgMCwgMF0sXG4gICAgXSxcblxuICAgIFtcbiAgICAgICAgWzEsIDEsIDFdLFxuICAgICAgICBbMCwgMCwgMV0sXG4gICAgICAgIFswLCAwLCAwXSxcbiAgICBdLFxuXG4gICAgW1xuICAgICAgICBbMSwgMSwgMF0sXG4gICAgICAgIFswLCAxLCAxXSxcbiAgICAgICAgWzAsIDAsIDBdLFxuICAgIF0sXG5cbiAgICBbXG4gICAgICAgIFswLCAxLCAxXSxcbiAgICAgICAgWzEsIDEsIDBdLFxuICAgICAgICBbMCwgMCwgMF0sXG4gICAgXSxcblxuICAgIFtcbiAgICAgICAgWzEsIDAsIDBdLFxuICAgICAgICBbMSwgMCwgMF0sXG4gICAgICAgIFsxLCAwLCAwXSxcbiAgICAgICAgWzEsIDAsIDBdLFxuICAgIF0sXG5cbiAgICBbXG4gICAgICAgIFsxLCAxLCAwXSxcbiAgICAgICAgWzEsIDEsIDBdLFxuICAgICAgICBbMCwgMCwgMF0sXG4gICAgXSxcblxuICAgIFtcbiAgICAgICAgWzAsIDEsIDBdLFxuICAgICAgICBbMSwgMSwgMV0sXG4gICAgICAgIFswLCAwLCAwXSxcbiAgICBdLFxuXG5dXG5cblxuXG5leHBvcnQgZGVmYXVsdCB0ZXRyb21pbm9TaGFwZXNcbiJdLCJuYW1lcyI6WyJ0ZXRyb21pbm9TaGFwZXMiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/ts/tetrominoShapes.ts\n");

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