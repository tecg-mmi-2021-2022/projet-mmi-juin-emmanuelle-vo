import {Animation} from "./Animation";
import {Tetromino} from "./Drawables/Tetromino";

export class GameController {
    private isStart: boolean;
    private animation: Animation;
    private playText: HTMLParagraphElement;
    private tetromino: Tetromino;

    constructor(animation: Animation, tetromino: Tetromino) {
        this.isStart = false;
        this.animation = animation;
        this.playText = document.querySelector('.tetris__play');
        this.tetromino = tetromino
        this.addEventListeners()
    }

    addEventListeners() {
        window.addEventListener('keydown', (e: KeyboardEvent) => {
            if (e.key === 'ArrowRight') {
                this.tetromino.moveRight()
            }
            if (e.key === 'ArrowLeft') {
                this.tetromino.moveLeft()
            }
            if (e.key === 'ArrowDown') {
                this.tetromino.moveDown()
            }
            if (e.key === 'ArrowUp') {

                this.tetromino.rotate()
            }
        })
    }


}