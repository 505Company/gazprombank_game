<script setup>
import AppGameHeader from '@/components/base/AppGameHeader.vue'
import AppGameFooter from '@/components/base/AppGameFooter.vue'
</script>

<template>
  <section class="game h-100">
    <app-game-header />
    <router-view />
    <app-game-footer />
  </section>
</template>
