/*
  * | 编辑页面下反复Inspection模块
*/
<template>
    <div class="carmer_setting_content_item">
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
                inspectionColumns:[
                     {title: 'Fxnid', key: 'Fxnid'},
                     {title: 'Name', key: 'Name'},
                     {title: 'Type', key: 'Type'},
                     {title: 'Type', key: 'Type'},
                ],
                inspectionData:[],
                SettingListColumns:[
                    {title: 'ID', key: 'id'},
                    {title: 'Function', key: 'function'},
                    {title: 'Input Name', key: 'name'}
                ],
                SettingListData:[],
                ShowListColumns:[
                    {title: 'ID', key: 'id'},
                    {title: 'Function', key: 'function'},
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
          console.log("iconsList:",iconsList)
        }
    }
</script>
<style lang="less" scoped="true">
    
</style>