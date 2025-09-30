<script setup></script>

<template>
  <button class="btn _pa-2">
    <slot />
  </button>
</template>

<style lang="scss" scoped>
.btn {
  display: grid;
  place-items: center;
  border: solid 4px white;
  border-radius: 50%;
  background-color: rgba(68, 90, 191, 1);
  color: white;
}
</style>
