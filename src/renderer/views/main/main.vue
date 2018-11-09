<template>
    <div class="mainPage flex-cloumn-start_start">
        <header v-if="false" class="header">
              <tool-bar @toolbarClick="toolbarClick"></tool-bar>     
        </header>
        <div class="content flex-row-start_start">
            <div class="left">
                <left-bar @windowOperate="windowOperate"></left-bar>
            </div>
            <div class="right">
              <!--  <transition name="fade" enter-active-class="animated fadeInRight" leave-active-class="animated fadeOutLeft">
                   
                </transition>  -->
                <router-view></router-view>
            </div>
        </div>
    </div>    
</template>

<script>
    //const remote = require("electron").remote;
    import toolBar from "@/components/header/index.vue";
    import leftBar from "@/components/leftbar/index.vue";
    //import Dll from "@/static/js/initLib.js";
    //const ffi = remote.require("ffi");
    export default{
        data(){
            return {
                max:null,
            }
        },
        components:{
            toolBar,
            leftBar 
        },
        props:{
            data:{
                default:()=>[],
                type:Array
            }
        },
        methods:{
           /*
            * 顶部系统操作栏事件处理流程 
            * @param{string} type 事件信息   
            */
            windowOperate(type){
              switch(type){
                    case "close":
                      this.$common.sendMsg({type:'close',msg:''});
                      break;
                    case "min":
                       this.$common.sendMsg({type:'hide',msg:''});
                    case "max":
                       this.max=!this.max;
                       this.max?type="max":type="restore";
                       console.log("type:",type)
                       this.$common.sendMsg({type:type,msg:''});
                       break;
              }
           },
           
        },
        mounted(){
            this.$router.push("/main/edit");
            //console.log("Dll:",Dll.User32.GetSystemMenu)
        }
    }
</script>

<style lang="less" scoped>
    @import url("~@/static/css/page/main.less");
</style>