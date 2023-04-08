import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', () => {
  // state
  const count = ref(0)
  const name = ref('Foo')

  // getters
  const doubleCount = computed(() => count.value * 2)

  // actions
  const increment = () => {
    count.value++
  }


  // pros: better code structure
  // cons: learning curve

  return { count, name, doubleCount, increment }
})