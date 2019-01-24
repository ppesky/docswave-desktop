// In the main process.
const {app, shell, BrowserWindow} = require('electron')

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

  // new-window
  // will-navigate
  // did-navigate-in-page
  mainWindow.webContents.on('new-window', (event, url) => {
    event.preventDefault()
    let newWin = new BrowserWindow({show: false})

    newWin.webContents.on('did-navigate-in-page', (nextEvent, nextUrl) => {
      let currentURL = newWin.webContents.getURL()
      // console.log('nextUrl : '+nextUrl)
      // console.log('currentURL : '+currentURL)
      if(!currentURL.startsWith('https://www.docswave.com/') && !currentURL.startsWith('https://accounts.google.com/')) {
        nextEvent.preventDefault()
        shell.openExternal(currentURL)
        newWin.close()
      }
    });

    newWin.once('ready-to-show', () => newWin.show())
    newWin.loadURL(url)
    // newWin.webContents.openDevTools()
    event.newGuest = newWin

  });
}

app.on('ready', createWindow)
