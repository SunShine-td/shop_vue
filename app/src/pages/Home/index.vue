<template>
<!-- 三级联动全局组件：不需要在下面引入 -->
  <div>
    <TypeNav/>
    <ListContainer/>
    <Recommend/>
    <Rank/>
    <Like/>
    <!-- Floor组件：在自己的组件内部是没有发请求的，数据是父组件给的 -->
    <Floor v-for="(floor,index) in floorList" :key="floor.id" :list="floor"/>
    <Brand/>
  </div>
</template>

<script>
import ListContainer from '@/pages/Home/ListContainer'
import Recommend from '@/pages/Home/Recommend'
import Rank from '@/pages/Home/Rank'
import Like from '@/pages/Home/Like'
import Floor from '@/pages/Home/Floor'
import Brand from '@/pages/Home/Brand'
import {mapState} from 'vuex'
    export default {
      name:'',
      components:{ListContainer,Recommend,Rank,Like,Floor,Brand},
      mounted() {
        //派发action，获取floor组件的数据
        this.$store.dispatch("getFloorList");
      },
      computed: {
        ...mapState({
          floorList:state=>state.home.floorList
        })
      }
    }
</script>

<style>

</style>