import { app,BrowserWindow,ipcMain,Menu,Tray} from 'electron';
let child_process = require("child_process");
let path = require("path");
import util from './libs/util.js';
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
    height:800,
    useContentSize: true,
    width: 1200,
    backgroundColor:'#168e92',
    frame:false,
    show:false,
    webPreferences:{
      devTools:true,
      nodeIntegration:true,
    }
  })
  process.env.NODE_ENV === 'development'?mainWindow.webContents.openDevTools():mainWindow.webContents.closeDevTools ()
  mainWindow.loadURL(winURL);
  mainWindow.on('closed', () => {
    mainWindow = null
  });
  mainWindow.on('ready-to-show', ()=>{
    mainWindow.show();
    showSystemPan();
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
ipcMain.on("openFileDir",function(event,message){
  let type = message;
  util.openFileDir((res)=>{
    event.sender.send('message',{type:type,msg:res?res:''})
  });
});

/**
* 接受渲染进程的事件
*/
ipcMain.on("receiveMsg",function(event,message){
 let type = message.type;
 let msg = message.msg;
 client = event;
 console.log("type",type,"info:",msg)
 switch(type){
   case "close":
       mainWindow.close();
       break;
   case "hide":
        mainWindow.minimize();
       break;
   case "translate":
   
      // mainWindow.hide();
       /*let work = child_process.fork(__dirname+"/libs/translateWorker.js");
        work.on("error",function(){
          console.log("进程启动出错")
        });
        let option = {
          type:"startTranslate",
          msg:msg
        }
        console.log("translate:",)
        work.send(option);
        event.sender.send('message',{type:"translate",msg:option.msg.input.join("")});*/
       // file.translateSvg(msg);
       //child_process.fork(__dirname+"/test.js")
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
/**
 * 显示系统托盘
 */
function showSystemPan(){
  let filePath = path.join(__dirname,"../../build/icons/icon.ico")
  let tray = new Tray(filePath)
  const contextMenu = Menu.buildFromTemplate([
    {label: '退出', type: 'normal','click':quit},
  ])
  tray.on("click",()=>{
    mainWindow.isVisible()?mainWindow.hide():mainWindow.show();
  })
  tray.setToolTip('myIcon')
  tray.setContextMenu(contextMenu);
  function quit(menuItem,browserWindow){
    app.quit();
  }
}