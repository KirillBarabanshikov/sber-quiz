<script setup>
import { computed, onMounted, ref } from 'vue'
import VBtn from '@/components/VBtn.vue'

const props = defineProps({
  timer: {
    type: Number,
  },
  isOpen: {
    type: Boolean,
    default: false,
  },
})
const emits = defineEmits(['update:isOpen'])

const timeout = ref(0)

const timer2 = computed(() => {
  const str = ref('00:')
  if (timeout.value - props.timer > 9) {
    str.value += (timeout.value - props.timer).toString()
  } else {
    str.value = str.value + '0' + (timeout.value - props.timer).toString()
  }
  return Array.from(str.value)
})
const close = () => {
  emits('update:isOpen', false)
}

onMounted(() => {
  timeout.value = window.TIMEOUT
})
</script>

<template>
  <Transition name="fade">
    <div v-if="isOpen" @close="close" class="popup">
      <div @click.stop class="popup__content">
        <div class="popup__content-title">
          Ещё думаешь над<br />
          вопросом?
          <span>Нажми, чтобы продолжить</span>
        </div>
        <div class="popup__content-timer">
          <div>
            <div v-for="item in timer2" class="char">
              {{ item }}
            </div>
          </div>
        </div>
        <div class="popup__content-close">
          <VBtn @click="close">Продолжить</VBtn>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped lang="scss">
@import '@/assets/scss/variables';

.popup {
  z-index: 5;
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;

  &__content {
    position: relative;
    width: 840px;
    height: 1140px;
    background: linear-gradient(86deg, #16302c 0%, #13201f 100%);
    border-radius: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 60px;

    &:before {
      display: block;
      content: '';
      position: absolute;
      top: -2px;
      left: -2px;
      z-index: -1;
      border-radius: 32px;
      width: calc(100% + 4px);
      height: calc(100% + 4px);
      background: linear-gradient(86deg, #376c56 0%, #242a29 100%);
    }

    &-title {
      color: #fff;
      font-size: 54px;
      font-weight: 600;
      text-align: center;
      display: flex;
      flex-direction: column;
      gap: 24px;

      span {
        font-size: 32px;
      }
    }

    &-timer {
      position: relative;
      font-size: 36px;

      div {
        display: flex;
        gap: 10px;
      }

      .char {
        width: 70px;
        height: 110px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 400px;
        background: linear-gradient(86deg, #1e554d 0%, #0b3e3a 100%);
        color: #fff;

        &:before {
          display: block;
          content: '';
          position: absolute;
          top: -2px;
          left: -2px;
          z-index: -1;
          border-radius: 32px;
          width: calc(100% + 4px);
          height: calc(100% + 4px);
          background: linear-gradient(86deg, #376c56 0%, #242a29 100%);
        }

        &:nth-child(3) {
          background: transparent;
          width: auto;
          height: auto;
          border: none;

          &:before {
            display: none;
          }
        }
      }
    }

    &-close {
      .btn {
        position: static;
      }
    }
  }
}
</style>
