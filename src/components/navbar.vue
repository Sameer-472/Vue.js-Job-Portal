<script setup>
import logo from '@/assets/logo.svg'
import { useRoute } from 'vue-router';

const isActiveLink = (currentRoute) => {
    const route = useRoute();
    return route.path === currentRoute
}
</script>

<template>
    <!-- <nav class="bg-green-700 border-b border-green-500">
        <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div class="flex h-20 items-center justify-between">
                <div class="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
                    <img class="h-10 w-auto" :src="logo" alt="Vue Jobs" />
                    <span class="hidden md:block text-white text-2xl font-bold ml-2">Vue Jobs</span>
                    <div class="md:ml-auto">
                        <div class="flex space-x-2">
                            <RouterLink to="/"
                                :class="[isActiveLink('/') ? 'bg-green-900' : 'hover:bg-gray-300', 'text-white', 'px-3', 'py-2', 'rounded-md']">
                                Home</RouterLink>
                            <RouterLink to="/jobs"
                                :class="[isActiveLink('/jobs') ? 'bg-green-900' : 'hover:bg-gray-300', 'text-white', 'px-3', 'py-2', 'rounded-md']">
                                Jobs</RouterLink>
                            <a to="/jobs/add"
                                :class="[isActiveLink('/jobs-add') ? 'bg-green-900' : 'hover:bg-gray-300', 'text-white', 'px-3', 'py-2', 'rounded-md']">Add
                                Job</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav> -->

    <!-- Header/Navigation -->
    <header class="border-b border-slate-200 bg-white sticky top-0 z-50">
        <nav class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <div class="flex items-center gap-2">
                <div class="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg"></div>
                <span class="text-xl font-bold text-slate-900">JobHub</span>
            </div>
            <div class="flex items-center gap-6">
                <RouterLink to="/" :class="[isActiveLink('/') ? 'text-slate-900 ' : 'text-slate-600' , 'hover:text-slate-900 font-medium']">Browse Jobs</RouterLink>
                <!-- <button class="text-slate-600 hover:text-slate-900 font-medium">For Companies</button> -->
                <RouterLink to="/jobs/add-job" class="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    Post a Job
                </RouterLink> 
            </div>
        </nav>
    </header>
</template>