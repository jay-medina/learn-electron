const {app, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');

let mainWindow = null;

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        height: 700,
        width: 368,
        resizable: false,
        frame: false
    });

    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'app/index.html'),
        protocol: 'file:',
        slashes: true
    }));
})