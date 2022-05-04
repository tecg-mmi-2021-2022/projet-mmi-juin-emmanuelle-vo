import {Animation} from "./Animation";

export class GameController {
    private isStart: boolean;
    private animation: Animation;
    private playText: HTMLParagraphElement;

    constructor(animation: Animation) {
        this.isStart = false;
        this.animation = animation;
        this.playText = document.querySelector('.tetris__play');
        this.addEventListeners()
    }

    addEventListeners() {
        window.addEventListener('keydown', (e: KeyboardEvent) => {
            if (this.isStart && e.key === 'ArrowRight') {
            }
            if (this.isStart && e.key === 'ArrowLeft') {
            }
            if (this.isStart && e.key === 'ArrowDown') {
            }
        });
    }


    start() {
        this.playText.classList.add('hide');
        this.isStart = true;
    }

}