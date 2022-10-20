//引入路由组件
//引入二级路由
import MyOrder from '@/pages/Center/myOrder';
import GroupOrder from '@/pages/Center/groupOrder';

//当打包构建应用时，JavaScript 包会变得非常大，影响页面加载。
//如果我们能把不同路由对应的组件分割成不同的代码块，然后当路由被访问的时候才加载对应组件，这样就更加高效了。
//路由配置信息
export default [
  {
    path: "/center",
    component: ()=>import("@/pages/Center"),
    meta: { isShow: true },
    //二级路由组件
    children:[
      {
        path:"myorder",
        component:MyOrder
      },
      {
        path:"grouporder",
        component:GroupOrder
      },
      {
        path:'/center',
        redirect:'/center/myorder'  //默认打开某个二级路由
      }
    ]
  }, 
  {
    path: "/paysuccess",
    component: ()=>import("@/pages/PaySuccess"),
    meta: { isShow: true },
  },
  {
    path: "/pay",
    component: ()=>import("@/pages/Pay"),
    meta: { isShow: true },
    //路由独享守卫
    beforeEnter: (to, from, next) => {
      if(from.path=="/trade"||from.path=="/"){    //后面条件为刷新当前页面数据消失的问题解决方案
        next();
      }
    }
  },  
  {
    path: "/trade",
    component: ()=>import("@/pages/Trade"),
    meta: { isShow: true },
    //路由独享守卫
    beforeEnter: (to, from, next) => {
      if(from.path=="/shopcart"||from.path=="/"){
        next();
      }else{
        //停留在当前页面
        next(false)
      }
    }
  },
  {
    path: "/shopcart",
    component: ()=>import("@/pages/ShopCart"),
    meta: { isShow: true },
  },
  {
    path: "/addcartsuccess",
    component: ()=>import("@/pages/AddCartSuccess"),
    name:'addcartsuccess',
    meta: { isShow: true },
  },
  {
    path: "/detail/:skuId",
    component: ()=>import("@/pages/Detail"),
    meta: { isShow: true },
  },
  {
    path: "/home",
    component: ()=>import("@/pages/Home"),    //路由懒加载
    meta: { isShow: true },
  },
  {
    path: "/search/:keyword?",
    component: ()=>import("@/pages/Search"),
    meta: { isShow: true },
    name: "search",
    //路由是给组件传递props的
    //函数的写法才是最重要的
    props: (route) => ({
      keyword: route.params.keyword,
      big: route.query.big,
    }),
  },
  {
    path: "/login",
    component: ()=>import("@/pages/Login"),
    meta: { isShow: false },
  },
  {
    path: "/register",
    component: ()=>import("@/pages/Register"),
    meta: { show: false },
  },
  //重定向，在项目跑起来的时候，访问/,立马让他定向到首页
  {
    path: "/",
    redirect: "/home",
  },
];
