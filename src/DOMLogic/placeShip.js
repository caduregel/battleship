

export const placeShipDOM = (game) => {
    const playerBoard = document.querySelector('#player-one-board')
    const board = game.playerOne.gameBoard
    board.board.forEach((row, rowIndex) => {
        row.forEach((node, colIndex) => {
            const cellButton = document.createElement('div')
            cellButton.id = `[${rowIndex},${colIndex}]`

            const shipLengths = [4, 3, 3, 2, 2, 2, 1, 1, 1, 1]
            let shipIndex = 1
            let shipToBePlaced = shipLengths[shipIndex]

            const rotations = ['north', 'east', 'south', 'west']
            let currentIndex = 0
            let rotation = rotations[currentIndex]

            // Change rotation
            function rotateDirection() {
                currentIndex = (currentIndex + 1) % rotations.length;
                rotation = rotations[currentIndex];
            }

            document.addEventListener('keypress', function (event) {
                // Check if the key pressed is the spacebar (key code 32)
                if (event.code === 'KeyR') {
                    rotateDirection();
                    console.log(rotation)
                }
            })

            cellButton.addEventListener('mouseenter', () => {
                const innerSquare = document.createElement('div')
                innerSquare.classList.add('ship')
                innerSquare.style.backgroundColor = 'rgb(77, 51, 34, 0.5)'
                cellButton.appendChild(innerSquare)
            })

            cellButton.addEventListener('mouseleave', () => {
                if (node.type === 'water') {
                    cellButton.innerHTML = ''
                }
            })
            cellButton.addEventListener('click', () => {
                const shipPlaced = board.placeShip([rowIndex, colIndex], shipToBePlaced, rotation)
                console.log(shipPlaced)
                if (shipPlaced !== '') {
                    shipIndex = shipIndex + 1
                    shipToBePlaced = shipLengths[shipIndex]
                    cellButton.firstElementChild.style.backgroundColor = 'rgb(77, 51, 34)'
                }
            })
            playerBoard.appendChild(cellButton)
        })
    })
}

