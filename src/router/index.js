import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Demographics',
        component: () => import('@/views/Demographics.vue')
    },
    {
        path: '/gmsi/:userId',
        name: 'GMSI',
        component: () => import('@/views/GMSI.vue')
    },
    {
        path: '/proms/:userId',
        name: 'PROMS',
        component: () => import('@/views/PROMS.vue')
    },
    {
        path: '/nasa/:userId',
        name: 'NASA',
        component: () => import('@/views/NASA.vue')
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
