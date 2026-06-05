import Ship from './ship.js';

test('ship length is 2', () => {
    expect(boat.shipLength).toBe(2);
})

test('ship starts with 0 hits', () => {
    expect(boat.hits).toBe(0);
})

test('ship starts not sunk', () => {
    expect(boat.isSunk).toBe(false);
})

test('ship takes a hit and hit goes up by 1', () => {
    expect(boat.hit()).toBe(boat.hits);
})

test('ship takes enough hits to sink', () => {
    expect(boat.hit()).toBe(boat.isSunk);
})

const boat = new Ship(2);