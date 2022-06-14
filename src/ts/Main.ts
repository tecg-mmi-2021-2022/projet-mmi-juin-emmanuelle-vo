import {GameController} from "./GameController";
import {Canvas} from "./Canvas";

class Main {
    public isStart: boolean;
    private canvas: Canvas;
    private controller: GameController;

    constructor() {
        this.isStart = false;
        this.canvas = new Canvas(this.isStart)
        this.controller = new GameController(this.canvas.board)
    }
}
new Main()