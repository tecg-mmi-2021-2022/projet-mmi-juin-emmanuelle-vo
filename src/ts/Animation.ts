import {Canvas} from "./Canvas";

export class Animation {
    private canvas: Canvas
    private fpsInterval: number;
    private then: number;
    private startTime: number;
    private now: number;
    private elapsed: number;
    private requestId: number;
    private isStart: boolean;

    constructor(canvas: Canvas, isStart: boolean) {
        this.canvas = canvas
        this.isStart = isStart
        this.startAnimating(1)

    }

    startAnimating(fps: number) {
        this.fpsInterval = 1000 / fps;
        this.then = Date.now();
        this.startTime = this.then;
        this.animate();
    }

    animate() {
        this.requestId = requestAnimationFrame(() => {
            this.animate()
        })

        this.now = Date.now();
        this.elapsed = this.now - this.then;

        if (this.elapsed > this.fpsInterval) {
            console.log(this.isStart)
            this.then = this.now - (this.elapsed % this.fpsInterval);

            this.canvas.ctx.clearRect(0, 0, this.canvas.canvasElt.width, this.canvas.canvasElt.height)
            if (this.canvas.isStart === true) {
                this.canvas.newGameState()
            }

            if (this.canvas.board.gameOver) {
                cancelAnimationFrame(this.requestId);
                //reset()
                return
            }

        }
    }

    reset() {
        //this.canvas.reset()
    }
}