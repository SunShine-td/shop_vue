import { reqGetSearchInfo } from "@/api";
//search模块的小仓库
const state = {
    //仓库初始化状态
    searchList:{}
};
const mutations = {
    GETSEARCHLIST(state,searchList){
        state.searchList=searchList
    }
};
const actions = {
  //获取search模块的数据
  async getSearchList({ commit }, params = {}) {
    //当前这个reqGetSearchInfo这个函数在调用获取服务器数据的时候，至少传递一个参数(空对象)
    //params形参：是当用户派发action的时候，第二个参数传递过来的，至少是一个空对象
    let result = await reqGetSearchInfo(params);
    if (result.code == 200) {
      commit("GETSEARCHLIST", result.data);
    }
  },
};
//计算属性，在项目当中为了简化数据而生
//项目中的getters主要的作用就是简化仓库的数据。可以把我们将来在组件要用的数据简化一下【将来组件在获取数据的时候就方便了】
const getters = {
    //当前形参state，是当前仓库中的state，并非大仓库的那个state
    //加假如网络问题或者没有网，state.searchList.goodsList应该返回的是undefined，计算的新的属性至少应该给人家一个数组
    goodsList(state){
        return state.searchList.goodsList||[];
    },
    trademarkList(state){
        return state.searchList.trademarkList||[]
    },
    attrsList(state){
        return state.searchList.attrsList||[]
    }
};
export default {
  state,
  mutations,
  actions,
  getters,
};
