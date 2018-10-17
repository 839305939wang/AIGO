<template>
    <div class="mainPage flex-cloumn-start_start">
        <header class="header border">
              <toolbar @toolbarClick="toolbarClick"></toolbar>     
        </header>
        <div class="content flex-row-start_start">
            <div class="left border">
             
            </div>
            <div class="right border">
                 <router-view></router-view>
            </div>
        </div>
    </div>    
</template>

<script>
    import toolbar from "@/components/header/index.vue";
    export default{
        data(){
            return {

            }
        },
        components:{
            toolbar
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
            //this.$router.push("/main/edit");
        }
    }
</script>

<style lang="less">
    @import url("~@/static/css/page/main.less");
</style>