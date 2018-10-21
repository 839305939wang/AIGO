/*
  * | 编辑页面下反复Serial Port模块
*/
<template>
    <div class="carmer_setting_content_item flex-row-start_start">
        <div class="carmer_setting_content_item_left flex-cloumn-start_start">
                <div class="content">
                        <Tabs type="card">
                                <TabPane label="Devices"></TabPane>
                                <TabPane label="Manual"></TabPane>
                        </Tabs>
                </div>
                <div class="footer flex-row-between-center">
                           <div class="left  flex-row-start_center">
                                
                           </div>
                           <div class="right flex-row-end-center">
                                    <div class="s_btn">
                                        <img :src="icons.card" alt="">
                                    </div>
                                   <div class="s_btn">
                                       <img :src="icons.card" alt="">
                                   </div>
                                  <div class="s_btn">
                                       <img :src="icons.delete" alt="">
                                  </div>
                           </div>
                </div>
        </div>
        <div class="carmer_setting_content_item_right">
                <Tabs type="card">
                        <TabPane label="Setting List">
                            <div class="content">
                                    <Table border ref="SettingList" :columns="SettingListColumns" :data="SettingListData"></Table>
                            </div>
                        </TabPane>
                        <TabPane label="Show List">
                                <div class="content">
                                    <Table border ref="ShowList" :columns="ShowListColumns" :data="ShowListData"></Table>
                                </div>
                        </TabPane>
                </Tabs>
        </div>
    </div>
</template>
<script>
    import icons from "@/static/js/icons.js";
    const iconsList = icons;
    export default{
        data(){
            return {
                icons:iconsList,
                SettingListColumns:[
                    {title: 'ID', key: 'id'},
                    {title: 'Function Name', key: 'function'},
                    {title: 'Input Name', key: 'name'}
                ],
                SettingListData:[],
                ShowListColumns:[
                    {title: 'ID', key: 'id'},
                    {title: 'Function Name', key: 'function'},
                    {title: 'Input Name', key: 'name'}
                ],
                ShowListData:[]
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
<style lang="less" scoped="true">
    
</style>