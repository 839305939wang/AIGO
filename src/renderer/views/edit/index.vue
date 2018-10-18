/*
 * |编辑界面 
*/
<template>
    <div class="editPage flex-cloumn-start_start">
        <div class="edit_bar">
            <edit-bar @click="editbarClick"></edit-bar>
        </div>
        <div class = "up flex-row-start_start">
            <div class="up_left">
                <!--图像显示区-->
                <div class="video_view_content">
                    <image-show></image-show>
                </div>
            </div>
            <div class="up_right flex-cloumn-start_start">
                <!--相机参数设置区-->
                <div class="header"></div>
                <div class="carmer_setting_content border">
                    <div class="carmer_setting_header">

                    </div>
                    <div class="carmer_setting_content">

                    </div>
                    <div class="carmer_setting_footer">

                    </div>
                </div>
            </div>
        </div>
        <div class="down setting_content">
            <!--参数设置区-->
            <div class="setting_content_left"></div>
            <div class="setting_content_right"></div>
        </div>
    </div>
</template>
<script>
    import editBar from "./module/editBar.vue";
    import imageShow from "./module/imageShow.vue"
    export default{
        data(){
            return {

            }
        },
        components:{
            editBar,
            imageShow
        },
        props:{
            data:{
                default:()=>[],
                type:Array
            },
            /**
             * 编辑页面顶部操作页面处理逻辑 
             * @param{Object} data 处理类型 
             */
            editbarClick(data){

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