import Vue from 'vue';
import Vuex from 'vuex';

import contributors from './modules/contributors';


Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    contributors
  },
});