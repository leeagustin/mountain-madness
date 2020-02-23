let oneUpSound = new Audio('sounds/1up.wav');

let isWaterLeaking = false;

function initializeRandomEventGenerator() {
    setTimeout(() => {
        initializeRandomEventGenerator();
        asteroidHitWaterSupply();
        ratsAteFoodSupply();
        waterLeakage();
    }, 6000);
}
function waterLeakage() {
    if (Math.random() < 0.03 && !isWaterLeaking) {
        waterRateModifier += 1;
        showEventText('Your water storage has suffered a leakage!');
        isWaterLeaking = true;
    }
}

function asteroidHitWaterSupply() {
    if (Math.random() < 0.03) {
        waterLevel -= 1000;
        showEventText('An asteroid has hit your water supply!');
    }
}

function ratsAteFoodSupply() {
    if (Math.random() < 0.03) {
        foodLevel -= 1000;
        showEventText('Rats ate some of the food supply!');
    }
}

function createEngineer() {
    setTimeout(() => {
        engineers += 1;
        showEventText('An engineer has been created!');
        createEngineer();
    }, 30000);
}

function showEventText(msg) {
    eventsTextBox.setText(`Event: ${msg}`);
    oneUpSound.loop = false;
    oneUpSound.play();
    setTimeout(() => {
        eventsTextBox.setText('');
    }, 3000);
}