export class Canvas {
    private canvasElt: HTMLCanvasElement
    private ctx: CanvasRenderingContext2D

    constructor() {
        this.canvasElt = document.getElementById('my-canvas') as HTMLCanvasElement
        this.ctx = this.canvasElt.getContext('2d')
        this.resizeCanvas();
        this.addEventListeners();

    }

    addEventListeners() {
        window.addEventListener('resize', () => {
            this.resizeCanvas();
        });

        document.querySelector('.tetris__play').addEventListener('click', (e) => {
            console.log('play')
        })
    }

    resizeCanvas() {
        //this.canvasElt.width = window.innerWidth * 0.4;
        //this.canvasElt.height = window.innerHeight * 0.9;
    }

}