<script setup>
defineProps(['number']);
</script>

<template>
  <div>
    <!-- <h1>You are on lesson {{ $route.params.number }}</h1> -->
    <h1>You are on lesson {{ number }}</h1>
  </div>
</template>
