<script setup>
import { pluralize } from '@/utils'

const props = defineProps({
  colors: Array,
  count: {
    type: Number,
    default: 5,
    validator: (value) => value >= 0
  }
})

const words = ['ход', 'хода', 'ходов']
</script>

<template>
  <section class="row justify-center _mb-10">
    <section class="rules row justify-between _fw-900 _lh-16 _pa-3">
      <div class="row justify-between _g-3 _pr-5">
        <div v-for="(rule, i) in props.colors" :key="i" class="rules__color _pa-3">
          <img :src="`/src/assets/img/match-3/${rule.img}.webp`" alt="" class="rules__img">
          <div class="rules__img-count">
            {{ rule.need - rule.have >= 0 ? rule.need - rule.have : 0 }}
          </div>
        </div>
      </div>
      

      <div class="rules__count _fs-20 _px-5">
        <div class="col align-center justify-senter">
          <p>{{ props.count }}</p>
          <p :key="props.count">{{ pluralize(props.count, words) }}</p>
        </div>
        
      </div>
    </section>
  </section>
</template>

<style lang="scss" scoped>
.rules {
  font-family: 'Halvar Breit';
  width: fit-content;
  border-radius: 48px;
  box-shadow: 0px 4px 21px 8px rgba(0, 25, 150, 0.4);
  background: rgba(88, 144, 255, 0.96);

  &__color {
    position: relative;
    border-radius: 50%;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      filter: blur(12px);
      border-radius: 50%;
      background-color: rgba(216, 230, 255, 0.6);
      z-index: 0;
    }
  }

  &__img {
    position: relative;
    width: 42px;
    height: 42px;
    object-fit: fill;
    z-index: 1;

    &-count {
      position: absolute;
      color: white;
      bottom: 8px;
      right: 4px;
    }
  }

  &__count {
    position: relative;
    display: grid;
    place-items: center;
    color: white;

    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 8px;
      bottom: 8px;
      width: 1px;
      background-color: white;
    }
  }
}
</style>
