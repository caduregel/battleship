import { GameBoard } from "./gameLogic/gameBoard"
const gameBoard = new GameBoard(10)
gameBoard.placeShip([3,4], 3, 'north')
console.log(gameBoard)