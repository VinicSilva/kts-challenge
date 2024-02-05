<template>
  <div v-if="pokemon" class="details__container">
    <div class="details__info">
      <img
        :src="getImageUrl(pokemon.id)"
        :width="110"
        :height="110"
        alt="Pokemon Image"
      />
      <span class="primary-text">{{ pokemon.name }}</span>
      <div class="details__types">
        <TagType v-for="tag in pokemonTags" :key="tag" :type="tag" />
      </div>
    </div>

    <div class="details__abilities">
      <span class="primary-text">{{ tokens.skills }}</span>
      <ul class="list">
        <li v-for="ability in abilities" :key="ability" class="list__item">
          {{ ability }}
        </li>
      </ul>
    </div>
    <span @click="returnToHome" class="primary-text details__button">
      {{ tokens.back }}
    </span>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import TagType from "@/components/TagType.vue";

export default {
  name: "DetailsPage",
  components: { TagType },
  data() {
    return {
      pokemon: {},
      abilities: [],
      tokens: {
        skills: "Habilidades",
        back: "Voltar",
      },
    };
  },
  computed: {
    ...mapState("pokemons", [
      "pokemonsList",
      "currentPokemon",
      "pokemonAbilities",
    ]),

    pokemonTags() {
      return this.pokemon.types.map((t) => t.type.name);
    },

    getImageUrl() {
      return (id) =>
        `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
    },
  },
  async beforeMount() {
    await this.selectPokemon();
    await this.getAbilities();
  },
  methods: {
    ...mapActions("pokemons", ["getCurrentPokemon", "getPokemonAbilities"]),

    async selectPokemon() {
      this.pokemon = this.pokemonsList.find(
        (p) => p.id == this.$route.params.id
      );
      if (!this.pokemon) {
        await this.getCurrentPokemon(this.$route.params.id);
        this.pokemon = { ...this.currentPokemon };
      }
    },
    async getAbilities() {
      const pokemonAbilities = this.pokemon.abilities.map((a) => a.ability.url);
      await this.getPokemonAbilities(pokemonAbilities);
      this.abilities = this.pokemonAbilities;
    },
    returnToHome() {
      this.$router.push({ path: "/" });
    },
  },
};
</script>

<style lang="scss">
.details {
  &__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 24px;
    max-width: 540px;
    padding: 32px;
    margin: 0 auto;
    height: 100%;
    overflow: auto;

    @include mobile() {
      padding: 32px 0 50px 0;
    }
  }

  &__info,
  &__abilities {
    width: 100%;
    min-height: 220px;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
    border-radius: 8px;
    background: $color-white;
  }

  &__info {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 7px;
    padding-top: 20px;
  }

  &__types {
    display: flex;
    justify-content: center;
    column-gap: 4px;
    padding-top: 23px;
  }

  &__abilities {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 16px;
    padding: 10px 17px;
    .list {
      display: flex;
      flex-direction: column;
      row-gap: 16px;
      list-style: none;
      &__item {
        border-top: 1px solid $gray-background;
        padding-top: 16px;
        font-weight: 400;
        font-size: 12px;
        color: $secondary-text;
      }
    }
  }

  &__button {
    padding: 24px;
    color: $color-water !important;
    cursor: pointer;
  }
}
</style>
