const {ipcRenderer} = require('electron');
const configuration = require('../../shell/configuration');
const close = document.querySelector('.close');

close.addEventListener('click', function() {
    ipcRenderer.send('close-settings-window');
})

for (var i = 0; i < modifierCheckboxes.length; i++) {
    var shortcutKeys = configuration.readSettings('shortcutKeys');
    var modifierKey = modifierCheckboxes[i].attributes['data-modifier-key'].value;
    modifierCheckboxes[i].checked = shortcutKeys.indexOf(modifierKey) !== -1;

    modifierCheckboxes[i].addEventListener('click', bindModifierCheckboxes);
}

function bindModifierCheckboxes(e) {
    var shortcutKeys = configuration.readSettings('shortcutKeys');
    var modifierKey = e.target.attributes['data-modifier-key'].value;

    if (shortcutKeys.indexOf(modifierKey) !== -1) {
        var shortcutKeyIndex = shortcutKeys.indexOf(modifierKey);
        shortcutKeys.splice(shortcutKeyIndex, 1);
    }
    else {
        shortcutKeys.push(modifierKey);
    }

    configuration.saveSettings('shortcutKeys', shortcutKeys);
    ipcRenderer.send('set-global-shortcuts');
}
