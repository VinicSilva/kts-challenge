import actions from "@/store/modules/pokemons/actions.js";
import mutations from "@/store/modules/pokemons/mutations.js";

const state = {
  pokemonsList: [],
  offset: 0,
  currentPokemon: {},
  pokemonAbilities: [],
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};
