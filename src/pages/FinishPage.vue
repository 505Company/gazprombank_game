<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

import UiCard from '@/components/ui/UiCard.vue'
import UiBtn from '@/components/ui/UiBtn.vue'

import AppModalWindow from '@/components/base/AppModalWindow.vue'
import FirstBlood from '@/components/modals/achives/FirstBlood.vue'

const router = useRouter()

const isShowModal = ref(false)

const result = {
  id: 1,
  slug: 'match3',
  sn: 120,
  isWin: true,
  prize: {
    id: 11,
    title: 'Новая награда',
    subtitle: 'Пройди первую мини-игру',
    txt: 'Забирай промокод на повышенный кэшбек на месяц при оплате картой!',
    code: 'OSDAHFH32PIUHSDFJH3JDKSHL',
    img: 'first_blood.webp',
  }
}

const titleText = computed(() => {
  return result.isWin ? 'Победа!' : 'Еще чуть-чуть!'
})

const showModalPrize = () => isShowModal.value = true
const closeModalPrize = () => isShowModal.value = false
</script>

<template>
  <section class="finish col justify-between align-center w-100 h-100 _py-15">
    <div class="finish__content col align-center">
      <h1 class="_fs-32 _mb-10">{{ titleText }}</h1>

      <ui-card class="finish__card col align-center justify-center">
        <img src="/src/assets/img/icon/coin_snow.webp" alt="" class="finish__icon _mb-1">

        <p class="finish__count _fs-36 _lh-36">{{ result.sn }}</p>
      </ui-card>
    </div>
    
    <div class="finish__footer col align-center">
      <ui-btn v-if="result.isWin" class="_mb-3" @click="showModalPrize">ЗАБРАТЬ</ui-btn>
      <ui-btn v-else class="_mb-3" @click="router.back()">Повторить</ui-btn>

      <router-link :to="{name: 'Map'}" class="finish__link">
        <ui-btn :is-prime="false">На главную</ui-btn>
      </router-link>
    </div>

    <app-modal-window :is-active="isShowModal" @close="closeModalPrize">
      <first-blood :prize="result.prize" />
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
