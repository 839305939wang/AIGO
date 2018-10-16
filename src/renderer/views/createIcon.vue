<template>
   <div class="createIcon">
       <div class="header">
              <p>字体图标制作</p>
       </div>
       <div class="content">
             <i-form :model="formItem" :label-width="80">
               
                <Form-item label="导入地址">
                    <i-input :clearable=true :value="formItem.input" @click.native="inputClick('input')" placeholder="请输入"></i-input>
                </Form-item>
                <Form-item label="导出地址">
                    <i-input :clearable=true :value="formItem.output"  @click.native="inputClick('output')" placeholder="请输入"></i-input>
                </Form-item>
                <Form-item label="图标类型">
                        <CheckboxGroup v-model="formItem.checkbox">
                            <Checkbox label="iconfonts">iconfonts</Checkbox>
                            <Checkbox label="symbol">symbol</Checkbox>
                        </CheckboxGroup>
                </Form-item>
                <Form-item>
                    <i-button type="primary" @click.native="startTranslate">提交</i-button>
                    <i-button type="ghost" style="margin-left: 8px" @click.native="cancel">取消</i-button>
                </Form-item>
            </i-form>
            <div class="logContent">
                <p v-for="log in logs">{{log}}</p>
            </div>
       </div>
   </div>    
</template>

<script>
const electron = require("electron");
const ipcRenderer = require("electron").ipcRenderer;
const remote = require("electron").remote;
const svg2iconfont = remote.require("svg2iconfont");
export default {
        data () {
                return {
                    formItem: {
                        input:'',
                        output:'',
                        checkbox:['iconfonts'],
                    },
                    logs:[],
            }
        },
        methods:{
            cancel(){
                this.$router.replace("/mainPage")
            },
             /**
             * call主进程打开文件夹选件：
             * type 输入输出类型
             */
            inputClick(type){
                ipcRenderer.send("openFileDir",type);
            },
             /**
            *向主进程发送消息
            */
            sendMsg(msg){
                let option = {
                    type:msg.type,
                    msg:msg.msg||"",
                }
                ipcRenderer.send("receiveMsg",option)
            },
            /**
             * 开始转换
             */
            startTranslate(){
                this.logs = [];
                let strs = {
                    "input":"导入地址不能为空",
                    "output":"导出地址栏不能为空"
                };
                for(let key in this.formItem){
                    let val = this.formItem[key];
                    if(!val){
                       this.$Message.warning(strs[key]);
                       return false;
                    }
                };
                let options = {
                    type:'translate',
                    msg : this.formItem
                }
                svg2iconfont.parse(this.formItem.input,this.formItem.output,(res)=>{
                      console.log("translate:",res.msg);
                      if(this.logs.length>4){
                          this.logs.shift();
                      }
                      this.logs.push(res.msg)
                })
            }
        },
        mounted(){
            let self = this;
            ipcRenderer.on("message",(event,message)=>{
                let type = message.type;
                console.log("type:",type,"msg:",message);
                if(self.formItem[type]||self.formItem[type]==""){
                   let path = message.msg[0];
                   self.formItem[type] = path;
                }else{
                     let msg = message.msg;
                     console.log("msg:",msg);
                }
               
            });
        }
}
</script>

<style lang="less">
   .createIcon{
       .header{
           position: relative;
           top: 50px;
           height: 30px;
           text-align: center;
           font-size: 15px;
           color:#fff
       }
       .content{
           position: relative;
           form{
                color:#fff;
                position: relative;
                width: 250px;
                margin: 100px auto;
                margin-bottom: 10px;
           }
       }
       .ivu-btn{
           margin-right: 10px;
       }
       .ivu-form .ivu-form-item-label{
           color: #fff
       }
       .logContent{
           height: 150px;
           width: 80%;
           background:#168e92;
           margin: 0 auto;
           overflow: auto;
           padding: 5px 10px;
           color: #fff;
           text-align: center;
       }
   }
</style>
