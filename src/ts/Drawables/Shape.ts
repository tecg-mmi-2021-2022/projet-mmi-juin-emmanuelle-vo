import {IDrawable} from "../Interfaces/IDrawable";

export abstract class Shape implements IDrawable {
    protected readonly ctx: CanvasRenderingContext2D;
    protected canvas: HTMLCanvasElement;
    protected color: string;
    public position: {x: number, y: number};
    protected speed: number;


    protected constructor(color: string, ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
        this.color = color;
        this.ctx = ctx;
        this.canvas = canvas;
    }

    draw() {}


}