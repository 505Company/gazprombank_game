<script setup>
import { copyOnClipBoard } from '@/utils'

import UiBtn from '@/components/ui/UiBtn.vue'

const props = defineProps({
  prize: Object
})

import CopyIcon from '@/assets/img/icon/copy_icon.svg'
</script>

<template>
  <section class="achive">
    <div class="container">
      <div class="col align-center h-100">
        <div class="text_center _mb-5">
          <h1 class="achive__title _fs-24">{{ prize.title }}</h1>
          <p v-if="prize.subtitle" class="achive__subtitle">{{ prize.subtitle }}</p>
        </div>

        <div class="d-flex justify-center">
          <img :src="prize.img" class="achive__img">
        </div>

        <div class="col align-center justify-center">
          <p v-if="prize.txt" class="achive__txt text-center _mb-4">{{ prize.txt }}</p>

          <div class="achive__code row justify-content _px-3 _py-2">
            <p>{{ prize.code }}</p>

            <ui-btn-round class="achive__copy" @click="copyOnClipBoard(prize.code)">
              <img :src="CopyIcon" alt="">
            </ui-btn-round>
          </div>
        </div>

        <router-link :to="{name: 'Map'}">
          <ui-btn class="_mt-15">
            забрал
          </ui-btn>
        </router-link>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.achive {
  &__img {
    max-width: 80%;
  }

  &__txt {
    max-width: 80%;
  }

  &__code {
    border-radius: 20px;
    color: rgba(68, 90, 191, 1);
    box-shadow: inset 2px 1px 3px 0px rgb(171, 191, 255), inset -4px -3px 3px 0px rgb(192, 233, 252), inset 4px 3px 3px 0px rgba(210, 241, 255, 0.8), 0px 1px 1px 2px rgba(0, 25, 150, 0.4);
    background: rgba(255, 255, 255, 1);

    & > p {
      width: calc(100% - 30px);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  &__copy img {
    width: 22px;
  }
}
</style>
