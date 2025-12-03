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
    <!-- Hero Section -->
    <section class="max-w-7xl mx-auto px-6 py-16">
        <div class="text-center mb-12">
            <h1 class="text-5xl font-bold text-slate-900 mb-4">Find Your Dream Job</h1>
            <p class="text-xl text-slate-600 mb-8">Explore thousands of job opportunities with all the information you
                need.</p>

            <!-- Search Bar -->
            <div class="flex gap-3 max-w-2xl mx-auto mb-4">
                <input v-model="searchQuery" type="text" placeholder="Job title or keyword..."
                    class="flex-1 px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <input v-model="locationFilter" type="text" placeholder="Location..."
                    class="flex-1 px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <button
                    class="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
                    Search
                </button>
            </div>

            <!-- Filter Tags -->
            <div class="flex flex-wrap gap-2 justify-center">
                <button v-for="tag in ['Remote', 'Full-time', 'Startup', 'Entry-level']" :key="tag"
                    class="px-3 py-1 bg-slate-200 text-slate-700 rounded-full text-sm hover:bg-slate-300 transition-colors">
                    {{ tag }}
                </button>
            </div>
        </div>


    </section>

    <section class="bg-blue-50 py-12">
        <div class="max-w-7xl mx-auto px-6">
            <div class="grid grid-cols-3 gap-8 text-center">
                <div>
                    <p class="text-4xl font-bold text-blue-600">15,000+</p>
                    <p class="text-slate-600">Active Jobs</p>
                </div>
                <div>
                    <p class="text-4xl font-bold text-blue-600">50,000+</p>
                    <p class="text-slate-600">Companies</p>
                </div>
                <div>
                    <p class="text-4xl font-bold text-blue-600">100,000+</p>
                    <p class="text-slate-600">Successful Hires</p>
                </div>
            </div>
        </div>
    </section>
    <!-- <HomeCards /> -->
</template>