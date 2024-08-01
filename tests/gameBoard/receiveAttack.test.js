import { GameBoard } from "../../src/gameLogic/gameBoard";

test('Test if an attacked square was actually hit', () => {
    const gameBoard = new GameBoard(10)
    gameBoard.placeShip([3, 4], 1)
    gameBoard.receiveAttack([3,4])
    expect(gameBoard.board[3][4].hit).toBe(true)
})