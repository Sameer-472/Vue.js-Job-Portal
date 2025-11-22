import NotFound from "@/components/NotFound.vue";
import AddJob from "@/views/AddJob.vue";
import HomeView from "@/views/HomeView.vue";
import JobDetails from "@/views/JobDetails.vue";
import JobsView from "@/views/JobsView.vue";
import { createRouter , createWebHistory } from "vue-router";
// const { createRouter , createWebHistory} = require("vue-router");

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/jobs',
            name: 'job',
            component: JobsView
        },
        {
            path: '/jobs/:id',
            name: 'jobDetails',
            component: JobDetails
        },
        {
            path: '/jobs/add-job',
            name: 'addJob',
            component: AddJob
        },
        {
            path: '/:catchAll(.*)',
            name: 'not-found',
            component: NotFound
        }
    ]
})

export default router;