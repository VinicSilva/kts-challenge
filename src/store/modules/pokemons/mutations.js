export default {
  setPokemons(state, pokemons) {
    state.pokemonsList.push(...pokemons);
  },
  incrementOffset(state) {
    state.offset += 24;
  },
  setCurrentPokemon(state, pokemon) {
    state.currentPokemon = pokemon;
  },
  setPokemonAbilities(state, abilities) {
    state.pokemonAbilities = abilities;
  },
};
