import Gameboard from './gameboard.js';
import Ship from './ship.js';
import Player from './player.js';

const players = new Player();

test('One player is human and named Admiral', () => {
    expect(players.player1).toBe('Admiral');
})

test('One player is computer named Computer', () => {
    expect(players.player2).toBe('Computer');
})