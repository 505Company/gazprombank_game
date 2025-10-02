<script setup>
import UiBtn from '@/components/ui/UiBtn.vue'
</script>

<template>
  <section class="home-page col justify-center align-center">
    <div class="home-page__content col align-center _g-8">
      <ui-btn class="_fw-700 _fs-18">Глава 1</ui-btn>

      <h1 class="_fw-700 _fs-32 _lh-40">Домашние истории</h1>
    </div>

    <div class="home-page__footer _pa-4">
      <router-link :to="{name: 'Story', params: {lvl: '1.1'}}">
        <ui-btn>ДАЛЕЕ</ui-btn>
      </router-link>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.home-page {
  position: relative;
  height: 100%;
  background-image: url('@/assets/img/home_bg.webp');
  background-size: cover;

  &::before {
    content: '';
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background-color: rgba(16, 78, 230, 0.6);
  }

  &__content {
    position: relative;
    width: 60%;
    max-width: 250px;
    text-align: center;
    color: white;
    z-index: 10;
  }

  &__footer {
    position: fixed;
    bottom: 0;
    right: 0;
  }
}
</style>
