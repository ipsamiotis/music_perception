import { createRouter, createWebHistory } from 'vue-router' //, createWebHashHistory
import Home from '../views/Home.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        children: [
            {
                path: 'demographics',
                name: 'Demographics',
                component: () => import('@/views/Demographics.vue'),
            },
            {
                path: 'gmsi',
                name: 'GMSI',
                component: () => import('@/views/GMSI.vue')
            },
            {
                path: 'proms',
                name: 'PROMS',
                component: () => import('@/views/PROMS.vue')
            },
            {
                path: 'nasa',
                name: 'NASA',
                component: () => import('@/views/NASA.vue')
            }
        ]
    },
    {
        path: '/final',
        name: 'Final',
        component: () => import('@/views/Final.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
