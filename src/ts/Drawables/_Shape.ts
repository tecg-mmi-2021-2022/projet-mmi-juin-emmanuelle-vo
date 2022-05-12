import {IDrawable} from "../Interfaces/IDrawable";
import {settings} from "../settings";
import tetrominoShapes from "../tetrominoShapes";

export abstract class _Shape {
    protected readonly ctx: CanvasRenderingContext2D;
    protected canvas: HTMLCanvasElement;
    protected color: string;
    public position: {x: number, y: number};
    protected speed: { x: number, y: number };
    protected angle: number;
    protected over: boolean
    private random: number;
    private shape: number[][];


    protected constructor(color: string, ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
        this.color = color;
        this.ctx = ctx;
        this.canvas = canvas;
        this.speed = {x: 0, y: settings.tetrominos.speed}
        this.over = false
        this.angle = 0
        this.random = Math.random() * tetrominoShapes.length
        this.shape = tetrominoShapes[this.random];
    }

    draw() {}

    animate() {}

    checkCollision() {}


}