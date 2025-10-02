<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useResultStore } from '@/stores/resultGame'

import UiCard from '@/components/ui/UiCard.vue'
import UiBtn from '@/components/ui/UiBtn.vue'

import AppModalWindow from '@/components/base/AppModalWindow.vue'
import FirstBlood from '@/components/modals/achives/FirstBlood.vue'

import CoinSnowIcon from '@/assets/img/icon/coin_snow.webp'

const router = useRouter()

const isShowModal = ref(false)

const res = useResultStore()


const titleText = computed(() => {
  return res.result.isWin ? 'Победа!' : 'Еще чуть-чуть!'
})

const showModalPrize = () => isShowModal.value = true
const closeModalPrize = () => isShowModal.value = false
</script>

<template>
  <section class="finish col justify-between align-center w-100 h-100 _py-15">
    <div class="finish__content col align-center">
      <h1 class="_fs-32 _mb-10">{{ titleText }}</h1>

      <ui-card class="finish__card col align-center justify-center">
        <img :src="CoinSnowIcon" alt="" class="finish__icon _mb-1">

        <p class="finish__count _fs-36 _lh-36">{{ res.result.sn }}</p>
      </ui-card>
    </div>
    
    <div class="finish__footer col align-center">
      <ui-btn v-if="res.result.isWin" class="_mb-3" @click="showModalPrize">ЗАБРАТЬ</ui-btn>
      <ui-btn v-else class="_mb-3" @click="router.back()">Повторить</ui-btn>

      <router-link :to="{name: 'Map'}" class="finish__link">
        <ui-btn :is-prime="false">На главную</ui-btn>
      </router-link>
    </div>

    <app-modal-window :is-active="isShowModal" @close="closeModalPrize">
      <first-blood :prize="res.result.prize" />
    </app-modal-window>
  </section>
</template>

<style lang="scss" scoped>
.finish {
  color: white;
  background-color: rgb(68, 116, 231);
  background-image: url('@/assets/img/finish_bg.webp');
  background-size: cover;

  &__card {
    min-width: 150px;
    width: fit-content;
  }

  &__icon {
    width: 48px;
  }

  &__count {
    color: rgba(49, 135, 234, 1);
  }
}
</style>
