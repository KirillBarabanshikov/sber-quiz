<script setup>
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from '@/store/Store.js'
import { useLoadingStore } from '@/store/LoadingStore.js'
import VLoader from '@/components/VLoader.vue'
import VPopupTime from '@/components/VPopupTime.vue'

const store = useStore()
const loadingStore = useLoadingStore()
const router = useRouter()
const route = useRoute()

const timer = ref(0)
const isOpenTime = ref(false)

const back = () => {
  router.push('/')
}

const inactivityTime = () => {
  const resetTimer = () => {
    timer.value = 0
    isOpenTime.value = false
  }
  setInterval(() => {
    timer.value++
    if (timer.value >= window.TIMEOUT - 30) {
      if (route.name === 'test') {
        isOpenTime.value = true
      }
    }
    if (timer.value >= window.TIMEOUT) {
      resetTimer()
      if (route.name !== 'home') {
        isOpenTime.value = false
        setTimeout(() => {
          router.push('/')
        }, 100)
      }
    }
  }, 1000)
  // сюда можно добавить любой ивент.
  document.addEventListener('mousemove', resetTimer)
  document.addEventListener('keypress', resetTimer)
  document.addEventListener('touch', resetTimer)
}

const time = ref(0)
const timer2 = () => {
  time.value++
  if (time.value === 10) {
    fetch('http://localhost:1702')
  }
}
const myInterval = ref()

const startTimer = () => {
  myInterval.value = setInterval(timer2, 1000)
}
const clearTimer = () => {
  clearInterval(myInterval.value)
  time.value = 0
}

onMounted(() => {
  inactivityTime()
})
</script>

<template>
  <div @touchstart="startTimer" @touchend="clearTimer" class="secret"></div>
  <VLoader v-if="loadingStore.isLoading" />
  <VPopupTime :timer="timer" v-model:isOpen="isOpenTime" />
  <div @click="back" class="back"></div>
  <RouterView v-slot="{ Component }">
    <template v-if="Component">
      <transition name="slide" mode="out-in">
        <suspense>
          <component :is="Component"></component>
        </suspense>
      </transition>
    </template>
  </RouterView>
</template>

<style scoped>
.back {
  position: absolute;
  top: 93px;
  left: 96px;
  width: 524px;
  height: 66px;
}
.secret {
  z-index: 1000;
  position: absolute;
  right: 0;
  top: 0;
  height: 200px;
  width: 200px;
}
</style>
