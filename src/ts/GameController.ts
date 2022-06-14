import {Board} from "./Board";

export class GameController {
    private board: Board

    constructor(board: Board) {
        this.board = board

        this.addEventListeners()
    }

    addEventListeners() {
        window.addEventListener("keydown", (e) => {
            e.preventDefault()
            switch(e.key) {
                case "ArrowUp": this.board.rotate()
                    break
                case "ArrowRight": this.board.moveRight()
                    break
                case "ArrowDown": this.board.moveDown()
                    break
                case "ArrowLeft": this.board.moveLeft()
                    break
            }
        })
    }
}