<script setup>
// import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
// import { useStore } from '@/store/Store.js'
// import { useRegular } from '@/utils/useRegular.js'
// import { vMaska } from 'maska'
import VBtn from '@/components/VBtn.vue'
// import VInput from '@/components/VInput.vue'
// import VKeyboard from '@/components/VKeyboard.vue'

const router = useRouter()
const route = useRoute()
// const store = useStore()
// const API = window.API

// const { emailTest } = useRegular()

// const emailInput = ref()
// const numberInput = ref()

// const isEmailOpen = ref(false)
// const isNumberOpen = ref(false)

// const emailError = ref({
//   isError: false,
//   message: '*Извините, указанный e-mail уже участвует в розыгрыше.',
// })
// const numberError = ref({
//   isError: false,
//   message: '*Извините, указанный номер уже участвует в розыгрыше.',
// })

// const data = ref({
//   email: '',
//   number: '',
//   numberMask: {},
// })

// const openKeyboard = (str) => {
//   if (str === 'email') {
//     isEmailOpen.value = true
//     isNumberOpen.value = false
//   }
//   if (str === 'number') {
//     isNumberOpen.value = true
//     isEmailOpen.value = false
//   }
// }

const sendForm = () => {
  // if (emailTest(data.value.email) && data.value.numberMask.completed) {
  //   await store
  //     .postLeaderboards({
  //       email: data.value.email,
  //       answers: +route.query.answers,
  //       time: route.query.time,
  //       phone: data.value.numberMask.masked,
  //     })
  //     .then((e) => {
  //       if (!e) {
  //         router.push(`/rating?finish=true&email=${data.value.email}`)
  //       } else {
  //         console.log(e.response.data.violations)
  //         e.response.data.violations.forEach((item) => {
  //           if (item.propertyPath === 'phone') numberError.value.isError = true
  //           if (item.propertyPath === 'email') emailError.value.isError = true
  //         })
  //         setTimeout(() => {
  //           numberError.value.isError = false
  //           emailError.value.isError = false
  //         }, 5000)
  //       }
  //     })
  // }

  router.push('/finish')
}
</script>

<template>
  <main class="main">
    <div class="main__bg">
      <img src="/img/bg.png" alt="" />
    </div>
    <!--    <div class="subtitle">-->
    <!--      Пожалуйста, укажи электронную почту и номер телефона для связи.-->
    <!--    </div>-->
    <div class="title">
      Поздравляем! <br />
      Ты верно ответил на
      <span style="color: #2fe5c1">{{ route.query?.answers }}</span>
      {{
        +route.query?.answers === 1
          ? 'вопрос'
          : +route.query?.answers > 1 && +route.query?.answers < 5
          ? 'вопроса'
          : 'вопросов'
      }}
      <!--      и принимаешь участие в розыгрыше!-->
    </div>
    <div class="main__form">
      <!--      <form class="form">-->
      <!--        <VInput-->
      <!--          @click="openKeyboard('email')"-->
      <!--          ref="emailInput"-->
      <!--          v-model="data.email"-->
      <!--          placeholder="E-mail"-->
      <!--          v-model:error="emailError"-->
      <!--        />-->
      <!--        <VInput-->
      <!--          @click="openKeyboard('number')"-->
      <!--          ref="numberInput"-->
      <!--          v-model="data.number"-->
      <!--          placeholder="Телефон"-->
      <!--          number-->
      <!--          v-maska="data.numberMask"-->
      <!--          v-model:error="numberError"-->
      <!--        />-->
      <!--      </form>-->
      <VBtn @click="sendForm">Подтвердить</VBtn>
    </div>
    <!--    <VKeyboard-->
    <!--      :input-ref="emailInput"-->
    <!--      v-model:string="data.email"-->
    <!--      v-model:is-open="isEmailOpen"-->
    <!--      email-->
    <!--    />-->
    <!--    <VKeyboard-->
    <!--      :input-ref="numberInput"-->
    <!--      v-model:string="data.number"-->
    <!--      v-model:is-open="isNumberOpen"-->
    <!--      email-->
    <!--    />-->
  </main>
</template>

<style scoped lang="scss">
@import '@/assets/scss/variables';

.main {
  &__form {
    position: absolute;
    top: 946px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .form {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
  }

  .subtitle {
    top: 805px;
    width: 673px;
  }

  .title {
    top: 740px;
    width: 673px;
    font-size: 48px;
  }

  .btn {
    margin-top: 60px;
    position: static;
  }
}
</style>
