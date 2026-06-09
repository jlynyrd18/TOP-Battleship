import Gameboard from './gameboard.js';
import Ship from './ship.js';

test('Place ship as specific coords', () => {
    expect(createBoard()).toBeTruthy;
})

const board = new Gameboard();
const boat = new Ship(2);