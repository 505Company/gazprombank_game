<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

import StoryOneOne from '@/components/story/StoryOneOne.vue'
import SoryOneTwo from '@/components/story/StoryOneOne.vue'

const route = useRoute()

const storyName = computed(() => {
  switch (route.params.lvl) {
    case '1.1':
      return StoryOneOne
    case '1.2':
      return SoryOneTwo
  }
})
</script>

<template>
  <section class="story w-100 h-100">
    <component :is="storyName" />
  </section>
</template>

<style lang="scss" scoped>
.sory {
  background-color: rgba(68, 116, 231, 1);
}
</style>
