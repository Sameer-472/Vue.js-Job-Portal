<script setup>
import { onMounted, ref } from 'vue';
import JobsData from "@/jobs.json"
import { defineProps } from 'vue';
import JobListing from './JobListing.vue';
import axios from 'axios';


defineProps({
    isLoading: {
        type: Boolean,
        default: false,
    },
    showButton: {
        type: Boolean,
        default: false
    }

});

const jobs = ref([]);
// same as useEffect in react 
onMounted(async () => {
    try {
        const response = await axios.get("http://localhost:5000/jobs");
        jobs.value = response.data;
        console.log("jobs.value", jobs.value)
    } catch (error) {
        console.log("error", error)
    }
})



</script>
<template>
    <div class="container-xl lg:container m-auto">
        <h2 class="text-3xl font-bold text-green-500 mb-6 text-center">
            Browse Jobs
        </h2>

        <div class="grid grid-cols-3 gap-8 my-10 mx-[15px]">
            <JobListing v-for="job in jobs" :key="job.id" :job="job"/>
        </div>
        <!-- <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div v-for="job in jobs.jobs" :key="job.id">
                {{ job.title }}
            </div>
        </div> -->
        <!-- Show loading spinner while loading is true -->
            <!-- <div v-if="state.isLoading" class="text-center text-gray-500 py-6">
            <PulseLoader />
        </div> -->

            <!-- Shoe job listing when done loading -->
            <!-- <div v-else class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <JobListing v-for="job in state.jobs.slice(0, limit || state.jobs.length)" :key="job.id" :job="job" />
        </div> -->

    </div>

    <!-- <section v-if="showButton" class="m-auto max-w-lg my-10 px-6">
        <RouterLink to="/jobs" class="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700">View
            All Jobs</RouterLink>
    </section> -->
    <section v-if="showButton">
        View All Jobs
    </section>
</template>