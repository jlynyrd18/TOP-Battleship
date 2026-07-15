const shotBoard = document.getElementById('shots');
const gameBoards = document.getElementsByClassName('gameboard');
const playerboard = document.getElementById('playerboard');
const computerboard = document.getElementById('computerboard');


export function renderMissedShots([i,j]) {
    const shot = document.createElement('div');
    shot.innerText = [i,j] + `was attacked`;
    shotBoard.append(shot);
}

export function renderBoard(x, y, z) {
    for(let i = 1; i < 11; i++) {
        for(let j = 1; j < 11; j++) {
            let square = document.createElement('div');
            square.innerText = [i,j]; 
            square.className = 'square';
            if(checkForShip(i,j,x) === true) {
                square.classList.add('ship');
            }
            square.addEventListener('click',() => {
                z([i,j]);
            })
            y.append(square);
        }
    }
}

function checkForShip(i,j,x) {
    const shipCheck = (element) => element[0] === i && element[1] === j;

    for(let a = 0; a < x.ships.length; a++) {
            if(x.ships[a].position.some(shipCheck)){
                return true;
            }
        }
        return false;
}

//compter board shouldn't have boats displayed
//hit and miss class list will need to be added along with color change
//player currently can click his own board and shouldn't be able to