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
        if(boat.shipLength + x - 1 < 0) return false;
        if(boat.shipLength + y - 1 < 0) return false;
        if(direction === 'horizontal') {
            let starting = [x,y];
            let occupiedSpots = [];
    
            for(let i = 0; i < boat.shipLength; i++) {
                let newPoint = [x + i, y];
                occupiedSpots.push(newPoint);
                if(this.overLapCheck(newPoint) === false) return false;
            }
            this.ships.push({ship: boat, position: occupiedSpots, direction: direction});
            console.log(this.ships[0].position);
        }else if(direction === 'vertical') {
            let starting = [x,y];
            let occupiedSpots = [];
    
            for(let i = 0; i < boat.shipLength; i++) {
                let newPoint = [x, y + i];
                occupiedSpots.push(newPoint);
                if(this.overLapCheck(newPoint) === false) return false;
            }
            this.ships.push({ship: boat, position: occupiedSpots, direction: direction});
            console.log(this.ships[0].position);
        }
    }

    overLapCheck(array) {
        for(let i = 0; i < this.ships.length; i++) {
            for(let j = 0; j < this.ships[i].position.length; j++) {
                let boardCords = this.ships[i].position[j];
                if(boardCords[0] === array[0] && boardCords[1] === array[1]) return false;
            }
        }
    }

    receiveAttack() {
        //takes a pair of coordinates, determines whether or not the attack hit a ship and then sends the ‘hit’ function to the correct ship, 
        // or records the coordinates of the missed shot.
    }
}