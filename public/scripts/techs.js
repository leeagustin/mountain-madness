let cost = [1, 1, 2, 2, 3, 3, 4, 4];
let maxUpgradeLevel = 8;

let timesFoodUpgraded = 0;
let timesWaterUpgraded = 0;
let timesEnergyUpgraded = 0;

function upgradeFoodHarvest () {
    var upgradeCost = cost[timesFoodUpgraded];

    if (engineers >= upgradeCost && timesFoodUpgraded <= maxUpgradeLevel) {
        engineers -= upgradeCost;
        foodHarvestingRate *= 2;
    }

    timesFoodUpgraded += 1;
}

function upgradeWaterHarvest () {
    var upgradeCost = cost[timesWaterUpgraded];

    if (engineers >= upgradeCost && timesWaterUpgraded <= maxUpgradeLevel) {
        engineers -= upgradeCost;
        waterHarvestingRate *= 2;
    }

    timesWaterUpgraded += 1;
}

function upgradeEnergyHarvest () {
    var upgradeCost = cost[timesEnergyUpgraded];

    if (engineers >= upgradeCost && timesEnergyUpgraded <= maxUpgradeLevel) {
        engineers -= upgradeCost;
        energyHarvestingRate *= 2;
    }

    timesEnergyUpgraded += 1;
}