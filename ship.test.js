import Ship from './ship.js';

test('ship length is 2', () => {
    expect(new Ship(2).shipLength).toBe(2);
})

test('ship starts with 0 hits', () => {
    expect(new Ship(2).hits).toBe(0);
})

test('ship starts not sunk', () => {
    expect(new Ship(2).isSunk).toBe(false);
})

test('ship takes a hit and hit goes up by 1', () => {
    expect(new Ship(2).hit).toBe(1);
})