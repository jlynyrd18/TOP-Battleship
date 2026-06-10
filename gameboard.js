export default class Gameboard {
    constructor() {
        this.ships = [];
    }

    storeShip(boat) {
        this.ships.push(boat);
    }

    placeShip(boat, x, y) {
        this.ships.push({ship: boat, position: [x,y]});
    }
}