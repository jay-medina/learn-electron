const { globalShortcut } = require('electron');
const configuration = require('./configuration');

function registerKeyboardInputs(webContents) {
  globalShortcut.unregisterAll();
  var shortcutKeysSettings = getShortcutKeys();
   var shortcutPrefix = shortcutKeysSettings.length === 0 ? '' : shortcutKeysSettings.join('+') + '+';

  console.log(shortcutPrefix);

  globalShortcut.register(shortcutPrefix+'1', () => {
      if(webContents.isFocused()) {
          webContents.send('drum');
      }    
  })
  globalShortcut.register(shortcutPrefix+'2', () => {
      if(webContents.isFocused()) {
          webContents.send('money');
      }
  });
}

function initializeShortcuts() {
    if (!configuration.readSettings('shortcutKeys')) {
        configuration.saveSettings('shortcutKeys', ["ctrl", "shift"]);
    }
}

function getShortcutKeys() {
    return configuration.readSettings('shortcutKeys');
}

function updateShortcutKeys(webContents, key, selected) {
    const shortcutKeys = getShortcutKeys();

    if(shortcutKeys.includes(key)) {
        const filtered = shortcutKeys.filter(sKey => {
            return sKey !== key || selected;
        })

        configuration.saveSettings('shortcutKeys', filtered);
    }
    else if(selected) {
        shortcutKeys.push(key)
        configuration.saveSettings('shortcutKeys', shortcutKeys);
    }

    registerKeyboardInputs(webContents);
}

module.exports = {
    registerKeyboardInputs,
    initializeShortcuts,
    getShortcutKeys,
    updateShortcutKeys
}

