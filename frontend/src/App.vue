<script setup lang="ts">
import { RouterView } from 'vue-router';
import Navbar from './components/Navbar.vue';
</script>

<template>
  <el-container>
    <el-header class="no-padding">
      <Navbar />
    </el-header>
    <el-main><RouterView /></el-main>
  </el-container>
</template>

<style>
body {
  padding: 0;
  margin: 0;
}

.no-padding {
  padding: 0 !important;
}
</style>
