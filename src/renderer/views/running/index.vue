/*
  * | 运行页面
*/
<template>
    <div class="runingPage flex-cloumn-start_start">
        <div class="runing_header">
                <div class="runingBar flex-row-between-center">
                           <div class="runingBarContent left flex-row-start_center">
                                <div class="runingBarItem flex-row-center-cente" @click="barClick('back')">
                                        <Tooltip content="返回">
                                            <img :src="icons.back" alt="">
                                        </Tooltip>
                                </div>
                            </div>
                            <div class="move" style="-webkit-app-region: drag"></div>
                            <div class="runingBarContent right flex-row-start_center">
                                    <div class="runingBarItem flex-row-center-center">
                                            <Tooltip content="设置">
                                                <img :src="icons.setting" alt="">
                                            </Tooltip>
                                    </div>
                                    <div class="runingBarItem flex-row-center-center">
                                            <Tooltip content="启动运行">
                                                <img :src="icons.start" alt="">
                                            </Tooltip>
                                    </div>
                                    <div class="runingBarItem flex-row-center-center">
                                            <Tooltip content="停止运行">
                                                <img :src="icons.stop" alt="">
                                            </Tooltip>
                                    </div>
                            </div>
                </div>
        </div>
        <div class="runing_container flex-row-start_start">
                <runing-box></runing-box>
                <runing-box></runing-box>
                <runing-box></runing-box>
                <runing-box></runing-box>
        </div>
    </div>
</template>
<script>
    import icons from "@/static/js/icons.js";
    import runingBox from "@/components/runningBox/index.vue";
    const iconsList = icons;
    export default{
        name:'runingPage',
        data(){
            return {
                icons:iconsList,
            }
        },
        components:{
            runingBox
        },
        props:{
            data:{
                default:()=>[],
                type:Array
            }
        },
        methods:{
            /*
             * 顶部操作逻辑
            */
            barClick(type){
                switch(type){
                    case "back":
                      this.$router.replace("/main/edit");
                      break;
                    case "start":

                      break;
                    case "stop":

                       break;
                    case "setting":

                       break;  
                    default:

                      break; 
                }
            }
        },
        mounted(){

        }
    }
</script>
<style lang="less" scoped="true">
     @import "~@/static/css/page/runningPage.less";
</style>