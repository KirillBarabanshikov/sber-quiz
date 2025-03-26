import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import '@/assets/scss/main.scss'
import vRipple from '@/directives/vRipple.js'

const clickOutside = {
  beforeMount: (el, binding) => {
    el.clickOutsideEvent = (event) => {
      if (
        !(
          el === event.target ||
          el.contains(event.target) ||
          event.target.tagName === 'INPUT'
        )
      ) {
        binding.value()
      }
    }
    document.addEventListener('click', el.clickOutsideEvent)
  },
  unmounted: (el) => {
    document.removeEventListener('click', el.clickOutsideEvent)
  },
}

const app = createApp(App)
app
  .use(router)
  .use(createPinia())
  .directive('click-outside', clickOutside)
  .directive('ripple', vRipple)
  .mount('#app')
