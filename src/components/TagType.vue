<template>
  <div :class="tagClass" class="tag__label">
    {{ type }}
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      required: true,
      default: "fire",
    },
  },
  computed: {
    tagClass() {
      const defaultTypes = [
        "grass",
        "poison",
        "water",
        "fire",
        "electric",
        "ground",
        "fairy",
        "normal",
        "flying",
        "default",
      ];

      const isDefaultType = defaultTypes.includes(this.type);
      return isDefaultType ? `bg-type__${this.type}` : "bg-type__default";
    },
  },
};
</script>

<style lang="scss">
.tag__label {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 64px;
  height: 16px;
  border-radius: 8px;
  text-transform: uppercase;
  color: white;
  font-weight: 600;
  font-size: 8px;
}
</style>
