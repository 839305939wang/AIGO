<template>
    <div class="mainPage flex-cloumn-start_start">
        <header class="header border">
              <toolbar @click="toolbarClick"></toolbar>     
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
            * @param{Object} info 事件信息   
            */
           toolbarClick(info){

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