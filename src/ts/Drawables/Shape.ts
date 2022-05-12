import {IDrawable} from "../Interfaces/IDrawable";

export abstract class Shape implements IDrawable{
    protected readonly ctx: CanvasRenderingContext2D;
    protected id: number;
    protected color: string;
    protected position: {x: number, y: number}

    protected constructor(ctx: CanvasRenderingContext2D) {
        this.ctx = ctx;
    }

    draw(){}

    animate(){}

    moveLeft(){}

    moveRight(){}

    moveDown(){}

    rotate(){}

    checkCollision(){}


}