<script setup>
const props = defineProps({
  string: {
    type: String,
    default: '',
    required: true,
  },
  isOpen: {
    type: Boolean,
    default: false,
  },
  inputRef: {
    type: Object,
  },
  email: {
    type: Boolean,
    default: false,
  },
})
const emits = defineEmits(['update:isOpen', 'update:string'])
const onInput = (e) => {
  props.inputRef.input.focus()
  const startPos = props.inputRef.input.selectionStart
  const endPos = props.inputRef.input.selectionEnd
  const text = props.string

  let newText = ''
  newText = text.substring(0, startPos) + e + text.substring(endPos)

  emits('update:string', `${newText}`)
  setTimeout(() => {
    props.inputRef.input.setSelectionRange(startPos + 1, startPos + 1)
  }, 0)
}

const backspace = () => {
  props.inputRef.input.focus()
  const startPos = props.inputRef.input.selectionStart
  const text = props.string

  let newText = ''
  const end = text.substring(startPos)
  newText = text.slice(0, startPos - 1) + end

  emits('update:string', `${newText}`)
  setTimeout(() => {
    props.inputRef.input.setSelectionRange(startPos - 1, startPos - 1)
  }, 0)
}

const close = () => {
  emits('update:isOpen', false)
}
</script>

<template>
  <Transition name="keyboard">
    <div
      v-if="isOpen"
      v-click-outside="close"
      :class="['keyboard', { email: email }]"
    >
      <div class="keyboard__block">
        <div v-if="!email" class="keyboard__row">
          <div @click="onInput('й')" class="keyboard__btn" v-ripple>й</div>
          <div @click="onInput('ц')" class="keyboard__btn" v-ripple>ц</div>
          <div @click="onInput('у')" class="keyboard__btn" v-ripple>у</div>
          <div @click="onInput('к')" class="keyboard__btn" v-ripple>к</div>
          <div @click="onInput('е')" class="keyboard__btn" v-ripple>е</div>
          <div @click="onInput('ё')" class="keyboard__btn" v-ripple>ё</div>
          <div @click="onInput('н')" class="keyboard__btn" v-ripple>н</div>
          <div @click="onInput('г')" class="keyboard__btn" v-ripple>г</div>
          <div @click="onInput('ш')" class="keyboard__btn" v-ripple>ш</div>
          <div @click="onInput('щ')" class="keyboard__btn" v-ripple>щ</div>
          <div @click="onInput('з')" class="keyboard__btn" v-ripple>з</div>
          <div @click="onInput('х')" class="keyboard__btn" v-ripple>х</div>
          <div @click="onInput('ъ')" class="keyboard__btn" v-ripple>ъ</div>
          <div @click="backspace" class="keyboard__btn big" v-ripple>
            <img src="/img/icons/backspace.svg" alt="" />
          </div>
        </div>
        <div v-else class="keyboard__row">
          <div @click="onInput('1')" class="keyboard__btn" v-ripple>1</div>
          <div @click="onInput('2')" class="keyboard__btn" v-ripple>2</div>
          <div @click="onInput('3')" class="keyboard__btn" v-ripple>3</div>
          <div @click="onInput('4')" class="keyboard__btn" v-ripple>4</div>
          <div @click="onInput('5')" class="keyboard__btn" v-ripple>5</div>
          <div @click="onInput('6')" class="keyboard__btn" v-ripple>6</div>
          <div @click="onInput('7')" class="keyboard__btn" v-ripple>7</div>
          <div @click="onInput('8')" class="keyboard__btn" v-ripple>8</div>
          <div @click="onInput('9')" class="keyboard__btn" v-ripple>9</div>
          <div @click="onInput('0')" class="keyboard__btn" v-ripple>0</div>
          <div @click="onInput('-')" class="keyboard__btn" v-ripple>-</div>
          <div @click="onInput('_')" class="keyboard__btn" v-ripple>_</div>
          <div @click="backspace" class="keyboard__btn big" v-ripple>
            <img src="/img/icons/backspace.svg" alt="" />
          </div>
        </div>
        <div v-if="!email" class="keyboard__row">
          <div @click="onInput('ф')" class="keyboard__btn" v-ripple>ф</div>
          <div @click="onInput('ы')" class="keyboard__btn" v-ripple>ы</div>
          <div @click="onInput('в')" class="keyboard__btn" v-ripple>в</div>
          <div @click="onInput('а')" class="keyboard__btn" v-ripple>а</div>
          <div @click="onInput('п')" class="keyboard__btn" v-ripple>п</div>
          <div @click="onInput('р')" class="keyboard__btn" v-ripple>р</div>
          <div @click="onInput('о')" class="keyboard__btn" v-ripple>о</div>
          <div @click="onInput('л')" class="keyboard__btn" v-ripple>л</div>
          <div @click="onInput('д')" class="keyboard__btn" v-ripple>д</div>
          <div @click="onInput('ж')" class="keyboard__btn" v-ripple>ж</div>
          <div @click="onInput('э')" class="keyboard__btn" v-ripple>э</div>
        </div>
        <div v-else class="keyboard__row">
          <div @click="onInput('q')" class="keyboard__btn" v-ripple>q</div>
          <div @click="onInput('w')" class="keyboard__btn" v-ripple>w</div>
          <div @click="onInput('e')" class="keyboard__btn" v-ripple>e</div>
          <div @click="onInput('r')" class="keyboard__btn" v-ripple>r</div>
          <div @click="onInput('t')" class="keyboard__btn" v-ripple>t</div>
          <div @click="onInput('y')" class="keyboard__btn" v-ripple>y</div>
          <div @click="onInput('u')" class="keyboard__btn" v-ripple>u</div>
          <div @click="onInput('i')" class="keyboard__btn" v-ripple>i</div>
          <div @click="onInput('o')" class="keyboard__btn" v-ripple>o</div>
          <div @click="onInput('p')" class="keyboard__btn" v-ripple>p</div>
          <div @click="onInput('[')" class="keyboard__btn" v-ripple>[</div>
          <div @click="onInput(']')" class="keyboard__btn" v-ripple>]</div>
        </div>
        <div v-if="!email" class="keyboard__row">
          <div @click="onInput('я')" class="keyboard__btn" v-ripple>я</div>
          <div @click="onInput('ч')" class="keyboard__btn" v-ripple>ч</div>
          <div @click="onInput('с')" class="keyboard__btn" v-ripple>с</div>
          <div @click="onInput('м')" class="keyboard__btn" v-ripple>м</div>
          <div @click="onInput('и')" class="keyboard__btn" v-ripple>и</div>
          <div @click="onInput('т')" class="keyboard__btn" v-ripple>т</div>
          <div @click="onInput('ь')" class="keyboard__btn" v-ripple>ь</div>
          <div @click="onInput('б')" class="keyboard__btn" v-ripple>б</div>
          <div @click="onInput('ю')" class="keyboard__btn" v-ripple>ю</div>
        </div>
        <div v-else class="keyboard__row">
          <div @click="onInput('a')" class="keyboard__btn" v-ripple>a</div>
          <div @click="onInput('s')" class="keyboard__btn" v-ripple>s</div>
          <div @click="onInput('d')" class="keyboard__btn" v-ripple>d</div>
          <div @click="onInput('f')" class="keyboard__btn" v-ripple>f</div>
          <div @click="onInput('g')" class="keyboard__btn" v-ripple>g</div>
          <div @click="onInput('h')" class="keyboard__btn" v-ripple>h</div>
          <div @click="onInput('j')" class="keyboard__btn" v-ripple>j</div>
          <div @click="onInput('k')" class="keyboard__btn" v-ripple>k</div>
          <div @click="onInput('l')" class="keyboard__btn" v-ripple>l</div>
          <div @click="onInput(';')" class="keyboard__btn" v-ripple>;</div>
          <div @click="onInput('\'')" class="keyboard__btn" v-ripple>'</div>
          <div class="keyboard__btn big" v-ripple>Enter</div>
        </div>
        <div class="keyboard__row">
          <div @click="onInput('z')" class="keyboard__btn" v-ripple>z</div>
          <div @click="onInput('x')" class="keyboard__btn" v-ripple>x</div>
          <div @click="onInput('c')" class="keyboard__btn" v-ripple>c</div>
          <div @click="onInput('v')" class="keyboard__btn" v-ripple>v</div>
          <div @click="onInput('b')" class="keyboard__btn" v-ripple>b</div>
          <div @click="onInput('n')" class="keyboard__btn" v-ripple>n</div>
          <div @click="onInput('m')" class="keyboard__btn" v-ripple>m</div>
          <div @click="onInput(',')" class="keyboard__btn" v-ripple>,</div>
          <div @click="onInput('.')" class="keyboard__btn" v-ripple>.</div>
          <div @click="onInput('/')" class="keyboard__btn" v-ripple>/</div>
          <div @click="onInput('@')" class="keyboard__btn" v-ripple>@</div>
        </div>
        <div class="keyboard__row">
          <div @click="onInput(' ')" class="keyboard__btn space" v-ripple></div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped lang="scss">
@import '@/assets/scss/variables';

.keyboard {
  position: absolute;
  z-index: 5;
  bottom: 30px;
  width: 1064px;
  background-color: $red;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 32px;
  padding: 58px 22px;

  &.email {
    //background: linear-gradient(86deg, #16302c 0%, #13201f 100%);
  }

  &:after {
    display: block;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    border-radius: 32px;
    background: linear-gradient(86deg, #16302c 0%, #13201f 100%);
  }

  &:before {
    display: block;
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    z-index: -2;
    border-radius: 32px;
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    background: linear-gradient(86deg, #376c56 0%, #242a29 100%);
  }

  &__block {
    display: flex;
    flex-direction: column;
    gap: 11px;
  }

  &__close {
    position: absolute;
    top: 16px;
    right: 80px;
  }

  &__row {
    display: flex;
    justify-content: center;
    gap: 11px;
  }

  &__btn {
    background-color: #fff;
    color: #1d4459;
    font-weight: 600;
    font-size: 20px;
    width: 64px;
    height: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 14px;
    position: relative;
    overflow: hidden;
    &.big {
      width: 120px;
    }

    &.space {
      width: 644px;
    }
  }
}
</style>
