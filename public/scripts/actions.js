let foodHarvestingRate = 20;
let waterHarvestingRate = 26;
let metalHarvestingRate = 50;
let harvestingFood = false;
let harvestingWater = false;
let harvestingMetal = false;

function harvestFood() {
    if (harvestingFood)
        return;

    harvestingFood = true;
    setTimeout(() => {
        foodLevel += foodHarvestingRate;
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
    }, 13000);
}

function harvestMetal() {
    if (harvestingMetal)
        return;
    
    harvestingMetal = true;
    setTimeout(() => {
        metalLevel += metalHarvestingRate;
        harvestingMetal = false;
    }, 15000);
}