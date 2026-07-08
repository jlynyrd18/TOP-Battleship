import Gameboard from './gameboard.js';
import Ship from './ship.js';
import Player from './player.js';

const players = new Player();

// test('One player is human and named Admiral', () => {
//     expect(players.player1).toBe('Admiral');
// })

// test('One player is computer named Computer', () => {
//     expect(players.player2).toBe('Computer');
// })

test('Player1 has a gameboard, with 0 ships', () => {
    expect(players.player1Board.ships.length).toBe(0);
})

test('Player1 has a gameboard, with 0 ships', () => {
    expect(players.player2Board.ships.length).toBe(0);
})