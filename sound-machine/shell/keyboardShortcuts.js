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

module.exports = {
    registerKeyboardInputs,
    initializeShortcuts,
    getShortcutKeys
}

