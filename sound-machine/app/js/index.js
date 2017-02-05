const {ipcRenderer, remote} = require('electron');
const trayMenu = remote.require('./shell/trayMenu');

const closeButton = document.querySelector('.sound-machine--close');
const settingsButton = document.querySelector('.sound-machine--settings');
const soundMachineBtns = document.querySelectorAll('.sound-machine--buttons');

trayMenu.setup({
    onSettings() {
        ipcRenderer.send('open-settings-window');
    },
    onQuit() {
        ipcRenderer.send('close-main-window');
    }
})

const audioFiles = {};

function playAudio(filename) {
    if(!audioFiles[filename]) {
      audioFiles[filename] = new Audio(`wav/${filename}.wav`);
    }
     audioFiles[filename].currentTime = 0;
     audioFiles[filename].play();
}

function onClick(e) {
    const target = e.target;
    let sound;

    if(target.dataset.sound) {
        sound = target.dataset.sound;
        console.log(sound);
        playAudio(sound);
    }
}

soundMachineBtns.forEach(btn => btn.addEventListener('click', onClick));

closeButton.addEventListener('click', () => ipcRenderer.send('close-main-window'));
settingsButton.addEventListener('click', () =>  ipcRenderer.send('open-settings-window'));

 ipcRenderer.on("drum", function() {
     playAudio('ba-dum-tsss');
 });


ipcRenderer.on("money", function() {
    playAudio('money');
});