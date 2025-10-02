<script setup>
import { ref } from 'vue'

import UiBtn from '@/components/ui/UiBtn.vue'
import UiCard from '@/components/ui/UiCard.vue'
import UiBtnRound from '@/components/ui/UiBtnRound.vue'

import PouseIcon from '@/assets/img/icon/pause_icon.svg'
import MishaCircle from '@/assets/img/misha_circle.webp'

const isShowInfo = ref(false)

const toggleInfo = () => {
  isShowInfo.value = !isShowInfo.value
}
</script>

<template>
  <header class="header w-100 _py-4">
    <div class="container">
      <div class="row justify-between">
        <div class="_lh-0" @click="toggleInfo">
          <img :src="MishaCircle" alt="" class="image">
        </div>

        <ui-btn-round>
          <img :src="PouseIcon" alt="" class="icon">
        </ui-btn-round>
      </div>
    </div>

    <Transition>
      <ui-card
        v-if="isShowInfo"
        :is-dark="true"
        class="header__modal _mx-2 _my-2"
      >
        <p class="_mb-3">Собери достаточное количество материалов, чтобы починить холодильник</p>
        <p class="_mb-3">Число ходов ограничено!</p>

        <div class="row justify-end">
          <ui-btn @click="toggleInfo">ОК</ui-btn>
        </div>
      </ui-card>
    </Transition>
  </header>
</template>

<style lang="scss" scoped>
.header {
  position: fixed;
  z-index: 100;

  &__modal {
    position: absolute;
    max-width: 250px;
    z-index: 10;
  }
}

.image {
  width: 48px;
  height: 48px;
}

.icon {
  width: 32px;
  height: 32px;
  transition: all .3s ease;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
