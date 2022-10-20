//home模块的小仓库

import {reqCategoryList,reqGetBannerList,reqFloorList} from '@/api';
const state={ 
    //state中的数据默认初始值不要瞎写，服务器返回的是对象，初始值为对象，服务器返回的是数组，初始值为数组，根据接口返回值初始化
    categoryList:[],
    bannerList:[],
    floorList:[],

};
const mutations={
    CATEGORYLIST(state,categoryList){
        state.categoryList=categoryList;
    },
    GETBANNERLIST(state,bannerList){
        state.bannerList=bannerList;
    },
    GETFLOORLIST(state,floorList){
        state.floorList=floorList;
    }
};
const actions={
    //通过API里面的接口函数调用，向服务器发请求，获取服务器的数据
    async categoryList({commit}){
        let result= await reqCategoryList();
        if(result.code==200){
            commit("CATEGORYLIST",result.data);
        }
    },
    //获取首页轮播图的数据
   async getBannerList({commit}){
      let result=await reqGetBannerList();
        if(result.code==200){
            commit('GETBANNERLIST',result.data)
        }
    },
    //获取floor数据
  async getFloorList({commit}){
        let result=await reqFloorList();
        if(result.code==200){
            //提交mutation
            commit("GETFLOORLIST",result.data)
        }
    }
};
//计算属性
const getters={};
export default {
    state,
    mutations,
    actions,
    getters
}