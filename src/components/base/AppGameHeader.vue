<script setup>
import UiBtnRound from '@/components/ui/UiBtnRound.vue'
</script>

<template>
  <header class="header w-100 _py-4">
    <div class="container">
      <div class="row justify-between">
        <div>Q</div>
        <ui-btn-round>
          <img src="/src/assets/img/icon/pause_icon.svg" alt="" class="icon">
        </ui-btn-round>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  position: fixed;
}

.icon {
  width: 32px;
  height: 32px;
  transition: all .3s ease;
}
</style>
