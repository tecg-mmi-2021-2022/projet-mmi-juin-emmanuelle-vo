import {IDrawable} from "./Interfaces/IDrawable";
import {TetrominoSquare} from "./Drawables/Tetrominos/TetrominoSquare";
import {settings} from "./settings";
import {TetrominoI} from "./Drawables/Tetrominos/TetrominoI";
import {TetrominoL} from "./Drawables/Tetrominos/TetrominoL";
import {TetrominoInverseL} from "./Drawables/Tetrominos/TetrominoInverseL";
import {TetrominoT} from "./Drawables/Tetrominos/TetrominoT";
import {TetrominoZ} from "./Drawables/Tetrominos/TetrominoZ";
import {TetrominoInverseZ} from "./Drawables/Tetrominos/TetrominoInverseZ";

export class Canvas {
    private canvasElt: HTMLCanvasElement
    private ctx: CanvasRenderingContext2D
    public shapes: IDrawable[] = [];

    constructor() {
        this.canvasElt = document.getElementById('my-canvas') as HTMLCanvasElement
        this.ctx = this.canvasElt.getContext('2d')
        this.addEventListeners();

        this.shapes.push(new TetrominoSquare(settings.tetrominos.square.color, this.ctx, this.canvasElt));
        this.shapes.push(new TetrominoI(settings.tetrominos.i.color, this.ctx, this.canvasElt));
        this.shapes.push(new TetrominoL(settings.tetrominos.l.color, this.ctx, this.canvasElt));
        this.shapes.push(new TetrominoInverseL(settings.tetrominos.lInverse.color, this.ctx, this.canvasElt));
        //this.shapes.push(new TetrominoT(settings.tetrominos.t.color, this.ctx, this.canvasElt));
        //this.shapes.push(new TetrominoZ(settings.tetrominos.z.color, this.ctx, this.canvasElt));
        this.shapes.push(new TetrominoInverseZ(settings.tetrominos.zInverse.color, this.ctx, this.canvasElt));

        this.draw()

    }

    addEventListeners() {
        document.querySelector('.tetris__play').addEventListener('click', (e) => {
            console.log('play')
        })
    }

    draw() {
        this.shapes.forEach(shape => {
            shape.draw();
        })
    }


}