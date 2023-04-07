<script setup>
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useCounterStore } from './../stores/CounterStore';

defineProps({
  msg: String,
})


const count_store = useCounterStore();
const { count, doubleCount } = storeToRefs(count_store);
const { increment } = count_store;

</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="increment">count is {{ `${count} - ${doubleCount}` }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank">create-vue</a>, the official Vue + Vite
    starter
  </p>
  <p>
    Install
    <a href="https://github.com/vuejs/language-tools" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
