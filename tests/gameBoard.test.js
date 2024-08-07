import { GameBoard } from "../src/gameLogic/gameBoard";

describe('PlaceShip', () => {

    // Tests for rotation checking
    test("Check if a ship placed rotating north is properly rotated", () => {
        const gameBoard = new GameBoard(10)

        gameBoard.placeShip([3, 4], 3, 'north')
        expect(gameBoard.board[1][4].type).not.toBe("water")
    })

    test("Check if a ship placed rotating east is properly rotated", () => {
        const gameBoard = new GameBoard(10)

        gameBoard.placeShip([3, 4], 3, 'east')
        expect(gameBoard.board[3][6].type).not.toBe("water")
    })

    test("Check if a ship placed rotating south is properly rotated", () => {
        const gameBoard = new GameBoard(10)

        gameBoard.placeShip([3, 4], 3, 'south')
        expect(gameBoard.board[5][4].type).not.toBe("water")
    })

    test("Check if a ship placed rotating west is properly rotated", () => {
        const gameBoard = new GameBoard(10)

        gameBoard.placeShip([3, 4], 3, 'west')
        expect(gameBoard.board[3][2].type).not.toBe("water")
    })

    // Test if a ship is not place across the entire column
    test("Check if a ship placed rotating west is properly rotated", () => {
        const gameBoard = new GameBoard(10)

        gameBoard.placeShip([3, 4], 3, 'west')
        expect(gameBoard.board[3][8].type).toBe("water")
    })

    test('should place a ship within bounds correctly', () => {
        const gameboard = new GameBoard(10);

        expect(() => {
            gameboard.placeShip([0, 0], 5, "east");
        }).not.toThrow();
    });
});


describe("Test all ships sunk function", () => {
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
})

describe("Test attacking function", () => {

    test('Test if an attacked square was actually hit', () => {
        const gameBoard = new GameBoard(10)
        gameBoard.placeShip([3, 4], 1)
        gameBoard.receiveAttack([3, 4])
        expect(gameBoard.board[3][4].hit).toBe(true)
    })
})