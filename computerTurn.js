let aiShots = [];

export function aiCoords () {
    let x = Math.floor(Math.random() * 10 + 1);
    let y = Math.floor(Math.random() * 10 + 1);
    let coord = [x,y];
    const shotCheck = (element) => element[0] === coord[0] && element[1] === coord[1];
    if(aiShots.some(shotCheck)) {
        return aiCoords();
    }else {
        aiShots.push(coord);
        return coord;
    }
}

export function resetAiCoords() {
    aiShots = [];
}