<script setup>
import { useRouter } from 'vue-router'
import { useStore } from '@/store/Store.js'
import VBtn from '@/components/VBtn.vue'

const router = useRouter()
const store = useStore()
const API = window.API

const toRating = () => {
  router.push('/test')
}
</script>

<template>
  <main class="main">
    <div class="main__bg">
      <img src="/img/bg.png" alt="" />
    </div>
    <div class="subtitle one">
      Готов прямо сейчас проверить <br />
      свои знания?
    </div>
    <div class="title">
      Тогда участвуй в тесте<br />
      от Сбера!
    </div>
    <div class="subtitle two">Желаем удачи!</div>
    <VBtn @click="toRating">Проверить себя</VBtn>
  </main>
</template>

<style scoped lang="scss">
@import '@/assets/scss/variables';

.main {
  .subtitle {
    &.one {
      top: 641px;
    }
    &.two {
      top: 1019px;
    }
  }
  .title {
    top: 830px;
  }
  .btn {
    top: 1156px;
  }
}
</style>
