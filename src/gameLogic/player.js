import { GameBoard } from "./gameBoard"

export const Player = class {
    constructor(computer, size) {
        this.computer = computer
        this.gameBoard = new GameBoard(size)
    }
}