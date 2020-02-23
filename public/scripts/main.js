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

function preload() {
    this.load.image("panel", "../images/monitor.jpg");
}

function create() {
    // buttons
<<<<<<< HEAD
    this.add.image(WINDOW_WIDTH * 0.1, WINDOW_HEIGHT * 0.4, "panel").setOrigin(0.9,1)
=======
    this.add.image(WINDOW_WIDTH * 0.1, WINDOW_HEIGHT * 0.4, "panel").setOrigin(0.9, 1)

>>>>>>> 4007b0c23e4c1c7b50ae4048515b68f3ce678574
    statsTextbox = this.add.text(30, 30, ' ', {
        font: WINDOW_HEIGHT * 0.045 + 'px sans-serif',
        fill: "#FFFFFF"
    });

<<<<<<< HEAD
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
=======
    timerTextbox = this.add.text(WINDOW_WIDTH * 0.85, WINDOW_HEIGHT * 0.05, '', {
        font: WINDOW_HEIGHT * 0.045 + 'px sans-serif',
        fill: "#FFFFFF"
    });

    eventsTextbox = this.add.text(WINDOW_WIDTH * 0.6, WINDOW_HEIGHT / 4, '', {
>>>>>>> 4007b0c23e4c1c7b50ae4048515b68f3ce678574
        font: WINDOW_HEIGHT * 0.07 + 'px sans-serif',
        fill: '#FFFFFF'
    }).setOrigin(0.5);

    initializeStats();

    displayRules();

    initializeRandomEventGenerator();
    createEngineer();
    displayAddedFood()
}

function displayAnnouncement(msg) {
    eventsTextbox.setText(msg);
    oneUpSound.loop = false;
    oneUpSound.play();
    setTimeout(() => {
        eventsTextbox.setText('');
    }, 3000);
}

function displayRules() {
    var rules = document.getElementById("rulesInfo");
    var closeBtn = document.getElementsByClassName("close");
    var stop = true;

    rules.style.display = "block";

    closeBtn.onclick = function() {
        rules.style.display = "none";
        stop = false;
    }
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            stop = false;
        }
    }

    // while (stop) {

    // }
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
<<<<<<< HEAD
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
=======

    timerTextbox.setText('Time Left: ' + Math.floor(timeLeft / 60) + 'm ' + timeLeft % 60 + 's');
>>>>>>> 4007b0c23e4c1c7b50ae4048515b68f3ce678574
}