/*
* | 图像显示模块
*/
<template>
  <div class="imageShow flex-cloumn-start_start">
        <!--图像显示区-->
        <div class="image_view">
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
        </div>
        <!--图像缓冲区-->
        <div class="video_image_list">
            
        </div>
  </div>
</template>
<script>
  export default{
      name:'imageShow',
      data(){
          return {

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
   @import "~@/static/css/page/editPage.less";
</style>