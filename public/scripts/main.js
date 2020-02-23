let WINDOW_WIDTH = window.innerWidth * 0.985;
let WINDOW_HEIGHT = window.innerHeight * 0.97;
let config = {
    type: Phaser.AUTO,
    width: WINDOW_WIDTH,
    height: WINDOW_HEIGHT,
    transparent: true,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

let game = new Phaser.Game(config);
let statsTextbox;
let eventsTextbox;

function preload() {}

function create() {
    initializeStats();

    statsTextbox = this.add.text(10, 10, '', {
        font: '20px Arial',
        fill: '#FFFFFF'
    });

    eventsTextBox = this.add.text(WINDOW_WIDTH / 2, WINDOW_HEIGHT * 0.25, '', {
        font: '30px Arial',
        fill: '#FFFFFF'
    });
}

function update() {
    createRandomEvent();
    statsTextbox.setText(`Population: ${populationLevel}\nWater: ${waterLevel}\nFood: ${foodLevel}\nHappiness: ${happinessLevel}\nEnergy: ${energyLevel}`);
}