import {IDrawable} from "../../Interfaces/IDrawable";
import {Shape} from "../Shape";
import {settings} from "../../settings";

export class TetrominoT extends Shape implements IDrawable {
    private width: number;
    public position: {x: number, y:number}


    constructor(color: string, ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
        super(color, ctx, canvas)
        this.width = settings.square.width
        this.position = { x: this.canvas.width / 2 - this.width / 2, y: 0 }
    }


    override draw() {
        this.ctx.beginPath()
        this.ctx.lineWidth = 2
        this.ctx.strokeStyle = 'black'
        this.ctx.fillStyle = this.color
        this.ctx.rect(this.position.x, this.position.y, this.width, this.width)
        this.ctx.fill()
        //this.ctx.stroke()
        this.ctx.closePath()

        this.ctx.beginPath()
        this.ctx.fillStyle = this.color
        this.ctx.fillRect(this.position.x, this.position.y + this.width, this.width, this.width)
        this.ctx.closePath()

        this.ctx.beginPath()
        this.ctx.fillStyle = this.color
        this.ctx.fillRect(this.position.x - this.width, this.position.y, this.width, this.width)
        this.ctx.closePath()

        this.ctx.beginPath()
        this.ctx.fillStyle = this.color
        this.ctx.fillRect(this.position.x + this.width, this.position.y, this.width, this.width)
        this.ctx.closePath()
    }
}