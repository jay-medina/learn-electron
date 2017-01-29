
const closeButton = document.querySelector('.sound-machine--close');
const settingsButton = document.querySelector('.sound-machine--settings');
const soundMachineBtns = document.querySelectorAll('.sound-machine--buttons');
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

closeButton.addEventListener('click', e => alert('closebutton click'));
settingsButton.addEventListener('click', e => alert('settingsbutton click'));