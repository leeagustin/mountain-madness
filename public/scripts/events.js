function initializeRandomEventGenerator() {
    setTimeout(() => {
        asteroidHitWaterSupply();
        ratsAteFoodSupply();
    }, 60000);
}

function asteroidHitWaterSupply() {
    if (Math.random() < 0.3) {
        waterLevel -= 1000;
        showEventText('An asteroid has hit your water supply!');
    }
}

function ratsAteFoodSupply() {
    if (Math.random() < 0.3) {
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
    setTimeout(() => {
        eventsTextBox.setText('');
    }, 2000);
}