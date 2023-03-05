import { createRouter, createWebHistory } from 'vue-router'

import Diary from '../pages/Diary.vue'
import Index from '../pages/Index.vue'


const routes = [
    {
        path: '/',
        name: 'index',
        component: Index
    },
    {
        path: '/diary',
        name: 'diary',
        component: Diary
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
