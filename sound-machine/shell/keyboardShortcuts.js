const { globalShortcut } = require('electron');
const CMD_CTRL_1 = "CommandOrControl+1"
const CMD_CTRL_2 = "CommandOrControl+2"

function registerKeyboardInputs(webContents) {
  globalShortcut.register(CMD_CTRL_1, () => {
      if(webContents.isFocused()) {
          webContents.send(CMD_CTRL_1);
      }    
  })
  globalShortcut.register(CMD_CTRL_2, () => {
      if(webContents.isFocused()) {
          webContents.send(CMD_CTRL_2);
      }
  });
}

module.exports = {
    registerKeyboardInputs
}

