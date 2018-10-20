/*
  * | 编辑页面顶部操作模块
*/
<template>
    <div class="editBar flex-row-between-center">
        <div class="editBarContent left flex-row-start_center">
            <div class="editBarItem flex-row-center-cente">
                    <Tooltip content="切换到运行界面">
                        <img src="../../../assets/icons/computer.png" class="back">
                    </Tooltip>
            </div>
        </div>
        <div class="move" style="-webkit-app-region: drag"></div>
        <div class="editBarContent right flex-row-start_center">
                <div class="editBarItem flex-row-center-center" v-for="(menu,index) in operations" :key="index">
                        <Tooltip :content="menu.name">
                                <img :src="menu.icon">
                        </Tooltip>
                </div>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return {
               operations:[
                   {icon:require("../../../assets/icons/file.png"),name:'新建任务',type:'1'},
                   {icon:require("../../../assets/icons/open.png"),name:'打开任务',type:'2'},
                   {icon:require("../../../assets/icons/save.png"),name:'保存',type:'3'},
                   {icon:require("../../../assets/icons/carmer.png"),name:'打开相机',type:'4'},
                   {icon:require("../../../assets/icons/rabit.png"),name:'打开机器人',type:'5'},
                   {icon:require("../../../assets/icons/start.png"),name:'启动',type:'6'},
                   {icon:require("../../../assets/icons/stop.png"),name:'停止',type:'6'},
               ]
            }
        },
        props:{
            data:{
                default:()=>[],
                type:Array
            }
        },
        methods:{
            /**
             * 获取图标 
             */
            getIcon(data){
               let url = `../../../assets/icons/${data.icon}.png`
               return url;
            }
        },
        mounted(){

        }
    }
</script>
<style lang="less">
    @import "~@/static/css/page/editPage.less";
</style>