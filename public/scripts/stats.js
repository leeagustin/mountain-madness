let populationLevel;
let foodLevel;
let waterLevel;
let happinessLevel;
let currentEnergyLevel;
let requiredEnergyLevel;
let metalLevel;
let harvestFoodText = document.getElementById('harvestFoodText');
let harvestWaterText = document.getElementById('harvestWaterText');
let harvestMetalText = document.getElementById('harvestMetalText');
let foodRateModifier = 1;
let waterRateModifier = 1;

let engineers = 20;

function initializeStats() {
    populationLevel = 1500;
    foodLevel = 50;
    waterLevel = 50;
    metalLevel = 0;
    happinessLevel = 100;
    currentEnergyLevel = 1200;
    requiredEnergyLevel = 900;
    engineers = 0;

    harvestFoodText.innerHTML = 'Harvest ' + foodHarvestingRate + ' Food';
    harvestWaterText.innerHTML = 'Harvest ' + waterHarvestingRate + ' Water';
    harvestMetalText.innerHTML = 'Harvest ' + metalHarvestingRate + ' Metal';

    updateStats();
}

function updateStats() {
    setTimeout(() => {
        updateStats();
    }, 1000);

    updatePopulation();
    updateFood();
    updateWater();
    updateHappiness();
    updateEnergyRequirement();
}

function updatePopulation() {
    populationLevel += Math.floor(populationLevel / 150);

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

function updateFood() {
    foodLevel -= Math.floor(populationLevel * foodRateModifier / 1000);
    if (foodLevel < 0)
        foodLevel = 0;
}

function updateWater() {
    waterLevel -= Math.floor(populationLevel * waterRateModifier / 1000);
    if (waterLevel < 0)
        waterLevel = 0;
}

function updateHappiness() {
    if (requiredEnergyLevel > currentEnergyLevel)
        happinessLevel -= Math.ceil((requiredEnergyLevel - currentEnergyLevel) / 25);

    if (happinessLevel <= 0)
        window.location.href = '/gameover';
}

function updateEnergyRequirement() {
    requiredEnergyLevel = 900 + populationLevel / 10;
}