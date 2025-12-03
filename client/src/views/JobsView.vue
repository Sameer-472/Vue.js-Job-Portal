<script setup>
import JobListing from '@/components/JobListing.vue';
import axios from 'axios';
import { onMounted, reactive } from 'vue';

const state = reactive({
    jobs: [],
    isLoading: true
});

onMounted(async () => {
    try {
        const response = await axios.get('http://localhost:5000/jobs');
        state.jobs = response.data
        return data
    } catch (error) {
        console.log(error);
    } finally {
        state.isLoading = false
    }
});

</script>

<template>
    <section class="bg-blue-50 px-4 py-10">
        <h2 class="text-3xl font-bold text-green-500 mb-6 text-center">
            Browse Jobs
        </h2>
        <div v-if="isLoading">
            <div class="">Loading data...</div>
        </div>
        <div v-else class="grid grid-cols-1 md:grid-cols-3 gap-6 m-10">
            <JobListing v-for="job in state.jobs" :key="job?.id" :job="job" />
        </div>
    </section>
</template>