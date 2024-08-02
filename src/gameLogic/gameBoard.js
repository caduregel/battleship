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
        this.board = Array(size).fill(null).map(() => Array(size).fill(null).map(() => new Node()));
    }

    placeShip(coordinates, length, rotation) {
        const ship = new Ship(length)
        let row = coordinates[0]
        let column = coordinates[1]



        switch (rotation) {
            case "north":
                for (let i = 0; i < length; i++) {
                    if (row < 0 || row >= this.size || column < 0 || column >= this.size) {
                        throw new Error("Ship placement goes out of bounds");
                    }
                    this.board[row][column].type = ship
                    row = row - 1
                }
                break;
            case "east":
                for (let i = 0; i < length; i++) {
                    if (row < 0 || row >= this.size || column < 0 || column >= this.size) {
                        throw new Error("Ship placement goes out of bounds");
                    }
                    this.board[row][column].type = ship
                    column = column + 1
                }
                break;
            case "south":
                for (let i = 0; i < length; i++) {
                    if (row < 0 || row >= this.size || column < 0 || column >= this.size) {
                        throw new Error("Ship placement goes out of bounds");
                    }
                    this.board[row][column].type = ship
                    row = row + 1
                }
                break;
            case "west":
                for (let i = 0; i < length; i++) {
                    if (row < 0 || row >= this.size || column < 0 || column >= this.size) {
                        throw new Error("Ship placement goes out of bounds");
                    }
                    this.board[row][column].type = ship
                    column = column - 1
                }
                break;

            default:
                for (let i = 0; i < length; i++) {
                    if (row < 0 || row >= this.size || column < 0 || column >= this.size) {
                        throw new Error("Ship placement goes out of bounds");
                    }
                    this.board[row][column].type = ship
                    row = row - 1
                }
                break;
        }
    }

    receiveAttack(coordinates) {
        const attackedSquare = this.board[coordinates[0]][coordinates[1]]
        if (attackedSquare.type !== "water") {
            attackedSquare.type.hitBoat()
        }

        attackedSquare.hit = true
    }

    allShipsSunk() {
        const allShips = []
        this.board.forEach((arr) => {
            arr.map((item) => {
                if (item.type !== "water") { allShips.push(item) }
            })
        })

        if (allShips.every((currentValue) => currentValue.hit === true) == true) {
            return true
        } else {
            return false
        }
    }
}