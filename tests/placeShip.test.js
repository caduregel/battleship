import { GameBoard } from "../src/gameLogic/gameBoard";


// Tests for rotation checking
test("Check if a ship placed rotating north is properly rotated", () => {
    const gameBoard = new GameBoard(10)

    gameBoard.placeShip([3,4], 3, 'north')
    expect(gameBoard.board[1][4]).toBe(0)
})

test("Check if a ship placed rotating east is properly rotated", () => {
    const gameBoard = new GameBoard(10)

    gameBoard.placeShip([3,4], 3, 'east')
    expect(gameBoard.board[3][6]).toBe(0)
})

test("Check if a ship placed rotating south is properly rotated", () => {
    const gameBoard = new GameBoard(10)

    gameBoard.placeShip([3,4], 3, 'south')
    expect(gameBoard.board[5][4]).toBe(0)
})

test("Check if a ship placed rotating west is properly rotated", () => {
    const gameBoard = new GameBoard(10)

    gameBoard.placeShip([3,4], 3, 'west')
    expect(gameBoard.board[3][2]).toBe(0)
})

// Test for checking placed ship length
test("Check if a ship placed rotating north is properly rotated", () => {
    const gameBoard = new GameBoard(10)

    gameBoard.placeShip([3,4], 3, 'north')
    expect(gameBoard.board[0][4]).toBe(null)
})