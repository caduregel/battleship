import { GameBoard } from "./gameLogic/gameBoard"
const gameBoard = new GameBoard(10)
gameBoard.placeShip([3, 4], 1)
gameBoard.placeShip([5, 8], 1)
gameBoard.placeShip([7, 1], 1)

gameBoard.receiveAttack([3, 4])
gameBoard.receiveAttack([5, 8])
gameBoard.receiveAttack([7, 1])


console.log(gameBoard.allShipsSunk())