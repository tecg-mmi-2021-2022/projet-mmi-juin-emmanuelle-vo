import {settings} from "./settings";
import {Board} from "./Board";
import {Piece} from "./Drawables/Piece";

export class Canvas {
    private canvasElt: HTMLCanvasElement
    public ctx: CanvasRenderingContext2D
    public board: Board;
    private score: number;
    private playButton: HTMLAnchorElement;
    private lines: number;
    private levels: number;
    private id: number;
    private scoreElt: HTMLElement;
    private levelElt: HTMLElement;
    private linesElt: HTMLElement;
    private isStart: boolean;
    private playAgainText: HTMLParagraphElement;

    constructor(isStart: boolean) {
        this.isStart = isStart
        this.canvasElt = document.getElementById('my-canvas') as HTMLCanvasElement
        this.ctx = this.canvasElt.getContext('2d')
        this.playButton = document.querySelector('.tetris__play') as HTMLAnchorElement
        this.playAgainText = document.querySelector('.playAgain') as HTMLParagraphElement;
        this.scoreElt = document.getElementById('score')
        this.linesElt = document.getElementById('lines')
        this.levelElt = document.getElementById('level')
        this.ctx.scale(settings.blockSize, settings.blockSize)
        this.score = settings.initialScore
        this.lines = settings.initialLines
        this.levels = settings.initialLevel

        this.board = new Board(this.ctx)

        this.startGame()

    }

    startGame() {
        this.playButton.addEventListener('click', (e) => {
            e.preventDefault()
            if (this.isStart === false) {
                setInterval(() => {
                    this.newGameState()
                }, settings.gameClock)

            }
            this.isStart === true
        })
    }

    newGameState() {

        this.validLine()
        if (this.board.fallingPiece === null) {
            this.id = Math.floor(Math.random() * settings.shapes.length)
            console.log(this.id)
            const newPiece = new Piece(this.ctx, settings.shapes[this.id])
            this.board.fallingPiece = newPiece
            this.board.moveDown()
        } else {
            this.board.moveDown()
        }
    }

    validLine() {
        const allFilled = (row: any) => {
            for (let x of row) {
                if (x === 0) {
                    return false
                }
            }
            return true
        }

        for (let i = 0; i < this.board.grid.length; i++) {
            if (allFilled(this.board.grid[i])) {
                this.score = this.score += settings.scoreWorth
                this.lines = this.lines += 1
                this.board.grid.splice(i, 1)
                this.board.grid.unshift([0,0,0,0,0,0,0,0,0,0])

                if (this.score % 50 === 0) {
                    this.levels = this.levels += 1
                }
            }
        }

        this.updateData()
    }

    updateData() {
        this.scoreElt.innerHTML = String(this.score)
        this.linesElt.innerHTML = String(this.lines)
        this.levelElt.innerHTML = String(this.levels)
    }

    /*reset(): void {
        this.isStart = false;
        this.playAgainText.textContent = this.board.message
        this.playAgainText.classList.add('show')
        this.animation.reset()
    }

    start() {
        this.playAgainText.classList.remove('show')
        this.isStart = true
        this.animation.animate(() => {
            this.reset()
        });
    }*/
}