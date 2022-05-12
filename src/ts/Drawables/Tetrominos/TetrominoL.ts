import {IDrawable} from "../../Interfaces/IDrawable";
import {_Shape} from "../_Shape";
import {settings} from "../../settings";

export class TetrominoL extends _Shape implements IDrawable {
    private width: number;
    public position: {x: number, y:number}


    constructor(color: string, ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
        super(color, ctx, canvas)
        this.width = settings.square.size
        this.position = { x: this.canvas.width / 2 - this.width / 2, y: 0 }
        //this.angle = 180
    }


    override draw() {
        this.ctx.save()
        this.ctx.translate(this.position.x, this.position.y)
        this.ctx.rotate(this.angle * Math.PI / 180)

        this.ctx.beginPath()
        this.ctx.lineWidth = 2
        this.ctx.strokeStyle = 'black'
        this.ctx.fillStyle = this.color
        this.ctx.rect(0, 0, this.width, this.width)
        this.ctx.fill()
        //this.ctx.stroke()
        this.ctx.closePath()

        this.ctx.beginPath()
        this.ctx.fillStyle = this.color
        this.ctx.fillRect(0, this.width, this.width, this.width)
        this.ctx.closePath()

        this.ctx.beginPath()
        this.ctx.fillStyle = this.color
        this.ctx.fillRect(0, this.width*2, this.width, this.width)
        this.ctx.closePath()

        this.ctx.beginPath()
        this.ctx.fillStyle = this.color
        this.ctx.fillRect(this.width, this.width*2, this.width, this.width)
        this.ctx.closePath()

        this.ctx.restore()
    }

    override animate() {
        this.position.y += this.speed.y

        this.checkCollision()
        this.draw()
    }

    override checkCollision() {
        if(this.angle === 0 || this.angle === 180) {
            if(this.position.y + this.width*3 >= this.canvas.height) {
                this.speed.y = 0
                this.over = true
            }
        }
        if(this.angle === 90 || this.angle === 270) {
            if(this.position.y + this.width*2 >= this.canvas.height) {
                this.speed.y = 0
                this.over = true
            }
        }
    }
}