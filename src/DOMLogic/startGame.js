import { Player } from '../gameLogic/player'
import { displayBoard } from './setupGame'


export const initializeGame = () => {
    const form = document.querySelector('#play_game_form')
    form.addEventListener("submit", (event) => {
        event.preventDefault()

        // const size = parseInt(document.querySelector("#game_size").value);

<<<<<<< HEAD
        const playerOne = new Player(false, 10, 1)
        const computer = new Player(true, 10, 2)
=======
        const playerOne = new Player(false, size, 1)
        const computer = new Player(true, size, 2)
>>>>>>> a85bed8

        document.querySelector('#play_game_container').style.display = 'none'
        displayBoard(playerOne)
        displayBoard(computer)

        return { playerOne, computer }
    })
}
