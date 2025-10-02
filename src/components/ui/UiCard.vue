<script setup>
const props = defineProps({
  isDark: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <section :class="{'card_dark': props.isDark}" class="card _px-4 _py-6">
    <div class="card__content">
      <slot />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.card {
  border-radius: 16px;
  box-shadow: 0px 2px 10px 3px rgba(0, 73, 150, 0.4),inset 3px 1.5px 5px 0px rgba(171, 197, 255, 1),inset -6px -4px 4px 0px rgba(192, 214, 252, 1),inset 6px 5px 4px 0px rgba(210, 224, 255, 0.8);
  background-color: white;

  &_dark {
    box-shadow: inset 2px 1px 4px 0px rgba(0, 56, 231, 1),inset -4px -3px 3px 0px rgba(5, 41, 154, 1),inset 6px 3px 3px 0px rgba(138, 189, 255, 0.8),0px 6px 22px 8px rgba(0, 25, 150, 0.4);
    background: linear-gradient(167.59deg, rgba(30, 100, 254, 1),rgba(14, 71, 222, 1) 100%);

    & .card__content {
      color: white;
    }
  }

  &__content {
    color: black;
  }
}
</style>
