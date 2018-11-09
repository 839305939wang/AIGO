import { app,BrowserWindow,ipcMain,Menu,Tray} from 'electron';
let child_process = require("child_process");
let path = require("path");
/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (process.env.NODE_ENV !== 'development') {
  global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\')
}
let client = null;
let mainWindow
const winURL = process.env.NODE_ENV === 'development'
  ? `http://localhost:9080`
  : `file://${__dirname}/index.html`

function createWindow () {
  /**
   * Initial window options
   */
  mainWindow = new BrowserWindow({
    height:728,
    useContentSize: true,
    width: 1024,
    backgroundColor:'#168e92',
    frame:false,
    show:false,
    transparent: true,
    webPreferences:{
      devTools:false,
      nodeIntegration:true,
      webSecurity: false,
    }
  })
  //process.env.NODE_ENV === 'development'?mainWindow.webContents.openDevTools():mainWindow.webContents.openDevTools ()
  mainWindow.loadURL(winURL);
  mainWindow.on('closed', () => {
    mainWindow = null
  });
  mainWindow.on('ready-to-show', ()=>{
    mainWindow.show();
  });
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})
app.once("ready-to-show",()=>{
  mainWindow.show();
  mainWindow.focus();
})
/**
* 接受渲染进程的事件
*/
ipcMain.on("receiveMsg",function(event,message){
 let type = message.type;
 let msg = message.msg;
 client = event;
 console.log("type",type,"info:",msg)
 switch(type){
    case "max":
      mainWindow.maximize();
      break;
    case "restore":
      mainWindow.unmaximize();
      break;
    case "close":
       mainWindow.close();
       break;
    case "hide":
        mainWindow.minimize();
       break;
    case "translate":
       break;
   default :
       break;
 }
})
/**
 * Auto Updater
 *
 * Uncomment the following code below and install `electron-updater` to
 * support auto updating. Code Signing with a valid certificate is required.
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-electron-builder.html#auto-updating
 */

/*
import { autoUpdater } from 'electron-updater'

autoUpdater.on('update-downloaded', () => {
  autoUpdater.quitAndInstall()
})

app.on('ready', () => {
  if (process.env.NODE_ENV === 'production') autoUpdater.checkForUpdates()
})
 */