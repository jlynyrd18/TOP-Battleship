export default class Gameboard {
    constructor() {
        this.ships = [];
    }

    storeShip(boat) {
        this.ships.push(boat);
    }

    placeShip(boat, x, y, direction) {
        if(boat.shipLength + x - 1 > 9)return false;
        if(boat.shipLength + y - 1 > 9)return false;
        if(direction === 'horizontal') {
            let starting = [x,y];
            let occupiedSpots = [];
    
            for(let i = 0; i < boat.shipLength; i++) {
                let newPoint = [x + i, y];
                occupiedSpots.push(newPoint);
            }
            this.ships.push({ship: boat, position: occupiedSpots, direction: direction});
        }else if(direction === 'vertical') {
            let starting = [x,y];
            let occupiedSpots = [];
    
            for(let i = 0; i < boat.shipLength; i++) {
                let newPoint = [x, y + i];
                occupiedSpots.push(newPoint);
            }
            this.ships.push({ship: boat, position: occupiedSpots, direction: direction});
        }
    }
}