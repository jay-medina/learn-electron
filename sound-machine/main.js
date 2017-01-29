const {app, BrowserWindow, ipcMain} = require('electron');
const path = require('path');
const url = require('url');

let mainWindow = null;

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        height: 700,
        width: 380,
        resizable: false,
        frame: false
    });

    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'app/index.html'),
        protocol: 'file:',
        slashes: true
    }));

   // mainWindow.webContents.openDevTools();
})



ipcMain.on('close-main-window', function() {
    app.quit();
})