<template>
    <div class="mainPage flex-cloumn-start_start">
        <header class="header">
              <tool-bar @toolbarClick="toolbarClick"></tool-bar>     
        </header>
        <div class="content flex-row-start_start">
            <div class="left">
                <left-bar></left-bar>
            </div>
            <div class="right">
                 <router-view></router-view>
            </div>
        </div>
    </div>    
</template>

<script>
    import toolBar from "@/components/header/index.vue";
    import leftBar from "@/components/leftbar/index.vue";
    export default{
        data(){
            return {

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
           toolbarClick(type){
              switch(type){
                    case "close":
                      console.log("close");
                      this.$common.sendMsg({type:'close',msg:''});
                      break;
                    case "min":
                       console.log("min");
                       this.$common.sendMsg({type:'hide',msg:''});
                       break;
              }
           },
           
        },
        mounted(){
            this.$router.push("/main/edit");
        }
    }
</script>

<style lang="less" scoped>
    @import url("~@/static/css/page/main.less");
</style>