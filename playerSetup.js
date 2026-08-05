export function playerSetup() {
const carrierCoord = document.getElementById('carrier').value;
const carrierOrient = document.getElementById('carrierOrientation').value;
const battleshipCoord = document.getElementById('battleship').value;
const battleshipOrient = document.getElementById('battleshipOrientation').value;
const cruiserCoord = document.getElementById('cruiser').value;
const cruiserOrient = document.getElementById('cruiserOrientation').value;
const submarineCoord = document.getElementById('submarine').value;
const submarineOrient = document.getElementById('submarineOrientation').value;
const destroyerCoord = document.getElementById('destroyer').value;
const destroyerOrient = document.getElementById('destroyerOrientation').value;
return [[carrierCoord, carrierOrient], [battleshipCoord, battleshipOrient], [cruiserCoord, cruiserOrient], 
    [submarineCoord, submarineOrient], [destroyerCoord, destroyerOrient]];
}