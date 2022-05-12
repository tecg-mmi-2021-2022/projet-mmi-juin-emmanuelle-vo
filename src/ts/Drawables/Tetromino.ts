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

    override draw() {
        this.ctx.beginPath()
        this.ctx.fillStyle = this.color
        this.shape.forEach((row, y) => {
            row.forEach((value, x) => {
                if (value > 0) {
                    this.ctx.fillRect(this.position.x + x, this.position.y + y, 1, 1)
                }
            })
        })
        this.ctx.closePath()
    }

    override animate() {
        //this.fall()

        this.draw()
        this.checkCollision()
    }

    fall() {
        if (this.position.y + this.shape.length >= settings.canvas.rows) {
            this.position.y += 0
        } else {
            this.position.y += 1
        }
    }

    override moveLeft() {
        if (this.position.x > 0) {
            this.position.x -= 1
        }
        this.draw()
    }

    override moveRight() {
        for (let i = 0; i < this.shape.length; i++) {
            if (this.position.x + this.shape[i].length < settings.canvas.columns) {
                this.position.x += 1
                return false
            }
        }
        this.draw()
    }

    override moveDown() {
        for (let i = 0; i < this.shape.length; i++) {
            if (this.position.y + this.shape.length < settings.canvas.rows) {
                this.position.y += 1
                return false
            }
        }
        this.draw()
    }

    override rotate() {
        for (let i = 0; i < this.shape.length; i++) {
            console.log(this.shape[i].length)
        }



        /*for (let y = 0; y < this.shape.length; y++) {
            for (let x = 0; x < y; ++x) {
                [this.shape[x][y], this.shape[y][x]] =
                    [this.shape[y][x], this.shape[x][y]];
            }
        }
        this.shape.forEach((row: any[]) => row.reverse());*/



        this.draw()
    }

    override checkCollision() {


    }
}
