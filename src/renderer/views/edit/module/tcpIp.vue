/*
  * | 编辑页面下反复TCP/IP模块
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
                                       <img :src="icons.delete" alt="">
                                  </div>
                           </div>
                </div>
        </div>
        <div class="carmer_setting_content_item_right flex-cloumn-start_start">
                <div class="content">
                        <Table border ref="SettingList" :columns="SettingListColumns" :data="SettingListData"></Table>
                </div>
                <div class="footer flex-row-between-center">
                        <div class="left  flex-row-start_center">
                             
                        </div>
                        <div class="right flex-row-end-center">
                                <div class="s_btn">
                                    <img :src="icons.edit" alt="">
                                </div>
                               <div class="s_btn">
                                    <img :src="icons.delete" alt="">
                               </div>
                        </div>
             </div>
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
                SettingListData:[]
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