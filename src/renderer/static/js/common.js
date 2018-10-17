/**
 * |全局共方法
 */
const {ipcRenderer} = require("electron");
export default{
        /**
        * 向主进程发送消息
        * @param{string} msg 信息  
        */
        sendMsg(msg){
            let option = {
                type:msg.type,
                msg:msg.msg||"",
            }
            ipcRenderer.send("receiveMsg",option)
        },
}