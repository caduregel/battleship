import { endGame } from "./endGame"
import { attackSquare } from "./attackSquare"

function checkEndGame(board) {
    if (board.allShipsSunk() === true) {
        endGame()
    }
}

export const loadBoardToDOM = (id, board, game) => {
    const playerBoard = document.querySelector(id)

    playerBoard.innerHTML = ''
    playerBoard.style.setProperty('--grid-size', board.board.length)

    board.board.forEach((row, rowIndex) => {
        row.forEach((node, colIndex) => {
            const cellButton = document.createElement('div')

            attackSquare(cellButton, board, [rowIndex, colIndex], game, id)

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
                        if(id !== '#player-two-board'){
                        const innerSquare = document.createElement('div')
                        innerSquare.classList.add('ship')

                        cellButton.appendChild(innerSquare)
                    }    
                    }
                    break;
            }

            playerBoard.appendChild(cellButton)
        })
    })
}