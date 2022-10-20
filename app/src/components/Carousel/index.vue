<template>
<!-- 轮播图 -->
  <div class="swiper-container" ref="floor1Swiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(carousle, index) in list" :key="carousle.id">
        <img :src="carousle.imgUrl" />
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<script>
import Swiper from 'swiper' //引入包
export default {
  name: "Carousel",
  props:['list'],
  watch: {
       list:{
        immediate:true,//立即监听，不管你数据有没有变化，上来立即监听一次
        //watch监听不到list，因为这个数据从来就没变化过，数据是父组件给的，父组件给的就是一对象，对象里面的数据都是有的
        handler(){
          this.$nextTick(()=>{
              var mySwiper = new Swiper (this.$refs.floor1Swiper, {
              loop: true, // 循环模式选项
                // 如果需要分页器
              pagination: {
                el: '.swiper-pagination',
                //点击小球的时候也可以进行切换
                clickable:true
                      },
                // 如果需要前进后退按钮
                navigation: {
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev',
                        },
              }) 
          })
        }
      }
    }
};
</script>

<style>
</style>