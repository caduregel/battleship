import { endGame } from "./endGame"
import { loadBoardToDOM } from "./loadBoard"
import { playerTurn } from "./setupGame"

function checkEndGame(board, winner) {
    if (board.allShipsSunk() === true) {
        endGame(winner)
    }
}

function isInArray(value, array) {
    const stringArr = array.map(item => item.toString())
    const stringVal = value.toString()
    return stringArr.indexOf(stringVal) > -1;
}

export const computerAttack = (game) => {
    const x = Math.floor(Math.random() * (0 + 9))
    const y = Math.floor(Math.random() * (0 + 9))
    // console.log(isInArray([7, 0].toString(), game.computer.gameBoard.receivedAttacks))
    if (!isInArray([x, y], game.playerOne.gameBoard.receivedAttacks )) {
        game.playerOne.gameBoard.receiveAttack([x, y])
        loadBoardToDOM('#player-one-board', game.playerOne.gameBoard, game)
        playerTurn.switchTurn()
        checkEndGame(game.playerOne.gameBoard, 'Player Two')
    } else {
        computerAttack(game)
    }
}

export const attackSquare = (button, board, coordinates, game, id) => {
    if (id !== '#player-one-board') {
        button.addEventListener('click', () => {
            if (playerTurn.turn === 1) {
                if (!isInArray(coordinates, game.computer.gameBoard.receivedAttacks)) {
                    board.receiveAttack(coordinates)
                    loadBoardToDOM('#player-two-board', board, game)
                    playerTurn.switchTurn()
                    checkEndGame(board, "Player One")

                    computerAttack(game)
                }
            }
        })
    }
}
