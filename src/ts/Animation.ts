import {Canvas} from "./Canvas";

export class Animation {
    private canvas: Canvas
    private requestID: number;

    constructor(canvas: Canvas) {
        this.canvas = canvas
        //this.animate()
    }

    animate(reset: () => void) {
        this.canvas.ctx.clearRect(0, 0, this.canvas.ctx.canvas.width, this.canvas.ctx.canvas.height)

        this.canvas.startGame()
        console.log('ok')
        if (this.canvas.board.gameOver) {
            cancelAnimationFrame(this.requestID)
            reset()
            return
        }
        this.requestID = requestAnimationFrame(() => {
            this.animate(reset)
        });
    }

    reset() {
        //this.canvas.reset()
    }
}