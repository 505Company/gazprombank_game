<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

import DefaultLayout from '@/layouts/DefaultLayout.vue'
import EmptyLayout from '@/layouts/EmptyLayout.vue'
import GameLayout from '@/layouts/GameLayout.vue'

const route = useRoute()

const layout = computed(() => {
  switch (route.meta.layout) {
    case 'empty':
      return EmptyLayout
    case 'game':
      return GameLayout
    default:
      return DefaultLayout
  }
})
</script>

<template>
  <component :is="layout">
    <router-view />
  </component>
</template>