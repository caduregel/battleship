import { Game } from '../gameLogic/game'
import { displayBoard } from './setupGame'


export const initializeGame = () => {
    const form = document.querySelector('#play_game_form')
    form.addEventListener("submit", (event) => {
        event.preventDefault()

        // const size = parseInt(document.querySelector("#game_size").value);

        const game = new Game()

        document.querySelector('#play_game_container').style.display = 'none'
        displayBoard(game.playerOne, game)
        displayBoard(game.computer, game)

    })
}
