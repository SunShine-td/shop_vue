<template>
  <div id="app">
    <MyHeader/>
    <!-- 路由组件出口的地方 -->
    <router-view></router-view>
    <!-- 在 Home、Search显示的，在登入，注册隐藏 -->

    <MyFooter v-show="$route.meta.isShow"/> 
  </div>
</template>

<script>
import MyHeader from './components/MyHeader'
import MyFooter from './components/MyFooter'

export default {
  name: 'App',
  components: {
    MyHeader,MyFooter
  },
  mounted() {
    //让请求只请求一次,派发一个action||获取商品分类的三级列表的数据
     this.$store.dispatch('categoryList');
  },
}
</script>

<style scoped lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
