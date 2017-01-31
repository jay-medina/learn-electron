const {ipcRenderer} = require('electron');
const close = document.querySelector('.close');

close.addEventListener('click', function() {
    ipcRenderer.send('close-settings-window');
})