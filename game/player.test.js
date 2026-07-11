import Gameboard from './gameboard.js';
import Ship from './ship.js';
import Player from './player.js';

const player1 = new Player('Leonard', 'human');
const player2 = new Player('Computer', 'computer');

test('One player is human and named Admiral', () => {
    expect(player1.player).toBe('Admiral Leonard');
})

test('One player is computer named Computer', () => {
    expect(player2.player).toBe('Admiral Computer');
})

test('Player1 has a gameboard, with 0 ships', () => {
    expect(player1.gameBoard.ships.length).toBe(0);
})

test('Player1 has a gameboard, with 0 ships', () => {
    expect(player2.gameBoard.ships.length).toBe(0);
})

test('Player1 is a human', () => {
    expect(player1.playerType).toBe('human');
})

test('Player2 is a computer', () => {
    expect(player2.playerType).toBe('computer');
})