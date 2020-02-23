let config = {
    type: Phaser.AUTO,
    width: window.innerWidth * 0.985,
    height: window.innerHeight * 0.97,
    transparent: true,
    physics: {
        default: 'arcade',
        arcade: {
            //debug: true,
            gravity: {
                y: 0
            }

        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

let game = new Phaser.Game(config);
let statsTextbox;

function preload() {
    this.load.image('bg', )
}

function create() {
    initializeStats();

    statsTextbox = this.add.text(10, 10, '', {
        font: '20px Arial',
        fill: '#FFFFFF'
    });
}

function update() {
    statsTextbox.setText(`Population: ${populationLevel}\nWater: ${waterLevel}\nFood: ${foodLevel}\nHappiness: ${happinessLevel}\nEnergy: ${energyLevel}`);
}