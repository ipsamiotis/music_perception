import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Introduction',
        component: () => import('@/views/Introduction.vue')
    },
    {
        path: '/demographics/:userId',
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
        path: '/dkeffect/:userId',
        name: 'DKEffect',
        component: () => import('@/views/DKEffect.vue')
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
