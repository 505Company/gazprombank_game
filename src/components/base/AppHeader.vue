<script setup>
import UiBadge from '@/components/ui/UiBadge.vue'

import SnowIcon from '@/assets/img/icon/coin_snow.webp'
import CoinIcon from '@/assets/img/icon/coin_coin.webp'
import EnergIcon from '@/assets/img/icon/coin_energ.webp'

const userPoints = [
  { id: 1, img: SnowIcon, data: 10, max: 0 },
  { id: 2, img: CoinIcon, data: 20, max: 0 },
  { id: 3, img: EnergIcon, data: 75, max: 0 },
]
</script>

<template>
  <header class="header d-flex _pt-4">
    <div class="container">
      <div class="d-flex justify-between _g-2">
        <ui-badge v-for="point in userPoints" :key="point.id" class="w-100" :class="point.img">
          <div class="d-flex align-center _g-2">
            <img :src="point.img" class="header__icon">

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
    height: 28px;
  }
}

.coin {
  &_snow {
    color: rgb(49, 135, 234);
    box-shadow: 0px 0px 1px 1px rgba(0, 73, 150, 0.4),inset 2px 1px 3px 0px rgba(171, 197, 255, 1),inset -4px -3px 3px 0px rgba(192, 214, 252, 1),inset 6px 3px 3px 0px rgba(210, 224, 255, 0.8);
  }

  &_coin {
    color: rgb(242, 181, 110);
    box-shadow: 0px 0px 1px 1px rgba(82, 34, 0, 0.4),inset 2px 1px 3px 0px rgba(255, 224, 171, 1),inset -4px -3px 3px 0px rgba(252, 229, 192, 1),inset 6px 3px 3px 0px rgba(255, 229, 210, 0.8);
  }

  &_energ {
    color: rgb(67, 223, 247);
    box-shadow: 0px 0px 1px 1px rgba(0, 98, 150, 0.4),inset 2px 1px 3px 0px rgba(171, 191, 255, 1),inset -4px -3px 3px 0px rgba(192, 233, 252, 1),inset 6px 3px 3px 0px rgba(210, 241, 255, 0.8);
  }
}
</style>
