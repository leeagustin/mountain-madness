let oneUpSound = new Audio('sounds/1up.wav');

let isFoodSpoiling = false;
let isWaterLeaking = false;

function initializeRandomEventGenerator() {
    setTimeout(() => {
        initializeRandomEventGenerator();
        if (timeLeft < 540) {
            asteroidHitWaterSupply();
            ratsAteFoodSupply();
            foodSpoilage();
            waterLeakage();
        }
    }, 6000);
}

function foodSpoilage() {
    if (Math.random() < 0.03 && !isFoodSpoiling) {
        foodRateModifier += 1;
        displayAnnouncement('Event: Your food is spoiling!');
        isFoodSpoiling = true;

        var alert = document.getElementById("foodSpoilageAlert");
        alert.style.visibility = "visible"
    }
}

function waterLeakage() {
    if (Math.random() < 0.03 && !isWaterLeaking) {
        waterRateModifier += 1;
        displayAnnouncement('Event: Your water storage has suffered a leakage!');
        isWaterLeaking = true;

        var alert = document.getElementById("waterLeakageAlert");
        alert.style.visibility = "visible"
    }
}

function asteroidHitWaterSupply() {
    if (Math.random() < 0.01) {
        waterLevel -= 100;
        displayAnnouncement('Event: An asteroid has hit your water supply!');
        displayLostWater(100);
    }
}

function ratsAteFoodSupply() {
    if (Math.random() < 0.01) {
        foodLevel -= 100;
        displayAnnouncement('Event: Rats ate some of the food supply!');
        displayLostFood(100);
    }
}

function createEngineer() {
    setTimeout(() => {
        engineers += 1;
        displayAnnouncement('Event: An engineer has been created!');
        createEngineer();
    }, 30000);
}