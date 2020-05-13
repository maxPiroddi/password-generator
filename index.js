const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const ipc = electron.ipcMain;

// remove when unnecessary
const dialog = electron.dialog;


const createWindow = () => {
  const window = new BrowserWindow({
    width: 400,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  });
  
  window.loadFile('./src/index.html');
  window.webContents.openDevTools()
  
};

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  };
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  };
});

ipc.on('open-gen-dialog', event => {
  dialog.showErrorBox('Error msg', 'Demo of an error message!')
  event.sender.send('opened-error-dialog', 'Main process opened dialog')
});