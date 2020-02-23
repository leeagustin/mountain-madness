let engineerCost = [1, 1, 2, 2, 3, 3, 4, 4];
let maxUpgradeLevel = 8;

let timesFoodUpgraded = 0;
let timesWaterUpgraded = 0;
let timesEnergyUpgraded = 0;

function upgradeFoodHarvest () {
    var engineerUpgradeCost = engineerCost[timesFoodUpgraded];

    if (engineers >= engineerUpgradeCost && timesFoodUpgraded <= maxUpgradeLevel) {
        engineers -= engineerUpgradeCost;
        foodHarvestingRate *= 2;
    }

    timesFoodUpgraded += 1;
}

function upgradeWaterHarvest () {
    var engineerUpgradeCost = engineerCost[timesWaterUpgraded];

    if (engineers >= engineerUpgradeCost && timesWaterUpgraded <= maxUpgradeLevel) {
        engineers -= engineerUpgradeCost;
        waterHarvestingRate *= 2;
    }

    timesWaterUpgraded += 1;
}

function upgradeEnergyHarvest () {
    var engineerUpgradeCost = engineerCost[timesEnergyUpgraded];

    if (engineers >= engineerUpgradeCost && timesEnergyUpgraded <= maxUpgradeLevel) {
        engineers -= engineerUpgradeCost;
        energyHarvestingRate *= 2;
    }

    timesEnergyUpgraded += 1;
}