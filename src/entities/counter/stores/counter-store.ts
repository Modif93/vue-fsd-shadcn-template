import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { Count } from '../model/count'

export const useCounterStore = defineStore('counter', () => {
  const count = ref<Count>({ num: 0 })
  const doubleCount = computed(() => count.value.num * 2)
  function increment() {
    count.value.num++
  }

  return { count, doubleCount, increment }
})
