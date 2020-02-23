let clickSounds = [];
clickSounds[0] = document.getElementsByTagName('audio')[1];
clickSounds[1] = document.getElementsByTagName('audio')[2];
clickSounds[2] = document.getElementsByTagName('audio')[3];

function playButtonClick() {
    let buttonNumber = Math.floor(Math.random() * 3);
    let buttonSound = clickSounds[buttonNumber];
    buttonSound.loop = false;
    buttonSound.play();
}