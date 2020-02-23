let clickSounds = [];
clickSounds[0] = new Audio('sounds/click1.mp3');
clickSounds[1] = new Audio('sounds/click2.mp3');
clickSounds[2] = new Audio('sounds/click3.mp3');

function playButtonClick() {
    let buttonNumber = Math.floor(Math.random() * 3);
    let buttonSound = clickSounds[buttonNumber];
    buttonSound.loop = false;
    buttonSound.play();
}