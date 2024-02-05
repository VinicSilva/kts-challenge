<template>
  <div class="pokemons__container">
    <PokemonCard
      v-for="pokemon in pokemons"
      :key="pokemon.id"
      :pokemon="pokemon"
    />
  </div>
</template>

<script>
import PokemonCard from "./PokemonCard.vue";

export default {
  components: {
    PokemonCard,
  },
  props: {
    pokemons: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss">
.pokemons__container {
  display: grid;
  grid-template-columns: repeat(auto-fill, 153px);
  min-width: 100%;
  max-width: 858px;
  justify-content: center;
  column-gap: 15px;
  row-gap: 30px;
  padding-bottom: 80px;

  @include mobile() {
    column-gap: 23px;
    row-gap: 16px;
  }
}
</style>
