let oneUpSound = new Audio('sounds/1up.wav');

let isWaterLeaking = false;
let isFoodSpoiling = false;

function initializeRandomEventGenerator() {
    setTimeout(() => {
        initializeRandomEventGenerator();
        asteroidHitWaterSupply();
        ratsAteFoodSupply();
        waterLeakage();
    }, 6000);
}

function foodSpoilage() {
    if (Math.random() < 0.03 && !isFoodSpoiling) {
        foodRateModifier += 1;
        displayAnnouncement('Event: Your food is spoiling!');
        isFoodSpoiling = true;
    }
}

function waterLeakage() {
    if (Math.random() < 0.03 && !isWaterLeaking) {
        waterRateModifier += 1;
        displayAnnouncement('Event: Your water storage has suffered a leakage!');
        isWaterLeaking = true;
    }
}

function asteroidHitWaterSupply() {
    if (Math.random() < 0.03) {
        waterLevel -= 1000;
        displayAnnouncement('Event: An asteroid has hit your water supply!');
    }
}

function ratsAteFoodSupply() {
    if (Math.random() < 0.03) {
        foodLevel -= 1000;
        displayAnnouncement('Event: Rats ate some of the food supply!');
    }
}

function createEngineer() {
    setTimeout(() => {
        engineers += 1;
        displayAnnouncement('Event: An engineer has been created!');
        createEngineer();
    }, 30000);
}