// In the main process.
const {app, BrowserWindow} = require('electron')

// Or use `remote` from the renderer process.
// const { BrowserWindow } = require('electron').remote

let mainWindow

function createWindow () {
  // Create the browser window.
  mainWindow = new BrowserWindow({width: 1152, height: 768})

  mainWindow.loadURL('https://www.docswave.com/')

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    mainWindow = null
  })
}

app.on('ready', createWindow)
