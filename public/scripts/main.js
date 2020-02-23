let WINDOW_WIDTH = window.innerWidth * 0.985;
let WINDOW_HEIGHT = window.innerHeight * 0.80;

let config = {
    type: Phaser.AUTO,
    width: WINDOW_WIDTH,
    height: WINDOW_HEIGHT,
    transparent: true,
    scene: {
        preload: preload,
        create: create,
        update: updateEveryFrame
    }
};

let game = new Phaser.Game(config);
let statsTextbox;
let eventsTextbox;
let timerTextbox;
let testingTextbox;
let img1 = new Image();
let timeLeft = 600;

function preload() {}

function create() {
    // buttons
    statsTextbox = this.add.text(30, 30, ' ', {
        font: WINDOW_HEIGHT * 0.045 + 'px sans-serif',
        fill: "#FFFFFF"
    });

    waterTextbox = this.add.text(170, 60, ' ', {
        font: WINDOW_HEIGHT * 0.045 + 'px sans-serif',
    });

    metalTextbox = this.add.text(170, 122, ' ', {
        font: WINDOW_HEIGHT * 0.045 + 'px sans-serif',
    });

    foodTextbox = this.add.text(170, 91, ' ', {
        font: WINDOW_HEIGHT * 0.045 + 'px sans-serif',
    });

    timerTextbox = this.add.text(WINDOW_WIDTH * 0.85, WINDOW_HEIGHT * 0.05, '', {
        font: WINDOW_HEIGHT * 0.045 + 'px sans-serif',
        fill: "#FFFFFF"
    });

    eventsTextbox = this.add.text(WINDOW_WIDTH * 0.6, WINDOW_HEIGHT / 4, '', {
        font: WINDOW_HEIGHT * 0.08 + 'px sans-serif',
        fill: '#FFFFFF'
    }).setOrigin(0.5);

    initializeStats();
    initializeRandomEventGenerator();
    createEngineer();
}

function displayAnnouncement(msg) {
    eventsTextbox.setText(msg);
    oneUpSound.loop = false;
    oneUpSound.play();
    setTimeout(() => {
        eventsTextbox.setText('');
    }, 3000);
}

function updateEveryFrame() {
    statsTextbox.setText(
        'Population: ' + populationLevel + ' (Engineers: ' + engineers + ')\n' +
        'Water: ' + waterLevel + '\n' +
        'Food: ' + foodLevel + '\n' +
        'Metal: ' + metalLevel + '\n' +
        'Happiness: ' + happinessLevel + '\n' +
        'Energy: ' + currentEnergyLevel + ' (Need ' + requiredEnergyLevel + ')'
    );

    timerTextbox.setText('Time Left: ' + Math.floor(timeLeft / 60) + 'm ' + timeLeft % 60 + 's');
}

function displayAddedWater() {
    waterTextbox.setText('+' + waterHarvestingRate);
    waterTextbox.setStyle({
        fill: 'green'
    });
    setTimeout(() => {
        waterTextbox.setText(" ");
    }, 1000);
}

function displayAddedMetal() {
    metalTextbox.setText('+' + metalHarvestingRate);
    metalTextbox.setStyle({
        fill: 'green'
    });
    setTimeout(() => {
        metalTextbox.setText(" ");
    }, 1000);
}

function displayAddedFood() {
    foodTextbox.setText('+' + foodHarvestingRate);
    foodTextbox.setStyle({
        fill: 'green'
    });
    setTimeout(() => {
        foodTextbox.setText(" ");
    }, 1000);
}

function displayLostWater(value) {
    waterTextbox.setText('-' + value);
    waterTextbox.setStyle({
        fill: 'red'
    });
    setTimeout(() => {
        waterTextbox.setText(" ");
    }, 1000);
}

function displayLostFood(value) {
    foodTextbox.setText('-' + value);
    foodTextbox.setStyle({
        fill: 'red'
    });
    setTimeout(() => {
        foodTextbox.setText(" ");
    }, 1000);
}