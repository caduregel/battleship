import { Ship } from "./ship"

const Node = class {
    constructor() {
        this.type = "water"
        this.hit = false
    }
}

const placeShipHelper = (initialRow, initialColumn, size, length, board, ship, direction) => {
    let row = initialRow;
    let column = initialColumn;
    // Check if the ship placement goes out of bounds based on direction
    switch (direction) {
        case "north":
            if (row - (length - 1) < 0) throw new Error("Ship placement goes out of bounds");
            break;
        case "east":
            if (column + (length - 1) >= size) throw new Error("Ship placement goes out of bounds");
            break;
        case "south":
            if (row + (length - 1) >= size) throw new Error("Ship placement goes out of bounds");
            break;
        case "west":
            if (column - (length - 1) < 0) throw new Error("Ship placement goes out of bounds");
            break;
        default:
            throw new Error("Invalid direction");
    }

    for (let i = 0; i < length; i++) {
        if (board[row][column].type !== "water") {
            throw new Error("Ship placement overlaps with another ship");
        }

        // Adjust row and column based on the direction
        switch (direction) {
            case "north":
                row--;
                break;
            case "east":
                column++;
                break;
            case "south":
                row++;
                break;
            case "west":
                column--;
                break;
        }
    }

    row = initialRow;
    column = initialColumn;

    // Place the ship on the board based on the direction
    for (let i = 0; i < length; i++) {
        board[row][column].type = ship;

        switch (direction) {
            case "north":
                row--;
                break;
            case "east":
                column++;
                break;
            case "south":
                row++;
                break;
            case "west":
                column--;
                break;
        }
    }
}

export const GameBoard = class {
    constructor(size) {
        this.board = Array(size).fill(null).map(() => Array(size).fill(null).map(() => new Node()));
        this.receivedAttacks = []
    }

    placeShip(coordinates, length, rotation) {
        const ship = new Ship(length)
        let row = coordinates[0]
        let column = coordinates[1]

        switch (rotation) {
            case "north":
                placeShipHelper(row, column, this.size, length, this.board, ship, "north");
                break;
            case "east":
                placeShipHelper(row, column, this.size, length, this.board, ship, "east");
                break;
            case "south":
                placeShipHelper(row, column, this.size, length, this.board, ship, "south");
                break;
            case "west":
                placeShipHelper(row, column, this.size, length, this.board, ship, "west");
                break;
            default:
                placeShipHelper(row, column, this.size, length, this.board, ship, "north");
        }
    }

    receiveAttack(coordinates) {
        const attackedSquare = this.board[coordinates[0]][coordinates[1]]
        if (attackedSquare.type !== "water") {
            attackedSquare.type.hitBoat()
        }
        this.receivedAttacks.push(coordinates)

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