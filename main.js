// In the main process.
const {app, shell, BrowserWindow} = require('electron')
const Menu = require('electron').Menu

// Or use `remote` from the renderer process.
// const { BrowserWindow } = require('electron').remote

app.on('ready', () => {
  createWindow()
})

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
  // did-navigate
  // did-navigate-in-page
  mainWindow.webContents.on('new-window', (event, url) => {
    event.preventDefault()
    let newWin = new BrowserWindow({show: false})

    newWin.webContents.on('did-navigate', (nextEvent, nextUrl) => {
      let currentURL = newWin.webContents.getURL()
      // console.log('nextUrl : '+nextUrl)
      // console.log('currentURL : '+currentURL)
      if(currentURL.startsWith('https://drive.google.com/')) {
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

function createMenu() {
  const application = {
    label: "Docswave Desktop",
    submenu: [
      {
        label: "About Docswave Desktop",
        selector: "orderFrontStandardAboutPanel:"
      },
      {
        type: "separator"
      },
      {
        label: "Quit",
        accelerator: "Command+Q",
        click: () => {
          app.quit()
        }
      }
    ]
  }

  const edit = {
    label: "Edit",
    submenu: [
      { label: "Undo", accelerator: "CmdOrCtrl+Z", selector: "undo:" },
      { label: "Redo", accelerator: "Shift+CmdOrCtrl+Z", selector: "redo:" },
      { type: "separator" },
      { label: "Cut", accelerator: "CmdOrCtrl+X", selector: "cut:" },
      { label: "Copy", accelerator: "CmdOrCtrl+C", selector: "copy:" },
      { label: "Paste", accelerator: "CmdOrCtrl+V", selector: "paste:" },
      { label: "Select All", accelerator: "CmdOrCtrl+A", selector: "selectAll:" }
    ]
  }

  const template = [
    application,
    edit
  ]

  Menu.setApplicationMenu(Menu.buildFromTemplate(template))
}