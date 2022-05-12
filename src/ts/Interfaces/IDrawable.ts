export interface IDrawable {
    draw(): void
    animate(): void
    moveLeft(): void
    moveRight(): void
    moveDown(): void
    rotate(): void
    checkCollision(): void

}