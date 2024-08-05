import { loadBoardToDOM } from "./loadBoard"

export const playerTurn = {
    turn: 1,
    switchTurn: function(){
        if (this.turn === 1) {
            this.turn = 2
        } else {
            this.turn = 1
        }
        console.log(this.turn)
    }
}


export const displayBoard = (player) => {
    // First populate board, later need to work on making the player be able to place ships
    const board = player.gameBoard

    board.placeShip([7, 0], 3, 'north')
    board.placeShip([3, 0], 2, 'east')
    board.placeShip([5, 6], 4, 'west')
    board.placeShip([0, 0], 3, 'south')

    board.receiveAttack([7, 0])
    board.receiveAttack([8, 0])

    // empty board
    document.querySelector('#boards-container').style.display = 'flex'

    if (player.whichPlayer == 1) {
        loadBoardToDOM('#player-one-board', board)
    } else {
        loadBoardToDOM('#player-two-board', board)
    }
}
