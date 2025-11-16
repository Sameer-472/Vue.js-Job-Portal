import HomeView from "@/views/HomeView.vue";

const { createRouter , createWebHistory} = require("vue-router");

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        }
    ]
})