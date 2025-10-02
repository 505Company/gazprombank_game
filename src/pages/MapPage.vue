<script setup>
import { useRouter } from 'vue-router'
import MapBackground from '@/components/map/MapBackground.vue'
import StoryZero from '@/components/story/StoryZero.vue'

const router = useRouter()

const goTo = (page) => {
  router.push({ name: page })
}
</script>

<template>
  <section class="map-page w-100 h-100">
    <map-background />

    <div class="container">
      <story-zero />
    </div>
  </section>
</template>

<style lang="scss" scoped>

</style>
