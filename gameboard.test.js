import Gameboard from './gameboard.js';
import Ship from './ship.js';

const board = new Gameboard();

test('Verify no ships on board', () => {
    expect(board.ships.length).toBe(0);
})

const boat = new Ship(2);

test('Verify ship is ready to place', () => {
    expect(board.ships.length).toBe(1);
})