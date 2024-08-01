export const GameBoard = class {
    constructor(size) {
        this.size = size
        this.boad = Array(size).fill(null).map(() => Array(size).fill(null))
    }

    placeShip(coordinates, length, rotation) {
        
    }

    receiveAttack() {

    }
}