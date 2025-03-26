<script setup>
import { computed, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from '@/store/Store.js'
import { quiz } from '/public/data.js'
import { useTimer } from '@/utils/useTimer.js'
import VBtn from '@/components/VBtn.vue'

const router = useRouter()
const store = useStore()
const API = window.API

const step = ref(1)
const currentAnswer = ref(null)
const isAnswered = ref({ status: false, correct: false })
const correctAnswers = ref(0)
const timer = ref(0)
const timerInterval = ref()

const time = computed(() => Array.from(useTimer(timer.value)))

const setCurrentAnswer = (item) => {
  currentAnswer.value = item
}

const setAnswer = () => {
  if (currentAnswer.value) {
    isAnswered.value.status = true
    if (currentAnswer.value === quiz[step.value - 1].right.num) {
      isAnswered.value.correct = true
      correctAnswers.value++
    }
  }
}

const nextQuest = () => {
  if (step.value !== quiz.length) {
    step.value++
    currentAnswer.value = null
    isAnswered.value.status = false
    isAnswered.value.correct = false
  } else {
    router.push(
      `/email?time=${useTimer(timer.value)}&answers=${correctAnswers.value}`
    )
  }
}

onMounted(() => {
  timerInterval.value = setInterval(() => {
    timer.value++
  }, 1000)
})
</script>

<template>
  <main class="main">
    <div class="main__bg">
      <img src="/img/bg.png" alt="" />
    </div>
    <div class="main__timer">
      <div v-for="item in time" class="main__timer-item">{{ item }}</div>
    </div>
    <div class="main__content">
      <div class="title">{{ step }} / {{ quiz.length }}</div>
      <div v-if="isAnswered.status" class="title" style="margin-top: 57px">
        {{ isAnswered.correct ? 'Верно!' : 'Неверно' }}
      </div>
      <div v-if="isAnswered.status" class="subtitle" style="width: 674px">
        {{
          isAnswered.correct
            ? quiz[step - 1].right.text
            : 'К сожалению, это неверный ответ. Не расстраивайся — впереди другие вопросы!'
        }}
      </div>
      <div
        v-if="!isAnswered.status"
        class="text"
        v-html="quiz[step - 1]?.quest"
      ></div>
      <div v-if="!isAnswered.status" class="text-light">
        Какой из предложенных вариантов ответа правильный?
      </div>
      <div v-if="!isAnswered.status" class="main__answers">
        <div
          @click="setCurrentAnswer(item.num)"
          :class="['answer', { active: currentAnswer === item.num }]"
          v-for="item in quiz[step - 1]?.answers"
        >
          <span class="text-light">{{ item.num }}.</span>
          <div class="text-light">
            {{ item.title }}
          </div>
        </div>
      </div>
      <VBtn v-if="!isAnswered.status" @click="setAnswer">Ответить</VBtn>
      <VBtn v-else @click="nextQuest">Продолжить</VBtn>
    </div>
  </main>
</template>

<style scoped lang="scss">
@import '@/assets/scss/variables';

.main {
  align-items: center;

  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 758px;
  }

  &__timer {
    position: absolute;
    top: 100px;
    right: 60px;
    color: #fff;
    display: flex;
    align-items: center;
    gap: 8px;

    &-item {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 34px;
      height: 52px;
      background: linear-gradient(86deg, #16302c 0%, #13201f 100%);
      border-radius: 4px;
      font-size: 24px;
      font-weight: 600;

      &:before {
        display: block;
        content: '';
        position: absolute;
        top: -2px;
        left: -2px;
        z-index: -1;
        border-radius: 4px;
        width: calc(100% + 4px);
        height: calc(100% + 4px);
        background: linear-gradient(86deg, #376c56 0%, #242a29 100%);
      }

      &:nth-child(3),
      &:nth-child(6) {
        width: auto;
        height: auto;
        background: transparent;
        &:before {
          display: none;
        }
      }
    }
  }

  &__answers {
    margin-top: 57px;
    display: flex;
    flex-direction: column;
    gap: 22px;
    width: 100%;

    .answer {
      position: relative;
      display: flex;
      align-items: center;
      gap: 22px;
      width: 100%;
      padding: 22px;
      background: linear-gradient(86deg, #16302c 0%, #13201f 100%);
      border-radius: 400px;

      &.active {
        background: linear-gradient(148deg, #0a996b 0%, #5febbd 100%);
      }

      &:before {
        display: block;
        content: '';
        position: absolute;
        top: -2px;
        left: -2px;
        z-index: -1;
        border-radius: 400px;
        width: calc(100% + 4px);
        height: calc(100% + 4px);
        background: linear-gradient(86deg, #376c56 0%, #242a29 100%);
      }

      .text-light {
        margin: 0;
        width: auto;
      }
    }
  }

  .subtitle {
    position: static;
    margin-top: 24px;
  }

  .title {
    position: static;
  }

  .text {
    position: static;
    margin-top: 57px;
  }

  .text-light {
    position: static;
    margin-top: 16px;
  }

  .btn {
    position: static;
    margin: 57px auto 0;
  }
}
</style>
