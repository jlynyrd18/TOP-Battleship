import Gameboard from './game/gameboard.js';
import Ship from './game/ship.js';
import Player from './game/player.js';
import {renderBoard} from './UI/render.js';
import {renderMissedShots} from './UI/render.js';
import {hitMiss} from './UI/render.js';
import {winlose} from './UI/render.js';

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

//turn and game over tracker
let gameover = false;
let turn = 1;

const start = document.getElementById('start');

function startGame() {
    renderBoard(leonard.gameBoard, playerboard, null, false);
    renderBoard(computer.gameBoard, computerboard, squareAttacked, true);
}    

function squareAttacked([i,j], square) {
    if(gameover) return;
    let sameShot = isDuplicateAttacks([i,j]);
    if(sameShot === true) return;
    let shipHitMiss = computer.gameBoard.receiveAttack([i,j]);
    renderMissedShots([i,j]);
    hitMiss(shipHitMiss, [i,j], square);
    if(computer.gameBoard.allSunk()){
        winlose();
        gameover = true;
    }
}

let playerShots = [];
let computerShots = [];

function isDuplicateAttacks(x) {
    const shotCheck = (element) => element[0] === x[0] && element[1] === x[1];
    if(playerShots.some(shotCheck)) {
        console.log('Try Again');
        return true;
    }else {
        playerShots.push(x);
    }
}

start.addEventListener('click', startGame);
