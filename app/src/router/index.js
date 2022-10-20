//配置路由的地方
import Vue from "vue";
import VueRouter from "vue-router";
//使用插件
Vue.use(VueRouter);

import routes from "./routes";
//引入仓库store
import store from "@/store";
//先把VueRouter原型对象的push|replace方法进行先保存一份
//需要重写VueRouter.prototype身上的push|replace方法
let originPush = VueRouter.prototype.push;

let originReplace = VueRouter.prototype.replace;
//重写push|replace
//第一个参数：告诉原来的push方法往哪里跳转(传递哪些参数)
//apply和call的区别：相同点：两者都可以调用函数一次，都可以篡改函数的上下文一次，不同点：call和apply传递参数：call传递参数用逗号隔开，apply方法执行传递数组
VueRouter.prototype.push = function (localtion, resolve, reject) {
  if (resolve && reject) {
    originPush.call(this, localtion, resolve, reject);
  } else {
    originPush.call(
      this,
      localtion,
      () => {},
      () => {}
    );
  }
};
VueRouter.prototype.replace = function (localtion, resolve, reject) {
  if (resolve && reject) {
    originReplace.call(this, localtion, resolve, reject);
  } else {
    originReplace.call(
      this,
      localtion,
      () => {},
      () => {}
    );
  }
};

//配置路由
let router = new VueRouter({
  //配置路由 kv一致
  routes,
  //滚动行为
  scrollBehavior(to, from, savedPosition) {
    // return 期望滚动到哪个的位置y=0 代表滚动条在最上方
    return { y: 0 };
  },
});
//全局守卫：前置守卫，(在路由跳转之前进行判断)
router.beforeEach(async (to, from, next) => {
  //to:可以获取到你要跳转的哪个的路由信息
  //from:可以获取到你从哪个路由而来的信息
  /*写法一：next:放行函数  next()放行  写法二：next('/login') next(path) 放行到指定的路由 
写法三：next(false):中断当期的导航如果浏览器的 URL 改变了 (可能是用户手动或者浏览器后退按钮)，那么 URL 地址会重置到 from 路由对应的地址。*/
  //next();
  //用户登录了，才会有token，未登录一定不会有token
  let token = store.state.user.token;
  //用户信息，用来判断是否进行跳转
  let name = store.state.user.userInfo.name;
  if (token) {
    //用户已经登录了还想去login，不能去，停留在首页
    if (to.path == "/login"||to.path=="/register") {
      next("/");
    } else {
      //登录了但是去的不是login 可能是【home|search|detail|shopcart】
      //如果用户名已有
      if (name) {
        next();  
      } else {
        try {
          //没有用户信息，在派发action让仓库存储用户信息在跳转
          //获取用户信息成功，放行
          await store.dispatch("getUserInfo");
          next();
        } catch (error) {
            //token失效了，获取不到用户信息，需要重新登录  1.清除token，退出登录action做过，直接派发action
           await store.dispatch("userLogout");
           next('/login');
        }
      }
    }
  } else {
    //未登录访问：交易相关(trade)、支付相关（pay，paysuccess）用户中心(center)相关跳转登录页面
    //未登录去上面的页面----登录页  
    let toPath=to.path;
    if(toPath.indexOf("/trade")!=-1||toPath.indexOf('/pay')!=-1||toPath.indexOf('/center')!=-1){
      //把未登录的时候想去而没有去成的信息，存储于地址栏中【路由】
      //通过query把想要去的页面路由传递过去
      next('/login?redirect='+toPath);
    }else{  //去的不是上面的页面(home,search,shopcart)-----放行
        next()
    }
  }
});

export default router;
