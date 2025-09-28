<script setup>
import bgGif from '@/assets/img/bear.gif'
</script>

<template>
  <section class="home-page">
    <img :src="bgGif" alt="Polar Bear" class="home-page__bg">
    <div class="container">
      Home Page
      <router-link :to="{name: 'MatchThree'}">
        <button class="btn">
          Match Three
        </button>
      </router-link>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.home-page {
  position: relative;
  height: 100%;

  &__bg {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -5;
    object-fit: cover;
    pointer-events: none;
  }
}
</style>
