import Gameboard from './gameboard';

export default class Player {
    constructor(x, y) {
        this.player = `Admiral ${x}`;
        this.playerType = y;
        this.gameBoard = new Gameboard;
    }
}