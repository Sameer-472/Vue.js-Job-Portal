<!-- Composition API  -->
<script setup>
import { RouterView } from 'vue-router';
import navbar from './components/navbar.vue';


</script>

<template>

  <div class="font-poppins">
    <navbar />
    <RouterView />
  </div>
</template>