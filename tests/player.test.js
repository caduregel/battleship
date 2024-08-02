import { Player } from "../src/gameLogic/player";

test('check if player is actually set to computer', () => {
    const player = new Player(true)
    expect(player.computer).toBeTruthy()

})