export const Ship = class {
    constructor(length,) {
        this.length = length
        this.damage = 0
        this.floating = true
    }

    hitBoat() {
        if (this.damage < this.length) {
            this.damage = this.damage + 1
        }
    }

    isSunk() {
        if (this.damage === this.length) {
            this.floating = false
            return true
        } else {
            return false
        }
    }
}