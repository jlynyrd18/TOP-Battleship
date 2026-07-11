import Gameboard from './gameboard.js';

export default class Player {
    constructor(x, y) {
        this.player = `Admiral ${x}`;
        this.playerType = y;
        this.gameBoard = new Gameboard;
    }
}