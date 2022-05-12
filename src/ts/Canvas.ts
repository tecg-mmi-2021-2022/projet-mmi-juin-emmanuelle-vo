import {IDrawable} from "./Interfaces/IDrawable";
import {settings} from "./settings";
import {Board} from "./Drawables/Board";
import tetrominoShapes from "./tetrominoShapes";
import {Tetromino} from "./Drawables/Tetromino";

export class Canvas {
    private canvasElt: HTMLCanvasElement
    public ctx: CanvasRenderingContext2D
    public shapes: IDrawable[] = [];
    public board: Board;

    constructor() {
        this.canvasElt = document.getElementById('my-canvas') as HTMLCanvasElement
        this.ctx = this.canvasElt.getContext('2d')
        this.ctx.canvas.width = settings.canvas.columns * settings.square.size
        this.ctx.canvas.height = settings.canvas.rows * settings.square.size
        this.ctx.scale(settings.square.size, settings.square.size)
        this.board = new Board(this.ctx)
        //console.table(this.board.getEmptyBoard())

        this.addEventListeners();

        this.board.tetromino

        this.draw()

    }

    addEventListeners() {
        document.querySelector('.tetris__play').addEventListener('click', (e) => {
            this.board.reset()
        })
    }

    draw() {
        this.board.tetromino.draw()
    }

    animate() {
        this.board.tetromino.animate()
    }


}