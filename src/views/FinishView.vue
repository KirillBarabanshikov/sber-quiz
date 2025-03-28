<script setup>
import { useRoute, useRouter } from 'vue-router'
import { useStore } from '@/store/Store.js'
import VBtn from '@/components/VBtn.vue'
import VLine from '@/assets/svgs/VLine.vue'

const router = useRouter()
const store = useStore()
const API = window.API

const toRating = () => {
  router.push('/')
  // router.push('/rating?finish=true')
}

const route = useRoute()
</script>

<template>
  <main class="main">
    <div class="main__bg">
      <img src="/img/bg-dark.png" alt="" />
    </div>
    <div class="counter">
      <span v-if="+route.query?.answers === 15">
        Поздравляем! Ты успешно ответил на все вопросы!
      </span>
      <span v-else>
        Поздравляем! Ты верно ответил на
        <span style="color: #2fe5c1">{{ route.query?.answers }}</span>
        {{
          +route.query?.answers === 1
            ? 'вопрос'
            : +route.query?.answers > 1 && +route.query?.answers < 5
            ? 'вопроса'
            : 'вопросов'
        }}
      </span>
    </div>
    <div class="subtitle">
      Сканируй QR-код и используй<br />
      GigaChat (18+) в решении<br />
      любых задач!
    </div>
    <div class="title">
      Сделай свою жизнь проще с<br />
      технологиями Сбера!
    </div>
    <VBtn @click="toRating">На главную</VBtn>
    <div class="main__line">
      <VLine />
    </div>
  </main>
</template>

<style scoped lang="scss">
@import '@/assets/scss/variables';

.main {
  &__line {
    position: absolute;
    top: 1412px;
  }

  .counter {
    top: 610px;
    max-width: 700px;
  }

  .subtitle {
    top: 1155px;
  }

  .title {
    top: 1000px;
    font-size: 48px;
  }

  .btn {
    top: 840px;
  }
}
</style>
