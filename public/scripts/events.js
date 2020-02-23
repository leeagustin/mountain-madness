function createRandomEvent() {
    asteroidHitWaterSupply();
}

function asteroidHitWaterSupply() {
    if (Math.random() < 0.0001) {
        waterLevel -= 100;
        showEventText('An asteroid has hit your water supply!');
    }
}

function showEventText(msg) {
    eventsTextBox.setText(`Event: ${msg}`);
    setTimeout(() => {
        eventsTextBox.setText('');
    }, 1000);
}