import {GameController} from "./GameController";
import {Canvas} from "./Canvas";
import {Animation} from "./Animation";

class Main {
    private canvas: Canvas;
    private controller: GameController;
    private animation: Animation;

    constructor() {
        this.canvas = new Canvas()
        this.animation = new Animation(this.canvas, this.canvas.isStart)
        this.controller = new GameController(this.canvas.board)
    }
}

new Main()