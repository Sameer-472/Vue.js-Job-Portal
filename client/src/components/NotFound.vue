<script setup>
import { RouterLink } from 'vue-router';


</script>

<template>
    <div class="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
        <h1 class="text-6xl font-bold text-gray-800">404</h1>
        <p class="text-xl text-gray-600 mt-2">Oops! Page not found.</p>

        <p class="text-gray-500 mt-2 text-center max-w-md">
            The page you're looking for doesn't exist or has been moved.
        </p>

        <div class="mt-6">
            <RouterLink to="/" class="px-6 py-3 bg-green-600 text-white rounded-lg shadow hover:bg-green-700">
                Go Back Home
            </RouterLink>
        </div>
    </div>
</template>