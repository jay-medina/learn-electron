const electron = require('electron')
const url = require('url');
const path = require('path');

electron.app.on('ready',function () {
  var mainWindow = new electron.BrowserWindow({
    width: 800, height: 600
  });

  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }));
})