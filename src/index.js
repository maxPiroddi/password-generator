const electron = require("electron");
const ipc = electron.ipcRenderer;

const errorBtn = document.getElementById('generate');

errorBtn.addEventListener('click', () => {
  ipc.send('open-gen-dialog')
})

ipc.on('opened-error-dialog', (event, arg) => {
  console.log(arg)
})