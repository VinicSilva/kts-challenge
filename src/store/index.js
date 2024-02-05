import Vue from "vue";
import Vuex from "vuex";

import PokemonsModule from "@/store/modules/pokemons";

Vue.use(Vuex);

const state = {};
const actions = {};
const mutations = {};
const getters = {};

const modules = {
  pokemons: PokemonsModule,
};

export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters,
  modules,
});
