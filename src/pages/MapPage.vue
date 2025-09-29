<script setup>
import { useRouter } from 'vue-router'
import MapBackground from '@/components/map/MapBackground.vue'

const router = useRouter()

const goTo = (page) => {
  router.push({ name: page })
}
</script>

<template>
  <section class="map-page w-100 h-100">
    <map-background />

    <div class="container">
      <!-- <button class="btn _px-2 _py-1 _ml-auto" @click="goTo('Home')">
        Go to home
      </button> -->
    </div>
  </section>
</template>

<style lang="scss" scoped>

</style>
