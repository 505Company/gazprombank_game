<script setup>
import UiBtnRound from '@/components/ui/UiBtnRound.vue'

import PouseIcon from '@/assets/img/icon/pause_icon.svg'
</script>

<template>
  <header class="header w-100 _py-4">
    <div class="container">
      <div class="row justify-between">
        <div>Q</div>
        <ui-btn-round>
          <img :src="PouseIcon" alt="" class="icon">
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
