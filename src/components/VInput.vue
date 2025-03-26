<script setup>
import { ref } from 'vue'
import { vMaska } from 'maska'

const props = defineProps({
  type: {
    type: String,
    default: 'text',
  },
  placeholder: {
    type: String,
    default: '',
  },
  modelValue: {
    type: String,
    default: '',
    required: true,
  },
  error: {
    type: Object,
  },
  number: {
    type: Boolean,
    default: false,
  },
})
const emits = defineEmits(['update:modelValue', 'update:error'])

const onInput = (e) => {
  emits('update:modelValue', e.target.value)
}

const input = ref(null)
defineExpose({
  input,
})
</script>

<template>
  <div :class="['input_block', { error: error.isError }]">
    <input
      v-if="!number"
      ref="input"
      @input="onInput"
      :type="type"
      :placeholder="placeholder"
      :value="modelValue"
      :class="['input', { error: error.isError }]"
    />
    <input
      v-else
      ref="input"
      @input="onInput"
      :type="type"
      :placeholder="placeholder"
      :value="modelValue"
      :class="['input', { error: error.isError }]"
      data-maska="+7 (###) ###-##-##"
    />
    <span v-if="error.isError" class="error-text">{{ error.message }}</span>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/scss/variables';

.input_block {
  position: relative;
  width: 754px;

  &:before {
    display: block;
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    z-index: -1;
    border-radius: 400px;
    width: calc(100% + 4px);
    height: 74px;
    background: linear-gradient(86deg, #376c56 0%, #242a29 100%);
  }

  .input {
    width: 100%;
    height: 70px;
    background: linear-gradient(86deg, #16302c 0%, #13201f 100%);
    border-radius: 400px;
    font-size: 24px;
    padding: 0 52px;
    position: relative;
    color: #fff;

    &::placeholder {
      color: rgba(255, 255, 255, 0.8);
    }

    &:focus {
      &.error {
        //border-bottom: 2px solid $red;
      }
    }

    &.error {
      //border-bottom: 2px solid $light-red;.

      &::placeholder {
        color: $light-red;
      }
    }
  }

  .error-text {
    position: static;
    display: block;
    width: 100%;
    text-align: center;
    padding: 16px 0;
    font-size: 24px;
    font-weight: 300;
    color: #5febbd;
  }
}
</style>
