<script setup>
import { useRoute } from 'vue-router'

import AppHeader from '@/components/base/AppHeader.vue'
import AppFooter from '@/components/base/AppFooter.vue'

const route = useRoute()
</script>

<template>
  <app-header />
  <router-view />
  <app-footer v-if="route.name === 'Home'" />
</template>
