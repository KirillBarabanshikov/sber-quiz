<script setup>
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from '@/store/Store.js'
import { useHideEmail } from '@/utils/useHideEmail.js'
import VBtn from '@/components/VBtn.vue'

const router = useRouter()
const route = useRoute()
const store = useStore()
const API = window.API
const leaderBoard = ref([])

const toTest = () => {
  router.push('/test')
}
await store.setLeaderboards()

onMounted(() => {
  leaderBoard.value = store.leaderboards
  if (route.query?.finish && store.result?.place > 10) {
    leaderBoard.value.splice(-1, 1, store.result)
  }
})
</script>

<template>
  <main class="main">
    <div class="main__bg">
      <img src="/img/bg.png" alt="" />
    </div>
    <!--    <div v-if="route.query.finish === 'false'" class="title">-->
    <!--      Попади в десятку<br />-->
    <!--      лучших-->
    <!--    </div>-->
    <!--    <div v-else class="title">Таблица лидеров</div>-->
    <div v-if="route.query.finish === 'false'" class="subtitle">
      Отвечай правильно на вопросы<br />
      за максимально короткое время
    </div>
    <!--    <div :class="['main__list', { finish: route.query.finish === 'true' }]">-->
    <!--      <div-->
    <!--        class="main__list-item"-->
    <!--        style="font-weight: 600; text-transform: uppercase"-->
    <!--      >-->
    <!--        <div class="item-place">Место</div>-->
    <!--        <div class="item-user">Участник</div>-->
    <!--        <div class="item-answers">Верные ответы</div>-->
    <!--        <div class="item-time">Время</div>-->
    <!--      </div>-->
    <!--      <div-->
    <!--        v-for="(item, index) in leaderBoard"-->
    <!--        :key="item"-->
    <!--        :class="[-->
    <!--          'main__list-item',-->
    <!--          { active: item?.email === route.query?.email },-->
    <!--        ]"-->
    <!--      >-->
    <!--        <div class="item-place">{{ item?.place }}</div>-->
    <!--        <div class="item-user">-->
    <!--          {{ useHideEmail(item?.email) }}-->
    <!--        </div>-->
    <!--        <div class="item-answers">{{ item?.answers }}</div>-->
    <!--        <div class="item-time">{{ item?.completeTime }}</div>-->
    <!--      </div>-->
    <!--    </div>-->
    <VBtn v-if="route.query.finish === 'false'" @click="toTest">Начать </VBtn>
    <VBtn
      v-else
      @click="router.push('/finish')"
      :class="[{ finish: route.query.finish === 'true' }]"
      >Продолжить
    </VBtn>
  </main>
</template>

<style scoped lang="scss">
@import '@/assets/scss/variables';

.main {
  .subtitle {
    top: 700px;
  }

  .title {
    top: 524px;
  }

  .btn {
    top: 1156px;

    &.finish {
      top: 1453px;
    }
  }

  &__list {
    position: absolute;
    top: 832px;
    padding: 39px 22px;
    border-radius: 32px;
    width: 999px;
    height: 778px;
    background: linear-gradient(86deg, #16302c 0%, #13201f 100%);

    &:before {
      display: block;
      content: '';
      position: absolute;
      top: -2px;
      left: -2px;
      z-index: -1;
      border-radius: 32px;
      width: 1003px;
      height: 782px;
      background: linear-gradient(86deg, #376c56 0%, #242a29 100%);
    }

    &.finish {
      top: 629px;
    }

    &-item {
      display: flex;
      align-items: center;
      color: #fff;
      font-size: 24px;
      font-weight: 400;
      width: 100%;
      height: 64px;
      text-align: center;

      &.active {
        color: #2fe5c1;
      }

      .item-place {
        flex: 0 0 117px;
      }

      .item-user {
        flex: 0 0 362px;
      }

      .item-answers,
      .item-time {
        flex: 0 0 240px;
      }
    }
  }
}
</style>
