import { GameBoard } from "../../src/gameLogic/gameBoard";

// Tests for the method that checks if all ships have been sunk
test('Test if an attacked square was actually hit', () => {
    const gameBoard = new GameBoard(10)
    gameBoard.placeShip([3, 4], 1)
    gameBoard.placeShip([5, 8], 1)
    gameBoard.placeShip([7, 1], 1)

    gameBoard.receiveAttack([3, 4])
    gameBoard.receiveAttack([5, 8])
    gameBoard.receiveAttack([7, 1])

    expect(gameBoard.allShipsSunk()).toBe(true)
})

test('Test if an attacked square was actually hit', () => {
    const gameBoard = new GameBoard(10)
    gameBoard.placeShip([3, 4], 1)
    gameBoard.placeShip([5, 8], 1)
    gameBoard.placeShip([7, 1], 1)

    gameBoard.receiveAttack([3, 4])
    gameBoard.receiveAttack([5, 8])

    expect(gameBoard.allShipsSunk()).toBe(false)
})