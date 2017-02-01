const {ipcRenderer} = require('electron');
const close = document.querySelector('.close');


close.addEventListener('click', function() {
    ipcRenderer.send('close-settings-window');
})

function updateShortcutSettings(checkbox) {
     const {modifierKey} = checkbox.dataset;
     console.log(modifierKey);
     ipcRenderer.send('update-keyboard-shortcut', {
         key: modifierKey,
         selected: checkbox.checked
     });
}

ipcRenderer.on('initShortcutKeys', function(_, keyArray) {
    const checkboxes = document.querySelectorAll('.global-shortcut');

    checkboxes.forEach(checkbox => {
        const {modifierKey} = checkbox.dataset;
        checkbox.checked = keyArray.includes(modifierKey);
    });

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('click', () => updateShortcutSettings(checkbox));
    });
});