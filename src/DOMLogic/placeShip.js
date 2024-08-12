import { loadBoardToDOM } from "./loadBoard"

export const placeShipDOM = (game) => {
    return new Promise((resolve, reject) => {
        const playerBoard = document.querySelector('#player-one-board')
        const board = game.playerOne.gameBoard

        // const shipLengths = [4, 3, 3, 2, 2, 2, 1, 1, 1, 1]
        const shipLengths = [1, 1]
        let shipIndex = 0
        let shipToBePlaced = shipLengths[shipIndex]

        const rotations = ['north', 'east', 'south', 'west']
        let currentIndex = 0
        let rotation = rotations[currentIndex]

        // change rotation
        document.addEventListener('keypress', function (event) {
            if (event.code === 'KeyR') {
                currentIndex = (currentIndex + 1) % rotations.length;
                rotation = rotations[currentIndex];
                document.querySelector("#rotation_display").textContent = `Placing Rotation(Press R to change): ${rotation}`
            }
        })
        const selectCells = (square, length, rotation) => {
            cells = [

            ]

            coordinates = square
            for (let i = 0; i < length; i++) {
                switch (rotation) {
                    case 'north':
                        
                        break;
                    case 'east':
                        break;
                    case 'south':
                        break;
                    case 'west':
                        break;
                }
            }

        }

        // Create temporary board Display
        board.board.forEach((row, rowIndex) => {
            row.forEach((node, colIndex) => {
                const cellButton = document.createElement('div')
                cellButton.id = `[${rowIndex},${colIndex}]`



                // Add event listener for showing you are hovering above a square
                cellButton.addEventListener('mouseenter', () => {
                    if (node.type == "water") {
                        const innerSquare = document.createElement('div')
                        innerSquare.classList.add('ship')
                        innerSquare.style.backgroundColor = 'rgb(77, 51, 34, 0.5)'
                        cellButton.appendChild(innerSquare)
                    }
                })

                // Remove the styling that shows you are hovering
                cellButton.addEventListener('mouseleave', () => {
                    if (node.type === 'water') {
                        cellButton.innerHTML = ''
                    }
                })

                // Place a ship onto the gameboard.board object from event listener
                cellButton.addEventListener('click', () => {
                    // Try placing the ship
                    try {
                        if (shipIndex < shipLengths.length - 1) {
                            board.placeShip([rowIndex, colIndex], shipToBePlaced, rotation)
                            shipIndex++
                            shipToBePlaced = shipLengths[shipIndex]
                            cellButton.firstElementChild.style.backgroundColor = 'rgb(77, 51, 34)'
                            document.querySelector("#ship_length_display").textContent = `Ship length: ${shipLengths[shipIndex]}`
                        } else {
                            board.placeShip([rowIndex, colIndex], shipToBePlaced, rotation)
                            resolve()
                        }
                    }
                    // If the ship is placed out of bounds remove the selected block and dont place ship
                    catch {
                        cellButton.addEventListener('mouseleave', () => {
                            if (node.type === 'water') {
                                cellButton.innerHTML = ''
                            }
                        })
                    }
                })
                playerBoard.appendChild(cellButton)
            })
        })
    })
}

