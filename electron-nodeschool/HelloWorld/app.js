const electron = require('electron')
const url = require('url');
const path = require('path');

electron.app.on('ready',function () {
  var mainWindow = new electron.BrowserWindow({
    width: 600, height: 800
  });

  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }));
})