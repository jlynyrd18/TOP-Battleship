let shotBoard = document.getElementById('shots');
const turncounter = document.getElementById('turncounter');
const playerboard = document.getElementById('playerboard');
const computerboard = document.getElementById('computerboard');


export function renderMissedShots([i,j], y) {
    const shot = document.createElement('div');
    if(y === 'player') {
        shot.innerText = `Player attacks ` + [i,j];
    }else if(y === 'computerPlayer') {
        shot.innerText = `Computer attacks ` + [i,j];
    }else{
        shot.innerText = 'Invalid Shot';
    }
    shotBoard.append(shot);
}

export function renderBoard(x, y, w, z) {
    for(let i = 1; i < 11; i++) {
        for(let j = 1; j < 11; j++) {
            let square = document.createElement('div');
            square.dataset.coords = `${i},${j}`;
            square.className = 'square';
            if(checkForShip(i,j,x) === true) {
                square.classList.add('ship');
            }
            if(w === true) {
                square.classList.add('true');
            }else {
                square.classList.add('false');
            }
            if(y === computerboard) {
                square.addEventListener('click',() => {
                z([i,j]);  
                })
            }
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
export function hitMiss(x, y) {
    //convert x array to string format and find the square it belongs to, then add hit or miss
    if(y === 'player') {
        let square = computerboard.querySelector(`[data-coords="${x[0]},${x[1]}"]`);
        if(square.classList.contains('ship')){
            square.classList.add('hit');
        }else {
            square.classList.add('miss');
        }
    }
    if(y === 'computerPlayer') {
        let square = playerboard.querySelector(`[data-coords="${x[0]},${x[1]}"]`);
        if(square.classList.contains('ship')){
            square.classList.add('hit');
        }else {
            square.classList.add('miss');
        }
    }
}

//win conditions, when either player has all their ships sunk, player should be presented with a win lose popup
export function winlose(x) {
    if(x === 'Computer') {
        turncounter.innerText = `${x} wins`;
    }else if(x === 'Player'){
        turncounter.innerText = `${x} wins`;
    }else{
        turncounter.innerText = 'Draw';
    }
}

