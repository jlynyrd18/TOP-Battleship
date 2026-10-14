import Gameboard from './game/gameboard.js';
import Ship from './game/ship.js';
import Player from './game/player.js';
import {renderBoard} from './UI/render.js';
import {renderMissedShots} from './UI/render.js';
import {hitMiss} from './UI/render.js';
import {winlose} from './UI/render.js';
import {aiCoords} from './computerTurn.js';
import {clearAiShots} from './computerTurn.js';
import {playerSetup} from './playerSetup.js';

//Player objects
const leonard = new Player('Leonard', 'human');
const computer = new Player('Computer', 'computer');

//5 ships for player board
function createPlayerShips() {
    const carrier = new Ship(5);
    const battleship = new Ship(4);
    const cruiser = new Ship(3);
    const submarine = new Ship(3);
    const destroyer = new Ship(2);

    return [carrier, battleship, cruiser, submarine, destroyer];
}

//5 ships for computer board
function createAiShips() {
    const carrier2 = new Ship(5);
    const battleship2 = new Ship(4);
    const cruiser2 = new Ship(3);
    const submarine2 = new Ship(3);
    const destroyer2 = new Ship(2);
    return [carrier2, battleship2, cruiser2, submarine2, destroyer2];
}

function placePlayerShips() {
    let ships = createPlayerShips();
    let coordsOrient = playerSetup();

    let x = parseInt(coordsOrient[0][0][0]);
    let y = parseInt(coordsOrient[0][0][2])
    
    //place ship works for one ships work on for loop next
    leonard.gameBoard.placeShip(ships[0], x, y, coordsOrient[0][1]);
    console.log(coordsOrient);
    console.log(ships[0],coordsOrient[0], x, y, coordsOrient[0][1]);
}
//coords for the ships 
 //leonard.gameBoard.placeShip(carrier, 1,1, 'vertical');
// leonard.gameBoard.placeShip(battleship, 4,4, 'vertical');
// leonard.gameBoard.placeShip(cruiser, 7,1, 'horizontal');
// leonard.gameBoard.placeShip(submarine, 1,6, 'horizontal');
// leonard.gameBoard.placeShip(destroyer, 8,8, 'vertical');

function placeAiShips(ships) {
    for(let i = 0; i < ships.length; i++) {
        let x = Math.floor(Math.random() * 10 + 1);
        let y = Math.floor(Math.random() * 10 + 1);
        let z = Math.floor(Math.random() * 2 + 1);

        if(z === 1)z = 'vertical';
        else z = 'horizontal';

        if(computer.gameBoard.placeShip(ships[i], x,y, z) === false){
            i--;
            console.log('Failed placement');
        }
    }
}

//turn and game over tracker
let gameover = false;
let turn = 'player';
let playerShots = [];

const start = document.getElementById('start');
let shotBoard = document.getElementById('shots');
const turnCounter = document.getElementById('turncounter');

function startGame() {
    //if board already rendered replace board
    gameover = false;
    turn = 'player';
    turnCounter.innerText = '';
    playerboard.innerHTML = '';
    computerboard.innerHTML = '';
    shotBoard.innerHTML = '';
    playerShots = [];
    placePlayerShips();
    clearAiShots();
    placeAiShips(createAiShips());
    renderBoard(leonard.gameBoard, playerboard, false, turnTracker);
    renderBoard(computer.gameBoard, computerboard, true, turnTracker);
}    

function squareAttacked([i,j]) {
    // console.log(computer.gameBoard.ships);
    if(gameover) return;
    if(turn === 'player') {
        let sameShot = isDuplicateAttacks([i,j]);
        if(sameShot === true) return false;
    }
    if(turn === 'player'){
        computer.gameBoard.receiveAttack([i,j]);
    }else {
        leonard.gameBoard.receiveAttack([i,j]);
    }
    renderMissedShots([i,j], turn);
    hitMiss([i,j], turn);
    if(computer.gameBoard.allSunk()){
        winlose('Player');
        gameover = true;
    }
    if(leonard.gameBoard.allSunk()) {
        winlose('Computer');
        gameover = true;
    }
}

function isDuplicateAttacks(x) {
    const shotCheck = (element) => element[0] === x[0] && element[1] === x[1];
    if(playerShots.some(shotCheck)) {
        alert('Try a different square');
        turn = 'player';
        return true;
    }else {
        playerShots.push(x);
    }
}

//turn tracker function
function turnTracker (x, y) {
    //what the player can and can't do during their turn
    if(turn === 'player') {
        if(squareAttacked(x, y) === false){
            turn = 'player';
        }else{
            turn = 'computerPlayer';
        }
        
    }
    //what the player can and can't do not during their turn
    if(turn === 'computerPlayer') {
        let computerCoords = aiCoords();
        squareAttacked(computerCoords);
        turn = 'player';
    }
    
}

start.addEventListener('click', startGame);
