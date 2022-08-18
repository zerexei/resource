<script setup>
import { ref } from 'vue';

let products = ref([]);

(async () => {
  let res = await fetch('https://fakestoreapi.com/products?limit=5');
  products.value = await res.json();
})();
</script>

<template>
  <div>Composable</div>
  <p v-for="product in products" :key="product.id">{{ product.title }}</p>
</template>
