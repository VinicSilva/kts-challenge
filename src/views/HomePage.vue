<template>
  <div @scroll="seeMore" class="home__container">
    <SearchInput
      v-model="search"
      :placeholder="tokens.search"
      class="home__search"
    />
    <span class="home__title primary-text">{{ tokens.title }}</span>
    <PokemonList :pokemons="filteredPokemonsList" />
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from "vuex";
import SearchInput from "@/components/SearchInput.vue";
import PokemonList from "@/components/PokemonList.vue";

export default {
  name: "HomePage",
  components: {
    PokemonList,
    SearchInput,
  },
  data() {
    return {
      search: "",
      tokens: {
        search: "Pesquise por nome ou código",
        title: "Pokemons",
      },
    };
  },
  computed: {
    ...mapState("pokemons", ["pokemonsList", "offset"]),

    filteredPokemonsList() {
      let filteredList = this.pokemonsList.slice();
      if (this.search) {
        filteredList = filteredList.filter(
          (p) =>
            p.name.toLowerCase().includes(this.search.toLowerCase()) ||
            p.id == this.search
        );
      }
      return filteredList.sort((a, b) => a.id - b.id);
    },
  },
  async mounted() {
    if (!this.pokemonsList.length) {
      await this.getPokemons(this.offset);
    }
  },
  methods: {
    ...mapActions("pokemons", ["getPokemons"]),
    ...mapMutations("pokemons", ["incrementOffset"]),

    seeMore(e) {
      let bottomOfList =
        Math.ceil(e.target.scrollTop + e.target.clientHeight) >=
        e.target.scrollHeight;

      if (bottomOfList && this.offset < 888) {
        this.incrementOffset();
        this.getPokemons(this.offset);
      }
    },
  },
};
</script>

<style lang="scss">
.home {
  &__container {
    display: grid;
    justify-content: center;
    grid-template-rows: 48px min-content 1fr;
    row-gap: 38px;
    width: 100%;
    height: 100%;
    overflow: auto;
    padding: 0 15px 19px;

    @include mobile() {
      grid-template-rows: 48px 1fr;
      row-gap: 30px;
    }
  }

  &__title {
    padding: 4px;
    @include mobile() {
      display: none;
    }
  }
}

::-webkit-scrollbar {
  @include desktop() {
    height: 100%;
  }

  &-thumb {
    width: 13px;
    height: 80%;
    background: $scrollbar-color;
    border-radius: 10px;
  }
}
</style>
