<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const goTo = (page) => {
  router.push({ name: page })
}
</script>

<template>
  <section class="map-page">
    <div class="container">
      <button class="btn _px-2 _py-1 _ml-auto" @click="goTo('Home')">
        Go to home
      </button>
    </div>
  </section>
</template>
