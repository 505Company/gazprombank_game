<script setup>
const isDark = true 
</script>

<template>
  <section :class="{'card_dark': isDark}" class="card _px-4 _py-6">
    <div class="card__content">
      <slot />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.card {
  border-radius: 16px;
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
