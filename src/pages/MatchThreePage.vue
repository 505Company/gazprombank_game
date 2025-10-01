<script setup>
import { reactive, ref } from 'vue'
import MatchThree from '@/games/match-three'

import UiCard from '@/components/ui/UiCard.vue'
import MThreeRules from '@/components/match-three/MThreeRules.vue'

const rows = 5
const cols = 5
const colors = 4

const colorsValue = {
  1: 'bolt',
  2: 'hummer',
  3: 'lent',
  4: 'scissors'
}

const rulesColors = [
  { id: 1, img: colorsValue[1], need: 9 },
  { id: 3, img: colorsValue[3], need: 12 },
]
const countTry = 10

const game = reactive(new MatchThree(rows, cols, colors, countTry, rulesColors))
const dragStart = ref(null)

const onDragStart = (x, y, event) => {
  dragStart.value = { x, y, clientX: event.clientX, clientY: event.clientY }
  const tile = event.target.closest('.tile')
  tile.classList.add('js-tile_active')
}

const onDragEnd = (x, y, event, value) => {
  if (!dragStart.value) return

  const activeList = document.querySelectorAll('.js-tile_active')
  activeList.forEach(el => el.classList.remove('js-tile_active'))

  const dx = event.clientX - dragStart.value.clientX
  const dy = event.clientY - dragStart.value.clientY

  let target = { x: dragStart.value.x, y: dragStart.value.y }

  if (Math.abs(dx) > Math.abs(dy)) {
    if (dx > 20 && dragStart.value.x < cols - 1) {
      target.x++
    } else if (dx < -20 && dragStart.value.x > 0) {
      target.x--
    }
  } else {
    if (dy > 20 && dragStart.value.y < rows - 1) {
      target.y++
    } else if (dy < -20 && dragStart.value.y > 0) {
      target.y--
    }
  }

  if (target.x !== dragStart.value.x || target.y !== dragStart.value.y) {
    game.swapWithCheck(dragStart.value.x, dragStart.value.y, target.x, target.y)
  }

  dragStart.value = null
}
</script>

<template>
  <section class="match-three h-100 _py-4">
    <div class="container">

      <!-- <ui-card class="_mx-8 _my-4">
        <p>Собери достаточное количество материалов, чтобы починить холодильник</p>
      </ui-card> -->
      <section class="match-three__main">
        <m-three-rules
          :key="game.stepsLeft"
          :colors="game.rules"
          :count="game.stepsLeft"
        />

        <section class="field col w-100 _g-2 _pa-2">
          <!-- <div class="_my-4">SCORE: {{ game.score }}</div> -->

          <div
            v-for="(row, y) in game.field.matrix"
            :key="y"
            class="row justify-between _g-2"
          >
            <div
              v-for="(value, x) in row"
              :key="x"
              class="tile _pa-1 w-100"
            >
              <div
                class="tile__dot d-flex w-100 h-100"
                :style="`background-image: ${colorsValue[value]}`"
                @touchstart="onDragStart(x, y, $event.touches[0])"
                @touchend="onDragEnd(x, y, $event.changedTouches[0], value)"
              >
                <img
                  v-if="!!colorsValue[value]"
                  :src="`/src/assets/img/match-3/${colorsValue[value]}.webp`"
                  class="tile__img w-100 h-100"
                >
                <!-- {{ value }} -->
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.match-three {
  display: grid;
  place-items: center;
  background-image: url('@/assets/img/match-3/match_bg.webp');
  background-size: cover;
}

.field {
  border-radius: 16px;
  background: rgba(159, 166, 203, 1);
  transition: all .3s ease;
}

.tile {
  aspect-ratio: 1 / 1;
  text-align: center;
  user-select: none;
  border-radius: 16px;
  background: rgba(194, 202, 242, 1);
  transition: all .3s ease;


  &__dot {
    border-radius: 50%;
    transition: all .3s ease;
  }
}

.js-tile_active {
  background-color: rgba(110, 163, 254, 0.8);
}

@keyframes show-in {
  from { opacity: 0; }
  to { opacity: 1; }
}
</style>