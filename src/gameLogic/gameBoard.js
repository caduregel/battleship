import { Ship } from "./ship"

export const GameBoard = class {
    constructor(size) {
        this.size = size
        this.board = Array(size).fill(null).map(() => Array(size).fill(null))
    }

    placeShip(coordinates, length, rotation) {
        const ship = new Ship(length)
        let row = coordinates[0]
        let column = coordinates[1]

        switch (rotation) {
            case "north":
                for (let i = 0; i < length; i++) {
                    this.board[row][column] = 0
                    row = row - 1
                }
                break;
            case "east":
                for (let i = 0; i < length; i++) {
                    this.board[row][column] = 0
                    column = column + 1
                }
                break;
            case "south":
                for (let i = 0; i < length; i++) {
                    this.board[row][column] = 0
                    row = row + 1
                }
                break;
            case "west":
                for (let i = 0; i < length; i++) {
                    this.board[row][column] = 0
                    column = column - 1
                }
                break;

            default:
                break;
        }
    }

    receiveAttack() {

    }
}