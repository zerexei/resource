<!-- 
    !# stopped @ tuts 15
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
    <hello-world></hello-world>

    <router-link
      :to="{ name: 'project', params: { project_id: 1, user_id: 1 } }"
    ></router-link>

    <transition></transition>
    <transition-group></transition-group>
    <keep-alive>
      <!-- TODO: play with SPA tasks -->
    </keep-alive>
  </div>
</template>

<script>
export default {
  setup() {
    // ? how to implement this on <script setup>
    const api_key = 'qprcn1-2irnc12i4n-102op'; // not visible after setup lifecycle
    const public_key = '1c12-4n1p4c-n1p4';

    watch(
      // /:prop(<regex>) => /:UnFound(.*)* // 404 route
      () => route.params.project_id,
      (project_id, previous_project_id) => {
        // watch route params project id
        // execute actions
        console.log(project_id);
      }
    );

    return {
      public_key, // make visible even after setup lifecycle
    };
  },
  props: ['project_id'], // pass route params as props but not reactive +> props: true on route

  props(route) {
    return {
      project_id: route.parmas.project_id, // reactive
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

  // router lifecycle
  beforeRouteEnter(to, from, next) {
    next(() => {
      // access component
    });
  },
  beforeRouteUpdate(to, from) {},
  beforeRouteLeave(to, from) {
    const answer = window.confirm('Are you sure you want to leave?');
    if (!answer) return false;
  },
};
</script>
