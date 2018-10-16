<template>
    <div class="toolbar">
                <div class="close" @click="closeApp()">
                    <Icon type="close-round"></Icon>
                </div>
                <div class="max">
                    <Icon type="qr-scanner"></Icon>
                </div>
                <div class="min" @click="hideApp()">
                    <Icon type="minus-round"></Icon>
                </div>
    </div> 
</template>
<script>
    export default{
        name:'toolbar',
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
    
</style>