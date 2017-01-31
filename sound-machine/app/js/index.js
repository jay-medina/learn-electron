const {ipcRenderer} = require('electron');

const closeButton = document.querySelector('.sound-machine--close');
const settingsButton = document.querySelector('.sound-machine--settings');
const soundMachineBtns = document.querySelectorAll('.sound-machine--buttons');
const body = document.querySelector('body');
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

 ipcRenderer.on("CommandOrControl+1", function() {
     playAudio('ba-dum-tsss');
 });


ipcRenderer.on("CommandOrControl+2", function() {
    playAudio('money');
});