<script setup>
import axios from 'axios';
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import { ref } from 'vue'

const router = useRouter();

const currentStep = ref(0)
const steps = ['Basic Info', 'Details', 'Benefits']

const emit = defineEmits(['back', 'submitted'])

const handleSubmit = async () => {
    try {
        await axios.post("http://localhost:5000/jobs", { ...formData });
        emit('submitted', formData);
        router.push("/jobs")
    } catch (error) {
        console.log("error while creating new job", error)
    }
}

const formData = reactive({
    title: '',
    company: '',
    type: '',
    experience: '',
    location: '',
    minSalary: '',
    maxSalary: '',
    description: '',
    responsibilities: '',
    requirements: '',
    benefits: '',
    skills: '',
    featured: false
});

</script>

<template>
    <div class="min-h-screen bg-slate-50 py-12">
        <div class="max-w-4xl mx-auto px-6">
            <!-- Header -->
            <div class="mb-8">
                <button @click="emit('back')"
                    class="text-blue-600 hover:text-blue-700 font-medium mb-4 flex items-center gap-2">
                    ← Back
                </button>
                <h1 class="text-4xl font-bold text-slate-900 mb-2">Post a New Job</h1>
                <p class="text-slate-600 text-lg">Fill in the details below to post your job listing</p>
            </div>

            <!-- Progress Indicator -->
            <div class="mb-8 flex items-center gap-4">
                <div v-for="(step, index) in steps" :key="index" class="flex items-center gap-2">
                    <div :class="[
                        'w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all',
                        currentStep > index
                            ? 'bg-blue-600 text-white'
                            : currentStep === index
                                ? 'bg-blue-600 text-white ring-4 ring-blue-200'
                                : 'bg-slate-200 text-slate-600'
                    ]">
                        {{ index + 1 }}
                    </div>
                    <span :class="[
                        'font-medium',
                        currentStep >= index ? 'text-slate-900' : 'text-slate-400'
                    ]">
                        {{ step }}
                    </span>
                    <div v-if="index < steps.length - 1" :class="[
                        'flex-1 h-1 mx-2',
                        currentStep > index ? 'bg-blue-600' : 'bg-slate-200'
                    ]"></div>
                </div>
            </div>

            <!-- Form -->
            <form @submit.prevent="handleSubmit" class="bg-white rounded-xl shadow-sm border border-slate-200 p-8">

                <!-- Step 1: Basic Job Information -->
                <div v-if="currentStep === 0" class="space-y-6">
                    <div>
                        <label class="block text-sm font-semibold text-slate-900 mb-2">Job Title *</label>
                        <input v-model="formData.title" type="text" placeholder="e.g., Senior Frontend Developer"
                            class="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required />
                    </div>

                    <div class="grid grid-cols-2 gap-6">
                        <div>
                            <label class="block text-sm font-semibold text-slate-900 mb-2">Company Name *</label>
                            <input v-model="formData.company" type="text" placeholder="Your company name"
                                class="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required />
                        </div>
                        <div>
                            <label class="block text-sm font-semibold text-slate-900 mb-2">Job Type *</label>
                            <select v-model="formData.type"
                                class="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required>
                                <option value="">Select job type</option>
                                <option value="Full-time">Full-time</option>
                                <option value="Part-time">Part-time</option>
                                <option value="Contract">Contract</option>
                                <option value="Freelance">Freelance</option>
                                <option value="Internship">Internship</option>
                            </select>
                        </div>
                    </div>

                    <div class="grid grid-cols-2 gap-6">
                        <div>
                            <label class="block text-sm font-semibold text-slate-900 mb-2">Experience Level *</label>
                            <select v-model="formData.experience"
                                class="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required>
                                <option value="">Select level</option>
                                <option value="Entry-level">Entry-level</option>
                                <option value="Mid-level">Mid-level</option>
                                <option value="Senior">Senior</option>
                                <option value="Lead">Lead</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-sm font-semibold text-slate-900 mb-2">Location *</label>
                            <input v-model="formData.location" type="text"
                                placeholder="e.g., San Francisco, CA or Remote"
                                class="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required />
                        </div>
                    </div>

                    <div class="grid grid-cols-2 gap-6">
                        <div>
                            <label class="block text-sm font-semibold text-slate-900 mb-2">Minimum Salary (in thousands)
                                *</label>
                            <input v-model="formData.minSalary" type="number" placeholder="e.g., 80"
                                class="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required />
                        </div>
                        <div>
                            <label class="block text-sm font-semibold text-slate-900 mb-2">Maximum Salary (in thousands)
                                *</label>
                            <input v-model="formData.maxSalary" type="number" placeholder="e.g., 120"
                                class="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required />
                        </div>
                    </div>
                </div>

                <!-- Step 2: Job Details -->
                <div v-else-if="currentStep === 1" class="space-y-6">
                    <div>
                        <label class="block text-sm font-semibold text-slate-900 mb-2">Job Description *</label>
                        <textarea v-model="formData.description"
                            placeholder="Provide a compelling overview of the role and what makes it unique" rows="4"
                            class="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                            required></textarea>
                        <p class="text-sm text-slate-500 mt-2">{{ formData.description.length }}/500 characters</p>
                    </div>

                    <div>
                        <label class="block text-sm font-semibold text-slate-900 mb-2">Responsibilities *</label>
                        <textarea v-model="formData.responsibilities"
                            placeholder="List key responsibilities (one per line)" rows="5"
                            class="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                            required></textarea>
                        <p class="text-sm text-slate-500 mt-2">Enter each responsibility on a new line</p>
                    </div>

                    <div>
                        <label class="block text-sm font-semibold text-slate-900 mb-2">Requirements *</label>
                        <textarea v-model="formData.requirements"
                            placeholder="List required qualifications and skills (one per line)" rows="5"
                            class="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                            required></textarea>
                        <p class="text-sm text-slate-500 mt-2">Enter each requirement on a new line</p>
                    </div>
                </div>

                <!-- Step 3: Benefits & Skills -->
                <div v-else-if="currentStep === 2" class="space-y-6">
                    <div>
                        <label class="block text-sm font-semibold text-slate-900 mb-2">Benefits *</label>
                        <textarea v-model="formData.benefits" placeholder="List job benefits (one per line)" rows="5"
                            class="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                            required></textarea>
                        <p class="text-sm text-slate-500 mt-2">Enter each benefit on a new line</p>
                    </div>

                    <div>
                        <label class="block text-sm font-semibold text-slate-900 mb-2">Required Skills *</label>
                        <input v-model="formData.skills" type="text"
                            placeholder="Enter skills separated by commas (e.g., React, TypeScript, Tailwind)"
                            class="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required />
                        <div v-if="formData.skills" class="flex flex-wrap gap-2 mt-3">
                            <span v-for="skill in formData.skills.split(',').map(s => s.trim()).filter(s => s)"
                                :key="skill" class="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                                {{ skill }}
                            </span>
                        </div>
                    </div>

                    <div>
                        <label class="flex items-center gap-3">
                            <input v-model="formData.featured" type="checkbox"
                                class="w-5 h-5 border-slate-300 rounded" />
                            <span class="text-sm font-medium text-slate-900">Mark as featured job (premium)</span>
                        </label>
                    </div>
                </div>

                <!-- Navigation Buttons -->
                <div class="flex justify-between gap-4 mt-8 pt-8 border-t border-slate-200">
                    <button v-if="currentStep > 0" type="button" @click="currentStep--"
                        class="px-6 py-3 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors font-medium">
                        Previous
                    </button>
                    <div v-else></div>

                    <div class="flex gap-3">
                        <button type="button" @click="emit('back')"
                            class="px-6 py-3 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors font-medium">
                            Cancel
                        </button>
                        <button v-if="currentStep < steps.length - 1" type="button" @click="currentStep++"
                            class="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
                            Next
                        </button>
                        <button v-else type="submit"
                            class="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium">
                            Post Job
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<!-- <script setup>




const submitForm = () => {
  if (validateForm()) {
    emit('submitted', formData.value)
    formData.value = {
      jobTitle: '',
      company: '',
      jobType: '',
      experience: '',
      location: '',
      minSalary: '',
      maxSalary: '',
      description: '',
      responsibilities: '',
      requirements: '',
      benefits: '',
      skills: '',
      featured: false
    }
    currentStep.value = 0
  }
}

const validateForm = () => {
  return (
    formData.value.jobTitle.trim() &&
    formData.value.company.trim() &&
    formData.value.jobType &&
    formData.value.experience &&
    formData.value.location.trim() &&
    formData.value.minSalary &&
    formData.value.maxSalary &&
    formData.value.description.trim() &&
    formData.value.responsibilities.trim() &&
    formData.value.requirements.trim() &&
    formData.value.benefits.trim() &&
    formData.value.skills.trim()
  )
}

const emit = defineEmits(['back', 'submitted'])[1]
</script> -->
