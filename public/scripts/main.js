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
    // buttons
    const foodButton = this.add.text(170, 52, 'Food', { font: '20px Arial', fill: '#0f0' });
    foodButton.setInteractive();
    foodButton.on('pointerdown', () => { setTimeout(harvestFood, 3000); });
    
    const waterButton = this.add.text(170, 31, 'Water', { font: '20px Arial', fill: '#0f0' });
    waterButton.setInteractive();
    waterButton.on('pointerdown', () => { setTimeout(harvestWater, 3000); });
    
    const metalButton = this.add.text(170, 73, 'Metal', { font: '20px Arial', fill: '#0f0' });
    metalButton.setInteractive();
    metalButton.on('pointerdown', () => { setTimeout(harvestMetal, 3000); });
    
    
    statsTextbox = this.add.text(10, 10, '', {
        font: '20px Arial',
        fill: '#FFFFFF'
    });

    eventsTextBox = this.add.text(WINDOW_WIDTH / 2, WINDOW_HEIGHT / 6, '', {
        font: '30px Arial',
        fill: '#FFFFFF'
    }).setOrigin(0.5);
}

function update() {
    createRandomEvent();
    statsTextbox.setText(`Population: ${populationLevel}\nWater: ${waterLevel}\nFood: ${foodLevel}\nMetal: ${metalLevel}\nHappiness: ${happinessLevel}\nEnergy: ${energyLevel}`);
}