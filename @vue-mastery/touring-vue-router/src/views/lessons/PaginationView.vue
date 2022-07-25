<script setup>
import { computed, onMounted, watchEffect } from 'vue';
import EventService from '../../services/EventService';

const { page } = defineProps(['page']);

let events = null;
let totalEvents = 0;

watchEffect(async () => {
  await EventService.getEvents(2, page)
    .then((response) => {
      events = response.data;
      totalEvents = response.headers['x-total-count'];
    })
    .catch((error) => {});
});

const getEvents = computed(async () => {
  await events;
});

const hasNextPage = computed(() => {
  const totalPages = Math.ceil(totalEvents / 2);
  return page < totalPages;
});
</script>

<template>
  <div>
    <!-- <h1>You are on lesson {{ $route.params.number }}</h1> -->
    <div>{{ events || 'null' }}</div>
    <!-- <div v-for="event in events" :key="event.id">
      <span>@{{ event.time }} on {{ event.date }}</span>
      <h4>{{ event.title }}</h4>
    </div>

    <div class="pagination">
      <router-link
        to="{ name: 'EventList', query: {page: page - 1} }"
        v-if="page != 1"
        id="page-prev"
        rel="prev"
        >Previous</router-link
      >

      <router-link
        to="{ name: 'EventList', query: {page: page + 1} }"
        v-if="hasNextPage"
        id="page-next"
        rel="next"
        >Next</router-link
      >
    </div> -->
  </div>
</template>
