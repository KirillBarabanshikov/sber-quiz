<script setup>
import { onMounted, ref } from 'vue'

const emits = defineEmits(['click'])

const click = () => {
  emits('click')
}
</script>

<template>
  <button
    @click="click"
    :class="['btn']"
    v-ripple
  >
    <slot></slot>
  </button>
</template>

<style scoped lang="scss">
.btn {
  width: 510px;
  height: 122px;
  border-radius: 70px;
  color: #fff;
  font-size: 36px;
  font-weight: 600;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  overflow: hidden;
  position: absolute;
  backdrop-filter: blur(30px);
  background: linear-gradient(165deg, rgba(47, 229, 193, 0.8) 0%, rgba(24, 170, 123, 0.8) 100%);
}
</style>
