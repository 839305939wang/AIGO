/*
  * | 编辑页面下反复digital模块
*/
<template>
    <div class="carmer_setting_content_item flex-row-start_start">
        <div class="carmer_setting_content_item_left flex-cloumn-start_start">
            <div class="content">
                 <div class="propertyGrid">

                 </div>
            </div>
            <div class="footer flex-row-between-center">
                    <div class="left  flex-row-start_center">
                         
                    </div>
                    <div class="right flex-row-end-center">
                            <div class="s_btn">
                                +
                            </div>
                           <div class="s_btn">
                                -
                           </div>
                    </div>
               </div>
        </div>
        <div class="carmer_setting_content_item_right flex-cloumn-start_start">
                <div class="content">
                        <div class="indicatorContent flex-cloumn-start_start">
                            <div class="indicatorContentItem indicatorContent_up flex-cloumn-start_start">
                                <div class="indicatorContentItemHeader">
                                    Inputs Monitor
                                </div>
                                <div class="indicatorContentItemBody flex-cloumn-start_start">
                                  
                                        <div class="statusRow flex-row-start_start" v-for="(row,index) in monitors">
                                            <div class="statusText startNumber">{{index*8+1}}</div>
                                            <div class="statusReact status flex-row-center-center" v-for="(item,key) in row">
                                                <div :class="{status_dot:true,normal:item.status==1,alarm:item.status==0}" ></div>
                                            </div>
                                            <div class="statusText endNumber">{{index*8+row.length}}</div>
                                        </div>
                                </div>
                            </div>
                            <div class="indicatorContentItem indicatorContent_dwon flex-cloumn-start_start">
                                    <div class="indicatorContentItemHeader">
                                         Outputs Testor
                                    </div>
                                    <div class="indicatorContentItemBody flex-cloumn-start_start">
                                            <div class="statusRow flex-row-start_start" v-for="(row,index) in monitors">
                                                    <div class="statusText startNumber">{{index*8+1}}</div>
                                                    <div class="statusReact status flex-row-center-center" v-for="(item,key) in row">
                                                        <div :class="{status_dot:true,normal:item.status==1,alarm:item.status==0}" ></div>
                                                    </div>
                                                    <div class="statusText endNumber">{{index*8+row.length}}</div>
                                            </div>
                                    </div>
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
                monitors:[
                   [{status:1,name:''},{status:0,name:''},{status:0,name:''},{status:0,name:''},{status:0,name:''},{status:0,name:''},{status:0,name:''},{status:0,name:''}],
                   [{status:1,name:''},{status:0,name:''},{status:0,name:''},{status:0,name:''},{status:0,name:''},{status:0,name:''},{status:0,name:''},{status:0,name:''}]
                ],
                testors:[
                   [{status:1,name:''},{status:0,name:''},{status:0,name:''},{status:0,name:''},{status:0,name:''},{status:0,name:''},{status:0,name:''},{status:0,name:''}],
                   [{status:1,name:''},{status:0,name:''},{status:0,name:''},{status:0,name:''},{status:0,name:''},{status:0,name:''},{status:0,name:''},{status:0,name:''}]
                ]
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