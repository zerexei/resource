<script setup>
// !NOTE: don't overuse, decrease readability
// defining multiple attribute on element
const objectAttributes = {
  id: 'my-id',
  class: 'class-1 class-2',
};
</script>

<template>
  <p v-bind="objectAttributes">Hello Multiple Attributes</p>
</template>

<style scoped>
.class-1 {
  color: aqua;
}
</style>
