<template>
  <div class="app">
    <div class="app__nav">
      <SvgIcon icon="kotas" :width="80" :height="24" />
    </div>
    <div class="app__container">
      <router-view />
    </div>
  </div>
</template>

<script>
import SvgIcon from "./components/SvgIcon.vue";

export default {
  components: { SvgIcon },
};
</script>

<style lang="scss">
.app {
  font-family: $font-mulish;
  overflow: hidden;
  height: 100%;

  &__nav {
    background: white;
    padding: 12px 0 8px 16px;
    box-shadow: 0px 1px 1px #e1e1e1;

    @include mobile() {
      display: flex;
      justify-content: center;
    }
  }

  &__container {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    padding-top: 18px;

    @include desktop() {
      padding-right: 36px;
    }
  }
}
</style>
