<script setup>
import { reactive, ref } from 'vue'
import MatchThree from '@/games/match-three'

const rows = 8
const cols = 6
const colors = 4

const colorsValue = {
  1: '#d53e4f',
  2: '#f45d43',
  3: '#fdae61',
  4: '#fee08b',
  5: '#e6f598',
  6: '#46bea2',
  7: '#ef8151',
  8: '#8e56a1'
}

const game = reactive(new MatchThree(rows, cols, colors))
const dragStart = ref(null)

function onDragStart(x, y, event) {
  dragStart.value = { x, y, clientX: event.clientX, clientY: event.clientY }
}

function onDragEnd(x, y, event) {
  if (!dragStart.value) return

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
  <section class="match-three h-100">
    <div class="container">
      <section class="field col w-100">
        <div class="_my-4">SCORE: {{ game.score }}</div>

        <div
          v-for="(row, y) in game.field.matrix"
          :key="y"
          class="row justify-between"
        >
          <div
            v-for="(value, x) in row"
            :key="x"
            class="tile _pa-1 w-100"
          >
            <span
              class="tile__dot d-flex w-100 h-100"
              :style="`background-color: ${colorsValue[value]}`"
              @mousedown="onDragStart(x, y, $event)"
              @mouseup="onDragEnd(x, y, $event)"
              @touchstart="onDragStart(x, y, $event.touches[0])"
              @touchend="onDragEnd(x, y, $event.changedTouches[0])"
            >
              {{ value }}
            </span>
          </div>
        </div>
      </section>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.match-three {
  display: grid;
  place-items: center;
}

.tile {
  aspect-ratio: 1 / 1;
  text-align: center;
  border: solid 1px #969696;
  border-radius: 4px;
  user-select: none;

  &__dot {
    border-radius: 50%;
    transition: all .3s ease;
  }
}
</style>