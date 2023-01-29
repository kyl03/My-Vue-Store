import { Module } from "vuex";
import { IState } from "..";
import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";
import state, { IProductsState } from "./state";

const productsModule: Module<IProductsState, IState> = {
  namespaced: true, //para que Vue lo separe como modulo
  state,
  getters,
  mutations,
  actions,
};

export default productsModule;
