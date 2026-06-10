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

const board3 = new Gameboard();
const boat2 = new Ship(2);
board3.placeShip(boat2, 0,0);

test('Ship can be placed on board', () => {
    expect(board3.ships[0].position).toEqual([0,0]);
})