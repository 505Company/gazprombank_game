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
  border-radius: 50%;
  border: none;
  background: rgba(255, 255, 255, 0.5);
  color: white;
}
</style>
