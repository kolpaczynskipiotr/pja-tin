import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage,
        },
        {
            path: '/contact',
            name: 'contact',
            component: () => import('../pages/ContactPage.vue'),
        },
        {
            path: '/listing',
            name: 'listing',
            component: () => import('../pages/ListingPage.vue'),
        },
    ],
})

export default router
