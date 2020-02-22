let foodLevel;
let waterLevel;
let happinessLevel;
let energyLevel;

function initializeStats() {
    populationLevel = 100;
    foodLevel = 100;
    waterLevel = 100;
    happinessLevel = 100;
    energyLevel = 100;
}

function updateStats() {
    document.getElementById('populationLevel').innerHTML = populationLevel;
    document.getElementById('waterLevel').innerHTML = waterLevel;
    document.getElementById('foodLevel').innerHTML = foodLevel;
    document.getElementById('happinessLevel').innerHTML = happinessLevel;
    document.getElementById('energyLevel').innerHTML = energyLevel;
}