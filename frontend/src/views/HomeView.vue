<template>
  <Section>{{ kda }}</Section>
</template>

<script lang="ts" setup>
import Section from '../components/Section.vue';
import axios from 'axios';
import { ref, type Ref } from 'vue';

let kda: Ref<number> = ref(0);

axios
  .get('http://localhost:3333/stats/kda', {
    headers: { 'Access-Control-Allow-Origin': '*' },
  })
  .then((response) => (kda.value = response.data));
</script>

<style></style>
