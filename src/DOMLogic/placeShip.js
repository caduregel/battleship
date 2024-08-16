const checkPlacement = (direction, row, column, length, board) => {
    // Check if the ship placement goes out of bounds based on direction
    switch (direction) {
        case "north":
            if (row - (length - 1) < 0) throw new Error("Ship placement goes out of bounds");
            break;
        case "east":
            if (column + (length - 1) >= 10) throw new Error("Ship placement goes out of bounds");
            break;
        case "south":
            if (row + (length - 1) >= 10) throw new Error("Ship placement goes out of bounds");
            break;
        case "west":
            if (column - (length - 1) < 0) throw new Error("Ship placement goes out of bounds");
            break;
        default:
            throw new Error("Invalid direction");
    }

    for (let i = 0; i < length; i++) {
        if (board[row][column].type !== "water") {
            throw new Error("Ship placement overlaps with another ship");
        }

        // Adjust row and column based on the direction
        switch (direction) {
            case "north":
                row--;
                break;
            case "east":
                column++;
                break;
            case "south":
                row++;
                break;
            case "west":
                column--;
                break;
        }
    }
}

const getSquares = (shipToBePlaced, row, col, rotation) => {
    const squares = []
    for (let i = 0; i < shipToBePlaced; i++) {
        const coord = [row, col]
        switch (rotation) {
            case "north":
                coord[0] = coord[0] - i
                break;
            case "east":
                coord[1] = coord[1] + i
                break;
            case "south":
                coord[0] = coord[0] + i
                break;
            case "west":
                coord[1] = coord[1] - i
                break;
        }
        squares.push(`${coord[0]}_${coord[1]}`)
    }
    return squares
}

const rotateOnSpot = () => {

}

export const placeShipDOM = (game) => {
    return new Promise((resolve, reject) => {
        const playerBoard = document.querySelector('#player-one-board')
        const board = game.playerOne.gameBoard

        const shipLengths = [4, 3, 3, 2, 2, 2, 1, 1, 1, 1]
        // const shipLengths = [4, 2]
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
            }
        })

        // Create temporary board Display
        board.board.forEach((row, rowIndex) => {
            row.forEach((node, colIndex) => {
                const cellButton = document.createElement('div')
                cellButton.id = `l${rowIndex}_${colIndex}`
                const innerSquare = document.createElement('div')
                innerSquare.classList.add('ship')
                innerSquare.style.backgroundColor = 'rgb(77, 51, 34, 0)'
                cellButton.appendChild(innerSquare)

                // Add event listener for showing you are hovering above a square
                cellButton.addEventListener('mouseenter', () => {
                    try {
                        checkPlacement(rotation, rowIndex, colIndex, shipToBePlaced, board.board)
                        const squares = getSquares(shipToBePlaced, rowIndex, colIndex, rotation)
                        squares.forEach((item) => {
                            const row = Number(item.charAt(0))
                            const col = Number(item.charAt(2))
                            if (board.board[row][col].type == "water") {
                                const square = document.querySelector(`#l${item}`)
                                square.firstElementChild.style.backgroundColor = 'rgb(77, 51, 34, 0.5)'
                            }
                        })

                        // Remove the styling that shows you are hovering
                        cellButton.addEventListener('mouseleave', () => {
                            squares.forEach((item) => {
                                const row = Number(item.charAt(0))
                                const col = Number(item.charAt(2))
                                if (board.board[row][col].type === 'water') {
                                    const square = document.querySelector(`#l${item}`)
                                    square.firstElementChild.style.backgroundColor = 'rgb(77, 51, 34, 0)'
                                }
                            })
                        })
                    } catch (e) {
                        document.querySelector('#error_display').textContent = e
                        setTimeout(() => {
                            document.querySelector('#error_display').textContent = ''
                        }, 2000);
                    }
                })


                // Place a ship onto the gameboard.board object from event listener
                cellButton.addEventListener('click', () => {
                    // Try placing the ship
                    try {
                        if (shipIndex < shipLengths.length - 1) {
                            board.placeShip([rowIndex, colIndex], shipToBePlaced, rotation)
                            const squares = []
                            for (let i = 1; i < shipToBePlaced; i++) {
                                const coord = [rowIndex, colIndex]
                                switch (rotation) {
                                    case "north":
                                        coord[0] = coord[0] - i
                                        break;
                                    case "east":
                                        coord[1] = coord[1] + i
                                        break;
                                    case "south":
                                        coord[0] = coord[0] + i
                                        break;
                                    case "west":
                                        coord[1] = coord[1] - i
                                        break;
                                }
                                squares.push(`${coord[0]}_${coord[1]}`)
                            }
                            squares.forEach((item) => {
                                const square = document.querySelector(`#l${item}`)
                                square.firstElementChild.style.backgroundColor = 'rgb(77, 51, 34)'
                            })

                            shipIndex++
                            shipToBePlaced = shipLengths[shipIndex]
                            cellButton.firstElementChild.style.backgroundColor = 'rgb(77, 51, 34)'
                        } else {
                            board.placeShip([rowIndex, colIndex], shipToBePlaced, rotation)
                            resolve()
                        }
                    }
                    // If the ship is placed out of bounds remove the selected block and dont place ship
                    catch (e) {
                        document.querySelector('#error_display').textContent = e
                        setTimeout(() => {
                            document.querySelector('#error_display').textContent = ''
                        }, 2000);
                    }
                })
                playerBoard.appendChild(cellButton)
            })
        })
    })
}

