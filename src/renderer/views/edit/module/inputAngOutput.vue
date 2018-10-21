/*
  * | 编辑页面input&ouput模块
*/
<template>
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
</template>
<script>
    export default{
        data(){
            return {
                cermraList:[ 
                    {value: '0',label: 'Beganner'},
                    {value: '1',label: 'Beganner'},
                    {value: '2',label: 'Beganner'},
                    {value: '3',label: 'Beganner'}
                ],
                settingInfo:{
                    value5:"",
                },
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