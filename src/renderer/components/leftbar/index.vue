/*
  * | 页面
*/
<template>
    <div class="leftBar flex-cloumn-start_star">
            <div class="status flex-row-center-center">
                    <div class="dot min flex-row-center-center" @click="windowOperate('min')">
                           <img :src="icon_min" alt="">
                        <!--<Icon type="minus-round"></Icon>-->
                    </div>
                    <div class="dot max flex-row-center-center" @click="windowOperate('max')">
                            <img :src="icon_max" alt="">
                         <!--    <Icon type="md-expand" />-->
                    </div>
                    <div class="dot close flex-row-center-center" @click="windowOperate('close')">
                            <img :src="icon_close" alt="">
                         <!--<Icon type="close-round"></Icon>-->
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
               icon_max:require("@/assets/icons/bar_max.png"),
               icon_min:require("@/assets/icons/bar_min.png"),
               icon_close:require("@/assets/icons/bar_close.png"),
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