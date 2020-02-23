let engineerCost = [1, 1, 2, 2, 3, 3, 4, 4];
let maxUpgradeLevel = 8;
let metalCostPerLevel = 100;

let timesFoodUpgraded = 0;
let timesWaterUpgraded = 0;
let timesMetalUpgraded = 0;
let timesEnergyUpgraded = 0;

function upgradeFood() {
    var engineerUpgradeCost = engineerCost[timesFoodUpgraded];

    if (timesFoodUpgraded >= maxUpgradeLevel) {
        // You have reached the maximum level for this technology
        maxUp('Food');
        return;
    } else if (engineers < engineerUpgradeCost) {
        // You do not have enough engineers
        noEngi(engineerUpgradeCost);
        return;
    } else if (metalLevel < metalCostPerLevel * (timesFoodUpgraded + 1)) {
        // You do not have enough metal
        noMetal(metalCostPerLevel * (timesFoodUpgraded + 1));
        return;
    } else {
        engineers -= engineerUpgradeCost;
        foodHarvestingRate *= 2;
    }

    timesFoodUpgraded += 1;
}

function upgradeWater() {
    var engineerUpgradeCost = engineerCost[timesWaterUpgraded];

    if (timesWaterUpgraded >= maxUpgradeLevel) {
        // You have reached the maximum level for this technology
        maxUp('Water');
        return;
    } else if (engineers < engineerUpgradeCost) {
        // You do not have enough engineers
        noEngi(engineerUpgradeCost);
        return;
    } else if (metalLevel < metalCostPerLevel * (timesWaterUpgraded + 1)) {
        // You do not have enough metal
        noMetal(metalCostPerLevel * (timesWaterUpgraded + 1));
        return;
    } else {
        engineers -= engineerUpgradeCost;
        waterHarvestingRate *= 2;
    }

    timesWaterUpgraded += 1;
}

function upgradeMetal() {
    var engineerUpgradeCost = engineerCost[timesMetalUpgraded];

    if (timesMetalUpgraded > maxUpgradeLevel) {
        // You have reached the maximum level for this technology
        maxUp('Metal');
        return;
    } else if (engineers < engineerUpgradeCost) {
        // You do not have enough engineers
        noEngi(engineerUpgradeCost);
        return;
    } else if (metalLevel < metalCostPerLevel * (timesMetalUpgraded + 1)) {
        // You do not have enough metal
        noMetal(metalCostPerLevel * (timesMetalUpgraded + 1));
        return;
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
        maxUp('Energy');
        return;
    } else if (engineers < engineerUpgradeCost) {
        // You do not have enough engineers
        noEngi(engineerUpgradeCost);
        return;
    } else if (metalLevel < metalCostPerLevel * (timesEnergyUpgraded + 1)) {
        // You do not have enough metal
        noMetal(metalCostPerLevel * (timesEnergyUpgraded + 1));
        return;
    } else {
        engineers -= engineerUpgradeCost;
        currentEnergyLevel *= 1.5;
    }

    timesEnergyUpgraded += 1;
}

function noMetal (cost) {
    var dif =  cost-metalLevel;
    var msg = 'Insufficient Metal: ' + dif + ' needed!';
    showEventText(msg);
}

function noEngi (cost) {
    var dif =  cost-engineers;
    var msg = 'Insufficient Engineers: ' + dif + ' needed!';
    showEventText(msg);
}

function maxUp (res) {
    var msg = 'Maximum ' + res + ' Upgraded';
    showEventText(msg);
}
