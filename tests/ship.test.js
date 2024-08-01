import { Ship } from "../src/gameLogic/ship";


test('Hit the ship twice and expect its damage property to be 2', () => {
    const mockShip = new Ship(3)

    mockShip.hitBoat()
    mockShip.hitBoat()
    expect(mockShip.damage).toBe(2)
})

test('Check if the boat has been sunk after being hit the same ammount of times as its length', () => {
    const boatLength = 4
    const mockShip = new Ship(boatLength)

    for (let i = 0; i <= boatLength; i++) {
        mockShip.hitBoat()
    }
    expect(mockShip.isSunk()).toBe(true)
})

test('Check if a ship floating property has been set to false after being sunk ', () => {
    const boatLength = 4
    const mockShip = new Ship(boatLength)

    for (let i = 0; i <= boatLength; i++) {
        mockShip.hitBoat()
        mockShip.isSunk()
    }
    expect(mockShip.floating).toBe(false)
}) 