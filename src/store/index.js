import Vue from "vue";
import Vuex from "vuex";

import posts from "./modules/post";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    posts,
  },
});

// export default new Vuex.Store({
//   state: {},
//   mutations: {},
//   actions: {},
//   modules: {},
// });
