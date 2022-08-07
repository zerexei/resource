<script setup>
import { provide, ref } from 'vue';

// state management for siblings
// provide('key', 'value');

let name = ref('John Doe');
provide('name', {
  name,
  changeName: () => (name.value = 'Updated Name'),
});
</script>

<template>
  <h2>Lesson 22</h2>
</template>

<!-- bottom child component -->
<!-- <script setup>
import { inject } from 'vue';

let { name, changeName } = inject('name');
</script>

<template>
  <button @click="updateName">{{ name }}</button>
</template> -->
