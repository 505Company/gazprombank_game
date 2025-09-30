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
  border: solid 2px white;
  border-radius: 12px;
  background-color: white;

  &_dark {
    background-color: rgb(68, 90, 191);

    & .card__content {
      color: white;
    }
  }

  &__content {
    color: black;
  }
}
</style>
