const shotBoard = document.getElementById('shots');
const gameBoards = document.getElementsByClassName('gameboard');
const playerboard = document.getElementById('playerboard');
const computerboard = document.getElementById('computerboard');


function renderMissedShots() {
    console.log(gameBoards);
}

export function renderBoard(squareAttacked) {
    for(let i = 1; i < 11; i++) {
        for(let j = 1; j < 11; j++) {
            let square = document.createElement('div');
            square.innerText = [i,j]; 
            square.className = 'square';
            playerboard.append(square);
        }
    }
    for(let i = 1; i < 11; i++) {
        for(let j = 1; j < 11; j++) {
            let square = document.createElement('div');
            square.className = 'square';
            square.innerText = [i,j]; 
            square.addEventListener('click', () => {
                squareAttacked([i,j]);
            })
            computerboard.append(square);
        }
    }
}

