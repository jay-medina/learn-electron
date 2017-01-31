const { globalShortcut } = require('electron');
const configuration = require('./configuration');
const CMD_CTRL_1 = "CommandOrControl+1"
const CMD_CTRL_2 = "CommandOrControl+2"

function registerKeyboardInputs(webContents) {
  globalShortcut.unregisterAll();
  var shortcutKeysSettings = configuration.readSettings('shortcutKeys');
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
        configuration.saveSettings('shortcutKeys', ['ctrl', 'shift']);
    }
}

module.exports = {
    registerKeyboardInputs,
    initializeShortcuts
}

