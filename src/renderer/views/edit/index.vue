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
                <div class="header">
                   
                </div>
                <div class="carmer_setting flex-cloumn-start_start">
                    <Tabs type="card">
                            <TabPane label="Carmer Setting">
                                <carmer-setting></carmer-setting>
                            </TabPane>
                            <TabPane label="Input & Output">
                                <input-output></input-output>
                            </TabPane>
                    </Tabs>
                </div>
            </div>
        </div>
        <div class="down setting_content">
            <!--参数设置区-->
            <div class="setting_content">
                    <Tabs type="card">
                            <TabPane label="Inspection">
                                <inspection></inspection>
                            </TabPane>
                            <TabPane label="Script">
                                <scripts></scripts>
                            </TabPane>
                            <TabPane label="Digital I/O">
                                <digital></digital>
                            </TabPane>
                            <TabPane label="Serial Port">
                                <serial-port></serial-port>
                            </TabPane>
                            <TabPane label="TCP/IP">
                                <tcp-ip></tcp-ip>
                            </TabPane>
                            <TabPane label="Storage">
                                <storage></storage>
                            </TabPane>
                    </Tabs>
            </div>
            <!--<div class="setting_content_right">

            </div>-->
        </div>
    </div>
</template>
<script>
    import modules from "./module/index";
    const {
        inspection,
        scripts,
        serialPort,
        storage,
        tcpIp,
        digital,
        carmerSetting,
        imageShow,
        editBar,
        inputOutput 
    } = modules;
    export default{
        data(){
            return {
                settingInfo:{
                    value5:"",
                },
                icons:{
                   
                },
                cermraList:[ 
                    {value: '0',label: 'Beganner'},
                    {value: '1',label: 'Beganner'},
                    {value: '2',label: 'Beganner'},
                    {value: '3',label: 'Beganner'}
                ],
                
            }
        },
        components:{
            inspection,
            scripts,
            serialPort,
            storage,
            tcpIp,
            digital,
            carmerSetting,
            imageShow,
            editBar,
            inputOutput
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
<style lang="less" scoped="true">
    @import url("~@/static/css/page/editPage.less");

</style>