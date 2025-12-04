<template>
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-white px-4">
    <div class="w-full max-w-md">
      <!-- Logo -->
      <div class="text-center mb-8">
        <div class="flex items-center justify-center gap-2 mb-4">
          <div class="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg"></div>
          <span class="text-2xl font-bold text-slate-900">JobHub</span>
        </div>
        <h1 class="text-3xl font-bold text-slate-900">Welcome Back</h1>
        <p class="text-slate-600 mt-2">Sign in to your account to continue</p>
      </div>

      <!-- Login Form -->
      <form @submit.prevent="handleLogin" class="space-y-4">
        <!-- Email Input -->
        <div>
          <label class="block text-sm font-semibold text-slate-900 mb-2">Email Address</label>
          <input
            v-model="email"
            type="email"
            placeholder="you@example.com"
            required
            class="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          />
        </div>

        <!-- Password Input -->
        <div>
          <label class="block text-sm font-semibold text-slate-900 mb-2">Password</label>
          <div class="relative">
            <input
              v-model="password"
              :type="showPassword ? 'text' : 'password'"
              placeholder="Enter your password"
              required
              class="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
            <button
              type="button"
              @click="showPassword = !showPassword"
              class="absolute right-3 top-3 text-slate-500 hover:text-slate-700"
            >
              {{ showPassword ? '🙈' : '👁️' }}
            </button>
          </div>
        </div>

        <!-- Remember Me & Forgot Password -->
        <div class="flex items-center justify-between">
          <label class="flex items-center gap-2 text-sm text-slate-600">
            <input type="checkbox" class="w-4 h-4 rounded border-slate-300 cursor-pointer" />
            Remember me
          </label>
          <button type="button" class="text-sm text-blue-600 hover:text-blue-700 font-medium">
            Forgot password?
          </button>
        </div>

        <!-- Login Button -->
        <button
          type="submit"
          class="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors mt-6"
        >
          Sign In
        </button>
      </form>

      <!-- Divider -->
      <div class="flex items-center gap-4 my-6">
        <div class="flex-1 h-px bg-slate-300"></div>
        <span class="text-slate-500 text-sm">Or</span>
        <div class="flex-1 h-px bg-slate-300"></div>
      </div>

      <!-- Social Login -->
      <div class="space-y-3">
        <button class="w-full flex items-center justify-center gap-2 px-4 py-3 border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors text-slate-700 font-medium">
          <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
          Continue with Google
        </button>
        <button class="w-full flex items-center justify-center gap-2 px-4 py-3 border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors text-slate-700 font-medium">
          <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
          Continue with Facebook
        </button>
      </div>

      <!-- Sign Up Link -->
      <p class="text-center text-slate-600 mt-8">
        Don't have an account?
        <button @click="$emit('navigate', 'register')" class="text-blue-600 hover:text-blue-700 font-semibold">
          Sign up here
        </button>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('')
const password = ref('')
const showPassword = ref(false)

const handleLogin = () => {
  console.log('Login attempt:', { email: email.value, password: password.value })
  // Handle login logic here
}
</script>
