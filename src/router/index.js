import { createRouter, createWebHistory } from "vue-router"

const routes = [
    {
        path: '/', 
        name: 'name',
        component: () => import('../views/index.vue')
    },
    {
        path: '/:pathMatch(.*)',
        name: '404',
        component: () => import('../views/404.vue'),
        meta: {keepAlive: false,noCache: true}
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes, 
})

export default router