import { createStore } from "vuex";
import { config } from "vuex-module-decorators";

import ControllersModule from "./ControllersModule";

config.rawError = true;

const store = createStore({
  modules: {
    ControllersModule,
  },
  state: {

  },
  mutations: {
   
  },
  actions: {
  
  },
  getters: {
   
  },
});

export default store;
