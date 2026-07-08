import Gameboard from './gameboard';

export default class Player {
    constructor() {
        this.player1 = 'Admiral'
        this.player2 = 'Computer';
        this.player1Board = new Gameboard;
        this.player2Board = new Gameboard;
    }
}