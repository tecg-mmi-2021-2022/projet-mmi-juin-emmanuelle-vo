import {settings} from "../settings";
import {Shape} from "./Shape";
import {IDrawable} from "../Interfaces/IDrawable";

export class Piece /*extends Shape implements IDrawable*/{
    private ctx: CanvasRenderingContext2D;
    public shape: number[][]
    public position: { x: number; y: number };

    constructor(ctx: CanvasRenderingContext2D, shape: number[][]) {
        //super(ctx)
        this.ctx = ctx
        this.shape = shape
        this.position = {x: Math.floor(settings.cols / 2), y: 0}
    }

    draw() {
        this.shape.map((row, i) => {
            row.map((cell, j) => {
                if (cell > 0) {
                    this.ctx.fillStyle = settings.colors[cell]
                    this.ctx.fillRect(this.position.x + j, this.position.y + i, 1, 1)
                }
            })
        })
    }
}