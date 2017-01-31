const {app, 
       BrowserWindow, 
       ipcMain, 
       globalShortcut
      } = require('electron');
const path = require('path');
const url = require('url');
const keyboardShortcuts = require('./shell/keyboardShortcuts');
const settingsWindow = require('./shell/settingsWindow');

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

    keyboardShortcuts.registerKeyboardInputs(mainWindow.webContents);
})

app.on('will-quit', () => {
  // Unregister all shortcuts.
  globalShortcut.unregisterAll()
  ipcRenderer.removeAllListeners()
})

ipcMain.on('close-main-window', function() {
    app.quit();
})

ipcMain.on('close-settings-window', function() {
    settingsWindow.close();
})

ipcMain.on('open-settings-window', function() {
    settingsWindow.show();
})
