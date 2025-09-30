<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const goTo = (page) => {
  router.push({ name: page })
}
</script>

<template>
  <figure id="map-bg" class="map-bg">
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 128 237"
      preserveAspectRatio="xMidYMid slice"
      class="map-bg__svg"
    >

      <image
        xlink:href="@/assets/img/map_bg.jpg"
        class="map-bg__img"
        width="100%"
        height="100%"
        preserveAspectRatio="xMidYMid slice"
      />

      <g>
        <circle
          v-for="n in 40"
          :key="n"
          :cx="Math.random() * 300"
          :cy="Math.random() * 200"
          :r="Math.random() * 1.5"
          fill="white"
          opacity="0.8"
        >
          <animateTransform
            attributeName="transform"
            type="translate"
            from="0 -100"
            to="0 120"
            :dur="`${5 + Math.random() * 6}s`"
            :begin="`${Math.random() * 2}s`"
            repeatCount="indefinite"
          />
        </circle>
      </g>

      <g class="hover_group" opacity="0.5">
        <circle
          cx="60%"
          cy="22%"
          opacity="1"
          fill="#FFFFFF"
          r="23"
          @click="goTo('Home')"
        />
      </g>

      <g class="bubble__home">
        <image
          xlink:href="@/assets/img/bubble.webp"
          width="12"
          height="12"
          x="58%"
          y="10%"
        />

        <animateTransform
          attributeName="transform"
          type="translate"
          values="0 0; 0 -0.5; 0 0; 0 0.5; 0 0"
          dur="3s"
          repeatCount="indefinite"
        />
      </g>
    </svg>
  </figure>
</template>

<style lang="scss" scoped>
.map-bg {
  position: absolute;
  z-index: 0;

  &__svg {
    width: 100vw;
    height: 100vh;
  }
}
</style>
