import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        path: '/:userId',
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
        path: '/equipment/:userId',
        name: 'Equipment',
        component: () => import('@/views/Equipment.vue')
    },
    {
        path: '/proms/:userId',
        name: 'PROMS',
        component: () => import('@/views/PROMS.vue')
    },
    {
        path: '/progress/:userId',
        name: 'AfterPROMS',
        component: () => import('@/views/AfterPROMS.vue')
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
        path: '/feedback/:userId',
        name: 'Feedback',
        component: () => import('@/views/Feedback.vue')
    },
    {
        path: '/final',
        name: 'Final',
        component: () => import('@/views/Final.vue')
    }
]

const router = createRouter({
    // base: "/music_perception/",
    history: createWebHashHistory(),
    routes
})

export default router
