<script setup>
import { ref } from 'vue'

import UiBtn from '@/components/ui/UiBtn.vue'
import UiCard from '@/components/ui/UiCard.vue'

import MishaImg from '@/assets/img/misha.webp'

const step = ref(0)

const nextStep = () => step.value++
</script>

<template>
  <section class="onboard">
    <img :src="MishaImg" alt="" class="onboard__img">

    
      <ui-card v-if="step == 0" :is-dark="true" class="onboard__card w-100 _fs-12 _lh-16">
        <p class="_mb-2">
          Привет! Я маскот Газпромбанка, белый медведь Миша - добрый наставник и помощник! Это 
          городок, в котором я живу, давай проведу экскурсию. Наш путь по продуктам газпромбанка 
          начнется здесь!
        </p>

        <p class="_mb-2">
          Привет! Я маскот Газпромбанка, белый медведь Миша - добрый наставник и помощник! Это 
          городок, в котором я живу, давай проведу экскурсию. Наш путь по продуктам газпромбанка 
          начнется здесь!
        </p>

        <div class="row justify-end">
          <ui-btn @click="nextStep">ДАЛЕЕ</ui-btn>
        </div>
      </ui-card>

      <ui-card v-if="step == 1" :is-dark="true" class="onboard__card w-100 _fs-12 _lh-16">
        <p class="_mb-2">
          В городке у нас есть мой любимый домик, где я отдыхаю,  дом моего друга Тимоши/Маши, 
          с которым/ой мы часто ездим в отпуск и активничаем, и супермаркет!
        </p>

        <div class="row justify-end">
          <ui-btn @click="nextStep">ДАЛЕЕ</ui-btn>
        </div>
      </ui-card>

      <ui-card v-if="step == 2" :is-dark="true" class="onboard__card w-100 _fs-12 _lh-16">
        <p class="_mb-2">
          А это главный филиал Газпромбанка, где я работаю и помогаю клиентам разобраться в продуктах банка
        </p>

        <div class="row justify-end">
          <ui-btn @click="nextStep">ДАЛЕЕ</ui-btn>
        </div>
      </ui-card>

      <ui-card v-if="step == 3" :is-dark="true" class="onboard__card w-100 _fs-12 _lh-16">
        <p class="_mb-2">
          Аллея славы - здесь ты сможешь обменять внутриигровые ресурсы и валюту на реальные 
          бонусы банка!
        </p>

        <div class="row justify-end">
          <router-link :to="{ name: 'Home' }">
            <ui-btn>ДАЛЕЕ</ui-btn>
          </router-link>
        </div>
      </ui-card>
  </section>
</template>

<style lang="scss" scoped>
.onboard {
  position: fixed;
  left: 16px;
  right: 16px;
  bottom: 12px;

  &__img {
    position: fixed;
    width: 250px;
    left: -30px;
    bottom: -60px;
    z-index: 1;
  }

  &__card {
    position: relative;
    z-index: 10;
  }
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
