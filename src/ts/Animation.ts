import {Canvas} from "./Canvas";
import {settings} from "./settings";

export class Animation {
    private canvas: Canvas
    private ctx: CanvasRenderingContext2D
    private delta: number;
    private oldTime: number;

    constructor(canvas: Canvas) {
        this.canvas = canvas
        this.animate()
        this.delta = 10;
        this.oldTime = 0;
    }

    animate() {
        this.canvas.ctx.clearRect(0, 0, this.canvas.ctx.canvas.width, this.canvas.ctx.canvas.height)
        this.canvas.animate()

        let d = new Date()
        if (this.oldTime % 1000) {
            this.oldTime = d.getMilliseconds();
            //console.log(this.oldTime)
        }
        if (d.getMilliseconds() - this.oldTime >= this.delta) {
            this.oldTime = d.getMilliseconds();
        }
        
        let requestID = requestAnimationFrame(() => {
            this.animate()
        })
    }
}