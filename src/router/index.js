import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import FAQ from '../pages/FAQ.vue'
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('@/views/HomeView.vue'),
        },
        {
            path: '/faq',
            name: 'faq',
            component: () => import('@/pages/FAQ.vue'),
        },
        {
            path: '/analytics',
            name: 'analytics',
            component: () => import('@/pages/Analytics.vue')
        },
        {
            path: '/skins',
            name: 'skins',
            component: () => import('@/pages/Skins.vue')
        },
        {
            path: '/guarantees',
            name: 'guarantees',
            component: () => import('@/pages/Guarantees.vue')
        },
        {
            path: '/contacts',
            name: 'contacts',
            component: () => import('@/pages/Contacts.vue')
        },
    ],
})
export default router