let populationLevel;
let foodLevel;
let waterLevel;
let happinessLevel;
let currentEnergyLevel;
let requiredEnergyLevel;
let metalLevel;

let engineers;
let scientists;

function initializeStats() {
    populationLevel = 1000;
    foodLevel = 50;
    waterLevel = 50;
    metalLevel = 0;
    happinessLevel = 100;
    currentEnergyLevel = 1200;
    requiredEnergyLevel = 900;
    engineers = 0;
    scientists = 0;

    updateStats();
}

function updateStats() {
    setTimeout(() => {
        updateStats();
    }, 1000);

    updateFoodAndWater();
    updatePopulation();
    updateEnergyRequirement();
}

function updateFoodAndWater() {
    waterLevel -= Math.floor(populationLevel / 1000);
    foodLevel -= Math.floor(populationLevel / 1000);

    if (waterLevel < 0)
        waterLevel = 0;
    if (foodLevel < 0)
        foodLevel = 0;
}

function updatePopulation() {
    populationLevel += Math.floor(populationLevel / 250);

    if (foodLevel <= 0) {
        let dead = Math.floor(populationLevel / 125);
        populationLevel -= dead;
        happinessLevel -= Math.floor(dead / 4);
    }
    if (waterLevel <= 0) {
        let dead = Math.floor(3 * populationLevel / 250);
        populationLevel -= dead;
        happinessLevel -= Math.floor(dead / 4);
    }
}

function updateHappiness() {
    if (requiredEnergyLevel > currentEnergyLevel)
        happiness -= (requiredEnergyLevel - currentEnergyLevel) / 25;
}

function updateEnergyRequirement() {
    requiredEnergyLevel = 900 + populationLevel / 10;
}