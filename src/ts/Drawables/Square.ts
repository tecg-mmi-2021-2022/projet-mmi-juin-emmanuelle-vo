import {IDrawable} from "../Interfaces/IDrawable";

export abstract class Square implements IDrawable {
    protected color: string;
    protected readonly position: {x: number, y: number};
    protected readonly ctx: CanvasRenderingContext2D;
    protected readonly speed: number;


    protected constructor(color: string, position: {x: number, y: number}, ctx: CanvasRenderingContext2D,) {
        this.color = color;
        this.position = position;
        this.ctx = ctx;
    }

    draw() {}


}