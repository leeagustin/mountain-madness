let config={
    type: Phaser.AUTO,
    width: "100%",
    height: "100%",
    physics: {
        default: 'arcade',
        arcade: {
            //debug: true,
            gravity: { y: 0 }

        }
    },
    scene:{
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);
