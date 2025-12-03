<!-- Composition API  -->
<script setup>
import { RouterView } from 'vue-router';
import navbar from './components/navbar.vue';
import Footer from './components/Footer.vue';

</script>

<template>

  <div class="font-poppins">
    <navbar />
    <RouterView />
    <Footer />
  </div>
</template>