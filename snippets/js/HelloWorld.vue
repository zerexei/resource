<!-- 
    TODO: research
    - axios.cancelToken 
-->

<!-- <script setup lang="ts">
interface Props {
  name: string;
  age?: number;
}

const props = defineProps<Props>();

function counter_factory() {
  const num = { value: 0 };

  function increment() {
    num.value++;
  }

  return { num, increment };
}

const counter = counter_factory();
</script> -->

<template>
  <div>
    <!-- COUNTER FACTORY -->
    <div>
      <p>{{ counter.num.value }}</p>
      <button @click="couter.increment()">Increment</button>
    </div>

    <HelloWorld />
    <hello-world></
  </div>
</template>

<script>
export default {
  setup() {
    // ? how to implement this on <script setup>
    const api_key = 'qprcn1-2irnc12i4n-102op'; // not visible after setup lifecycle
    const public_key = '1c12-4n1p4c-n1p4';

    return {
      public_key, // make visible even after setup lifecycle
    };
  },
  data() {
    return {};
  },
  created() {},
  methods: {
    getPublicKey() {
      return this.api_key; //not visible
      return this.public_key; // visisble
    },
  },
};
</script>
