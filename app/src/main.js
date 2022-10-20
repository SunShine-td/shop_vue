import Vue from "vue";
import App from "./App.vue";
//引入路由
import router from "@/router";
//三级联动组件---全局组件
import TypeNav from "./components/TypeNav";
import Carousel from "@/components/Carousel";
import Pagination from '@/components/Pagination';
import { Button, MessageBox} from 'element-ui';
//注册全局组件
Vue.component(Button.name, Button);
//Element-ui注册组件的时候，还有一种写法，挂在原型上
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
//第一个参数为：全局组件的名子，第二个参数：哪一个组件
Vue.component(TypeNav.name, TypeNav);
Vue.component(Carousel.name, Carousel);
Vue.component(Pagination.name,Pagination)
//引入仓库
import store from "./store";  

//引入 MockServe.js ----mock数据
import "@/mock/mockServe";
//引入swiper样式
import "swiper/css/swiper.css";

//统一接口api文件夹全部请求函数
import * as API from '@/api';   //统一引入

//引入图片
import atm from '@/assets/1.gif';
//引入插件
import VueLazyload from 'vue-lazyload';
//引入自定义插件
Vue.use(myPlugins,{
  name:'upper'
})
//注册插件
Vue.use(VueLazyload,{
  //懒加载默认的图片
  loading:atm
});

//引入自定义插件
import myPlugins from '@/plugins/myPlugins';
Vue.config.productionTip = false;

//引入表单校验插件
import "@/plugins/validate";

new Vue({
  render: (h) => h(App),
  //注册路由信息：当这里书写router的时候，组件身上都拥有$route,$router属性
  router, //注册路由
  store, //注册仓库：组件身上会多个属性$store属性
  //全局事件总线$bus的配置
  beforeCreate() {
    Vue.prototype.$bus = this;
    Vue.prototype.$API=API;   //接收api文件夹的全部接口，所有组件都可以调用，不在一个个引入调用
  },
}).$mount("#app");
   