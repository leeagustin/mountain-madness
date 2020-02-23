let foodHarvestingRate = 20;
let waterHarvestingRate = 48;
let harvestingFood = false;
let harvestingWater = false;

function harvestFood() {
    if (harvestingFood)
        return;

    harvestingFood = true;
    setTimeout(() => {
        foodLevel += harvestingRate;
        harvestingFood = false;
    }, 10000);
}

function harvestWater() {
    if (harvestingWater)
        return;

    harvestingWater = true;
    setTimeout(() => {
        waterLevel += waterHarvestingRate;
        harvestingWater = false;
    }, 24000);
}

function harvestMetal() {
    if (harvestingMetal)
        return;
    
    harvestingMetal = true;
    setTimeout(() => {
        metalLevel += 100;
        harvestingMetal = false;
    });
}

function upgradeFood() {
    if (engineers >= 2) {
        foodHarvestingRate *= 2;
        engineers -= 2;
    }
}

function upgradeWater() {
    if (engineers >= 2) {
        waterHarvestingRate *= 2;
        engineers -= 2;
    }
}

function upgradeCurrentEnergy() {
    if (engineers >= 2) {
        currentEnergyLevel *= 2;
    }
}