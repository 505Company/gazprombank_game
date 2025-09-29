<script setup></script>

<template>
  <div class="badge d-flex justify-center _pa-1">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.badge {
  background: rgba(255, 255, 255, 1);
  font-size: 18px;
  font-weight: 600;
  line-height: 100%;
  border: solid 4px #445ABF;
  border-radius: 17px;
}
</style>
