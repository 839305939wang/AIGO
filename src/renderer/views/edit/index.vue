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
                                <div class="settingContent flex-cloumn-start_start">
                                    <div class="carmer_setting_content_item setting flex-cloumn-start_start">
                                        <div class="setting_header flex-row-center-center">
                                            <div class="setting_header_label">Visibility</div>
                                            <Select v-model="model8" clearable>
                                                <Option v-for="item in cermraList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                                            </Select>
                                        </div>
                                        <div class="setting_content"> </div>
                                    </div>
                                    <div class="carmer_setting_footer">
                                        <Input v-model="settingInfo.value5" :rows="5" type="textarea" placeholder="Enter something..." />
                                    </div>
                                </div>
                            </TabPane>
                            <TabPane label="Input & Output">
                                <div class="settingContent flex-cloumn-start_start">
                                             <div class="carmer_setting_content_item setting flex-cloumn-start_start">
                                                <div class="setting_header flex-row-center-center">
                                                    <div class="setting_header_label">Visibility</div>
                                                    <Select v-model="model8" clearable>
                                                        <Option v-for="item in cermraList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                                                    </Select>
                                                </div>
                                                <div class="setting_content"> </div>
                                            </div>
                                            <div class="carmer_setting_footer">
                                                <Input v-model="settingInfo.value5" :rows="5" type="textarea" placeholder="Enter something..." />
                                            </div>
                                </div>
                            </TabPane>
                    </Tabs>
                    <!--<div class="carmer_setting_content border">
                       <div class="carmer_setting_content_item setting flex-cloumn-start_start">
                           <div class="setting_header"></div>
                           <div class="setting_content">
                               1
                           </div>
                       </div>
                       <div class="carmer_setting_content_item io flex-cloumn-start_start">
                           2
                       </div>
                    </div>
                    <div class="carmer_setting_footer">
                        <Input v-model="settingInfo.value5" :rows="5" type="textarea" placeholder="Enter something..." />
                    </div>-->
                </div>
            </div>
        </div>
        <div class="down setting_content">
            <!--参数设置区-->
            <div class="setting_content">
                    <Tabs type="card">
                            <TabPane label="Inspection">
                                <div class="carmer_setting_content_item flex-row-start_start">
                                    <div class="carmer_setting_content_item_left flex-cloumn-start_start">
                                        <div class="content">
                                                <Table border ref="inspection" :columns="inspectionColumns" :data="inspectionData"></Table>
                                        </div>
                                        <div class="footer flex-row-between-center">
                                             <div class="left flex-row-start_center">
                                                    <div class="s_btn">
                                                            <img :src="icons.file" alt="">
                                                    </div>
                                                    <div class="s_btn">
                                                            <img :src="icons.file" alt="">
                                                    </div>
                                                    <div class="s_btn">
                                                            <img :src="icons.delete" alt="">
                                                    </div>
                                                    <div class="s_btn">
                                                            <img :src="icons.question" alt="">
                                                    </div>
                                             </div>
                                             <div class="center flex-row-end-center">
                                                    <div class="s_btn disable">
                                                            <img :src="icons.up" alt="">
                                                    </div>
                                                    <div class="s_btn disable">
                                                            <img :src="icons.down" alt="">
                                                    </div>
                                             </div>
                                             <div class="right flex-row-end-center">
                                                    <div class="s_btn">
                                                            +/-
                                                    </div>
                                             </div>
                                        </div>
                                    </div>
                                    <div class="carmer_setting_content_item_right flex-cloumn-start_start">
                                            <Tabs type="card">
                                                    <TabPane label="Setting List">
                                                        <div class="content">
                                                                <Table border ref="SettingList" :columns="SettingListColumns" :data="SettingListData"></Table>
                                                        </div>
                                                    </TabPane>
                                                    <TabPane label="Show List">
                                                            <div class="content">
                                                                <Table border ref="ShowList" :columns="ShowListColumns" :data="ShowListnData"></Table>
                                                            </div>
                                                    </TabPane>
                                            </Tabs>
                                    </div>
                                </div>
                            </TabPane>
                            <TabPane label="Script">
                                <div class="carmer_setting_content_item flex-row-start_start">
                                    <div class="carmer_setting_content_item_left flex-cloumn-start_start"></div>
                                    <div class="carmer_setting_content_item_right flex-cloumn-start_start"></div>
                                </div>
                            </TabPane>
                            <TabPane label="Digital I/O">
                                <div class="carmer_setting_content_item flex-row-start_start">
                                    <div class="carmer_setting_content_item_left flex-cloumn-start_start"></div>
                                    <div class="carmer_setting_content_item_right flex-cloumn-start_start"></div>
                                </div>
                            </TabPane>
                            <TabPane label="Serial Port">
                                <div class="carmer_setting_content_item flex-row-start_start">
                                    <div class="carmer_setting_content_item_left flex-cloumn-start_start"></div>
                                    <div class="carmer_setting_content_item_right"></div>
                                </div>
                            </TabPane>
                            <TabPane label="TCP/IP">
                                <div class="carmer_setting_content_item flex-row-start_start">
                                    <div class="carmer_setting_content_item_left flex-cloumn-start_start"></div>
                                    <div class="carmer_setting_content_item_right flex-cloumn-start_start"></div>
                                </div>
                            </TabPane>
                            <TabPane label="Storage">
                                <div class="carmer_setting_content_item flex-row-start_start">
                                    <div class="carmer_setting_content_item_left"></div>
                                    <div class="carmer_setting_content_item_right"></div>
                                </div>
                            </TabPane>
                    </Tabs>
            </div>
            <!--<div class="setting_content_right">

            </div>-->
        </div>
    </div>
</template>
<script>
    import editBar from "./module/editBar.vue";
    import imageShow from "./module/imageShow.vue"
    export default{
        data(){
            return {
                settingInfo:{
                    value5:"",
                },
                icons:{
                    file:require("@/assets/icons/file.png"),
                    delete:require("@/assets/icons/delete.png"),
                    up:require("@/assets/icons/up.png"),
                    down:require("@/assets/icons/down.png"),
                    question:require("@/assets/icons/question.png"),
                },
                cermraList:[ 
                    {value: '0',label: 'Beganner'},
                    {value: '1',label: 'Beganner'},
                    {value: '2',label: 'Beganner'},
                    {value: '3',label: 'Beganner'}
                ],
                inspectionColumns:[
                     {title: 'Fxnid', key: 'Fxnid'},
                     {title: 'Name', key: 'Name'},
                     {title: 'Type', key: 'Type'},
                     {title: 'Type', key: 'Type'},
                ],
                inspectionData:[],
                SettingListColumns:[
                    {title: 'ID', key: 'id'},
                    {title: 'Function Input Name', key: 'name'}
                ],
                SettingListData:[],
                ShowListColumns:[
                    {title: 'ID', key: 'id'},
                    {title: 'Function Input Name', key: 'name'}
                ],
                ShowListData:[]
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
<style lang="less" scoped="true">
    @import url("~@/static/css/page/editPage.less");

</style>