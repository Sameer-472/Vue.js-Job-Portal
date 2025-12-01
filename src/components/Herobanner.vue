<script setup>
import { defineProps } from 'vue';
import HomeCards from './HomeCards.vue';
import JobListings from './JobListings.vue';
HomeCards

defineProps({
    title: {
        type: String,
        default: "This is the default title"
    }
})
</script>

<template>
    <!-- this is muy hero banner tile coming from : {{ title }} -->
    <HomeCards />
</template>