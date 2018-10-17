<template>
    <div class="toolbar flex-row-start_center" style="">
                <div class="toolbar_item close" @click="toolbarClick('close')">
                    <Icon type="close-round"></Icon>
                </div>
                <!--<div class="toolbar_item max">
                    <Icon type="qr-scanner" @click="toolbarClick()"></Icon>
                </div>-->
                <div class="toolbar_item min" @click="toolbarClick('min')">
                    <Icon type="minus-round"></Icon>
                </div>
                <div class="toolbar_item logo">
                    {{logo}}
                </div>
                <div class="toolbar_item move"></div>
    </div> 
</template>
<script>
    export default{
        name:'toolbar',
        data(){
            return {
              logo:"AIGOMain",
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
             * @param {String} types 事件类型 
             */
            toolbarClick(types){
                this.$emit("toolbarClick",types)
            }
        },
        mounted(){
            
        }
    }
</script>
<style lang="less">
    @import "~@/static/css/components/toolbar.less";
</style>