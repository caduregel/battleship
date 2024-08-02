import { GameBoard } from "./gameBoard"

export const Player = class {
    constructor(computer, size, whichPlayer) {
        this.computer = computer
        this.whichPlayer = whichPlayer
        this.gameBoard = new GameBoard(size)
    }
}