<script setup>
import { reactive } from 'vue';

const state = reactive({ count: 0 });

function increment() {
  state.count++;
}
</script>

<template>
  <p>Reactive State</p>
  <button @click="increment">Click {{ state.count }}</button>
</template>
