<script setup>
import UiBadge from '@/components/ui/UiBadge.vue'

const userPoints = [
  { id: 1, img: 'coin_energ', data: 75, max: 100 },
  { id: 2, img: 'coin_coin', data: 20, max: 0 },
  { id: 3, img: 'coin_snow', data: 10, max: 0 }
]
// @/assets/img/icon/
</script>

<template>
  <header class="header d-flex _pt-4">
    <div class="container">
      <div class="d-flex justify-between _g-2">
        <ui-badge v-for="point in userPoints" :key="point.id" class="w-100">
          <div class="d-flex align-center _g-2">
            <img :src="`/src/assets/img/icon/${point.img}.png`" class="header__icon">

            <div>
              <span>{{ point.data }}</span>
              <span v-if="!!point.max">/{{point.max}}</span>
            </div>
          </div>
        </ui-badge>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1;

  &__icon {
    height: 20px;
  }
}
</style>
