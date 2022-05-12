import {IDrawable} from "../Interfaces/IDrawable";
import {Shape} from "./Shape";
import tetrominoShapes from "../tetrominoShapes";
import tetrominoColors from "../tetrominoColors";
import {settings} from "../settings";

export class Tetromino extends Shape implements IDrawable {
    private shape: number[][];



    constructor(ctx: CanvasRenderingContext2D) {
        super(ctx);
        this.id = Math.floor(Math.random() * tetrominoShapes.length)
        this.shape = tetrominoShapes[this.id]
        this.color = tetrominoColors[this.id]

        this.position = {x: settings.tetrominos.position.x, y: settings.tetrominos.position.y}
    }

    override draw(){
        this.ctx.beginPath()
        this.ctx.fillStyle = this.color
        // si > 0 : dessiner le carré
        this.shape.forEach((row, y) => {
            row.forEach((value, x) => {
                if (value > 0) {
                    this.ctx.fillRect(this.position.x + x, this.position.y + y, 1, 1)
                }
            })
        })
        this.ctx.closePath()
    }

    override animate(){
        this.position.y += 1

        this.draw()
        this.checkCollision()
    }

    override moveLeft() {
        this.position.x -= 1
        this.draw()
    }
    override moveRight() {
        this.position.x += 1
        this.draw()
    }
    override moveDown() {
        this.position.y += 1
        this.draw()
    }
    override rotate() {
        //TODO


        this.draw()
    }

    override checkCollision(){


    }
}

/*
isInsideWalls(x, y) {
  return  (
    x >= 0 &&   // Left wall
    x < COLS && // Right wall
    y < ROWS // Floor
  )
}
valid(p) {
  return p.shape.every((row, dy) => {
    return row.every((value, dx) =>
      value === 0 ||
      this.isInsideWalls(p.x + dx, p.y + dy)
    );
  });
}
 */