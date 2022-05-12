import {Canvas} from "./Canvas";
import {Animation} from "./Animation";
import {GameController} from "./GameController";

class Main {
    private canvas: Canvas
    private animation: Animation;
    private game: GameController;

    constructor() {
        this.canvas = new Canvas();
        this.animation = new Animation(this.canvas)
        this.game = new GameController(this.animation,this.canvas.board.tetromino);
    }
}

new Main();