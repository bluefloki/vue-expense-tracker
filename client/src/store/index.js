import Vue from "vue";
import Vuex from "vuex";
import TransactionsModule from "./modules/TransactionsModule";

//Load Vuex
Vue.use(Vuex);

//Create Store
export default new Vuex.Store({
  modules: {
    TransactionsModule,
  },
});
