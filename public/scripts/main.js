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

    waterTextbox = this.add.text(WINDOW_HEIGHT * 0.25, WINDOW_HEIGHT * 0.094, ' ', {
        font: WINDOW_HEIGHT * 0.045 + 'px sans-serif'
    });

    metalTextbox = this.add.text(WINDOW_HEIGHT * 0.215, WINDOW_HEIGHT * 0.193, ' ', {
        font: WINDOW_HEIGHT * 0.045 + 'px sans-serif',
    });

    foodTextbox = this.add.text(WINDOW_HEIGHT * 0.23, WINDOW_HEIGHT * 0.143, ' ', {
        font: WINDOW_HEIGHT * 0.045 + 'px sans-serif',
    });

    waterWarningbox = this.add.text(WINDOW_HEIGHT * 0.02, WINDOW_HEIGHT * 0.095, ' ', {
        font: WINDOW_HEIGHT * 0.045 + 'px sans-serif',
        fill: "red"
    });

    foodWarningbox = this.add.text(WINDOW_HEIGHT * 0.02, WINDOW_HEIGHT * 0.145, ' ', {
        font: WINDOW_HEIGHT * 0.045 + 'px sans-serif',
        fill: "red"
    });

    timerTextbox = this.add.text(WINDOW_WIDTH * 0.85, WINDOW_HEIGHT * 0.05, '', {
        font: WINDOW_HEIGHT * 0.045 + 'px sans-serif',
        fill: "#FFFFFF"
    });

    eventsTextbox = this.add.text(WINDOW_WIDTH * 0.6, WINDOW_HEIGHT / 4, '', {
        font: WINDOW_HEIGHT * 0.08 + 'px sans-serif',
        fill: '#FFFFFF',
        backgroundColor: '#18181A'
    }).setOrigin(0.5).setPadding();

    initializeStats();
    initializeRandomEventGenerator();
    createEngineer();
}

function displayAnnouncement(msg) {
    eventsTextbox.setText(msg).setPadding(WINDOW_HEIGHT * 0.02);
    oneUpSound.loop = false;
    oneUpSound.play();
    setTimeout(() => {
        eventsTextbox.setText('').setPadding();
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
    if (waterLevel <= 5) {
        waterWarningbox.setText('!');
    } else {
        waterWarningbox.setText(' ');
    }
    if (foodLevel <= 5) {
        foodWarningbox.setText('!');
    } else {
        foodWarningbox.setText(' ');
    }

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