<script setup>
import { ref } from 'vue'
// import { useRoute } from 'vue-router'
import UiCard from '@/components/ui/UiCard.vue'
import UiBtn from '@/components/ui/UiBtn.vue'

const step = ref(0)

const nextStep = () => { step.value++ }
</script>

<template>
  <section class="w-100 h-100">
    <Transition>
      <div v-if="step === 0" class="step-0 w-100 h-100 _pb-15">
        <div class="container w-100 h-100">
          <div class="col justify-end w-100 h-100">
            <ui-card :is-dark="true">
              <p class="_mb-3">
                Добро пожаловать домой! Моя любимая квартирка.
              </p>
              <p class="_mb-3">
                От таких экскурсий у меня уже заурчал живот! Давай проверим 
                холодильник на наличие вкусностей!
              </p>

              <div class="row justify-end">
                <ui-btn @click="nextStep">ДАЛЕЕ</ui-btn>
              </div>
            </ui-card>
          </div>
        </div>
      </div>
    </Transition>

    <Transition>
      <div v-if="step === 1" class="step-1 w-100 h-100 _pb-15">
        <div class="container w-100 h-100">
          <div class="col justify-end w-100 h-100">
            <ui-card :is-dark="true">
              <p class="_mb-3">
                О нееет! Похоже холодильник сломался. Да уж, теперь не до вкуснеостей и придется 
                попотеть! Поможешь починить холодильник? А в конце тебя будет ждать вознаграждение!
              </p>

              <div class="row justify-end">
                <router-link :to="{name: 'MatchThree'}">
                  <ui-btn>ДАЛЕЕ</ui-btn>
                </router-link>
              </div>
            </ui-card>
          </div>
        </div>
      </div>
    </Transition>
  </section>
</template>

<style lang="scss" scoped>
.step-0 {
  background-color: rgba(68, 116, 231, 1);
  background-image: url('@/assets/img/story/1.1.webp');
  background-size: cover;
}

.step-1 {
  background-color: rgba(68, 116, 231, 1);
  background-image: url('@/assets/img/story/1.2.webp');
  background-size: cover;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
