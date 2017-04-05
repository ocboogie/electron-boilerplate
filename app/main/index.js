import { BrowserWindow, app } from 'electron';

// import * as _ from 'lodash';
// Module to create native browser window.

import { join } from 'path';
import { format } from 'url';

// Keep a global reference of the window object, if you don't, the window will
// Be closed automatically when the JavaScript object is garbage collected.
let mainWindow;

function createWindow() {
    // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600
  });

    // And load the index.html of the app.
  mainWindow.loadURL(format({
    pathname: join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }));

    // Open the DevTools.
  mainWindow.webContents.openDevTools();

  if (process.env.NODE_ENV === 'development') {
    // eslint-disable-next-line global-require
    const { default: installExtension, REACT_DEVELOPER_TOOLS, REDUX_DEVTOOLS } = require('electron-devtools-installer');

    installExtension(REACT_DEVELOPER_TOOLS)
            .then((name) => console.log(`Added Extension:  ${name}`))
            .catch((err) => console.log('An error occurred: ', err));
    installExtension(REDUX_DEVTOOLS)
            .then((name) => console.log(`Added Extension:  ${name}`))
            .catch((err) => console.log('An error occurred: ', err));
  }

    // Emitted when the window is closed.
  mainWindow.on('closed', () => {
        // Dereference the window object, usually you would store windows
        // In an array if your app supports multi windows, this is the time
        // When you should delete the corresponding element.
    mainWindow = null;
  });
}

// This method will be called when Electron has finished
// Initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => {
    // On OS X it is common for applications and their menu bar
    // To stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
    // On OS X it's common to re-create a window in the app when the
    // Dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// Code. You can also put them in separate files and require them here.
