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
let testingTextbox;
var img1 = new Image();


function preload() {
    this.load.image("panel", "../images/monitor.jpg");
}

function create() {
    // buttons
    this.add.image(WINDOW_WIDTH * 0.1, WINDOW_HEIGHT * 0.4, "panel").setOrigin(0.9,1)
    statsTextbox = this.add.text(30, 30, ' ', {
        font: WINDOW_HEIGHT * 0.045 + 'px sans-serif',
        fill: "#FFFFFF"
    });

    waterTextbox = this.add.text(170, 60, ' ', {
        font: WINDOW_HEIGHT * 0.045 + 'px sans-serif',
        fill: "red"
    }); 

    metalTextbox = this.add.text(170, 122, ' ', {
        font: WINDOW_HEIGHT * 0.045 + 'px sans-serif',
        fill: "red"
    }); 

    foodTextbox = this.add.text(170, 91, ' ', {
        font: WINDOW_HEIGHT * 0.045 + 'px sans-serif',
        fill: "red"
    }); 

    

    eventsTextBox = this.add.text(WINDOW_WIDTH * 0.6, WINDOW_HEIGHT / 2, '', {
        font: WINDOW_HEIGHT * 0.07 + 'px sans-serif',
        fill: '#FFFFFF'
    }).setOrigin(0.5);

    initializeStats();
    initializeRandomEventGenerator();
    createEngineer();
    displayAddedFood()
}

function displayAnnouncement(msg) {
    eventsTextBox.setText(msg);
    oneUpSound.loop = false;
    oneUpSound.play();
    setTimeout(() => {
        eventsTextBox.setText('');
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
}

function displayAddedWater(){
    waterTextbox.setText('+' + waterHarvestingRate);
    setTimeout(() => {
        waterTextbox.setText( " ");
    }, 1000);
}

function displayAddedMetal(){
    metalTextbox.setText('+' + metalHarvestingRate);
    setTimeout(() => {
        metalTextbox.setText( " ");
    }, 1000);
}

function displayAddedFood(){
    foodTextbox.setText('+' + foodHarvestingRate);
    setTimeout(() => {
        foodTextbox.setText( " ");
    }, 1000);
}