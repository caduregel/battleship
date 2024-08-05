import { playerTurn } from "./setupGame"

export const endGame = () => {
    const boardContainer = document.querySelector("#boards-container")
    boardContainer.style.display = 'none'
    const playGameContainer = document.querySelector('#play_game_container')
    playGameContainer.style.display = 'flex'
    playerTurn.setTurnToOne()
}