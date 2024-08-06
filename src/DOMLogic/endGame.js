import { playerTurn } from "./setupGame"

export const endGame = (winner) => {
    const boardContainer = document.querySelector("#boards-container")
    boardContainer.style.display = 'none'
    const endGameH1 = document.querySelector('#end_game_screen')
    endGameH1.style.display = "flex"
    endGameH1.textContent = winner + ' has won the game'
}