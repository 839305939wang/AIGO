/*
  * | 页面
*/
<template>
    <div class="leftBar flex-cloumn-start_star">
            <div class="status flex-row-center-center">
                    <div class="dot min" @click="windowOperate('min')">
                        <Icon type="minus-round"></Icon>
                    </div>
                    <div class="dot max" @click="windowOperate('max')">
                        <Icon type="qr-scanner"></Icon>
                    </div>
                    <div class="dot close" @click="windowOperate('close')">
                        <Icon type="close-round"></Icon>
                    </div>
            </div>
            <div class="barList">
                    <div class="menuItem flex-cloumn-center_center active">
                        <img class="icon" src="../../static/images/Camera.png">
                    </div>
            </div>
    </div>
</template>
<script>
    export default{
        data(){
            return {

            }
        },
        props:{
            data:{
                default:()=>[],
                type:Array
            }
        },
        methods:{
             /*
             * 窗口工具栏点击事件
             * @param {String} type 事件类型 
             */
            windowOperate(type){
                this.$emit("windowOperate",type)
            }
        },
        mounted(){

        }
    }
</script>
<style lang="less">
    @import "~@/static/css/components/leftbar.less";
</style>