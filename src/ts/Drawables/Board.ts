import {settings} from "../settings";
import {Tetromino} from "./Tetromino";

export class Board {
    private ctx: CanvasRenderingContext2D;
    public tetromino: Tetromino;

    constructor(ctx: CanvasRenderingContext2D) {
        this.ctx = ctx
        // board with empty cells : 0
        // With occupied cells : 1-7 according to colors
        this.getEmptyBoard()
        this.tetromino = new Tetromino(this.ctx)
    }

    getEmptyBoard() {
        // length : génère une séquence de nombres : 20 rows = [0 - 19]
        // array.fill() : fill all elements with value
        // = grille de 10 sur 20
        let columns = Array.from({length : settings.canvas.columns})
        return Array.from({length : settings.canvas.rows}, () => columns.fill(0))
    }

    reset() {
        return this.getEmptyBoard()
    }

}