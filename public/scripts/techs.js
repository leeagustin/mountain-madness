let engineerCost = [1, 1, 2, 2, 3, 3, 4, 4];
let maxUpgradeLevel = 8;
let metalCostPerLevel = 100;

let timesFoodUpgraded = 0;
let timesWaterUpgraded = 0;
let timesMetalUpgraded = 0;
let timesEnergyUpgraded = 0;

function upgradeFoodHarvest () {
    var engineerUpgradeCost = engineerCost[timesFoodUpgraded];

    if (timesFoodUpgraded >= maxUpgradeLevel) {
        // You have reached the maximum level for this technology
        return;
    } else if (engineers < engineerUpgradeCost) {
        // You do not have enough engineers
        return;
    } else if (metalLevel < metalCostPerLevel * (timesFoodUpgraded + 1)) {
        // You do not have enough metal
        return;
    } else {
        engineers -= engineerUpgradeCost;
        foodHarvestingRate *= 2;
    }

    timesFoodUpgraded += 1;
}

function upgradeWaterHarvest () {
    var engineerUpgradeCost = engineerCost[timesWaterUpgraded];

    if (timesWaterUpgraded >= maxUpgradeLevel) {
        // You have reached the maximum level for this technology
    } else if (engineers < engineerUpgradeCost) {
        // You do not have enough engineers
    } else if (metalLevel < metalCostPerLevel * (timesWaterUpgraded + 1)) {
        // You do not have enough metal
    } else {
        engineers -= engineerUpgradeCost;
        waterHarvestingRate *= 2;
    }

    timesWaterUpgraded += 1;
}

function upgradeMetalHarvest () {
    var engineerUpgradeCost = engineerCost[timesMetalUpgraded];

    if (timesMetalUpgraded > maxUpgradeLevel) {
        // You have reached the maximum level for this technology
    } else if (engineers < engineerUpgradeCost) {
        // You do not have enough engineers
    } else if (metalLevel < metalCostPerLevel * (timesMetalUpgraded + 1)) {
        // You do not have enough metal
    } else {
        engineers -= engineerUpgradeCost;
        metalHarvestingRate *= 2;
    }

    timesMetalUpgraded += 1;
}

function upgradeEnergy () {
    var engineerUpgradeCost = engineerCost[timesEnergyUpgraded];

    if (timesEnergyUpgraded > maxUpgradeLevel) {
        // You have reached the maximum level for this technology
    } else if (engineers < engineerUpgradeCost) {
        // You do not have enough engineers
    } else if (metalLevel < metalCostPerLevel * (timesEnergyUpgraded + 1)) {
        // You do not have enough metal
    } else {
        engineers -= engineerUpgradeCost;
        currentEnergyLevel *= 1.5;
    }

    timesEnergyUpgraded += 1;
}