<script setup>
import axios from 'axios';
import { onMounted, reactive } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const state = reactive({
    job: Object,
    isLoading: true
});

// defineProps({
//     job: {
//         type: Object,
//         required: true
//     }
// })

defineEmits(['back'])
const route = useRoute();
const router = useRouter();

const jobId = route.params.id;

const {job}  = state

console.log("jobId", jobId);
console.log(job);

onMounted(async () => {
    try {
        const response = await axios.get(`http://localhost:5000/jobs/${jobId}`);
        console.log("response.data", response.data)
        state.job = response.data;
        console.log("job details", state.job);
    } catch (error) {
        console.log("Error while fetching job details", error)
    }
    finally {
        state.isLoading = false;
    }
})

const deleteJob = (async () => {
    try {
        await axios.delete(`http://localhost:5000/jobs/${jobId}`);
        router.push('/jobs');
    } catch (error) {
        console.log("getting error on deleting job", error)
    }
})
</script>

<template>
    <div class="bg-white">
        <!-- Back Button -->
        <div class="max-w-5xl mx-auto px-6 py-6">
            <button @click="$emit('back')"
                class="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                </svg>
                Back to Jobs
            </button>
        </div>

        <!-- Job Header -->
        <section class="bg-gradient-to-b from-blue-50 to-white border-b border-slate-200">
            <div class="max-w-5xl mx-auto px-6 py-12">
                <div class="flex items-start justify-between mb-6">
                    <div class="flex items-start gap-4">
                        <div
                            class="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-white text-2xl font-bold">
                            {{ job.company?.name?.charAt(0) }}
                        </div>
                        <div>
                            <h1 class="text-4xl font-bold text-slate-900 mb-2">{{ state.job.title }}</h1>
                            <p class="text-xl text-slate-600 mb-4">{{ state.job.company?.name }}</p>
                            <div class="flex flex-wrap gap-3">
                                <span
                                    class="inline-block px-4 py-2 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium">{{
                                        state.job?.type }}</span>

                                <span v-if="!!state.job?.level?.length"
                                    class="inline-block px-4 py-2 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium">{{
                                        state.job?.level }}</span>
                                <span
                                    class="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-lg text-sm font-medium">{{
                                        state.job?.salary }}</span>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col gap-2 text-right text-sm text-slate-600">
                        <span>📍 {{ state.job?.location }}</span>
                        <span>⏱️ {{ state.job?.posted }}</span>
                    </div>
                </div>
            </div>
        </section>

        <!-- Main Content -->
        <div class="max-w-5xl mx-auto px-6 py-12 grid grid-cols-3 gap-12">
            <!-- Left Column - Job Details -->
            <div class="col-span-2">
                <!-- About Company -->
                <section class="mb-12">
                    <h2 class="text-2xl font-bold text-slate-900 mb-4">About {{ job.company?.name }}</h2>
                    <p class="text-slate-600 leading-relaxed mb-4">{{ state?.job?.about }}</p>
                </section>

                <!-- Job Description -->
                <section class="mb-12">
                    <h2 class="text-2xl font-bold text-slate-900 mb-4">Job Description</h2>
                    <p class="text-slate-600 leading-relaxed mb-6">{{ state.job?.description }}</p>
                </section>

                

                <!-- Responsibilities -->
                <section v-if="!!state.job.responsibilities?.length" class="mb-12">
                    <h2 class="text-2xl font-bold text-slate-900 mb-4">Responsibilities</h2>
                    <ul class="space-y-3">
                        <li v-for="(responsibility, index) in state?.job?.responsibilities" :key="index"
                            class="flex gap-3 text-slate-600">
                            <span class="text-blue-600 font-bold">•</span>
                            <span>{{ responsibility }}</span>
                        </li>
                    </ul>
                </section>

                <!-- Requirements -->
                <section v-if="!!state.requirements?.length" class="mb-12">
                    <h2 class="text-2xl font-bold text-slate-900 mb-4">Requirements</h2>
                    <ul class="space-y-3">
                        <li v-for="(requirement, index) in state.job.requirements" :key="index"
                            class="flex gap-3 text-slate-600">
                            <span class="text-blue-600 font-bold">•</span>
                            <span>{{ requirement }}</span>
                        </li>
                    </ul>
                </section>

                <!-- Benefits -->
                <section v-if="!!state.job.benefits?.length" class="mb-12">
                    <h2 class="text-2xl font-bold text-slate-900 mb-4">Benefits & Perks</h2>
                    <div class="grid grid-cols-2 gap-4">
                        <div v-for="(benefit, index) in state.job.benefits" :key="index"
                            class="flex gap-3 p-4 bg-slate-50 rounded-lg">
                            <span class="text-green-600 font-bold">✓</span>
                            <span class="text-slate-600">{{ benefit }}</span>
                        </div>
                    </div>
                </section>

                <!-- Skills -->
                <section v-if="!!state.job.skills?.length" class="mb-12">
                    <h2 class="text-2xl font-bold text-slate-900 mb-4">Required Skills</h2>
                    <div class="flex flex-wrap gap-2">
                        <span v-for="skill in state.job.skills" :key="skill"
                            class="px-4 py-2 bg-blue-100 text-blue-700 rounded-full font-medium text-sm">
                            {{ skill }}
                        </span>
                    </div>
                </section>
            </div>

            <!-- Right Column - Sidebar -->
            <div class="col-span-1">
                <!-- Apply Card -->
                <div class="bg-slate-50 rounded-lg p-8 sticky top-24">
                    <div class="mb-6">
                        <h3 class="text-lg font-bold text-slate-900 mb-2">Ready to apply?</h3>
                        <p class="text-sm text-slate-600 mb-6">Click the button below to submit your application</p>
                        <button
                            class="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-bold mb-3">
                            Apply Now
                        </button>
                        <button
                            class="w-full px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-bold">
                            Save Job
                        </button>
                    </div>

                    <hr class="border-slate-200 my-6">

                    <!-- Job Meta -->
                    <div class="space-y-4">
                        <div>
                            <p class="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1">Job Type</p>
                            <p class="text-slate-900 font-medium">{{ job.type }}</p>
                        </div>
                        <div>
                            <p class="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1">Experience
                                Level</p>
                            <p class="text-slate-900 font-medium">{{ job.level }}</p>
                        </div>
                        <div>
                            <p class="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1">Salary Range
                            </p>
                            <p class="text-slate-900 font-medium">{{  state.job.salary }}</p>
                        </div>
                        <div>
                            <p class="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1">Location</p>
                            <p class="text-slate-900 font-medium">{{  state.job.location }}</p>
                        </div>
                        <div>
                            <p class="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1">Posted</p>
                            <p class="text-slate-900 font-medium">{{  state.job.posted }}</p>
                        </div>
                    </div>

                    <hr class="border-slate-200 my-6">

                    <!-- Share -->
                    <p class="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-3">Share This Job</p>
                    <div class="flex gap-2">
                        <button
                            class="flex-1 p-2 bg-white border border-slate-200 rounded-lg hover:bg-slate-100 transition-colors text-slate-600 font-bold">
                            LinkedIn
                        </button>
                        <button
                            class="flex-1 p-2 bg-white border border-slate-200 rounded-lg hover:bg-slate-100 transition-colors text-slate-600 font-bold">
                            Twitter
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Similar Jobs Section -->
        <section class="bg-slate-50 py-12">
            <div class="max-w-5xl mx-auto px-6">
                <h2 class="text-3xl font-bold text-slate-900 mb-8">Similar Jobs</h2>
                <div class="grid grid-cols-3 gap-6">
                    <div v-for="n in 3" :key="n"
                        class="bg-white rounded-lg p-6 border border-slate-200 hover:shadow-lg transition-shadow cursor-pointer">
                        <div class="flex items-start gap-3 mb-4">
                            <div
                                class="w-10 h-10 bg-gradient-to-br from-slate-400 to-slate-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                                S
                            </div>
                            <div class="flex-1">
                                <h3 class="font-semibold text-slate-900">Related Position {{ n }}</h3>
                                <p class="text-sm text-slate-500">Company Name</p>
                            </div>
                        </div>
                        <p class="text-slate-600 text-sm mb-4">Similar role description goes here</p>
                        <div class="flex justify-between items-center">
                            <span class="text-sm text-slate-500">$80k - $120k</span>
                            <button
                                class="px-3 py-1 text-blue-600 border border-blue-600 rounded text-sm hover:bg-blue-50 transition-colors font-medium">
                                View
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Footer CTA -->
        <section class="bg-blue-600 text-white py-12">
            <div class="max-w-5xl mx-auto px-6 text-center">
                <h2 class="text-3xl font-bold mb-3">Interested in this role?</h2>
                <p class="text-lg text-blue-100 mb-6">Submit your application today. Our team will review it within 48
                    hours.</p>
                <button
                    class="px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-slate-100 transition-colors font-bold">
                    Apply Now
                </button>
            </div>
        </section>
    </div>
</template>


<style scoped>
/* Optional: Add any additional scoped styles if needed */
</style>
