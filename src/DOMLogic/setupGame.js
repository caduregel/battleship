import { loadBoardToDOM } from "./loadBoard"
import { placeShipDOM } from "./placeShip"

export const playerTurn = {
    turn: 1,
    switchTurn: function () {
        if (this.turn === 1) {
            this.turn = 2
        } else {
            this.turn = 1
        }
    },
    setTurnToOne: function () {
        this.turn = 1
    }
}


export const displayBoard = (game) => {
    // First populate board, later need to work on making the player be able to place ships
    document.querySelector('#boards-container').style.display = 'flex'
    function loadGames() {
        document.querySelector('#player-one-board').innerHTML = ''
        document.querySelector('#player-two-board').innerHTML = ''

        document.querySelector('#ship_length_display').textContent = ''
        document.querySelector('#rotation_display').textContent = ''

        loadBoardToDOM('#player-two-board', game.computer.gameBoard, game)
        loadBoardToDOM('#player-one-board', game.playerOne.gameBoard, game)

    }

    placeShipDOM(game).then(() => {
        // Once all ships are placed, load the game
        loadGames();

        // Example: Place computer ships and start the game
        game.computer.gameBoard.placeShip([7, 0], 2, 'north');
        game.computer.gameBoard.placeShip([3, 0], 2, 'east');
        game.computer.gameBoard.placeShip([3, 4], 4, 'east');
        game.computer.gameBoard.placeShip([0, 0], 3, 'south');

    });
}
