const electron= require("electron");
const dialog = electron.dialog;
module.exports = {
      /**
       * 打开文件夹窗口
       */
      openFileDir:function(callback){
          dialog.showOpenDialog({
            properties: ['openDirectory']
          },function(res){
              callback(res)
          })
      }
      
}