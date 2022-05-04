export class Canvas {
    private canvasElt: HTMLCanvasElement
    private ctx: CanvasRenderingContext2D

    constructor() {
        this.canvasElt = document.getElementById('my-canvas') as HTMLCanvasElement
        this.ctx = this.canvasElt.getContext('2d')
        this.resizeCanvas();
        this.addEventListeners();

        return this
    }

    addEventListeners() {
        window.addEventListener('resize', () => {
            this.resizeCanvas();
        });
    }

    resizeCanvas() {
        this.canvasElt.width = window.innerWidth / 5;
        this.canvasElt.height = window.innerHeight * 0.7;
    }

}