function createRandomEvent() {
    asteroidHitWaterSupply();
}

function asteroidHitWaterSupply() {
    if (Math.random() < 0.0001) {
        waterLevel -= 100;
        showEventText('An asteroid has hit your water supply!');
    }
}

function ratsAteFoodSupply() {
    if (Math.random() < 0.0001) {
        foodLevel -= 100;
        showEventText('Rats ate some of the food supply!');
    }
}

function showEventText(msg) {
    eventsTextBox.setText(`Event: ${msg}`);
    setTimeout(() => {
        eventsTextBox.setText('');
    }, 2000);
}