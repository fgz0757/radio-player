import Vue from "vue";
import Vuex from "vuex";
import request from "@/api/index.js";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    playing:false,
    playlist:[],
    currentIndex:null
  },
  getters: {},
  mutations: {
    //拿到播放列表的数据
    getCon(state,data){
        state.playlist = data
    },
    // 播放第一首歌曲
    setIndex(state){
      state.currentIndex=0
    },
    //设置播放状态
    setPlaying(state,val){
      state.playing = val
    },
    //设置播放列表
    setPlaylist(state,val){
      state.playlist = val
    },
    //设置播放歌曲的下标
    setCurrentIndex(state,val){
      state.currentIndex = val
    }
  },
  actions: {
    //获取所有歌曲数据
    async getList(context){
      let {data}  = await request.get("/api")
      context.commit("getCon",data.data)
    }
  },
  modules: {},
});
