<template>
  <div @click="redirectToDetails" class="pokemon__card">
    <img
      :src="getImageUrl(pokemon.id)"
      :width="40"
      :height="40"
      alt="Pokemon Image"
    />
    <span class="pokemon__card--title primary-text">{{ pokemon.name }}</span>
    <span class="pokemon__card--subtitle">Cód: {{ pokemon.id }}</span>
    <div class="pokemon__card--tags">
      <TagType v-for="tag in pokemonTypes" :key="tag" :type="tag" />
    </div>
  </div>
</template>

<script>
import TagType from "./TagType.vue";

export default {
  components: { TagType },
  props: {
    pokemon: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    pokemonTypes() {
      const types = this.pokemon.types.map((t) => t.type.name);
      return types;
    },
    getImageUrl() {
      return (id) =>
        `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
    },
  },
  methods: {
    redirectToDetails() {
      this.$router.push({ path: `/details/${this.pokemon.id}` });
    },
  },
};
</script>

<style lang="scss">
.pokemon__card {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  row-gap: 15px;
  flex-direction: column;
  max-width: 153px;
  height: 190px;
  padding: 10px;
  background: $color-white;
  box-shadow: 0px 4px 20px $color-light-gray;
  border-radius: 8px;
  cursor: pointer;

  &--title {
    line-height: 110%;
    text-transform: capitalize;
  }

  &--subtitle {
    font-family: $font-quicksand;
    font-weight: 700;
    font-size: 9px;
    color: $color-black;
  }

  &--tags {
    display: flex;
    justify-content: center;
    column-gap: 4px;
    padding-top: 38px;
  }
}
</style>
