<template>
  <label class="search__wrapper">
    <SvgIcon icon="search" class="search__icon" :width="13" :height="13" />

    <input :placeholder="placeholder" class="search__input" v-model="search" />
  </label>
</template>

<script>
import SvgIcon from "./SvgIcon.vue";

export default {
  components: { SvgIcon },
  props: {
    value: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      search: "",
    };
  },
  watch: {
    search(newVal) {
      this.$emit("input", newVal);
    },
  },
  created() {
    this.search = this.value;
  },
};
</script>

<style lang="scss">
.search {
  &__input {
    background: $color-white;
    border: 1px solid $color-light-gray;
    border-radius: 50px;
    width: 100%;
    padding: 13px 37px;

    @include mobile() {
      padding: 13px 31px;
    }

    &::placeholder {
      font-family: $font-mulish;
      font-weight: 400;
      font-size: 14px;
    }

    &:focus {
      outline: none;
    }
  }

  &__icon {
    display: none;
    position: absolute;
    left: 20px;
    top: 14px;

    @include mobile() {
      display: block;
    }
  }
}
</style>
