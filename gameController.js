import Gameboard from './game/gameboard.js';
import Ship from './game/ship.js';
import Player from './game/player.js';
import {renderBoard} from './UI/render.js';

//Player objects
const leonard = new Player('Leonard', 'human');
const computer = new Player('Computer', 'computer');

//4 ships to be placed on the board
const carrier = new Ship(5);
const battleship = new Ship(4);
const cruiser = new Ship(3);
const submarine = new Ship(3);
const destroyer = new Ship(2);

//coords for the ships 
leonard.gameBoard.placeShip(carrier, 1,1, 'vertical');
leonard.gameBoard.placeShip(battleship, 4,4, 'vertical');
leonard.gameBoard.placeShip(cruiser, 7,1, 'horizontal');
leonard.gameBoard.placeShip(submarine, 1,6, 'horizontal');
leonard.gameBoard.placeShip(destroyer, 8,8, 'vertical');

computer.gameBoard.placeShip(carrier, 1,1, 'vertical');
computer.gameBoard.placeShip(battleship, 4,4, 'vertical');
computer.gameBoard.placeShip(cruiser, 7,1, 'horizontal');
computer.gameBoard.placeShip(submarine, 1,6, 'horizontal');
computer.gameBoard.placeShip(destroyer, 8,8, 'vertical');

console.log(leonard.gameBoard);
console.log(computer.gameBoard);

const start = document.getElementById('start');
const compBoard = document.getElementById('computerboard');

function startGame() {
    renderBoard(squareAttacked);
}

function squareAttacked([i,j]) {
    computer.gameBoard.receiveAttack([i,j]);
}

start.addEventListener('click', startGame);
