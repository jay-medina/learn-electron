const {app, 
       BrowserWindow, 
       ipcMain, 
       globalShortcut
      } = require('electron');
const path = require('path');
const url = require('url');
const {CMD_CTRL_1, CMD_CTRL_2} = require('./app/keyShortcuts');

let mainWindow = null;

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        height: 720,
        width: 370,
        resizable: false,
        frame: false
    });

    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'app/index.html'),
        protocol: 'file:',
        slashes: true
    }));

    registerKeyboardInputs(mainWindow.webContents);
})

app.on('will-quit', () => {
  // Unregister all shortcuts.
  globalShortcut.unregisterAll()
  ipcRenderer.removeAllListeners()
})

ipcMain.on('close-main-window', function() {
    app.quit();
})

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