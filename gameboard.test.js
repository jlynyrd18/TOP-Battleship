import Gameboard from './gameboard.js';
import Ship from './ship.js';

const board = new Gameboard();

test('Verify no ships on board', () => {
    expect(board.ships.length).toBe(0);
})

const board2 = new Gameboard();
const boat = new Ship(2);
board2.storeShip(boat);

test('Verify ship is ready to place', () => {
    expect(board2.ships.length).toBe(1);
})