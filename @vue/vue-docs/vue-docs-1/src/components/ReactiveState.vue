<script setup>
// !NOTE: JUST USE REF()
import { reactive } from 'vue';

const state = reactive({ count: 0 });

function increment() {
  state.count++;
}


// !NOTE: Advance stuffs
// const books = reactive([ref('Vue 3 Guide')])
// // need .value here
// console.log(books[0].value)

// const map = reactive(new Map([['count', ref(0)]]))
// // need .value here
// console.log(map.get('count').value)

// // !NOTE: only use reactive when defining a state
// const person = reactive({
//   name: 'Albert',
//   age: 30,
//   isNinja: true,
// });

// const name = ref('Albert');
// const age = ref(30);
// const isNinja = ref(true);
</script>

<template>
  <p>Reactive State</p>
  <button @click="increment">Click {{ state.count }}</button>
</template>
