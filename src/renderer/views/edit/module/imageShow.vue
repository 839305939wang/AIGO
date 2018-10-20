/*
* | 图像显示模块
*/
<template>
  <div class="imageShow flex-cloumn-start_start">
        <!--图像显示区-->
        <div class="image_view flex-cloumn-start_start">
                <div class="image_view_up">
                        <Tabs type="card" closable @on-tab-remove="handleTabRemove">
                                <TabPane label="标签一" v-if="true">
                                    <div class="image_area flex-cloumn-center_center">
                                         <div class="img">
                                             <img src="" alt="">
                                         </div>
                                    </div>
                                </TabPane>
                                <TabPane label="标签二" v-if="true">标签二的内容</TabPane>
                                <TabPane label="标签三" v-if="true">标签三的内容</TabPane>
                        </Tabs>
                        <div class="stamp total">
                            <p>{{stamp.total}}</p>
                        </div>
                        <div class="stamp yes">
                            <p>OK</p>
                            <p>{{stamp.yes}}</p>      
                        </div>
                </div>
                <div class="image_view_down flex-row-start_start">
                    <div class="image_view_down_item flex-row-start_start image_view_status">
                          <div class="image_view_status_item_left flex-row-start_start">
                              <div class="image_view_status_item_obj normal"></div>
                              <div class="image_view_status_item_obj alarm"></div>
                              <div class="image_view_status_item_obj warn"></div>
                              <div class="image_view_status_item_obj stop"></div>
                          </div>
                          <div class="image_view_status_item_right flex-row-start_start">
                                <div class="image_view_status_item_right_item normal">3D</div>
                                <div class="image_view_status_item_right_item normal">PA</div>
                                <div class="image_view_status_item_right_item stop">CU</div>
                                <div class="image_view_status_item_right_item normal">BX</div>
                                <div class="image_view_status_item_right_item normal">CT</div>
                          </div>
                    </div>
                    <div class="image_view_down_item image_view_message">
                        <div class="message">{{message}}</div>
                    </div>
                    <div class="image_view_down_item image_view_operate flex-row-end-center">
                            <div class="image_view_operate_item">SA</div>
                            <div class="image_view_operate_item flex-row-center-center">
                                   <img :src="icon_max" alt="">
                            </div>
                            <div class="image_view_operate_item flex-row-center-center">
                                    <img :src="icon_min" alt="">
                            </div>
                    </div>
                </div>
        </div>
        <!--图像缓冲区-->
        <div class="video_image_list flex-row-center-center">
            <div class="video_image_list_box flex-row-start_center">
                <div class="video_image_list_box_img" v-for="(path,index) in localImages" :key="index">
                     <img :src="path" alt="">
                </div>
            </div>
            <div class="video_image_list_import" @click="openDir">
                ...
            </div>
        </div>
  </div>
</template>
<script>
  const remote = require("electron").remote;
  const dialog = remote.dialog;
  export default{
      name:'imageShow',
      data(){
          return {
            icon_max : require("@/assets/icons/max.png"),
            icon_min : require("@/assets/icons/min.png"),
            message:"[P]351.5 496.14 [C]161 159 153",
            stamp:{
                yes:"0 [0,100%]",
                total:`1/3`
            },
            localImages:[],//打开的默认本地文件
          }
      },
      props:{
          data:{
              default:()=>[],
              type:Array
          }
      },
      methods:{
        /**
         * 打开本地文件夹
         */
        openDir(){
           dialog.showOpenDialog({
               properties: ['openFile','multiSelections'],
               filters: [
                {name: 'Images', extensions: ['jpg', 'png', 'gif']}
               ] 
            },(paths,files)=>{
                if(paths.length>5){
                    this.$Notice.warning({
                        title: '最多只能选择5张图片',
                        desc: ''
                    });
                    return false;
                }
                this.localImages = paths;
            });
        },
        /**
         * 关闭图像显示tab页
         * @param {string } tab tab ID 
        */
        handleTabRemove(tab){
            console.log("tab:",tab);
        }
      },
      mounted(){
        this.$Notice.config({
            top:300,
            duration: 3
        })
      }
  }
</script>
<style lang="less" scoped="true">
   @import "~@/static/css/page/editPage.less";
</style>