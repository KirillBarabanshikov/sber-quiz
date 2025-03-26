import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useLoadingStore } from '@/store/LoadingStore.js'
import axios from 'axios'

export const useStore = defineStore('store', () => {
  const leaderboards = ref([])
  const result = ref([])

  const loadingStore = useLoadingStore()

  const setLeaderboards = async () => {
    loadingStore.setLoading(true)
    try {
      const res = await axios({
        baseURL: `${window.API}/api/leaderboards?page=1&itemsPerPage=10`,
        method: 'GET',
        headers: {
          accept: 'application/json',
        },
      })
      console.log(res.data)
      leaderboards.value = res.data
    } catch (e) {
      console.log(e)
    } finally {
      loadingStore.setLoading(false)
    }
  }
  const postLeaderboards = async (data) => {
    loadingStore.setLoading(true)
    try {
      const res = await axios({
        baseURL: `${window.API}/api/leaderboards`,
        method: 'POST',
        headers: {
          accept: 'application/json',
        },
        data: data,
      })
      result.value = res.data
    } catch (e) {
      return e
    } finally {
      loadingStore.setLoading(false)
    }
  }

  return {
    leaderboards,
    result,
    setLeaderboards,
    postLeaderboards,
  }
})
