<script setup>
const props = defineProps({
  isPrime: {
    type: Boolean,
    default: true,
  },
  isSec: {
    type: Boolean,
    default: false,
  }
})
</script>

<template>
  <button
    :class="{'btn_prime': props.isPrime, 'btn_sec': props.isSec}"
    class="btn _fw-700 _px-4 _py-2"
  >
    <slot />
  </button>
</template>

<style lang="scss" scoped>
.btn {
  display: grid;
  place-items: center;
  font-family: 'Halvar Breit';
  color: white;
  border: none;
  background: none;

  &_prime {
    border-radius: 16px;
    box-shadow: 0px 4px 21px 8px rgba(0, 25, 150, 0.4);
    background-color: rgba(30, 100, 254, 1);
  }

  &_sec {
    border-radius: 16px;
    background-color: rgba(137, 176, 255, 1);
  }
}
</style>
