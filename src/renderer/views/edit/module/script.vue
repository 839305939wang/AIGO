/*
  * | 编辑页面下反复script模块
*/
<template>
    <div class="carmer_setting_content_item flex-row-start_start">
        <div class="carmer_setting_content_item_left flex-cloumn-start_start">
            <div class="content">
                    <Tabs type="card">
                            <TabPane label="Inspect Before">
                                <div class="card_item inspect_before">
    
                                </div>
                            </TabPane>
                            <TabPane label="Inspect After">
                                <div class="card_item inpect_after">
    
                                </div>
                            </TabPane>
                    </Tabs>
            </div>    
            <div class="footer flex-row-between-center">
                    <div class="left  flex-row-start_center">
                           <div class="s_btn">
                                complie
                           </div>
                           <Input></Input>
                    </div>
                    <div class="right flex-row-end-center">
                            <div class="s_btn">
                                    <img :src="icons.file" alt="">
                            </div>
                           <div class="s_btn">
                                   +/-
                           </div>
                    </div>
               </div>
        </div>
        <div class="carmer_setting_content_item_right flex-cloumn-start_start scripts_right">
                <div class="content">
                        <Tabs type="card">
                                <TabPane label="Variables">
                                    <div class="card_item variables">
                                            <Table border :columns="variablesColumns" :data="variablesData">
                                                
                                            </Table>
                                    </div>
                                </TabPane>
                                <TabPane label="Inputs">
                                    <div class="card_item inputs">
                                            <Table border :columns="variablesColumns" :data="variablesData">
                                                
                                            </Table>
                                    </div>
                                </TabPane>
                                <TabPane label="Outputs">
                                        <div class="card_item outputs">
                                                <Table border :columns="variablesColumns" :data="variablesData">
                                                
                                                </Table>
                                        </div>
                                </TabPane>
                                <TabPane label="Correction">
                                        <div class="card_item correction">
                                                <Table border :columns="variablesColumns" :data="variablesData">
                                                
                                                </Table>
                                        </div>
                                </TabPane>
                                <TabPane label="Help">
                                        <div class="card_item help">
                                                <Table border :columns="variablesColumns" :data="variablesData">
                                                
                                                </Table>
                                        </div>
                                </TabPane>
                        </Tabs>
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
                variablesColumns:[
                    {title: 'Name',key: 'name'},
                    {title: 'Age',key: 'age'}
                ],
                variablesData:[],
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