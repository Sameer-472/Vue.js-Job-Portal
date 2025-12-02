<script setup>
import { computed, defineProps, ref } from 'vue';
import { RouterLink, useRoute } from 'vue-router';


const props = defineProps({
  job: Object
});

const route = useRoute();
const jobId = route.params.jobId

const showFullDescription = ref(false);

const toggleDescription = () => {
  showFullDescription.value = !showFullDescription.value;
}

console.log("props.job" , props.job)

const truncatedDescription = computed(() => {
  let description = props?.job?.description;
  if (!showFullDescription.value) {
    description = description.substring(0, 90) + '....';
  }
  return description
})

console.log("Job is lisitng", props.job);
// console.log(truncatedDescription)

</script>

<template>
  <div 
    class="bg-white border border-slate-200 rounded-lg p-6 hover:shadow-lg transition-shadow  group">
    <!-- <div class="p-4">
      <div class="mb-6">
        <div class="text-gray-600 my-2">{{ job?.type }}</div>
        <h3 class="text-xl font-bold">{{ job?.title }}</h3>
      </div>

      <div class="mb-5">
        <div>
          {{ truncatedDescription }}
        </div>
        <button @click="toggleDescription" class="text-green-500 hover:text-green-600 mb-5">
          {{ showFullDescription ? 'Less' : 'More' }}
        </button>
      </div>

      <h3 class="text-green-500 mb-2">{{ job.salary }} / Year</h3>

      <div class="border border-gray-100 mb-5"></div>

      <div class="flex flex-col lg:flex-row justify-between mb-4">
        <div class="text-orange-700 mb-3">
          <i class="pi pi-map-marker text-orange-700"></i>
          {{ job.location }}
        </div>
      </div>
    </div> -->
    <div class="flex items-start justify-between mb-4">
      <div class="flex items-start gap-4">
        <!-- <div
          class="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
          {{ job?.company.charAt(0) }}
        </div> -->
        <div>
          <h3 class="text-lg font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
            {{ job.title }}
          </h3>
          <p class="text-slate-600">{{ job.company?.name }}</p>
        </div>
      </div>
      <button class="text-slate-400 hover:text-blue-600 transition-colors">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M5 5a2 2 0 012-2h6a2 2 0 012 2v12a2 2 0 01-2 2H7a2 2 0 01-2-2V5z"></path>
        </svg>
      </button>
    </div>

    <p class="text-slate-600 mb-4">{{ job.description }}</p>

    <div class="flex flex-wrap gap-2 mb-4">
      <span class="inline-block px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm">{{ job.type }}</span>
      <!-- <span class="inline-block px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm">{{ job.level }}</span> -->
      <span class="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">{{ job.salary }}</span>
    </div>

    <div class="flex items-center justify-between">
      <div class="flex items-center gap-4 text-sm text-slate-500">
        <span>📍 {{ job?.location || "ME Digital Group" }}</span>
        <!-- <span>⏱️ {{ job?.posted || "12-10-2025"}}</span> -->
      </div>
      <RouterLink :to="'jobs/' + job?.id"
        class="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-medium">
        View Details
      </RouterLink>
    </div>

  </div>
</template>