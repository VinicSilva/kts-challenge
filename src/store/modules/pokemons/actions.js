import {
  calculateLimit,
  generateEndpoints,
  fetchPokemonData,
  fetchAbilityData,
  fetchPokemonDetails,
} from "./api";

export default {
  async getPokemons({ commit, state }) {
    const limit = calculateLimit(state.offset);
    const endpoints = generateEndpoints(state.offset, limit);

    const pokemons = await Promise.all(endpoints.map(fetchPokemonData));
    commit("setPokemons", pokemons);
  },

  async getCurrentPokemon({ commit }, id) {
    fetchPokemonDetails(id).then(({ data }) => {
      commit("setCurrentPokemon", data);
    });
  },

  async getPokemonAbilities({ commit }, endpoints) {
    const abilities = await Promise.all(endpoints.map(fetchAbilityData));
    commit("setPokemonAbilities", abilities);
  },
};
