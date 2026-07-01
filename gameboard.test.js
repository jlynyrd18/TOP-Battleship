import Gameboard from './gameboard.js';
import Ship from './ship.js';

// const board = new Gameboard();

// test('Verify no ships on board', () => {
//     expect(board.ships.length).toBe(0);
// })

// const board2 = new Gameboard();
// const boat = new Ship(2);
// board2.storeShip(boat);

// test('Verify ship is ready to place', () => {
//     expect(board2.ships.length).toBe(1);
// })

// const board3 = new Gameboard();
// const boat2 = new Ship(2);
// board3.placeShip(boat2, 0,0);

// test('Ship can be placed on board', () => {
//     expect(board3.ships[0].position).toEqual([0,0]);
// })

// const board4 = new Gameboard();
// const boat3 = new Ship(2);
// board4.placeShip(boat3, 0,0, 'horizontal');

// test('Ship is placed horizontal', () => {
//     expect(board4.ships[0].direction).toEqual('horizontal');
// })

// test('Position should have all spots ship occupies', () => {
//     expect(board4.ships[0].position).toEqual([[0,0],[1,0]]);
// })

// const board5 = new Gameboard();
// const boat4 = new Ship(3);
// board5.placeShip(boat4, 0,0, 'vertical');

// test('Ship is placed vertical and spots occupied is output', () => {
//     expect(board5.ships[0].position).toEqual([[0,0], [0,1], [0,2]]);
// })

// const board6 = new Gameboard();
// const boat5 = new Ship(3);
// board6.placeShip(boat5, 8,1, 'horizontal');

// test('Ship extends beyond board and should be rejected', () => {
//     expect(board6.ships.length).toBe(0);
// })

const board7 = new Gameboard();
const boat6 = new Ship(3);
const boat7 = new Ship(4);
board7.placeShip(boat6, 1,1, 'horizontal');
board7.placeShip(boat7, 1,1, 'vertical');

// test('First ship should be placed that can not be overlapped', () => {
//     expect(board7.ships.length).toBe(1);
// })

// test('Placing of second ship should be rejected due to overlap', () => {
//     expect(board7.placeShip(boat7, 1,1, 'vertical')).toBe(false);
// })

// test('A cord is picked and a ship is in the cord', () => {
//     expect(board7.receiveAttack([2,1])).toBe('hit');
// })

// test('A cord is picked and it misses any ship', () => {
//     expect(board7.receiveAttack([3,3])).toBe('miss');
// })

test('Get the hit counter of the boat', () => {
    expect(board7.receiveAttack([1,1])).toBe(1);
})