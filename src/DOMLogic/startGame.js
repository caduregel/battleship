import { Player } from '../gameLogic/player'
import { createBoard } from './createBoard'


export const initializeGame = () => {
    const form = document.querySelector('#play_game_form')
    form.addEventListener("submit", (event) => {
        event.preventDefault()

        const size = parseInt(document.querySelector("#game_size").value);

        const playerOne = new Player(false, size)
        const computer = new Player(true, size)

        document.querySelector('#play_game_container').style.display = 'none'

        createBoard()

        return { playerOne, computer }
    })
}
