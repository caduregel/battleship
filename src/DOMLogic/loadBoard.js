import { endGame } from "./endGame"
import { playerTurn } from "./setupGame"

function checkEndGame(board) {
    if (board.allShipsSunk() === true) {
        endGame()
    }
}

export const loadBoardToDOM = (id, board) => {
    const playerBoard = document.querySelector(id)

    playerBoard.innerHTML = ''
    playerBoard.style.setProperty('--grid-size', board.board.length)

    board.board.forEach((row, rowIndex) => {
        row.forEach((node, colIndex) => {
            const cellButton = document.createElement('div')

            // attackSquare(cellButton, [rowIndex, colIndex])

            cellButton.addEventListener('click', () => {
                if (playerTurn.turn === 1 && id === '#player-one-board') {
                    board.receiveAttack([rowIndex, colIndex])
                    loadBoardToDOM(id, board)
                    playerTurn.switchTurn()
                    checkEndGame(board)

                } else if (playerTurn.turn === 2 && id === '#player-two-board') {
                    board.receiveAttack([rowIndex, colIndex])
                    loadBoardToDOM(id, board)
                    playerTurn.switchTurn()
                    checkEndGame(board)
                }
            })

            switch (node.type) {
                case "water":
                    if (node.hit == true) {
                        const innerSquare = document.createElement('p')
                        innerSquare.classList.add("hit-square")
                        innerSquare.textContent = 'X'

                        cellButton.appendChild(innerSquare)
                    }
                    break;
                default:
                    if (node.hit == true) {
                        const innerSquare = document.createElement('div')
                        innerSquare.classList.add('hit-ship')

                        cellButton.appendChild(innerSquare)

                    } else {
                        const innerSquare = document.createElement('div')
                        innerSquare.classList.add('ship')

                        cellButton.appendChild(innerSquare)
                    }
                    break;
            }

            playerBoard.appendChild(cellButton)
        })
    })
}