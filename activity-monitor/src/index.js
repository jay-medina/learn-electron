const {BrowserWindow, app} = require('electron') // http://electron.atom.io/docs/api
const path = require('path')         // https://nodejs.org/api/path.html
const url = require('url')           // https://nodejs.org/api/url.html

var window = null

// Wait until the app is ready
app.once('ready', function () {
  // Create a new window
  window = new BrowserWindow({
    width: 500,
    height: 400,
    titleBarStyle:'hidden-inset',
    backgroundColor: "#111",
    show: false
  })

  // Load a URL in the window to the local index.html path
  window.loadURL(url.format({
    pathname: path.join(__dirname, 'renderer/index.html'),
    protocol: 'file:',
    slashes: true
  }))

  // Show window when page is ready
  window.once('ready-to-show', function () {
    window.show()
  })

  window.on('close', event => window = null)
})