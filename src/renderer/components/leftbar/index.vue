/*
  * | 页面
*/
<template>
    <div class="leftBar flex-cloumn-start_star">
            <div class="status flex-row-center-center">
                    <div class="dot"></div>
                    <div class="dot"></div>
                    <div class="dot"></div>
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

        },
        mounted(){

        }
    }
</script>
<style lang="less">
    @import "~@/static/css/components/leftbar.less";
</style>