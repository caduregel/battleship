import { Ship } from "./ship"

const Node = class {
    constructor() {
        this.type = "water"
        this.hit = false
    }
}

export const GameBoard = class {
    constructor(size) {
        this.size = size
        this.board = Array(size).fill(Node).map(() => Array(size).fill(Node))
    }

    placeShip(coordinates, length, rotation) {
        const ship = new Ship(length)
        let row = coordinates[0]
        let column = coordinates[1]

        switch (rotation) {
            case "north":
                for (let i = 0; i < length; i++) {
                    this.board[row][column].type = ship
                    row = row - 1
                }
                break;
            case "east":
                for (let i = 0; i < length; i++) {
                    this.board[row][column].type = ship
                    column = column + 1
                }
                break;
            case "south":
                for (let i = 0; i < length; i++) {
                    this.board[row][column].type = ship
                    row = row + 1
                }
                break;
            case "west":
                for (let i = 0; i < length; i++) {
                    this.board[row][column].type = ship
                    column = column - 1
                }
                break;

            default:
                for (let i = 0; i < length; i++) {
                    this.board[row][column].type = ship
                    row = row - 1
                }
                break;
        }
    }

    receiveAttack(coordinates) {
        attackedSquare = this.board[coordinates[0]][coordinates[1]]
        if (attackedSquare.type !== "water") {
            attackedSquare.type.hitBoat()
        }

        attackedSquare.hit = true
    }
}