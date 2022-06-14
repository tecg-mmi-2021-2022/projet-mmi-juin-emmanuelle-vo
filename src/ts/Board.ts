import {settings} from "./settings";
import {Piece} from "./Drawables/Piece";

export class Board {
    private ctx: CanvasRenderingContext2D;
    public fallingPiece: Piece
    public grid: any[][]
    public message: string
    public gameOver: boolean

    constructor(ctx: CanvasRenderingContext2D) {
        this.ctx = ctx
        this.message = ""
        this.gameOver = false

        this.fallingPiece = null

        this.grid = this.createGrid()
    }

    // @ts-ignore
    createGrid() {
        let grid = []
        for (let i = 0; i < settings.rows; i++) {
            grid.push([])
            for (let j = 0; j < settings.cols; j++) {
                grid[grid.length - 1].push(0)
            }
        }
        return grid
    }

    // @ts-ignore
    collision(x: number, y: number, candidate=null) {
        const shape = candidate || this.fallingPiece.shape
        const n = shape.length
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (shape[i][j] > 0) {
                    let p = x + j
                    let q = y + i
                    if (p >= 0 && p < settings.cols && q < settings.rows) {
                        if (this.grid[q][p] > 0) {
                            return true
                        }
                    } else {
                        return true
                    }
                }
            }
        }
        return false
    }

    draw() {
        for (let i = 0; i < this.grid.length; i++) {
            for (let j = 0; j < this.grid[i].length; j++) {
                let cell = this.grid[i][j]
                this.ctx.fillStyle = settings.colors[cell]
                this.ctx.fillRect(j, i, 1, 1)
            }
        }

        if (this.fallingPiece !== null) {
            this.fallingPiece.draw()
        }
    }

    moveDown() {
        if (this.fallingPiece === null) {
            this.draw()
            return
        } else if (this.collision(this.fallingPiece.position.x, this.fallingPiece.position.y + 1)) {
            const shape = this.fallingPiece.shape
            const x = this.fallingPiece.position.x
            const y = this.fallingPiece.position.y
            shape.map((row, i) => {
                row.map((cell, j) => {
                    let p = x + j
                    let q = y + i
                    if (p >= 0 && p < settings.cols && q < settings.rows && cell > 0) {
                        this.grid[q][p] = shape[i][j]
                    }
                })
            })

            if (this.fallingPiece.position.y === 0) {
                alert("Game over!")
                this.gameOver = true
                this.message = "Vous avez perdu !"
                this.grid = this.createGrid()
            }
            this.fallingPiece = null
        } else {
            this.fallingPiece.position.y += 1
        }
        this.draw()
    }

    moveRight() {
        if (this.fallingPiece === null) {
            return
        }

        let x = this.fallingPiece.position.x
        let y = this.fallingPiece.position.y

        if (!this.collision(x + 1, y)) {
            this.fallingPiece.position.x += 1
        }

        this.draw()
    }

    moveLeft() {
        if (this.fallingPiece === null) {
            return
        }
        let x = this.fallingPiece.position.x
        let y = this.fallingPiece.position.y

        if (!this.collision(x - 1, y)) {
            this.fallingPiece.position.x -= 1
        }

        this.draw()
    }

    rotate() {
        if (this.fallingPiece !== null) {
            let shape = [...this.fallingPiece.shape.map((row) => [...row])]

            for (let y = 0; y < shape.length; ++y) {
                for (let x = 0; x < y; ++x) {
                    [shape[x][y], shape[y][x]] =
                        [shape[y][x], shape[x][y]]
                }
            }

            shape.forEach((row => row.reverse()))
            if (!this.collision(this.fallingPiece.position.x, this.fallingPiece.position.y, shape)) {
                this.fallingPiece.shape = shape
            }
        }
        this.draw()
    }

    reset() {
        this.message = ""
        this.gameOver = false

        this.grid = this.createGrid()
    }
}