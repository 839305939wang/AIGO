/*
 * |编辑界面 
*/
<template>
    <div class="editPage">
         <div class="up">
            <div class="showImageCOntent">
             
            </div>
         </div>
         <div class="down"></div>
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
    @import url("~@/static/css/page/editPage.less");

</style>