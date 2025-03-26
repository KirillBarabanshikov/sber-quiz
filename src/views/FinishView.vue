<script setup>
import { useRouter } from 'vue-router'
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
</script>

<template>
  <main class="main">
    <div class="main__bg">
      <img src="/img/bg-dark.png" alt="" />
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

  .subtitle {
    top: 1055px;
  }

  .title {
    top: 919px;
    font-size: 48px;
  }

  .btn {
    top: 740px;
  }
}
</style>
