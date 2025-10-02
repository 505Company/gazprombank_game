<script setup>
import UiBtnRound from '@/components/ui/UiBtnRound.vue'

const props = defineProps({
  isActive: Boolean
})
</script>

<template>
  <section :class="{ 'modal_active': props.isActive }" class="modal w-100 h-100">
    <div class="modal__header _py-4">
      <div class="container">
        <ui-btn-round @click="$emit('close')">
          <img src="/src/assets/img/icon/cross.svg" class="modal__icon">
        </ui-btn-round>
      </div>
    </div>
    <slot />
  </section>
</template>

<style lang="scss" scoped>
.modal {
  position: absolute;
  top: -100%;
  opacity: 0;
  background-color: rgba(24, 38, 65, 1);
  background-image: url('@/assets/img/modal_bg.webp');
  background-size: cover;
  transition: all .3s ease;
  z-index: 100;

  &_active {
    top: 0;
    bottom: 0;
    opacity: 1;

    & > .modal__header {
      opacity: 1;
    }
  }

  &__icon {
    width: 24px;
  }

  &__header {
    opacity: 0;
    transition: opacity .3s .75s ease;
  }
}
</style>
