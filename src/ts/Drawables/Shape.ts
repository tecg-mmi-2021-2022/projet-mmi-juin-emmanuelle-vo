import {IDrawable} from "../Interfaces/IDrawable";

export abstract class Shape implements IDrawable{
    protected readonly ctx: CanvasRenderingContext2D;

    protected constructor(ctx: CanvasRenderingContext2D) {
        this.ctx = ctx;
    }

    draw(){}

}