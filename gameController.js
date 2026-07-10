import Gameboard from './gameboard.js';
import Ship from './ship.js';
import Player from './player.js';

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
start.addEventListener('click', startGame);

function startGame() {
    renderBoard();
}

 function renderBoard() {
    for(let i = 1; i < 11; i++) {
        for(let j = 1; j < 11; j++) {
            let square = document.createElement('div');
            square.innerText = [i,j]; 
            playerboard.append(square);
        }
    }
}