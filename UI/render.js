const shotBoard = document.getElementById('shots');
const gameBoards = document.getElementsByClassName('gameboard');
const playerboard = document.getElementById('playerboard');
const computerboard = document.getElementById('computerboard');


export function renderMissedShots([i,j]) {
    const shot = document.createElement('div');
    shot.innerText = [i,j] + ` was attacked`;
    shotBoard.append(shot);
}

export function renderBoard(x, y, z, w) {
    for(let i = 1; i < 11; i++) {
        for(let j = 1; j < 11; j++) {
            let square = document.createElement('div');
            square.innerText = [i,j]; 
            square.className = 'square';
            if(checkForShip(i,j,x) === true) {
                square.classList.add('ship');
            }
            if(w === true) {
                square.classList.add('true');
            }else {
                square.classList.add('false');
            }
            square.addEventListener('click',() => {
                z([i,j], square);
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

//hit and miss class list will need to be added along with color change
export function hitMiss(x, y, square) {
    //find the value of i,j and if classList has ship in it add classlist .hit else .miss
    if(x === true) {
        square.classList.add('hit');
    }else{
        square.classList.add('miss');
    }
}


//player currently can click his own board and shouldn't be able to