import Vue from 'vue'
import Vuex from 'vuex';
import logger from 'vuex/dist/logger'
Vue.use(Vuex);

import mutations from './mutations'

const state={count:0};


export default new Vuex.Store({
  state,
  mutations,
  plugins:[logger()],
  strict:true
});
