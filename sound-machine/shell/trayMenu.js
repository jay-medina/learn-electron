const {Tray, Menu} = require('electron');
const path = require('path');

var trayIcon = null;

if (process.platform === 'darwin') {
    trayIcon = new Tray(path.join(__dirname, '../app/img/tray-iconTemplate.png'));
}
else {
    trayIcon = new Tray(path.join(__dirname, '../app/img/tray-icon-alt.png'));
}


function getMenuTemplate({onSettings, onQuit}) {
 return [
    {
        label: 'Sound machine',
        enabled: false
    },
    {
        label: 'Settings',
        click: onSettings
    },
    {
        label: 'Quit',
        click: onQuit
    }
 ];
}


module.exports = {
    setup(options) {
        var trayMenu = Menu.buildFromTemplate(getMenuTemplate(options));
        trayIcon.setContextMenu(trayMenu);
    }
}
