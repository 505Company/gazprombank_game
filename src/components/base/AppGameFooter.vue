<script setup>
import UiBtnRound from '@/components/ui/UiBtnRound.vue'
</script>

<template>
  <footer class="footer w-100 _py-4">
    <div class="container">
      <div class="row justify-end">
        <ui-btn-round>
          <img src="/src/assets/img/icon/lamp_icon.svg" alt="" class="icon">
        </ui-btn-round>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  position: fixed;
  bottom: 0;
}

.icon {
  width: 32px;
  height: 32px;
  transition: all .3s ease;
}
</style>
